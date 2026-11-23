import { NextRequest, NextResponse } from 'next/server'
import { createStudioToken, passphraseMatches, STUDIO_COOKIE, STUDIO_COOKIE_OPTIONS } from '@/lib/studio-auth'

// simple per-IP rate limiter for passphrase attempts
const hits = new Map<string, { count: number; reset: number }>()
function rateLimited(key: string, max = 8, windowMs = 15 * 60_000): boolean {
  const now = Date.now()
  const h = hits.get(key)
  if (!h || h.reset < now) { hits.set(key, { count: 1, reset: now + windowMs }); return false }
  h.count += 1
  return h.count > max
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'local'
    if (rateLimited(ip)) {
      return NextResponse.json({ error: 'Too many attempts. Please wait 15 minutes.' }, { status: 429 })
    }
    const body = await req.json().catch(() => null)
    const passphrase = typeof body?.passphrase === 'string' ? body.passphrase : ''
    if (!passphraseMatches(passphrase)) {
      return NextResponse.json({ error: 'Incorrect founder passphrase.' }, { status: 401 })
    }
    const res = NextResponse.json({ ok: true })
    res.cookies.set(STUDIO_COOKIE, createStudioToken(), STUDIO_COOKIE_OPTIONS)
    return res
  } catch (err) {
    console.error('[api/studio/login]', err)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
