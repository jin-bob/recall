import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import ThemeProvider from '@/context/theme/theme-provider.tsx';
import router from '@/routing';
import './index.css';
import packageJson from '../package.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <span style={{ display: 'none' }} data-version={packageJson.version} />
    </ThemeProvider>
  </StrictMode>
);
