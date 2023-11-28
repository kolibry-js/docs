# Configure Vue

<Environment type="client" />

Kolibry uses [Vue 3](https://v3.vuejs.org/) to render the application on the client side. You can extend the app to add custom plugins or configurations.

Create `./setup/main.ts` with the following content:

```ts
import { defineAppSetup } from '@kolibry/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

This could also be used as the main entrance of your Kolibry app to do some initializations before the app starts.

Learn more: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component).
