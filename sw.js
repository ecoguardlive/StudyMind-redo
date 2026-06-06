// StudyMind AI — Service Worker
const CACHE = 'studymind-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/data.js',
  '/js/state.js',
  '/js/api.js',
  '/js/pdf.js',
  '/js/ui.js',
  '/js/library.js',
  '/js/quiz.js',
  '/js/flashcards.js',
  '/js/summary.js',
  '/js/chat.js',
  '/js/settings.js',
  '/js/progress.js',
  '/js/persistence.js',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Always go network-first for API calls
  if (e.request.url.includes('googleapis.com') ||
      e.request.url.includes('anthropic.com') ||
      e.request.url.includes('openai.com') ||
      e.request.url.includes('fonts.googleapis.com') ||
      e.request.url.includes('cdn.jsdelivr.net')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache-first for app shell
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return response;
      });
    })
  );
});
