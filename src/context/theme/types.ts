import { Theme } from '@/constants/theme.ts';

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
