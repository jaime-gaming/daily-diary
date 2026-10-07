const CACHE = 'diario-v9';
const ROUTE_PAGES = [];
const APP_SHELL = ['./', './index.html', ...ROUTE_PAGES, './favicon.svg', './manifest.webmanifest'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  const isHtml = event.request.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html');

  if (isHtml) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => {
          const scope = new URL(self.registration.scope);
          const route = url.pathname.startsWith(scope.pathname)
            ? url.pathname.slice(scope.pathname.length).replace(/^\/+|\/+$/g, '')
            : '';
          const routeIndex = new URL(`${route ? `${route}/` : ''}index.html`, scope).href;
          return caches.match(event.request)
            .then(cached => cached || caches.match(routeIndex))
            .then(cached => cached || caches.match(new URL('./index.html', scope).href));
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => cached))
  );
});
