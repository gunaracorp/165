'use client'

// ============================================================
// CMS 165 — KITAB (buku digital dwibahasa Arab–Indonesia)
// Kelola kitab satu per satu: buat kitab baru, lalu tulis babnya
// satu per satu — teks Arab (RTL) berdampingan dengan terjemah
// Indonesia + kunci amalan. Terbitkan bila sudah siap.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import {
  ArrowLeft, ArrowUp, ArrowDown, BookMarked, Check, ChevronRight, Layers,
  Loader2, Lock, Pencil, Plus, Trash2, X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { SkeletonCard } from '../ui'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

type KitabRow = {
  id: string; slug: string; order: number
  titleAr: string; titleId: string; subtitleId: string | null
  author: string; ledeId: string | null; ledeAr: string | null
  status: 'draft' | 'published'
  babCount: number; updatedAt: string
}
type BabRow = {
  id: string; kitabId: string; order: number
  titleAr: string; titleId: string
  arabic: string; indonesian: string; kunciAmal: string | null
  status: 'draft' | 'published'
}

const AR_FIELD = 'font-arabic text-[17px] leading-relaxed'

const emptyKitabForm = { titleId: '', titleAr: '', subtitleId: '', ledeId: '', ledeAr: '', status: 'draft' }
type KitabForm = typeof emptyKitabForm

const emptyBabForm = { titleId: '', titleAr: '', arabic: '', indonesian: '', kunciAmal: '', status: 'draft' }
type BabForm = typeof emptyBabForm

