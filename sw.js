const CACHE_NAME = 'cadu-missions-v2';
const urlsToCache = [
  '/Missoes-do-Cadu/',
  '/Missoes-do-Cadu/index.html',
  '/Missoes-do-Cadu/manifest.json',
  '/Missoes-do-Cadu/icon-192.png',
  '/Missoes-do-Cadu/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
