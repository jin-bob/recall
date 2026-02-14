import { useContext } from 'react';
import themeProviderContext from '@/context/theme/context.ts';

export default function useTheme() {
  const context = useContext(themeProviderContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
