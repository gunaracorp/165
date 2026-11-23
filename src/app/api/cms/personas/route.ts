import { NextRequest, NextResponse } from 'next/server'
import { isAuthed } from '@/lib/admin-auth'
import { db } from '@/lib/db'
import { ensurePersonaDefaults } from '@/lib/cms-personas'

// GET /api/cms/personas — daftar Peran & Persona (Dewan Pakar 46)
// Tabel kosong → diisi default otomatis (Master + 46 pakar).
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    await ensurePersonaDefaults(db)
    const rows = await db.cmsPersona.findMany({ orderBy: [{ order: 'asc' }] })
    return NextResponse.json({
      items: rows.map((p) => ({
        id: p.id, key: p.key, name: p.name, field: p.field, title: p.title,
        bio: p.bio, icon: p.icon, master: p.master, active: p.active,
      })),
    })
  } catch (err) {
    console.error('[api/cms/personas GET]', err)
    return NextResponse.json({ error: 'Database tidak dapat dijangkau.' }, { status: 503 })
  }
}

// PUT /api/cms/personas — aktivasi persona & sunting data
// Body: { activateId?: string | null, updates?: [{ id, name, field, title?, bio? }], reset?: boolean }
export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Tidak diizinkan.' }, { status: 401 })
  try {
    const b = await req.json().catch(() => null)
    if (!b) return NextResponse.json({ error: 'Data tidak valid.' }, { status: 400 })

    // pulihkan ke default: hapus semua, buat ulang, Master aktif
    if (b.reset === true) {
      await db.cmsPersona.deleteMany()
      await ensurePersonaDefaults(db)
    }

    // sunting data persona (nama / bidang / gelar / deskripsi)
    const updates: Array<{ id: string; name?: string; field?: string; title?: string; bio?: string }> =
      Array.isArray(b.updates) ? b.updates : []
    for (const u of updates) {
      if (!u?.id) continue
      const data: Record<string, string | null> = {}
      if (typeof u.name === 'string' && u.name.trim()) data.name = u.name.trim().slice(0, 80)
      if (typeof u.field === 'string' && u.field.trim()) data.field = u.field.trim().slice(0, 80)
      if (typeof u.title === 'string') data.title = u.title.trim().slice(0, 120) || null
      if (typeof u.bio === 'string') data.bio = u.bio.trim().slice(0, 300) || null
      if (Object.keys(data).length > 0) await db.cmsPersona.update({ where: { id: u.id }, data })
    }

    // aktivasi: tepat satu persona aktif (null = tidak ada yang aktif)
    if (b.activateId !== undefined) {
      if (b.activateId === null) {
        await db.cmsPersona.updateMany({ data: { active: false } })
      } else {
        const target = await db.cmsPersona.findUnique({ where: { id: String(b.activateId) } })
        if (!target) return NextResponse.json({ error: 'Persona tidak ditemukan.' }, { status: 404 })
        await db.$transaction([
          db.cmsPersona.updateMany({ data: { active: false } }),
          db.cmsPersona.update({ where: { id: target.id }, data: { active: true } }),
        ])
      }
    }

    const rows = await db.cmsPersona.findMany({ orderBy: [{ order: 'asc' }] })
    return NextResponse.json({
      ok: true,
      items: rows.map((p) => ({
        id: p.id, key: p.key, name: p.name, field: p.field, title: p.title,
        bio: p.bio, icon: p.icon, master: p.master, active: p.active,
      })),
    })
  } catch (err) {
    console.error('[api/cms/personas PUT]', err)
    return NextResponse.json({ error: 'Gagal menyimpan peran & persona.' }, { status: 500 })
  }
}
