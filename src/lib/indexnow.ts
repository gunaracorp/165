// ============================================================
// 165 — INDEXNOW (protokol pemberitahuan mesin pencari)
// Memberi tahu Bing, Yandex, Seznam, Naver (dan mitra IndexNow)
// secara INSTAN ketika ada halaman baru/berubah — sehingga perayapan
// lebih cepat daripada menunggu siklus sitemap.
// Catatan jujur (diverifikasi 2026): endpoint "ping sitemap" Google
// (404) dan Bing (410) SUDAH DINONAKTIFKAN penyedianya — keduanya
// kini merayapi sitemap.xml langsung. Jalur kami: IndexNow untuk
// mesin mitra + sitemap.xml terkawal robots untuk Google/Bing.
// Kunci terpasang publik di /<key>.txt (syarat verifikasi protokol).
// ============================================================
import { SITE_BASE, SITE_SECTIONS, sectionUrl } from './site-urls'

export const INDEXNOW_KEY = '8a66038f995e4ea5a040a88019458d27'
export const INDEXNOW_KEY_LOCATION = `${SITE_BASE}/${INDEXNOW_KEY}.txt`
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export function allSiteUrls(): string[] {
  return SITE_SECTIONS.map((s) => sectionUrl(s.hash))
}

export interface PingResult {
  target: string
  ok: boolean
  status: number | string
  detail?: string
}

async function submitIndexNow(urls: string[]): Promise<PingResult> {
  const payload = {
    host: SITE_BASE.replace(/^https?:\/\//, ''),
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls.slice(0, 100), // batas wajar per permintaan
  }
  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    })
    return {
      target: 'IndexNow (Bing · Yandex · Seznam · Naver · Yes)',
      ok: res.ok || res.status === 202 || res.status === 200,
      status: res.status,
      detail: res.ok
        ? res.status === 202
          ? 'Diterima — URL masuk antrean peninjauan.'
          : 'OK — URL terkirim.'
        : 'Endpoint menolak (periksa kunci/limit).',
    }
  } catch (err) {
    return { target: 'IndexNow (Bing · Yandex · Seznam · Naver · Yes)', ok: false, status: 'ERR', detail: String(err).slice(0, 120) }
  }
}

export async function pingSearchEngines(urls?: string[]): Promise<PingResult[]> {
  const list = urls && urls.length > 0 ? urls : allSiteUrls()
  const result = await submitIndexNow(list)
  return [result]
}

// versi fire-and-forget untuk dipanggil dari route mutasi konten
export function pingSearchEnginesSoon(urls?: string[]): void {
  void pingSearchEngines(urls).then((results) => {
    for (const r of results) {
      console.log(`[165/indexnow] ${r.target}: ${r.status}${r.detail ? ' — ' + r.detail : ''}`)
    }
  }).catch(() => { /* tidak pernah mengganggu respons utama */ })
}
