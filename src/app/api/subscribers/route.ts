// 165 — Newsletter subscribers (footer "Kabar 165")
// Privacy-first: only the email + optional display name, nothing else.
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name } = body || {}
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ ok: false, error: 'Valid email required' }, { status: 400 })
    }
    const existing = await db.subscriber.findUnique({ where: { email } })
    if (existing) {
      if (!existing.active) {
        await db.subscriber.update({ where: { email }, data: { active: true, name: name || existing.name } })
      }
      return NextResponse.json({ ok: true, message: 'Already subscribed' })
    }
    await db.subscriber.create({ data: { email, name: name || null, active: true } })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to subscribe' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'POST to subscribe' })
}
