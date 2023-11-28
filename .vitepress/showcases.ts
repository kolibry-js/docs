export interface ShowCaseInfo {
  title: string
  cover: string
  slidesLink?: string
  sourceLink?: string
  videoLink?: string
  at?: string
  datetime: string
  author: {
    name: string
    link?: string
  }
}

export const showcases: ShowCaseInfo[] = [
  {
    title: 'Github Webinar',
    cover: `${import.meta.env.BASE_URL}showcases/github-webinar.png`,
    author: {
      name: 'Dennis Ollhoff',
      link: 'https://github.com/nyxb',
    },
    slidesLink: 'https://kolibry.dev/demo/composable-vue',
    sourceLink: 'https://github.com/nyxb/talks/tree/master/2023-12-02',
    at: 'VueDay 2021',
    datetime: '2021-04-29',
  },
]
