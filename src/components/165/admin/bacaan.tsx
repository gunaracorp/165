'use client'

// ============================================================
// 165 — RUANG ADMIN: PANEL BACAAN (CMS seperti WordPress)
// CRUD penuh untuk Wiridian & Bacaan: qasidah, sholawat,
// wiridian, dzikir — Arab + Latin + arti Sunda & Indonesia +
// tafsir. Disiplin terjaga: grade & status wajib, sumber wajib
// diisi untuk kredibilitas, audit log ditulis server-side.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import { Plus, RefreshCw, Save, Trash2, Pencil, Loader2, ScrollText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type Verse = {
  order: number
  arabic: string
  latin: string | null
  meaningSu: string | null
  meaningId: string | null
  tafsirId: string | null
  tafsirAr: string | null
}

type Entry = {
  id: string
  slug: string
  order: number
  kind: string
  titleAr: string
  titleId: string
  titleSu: string | null
  subtitleId: string | null
  ledeId: string | null
  grade: string
  status: string
  sourceRef: string | null
  noteId: string | null
  visibility: string
  verses: Verse[]
}

type Draft = {
  id?: string
  order: number
  kind: string
  titleAr: string
  titleId: string
  titleSu: string
  subtitleId: string
  ledeId: string
  grade: string
  status: string
  sourceRef: string
  noteId: string
  visibility: string
  verses: { order: number; arabic: string; latin: string; meaningSu: string; meaningId: string; tafsirId: string; tafsirAr: string }[]
}

const KINDS = ['QASIDAH', 'SHOLAWAT', 'WIRIDIAN', 'DZIKIR', 'DUAA']
const GRADES = ['A', 'B', 'C', 'D', 'E', 'F']
const STATUSES = ['DOCUMENTED', 'TRADITIONAL_ACCOUNT', 'DISPUTED', 'UNVERIFIED']
const KIND_LABELS: Record<string, string> = { QASIDAH: 'Qasidah', SHOLAWAT: 'Sholawat', WIRIDIAN: 'Wiridian', DZIKIR: 'Dzikir', DUAA: 'Doa' }

const EMPTY_VERSE = { order: 1, arabic: '', latin: '', meaningSu: '', meaningId: '', tafsirId: '', tafsirAr: '' }

function emptyDraft(): Draft {
  return {
    order: 99, kind: 'QASIDAH', titleAr: '', titleId: '', titleSu: '', subtitleId: '', ledeId: '',
    grade: 'B', status: 'TRADITIONAL_ACCOUNT', sourceRef: '', noteId: '', visibility: 'PUBLIC',
    verses: [{ ...EMPTY_VERSE }],
  }
}

function draftFromEntry(e: Entry): Draft {
  return {
    id: e.id, order: e.order, kind: e.kind, titleAr: e.titleAr, titleId: e.titleId,
    titleSu: e.titleSu ?? '', subtitleId: e.subtitleId ?? '', ledeId: e.ledeId ?? '',
    grade: e.grade, status: e.status, sourceRef: e.sourceRef ?? '', noteId: e.noteId ?? '',
    visibility: e.visibility,
    verses: e.verses.map((v) => ({
      order: v.order, arabic: v.arabic, latin: v.latin ?? '', meaningSu: v.meaningSu ?? '',
      meaningId: v.meaningId ?? '', tafsirId: v.tafsirId ?? '', tafsirAr: v.tafsirAr ?? '',
    })),
  }
}

