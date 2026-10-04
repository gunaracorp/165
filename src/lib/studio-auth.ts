// ============================================================
// 165 — FOUNDER STUDIO AUTH
// Single-steward authentication for the WordPress-like studio.
// A passphrase (env FOUNDER_PASSPHRASE) unlocks a signed,
// httpOnly cookie. No user table, no password reset theatre —
// one founder, one key, honest engineering.
//
// Security notes:
//  - token = base64url(payload).hmac — payload carries only expiry
//  - HMAC-SHA256 under FOUNDER_SECRET (or derived from passphrase)
//  - passphrase compared via timingSafeEqual (sha256-normalised)
//  - cookie: httpOnly + sameSite=lax + secure in production
// ============================================================
import { createHmac, createHash, timingSafeEqual } from 'node:crypto'
import type { NextRequest } from 'next/server'

export const STUDIO_COOKIE = '165_studio'
const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

export function getFounderPassphrase(): string {
  return process.env.FOUNDER_PASSPHRASE ?? '165-studio-founder'
}

function signingSecret(): string {
  return process.env.FOUNDER_SECRET ?? `${getFounderPassphrase()}::165-studio-hmac-v1`
}

// ---------- base64url (node-safe, no padding) ----------
function b64url(input: Buffer | string): string {
  return Buffer.from(input).toString('base64url')
}

function hmac(data: string): string {
  return createHmac('sha256', signingSecret()).update(data).digest('base64url')
}

export function createStudioToken(ttlMs: number = TOKEN_TTL_MS): string {
  const payload = b64url(JSON.stringify({ exp: Date.now() + ttlMs, v: 1 }))
  return `${payload}.${hmac(payload)}`
}

export function verifyStudioToken(token: string | undefined | null): boolean {
  if (!token) return false
  const dot = token.lastIndexOf('.')
  if (dot <= 0) return false
  const payload = token.slice(0, dot)
  const sig = token.slice(dot + 1)
  const expected = hmac(payload)
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false
  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as { exp?: number }
    return typeof parsed.exp === 'number' && parsed.exp > Date.now()
  } catch {
    return false
  }
}

export function passphraseMatches(candidate: string | undefined | null): boolean {
  if (!candidate) return false
  const a = createHash('sha256').update(candidate).digest()
  const b = createHash('sha256').update(getFounderPassphrase()).digest()
  return timingSafeEqual(a, b)
}

// ---------- request helper ----------
export function isFounder(req: NextRequest): boolean {
  return verifyStudioToken(req.cookies.get(STUDIO_COOKIE)?.value)
}

export const STUDIO_COOKIE_OPTIONS = {
  httpOnly: true as const,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
}
