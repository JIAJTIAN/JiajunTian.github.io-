# Publication readiness

## Applied September 21, 2026

- Shortened About to research identity, two current directions, and selected papers.
- Organized Research around questions, contributions, and linked evidence; development and longer-term aims remain explicit.
- Featured FrameByFrame, with inputs, outputs, capabilities, and honest release status.
- Moved CV Experience before Education and removed subjective skill levels.
- Preserved dark/light themes and removed color transformations from scientific images.
- Disabled placeholder News and RSS; excluded demo posts/pages and temporary files from the public build. Source files remain intact.

## Publication provenance

The eight newly added DOIs were transcribed from existing publisher-page PNGs under `tmp/pdfs/first-pages/`, not inferred from article numbers or fetched from external services:

| BibTeX key           | DOI                           |
| -------------------- | ----------------------------- |
| tian2025selfassembly | 10.1016/j.jcis.2024.12.234    |
| wang2024solvent      | 10.1021/acs.langmuir.4c01846  |
| wang2022gelation     | 10.1021/acs.macromol.2c01035  |
| qiao2021cyano        | 10.1080/02678292.2020.1855480 |
| qiao2019chirality    | 10.1039/c9cc08090b            |
| li2019rewritable     | 10.1002/adma.201807751        |
| tian2018solaruv      | 10.1002/adom.201701337        |
| li2017photoswitches  | 10.1002/adom.201700014        |

Qiao 2019's previous preview is Figure 1, not a verified TOC image. Its bibliography preview field was removed; the original image remains on disk. The Tian 2025 image is explicitly labeled a graphical abstract on the publisher page. The Wang 2024 and Wang 2022 preview images appear alongside their abstracts.

## Before publication

- TODO: Run Jekyll and inspect all five primary pages in both themes and at mobile widths. Docker was unavailable during this pass; Ruby/Bundler were not available on PATH.
- TODO: Add a real, permission-cleared FrameByFrame screenshot. No mock interface has been substituted.
- TODO: Provide a current public CV PDF; do not publish application documents as a substitute.
- TODO: Verify presenter roles and talk/poster types before adding them to presentation entries. Existing author lists do not establish who presented.
- TODO: Complete Ghimire 2026 volume/issue/pages and verify the spelling of the hydrogel paper's author names against a primary source.
- TODO: Verify the remaining hydrogel and Qiao 2021 thumbnails against publisher TOC/graphical-abstract labels.
- Portrait, LinkedIn, and ORCID remain absent until supplied or verified.

To restore News, remove `_news/` and `_pages/news.md` from `_config.yml` exclusions and enable announcements in `_pages/about.md`. Gallery remains unpublished independently.
