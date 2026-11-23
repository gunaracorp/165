'use client'

// ============================================================
// CMS 165 — Moderasi Komentar: setujui, tandai spam, buang.
// Tab status mirip WordPress: Menunggu | Disetujui | Spam | Sampah.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import { Check, Loader2, RefreshCw, ShieldAlert, Trash2, Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SkeletonCard } from '../ui'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { fmtDateTime } from '@/lib/cms'
import type { CmsCommentRow } from './types'

type Tab = 'pending' | 'approved' | 'spam' | 'trash'

const TABS: Array<{ key: Tab; label: string }> = [
  { key: 'pending', label: 'Menunggu' },
  { key: 'approved', label: 'Disetujui' },
  { key: 'spam', label: 'Spam' },
  { key: 'trash', label: 'Sampah' },
]

const TONE: Record<string, string> = {
  pending: 'border-amber-700/30 bg-amber-50 text-amber-900',
  approved: 'border-emerald-700/30 bg-emerald-50 text-emerald-900',
  spam: 'border-rose-700/30 bg-rose-50 text-rose-900',
  trash: 'border-stone-400/40 bg-stone-100 text-stone-700',
}

export function CommentsPanel({ onChanged }: { onChanged?: () => void }) {
  const [tab, setTab] = useState<Tab>('pending')
  const [rows, setRows] = useState<CmsCommentRow[]>([])
  const [counts, setCounts] = useState({ pending: 0, approved: 0, spam: 0, trash: 0, all: 0 })
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState<string | null>(null)
  const { toast } = useToast()

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const r = await fetch(`/api/cms/comments?status=${tab}`)
      const j = await r.json().catch(() => ({}))
      if (r.ok) {
        setRows(Array.isArray(j.items) ? j.items : [])
        if (j.counts) setCounts(j.counts)
      }
    } finally {
      setLoading(false)
    }
  }, [tab])

  useEffect(() => { void load() }, [load])

  const set = async (c: CmsCommentRow, status: 'pending' | 'approved' | 'spam' | 'trash') => {
    setBusy(c.id)
    try {
      const r = await fetch(`/api/cms/comments/${c.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (r.ok) {
        toast({ title: status === 'approved' ? 'Komentar disetujui' : status === 'spam' ? 'Ditandai spam' : status === 'trash' ? 'Dibuang ke sampah' : 'Kembali ke menunggu' })
        await load()
        onChanged?.()
      } else {
        toast({ title: 'Gagal memperbarui komentar', variant: 'destructive' })
      }
    } finally { setBusy(null) }
  }

  const del = async (c: CmsCommentRow) => {
    setBusy(c.id)
    try {
      const r = await fetch(`/api/cms/comments/${c.id}`, { method: 'DELETE' })
      const j = await r.json().catch(() => ({}))
      if (r.ok) {
        toast({ title: j.mode === 'permanent' ? 'Dihapus permanen' : 'Dibuang ke sampah' })
        await load()
        onChanged?.()
      }
    } finally { setBusy(null) }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-bold">Komentar</h2>
        <Button variant="ghost" size="sm" onClick={() => void load()} aria-label="Muat ulang">
          <RefreshCw className={cn('size-4', loading && 'animate-spin')} aria-hidden />
        </Button>
      </div>

      {/* tab status */}
      <div className="border-border bg-card/70 flex flex-wrap gap-1 rounded-2xl border p-2">
        {TABS.map((t) => (
          <button key={t.key} type="button" aria-pressed={tab === t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              'rounded-full px-3 py-1.5 text-[12.5px] font-bold transition-all active:scale-95',
              tab === t.key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
            )}>
            {t.label} <span className="text-[11px] opacity-70">({counts[t.key]})</span>
          </button>
        ))}
      </div>

      {loading && rows.length === 0 ? (
        <div className="grid gap-3"><SkeletonCard /><SkeletonCard /></div>
      ) : rows.length === 0 ? (
        <div className="border-border bg-card/60 rounded-3xl border-2 border-dashed px-6 py-10 text-center">
          <p className="font-semibold">Tidak ada komentar di sini.</p>
          <p className="text-muted-foreground mt-1 text-[13px]">Komentar pengunjung akan muncul di tab “Menunggu” untuk disetujui.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {rows.map((c) => (
            <li key={c.id} className="border-border bg-card rounded-2xl border p-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[13.5px] font-bold">{c.name}</p>
                {c.email && <span className="text-muted-foreground text-[11.5px]">&lt;{c.email}&gt;</span>}
                <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-[10.5px] font-bold leading-none', TONE[c.status] ?? '')}>
                  {c.status === 'pending' ? 'Menunggu' : c.status === 'approved' ? 'Disetujui' : c.status === 'spam' ? 'Spam' : 'Sampah'}
                </span>
                <span className="text-muted-foreground ml-auto text-[11px]">{fmtDateTime(c.createdAt)}</span>
              </div>
              <p className="text-muted-foreground mt-2 rounded-xl bg-secondary/40 px-3 py-2.5 text-[13px] leading-relaxed">{c.body}</p>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                {busy === c.id && <Loader2 className="text-muted-foreground size-4 animate-spin" aria-hidden />}
                {c.post && <span className="text-muted-foreground mr-1 text-[11.5px]">pada “{c.post.title}”</span>}
                <span className="ml-auto flex flex-wrap gap-1.5">
                  {c.status !== 'approved' && (
                    <Button variant="outline" size="sm" className="h-8 text-[12px]" onClick={() => void set(c, 'approved')}>
                      <Check className="size-3.5" aria-hidden /> Setujui
                    </Button>
                  )}
                  {c.status !== 'pending' && c.status !== 'trash' && (
                    <Button variant="ghost" size="sm" className="h-8 text-[12px]" onClick={() => void set(c, 'pending')}>
                      <Undo2 className="size-3.5" aria-hidden /> Tahan
                    </Button>
                  )}
                  {c.status !== 'spam' && c.status !== 'trash' && (
                    <Button variant="ghost" size="sm" className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40 h-8 text-[12px]" onClick={() => void set(c, 'spam')}>
                      <ShieldAlert className="size-3.5" aria-hidden /> Spam
                    </Button>
                  )}
                  {c.status === 'trash' ? (
                    <Button variant="ghost" size="sm" className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40 h-8 text-[12px]" onClick={() => void del(c)}>
                      <Trash2 className="size-3.5" aria-hidden /> Hapus permanen
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40 h-8 text-[12px]" onClick={() => void set(c, 'trash')}>
                      <Trash2 className="size-3.5" aria-hidden /> Sampah
                    </Button>
                  )}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
