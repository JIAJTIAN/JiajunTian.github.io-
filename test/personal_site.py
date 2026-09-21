"""Offline smoke checks for the built personal site, not the upstream demos."""

from html.parser import HTMLParser
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.refs = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if name in ("href", "src") and value:
                self.refs.append(value)


def check_site(root, base):
    expected = {
        "": "CURRENT WORK",
        "research": "Following structure during reactions and flow",
        "publications": "10.1016/j.jcis.2024.12.234",
        "software": "FrameByFrame-ASWAXS",
        "cv": "Selected Presentations",
    }
    errors = []
    for route, marker in expected.items():
        file = root / route / "index.html"
        if not file.is_file():
            errors.append(f"Missing page: {file}")
            continue
        html = file.read_text(encoding="utf-8")
        if marker not in html:
            errors.append(f"Missing expected content in {route or 'About'}: {marker}")
        refs = Page(html).refs
        for asset in ("professional-theme.js", "professional-interface.css", "professional-light.css"):
            if not any(asset in ref for ref in refs):
                errors.append(f"{route or 'About'} does not load {asset}")
        for ref in refs:
            parsed = urlsplit(ref)
            if parsed.scheme or parsed.netloc or not parsed.path:
                continue
            path = unquote(parsed.path)
            if path.startswith("/"):
                if base and not (path == base or path.startswith(base + "/")):
                    errors.append(f"{route or 'About'}: missing project prefix in {ref}")
                    continue
                target = root / path[len(base):].lstrip("/")
            else:
                target = file.parent / path
            if not target.is_file() and not (target / "index.html").is_file():
                errors.append(f"{route or 'About'}: broken local reference {ref}")

    for hidden in ("gallery/index.html", "blog/2022/giscus-comments/index.html", "tmp"):
        if (root / hidden).exists():
            errors.append(f"Unpublished content included: {hidden}")

    bib = Path("_bibliography/papers.bib").read_text(encoding="utf-8")
    dois = re.findall(r"doi\s*=\s*\{([^}]+)\}", bib)
    entries = re.findall(r"@article\{", bib)
    publications = root / "publications/index.html"
    if not entries or len(dois) != len(entries):
        errors.append("Every publication must have a DOI")
    if publications.is_file():
        html = publications.read_text(encoding="utf-8")
        for doi in dois:
            if not any(doi in ref for ref in Page(html).refs):
                errors.append(f"Missing publication link: {doi}")
    if errors:
        raise SystemExit("Website checks failed:\n- " + "\n- ".join(sorted(set(errors))))
    print(f"PASS: {len(expected)} pages, local links/assets, {len(dois)} DOI links, and unpublished-content exclusions")


if __name__ == "__main__":
    check_site(Path(sys.argv[1]), sys.argv[2].rstrip("/") if len(sys.argv) > 2 else "")
