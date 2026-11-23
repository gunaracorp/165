'use client'

// ============================================================
// CMS 165 — Dasbor: ringkasan angka, aksi cepat, aktivitas
// terbaru (artikel & komentar) dengan moderasi sekali klik.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import {
  BookMarked, BookOpen, CheckCircle2, ChevronRight, Circle, Crown, FileText, Image as ImageIcon,
  Inbox, Layers, Loader2, Mail, MessageSquare, Plus, RefreshCw, UploadCloud, UserPlus, Eye,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SkeletonCard } from '../ui'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { fmtDateTime } from '@/lib/cms'
import type { CmsOverview } from './types'

type CmsTabKey = 'dasbor' | 'artikel' | 'halaman' | 'kitab' | 'taksonomi' | 'komentar' | 'media' | 'peran' | 'pengaturan'

const COMMENT_TONE: Record<string, string> = {
  pending: 'border-amber-700/30 bg-amber-50 text-amber-900',
  approved: 'border-emerald-700/30 bg-emerald-50 text-emerald-900',
  spam: 'border-rose-700/30 bg-rose-50 text-rose-900',
  trash: 'border-stone-400/40 bg-stone-100 text-stone-700',
}
const COMMENT_LABEL: Record<string, string> = { pending: 'Menunggu', approved: 'Disetujui', spam: 'Spam', trash: 'Sampah' }

