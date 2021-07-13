import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'speedrun.website',
  description: 'We like speedrun and open source software',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})