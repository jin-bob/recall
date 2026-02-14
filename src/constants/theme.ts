const THEME = {
  dark: 'dark',
  light: 'light',
  system: 'system',
} as const;

const themes: Array<string> = Object.values(THEME);

export type Theme = (typeof THEME)[keyof typeof THEME];

export function isTheme(theme: unknown): theme is Theme {
  return typeof theme === 'string' && themes.includes(theme);
}

export default THEME;