export function CmsDashboard({
  onNavigate, refreshKey,
}: {
  onNavigate: (tab: CmsTabKey) => void
  refreshKey: number
}) {
  const [data, setData] = useState<CmsOverview | null>(null)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState<string | null>(null)
  const { toast } = useToast()

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const r = await fetch('/api/cms/overview')
      const j = await r.json().catch(() => ({}))
      if (r.ok) setData(j)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void load() }, [load, refreshKey])

  const moderate = async (id: string, status: 'approved' | 'trash') => {
    setBusy(id)
    try {
      const r = await fetch(`/api/cms/comments/${id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (r.ok) {
        toast({ title: status === 'approved' ? 'Komentar disetujui' : 'Komentar dibuang ke sampah' })
        await load()
      } else {
        toast({ title: 'Gagal memoderasi komentar', variant: 'destructive' })
      }
    } finally {
      setBusy(null)
    }
  }

  if (loading && !data) {
    return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>
  }
  if (!data) {
    return (
      <div className="border-border bg-card/60 rounded-3xl border-2 border-dashed p-10 text-center">
        <p className="font-semibold">Dasbor tidak dapat dimuat.</p>
        <Button variant="outline" size="sm" className="mt-3" onClick={() => void load()}>
          <RefreshCw className="size-4" aria-hidden /> Coba lagi
        </Button>
      </div>
    )
  }

  const s = data.stats
  const STATS: Array<{ label: string; value: number; icon: React.ComponentType<{ className?: string }>; tab?: CmsTabKey; tone: string }> = [
    { label: 'Artikel terbit', value: s.published, icon: BookOpen, tab: 'artikel', tone: 'text-emerald-700 bg-emerald-50 border-emerald-700/20' },
    { label: 'Draf artikel', value: s.drafts, icon: FileText, tab: 'artikel', tone: 'text-amber-700 bg-amber-50 border-amber-700/20' },
    { label: 'Halaman', value: s.pages, icon: FileText, tab: 'halaman', tone: 'text-teal-700 bg-teal-50 border-teal-700/20' },
    { label: 'Kitab (Arab–Indonesia)', value: s.kitab, icon: BookMarked, tab: 'kitab', tone: 'text-[#6b4f18] bg-[var(--brass-soft)] border-[var(--brass)]/30' },
    { label: 'Bab kitab terbit', value: s.babPublished, icon: Layers, tab: 'kitab', tone: 'text-[#6b4f18] bg-[var(--brass-soft)] border-[var(--brass)]/30' },
    { label: 'Komentar menunggu', value: s.pendingComments, icon: Inbox, tab: 'komentar', tone: 'text-rose-700 bg-rose-50 border-rose-700/20' },
    { label: 'Media tersimpan', value: s.media, icon: ImageIcon, tab: 'media', tone: 'text-stone-700 bg-stone-100 border-stone-400/40' },
    { label: 'Kategori & Tag', value: s.categories + s.tags, icon: MessageSquare, tab: 'taksonomi', tone: 'text-[#6b4f18] bg-[var(--brass-soft)] border-[var(--brass)]/30' },
    { label: 'Pelanggan kabar', value: s.subscribers, icon: Mail, tone: 'text-teal-700 bg-teal-50 border-teal-700/20' },
    { label: 'Kontribusi masuk', value: s.pendingContributions, icon: UserPlus, tone: 'text-amber-700 bg-amber-50 border-amber-700/20' },
    { label: 'Total komentar', value: s.comments, icon: MessageSquare, tab: 'komentar', tone: 'text-stone-700 bg-stone-100 border-stone-400/40' },
    { label: 'Total dibaca', value: s.views, icon: Eye, tab: 'artikel', tone: 'text-emerald-700 bg-emerald-50 border-emerald-700/20' },
  ]

  const steps: Array<{ label: string; done: boolean; tab?: CmsTabKey }> = [
    { label: 'Aktifkan Peran & Persona (Dewan Pakar 46)', done: s.personas > 0 && data.activePersona !== null, tab: 'peran' },
    { label: 'Terbitkan artikel pertama', done: s.published > 0, tab: 'artikel' },
    { label: 'Buat halaman statis', done: s.pages > 0, tab: 'halaman' },
    { label: 'Terbitkan kitab pertama (dwibahasa Arab–Indonesia)', done: s.kitab > 0 && s.babPublished > 0, tab: 'kitab' },
    { label: 'Susun kategori & tag', done: s.categories > 0, tab: 'taksonomi' },
    { label: 'Unggah media pertama', done: s.media > 0, tab: 'media' },
    { label: 'Terima pelanggan kabar pertama', done: s.subscribers > 0 },
  ]

  return (
    <div className="space-y-6">
      {/* sapaan + aksi cepat */}
      <div className="border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border p-5 sm:p-6">
        <h2 className="font-display text-xl font-bold">Assalamu&apos;alaikum, Admin 165 👋</h2>
        <p className="text-muted-foreground mt-1 text-[13.5px]">Ini ringkasan konten Anda hari ini. Semua perubahan tersimpan aman di database.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" onClick={() => onNavigate('artikel')}><Plus className="size-4" aria-hidden /> Tulis artikel</Button>
          <Button variant="outline" size="sm" onClick={() => onNavigate('halaman')}><FileText className="size-4" aria-hidden /> Buat halaman</Button>
          <Button variant="outline" size="sm" onClick={() => onNavigate('media')}><UploadCloud className="size-4" aria-hidden /> Unggah media</Button>
          <Button variant="outline" size="sm" onClick={() => onNavigate('komentar')}>
            <Inbox className="size-4" aria-hidden /> Moderasi komentar
            {s.pendingComments > 0 && (
              <span className="bg-rose-600 text-primary-foreground ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold">{s.pendingComments}</span>
            )}
          </Button>
        </div>
        {/* peran aktif — siapa yang menulis artikel baru */}
        <div className="border-[var(--brass)]/40 bg-[var(--brass-soft)] mt-4 inline-flex flex-wrap items-center gap-2 rounded-2xl border px-3.5 py-2.5">
          <Crown className="text-[var(--brass)] size-4 shrink-0" aria-hidden />
          {data.activePersona ? (
            <p className="text-[13px]">
              <span className="font-semibold">Menulis sebagai:</span>{' '}
              <span className="font-bold">{data.activePersona.name}</span>
              <span className="text-muted-foreground"> · {data.activePersona.field}</span>
            </p>
          ) : (
            <p className="text-[13px]">Belum ada peran aktif — artikel terbit atas nama <span className="font-semibold">Admin 165</span>.</p>
          )}
          <Button variant="ghost" size="sm" className="h-7 px-2.5 text-[12px]" onClick={() => onNavigate('peran')}>
            Kelola peran <ChevronRight className="size-3.5" aria-hidden />
          </Button>
        </div>
      </div>

      {/* kartu angka */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {STATS.map((st, i) => {
          const inner = (
            <>
              <div className="flex items-center justify-between">
                <st.icon className="size-4 opacity-70" aria-hidden />
                {st.tab && <ChevronRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-70" aria-hidden />}
              </div>
              <p className="mt-2 text-2xl font-bold tabular-nums">{st.value.toLocaleString('id-ID')}</p>
              <p className="text-[11.5px] font-semibold opacity-80">{st.label}</p>
            </>
          )
          const cls = cn('group rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]', st.tone)
          return st.tab ? (
            <button key={`${st.label}-${i}`} type="button" onClick={() => onNavigate(st.tab as CmsTabKey)} className={cls}>{inner}</button>
          ) : (
            <div key={`${st.label}-${i}`} className={cn(cls, 'cursor-default')}>{inner}</div>
          )
        })}
      </div>

      {/* panduan langkah pertama (ala WordPress welcome panel) */}
      <section className="border-border bg-card rounded-2xl border p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-[14px] font-bold">
            <CheckCircle2 className="text-primary size-4" aria-hidden /> Langkah pertama — siapkan situs 165
          </h3>
          <span className="text-muted-foreground rounded-full border border-border px-2.5 py-0.5 text-[11px] font-bold">
            {steps.filter((st) => st.done).length}/{steps.length} selesai
          </span>
        </div>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {steps.map((st) => (
            <li key={st.label} className={cn(
              'flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-[13px]',
              st.done ? 'border-emerald-700/25 bg-emerald-50 text-emerald-900' : 'border-border bg-secondary/40',
            )}>
              {st.done
                ? <CheckCircle2 className="text-emerald-700 size-4 shrink-0" aria-hidden />
                : <Circle className="text-muted-foreground size-4 shrink-0" aria-hidden />}
              <span className={cn('min-w-0 flex-1 font-semibold', st.done && 'line-through opacity-80')}>{st.label}</span>
              {!st.done && st.tab && (
                <Button variant="outline" size="sm" className="h-7 shrink-0 px-2 text-[11px]" onClick={() => onNavigate(st.tab as CmsTabKey)}>
                  Buka
                </Button>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* artikel terbaru */}
        <section className="border-border bg-card min-w-0 rounded-2xl border p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="flex min-w-0 items-center gap-2 text-[14px] font-bold"><BookOpen className="text-primary size-4 shrink-0" aria-hidden /> <span className="truncate">Artikel terbaru</span></h3>
            <Button variant="ghost" size="sm" onClick={() => onNavigate('artikel')}>Lihat semua</Button>
          </div>
          {data.recentPosts.length === 0 ? (
            <p className="text-muted-foreground py-6 text-center text-[13px]">Belum ada artikel. Tulis yang pertama!</p>
          ) : (
            <ul className="divide-border/60 divide-y">
              {data.recentPosts.map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-bold">{p.title}</p>
                    <p className="text-muted-foreground text-[11px]">
                      {p.category ?? 'Tanpa kategori'} · {fmtDateTime(p.updatedAt)} · {p.comments} komentar
                    </p>
                  </div>
                  <span className={cn('shrink-0 rounded-full border px-2 py-0.5 text-[10.5px] font-bold leading-none',
                    p.status === 'published' ? 'border-emerald-700/30 bg-emerald-50 text-emerald-900' : 'border-amber-700/30 bg-amber-50 text-amber-900')}>
                    {p.status === 'published' ? 'Terbit' : 'Draf'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* komentar terbaru */}
        <section className="border-border bg-card min-w-0 rounded-2xl border p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="flex min-w-0 items-center gap-2 text-[14px] font-bold"><Inbox className="text-primary size-4 shrink-0" aria-hidden /> <span className="truncate">Komentar terbaru</span></h3>
            <Button variant="ghost" size="sm" onClick={() => onNavigate('komentar')}>Moderasi</Button>
          </div>
          {data.recentComments.length === 0 ? (
            <p className="text-muted-foreground py-6 text-center text-[13px]">Belum ada komentar masuk.</p>
          ) : (
            <ul className="divide-border/60 divide-y">
              {data.recentComments.map((c) => (
                <li key={c.id} className="py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[13px] font-bold">{c.name}</p>
                    <span className={cn('shrink-0 rounded-full border px-2 py-0.5 text-[10.5px] font-bold leading-none', COMMENT_TONE[c.status] ?? '')}>
                      {COMMENT_LABEL[c.status] ?? c.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 line-clamp-2 text-[12.5px] leading-relaxed">{c.body}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    {busy === c.id && <Loader2 className="text-muted-foreground size-3.5 animate-spin" aria-hidden />}
                    {c.post && <span className="text-muted-foreground truncate text-[11px]">pada “{c.post.title}”</span>}
                    {c.status === 'pending' && (
                      <span className="ml-auto flex shrink-0 gap-1">
                        <Button variant="outline" size="sm" className="h-7 px-2 text-[11.5px]" onClick={() => void moderate(c.id, 'approved')}>
                          Setujui
                        </Button>
                        <Button variant="ghost" size="sm" className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40 h-7 px-2 text-[11.5px]" onClick={() => void moderate(c.id, 'trash')}>
                          Buang
                        </Button>
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