export function KitabPanel() {
  const [items, setItems] = useState<KitabRow[] | null>(null)
  const [busy, setBusy] = useState(false)
  const { toast } = useToast()

  // form kitab (baru / sunting)
  const [kitabDialog, setKitabDialog] = useState<'closed' | 'new' | 'edit'>('closed')
  const [editingKitab, setEditingKitab] = useState<KitabRow | null>(null)
  const [kitabForm, setKitabForm] = useState<KitabForm>(emptyKitabForm)
  const [confirmDeleteKitab, setConfirmDeleteKitab] = useState<KitabRow | null>(null)

  // kelola bab
  const [openKitab, setOpenKitab] = useState<KitabRow | null>(null)
  const [babItems, setBabItems] = useState<BabRow[] | null>(null)
  const [babDialog, setBabDialog] = useState<'closed' | 'new' | 'edit'>('closed')
  const [editingBab, setEditingBab] = useState<BabRow | null>(null)
  const [babForm, setBabForm] = useState<BabForm>(emptyBabForm)
  const [confirmDeleteBab, setConfirmDeleteBab] = useState<BabRow | null>(null)

  const load = useCallback(async () => {
    try {
      const r = await fetch('/api/cms/kitab')
      const j = await r.json().catch(() => ({}))
      if (r.ok && Array.isArray(j.items)) setItems(j.items)
      else setItems([])
    } catch {
      setItems([])
    }
  }, [])

  useEffect(() => { void load() }, [load])

  const loadBab = useCallback(async (kitabId: string) => {
    setBabItems(null)
    try {
      const r = await fetch(`/api/cms/kitab?id=${encodeURIComponent(kitabId)}`)
      const j = await r.json().catch(() => ({}))
      if (r.ok && j.kitab) setBabItems(Array.isArray(j.kitab.bab) ? j.kitab.bab : [])
      else setBabItems([])
    } catch {
      setBabItems([])
    }
  }, [])

  const openBabManager = (k: KitabRow) => {
    setOpenKitab(k)
    setBabItems(null)
    void loadBab(k.id)
  }

  // ---------- aksi kitab ----------
  const saveKitab = async () => {
    if (kitabForm.titleId.trim().length < 2 || kitabForm.titleAr.trim().length < 2) {
      toast({ title: 'Judul Indonesia dan judul Arab wajib diisi (min. 2 huruf).', variant: 'destructive' })
      return
    }
    setBusy(true)
    try {
      const isEdit = kitabDialog === 'edit' && editingKitab
      const r = await fetch('/api/cms/kitab', {
        method: isEdit ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isEdit ? { id: editingKitab.id, ...kitabForm } : kitabForm),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal menyimpan kitab', description: j.error, variant: 'destructive' }); return }
      toast({ title: isEdit ? 'Kitab diperbarui.' : 'Kitab baru dibuat — silakan tulis babnya satu per satu.' })
      setKitabDialog('closed')
      await load()
    } finally {
      setBusy(false)
    }
  }

  const toggleKitabStatus = async (k: KitabRow) => {
    const next = k.status === 'published' ? 'draft' : 'published'
    setBusy(true)
    try {
      const r = await fetch('/api/cms/kitab', {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: k.id, status: next }),
      })
      if (r.ok) {
        toast({ title: next === 'published' ? 'Kitab diterbitkan di section "Kitab".' : 'Kitab dikembalikan ke draf.' })
        await load()
      } else {
        toast({ title: 'Gagal mengubah status kitab', variant: 'destructive' })
      }
    } finally {
      setBusy(false)
    }
  }

  const deleteKitab = async () => {
    if (!confirmDeleteKitab) return
    const target = confirmDeleteKitab
    setConfirmDeleteKitab(null)
    setBusy(true)
    try {
      const r = await fetch(`/api/cms/kitab?id=${encodeURIComponent(target.id)}`, { method: 'DELETE' })
      if (r.ok) {
        toast({ title: `Kitab "${target.titleId}" dihapus bersama seluruh babnya.` })
        await load()
      } else {
        toast({ title: 'Gagal menghapus kitab', variant: 'destructive' })
      }
    } finally {
      setBusy(false)
    }
  }

  // ---------- aksi bab ----------
  const saveBab = async () => {
    if (!openKitab) return
    if (babForm.titleId.trim().length < 2 || babForm.titleAr.trim().length < 2) {
      toast({ title: 'Judul bab Indonesia dan Arab wajib diisi.', variant: 'destructive' })
      return
    }
    setBusy(true)
    try {
      const isEdit = babDialog === 'edit' && editingBab
      const r = await fetch('/api/cms/kitab/bab', {
        method: isEdit ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isEdit ? { id: editingBab.id, ...babForm } : { kitabId: openKitab.id, ...babForm }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal menyimpan bab', description: j.error, variant: 'destructive' }); return }
      toast({ title: isEdit ? 'Bab tersimpan.' : 'Bab baru ditambahkan.' })
      setBabDialog('closed')
      await Promise.all([loadBab(openKitab.id), load()])
    } finally {
      setBusy(false)
    }
  }

  const babAction = async (body: Record<string, unknown>, okMsg: string) => {
    if (!openKitab) return
    setBusy(true)
    try {
      const r = await fetch('/api/cms/kitab/bab', {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (r.ok) { toast({ title: okMsg }); await Promise.all([loadBab(openKitab.id), load()]) }
      else toast({ title: 'Gagal memproses bab', variant: 'destructive' })
    } finally {
      setBusy(false)
    }
  }

  const deleteBab = async () => {
    if (!confirmDeleteBab || !openKitab) return
    const target = confirmDeleteBab
    setConfirmDeleteBab(null)
    setBusy(true)
    try {
      const r = await fetch(`/api/cms/kitab/bab?id=${encodeURIComponent(target.id)}`, { method: 'DELETE' })
      if (r.ok) { toast({ title: 'Bab dihapus.' }); await Promise.all([loadBab(openKitab.id), load()]) }
      else toast({ title: 'Gagal menghapus bab', variant: 'destructive' })
    } finally {
      setBusy(false)
    }
  }

  // ---------------- render ----------------
  if (items === null) {
    return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>
  }

  // ---------- tampilan kelola bab ----------
  if (openKitab) {
    const publishedBab = (babItems ?? []).filter((b) => b.status === 'published').length
    return (
      <div className="space-y-4">
        <div className="border-border bg-card flex flex-wrap items-center gap-3 rounded-3xl border p-4 sm:p-5">
          <Button variant="ghost" size="sm" className="-ml-1" onClick={() => { setOpenKitab(null); setBabItems(null) }}>
            <ArrowLeft className="size-4" aria-hidden /> Semua kitab
          </Button>
          <div className="min-w-0 flex-1">
            <h2 className="text-[15px] font-bold leading-tight">{openKitab.titleId}</h2>
            <p className={cn('text-[var(--brass)] mt-0.5 text-[15px]')} dir="rtl" lang="ar">{openKitab.titleAr}</p>
          </div>
          <span className={cn(
            'rounded-full border px-2.5 py-1 text-[11px] font-bold',
            openKitab.status === 'published' ? 'border-emerald-700/30 bg-emerald-50 text-emerald-900' : 'border-amber-700/30 bg-amber-50 text-amber-900',
          )}>
            {openKitab.status === 'published' ? 'Terbit' : 'Draf'} · {publishedBab}/{(babItems ?? []).length || openKitab.babCount} bab terbit
          </span>
          <Button size="sm" onClick={() => {
            setEditingBab(null); setBabForm(emptyBabForm); setBabDialog('new')
          }} disabled={busy}>
            <Plus className="size-4" aria-hidden /> Tulis bab baru
          </Button>
        </div>

        {babItems === null ? (
          <SkeletonCard />
        ) : babItems.length === 0 ? (
          <div className="border-border bg-card/60 rounded-3xl border-2 border-dashed p-10 text-center">
            <Layers className="text-muted-foreground mx-auto size-8" aria-hidden />
            <p className="mt-3 text-[14px] font-semibold">Belum ada bab.</p>
            <p className="text-muted-foreground mx-auto mt-1 max-w-md text-[13px] leading-relaxed">
              Tulis bab satu per satu: judul Arab &amp; Indonesia, teks Arab, terjemah, lalu kunci amalan.
            </p>
          </div>
        ) : (
          <ol className="space-y-2.5">
            {babItems.map((b, idx) => (
              <li key={b.id} className="border-border bg-card flex flex-wrap items-center gap-3 rounded-2xl border p-3.5">
                <span className="bg-secondary text-muted-foreground flex size-9 shrink-0 items-center justify-center rounded-xl text-[13px] font-bold">
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13.5px] font-bold">{b.titleId}</p>
                  <p className={cn('text-muted-foreground mt-0.5 truncate text-[15px]')} dir="rtl" lang="ar">{b.titleAr}</p>
                </div>
                <span className={cn(
                  'rounded-full border px-2 py-0.5 text-[10.5px] font-bold',
                  b.status === 'published' ? 'border-emerald-700/30 bg-emerald-50 text-emerald-900' : 'border-amber-700/30 bg-amber-50 text-amber-900',
                )}>
                  {b.status === 'published' ? 'Terbit' : 'Draf'}
                </span>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="size-8 p-0" aria-label="Naikkan urutan" disabled={busy || idx === 0}
                    onClick={() => void babAction({ id: b.id, move: 'up' }, 'Urutan bab naik.')}>
                    <ArrowUp className="size-4" aria-hidden />
                  </Button>
                  <Button variant="ghost" size="sm" className="size-8 p-0" aria-label="Turunkan urutan" disabled={busy || idx === babItems.length - 1}
                    onClick={() => void babAction({ id: b.id, move: 'down' }, 'Urutan bab turun.')}>
                    <ArrowDown className="size-4" aria-hidden />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-[12px]" disabled={busy}
                    onClick={() => {
                      setEditingBab(b)
                      setBabForm({
                        titleId: b.titleId, titleAr: b.titleAr, arabic: b.arabic,
                        indonesian: b.indonesian, kunciAmal: b.kunciAmal ?? '', status: b.status,
                      })
                      setBabDialog('edit')
                    }}>
                    <Pencil className="size-3.5" aria-hidden /> Sunting
                  </Button>
                  <Button variant="ghost" size="sm" className="text-rose-700 hover:text-rose-800 size-8 p-0" aria-label={`Hapus ${b.titleId}`}
                    onClick={() => setConfirmDeleteBab(b)}>
                    <Trash2 className="size-4" aria-hidden />
                  </Button>
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* dialog editor bab */}
        <Dialog open={babDialog !== 'closed'} onOpenChange={(v) => { if (!v) setBabDialog('closed') }}>
          <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-3xl">
            <DialogHeader>
              <DialogTitle>{babDialog === 'edit' ? 'Sunting bab' : 'Tulis bab baru'} — {openKitab.titleId}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="bab-title-id">Judul bab (Indonesia)</Label>
                  <Input id="bab-title-id" value={babForm.titleId} onChange={(e) => setBabForm((f) => ({ ...f, titleId: e.target.value }))} placeholder="Bab 1 — At-Tauhid wal-Ikhlas" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bab-title-ar">Judul bab (Arab)</Label>
                  <Input id="bab-title-ar" dir="rtl" lang="ar" className={AR_FIELD} value={babForm.titleAr} onChange={(e) => setBabForm((f) => ({ ...f, titleAr: e.target.value }))} placeholder="التَّوْحِيدُ وَالْإِخْلَاصُ" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bab-arabic">Teks Arab (tulis penuh, rata kanan)</Label>
                <Textarea id="bab-arabic" dir="rtl" lang="ar" rows={8} className={cn(AR_FIELD, 'min-h-40')} value={babForm.arabic} onChange={(e) => setBabForm((f) => ({ ...f, arabic: e.target.value }))} placeholder="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ…" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bab-indo">Terjemah Indonesia</Label>
                <Textarea id="bab-indo" rows={8} className="min-h-40" value={babForm.indonesian} onChange={(e) => setBabForm((f) => ({ ...f, indonesian: e.target.value }))} placeholder="Terjemahan makna teks Arab di atas…" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bab-kunci">Kunci amalan (satu poin per baris — opsional)</Label>
                <Textarea id="bab-kunci" rows={3} value={babForm.kunciAmal} onChange={(e) => setBabForm((f) => ({ ...f, kunciAmal: e.target.value }))} placeholder="Periksa niat sebelum wirid&#10;Sembunyikan sebagian amal baik" />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="bab-status" className="shrink-0">Status</Label>
                <select
                  id="bab-status"
                  value={babForm.status}
                  onChange={(e) => setBabForm((f) => ({ ...f, status: e.target.value }))}
                  className="border-border bg-background h-9 rounded-md border px-3 text-[13px]"
                >
                  <option value="draft">Draf</option>
                  <option value="published">Terbit</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-1">
                <Button variant="ghost" onClick={() => setBabDialog('closed')}>Batal</Button>
                <Button onClick={() => void saveBab()} disabled={busy}>
                  {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Check className="size-4" aria-hidden />} Simpan bab
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* dialog hapus bab */}
        <Dialog open={confirmDeleteBab !== null} onOpenChange={(v) => { if (!v) setConfirmDeleteBab(null) }}>
          <DialogContent className="max-w-sm rounded-3xl">
            <DialogHeader>
              <DialogTitle>Hapus bab?</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground text-[13px] leading-relaxed">
              Bab &ldquo;{confirmDeleteBab?.titleId}&rdquo; beserta teks Arab dan terjemahnya akan terhapus permanen.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setConfirmDeleteBab(null)}>Batal</Button>
              <Button variant="destructive" onClick={() => void deleteBab()} disabled={busy}>
                <Trash2 className="size-4" aria-hidden /> Hapus
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  // ---------- tampilan daftar kitab ----------
  return (
    <div className="space-y-5">
      <div className="border-[var(--brass)]/40 bg-[var(--brass-soft)] flex flex-wrap items-center gap-3 rounded-3xl border p-4 sm:p-5">
        <BookMarked className="text-[var(--brass)] size-6 shrink-0" aria-hidden />
        <div className="min-w-0 flex-1">
          <h2 className="text-[15px] font-bold">Kitab 165 — ditulis satu per satu</h2>
          <p className="text-muted-foreground mt-0.5 text-[13px] leading-relaxed">
            Buat kitab, lalu tulis babnya satu per satu dalam Bahasa Arab dan Indonesia. Yang terbit langsung tampil di section &ldquo;Kitab&rdquo;.
          </p>
        </div>
        <Button onClick={() => {
          setEditingKitab(null); setKitabForm(emptyKitabForm); setKitabDialog('new')
        }} disabled={busy}>
          <Plus className="size-4" aria-hidden /> Kitab baru
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="border-border bg-card/60 rounded-3xl border-2 border-dashed p-10 text-center">
          <BookMarked className="text-muted-foreground mx-auto size-8" aria-hidden />
          <p className="mt-3 text-[14px] font-semibold">Belum ada kitab.</p>
          <p className="text-muted-foreground mx-auto mt-1 max-w-md text-[13px] leading-relaxed">
            Mulai kitab pertama: beri judul Arab &amp; Indonesia, lalu tulis babnya satu per satu.
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((k) => (
            <article key={k.id} className="border-border bg-card flex flex-col rounded-2xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <span className={cn(
                  'rounded-full border px-2 py-0.5 text-[10.5px] font-bold',
                  k.status === 'published' ? 'border-emerald-700/30 bg-emerald-50 text-emerald-900' : 'border-amber-700/30 bg-amber-50 text-amber-900',
                )}>
                  {k.status === 'published' ? 'Terbit' : 'Draf'}
                </span>
                <span className="text-muted-foreground inline-flex items-center gap-1 text-[11.5px] font-semibold">
                  <Layers className="size-3.5" aria-hidden /> {k.babCount} bab
                </span>
              </div>
              <p className={cn('mt-3 text-right text-[19px] leading-snug text-[var(--brass)]')} dir="rtl" lang="ar">{k.titleAr}</p>
              <h3 className="mt-1 text-[14.5px] font-bold leading-snug">{k.titleId}</h3>
              {k.subtitleId && <p className="text-muted-foreground mt-1 line-clamp-2 text-[12px] leading-relaxed">{k.subtitleId}</p>}
              <p className="text-muted-foreground mt-2 line-clamp-1 text-[11.5px]">{k.author}</p>
              <div className="mt-3 flex items-center gap-1.5 border-t border-border/60 pt-3">
                <Button size="sm" className="h-8 flex-1 text-[12px]" onClick={() => openBabManager(k)}>
                  <ChevronRight className="size-3.5" aria-hidden /> Kelola bab
                </Button>
                <Button size="sm" variant="outline" className="h-8 px-2.5" aria-label={`Sunting ${k.titleId}`}
                  onClick={() => {
                    setEditingKitab(k)
                    setKitabForm({
                      titleId: k.titleId, titleAr: k.titleAr, subtitleId: k.subtitleId ?? '',
                      ledeId: k.ledeId ?? '', ledeAr: k.ledeAr ?? '', status: k.status,
                    })
                    setKitabDialog('edit')
                  }}>
                  <Pencil className="size-3.5" aria-hidden />
                </Button>
                <Button size="sm" variant={k.status === 'published' ? 'secondary' : 'outline'} className="h-8 px-2.5"
                  aria-label={k.status === 'published' ? 'Kembalikan ke draf' : 'Terbitkan kitab'} disabled={busy}
                  onClick={() => void toggleKitabStatus(k)}>
                  {k.status === 'published' ? <Lock className="size-3.5" aria-hidden /> : <Check className="size-3.5" aria-hidden />}
                </Button>
                <Button size="sm" variant="ghost" className="text-rose-700 hover:text-rose-800 h-8 px-2.5" aria-label={`Hapus ${k.titleId}`}
                  onClick={() => setConfirmDeleteKitab(k)}>
                  <Trash2 className="size-3.5" aria-hidden />
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* dialog form kitab */}
      <Dialog open={kitabDialog !== 'closed'} onOpenChange={(v) => { if (!v) setKitabDialog('closed') }}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle>{kitabDialog === 'edit' ? 'Sunting kitab' : 'Buat kitab baru'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="kitab-title-id">Judul (Indonesia)</Label>
                <Input id="kitab-title-id" value={kitabForm.titleId} onChange={(e) => setKitabForm((f) => ({ ...f, titleId: e.target.value }))} placeholder="Fathur Rabbani — Bukaan dari Tuhan" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="kitab-title-ar">Judul (Arab)</Label>
                <Input id="kitab-title-ar" dir="rtl" lang="ar" className={AR_FIELD} value={kitabForm.titleAr} onChange={(e) => setKitabForm((f) => ({ ...f, titleAr: e.target.value }))} placeholder="الفَتْحُ الرَّبَّانِي" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="kitab-subtitle">Subjudul (Indonesia)</Label>
              <Input id="kitab-subtitle" value={kitabForm.subtitleId} onChange={(e) => setKitabForm((f) => ({ ...f, subtitleId: e.target.value }))} placeholder="Jilid 1 — jalan tawhid, dzikir, dan adab" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="kitab-lede-id">Pengantar (Indonesia)</Label>
              <Textarea id="kitab-lede-id" rows={3} value={kitabForm.ledeId} onChange={(e) => setKitabForm((f) => ({ ...f, ledeId: e.target.value }))} placeholder="Kitab ini disusun…" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="kitab-lede-ar">Pengantar (Arab)</Label>
              <Textarea id="kitab-lede-ar" dir="rtl" lang="ar" rows={3} className={cn(AR_FIELD, 'text-right')} value={kitabForm.ledeAr} onChange={(e) => setKitabForm((f) => ({ ...f, ledeAr: e.target.value }))} />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="kitab-status" className="shrink-0">Status</Label>
              <select
                id="kitab-status"
                value={kitabForm.status}
                onChange={(e) => setKitabForm((f) => ({ ...f, status: e.target.value }))}
                className="border-border bg-background h-9 rounded-md border px-3 text-[13px]"
              >
                <option value="draft">Draf</option>
                <option value="published">Terbit</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <Button variant="ghost" onClick={() => setKitabDialog('closed')}><X className="size-4" aria-hidden /> Batal</Button>
              <Button onClick={() => void saveKitab()} disabled={busy}>
                {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Check className="size-4" aria-hidden />} Simpan kitab
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* dialog hapus kitab */}
      <Dialog open={confirmDeleteKitab !== null} onOpenChange={(v) => { if (!v) setConfirmDeleteKitab(null) }}>
        <DialogContent className="max-w-sm rounded-3xl">
          <DialogHeader>
            <DialogTitle>Hapus kitab?</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-[13px] leading-relaxed">
            Kitab &ldquo;{confirmDeleteKitab?.titleId}&rdquo; beserta {confirmDeleteKitab?.babCount ?? 0} bab akan terhapus permanen.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmDeleteKitab(null)}>Batal</Button>
            <Button variant="destructive" onClick={() => void deleteKitab()} disabled={busy}>
              <Trash2 className="size-4" aria-hidden /> Hapus
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
