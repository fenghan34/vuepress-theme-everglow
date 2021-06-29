import path from 'path'
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Everglow',
  theme: path.resolve(__dirname, '../../packages/everglow/lib/node'),
})
