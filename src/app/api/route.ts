// 165 — platform health probe
import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ ok: true, service: '165' })
}
