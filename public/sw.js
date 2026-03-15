self.addEventListener('install', (event) => {
  console.log('Service Worker installé !');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Nécessaire pour que le navigateur considère la PWA comme fonctionnelle offline
  event.respondWith(fetch(event.request));
});