import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/about/': [
    {
      text: 'About',
      children: [
        '/about/README.md',
        '/about/faq.md'
      ]
    }
  ]
}
