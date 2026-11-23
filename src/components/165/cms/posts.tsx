'use client'

// ============================================================
// CMS 165 — Daftar Konten: tabel artikel / halaman dengan tab
// status (Semua, Terbit, Draf, Sampah), pencarian, filter kategori,
// aksi cepat (edit, lihat, sematkan, sampah) + penomoran halaman.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import {
  Eye, Loader2, Pencil, Pin, PinOff, Plus, RefreshCw, Search, Trash2, Undo2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SkeletonCard } from '../ui'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { fmtDateTime } from '@/lib/cms'
import type { CmsCategoryRow, CmsPostRow } from './types'

type StatusTab = 'all' | 'published' | 'draft' | 'trash'

const STATUS_STYLE: Record<string, string> = {
  published: 'border-emerald-700/30 bg-emerald-50 text-emerald-900',
  draft: 'border-amber-700/30 bg-amber-50 text-amber-900',
  trash: 'border-rose-700/30 bg-rose-50 text-rose-900',
}
const STATUS_LABEL: Record<string, string> = { published: 'Terbit', draft: 'Draf', trash: 'Sampah' }

export function PostList({
  type, categories, onEdit, onCreate,
}: {
  type: 'post' | 'page'
  categories: CmsCategoryRow[]
  onEdit: (row: CmsPostRow) => void
  onCreate: () => void
}) {
  const [tab, setTab] = useState<StatusTab>('all')
  const [q, setQ] = useState('')
  const [qDebounced, setQDebounced] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState<CmsPostRow[]>([])
  const [counts, setCounts] = useState({ all: 0, published: 0, draft: 0, trash: 0 })
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [busyId, setBusyId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const t = window.setTimeout(() => setQDebounced(q), 350)
    return () => window.clearTimeout(t)
  }, [q])

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const sp = new URLSearchParams({ type, tab: '', status: tab, page: String(page), perPage: '10' })
      if (qDebounced) sp.set('q', qDebounced)
      if (categoryId) sp.set('categoryId', categoryId)
      const r = await fetch(`/api/cms/posts?${sp.toString()}`)
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: j.error ?? 'Gagal memuat', variant: 'destructive' }); return }
      setRows(Array.isArray(j.items) ? j.items : [])
      setCounts(j.counts ?? { all: 0, published: 0, draft: 0, trash: 0 })
      setTotal(j.total ?? 0)
      setPages(Math.max(1, Math.ceil((j.total ?? 0) / (j.perPage ?? 10))))
    } finally {
      setLoading(false)
    }
  }, [type, tab, page, qDebounced, categoryId, toast])

  useEffect(() => { void load() }, [load])

  const act = async (row: CmsPostRow, action: 'trash' | 'restore' | 'delete' | 'pin') => {
    setBusyId(row.id)
    try {
      if (action === 'pin') {
        const r = await fetch(`/api/cms/posts/${row.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pinned: !row.pinned }),
        })
        if (r.ok) toast({ title: row.pinned ? 'Batal disematkan' : 'Disematkan di atas', description: row.title })
        await load()
        return
      }
      if (action === 'restore') {
        const r = await fetch(`/api/cms/posts/${row.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'draft' }),
        })
        if (r.ok) toast({ title: 'Dikembalikan ke draf', description: row.title })
        await load()
        return
      }
      const r = await fetch(`/api/cms/posts/${row.id}`, { method: 'DELETE' })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal', description: j.error, variant: 'destructive' }); return }
      toast({ title: j.mode === 'permanent' ? 'Dihapus permanen' : 'Dipindah ke sampah', description: row.title })
      await load()
    } finally {
      setBusyId(null)
    }
  }

  const isPage = type === 'page'
  const TABS: Array<{ key: StatusTab; label: string; count: number }> = [
    { key: 'all', label: 'Semua', count: counts.all },
    { key: 'published', label: 'Terbit', count: counts.published },
    { key: 'draft', label: 'Draf', count: counts.draft },
    { key: 'trash', label: 'Sampah', count: counts.trash },
  ]

  return (
    <div className="space-y-4">
      {/* kepala: judul + aksi */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold">{isPage ? 'Halaman' : 'Artikel'} <span className="text-muted-foreground text-[13px] font-medium">({total})</span></h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => void load()} aria-label="Muat ulang">
            <RefreshCw className={cn('size-4', loading && 'animate-spin')} aria-hidden />
          </Button>
          <Button onClick={onCreate}>
            <Plus className="size-4" aria-hidden /> Tulis {isPage ? 'Halaman' : 'Artikel'}
          </Button>
        </div>
      </div>

      {/* filter bar */}
      <div className="border-border bg-card/70 flex flex-wrap items-center gap-2 rounded-2xl border p-2">
        <div className="flex flex-wrap items-center gap-1">
          {TABS.map((t) => (
            <button
              key={t.key} type="button" aria-pressed={tab === t.key}
              onClick={() => { setTab(t.key); setPage(1) }}
              className={cn(
                'rounded-full px-3 py-1.5 text-[12.5px] font-bold transition-all active:scale-95',
                tab === t.key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              {t.label} <span className={cn('text-[11px]', tab === t.key ? 'opacity-80' : 'opacity-60')}>({t.count})</span>
            </button>
          ))}
        </div>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          {type === 'post' && categories.length > 0 && (
            <Select value={categoryId || 'all'} onValueChange={(v) => { setCategoryId(v === 'all' ? '' : v); setPage(1) }}>
              <SelectTrigger aria-label="Filter kategori" className="h-9 w-40 text-[12.5px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua kategori</SelectItem>
                {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
              </SelectContent>
            </Select>
          )}
          <div className="relative">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" aria-hidden />
            <Input value={q} onChange={(e) => { setQ(e.target.value); setPage(1) }} placeholder="Cari judul…" aria-label="Cari konten" className="h-9 w-44 pl-8 text-[13px]" />
          </div>
        </div>
      </div>

      {/* daftar */}
      {loading && rows.length === 0 ? (
        <div className="grid gap-3"><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>
      ) : rows.length === 0 ? (
        <div className="border-border bg-card/60 rounded-3xl border-2 border-dashed px-6 py-12 text-center">
          <p className="font-display text-base font-semibold">
            {tab === 'trash' ? 'Sampah kosong' : isPage ? 'Belum ada halaman' : 'Belum ada artikel'}
          </p>
          <p className="text-muted-foreground mt-1 text-[13px]">
            {isPage ? 'Halaman cocok untuk “Tentang”, “Kontak”, atau ketentuan yang menetap.' : 'Mulai dengan menekan tombol hijau “Tulis Artikel”.'}
          </p>
        </div>
      ) : (
        <ul className="space-y-2.5">
          {rows.map((row) => (
            <li key={row.id} className="border-border bg-card group rounded-2xl border p-3.5 transition-shadow hover:shadow-md">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {row.pinned && <Pin className="text-[var(--brass)] size-3.5 shrink-0" aria-label="Tersemat" aria-hidden />}
                    <h3 className="truncate text-[14.5px] font-bold">{row.title}</h3>
                    <span className={cn('inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10.5px] font-bold leading-none', STATUS_STYLE[row.status] ?? '')}>
                      {STATUS_LABEL[row.status] ?? row.status}
                    </span>
                    {row.category && (
                      <span className="bg-secondary text-muted-foreground inline-flex shrink-0 items-center rounded-full border border-border px-2 py-0.5 text-[10.5px] font-bold leading-none">
                        {row.category.name}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-1 line-clamp-2 text-[12.5px] leading-relaxed">{row.excerpt || '—'}</p>
                  <p className="text-muted-foreground mt-1.5 text-[11px]">
                    Diperbarui {fmtDateTime(row.updatedAt)}
                    {row.publishedAt ? ` · Terbit ${fmtDateTime(row.publishedAt)}` : ''}
                    {type === 'post' ? ` · ${row.views} dilihat · ${row.comments} komentar` : ''}
                  </p>
                </div>

                {/* aksi */}
                <div className="flex shrink-0 items-center gap-1">
                  {busyId === row.id && <Loader2 className="text-muted-foreground size-4 animate-spin" aria-hidden />}
                  {row.status === 'published' && (
                    <Button
                      variant="ghost" size="icon" aria-label={row.pinned ? 'Batal sematkan' : 'Sematkan'}
                      title={row.pinned ? 'Batal sematkan' : 'Sematkan di atas'}
                      onClick={() => void act(row, 'pin')}
                    >
                      {row.pinned ? <PinOff className="size-4" aria-hidden /> : <Pin className="size-4" aria-hidden />}
                    </Button>
                  )}
                  {row.status === 'published' && (
                    <Button variant="ghost" size="icon" asChild aria-label="Lihat di blog">
                      <a href={`#blog/${row.slug}`} title="Lihat di blog"><Eye className="size-4" aria-hidden /></a>
                    </Button>
                  )}
                  {row.status === 'trash' ? (
                    <>
                      <Button variant="ghost" size="icon" aria-label="Kembalikan" title="Kembalikan ke draf" onClick={() => void act(row, 'restore')}>
                        <Undo2 className="size-4" aria-hidden />
                      </Button>
                      <Button variant="ghost" size="icon" aria-label="Hapus permanen" title="Hapus permanen" className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40" onClick={() => void act(row, 'delete')}>
                        <Trash2 className="size-4" aria-hidden />
                      </Button>
                    </>
                  ) : (
                    <Button variant="ghost" size="icon" aria-label="Ubah" title="Ubah" onClick={() => onEdit(row)}>
                      <Pencil className="size-4" aria-hidden />
                    </Button>
                  )}
                  {row.status !== 'trash' && (
                    <Button variant="ghost" size="icon" aria-label="Pindah ke sampah" title="Pindah ke sampah" className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40" onClick={() => void act(row, 'trash')}>
                      <Trash2 className="size-4" aria-hidden />
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* halaman */}
      {pages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-1">
          <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Sebelumnya</Button>
          <span className="text-muted-foreground text-[12.5px] font-semibold">Halaman {page} dari {pages}</span>
          <Button variant="outline" size="sm" disabled={page >= pages} onClick={() => setPage((p) => Math.min(pages, p + 1))}>Selanjutnya</Button>
        </div>
      )}
    </div>
  )
}
