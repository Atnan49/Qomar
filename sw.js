/**
 * QOMAR PWA - Service Worker
 * Version: 1.0.0
 * Provides offline support, caching strategies, and asset preloading.
 */

const CACHE_NAME = 'qomar-pwa-v1.0.0';

// Core essential assets for offline shell
const CORE_ASSETS = [
    './',
    './index.html',
    './dashboard.html',
    './kosa_kata.html',
    './kuis.html',
    './video.html',
    './offline.html',
    './manifest.json',
    './favicon.ico',
    './Public/Page/dashboard.html',
    './Public/Page/kosa_kata.html',
    './Public/Page/kuis.html',
    './Public/Page/video.html',
    './css/common.css',
    './css/welcome.css',
    './css/index.css',
    './css/kosa_kata.css',
    './css/kuis.css',
    './css/video.css',
    './js/data.js',
    './js/kosa_kata.js',
    './js/quiz.js',
    './js/video.js',
    './js/pwa.js',
    './Public/Image/logo.webp',
    './Public/Image/ICON BAB 1.webp',
    './Public/Image/ICON BAB 2.webp',
    './Public/Image/ICON BAB 3.webp',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    './icons/icon-maskable-512x512.png',
    './icons/apple-touch-icon.png'
];

// Install Event - Pre-cache core app shell
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Add each asset individually to prevent one 404 from breaking the whole install
            return Promise.allSettled(
                CORE_ASSETS.map((asset) =>
                    cache.add(asset).catch((err) => {
                        console.warn(`[PWA SW] Pre-cache skipped for ${asset}:`, err);
                    })
                )
            );
        })
    );
});

// Activate Event - Clean up obsolete caches and claim clients
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            caches.keys().then((keys) => {
                return Promise.all(
                    keys.map((key) => {
                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }
                    })
                );
            }),
            self.clients.claim()
        ])
    );
});

// Fetch Event - Route requests with appropriate caching strategies
self.addEventListener('fetch', (event) => {
    const req = event.request;
    const url = new URL(req.url);

    // Only handle GET requests
    if (req.method !== 'GET') {
        return;
    }

    // Pass through videos and large media streams without caching (prevents QuotaExceededError and 206 errors)
    if (url.pathname.endsWith('.mp4') || url.pathname.includes('/Public/Video/')) {
        return;
    }

    // Strategy 1: HTML Navigation (Network-First with Cache fallback & Offline Page)
    if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
        event.respondWith(
            fetch(req)
                .then((networkRes) => {
                    if (networkRes && networkRes.status === 200) {
                        const copy = networkRes.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
                    }
                    return networkRes;
                })
                .catch(async () => {
                    const cachedRes = await caches.match(req);
                    if (cachedRes) {
                        return cachedRes;
                    }
                    // Try fallback to offline.html
                    const fallback = await caches.match('./offline.html');
                    return fallback || new Response('Aplikasi dalam mode offline', {
                        status: 503,
                        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                    });
                })
        );
        return;
    }

    // Strategy 2: Google Fonts (Stale-While-Revalidate)
    if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
        event.respondWith(
            caches.open(CACHE_NAME).then(async (cache) => {
                const cachedRes = await cache.match(req);
                const fetchPromise = fetch(req).then((networkRes) => {
                    if (networkRes && networkRes.status === 200) {
                        cache.put(req, networkRes.clone());
                    }
                    return networkRes;
                }).catch(() => null);

                return cachedRes || fetchPromise;
            })
        );
        return;
    }

    // Strategy 3: Static Assets (Cache-First with Network fallback)
    event.respondWith(
        caches.match(req).then((cachedRes) => {
            if (cachedRes) {
                return cachedRes;
            }
            return fetch(req)
                .then((networkRes) => {
                    if (networkRes && networkRes.status === 200 && (url.protocol === 'http:' || url.protocol === 'https:')) {
                        const copy = networkRes.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
                    }
                    return networkRes;
                })
                .catch(() => {
                    // Graceful fallback for missing assets
                    return new Response('', { status: 408, statusText: 'Request Timed Out / Offline' });
                });
        })
    );
});

// Listen for skipWaiting messages from app UI
self.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
