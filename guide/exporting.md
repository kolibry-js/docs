# Exporting

## Slides

### PDF

> Exporting to PDF or PNG relies on [Playwright](https://playwright.dev) for rendering. You will therefore need to install [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) to use this feature.
> If you are doing exporting in a CI environment, [the playwright CI guide](https://playwright.dev/docs/ci) can be helpful.

Install `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Now export your slides to PDF using the following command

```bash
$ kolibry export
```

After a few seconds, your slides will be ready at `./slides-export.pdf`.

### PNGs and Markdown

When passing in the `--format png` option, Kolibry will export PNG images for each slide instead of a PDF.

```bash
$ kolibry export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`.

```bash
$ kolibry export --format md
```

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ kolibry export --dark
```

### Export Clicks Steps

By default, Kolibry exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` option.

```bash
$ kolibry export --with-clicks
```

### Slide range

You can also specify a range of slides to export with the `--range` option.

```bash
$ kolibry export --range 1,4-5,6
```

### PDF outline

You can generate the PDF outline by passing the `--with-toc` option.

```bash
$ kolibry export --with-toc
```

### Output filename

You can specify the output filename with the `--output` option.

```bash
$ kolibry export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export. 

```bash
$ kolibry export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10.


### Multiple entries

You can also export multiple slides at once.

```bash
$ kolibry export slides1.md slides1.md
```

Or

```bash
$ kolibry export *.md
```

In this case, each input file will generate its own PDf file.

## Presenter notes

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ kolibry export-notes
```

This command also accept multiple entries like for the [export command](#multiple-entries)

## Single-Page Application (SPA)

See [Static Hosting](/guide/hosting).

## Troubleshooting

### Timeout

For big presentation you might want to increase the playwrigth timeout with `--timeout`

```bash
$ kolibry export --timeout 60000
```

### Executable path

You can set the browser executable path for playwright using `--executable-path`

```bash
$ kolibry export --executable-path [path_to_chromium]
```