// ---------- form ----------
function BacaanForm({ draft, onDone, onCancel }: { draft: Draft; onDone: () => void; onCancel: () => void }) {
  const [d, setD] = useState<Draft>(draft)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const set = (k: keyof Draft, v: string | number) => setD((p) => ({ ...p, [k]: v }))
  const setVerse = (i: number, k: keyof Draft['verses'][number], v: string) =>
    setD((p) => ({ ...p, verses: p.verses.map((vv, ii) => (ii === i ? { ...vv, [k]: v } : vv)) }))

  const save = async () => {
    setBusy(true)
    setError(null)
    try {
      const payload = { ...d, verses: d.verses.filter((v) => v.arabic.trim().length > 0).map((v, i) => ({ ...v, order: i + 1 })) }
      const url = d.id ? `/api/admin/wiridian/${d.id}` : '/api/admin/wiridian'
      const r = await fetch(url, {
        method: d.id ? 'PUT' : 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(j.error ?? `Gagal menyimpan (${r.status})`)
      onDone()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal menyimpan.')
    } finally {
      setBusy(false)
    }
  }

  const field = 'w-full rounded-xl border border-border bg-background px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-ring'

  return (
    <div className="space-y-4">
      {error && <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-[12.5px] text-rose-600">{error}</p>}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="space-y-1"><Label className="text-[11px]">Jenis</Label>
          <select value={d.kind} onChange={(e) => set('kind', e.target.value)} className={field}>
            {KINDS.map((k) => <option key={k} value={k}>{KIND_LABELS[k]}</option>)}
          </select>
        </div>
        <div className="space-y-1"><Label className="text-[11px]">Urutan</Label>
          <Input type="number" value={d.order} onChange={(e) => set('order', Number(e.target.value))} className={field} />
        </div>
        <div className="space-y-1"><Label className="text-[11px]">Grade (A–F)</Label>
          <select value={d.grade} onChange={(e) => set('grade', e.target.value)} className={field}>
            {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="space-y-1"><Label className="text-[11px]">Status</Label>
          <select value={d.status} onChange={(e) => set('status', e.target.value)} className={field}>
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1"><Label className="text-[11px]">Judul Arab *</Label>
          <Input dir="rtl" lang="ar" value={d.titleAr} onChange={(e) => set('titleAr', e.target.value)} className={cn(field, 'text-[16px]')} />
        </div>
        <div className="space-y-1"><Label className="text-[11px]">Judul Indonesia *</Label>
          <Input value={d.titleId} onChange={(e) => set('titleId', e.target.value)} className={field} />
        </div>
        <div className="space-y-1"><Label className="text-[11px]">Judul Sunda</Label>
          <Input value={d.titleSu} onChange={(e) => set('titleSu', e.target.value)} className={field} />
        </div>
        <div className="space-y-1"><Label className="text-[11px]">Sub-judul</Label>
          <Input value={d.subtitleId} onChange={(e) => set('subtitleId', e.target.value)} className={field} />
        </div>
      </div>

      <div className="space-y-1"><Label className="text-[11px]">Lede / pengantar</Label>
        <textarea value={d.ledeId} onChange={(e) => set('ledeId', e.target.value)} rows={3} className={cn(field, 'resize-y')} />
      </div>

      <div className="border-border overflow-hidden rounded-xl border">
        <div className="bg-secondary/50 flex items-center justify-between px-3 py-2">
          <p className="text-[12px] font-semibold">Bait-bait ({d.verses.length})</p>
          <Button type="button" size="sm" variant="outline" onClick={() => setD((p) => ({ ...p, verses: [...p.verses, { ...EMPTY_VERSE, order: p.verses.length + 1 }] }))}>
            <Plus className="size-3.5" aria-hidden /> Bait
          </Button>
        </div>
        <div className="max-h-[46vh] space-y-3 overflow-y-auto p-3">
          {d.verses.map((v, i) => (
            <div key={i} className="border-border/70 bg-card space-y-2 rounded-xl border p-3">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-[11px] font-semibold">Bait {i + 1}</p>
                {d.verses.length > 1 && (
                  <Button type="button" size="sm" variant="ghost" onClick={() => setD((p) => ({ ...p, verses: p.verses.filter((_, ii) => ii !== i).map((vv, ii) => ({ ...vv, order: ii + 1 })) }))}>
                    <Trash2 className="size-3.5" aria-hidden />
                  </Button>
                )}
              </div>
              <textarea dir="rtl" lang="ar" placeholder="Teks Arab" value={v.arabic} onChange={(e) => setVerse(i, 'arabic', e.target.value)} rows={2} className={cn(field, 'text-[16px] leading-loose')} />
              <Input placeholder="Transliterasi Latin" value={v.latin} onChange={(e) => setVerse(i, 'latin', e.target.value)} className={field} />
              <Input placeholder="Arti Bahasa Sunda" value={v.meaningSu} onChange={(e) => setVerse(i, 'meaningSu', e.target.value)} className={field} />
              <Input placeholder="Arti Bahasa Indonesia" value={v.meaningId} onChange={(e) => setVerse(i, 'meaningId', e.target.value)} className={field} />
              <textarea placeholder="Tafsir (Indonesia)" value={v.tafsirId} onChange={(e) => setVerse(i, 'tafsirId', e.target.value)} rows={3} className={cn(field, 'resize-y')} />
              <textarea dir="rtl" lang="ar" placeholder="Tafsir singkat (Arab)" value={v.tafsirAr} onChange={(e) => setVerse(i, 'tafsirAr', e.target.value)} rows={2} className={cn(field, 'text-[15px] leading-loose resize-y')} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-1"><Label className="text-[11px]">Sumber (wajib untuk kredibilitas)</Label>
        <textarea value={d.sourceRef} onChange={(e) => set('sourceRef', e.target.value)} rows={2} className={cn(field, 'resize-y font-mono text-[12px]')} />
      </div>
      <div className="space-y-1"><Label className="text-[11px]">Catatan adab & amalan</Label>
        <textarea value={d.noteId} onChange={(e) => set('noteId', e.target.value)} rows={2} className={cn(field, 'resize-y')} />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label className="text-muted-foreground flex items-center gap-1.5 text-[12px]">
          <input type="checkbox" checked={d.visibility === 'PRIVATE'} onChange={(e) => set('visibility', e.target.checked ? 'PRIVATE' : 'PUBLIC')} className="accent-[var(--brass)]" />
          Privat (tidak tampil di ruang publik)
        </label>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm" onClick={onCancel}>Batal</Button>
          <Button size="sm" onClick={save} disabled={busy || !d.titleAr.trim() || !d.titleId.trim()}>
            {busy ? <Loader2 className="size-3.5 animate-spin" aria-hidden /> : <Save className="size-3.5" aria-hidden />}
            Simpan
          </Button>
        </div>
      </div>
    </div>
  )
}

export function BacaanPanel() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editing, setEditing] = useState<Draft | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [syncing, setSyncing] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const r = await fetch('/api/admin/wiridian')
      const j = await r.json()
      if (!r.ok) throw new Error(j.error ?? 'Gagal memuat')
      setEntries(j.entries ?? [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal memuat bacaan.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void load() }, [load])

  const sync = async () => {
    setSyncing(true)
    setNotice(null)
    try {
      const r = await fetch('/api/admin/wiridian', { method: 'PUT' })
      const j = await r.json()
      if (!r.ok) throw new Error(j.error ?? 'Gagal sinkron')
      setNotice(`Sinkron ulang dari arsip: ${j.synced} entri.`)
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal sinkron.')
    } finally {
      setSyncing(false)
    }
  }

  const remove = async (e: Entry) => {
    if (!window.confirm(`Hapus bacaan "${e.titleId}"? Versi arsip masih tersimpan di git — tapi ini menghapus dari CMS.`)) return
    setBusyId(e.id)
    try {
      const r = await fetch(`/api/admin/wiridian/${e.id}`, { method: 'DELETE' })
      if (!r.ok) throw new Error('Gagal menghapus')
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal menghapus.')
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => setEditing(emptyDraft())}>
          <Plus className="size-3.5" aria-hidden /> Bacaan baru
        </Button>
        <Button size="sm" variant="outline" onClick={sync} disabled={syncing}>
          <RefreshCw className={cn('size-3.5', syncing && 'animate-spin')} aria-hidden /> Sinkron dari arsip
        </Button>
        {notice && <span className="text-[12px] text-emerald-600">{notice}</span>}
      </div>

      {error && <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-[12.5px] text-rose-600">{error}</p>}

      {loading ? (
        <div className="animate-pulse space-y-2">
          {[0, 1, 2].map((i) => <div key={i} className="bg-muted h-14 rounded-xl" />)}
        </div>
      ) : entries.length === 0 ? (
        <p className="text-muted-foreground rounded-xl border border-dashed px-4 py-8 text-center text-[13px]">
          Belum ada bacaan di CMS. Klik <strong>Sinkron dari arsip</strong> untuk mengisi 4 bacaan inti, atau buat baru.
        </p>
      ) : (
        <div className="space-y-2">
          {entries.map((e) => (
            <div key={e.id} className="border-border bg-card flex flex-wrap items-center gap-3 rounded-xl border px-4 py-3">
              <ScrollText className="text-primary size-4 shrink-0" aria-hidden />
              <div className="min-w-0 flex-1">
                <p dir="rtl" lang="ar" className="text-[16px] leading-snug">{e.titleAr}</p>
                <p className="text-muted-foreground truncate text-[12px]">{e.titleId} · {KIND_LABELS[e.kind] ?? e.kind} · {e.verses.length} bait · urutan {e.order}</p>
              </div>
              <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', e.visibility === 'PUBLIC' ? 'bg-emerald-500/15 text-emerald-700' : 'bg-muted text-muted-foreground')}>
                {e.visibility}
              </span>
              <div className="flex gap-1">
                <Button size="sm" variant="outline" onClick={() => setEditing(draftFromEntry(e))} aria-label={`Edit ${e.titleId}`}>
                  <Pencil className="size-3.5" aria-hidden />
                </Button>
                <Button size="sm" variant="outline" onClick={() => remove(e)} disabled={busyId === e.id} aria-label={`Hapus ${e.titleId}`}>
                  {busyId === e.id ? <Loader2 className="size-3.5 animate-spin" aria-hidden /> : <Trash2 className="size-3.5" aria-hidden />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={!!editing} onOpenChange={(v) => { if (!v) setEditing(null) }}>
        <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-[15px]">{editing?.id ? 'Edit bacaan' : 'Bacaan baru'}</DialogTitle>
          </DialogHeader>
          {editing && (
            <BacaanForm
              draft={editing}
              onDone={() => { setEditing(null); void load() }}
              onCancel={() => setEditing(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
