export type Tag =
  | 'official'
  | 'dark'
  | 'light'
  | 'colorful'
  | 'minimalism'

export interface ThemeInfo {
  id: string
  name: string
  description: string
  previews: string[]
  repo?: string
  author: {
    name: string
    link?: string
  }
  link?: string
  tags?: Tag[]
}

export const official: ThemeInfo[] = [
  {
    id: '@kolibry/theme-default',
    name: 'Default',
    description: 'The minimalism default theme for Kolibry',
    author: {
      name: 'Dennis Ollhoff',
      link: 'https://github.com/nyxb',
    },
    repo: 'https://github.com/kolibry-js/themes/tree/main/packages/theme-default',
    previews: [
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-default/01.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-default/02.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-default/06.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-default/08.png',
    ],
    tags: [
      'official',
      'minimalism',
      'dark',
      'light',
    ],
  },
  {
    id: '@kolibry/theme-seriph',
    name: 'Seriph',
    description: 'A more formal looking theme using Serif fonts',
    author: {
      name: 'Dennis Ollhoff',
      link: 'https://github.com/nyxb',
    },
    repo: 'https://github.com/kolibry-js/themes/tree/main/packages/theme-seriph',
    previews: [
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-seriph/01.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-seriph/02.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-seriph/03.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-seriph/08.png',
    ],
    tags: [
      'official',
      'minimalism',
      'dark',
      'light',
    ],
  },
  {
    id: '@kolibry/theme-apple-basic',
    name: 'Apple Basic',
    description: 'Inspired by the Basic Black/White theme from Apple Keynote',
    author: {
      name: 'Dennis Ollhoff',
      link: 'https://github.com/nyxb',
    },
    repo: 'https://github.com/kolibry-js/themes/tree/main/packages/theme-apple-basic',
    previews: [
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-apple-basic/01.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-apple-basic/02.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-apple-basic/03.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-apple-basic/09.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-apple-basic/11.png',
    ],
    tags: [
      'minimalism',
      'dark',
      'light',
    ],
  },
  {
    id: '@kolibry/theme-bricks',
    name: 'Bricks',
    description: 'Building bricks',
    author: {
      name: 'Dennis Ollhoff',
      link: 'https://github.com/nyxb',
    },
    repo: 'https://github.com/kolibry-js/themes/tree/main/packages/theme-bricks',
    previews: [
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-bricks/01.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-bricks/04.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-bricks/06.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-bricks/05.png',
    ],
    tags: [
      'light',
    ],
  },
  {
    id: '@kolibry/theme-shibainu',
    name: 'Shibainu',
    description: 'Meow!',
    author: {
      name: 'Dennis Ollhoff',
      link: 'https://github.com/nyxb',
    },
    repo: 'https://github.com/kolibry-js/themes/tree/main/packages/theme-shibainu',
    previews: [
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-shibainu/01.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-shibainu/03.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-shibainu/04.png',
      'https://cdn.jsdelivr.net/gh/kolibry-js/themes@main/screenshots/theme-shibainu/09.png',
    ],
    tags: [
      'dark',
    ],
  },
]

export const community: ThemeInfo[] = [
]
