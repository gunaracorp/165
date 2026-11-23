import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { loadSettings, saveSetting, CMS_DEFAULT_SETTINGS } from '@/lib/cms'

// GET /api/cms/settings — muat pengaturan (default + tersimpan)
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const settings = await loadSettings()
    return NextResponse.json({ settings, defaults: CMS_DEFAULT_SETTINGS })
  } catch (err) {
    console.error('[api/cms/settings GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

// PUT /api/cms/settings — simpan pengaturan (hanya kunci yang dikenal)
export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    const incoming: Record<string, unknown> = b?.settings ?? {}
    const known = new Set(Object.keys(CMS_DEFAULT_SETTINGS))

    const updates: Array<[string, string]> = []
    for (const [k, v] of Object.entries(incoming)) {
      if (!known.has(k)) continue
      if (k === 'blog.postsPerPage') {
        const n = Number(v)
        if (!Number.isFinite(n) || n < 1 || n > 50) continue
        updates.push([k, String(Math.round(n))])
      } else if (k === 'blog.autoApproveComments' || k === 'blog.showAuthors') {
        updates.push([k, v ? 'true' : 'false'])
      } else {
        updates.push([k, String(v).trim().slice(0, 200)])
      }
    }

    for (const [key, value] of updates) await saveSetting(key, value)
    const settings = await loadSettings()
    return NextResponse.json({ ok: true, saved: updates.length, settings })
  } catch (err) {
    console.error('[api/cms/settings PUT]', err)
    return NextResponse.json({ error: 'Gagal menyimpan pengaturan.' }, { status: 500 })
  }
}
