import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import packageJson from '../package.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <span style={{ display: 'none' }} data-version={packageJson.version} />
  </StrictMode>,
);
