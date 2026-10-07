/**
 * QOMAR PWA - Service Worker
 * Version: 2.0.0 - Full Offline
 *
 * Strategies:
 *   - HTML pages    → Cache-First (shell cached at install)
 *   - Static assets → Cache-First
 *   - Google Fonts  → Stale-While-Revalidate (cached at install too)
 *   - Videos        → Cache-First + Range-request support (cached at install)
 */

const CACHE_NAME = 'qomar-v2.0.0';

// ─── All assets to pre-cache on install ─────────────────────────────────────
const PRECACHE = [
    // Root redirectors
    './',
    './index.html',
    './offline.html',
    './manifest.json',
    './favicon.ico',

    // Shell pages (root stubs)
    './dashboard.html',
    './kosa_kata.html',
    './kuis.html',
    './video.html',

    // Real pages
    './Public/Page/dashboard.html',
    './Public/Page/kosa_kata.html',
    './Public/Page/kuis.html',
    './Public/Page/video.html',

    // CSS
    './css/common.css',
    './css/welcome.css',
    './css/index.css',
    './css/kosa_kata.css',
    './css/kuis.css',
    './css/video.css',

    // JS
    './js/data.js',
    './js/kosa_kata.js',
    './js/quiz.js',
    './js/video.js',
    './js/pwa.js',

    // Icons (PWA)
    './icons/icon-72x72.png',
    './icons/icon-96x96.png',
    './icons/icon-128x128.png',
    './icons/icon-144x144.png',
    './icons/icon-152x152.png',
    './icons/icon-192x192.png',
    './icons/icon-384x384.png',
    './icons/icon-512x512.png',
    './icons/icon-maskable-512x512.png',
    './icons/apple-touch-icon.png',

    // Fonts (self-hosted OpenDyslexic)
    './Public/fonts/OpenDyslexic-Regular.woff',
    './Public/fonts/OpenDyslexic-Regular.woff2',

    // Core images
    './Public/Image/logo.webp',
    './Public/Image/ICON BAB 1.webp',
    './Public/Image/ICON BAB 2.webp',
    './Public/Image/ICON BAB 3.webp',
    './Public/Image/Revisi Bab 1.webp',
    './Public/Image/Revisi Bab 2.webp',
    './Public/Image/Revisi Bab 3.webp',

    // Quiz images
    './Public/Image/quiz/bab1/img_bab1_rId5.jpeg',
    './Public/Image/quiz/bab1/img_bab1_rId6.jpeg',
    './Public/Image/quiz/bab1/img_bab1_rId7.jpeg',
    './Public/Image/quiz/bab2/img_bab2_rId10.jpeg',
    './Public/Image/quiz/bab2/img_bab2_rId7.jpeg',
    './Public/Image/quiz/bab2/img_bab2_rId8.jpeg',
    './Public/Image/quiz/bab2/img_bab2_rId9.jpg',
    './Public/Image/quiz/bab3/img_bab3_rId7.jpeg',
    './Public/Image/quiz/bab3/img_bab3_rId8.png',
    './Public/Image/quiz/bab3/img_bab3_rId9.jpeg',

    // Media Komik - ICON
    './MEDIA KOMIK/ICON BAB 1.webp',
    './MEDIA KOMIK/ICON BAB 2.webp',
    './MEDIA KOMIK/ICON BAB 3.webp',

    // Media Komik - BAB 1 images
    './MEDIA KOMIK/KOMIK BAB 1/dekattt.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar desa.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar jalan.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar kakek.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar masjid.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar rumah.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar sawah.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar sekolah.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gambar toko.webp',
    './MEDIA KOMIK/KOMIK BAB 1/gmbr alamat.webp',
    './MEDIA KOMIK/KOMIK BAB 1/Komik bab 1. p1.webp',
    './MEDIA KOMIK/KOMIK BAB 1/komik bab 1. p2.webp',

    // Media Komik - BAB 1 audio
    './MEDIA KOMIK/KOMIK BAB 1/voice alamat.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/voice dekat.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/voice desa.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/Voice jalan.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/Voice kakek.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/Voice masjid.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/voice rumah.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/voice sawah.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/voice sekolah.mp3',
    './MEDIA KOMIK/KOMIK BAB 1/voice toko.mp3',

    // Media Komik - BAB 2 images
    './MEDIA KOMIK/KOMIK BAB 2/0.Komik bab 2 . p 1.webp',
    './MEDIA KOMIK/KOMIK BAB 2/0.Komik bab 2. p2.webp',
    './MEDIA KOMIK/KOMIK BAB 2/0.Komik bab 3. p3.webp',
    './MEDIA KOMIK/KOMIK BAB 2/belajar.webp',
    './MEDIA KOMIK/KOMIK BAB 2/dokter.webp',
    './MEDIA KOMIK/KOMIK BAB 2/gambar profesi.webp',
    './MEDIA KOMIK/KOMIK BAB 2/guru.webp',
    './MEDIA KOMIK/KOMIK BAB 2/koki.webp',
    './MEDIA KOMIK/KOMIK BAB 2/memasak.webp',
    './MEDIA KOMIK/KOMIK BAB 2/membantu.webp',
    './MEDIA KOMIK/KOMIK BAB 2/menanam.webp',
    './MEDIA KOMIK/KOMIK BAB 2/mengajar.webp',
    './MEDIA KOMIK/KOMIK BAB 2/mengobati.webp',
    './MEDIA KOMIK/KOMIK BAB 2/menjahit.webp',
    './MEDIA KOMIK/KOMIK BAB 2/menjual.webp',
    './MEDIA KOMIK/KOMIK BAB 2/pedagang.webp',
    './MEDIA KOMIK/KOMIK BAB 2/penjahit.webp',
    './MEDIA KOMIK/KOMIK BAB 2/perawat.webp',
    './MEDIA KOMIK/KOMIK BAB 2/petani.webp',

    // Media Komik - BAB 2 audio
    './MEDIA KOMIK/KOMIK BAB 2/voice belajar.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice dokter.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice guru perempuan.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice koki perempuan.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice memasak.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice membantu.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice menanam.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice mengajar.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice mengobati.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice menjahit.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice menjual.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice pedagang.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice penjahit pr.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice perawat pr.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice petani.mp3',
    './MEDIA KOMIK/KOMIK BAB 2/voice profesi.mp3',

    // Media Komik - BAB 3 images
    './MEDIA KOMIK/KOMIK BAB 3/arsitek.webp',
    './MEDIA KOMIK/KOMIK BAB 3/cita cita.webp',
    './MEDIA KOMIK/KOMIK BAB 3/komik bab 3.webp',
    './MEDIA KOMIK/KOMIK BAB 3/penulis.webp',
    './MEDIA KOMIK/KOMIK BAB 3/tentara.webp',

    // Media Komik - BAB 3 audio
    './MEDIA KOMIK/KOMIK BAB 3/voice arsitek.mp3',
    './MEDIA KOMIK/KOMIK BAB 3/voice cita-cita.mp3',
    './MEDIA KOMIK/KOMIK BAB 3/voice penulis.mp3',
    './MEDIA KOMIK/KOMIK BAB 3/voice tentara.mp3',

    // Videos (cached at install — ~170MB total)
    './Public/Video/video_komik_bab1.mp4',
    './Public/Video/video_komik_bab2.mp4',
    './Public/Video/video_komik_bab3.mp4',
];

