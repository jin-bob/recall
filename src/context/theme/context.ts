import { createContext } from 'react';
import { ThemeProviderState } from '@/context/theme/types.ts';

const themeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export default themeProviderContext;
