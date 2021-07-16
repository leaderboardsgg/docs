import type { SidebarConfig } from '@vuepress/theme-default'

export const fr: SidebarConfig = {
  '/fr/about/': [
    {
      text: 'A propos',
      children: [
        '/fr/about/README.md',
        '/fr/about/faq.md'
      ]
    }
  ]
}
