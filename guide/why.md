# Why Kolibry

There are a lot of feature-rich, general-purpose, WYSIWYG slides makers like [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) and [Apple Keynote](https://www.apple.com/keynote/). They work pretty well for making nice slides with animations, charts, and many other things, while being very intuitive and easy to learn. So why bother making Kolibry?

Kolibry aims to provide the flexibility and interactivity for developers to make their presentations even more interesting, expressive, and attractive by using the tools and technologies they are already familiar with. 

When working with WYSIWYG editors, it is easy to get distracted by the styling options. Kolibry remedies that by separating the content and visuals. This allows you to focus on one thing at a time, while also being able to reuse the themes from the community. Kolibry does not seek to replace other slide deck builders entirely. Rather, it focuses on catering to the developer community.

## Kolibry

![](/screenshots/cover.png)

Here are a few of the coolest features of Kolibry:

## Markdown-based

Kolibry uses an extended Markdown format to store and organize your slides in a single plain text file, allowing you to focus on creating content. The separation of content and styles enables effortless switching between different themes.

Learn more about [Kolibry's Markdown Syntax](/guide/syntax).

## Themable

Themes for Kolibry can be shared and installed using npm packages. You then apply them with only one line of config.

Check out the [theme gallery](/themes/gallery) or [learn how to write a theme](/themes/write-a-theme).

## Developer Friendly

Kolibry provides first-class support for code snippets for developers. It supports both [Prism](https://prismjs.com/) and [Shiki](https://github.com/shikijs/shiki) to get pixel perfect syntax highlighting, while still being able to modify the code at any time. With [Monaco editor](https://microsoft.github.io/monaco-editor/) built-in, it also empowers you to do live coding / demonstration in your presentation with autocompletion, type hovering, and even TypeScript type check support.

Learn more about [highlighters](/custom/highlighters) and [Monaco configuration](/custom/config-monaco).

## Fast

Kolibry is powered by [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) and [UnoCSS](https://unocss.dev/), which give you the most wonderful authoring experience. Every change you made will reflect to your slides **instantly**.

Find more about [our tech stack](/guide/#tech-stack).

## Interactive & Expressive

You can write custom Vue components and use them directly inside your markdown file. You can also interact with them inside the presentation to express your idea in a more interesting and intuitive way.

## Recording Support

Kolibry provides built-in recording and camera view. You can share your presentation with your camera view inside, or record and save them separately for your screen and camera. All with one go, no additional tools are needed.

Learn more about [recording here](/guide/recording).

## Portable

Export your slides into PDF, PNGs, or even a hostable Single-page Application (SPA) with a single command, and share them anywhere.

Read more about that in the [exporting docs](/guide/exporting).

## Hackable

Being powered by web technologies, anything that can be done in a web app is also possible with Kolibry. For example, WebGL, API requests, iframes, or even live sharing. It's up to your imagination!

## Give it a Try

Playing around with Kolibry will tell you more than a thousand words. You are just one command away:

```bash
$ npm init kolibry
```
