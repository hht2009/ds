const CACHE_NAME = 'mole-game-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/whack.mp3',
  '/background.mp3',
  // 其他需要缓存的文件
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});
