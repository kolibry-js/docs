# Global Layers

Global layers allow you to have custom components that **persistent** across slides. This could be useful for having footers, cross-slides animations, global effects, etc.

Kolibry provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.

Layers relationship:

- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)

## Example

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

The text `Your Name` will appear to all your slides.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$kolibry.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).

```html
<!-- hide the footer from Page 4 -->
<template>
  <footer
    v-if="$kolibry.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- hide the footer from "cover" layout -->
<template>
  <footer
    v-if="$kolibry.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- an example footer for pages -->
<template>
  <footer
    v-if="$kolibry.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $kolibry.nav.currentPage }} / {{ $kolibry.nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$kolibry.nav.isPresenter" class="icon-btn" title="Next" @click="$kolibry.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
