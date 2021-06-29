import type {
  EverglowThemeLocaleData,
  EverglowThemeLocaleOptions,
} from '../../shared'

const defaultLocaleOptions: EverglowThemeLocaleOptions = {}

const defaultLocaleData: EverglowThemeLocaleData = {}

/**
 * Assign default options to `themeConfig`
 */
export const assignDefaultLocaleOptions = (
  localeOptions: EverglowThemeLocaleOptions
): void => {
  if (!localeOptions.locales) {
    localeOptions.locales = {}
  }

  if (!localeOptions.locales['/']) {
    localeOptions.locales['/'] = {}
  }

  Object.assign(localeOptions, {
    ...defaultLocaleOptions,
    ...localeOptions,
  })

  Object.assign(localeOptions.locales['/'], {
    ...defaultLocaleData,
    ...localeOptions.locales['/'],
  })
}
