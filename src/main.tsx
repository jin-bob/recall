import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import router from '@/routing';
import './index.css';
import packageJson from '../package.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <span style={{ display: 'none' }} data-version={packageJson.version} />
  </StrictMode>
);
