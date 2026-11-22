// ============================================================
// 165 — API INDEXNOW
// GET  → status konfigurasi (publik, tanpa rahasia)
// POST → ping mesin pencari (khusus admin: cookie ADM165)
//        body: { all?: true, urls?: string[] }
// ============================================================
import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { INDEXNOW_KEY, INDEXNOW_KEY_LOCATION, allSiteUrls, pingSearchEngines, type PingResult } from '@/lib/indexnow'

export async function GET() {
  return NextResponse.json({
    protocol: 'IndexNow',
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    trackedUrls: allSiteUrls().length,
    engines: ['Bing', 'Yandex', 'Seznam', 'Naver', 'Yes'],
  })
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const body = await req.json().catch(() => ({}))
    const urls: string[] = Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls.filter((u: unknown) => typeof u === 'string' && u.startsWith('https://165.web.id'))
      : allSiteUrls()
    const results: PingResult[] = await pingSearchEngines(urls)
    return NextResponse.json({ ok: results.some((r) => r.ok), submitted: urls.length, results })
  } catch (err) {
    console.error('[api/indexnow POST]', err)
    return NextResponse.json({ error: 'Ping gagal.' }, { status: 500 })
  }
}
