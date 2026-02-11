// https://vite.dev/guide/build.html#load-error-handling

window.addEventListener('vite:preloadError', (event) => {
  window.location.reload();
});
