'use client'

// ============================================================
// CMS 165 — Kategori & Tag: klasifikasi artikel. Buat, ubah,
// hapus. Artikel yang berkategori tidak ikut terhapus.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import { Loader2, Pencil, Plus, Tag as TagIcon, Trash2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SkeletonCard } from '../ui'
import { useToast } from '@/hooks/use-toast'
import type { CmsCategoryRow, CmsTagRow } from './types'

export function TaxonomyPanel({ onChanged }: { onChanged?: () => void }) {
  const [cats, setCats] = useState<CmsCategoryRow[]>([])
  const [tags, setTags] = useState<CmsTagRow[]>([])
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState<string | null>(null)

  // form kategori
  const [catEditing, setCatEditing] = useState<CmsCategoryRow | null>(null)
  const [catName, setCatName] = useState('')
  const [catDesc, setCatDesc] = useState('')
  // form tag
  const [tagName, setTagName] = useState('')
  const { toast } = useToast()

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [rc, rt] = await Promise.all([fetch('/api/cms/categories'), fetch('/api/cms/tags')])
      const jc = await rc.json().catch(() => ({}))
      const jt = await rt.json().catch(() => ({}))
      setCats(Array.isArray(jc.items) ? jc.items : [])
      setTags(Array.isArray(jt.items) ? jt.items : [])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void load() }, [load])

  const saveCategory = async () => {
    if (catName.trim().length < 2) {
      toast({ title: 'Nama kategori terlalu pendek', variant: 'destructive' }); return
    }
    setBusy('cat')
    try {
      const r = await fetch(catEditing ? `/api/cms/categories/${catEditing.id}` : '/api/cms/categories', {
        method: catEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: catName.trim(), desc: catDesc.trim() }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal', description: j.error, variant: 'destructive' }); return }
      toast({ title: catEditing ? 'Kategori diperbarui' : 'Kategori dibuat', description: catName.trim() })
      setCatName(''); setCatDesc(''); setCatEditing(null)
      await load()
      onChanged?.()
    } finally { setBusy(null) }
  }

  const deleteCategory = async (c: CmsCategoryRow) => {
    setBusy(c.id)
    try {
      const r = await fetch(`/api/cms/categories/${c.id}`, { method: 'DELETE' })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Tidak dapat dihapus', description: j.error, variant: 'destructive' }); return }
      toast({ title: 'Kategori dihapus', description: c.name })
      await load()
      onChanged?.()
    } finally { setBusy(null) }
  }

  const addTag = async () => {
    if (tagName.trim().length < 2) {
      toast({ title: 'Nama tag terlalu pendek', variant: 'destructive' }); return
    }
    setBusy('tag')
    try {
      const r = await fetch('/api/cms/tags', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: tagName.trim() }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal', description: j.error, variant: 'destructive' }); return }
      toast({ title: 'Tag dibuat', description: tagName.trim() })
      setTagName('')
      await load()
    } finally { setBusy(null) }
  }

  const deleteTag = async (t: CmsTagRow) => {
    setBusy(t.id)
    try {
      const r = await fetch(`/api/cms/tags/${t.id}`, { method: 'DELETE' })
      if (!r.ok) { toast({ title: 'Gagal menghapus tag', variant: 'destructive' }); return }
      toast({ title: 'Tag dihapus', description: t.name })
      await load()
    } finally { setBusy(null) }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Kategori &amp; Tag</h2>
      <p className="text-muted-foreground -mt-2 max-w-2xl text-[13px]">
        <b>Kategori</b> seperti bab buku — satu artikel cukup satu kategori. <b>Tag</b> seperti label kecil — bisa banyak. Keduanya membantu pengunjung menemukan topik.
      </p>

      {loading ? (
        <div className="grid gap-4 lg:grid-cols-2"><SkeletonCard /><SkeletonCard /></div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-2">
          {/* ---------- kategori ---------- */}
          <section className="border-border bg-card rounded-2xl border p-4">
            <h3 className="flex items-center gap-2 text-[14px] font-bold"><Plus className="text-primary size-4" aria-hidden /> {catEditing ? 'Ubah kategori' : 'Tambah kategori'}</h3>
            <div className="mt-3 space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="cat-name">Nama kategori</Label>
                <Input id="cat-name" value={catName} placeholder="Contoh: Kajian Rutin" onChange={(e) => setCatName(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cat-desc">Keterangan singkat (opsional)</Label>
                <Textarea id="cat-desc" value={catDesc} rows={2} placeholder="Untuk apa kategori ini…" onChange={(e) => setCatDesc(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <Button size="sm" disabled={busy === 'cat'} onClick={() => void saveCategory()}>
                  {busy === 'cat' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Plus className="size-4" aria-hidden />}
                  {catEditing ? 'Simpan perubahan' : 'Buat kategori'}
                </Button>
                {catEditing && (
                  <Button variant="ghost" size="sm" onClick={() => { setCatEditing(null); setCatName(''); setCatDesc('') }}>
                    <X className="size-4" aria-hidden /> Batal
                  </Button>
                )}
              </div>
            </div>

            <div className="border-border/60 mt-4 border-t pt-3">
              <h4 className="text-muted-foreground text-[12px] font-bold tracking-wide uppercase">Daftar kategori ({cats.length})</h4>
              {cats.length === 0 ? (
                <p className="text-muted-foreground py-4 text-center text-[13px]">Belum ada kategori.</p>
              ) : (
                <ul className="mt-2 space-y-2">
                  {cats.map((c) => (
                    <li key={c.id} className="border-border flex items-center justify-between gap-2 rounded-xl border px-3 py-2">
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-bold">{c.name}</p>
                        <p className="text-muted-foreground truncate text-[11px]">{c.posts ?? 0} artikel{c.desc ? ` — ${c.desc}` : ''}</p>
                      </div>
                      <div className="flex shrink-0">
                        {busy === c.id && <Loader2 className="text-muted-foreground mr-1 size-4 animate-spin" aria-hidden />}
                        <Button variant="ghost" size="icon" aria-label={`Ubah kategori ${c.name}`} onClick={() => { setCatEditing(c); setCatName(c.name); setCatDesc(c.desc ?? '') }}>
                          <Pencil className="size-4" aria-hidden />
                        </Button>
                        <Button variant="ghost" size="icon" aria-label={`Hapus kategori ${c.name}`} className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40" onClick={() => void deleteCategory(c)}>
                          <Trash2 className="size-4" aria-hidden />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ---------- tag ---------- */}
          <section className="border-border bg-card rounded-2xl border p-4">
            <h3 className="flex items-center gap-2 text-[14px] font-bold"><TagIcon className="text-primary size-4" aria-hidden /> Tambah tag</h3>
            <div className="mt-3 flex gap-2">
              <Input value={tagName} onChange={(e) => setTagName(e.target.value)} placeholder="Contoh: wirid" aria-label="Nama tag baru"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); void addTag() } }} />
              <Button size="sm" disabled={busy === 'tag'} onClick={() => void addTag()}>
                {busy === 'tag' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Plus className="size-4" aria-hidden />}
                Tambah
              </Button>
            </div>

            <div className="border-border/60 mt-4 border-t pt-3">
              <h4 className="text-muted-foreground text-[12px] font-bold tracking-wide uppercase">Daftar tag ({tags.length})</h4>
              {tags.length === 0 ? (
                <p className="text-muted-foreground py-4 text-center text-[13px]">Belum ada tag.</p>
              ) : (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li key={t.id} className="bg-secondary text-foreground inline-flex items-center gap-1.5 rounded-full border border-border py-1 pr-1.5 pl-3 text-[12.5px] font-semibold">
                      {t.name} <span className="text-muted-foreground text-[10.5px]">({t.posts ?? 0})</span>
                      <button type="button" aria-label={`Hapus tag ${t.name}`} className="text-muted-foreground hover:text-rose-700" onClick={() => void deleteTag(t)}>
                        {busy === t.id ? <Loader2 className="size-3 animate-spin" aria-hidden /> : <X className="size-3" aria-hidden />}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