// ─── Google Fonts to pre-cache (network-first during install, then cached) ──
const GOOGLE_FONTS_URLS = [
    'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap',
];

// ─── Broadcast helper ────────────────────────────────────────────────────────
function broadcast(msg) {
    self.clients.matchAll().then((clients) => clients.forEach((c) => c.postMessage(msg)));
}

// ─── Install: pre-cache everything ──────────────────────────────────────────
self.addEventListener('install', (event) => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            const total = PRECACHE.length + GOOGLE_FONTS_URLS.length;
            let done = 0;

            broadcast({ type: 'SW_INSTALL_START', total });

            // Cache regular assets individually so one failure doesn't break install
            await Promise.allSettled(
                PRECACHE.map((url) =>
                    cache.add(url)
                        .catch((err) => console.warn(`[SW] Pre-cache skipped: ${url}`, err))
                        .finally(() => {
                            done++;
                            broadcast({ type: 'SW_INSTALL_PROGRESS', done, total });
                        })
                )
            );

            // Cache Google Fonts CSS (best-effort)
            await Promise.allSettled(
                GOOGLE_FONTS_URLS.map((url) =>
                    fetch(url, { mode: 'cors' })
                        .then((res) => { if (res.ok) cache.put(url, res); })
                        .catch(() => {})
                        .finally(() => {
                            done++;
                            broadcast({ type: 'SW_INSTALL_PROGRESS', done, total });
                        })
                )
            );

            broadcast({ type: 'SW_INSTALL_DONE' });
        })
    );
});

