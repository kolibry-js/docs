# Write a Theme

To get started, we recommend you use our generator for scaffolding your first theme

```bash
$ npm init kolibry-theme
```

Then you can modify and play with it. You can also refer to the [official themes](/themes/gallery) as examples.

## Capability

A theme can contribute to the following points:

- Global styles
- Provide default configurations (fonts, color schema, highlighters, etc.)
- Provide custom layouts or override the existing one
- Provide custom components or override the existing one
- Extend UnoCSS/Windi CSS configurations
- Configure tools like Monaco and Prism

## Conventions

Themes are published to npm registry, and they should follow the conventions below:

- Package name should start with `kolibry-theme-`, for example: `kolibry-theme-awesome`
- Add `kolibry-theme` and `kolibry` in the `keywords` field of your `package.json`

## Setup

To set up the testing playground for your theme, you can create `example.md` with the following frontmatter, to tell Kolibry you are using the current directory as a theme.

```md
---
theme: ./
---
```

Optionally, you can also add some scripts to your `packages.json`

```json
// package.json
{
  "scripts": {
    "dev": "kolibry example.md",
    "build": "kolibry build example.md",
    "export": "kolibry export example.md",
    "screenshot": "kolibry export example.md --format png"
  }
}
```

To publish your theme, simply run `npm publish` and you are good to go. There is no build process required (which means you can directly publish `.vue` and `.ts` files, Kolibry is smart enough to understand them).

Theme contribution points follow the same conventions as local customization, please refer to [the docs for the naming conventions](/custom/). 

## Default Configurations

A theme can provide default [configurations](/custom/#frontmatter-configures) via `package.json`.

```json
// package.json
{
  "kolibry": {
    "defaults": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

Fonts will be auto imported from [Google Fonts](https://fonts.google.com/).

Learn more about [fonts](/custom/fonts) and [frontmatter configurations](/custom/#frontmatter-configures).

## Theme Metadata

### Color Schema

By default, Kolibry assumes themes support both light mode and dark mode. If you only want your theme be presented in a designed color schema, you will need to specify it explicitly in `package.json`

```json
// package.json
{
  "name": "kolibry-theme-my-cool-theme",
  "keywords": [
    "kolibry-theme",
    "kolibry"
  ],
  "kolibry": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

To access the dark mode when creating your theme styles, you can wrap the dark-mode-specific css inside a `dark` class:

```css
/* general css here */

html:not(.dark) {
  /* light mode css here */
}

html.dark {
  /* dark mode css here */
}
```

Kolibry toggles a `dark` class on the page's `html` element for switching color schema.

### Highlighter

Syntax highlighting colors are also provided in the theme. We support both [Prism](https://prismjs.com/) and [Shiki](https://github.com/shikijs/shiki). For more information please refer to [the syntax highlighting docs](/custom/highlighters).

You can support either one of them, or both. Refer to the default theme for configurations examples [`./styles/code.css`](https://github.com/kolibryjs/kolibry/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/kolibryjs/kolibry/blob/main/packages/create-theme/template/setup/shiki.ts).

Also, remember to specify the supported highlighters in your `package.json`

```json
// package.json
{
  "kolibry": {
    "highlighter": "shiki" // or "prism" or "both"
  }
}
```

### Kolibry Version

If the theme is relying on a specific feature of Kolibry that are newly introduced, you can set the minimal Kolibry version required to have your theme working properly:

```json
// package.json
{
  "engines": {
    "kolibry": ">=0.19.3"
  }
}
```

If users are using older versions of Kolibry, an error will be thrown.
