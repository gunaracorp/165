import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// 165 — public visit tracker (privacy-first: no cookies, no IPs, no fingerprints).
// Accepts lightweight pageview/search/entity events for the live statistics room.
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as {
      path?: string; kind?: string; term?: string; ref?: string
    } | null
    if (!body?.path || typeof body.path !== 'string') {
      return NextResponse.json({ ok: false }, { status: 400 })
    }
    const kind = ['pageview', 'search', 'entity'].includes(body.kind ?? '') ? body.kind! : 'pageview'
    await db.visitEvent.create({
      data: {
        path: body.path.slice(0, 300),
        kind,
        term: body.term?.slice(0, 160) ?? null,
        ref: body.ref?.slice(0, 300) ?? null,
      },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/analytics/track]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
