import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { sidebar, navbar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'speedrun.website',
      description: 'Open source speedrunning website',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'speedrun.website',
      description: 'Site de speedrun open source',
    },
  },

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: {
      /** English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
      '/fr/': {
        // navbar
        navbar: navbar.fr,
        selectLanguageName: 'Français',
        selectLanguageText: 'Français',
        selectLanguageAriaLabel: 'Français',

        // sidebar
        sidebar: sidebar.fr,

        // page meta
        editLinkText: 'Editer cette page sur GitHub',
        lastUpdatedText: '<lastUpdatedText fr placeholder>',
        contributorsText: '<contributorsText fr placeholder>',
      },
    }
  },
})