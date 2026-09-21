# Editing your website

Open the site folder in a text editor, edit the source file below, and save. With the local Jekyll server running, content changes normally appear after regeneration. Changes to `_config.yml` require restarting the Jekyll server.

| Content                                             | Source file                                             |
| --------------------------------------------------- | ------------------------------------------------------- |
| Homepage introduction, four panels, Current Work    | `_pages/about.md`                                       |
| Research narrative and illustration caption         | `_pages/research.md`                                    |
| Software overview                                   | `_pages/projects.md`                                    |
| FrameByFrame description                            | `_projects/data-reduction.md`                           |
| ASWAXS Collector                                    | `_projects/aswaxs-collector.md`                         |
| ASAXS extraction methods                            | `_projects/asaxs-analysis.md`                           |
| Scattering benchmarks                               | `_projects/ml-scattering.md`                            |
| Publications, authors, selected papers, TOC images  | `_bibliography/papers.bib`                              |
| CV education, experience, skills, and presentations | `_data/cv.yml`                                          |
| News                                                | `_news/announcement_1.md` (or another file in `_news/`) |
| Email and social profile identifiers                | `_data/socials.yml`                                     |
| Site name, search description, contact note, footer | `_config.yml`                                           |
| Hidden Gallery introduction and visibility          | `_pages/personal.md`                                    |
| Gallery captions and image paths                    | `_data/gallery.yml`                                     |

## Keep each page focused

- About: who you are, your research interests, and what you are working on now.
- Research: scientific questions, methods, findings, and future directions.
- Research Software: what each tool does, your contribution, and its release status.
- CV: dated professional facts and technical skills.

## Edit paragraphs and headings

In Markdown files, ordinary paragraphs can be edited directly. A line starting with `##` is a section heading. Leave a blank line between paragraphs.

Some homepage text is inside HTML tags. Replace the words while preserving the tags:

```html
<h3>OBSERVE</h3>
<p>Your revised paragraph.</p>
```

Leave `class` attributes, scripts, stylesheet links, and expressions inside `{{ }}` or `{% %}` intact when editing text.

## Edit page settings

The block between `---` lines at the top of a page contains settings. `title` controls the page title, `nav` controls its navigation link, and `nav_order` controls navigation order. Keep `permalink` unchanged unless you intend to change the page address.

The Gallery is currently hidden with both `nav: false` and `published: false`. Set both to `true` when you are ready to show it, and replace its sample content first.

## Edit YAML and publications

Preserve indentation in `.yml` files and use spaces rather than tabs. Quote a value if it contains a colon followed by a space, for example `summary: "Research focus: materials in flow."`.

In `papers.bib`, keep field values inside braces and authors separated by `and`. `selected = {true}` includes a paper on the homepage. `preview` names an image in `assets/img/publication_preview/`; omit the field when no image is available.

## Check the result

Review the changed page in both light and dark mode. Edit source files, not files under `_site`, which Jekyll regenerates. Keep personal details you do not want public out of page content and uploaded documents.
