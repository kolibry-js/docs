import { defineConfig } from 'vite-plugin-windicss'
import aspectRatio from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  extract: {
    include: [
      '**/*.md',
      '.vitepress/theme/**/*.{md,vue}',
      '.vitepress/@kolibry/client/internals/SlideContainer.vue',
      '.vitepress/@kolibry/client/layouts/*.vue',
      '.vitepress/@kolibry/theme-default/layouts/*.vue',
    ]
  },
  attributify: true,
  plugins: [
    aspectRatio,
  ],
  shortcuts: {
    'bg-main': 'bg-white dark:bg-[#111]',
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14F195',
          deep: '#9945FF',
        },
      },
      fontFamily: {
        mono: '\'IBM Plex Mono\', source-code-pro, Menlo, Monaco, Consolas, \'Courier New\', monospace',
      },
    },
  },
})
