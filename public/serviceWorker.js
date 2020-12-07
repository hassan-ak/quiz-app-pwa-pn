const cacheName = 'v1';

const cacheAssets = [
  './', 
  './favicoon.ico',
  './manifest.json',
  './static/js/0.chunk.js',
  './static/js/bundle.js',
  './static/js/main.chunk.js',
  './static/js/2.219f6109.chunk.js',
  './static/js/main.fa2a758f.chunk.js',
  './static/css/main.69e4d93b.chunk.css',
  './logo192.png',
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('fetch', event => {
    if (!navigator.onLine){
        event.respondWith(
            caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
            return fetch(event.request)
                .then(response => {
                    return caches.open(cacheName).then(cache => {
                        cache.put(event.request.url, response.clone());
                        return response;
                    });
                });
            }).catch(error => {})
        );
    }
});


self.addEventListener('activate', event => {
    const cacheAllowlist = [cacheName];
    event.waitUntil(
        caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames.map(cacheName => {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
            })
        );
        })
    );
});
