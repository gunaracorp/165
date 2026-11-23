// ============================================================
// 165 — CMS 165: shared helpers (WordPress-style content layer)
// Slug, sanitization, settings defaults, rate limit for comments.
// Server-side only helpers live here; UI lives in components/165/cms.
// ============================================================

// ---------- slug ----------
// Indonesia-friendly slugify: keeps a-z 0-9, folds common vowels,
// strips Arabic/etc, collapses dashes.
export function slugify(input: string): string {
  const s = (input ?? '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
  return s || 'tanpa-judul'
}

/** Pastikan slug unik di CmsPost (tambahkan -2, -3, … bila sudah dipakai). */
export async function uniquePostSlug(base: string, excludeId?: string): Promise<string> {
  const { db } = await import('@/lib/db')
  const root = slugify(base)
  let candidate = root
  for (let i = 2; ; i++) {
    const clash = await db.cmsPost.findUnique({ where: { slug: candidate } })
    if (!clash || clash.id === excludeId) return candidate
    candidate = `${root}-${i}`
  }
}

/** Slug unik untuk kategori / tag (tabel terpisah). */
export async function uniqueTaxSlug(
  table: 'cmsCategory' | 'cmsTag',
  base: string,
  excludeId?: string,
): Promise<string> {
  const { db } = await import('@/lib/db')
  const anyDb = db as unknown as Record<string, { findUnique: (a: { where: { slug: string } }) => Promise<{ id: string } | null> }>
  const root = slugify(base)
  let candidate = root
  for (let i = 2; ; i++) {
    const clash = await anyDb[table].findUnique({ where: { slug: candidate } })
    if (!clash || clash.id === excludeId) return candidate
    candidate = `${root}-${i}`
  }
}

// ---------- HTML sanitize (editor visual) ----------
// Editor menyimpan HTML terbatas: heading, paragraf, list, quote, img, a,
// strong/em/u/s/br/hr/blockquote, figure/figcaption. Skrip & atribut event dibuang.
const ALLOWED_TAGS = new Set([
  'p', 'br', 'hr', 'h2', 'h3', 'h4', 'strong', 'b', 'em', 'i', 'u', 's',
  'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'figure', 'figcaption', 'span',
])

export function sanitizePostHtml(html: string): string {
  let out = (html ?? '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/ on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/ on\w+\s*=\s*'[^']*'/gi, '')
    .replace(/javascript:/gi, '')

  // buang tag yang tidak diizinkan (sisakan isinya)
  out = out.replace(/<\/?([a-zA-Z0-9]+)([^>]*)>/g, (match, tag: string) => {
    return ALLOWED_TAGS.has(tag.toLowerCase()) ? match : ''
  })
  // img/a hanya boleh href/src/alt/target/rel
  out = out.replace(/<a([^>]*)>/gi, (_m, attrs: string) => {
    const href = /href\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/i.exec(attrs)?.[1] ?? '""'
    return `<a href=${href} rel="noopener noreferrer">`
  })
  out = out.replace(/<img([^>]*)>/gi, (_m, attrs: string) => {
    const src = /src\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/i.exec(attrs)?.[1] ?? '""'
    const alt = /alt\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/i.exec(attrs)?.[1] ?? '""'
    return `<img src=${src} alt=${alt} loading="lazy">`
  })
  return out.trim()
}

// ---------- settings ----------
export const CMS_DEFAULT_SETTINGS: Record<string, string> = {
  'site.title': '165 — TQN Qodiriah Naqsabandiyah',
  'site.tagline': 'Pengetahuan, Warisan & Pelestarian Digital',
  'blog.postsPerPage': '9',
  'blog.autoApproveComments': 'false',
  'blog.showAuthors': 'true',
}

export type CmsSettings = Record<string, string>

export async function loadSettings(): Promise<CmsSettings> {
  const { db } = await import('@/lib/db')
  const rows = await db.cmsSetting.findMany()
  const out: CmsSettings = { ...CMS_DEFAULT_SETTINGS }
  for (const r of rows) out[r.key] = r.value
  return out
}

export async function saveSetting(key: string, value: string): Promise<void> {
  const { db } = await import('@/lib/db')
  await db.cmsSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  })
}

// ---------- comment rate limit (in-memory, per IP) ----------
const commentLog = new Map<string, number[]>()
const COMMENT_WINDOW_MS = 10 * 60 * 1000
const COMMENT_MAX = 5

export function commentAllowed(ip: string): boolean {
  const now = Date.now()
  const arr = (commentLog.get(ip) ?? []).filter((t) => now - t < COMMENT_WINDOW_MS)
  if (arr.length >= COMMENT_MAX) {
    commentLog.set(ip, arr)
    return false
  }
  arr.push(now)
  commentLog.set(ip, arr)
  return true
}

// ---------- formatting ----------
export function fmtDateTime(d: Date | string | null | undefined): string {
  if (!d) return '—'
  const date = typeof d === 'string' ? new Date(d) : d
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  }).format(date)
}

export function fmtDate(d: Date | string | null | undefined): string {
  if (!d) return '—'
  const date = typeof d === 'string' ? new Date(d) : d
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(date)
}
