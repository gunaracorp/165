// 165 — Service Worker v1 "Penjaga Zikir"
// Strategy:
//  · static assets (/_next/static, icons, fonts) → cache-first (immutable)
//  · navigations (HTML)         → network-first, offline fallback page
//  · GET API knowledge surfaces → network-first with stale cache as safety net
//  · mutations (POST/PUT/PATCH) → always network, never cached
// Doctrine: offline is a preservation feature — knowledge must survive
// lost connections, but stale data is never presented as fresh.
const VERSION = '165-v1'
const STATIC_CACHE = `${VERSION}-static`
const PAGE_CACHE = `${VERSION}-pages`
const API_CACHE = `${VERSION}-api`
const OFFLINE_URL = '/offline.html'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll([OFFLINE_URL])).then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)),
      ),
    ).then(() => self.clients.claim()),
  )
})

function isStaticAsset(url) {
  return (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname === '/logo.svg' ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.svg')
  )
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  // static assets: cache-first (immutable content)
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ||
          fetch(request).then((res) => {
            if (res.ok) {
              const copy = res.clone()
              caches.open(STATIC_CACHE).then((c) => c.put(request, copy))
            }
            return res
          }),
      ),
    )
    return
  }

  // API knowledge surfaces: network-first, stale cache as honest fallback
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok && url.pathname.match(/^\/api\/(entities|sanad|graph|stats|search|terms|timeline)/)) {
            const copy = res.clone()
            caches.open(API_CACHE).then((c) => c.put(request, copy))
          }
          return res
        })
        .catch(() =>
          caches.match(request).then(
            (hit) =>
              hit ||
              new Response(JSON.stringify({ error: 'offline', cached: false }), {
                status: 503,
                headers: { 'Content-Type': 'application/json' },
              }),
          ),
        ),
    )
    return
  }

  // navigations: network-first, offline page as last resort
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone()
          caches.open(PAGE_CACHE).then((c) => c.put(request, copy))
          return res
        })
        .catch(() =>
          caches.match(request).then((hit) => hit || caches.match(OFFLINE_URL).then((off) => off || Response.error())),
        ),
    )
  }
})