// ─── Activate: delete old caches ────────────────────────────────────────────
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            caches.keys().then((keys) =>
                Promise.all(
                    keys.map((key) => key !== CACHE_NAME && caches.delete(key))
                )
            ),
            self.clients.claim(),
        ])
    );
});

// ─── Fetch: routing ─────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
    const req = event.request;
    const url = new URL(req.url);

    if (req.method !== 'GET') return;

    // Videos: support byte-range requests for seeking
    if (isVideoRequest(url)) {
        event.respondWith(handleVideo(req));
        return;
    }

    // Google Fonts: stale-while-revalidate
    if (isGoogleFont(url)) {
        event.respondWith(staleWhileRevalidate(req));
        return;
    }

    // HTML navigation: cache-first (shell already cached), fallback offline.html
    if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
        event.respondWith(handleNavigation(req));
        return;
    }

    // Everything else: cache-first, cache miss → network → store
    event.respondWith(cacheFirst(req));
});

// ─── Strategy: HTML navigation ───────────────────────────────────────────────
async function handleNavigation(req) {
    const cached = await caches.match(req);
    if (cached) return cached;

    try {
        const res = await fetch(req);
        if (res && res.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(req, res.clone());
        }
        return res;
    } catch {
        const fallback = await caches.match('./offline.html');
        return fallback || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
}

// ─── Strategy: Cache-First ───────────────────────────────────────────────────
async function cacheFirst(req) {
    const cached = await caches.match(req);
    if (cached) return cached;

    try {
        const res = await fetch(req);
        if (res && res.status === 200 && (req.url.startsWith('http://') || req.url.startsWith('https://'))) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(req, res.clone());
        }
        return res;
    } catch {
        return new Response('', { status: 408, statusText: 'Offline' });
    }
}

// ─── Strategy: Stale-While-Revalidate ────────────────────────────────────────
async function staleWhileRevalidate(req) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);

    const fetchPromise = fetch(req)
        .then((res) => {
            if (res && res.status === 200) cache.put(req, res.clone());
            return res;
        })
        .catch(() => null);

    return cached || fetchPromise;
}

// ─── Strategy: Video (Range-Request aware) ───────────────────────────────────
// Browsers send Range headers for video seeking. The Cache API doesn't store
// partial responses, so we fetch the full response from cache and slice it.
async function handleVideo(req) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(req.url); // match without range header

    if (cachedResponse) {
        const rangeHeader = req.headers.get('range');
        if (!rangeHeader) return cachedResponse;

        // Slice the cached body to satisfy the range request
        const arrayBuffer = await cachedResponse.clone().arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        const totalLength = bytes.length;

        const [, startStr, endStr] = /bytes=(\d+)-(\d*)/.exec(rangeHeader) || [];
        const start = parseInt(startStr, 10);
        const end = endStr ? parseInt(endStr, 10) : totalLength - 1;
        const chunk = bytes.slice(start, end + 1);

        return new Response(chunk, {
            status: 206,
            statusText: 'Partial Content',
            headers: {
                'Content-Type': cachedResponse.headers.get('Content-Type') || 'video/mp4',
                'Content-Range': `bytes ${start}-${end}/${totalLength}`,
                'Content-Length': chunk.length,
                'Accept-Ranges': 'bytes',
            },
        });
    }

    // Not cached yet: fetch from network (and cache the full file for next time)
    try {
        // Fetch without range header so we get the full file to cache
        const fullReq = new Request(req.url, { method: 'GET', headers: {} });
        const networkRes = await fetch(fullReq);

        if (networkRes && networkRes.status === 200) {
            cache.put(req.url, networkRes.clone());
        }

        return networkRes;
    } catch {
        return new Response('Video tidak tersedia offline', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
    }
}

// ─── Helpers ────────────────────────────────────────────────────────────────
function isVideoRequest(url) {
    return url.pathname.endsWith('.mp4') || url.pathname.includes('/Video/');
}

function isGoogleFont(url) {
    return url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com';
}

// ─── skipWaiting message ─────────────────────────────────────────────────────
self.addEventListener('message', (event) => {
    if (event.data?.action === 'skipWaiting') self.skipWaiting();
});
