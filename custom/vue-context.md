# Vue Global Context

Kolibry injected a [global Vue context](https://v3.vuejs.org/api/application-config.html#globalproperties) `$kolibry` for advanced conditions or navigation controls.

## Usage

You can access it anywhere in your markdown and Vue template, with the ["Mustache" syntax](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Page 1

Current page is: {{ $kolibry.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $kolibry.configs.title }}</div>
  <button @click="$kolibry.nav.next">Next Page</button>
</template>
```

## Properties

### `$clicks`

`$clicks` hold a number of clicks on the current slide. Can be used conditionally to show different content on clicks.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page` holds the number of the current page, 1-indexed.

```md
Page: {{ $page }}

Is current page active: {{ $page === $kolibry.nav.currentPage }}
```

### `$renderContext`

`$renderContext` holds the current render context, can be `slide`, `overview`, `presenter` or `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$kolibry.nav`

A reactive object holding the properties and controls of the slides navigation. For examples:

```js
$kolibry.nav.next() // go next step

$kolibry.nav.nextSlide() // go next slide (skip v-clicks)

$kolibry.nav.go(10) // go slide #10
```

```js
$kolibry.nav.currentPage // current slide number

$kolibry.nav.currentLayout // current layout id
```

For more properties available, refer to the [nav.ts](https://github.com/kolibryjs/kolibry/blob/main/packages/client/logic/nav.ts) exports.

> Note: `$kolibry.nav.clicks` is a global state while `$clicks` is local to each slide. It's recommended to **use `$clicks` over `$kolibry.nav.clicks`** to avoid clicks changed been triggered on page transitions.

### `$kolibry.configs`

A reactive object holding the parsed [configurations in the first frontmatter](/custom/#frontmatter-configures) of your `slides.md`. For example

```yaml
---
title: My First Kolibry!
---
```

```
{{ $kolibry.configs.title }} // 'My First Kolibry!'
```

### `$kolibry.themeConfigs`

A reactive object holding the parsed theme configurations.

```yaml
---
title: My First Kolibry!
themeConfig:
  primary: #213435
---
```

```
{{ $kolibry.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Available since v0.43.0

A shorthand of `$kolibry.nav`.
