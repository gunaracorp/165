'use client'

// ============================================================
// 165 — BLOG PUBLIK (wajah pengunjung dari CMS 165)
// Daftar artikel terbit + pencarian + filter kategori + baca satu
// artikel + komentar pengunjung (dimoderasi sesuai pengaturan).
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import {
  ArrowLeft, Calendar, ChevronRight, Eye, FileText, Loader2, MessageSquare,
  Pin, Search, Send,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SkeletonCard, SectionHeading } from '../ui'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { fmtDate, fmtDateTime } from '@/lib/cms'

type PublicPost = {
  id: string; title: string; slug: string; excerpt: string | null
  coverUrl: string | null; pinned: boolean; author: string | null; views: number
  category: { name: string; slug: string } | null; tags: string[]
  publishedAt: string | null
}
type PublicComment = { id: string; name: string; body: string; createdAt: string }
type Meta = { site: { title: string; tagline: string; postsPerPage: number; showAuthors: boolean }; categories: { id: string; name: string; slug: string; posts: number }[] }

export function BlogSection({
  slug, onOpenPost, onBack,
}: {
  slug: string | null
  onOpenPost: (slug: string) => void
  onBack: () => void
}) {
  return slug ? <PostReader slug={slug} onBack={onBack} /> : <BlogList onOpenPost={onOpenPost} />
}

