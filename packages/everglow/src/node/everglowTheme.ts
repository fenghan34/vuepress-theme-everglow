import type { Theme, ThemeConfig } from 'vuepress-vite'
import * as path from 'path'
import {
  EverglowThemeLocaleOptions,
  EverglowThemePluginsOptions,
} from '../shared/options'

export interface EverglowThemeOptions
  extends ThemeConfig,
    EverglowThemeLocaleOptions {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: EverglowThemePluginsOptions
}

export const everglowTheme: Theme<EverglowThemeOptions> = ({
  themePlugins = {},
  ...localeOptions
}) => {
  console.log('localeOptions', localeOptions)
  return {
    name: 'vuepress-theme-everglow',

    layouts: {
      Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
      404: path.resolve(__dirname, '../client/layouts/404.vue'),
      FooBar: path.resolve(__dirname, '../client/layouts/FooBar.vue'),
    },
  }
}
