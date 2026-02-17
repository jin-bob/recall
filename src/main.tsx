import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import ThemeProvider from '@/context/theme/theme-provider.tsx';
import queryClient from '@/lib/tanstack-query/query-client.ts';
import router from '@/routing';
import './index.css';
import packageJson from '../package.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <span style={{ display: 'none' }} data-version={packageJson.version} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