// ---------------- daftar artikel ----------------
function BlogList({ onOpenPost }: { onOpenPost: (slug: string) => void }) {
  const [items, setItems] = useState<PublicPost[]>([])
  const [pages, setPages] = useState<PublicPost[]>([]) // halaman statis terbit
  const [meta, setMeta] = useState<Meta | null>(null)
  const [q, setQ] = useState('')
  const [qDebounced, setQDebounced] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const t = window.setTimeout(() => setQDebounced(q), 350)
    return () => window.clearTimeout(t)
  }, [q])

  useEffect(() => {
    let alive = true
    void (async () => {
      try {
        const r = await fetch('/api/cms/public/meta')
        const j = await r.json().catch(() => ({}))
        if (alive && r.ok) setMeta(j)
      } catch { /* diam */ }
    })()
    return () => { alive = false }
  }, [])

  useEffect(() => {
    let alive = true
    setLoading(true)
    setError(null)
    void (async () => {
      try {
        const sp = new URLSearchParams({ page: String(page) })
        if (qDebounced) sp.set('q', qDebounced)
        if (category) sp.set('category', category)
        const [rp, rpages] = await Promise.all([
          fetch(`/api/cms/public/posts?${sp.toString()}`),
          fetch('/api/cms/public/pages'),
        ])
        const jp = await rp.json().catch(() => ({}))
        if (!alive) return
        if (!rp.ok) { setError(jp.error ?? 'Gagal memuat artikel.'); return }
        setItems(Array.isArray(jp.items) ? jp.items : [])
        setTotal(jp.total ?? 0)
        setTotalPages(jp.pages ?? 1)
        const jr = await rpages.json().catch(() => ({}))
        if (alive && rpages.ok) setPages(Array.isArray(jr.items) ? jr.items : [])
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [qDebounced, category, page])

  return (
    <div className="space-y-6">
      <SectionHeading
        kicker={meta?.site.title ?? 'Blog 165'}
        title="Artikel & Kabar"
        lede={meta?.site.tagline ?? 'Tulisan terbaru dari keluarga 165 — kajian, kabar kegiatan, dan catatan perjalanan ruhani.'}
      />

      {/* halaman statis terbit (bila ada) */}
      {pages.length > 0 && (
        <div className="border-border bg-card/70 flex flex-wrap items-center gap-2 rounded-2xl border p-3">
          <span className="text-muted-foreground inline-flex items-center gap-1.5 pr-1 text-[12px] font-bold uppercase tracking-wide">
            <FileText className="size-3.5" aria-hidden /> Halaman:
          </span>
          {pages.map((p) => (
            <Button key={p.id} variant="secondary" size="sm" className="h-8 text-[12.5px]" onClick={() => onOpenPost(p.slug)}>
              {p.title} <ChevronRight className="size-3" aria-hidden />
            </Button>
          ))}
        </div>
      )}

      {/* filter */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-56">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" aria-hidden />
          <Input value={q} onChange={(e) => { setQ(e.target.value); setPage(1) }} placeholder="Cari artikel…" aria-label="Cari artikel" className="pl-8" />
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <button type="button" aria-pressed={category === ''}
            onClick={() => { setCategory(''); setPage(1) }}
            className={cn('rounded-full px-3 py-1.5 text-[12.5px] font-bold transition-all active:scale-95',
              category === '' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground')}>
            Semua
          </button>
          {(meta?.categories ?? []).map((c) => (
            <button key={c.id} type="button" aria-pressed={category === c.slug}
              onClick={() => { setCategory(c.slug); setPage(1) }}
              className={cn('rounded-full px-3 py-1.5 text-[12.5px] font-bold transition-all active:scale-95',
                category === c.slug ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground')}>
              {c.name} <span className="text-[10.5px] opacity-70">({c.posts})</span>
            </button>
          ))}
        </div>
      </div>

      {/* daftar */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>
      ) : error ? (
        <p role="alert" className="text-muted-foreground rounded-2xl border border-dashed border-rose-700/30 bg-rose-50 px-4 py-6 text-center text-[13px] text-rose-900">{error}</p>
      ) : items.length === 0 ? (
        <div className="border-border bg-card/60 rounded-3xl border-2 border-dashed px-6 py-12 text-center">
          <p className="font-display text-base font-semibold">Belum ada artikel diterbitkan.</p>
          <p className="text-muted-foreground mt-1.5 text-[13px] leading-relaxed">
            Konten ditulis lewat <a href="#cms" className="text-primary font-bold underline">CMS 165</a> — masuk sebagai admin, tulis, lalu terbitkan.
          </p>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <li key={p.id}>
              <button type="button" onClick={() => onOpenPost(p.slug)}
                className="border-border bg-card group h-full w-full overflow-hidden rounded-2xl border text-left transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]">
                {p.coverUrl ? (
                   
                  <img src={p.coverUrl} alt={`Sampul: ${p.title}`} className="aspect-video w-full border-border border-b object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                ) : (
                  <div className="bg-secondary/60 aspect-video w-full border-border border-b" aria-hidden />
                )}
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {p.pinned && <Pin className="text-[var(--brass)] size-3" aria-label="Tersemat" aria-hidden />}
                    {p.category && (
                      <span className="bg-[var(--brass-soft)] text-[#6b4f18] inline-flex items-center rounded-full border border-[var(--brass)]/40 px-2 py-0.5 text-[10.5px] font-bold leading-none">
                        {p.category.name}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-[15px] leading-snug font-bold group-hover:underline">{p.title}</h3>
                  <p className="text-muted-foreground mt-1.5 line-clamp-3 text-[12.5px] leading-relaxed">{p.excerpt}</p>
                  <p className="text-muted-foreground mt-2.5 flex items-center gap-2 text-[11px]">
                    <Calendar className="size-3" aria-hidden />
                    {fmtDate(p.publishedAt)}
                    {p.author && <span>· {p.author}</span>}
                    <span className="ml-auto inline-flex items-center gap-1"><Eye className="size-3" aria-hidden /> {p.views}</span>
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* halaman */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Sebelumnya</Button>
          <span className="text-muted-foreground text-[12.5px] font-semibold">Halaman {page} dari {totalPages} · {total} artikel</span>
          <Button variant="outline" size="sm" disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>Selanjutnya</Button>
        </div>
      )}
    </div>
  )
}

// ---------------- baca satu artikel ----------------
function PostReader({ slug, onBack }: { slug: string; onBack: () => void }) {
  const [post, setPost] = useState<(PublicPost & { content: string }) | null>(null)
  const [comments, setComments] = useState<PublicComment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [sending, setSending] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    let alive = true
    setLoading(true)
    setError(null)
    setPost(null)
    void (async () => {
      try {
        const r = await fetch(`/api/cms/public/posts/${encodeURIComponent(slug)}`)
        const j = await r.json().catch(() => ({}))
        if (!alive) return
        if (!r.ok) { setError(j.error ?? 'Artikel tidak ditemukan.'); return }
        setPost(j.post)
        setComments(Array.isArray(j.comments) ? j.comments : [])
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [slug])

  const submitComment = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const r = await fetch('/api/cms/public/comments', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, name, email, body }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Komentar gagal terkirim', description: j.error, variant: 'destructive' }); return }
      setNotice(j.message)
      setBody('')
      toast({ title: 'Komentar terkirim' })
      // muat ulang komentar (bila langsung disetujui)
      const rr = await fetch(`/api/cms/public/posts/${encodeURIComponent(slug)}`)
      const jj = await rr.json().catch(() => ({}))
      if (rr.ok && jj.comments) setComments(jj.comments)
    } finally {
      setSending(false)
    }
  }, [slug, name, email, body, toast])

  if (loading) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="size-4" aria-hidden /> Kembali ke daftar</Button>
        <SkeletonCard /><SkeletonCard /><SkeletonCard />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="size-4" aria-hidden /> Kembali ke daftar</Button>
        <p role="alert" className="border-rose-700/30 bg-rose-50 rounded-2xl border px-4 py-6 text-center text-[13px] text-rose-900">{error ?? 'Artikel tidak ditemukan.'}</p>
      </div>
    )
  }

  return (
    <article className="space-y-5">
      <Button variant="ghost" size="sm" onClick={onBack}><ArrowLeft className="size-4" aria-hidden /> Kembali ke daftar</Button>

      <header>
        <div className="flex flex-wrap items-center gap-2">
          {post.pinned && <span className="border-[var(--brass)]/40 bg-[var(--brass-soft)] text-[#6b4f18] inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10.5px] font-bold"><Pin className="size-3" aria-hidden /> Tersemat</span>}
          {post.category && (
            <span className="bg-[var(--brass-soft)] text-[#6b4f18] inline-flex items-center rounded-full border border-[var(--brass)]/40 px-2.5 py-1 text-[11px] font-bold">{post.category.name}</span>
          )}
        </div>
        <h1 className="font-display mt-2.5 text-2xl leading-tight font-bold sm:text-3xl">{post.title}</h1>
        <p className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px]">
          <span className="inline-flex items-center gap-1"><Calendar className="size-3.5" aria-hidden /> {fmtDate(post.publishedAt)}</span>
          {post.author && <span>oleh {post.author}</span>}
          <span className="inline-flex items-center gap-1"><Eye className="size-3.5" aria-hidden /> {post.views} dibaca</span>
        </p>
      </header>

      {post.coverUrl && (
         
        <img src={post.coverUrl} alt={`Sampul: ${post.title}`} className="aspect-video w-full rounded-3xl border border-border object-cover" />
      )}

      <div className="prose-165 border-border bg-card/50 rounded-3xl border p-5 sm:p-7" dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {post.tags.map((t) => (
            <span key={t} className="bg-secondary text-muted-foreground rounded-full border border-border px-2.5 py-1 text-[11.5px] font-semibold">#{t}</span>
          ))}
        </div>
      )}

      {/* komentar */}
      <section className="border-border bg-card rounded-3xl border p-5" aria-label="Komentar pembaca">
        <h2 className="flex items-center gap-2 text-[15px] font-bold">
          <MessageSquare className="text-primary size-4" aria-hidden /> Komentar ({comments.length})
        </h2>

        {comments.length === 0 ? (
          <p className="text-muted-foreground mt-3 text-[13px]">Belum ada komentar. Jadi yang pertama!</p>
        ) : (
          <ul className="divide-border/60 mt-3 divide-y">
            {comments.map((c) => (
              <li key={c.id} className="py-3">
                <p className="text-[13px] font-bold">{c.name}</p>
                <p className="text-muted-foreground text-[10.5px]">{fmtDateTime(c.createdAt)}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed">{c.body}</p>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={submitComment} className="border-border/60 mt-4 space-y-3 border-t pt-4">
          <h3 className="text-[13.5px] font-bold">Tulis komentar</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <Label htmlFor="c-name">Nama <span className="text-rose-700">*</span></Label>
              <Input id="c-name" value={name} required minLength={2} maxLength={60} onChange={(e) => setName(e.target.value)} placeholder="Nama Anda" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="c-email">Email (opsional, tidak ditampilkan)</Label>
              <Input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="c-body">Komentar <span className="text-rose-700">*</span></Label>
            <Textarea id="c-body" value={body} required minLength={4} maxLength={2000} rows={3} onChange={(e) => setBody(e.target.value)} placeholder="Tulis komentar yang baik dan santun…" />
          </div>
          {notice && <p className="border-emerald-700/30 bg-emerald-50 rounded-xl border px-3 py-2 text-[12.5px] text-emerald-900">{notice}</p>}
          <Button type="submit" size="sm" disabled={sending || body.trim().length < 4 || name.trim().length < 2}>
            {sending ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
            Kirim komentar
          </Button>
          <p className="text-muted-foreground text-[11px]">Komentar dimoderasi sesuai pengaturan admin — tetap santun, saudara.</p>
        </form>
      </section>
    </article>
  )
}
