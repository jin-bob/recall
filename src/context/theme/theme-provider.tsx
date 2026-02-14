import { type PropsWithChildren, useEffect, useState } from 'react';
import THEME, { isTheme, Theme } from '@/constants/theme.ts';
import themeProviderContext from '@/context/theme/context.ts';
import STORAGE_KEYS from '@/constants/storage-keys.ts';

type ThemeProviderProps = PropsWithChildren<{
  defaultTheme?: Theme;
  storageKey?: string;
}>;

const Provider = themeProviderContext.Provider;

export default function ThemeProvider({
  children,
  defaultTheme = THEME.system,
  storageKey = STORAGE_KEYS.theme,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storageValue = localStorage.getItem(storageKey);

    return isTheme(storageValue) ? storageValue : defaultTheme;
  });

  const onThemeChange = (theme: Theme) => {
    const newTheme = isTheme(theme) ? theme : defaultTheme;

    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(THEME.light, THEME.dark);

    if (theme !== THEME.system) {
      root.classList.add(theme);

      return;
    }

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQueryList.matches ? THEME.dark : THEME.light;

    const handlePrefersColourScheme = (event: MediaQueryListEvent) => {
      const newSystemTheme = event.matches ? THEME.dark : THEME.light;

      root.classList.remove(THEME.light, THEME.dark);
      root.classList.add(newSystemTheme);
    };

    root.classList.add(systemTheme);

    mediaQueryList.addEventListener('change', handlePrefersColourScheme);

    return () => {
      mediaQueryList.removeEventListener('change', handlePrefersColourScheme);
    };
  }, [theme]);

  return (
    <Provider value={{ theme, setTheme: onThemeChange }}>{children}</Provider>
  );
}
