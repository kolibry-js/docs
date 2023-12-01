# Configure Monaco

<Environment type="client" />

Create `./setup/monaco.ts` with the following content:

```ts
import { defineMonacoSetup } from '@kolibry/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

Learn more about [configuring Monaco](https://github.com/Microsoft/monaco-editor).

## Usage

To use Monaco in your slides, simply append `{monaco}` to your code snippets:

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

To

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Exporting

By default, Monaco will ONLY work on `dev` mode. If you would like to have it available in the exported SPA, configure it in your frontmatter:

```yaml
---
monaco: true # default "dev"
---
```

## Types Auto Installing

When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Kolibry will handle the rest to get the types working for the editor automatically!

## Configure Themes

The theme is controlled by Kolibry based on the light/dark theme. If you want to customize it, you can pass the theme id to the setup function:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@kolibry/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

If you want to load custom themes:

```ts
import { defineMonacoSetup } from '@kolibry/types'

// change to your themes
import dark from 'theme-lumos/themes/lumos-dark.json'
import light from 'theme-lumos/themes/lumos-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('lumos-light', light as any)
  monaco.editor.defineTheme('lumos-dark', dark as any)

  return {
    theme: {
      light: 'lumos-light',
      dark: 'lumos-dark',
    },
  }
})
```

> If you are creating a theme for Kolibry, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.

## Configure the Editor

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~ts
//```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
//```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@kolibry/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```
