'use client'

// ============================================================
// 165 — SIMPAN OFFLINE (Wiridian Offline Penuh · hari ke-90)
// Menyimpan seluruh bacaan & halaman utama ke cache service worker
// sehingga majelis tetap hidup tanpa sinyal. Konsisten dengan
// strategi cache di public/sw.js (API_CACHE = '165-v2-api').
// ============================================================
const SW_VERSION = '165-v2'
const API_CACHE = `${SW_VERSION}-api`
const PAGE_CACHE = `${SW_VERSION}-pages`
const STAMP_KEY = '165.offline.wiridian'

export interface OfflineSaveResult {
  ok: boolean
  at: string
  detail: string
}

export async function saveWiridianOffline(): Promise<OfflineSaveResult> {
  try {
    if (!('caches' in window)) {
      return { ok: false, at: '', detail: 'Peramban tidak mendukung cache offline.' }
    }
    const [apiRes, pageRes] = await Promise.all([
      fetch('/api/wiridian', { cache: 'no-store' }),
      fetch('/', { cache: 'no-store' }),
    ])
    const cacheApi = await caches.open(API_CACHE)
    if (apiRes.ok) {
      await cacheApi.put(new Request('/api/wiridian'), apiRes.clone())
    }
    const cachePage = await caches.open(PAGE_CACHE)
    if (pageRes.ok) {
      await cachePage.put(new Request('/'), pageRes.clone())
    }
    if (!apiRes.ok && !pageRes.ok) {
      return { ok: false, at: '', detail: 'Gagal mengunduh — periksa koneksi.' }
    }
    const at = new Date().toISOString()
    try { localStorage.setItem(STAMP_KEY, at) } catch { /* noop */ }
    const bytes = apiRes.ok ? (await apiRes.clone().text()).length : 0
    return {
      ok: true,
      at,
      detail: apiRes.ok
        ? `Bacaan (${Math.round(bytes / 1024)} KB) & halaman utama tersimpan di perangkat.`
        : 'Halaman utama tersimpan — bacaan menunggu koneksi.',
    }
  } catch (err) {
    return { ok: false, at: '', detail: String(err).slice(0, 120) }
  }
}

export function lastOfflineStamp(): string | null {
  try {
    return localStorage.getItem(STAMP_KEY)
  } catch {
    return null
  }
}
