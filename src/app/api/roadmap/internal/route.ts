import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { ROADMAP_META, ROADMAP_FASES, ROADMAP_99 } from '@/data/roadmap-99-internal'

// 165 — ROADMAP 99 (INTERNAL · PRIVAT PENDIRI)
// Endpoint menuntut sesi admin sah (cookie HMAC adm165). Tanpa sesi:
// 401 dan tidak ada satu byte pun bocor. Endpoint ini tidak tercantum di
// sitemap, ditutup robot (Disallow /api/), dan tanpa cache apa pun.
// Doktrin: peta jalan ini hanya diketahui pendiri + steward 165.
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json(
      { error: 'Perlu sesi admin. Masuk lewat Ruang Admin 165.' },
      { status: 401, headers: { 'Cache-Control': 'no-store' } },
    )
  }
  return NextResponse.json(
    { ...ROADMAP_META, fases: ROADMAP_FASES, steps: ROADMAP_99 },
    { headers: { 'Cache-Control': 'no-store, private' } },
  )
}
