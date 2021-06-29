import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { LocaleData } from '@vuepress/shared'

/**
 * Plugins config
 */
export interface EverglowThemePluginsOptions {
  [key: string]: any
}

export type EverglowThemeLocaleOptions = EverglowThemeData

export type EverglowThemeData = ThemeData<EverglowThemeLocaleData>

export interface EverglowThemeLocaleData extends LocaleData {
  [key: string]: any
}
