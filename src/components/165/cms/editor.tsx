'use client'

// ============================================================
// CMS 165 — Editor Konten: tulis & ubah artikel / halaman.
// Editor visual sederhana (tebal, miring, heading, daftar, kutip,
// taut, gambar dari pustaka media) + mode HTML + pratinjau.
// ============================================================
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowLeft, Bold, Check, Code2, Eye, Heading2, Heading3, ImagePlus, Italic,
  Link2, List, ListOrdered, Loader2, Lock, Minus, Quote, Redo2, Save,
  Send, Strikethrough, Trash2, Underline as UnderlineIcon, Undo2, X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { fmtDateTime } from '@/lib/cms'
import { MediaPicker } from './media-picker'
import type { CmsCategoryRow, CmsPostRow } from './types'

export type EditorDraft = {
  id?: string
  type: 'post' | 'page'
  title: string
  slug: string
  excerpt: string
  content: string
  coverUrl: string | null
  pinned: boolean
  categoryId: string
  tags: string[]
}

const EMPTY: EditorDraft = {
  type: 'post', title: '', slug: '', excerpt: '', content: '',
  coverUrl: null, pinned: false, categoryId: '', tags: [],
}

function slugifyLocal(input: string): string {
  return (input ?? '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').trim().replace(/[\s_]+/g, '-')
    .replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '').slice(0, 80)
}

type ToolDef = { cmd: string; arg?: string; icon: React.ComponentType<{ className?: string }>; label: string }

const TOOLS: ToolDef[] = [
  { cmd: 'bold', icon: Bold, label: 'Tebal' },
  { cmd: 'italic', icon: Italic, label: 'Miring' },
  { cmd: 'underline', icon: UnderlineIcon, label: 'Garis bawah' },
  { cmd: 'strikeThrough', icon: Strikethrough, label: 'Coret' },
  { cmd: 'formatBlock', arg: 'h2', icon: Heading2, label: 'Judul bagian (H2)' },
  { cmd: 'formatBlock', arg: 'h3', icon: Heading3, label: 'Sub-judul (H3)' },
  { cmd: 'formatBlock', arg: 'p', icon: Minus, label: 'Paragraf' },
  { cmd: 'insertUnorderedList', icon: List, label: 'Daftar titik' },
  { cmd: 'insertOrderedList', icon: ListOrdered, label: 'Daftar nomor' },
  { cmd: 'formatBlock', arg: 'blockquote', icon: Quote, label: 'Kutipan' },
  { cmd: 'insertHorizontalRule', icon: Code2, label: 'Garis pemisah' },
]

export function PostEditor({
  initial, categories, authorDefault, onSaved, onCancel,
}: {
  initial: EditorDraft | null // null = artikel baru
  categories: CmsCategoryRow[]
  authorDefault?: string // nama persona aktif (Peran & Persona)
  onSaved: () => void
  onCancel: () => void
}) {
  const isNew = initial === null
  const type = initial?.type ?? 'post'
  const [draft, setDraft] = useState<EditorDraft>(initial ?? { ...EMPTY, type })
  const [slugEdited, setSlugEdited] = useState(!isNew)
  const [loadedContent, setLoadedContent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<'draft' | 'published'>(isNew ? 'draft' : 'published')
  const [meta, setMeta] = useState<{ createdAt?: string; updatedAt?: string; publishedAt?: string | null }>({})
  const [mode, setMode] = useState<'visual' | 'html'>('visual')
  const [pickerOpen, setPickerOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [linkValue, setLinkValue] = useState('')
  const [tagInput, setTagInput] = useState('')
  const areaRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // muat konten penuh saat mengedit (list hanya mengirim ringkasan)
  useEffect(() => {
    if (isNew || loadedContent || !initial?.id) return
    let alive = true
    void (async () => {
      try {
        const r = await fetch(`/api/cms/posts/${initial.id}`)
        const j = await r.json().catch(() => ({}))
        if (!alive || !r.ok || !j.post) return
        setDraft((d) => ({
          ...d,
          title: j.post.title, slug: j.post.slug, excerpt: j.post.excerpt ?? '',
          content: j.post.content ?? '', coverUrl: j.post.coverUrl, pinned: j.post.pinned,
          categoryId: j.post.categoryId ?? '', tags: Array.isArray(j.post.tags) ? j.post.tags : [],
        }))
        setSlugEdited(true)
        setMeta({ createdAt: j.post.createdAt, updatedAt: j.post.updatedAt, publishedAt: j.post.publishedAt })
        setLoadedContent(true)
      } catch { /* biarkan draf kosong */ }
    })()
    return () => { alive = false }
  }, [isNew, loadedContent, initial?.id])

  // isi contentEditable sekali konten tersedia
  useEffect(() => {
    if (!loadedContent && isNew) return
    if (areaRef.current && !areaRef.current.innerHTML && draft.content) {
      areaRef.current.innerHTML = draft.content
    }
     
  }, [loadedContent, mode])

  const set = <K extends keyof EditorDraft>(k: K, v: EditorDraft[K]) =>
    setDraft((d) => ({ ...d, [k]: v }))

  const exec = (cmd: string, arg?: string) => {
    areaRef.current?.focus()
    document.execCommand(cmd, false, arg)
  }

  const insertHtml = (html: string) => exec('insertHTML', html)

  const addLink = () => {
    const url = linkValue.trim()
    if (!url) { toast({ title: 'Isi alamat tautan dulu', description: 'Contoh: https://165.web.id' }); return }
    if (!/^https?:\/\//i.test(url) && !url.startsWith('/') && !url.startsWith('#')) {
      insertHtml(`<a href="https://${url}">tautan</a>`)
    } else {
      insertHtml(`<a href="${url}">tautan</a>`)
    }
    setLinkValue('')
  }

  const pickImage = (url: string) => insertHtml(`<img src="${url}" alt="gambar">`)

  const addTag = (raw: string) => {
    const name = raw.replace(/,$/, '').trim()
    if (!name) return
    setDraft((d) => (d.tags.includes(name) || d.tags.length >= 12 ? d : { ...d, tags: [...d.tags, name] }))
    setTagInput('')
  }

  const save = async (targetStatus: 'draft' | 'published') => {
    const content = mode === 'html' ? draft.content : (areaRef.current?.innerHTML ?? draft.content)
    if (draft.title.trim().length < 2) {
      toast({ title: 'Judul belum diisi', description: 'Tuliskan judul minimal 2 karakter.', variant: 'destructive' })
      return
    }
    setBusy(true)
    try {
      const payload = {
        type, title: draft.title.trim(),
        slug: draft.slug.trim() || undefined,
        excerpt: draft.excerpt.trim(), content,
        coverUrl: draft.coverUrl, pinned: draft.pinned,
        categoryId: draft.categoryId || undefined,
        tags: draft.tags, status: targetStatus,
        // artikel baru: pakai nama persona aktif bila ada
        ...(isNew && authorDefault ? { author: authorDefault } : {}),
      }
      const r = await fetch(isNew ? '/api/cms/posts' : `/api/cms/posts/${initial!.id}`, {
        method: isNew ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) {
        toast({ title: 'Gagal menyimpan', description: j.error ?? 'Coba lagi.', variant: 'destructive' })
        return
      }
      toast({
        title: targetStatus === 'published' ? 'Berhasil diterbitkan' : 'Draf tersimpan',
        description: draft.title,
      })
      onSaved()
    } finally {
      setBusy(false)
    }
  }

  const trash = async () => {
    if (isNew || !initial?.id) return
    setBusy(true)
    try {
      const r = await fetch(`/api/cms/posts/${initial.id}`, { method: 'DELETE' })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal', description: j.error, variant: 'destructive' }); return }
      toast({ title: j.mode === 'permanent' ? 'Dihapus permanen' : 'Dipindah ke sampah', description: draft.title })
      onSaved()
    } finally { setBusy(false) }
  }

  const switchToHtml = () => {
    const html = areaRef.current?.innerHTML ?? draft.content
    setDraft((d) => ({ ...d, content: html }))
    setMode('html')
  }
  const switchToVisual = () => {
    setMode('visual')
  }

  return (
    <div className="space-y-5">
      {/* kepala editor */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onCancel} aria-label="Kembali ke daftar">
            <ArrowLeft className="size-4" aria-hidden /> Kembali
          </Button>
          <span className="text-muted-foreground text-[12px]">
            {type === 'page' ? 'Halaman baru' : 'Artikel baru'} — editor visual
            {isNew && authorDefault ? ` · penulis: ${authorDefault}` : ''}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreviewOpen(true)} aria-label="Pratinjau konten">
            <Eye className="size-4" aria-hidden /> Pratinjau
          </Button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        {/* ------- kolom utama ------- */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="ed-title">Judul</Label>
            <Input
              id="ed-title" value={draft.title} placeholder="Tuliskan judul di sini…"
              className="h-12 text-lg font-semibold"
              onChange={(e) => {
                const v = e.target.value
                setDraft((d) => ({
                  ...d, title: v,
                  slug: slugEdited ? d.slug : slugifyLocal(v),
                }))
              }}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ed-slug">Tautan (slug) — alamat artikel: <code className="text-[11px]">…/#blog/{draft.slug || 'judul'}</code></Label>
            <Input id="ed-slug" value={draft.slug} onChange={(e) => { setSlugEdited(true); set('slug', slugifyLocal(e.target.value)) }} placeholder="otomatis dari judul" />
          </div>

          {/* toolbar */}
          <div className="border-border bg-card rounded-2xl border">
            <div className="border-border/60 flex flex-wrap items-center gap-1 border-b px-2 py-1.5">
              {TOOLS.map((t, i) => (
                <button
                  key={`${t.cmd}-${i}`} type="button" title={t.label} aria-label={t.label}
                  onClick={() => exec(t.cmd, t.arg)}
                  className="hover:bg-secondary active:scale-90 inline-flex size-8 items-center justify-center rounded-lg transition-all"
                >
                  <t.icon className="size-4" aria-hidden />
                </button>
              ))}
              {/* tautan */}
              <span className="border-border mx-1 h-6 border-l" aria-hidden />
              <Input
                value={linkValue} onChange={(e) => setLinkValue(e.target.value)}
                placeholder="https://…" aria-label="Alamat tautan"
                className="h-8 w-40 text-[12px]"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addLink() } }}
              />
              <button type="button" title="Sisipkan tautan" aria-label="Sisipkan tautan" onClick={addLink}
                className="hover:bg-secondary active:scale-90 inline-flex size-8 items-center justify-center rounded-lg transition-all">
                <Link2 className="size-4" aria-hidden />
              </button>
              {/* gambar dari pustaka */}
              <button type="button" title="Sisipkan gambar dari pustaka media" aria-label="Sisipkan gambar"
                onClick={() => setPickerOpen(true)}
                className="hover:bg-secondary active:scale-90 inline-flex size-8 items-center justify-center rounded-lg transition-all">
                <ImagePlus className="size-4" aria-hidden />
              </button>
              {/* undo / redo */}
              <span className="border-border mx-1 h-6 border-l" aria-hidden />
              <button type="button" title="Urungkan" aria-label="Urungkan" onClick={() => exec('undo')}
                className="hover:bg-secondary active:scale-90 inline-flex size-8 items-center justify-center rounded-lg transition-all">
                <Undo2 className="size-4" aria-hidden />
              </button>
              <button type="button" title="Ulangi" aria-label="Ulangi" onClick={() => exec('redo')}
                className="hover:bg-secondary active:scale-90 inline-flex size-8 items-center justify-center rounded-lg transition-all">
                <Redo2 className="size-4" aria-hidden />
              </button>
              {/* mode */}
              <div className="bg-secondary/60 ml-auto flex items-center gap-0.5 rounded-full p-0.5">
                <button type="button" aria-pressed={mode === 'visual'} onClick={switchToVisual}
                  className={cn('rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors', mode === 'visual' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}>
                  Visual
                </button>
                <button type="button" aria-pressed={mode === 'html'} onClick={switchToHtml}
                  className={cn('rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors', mode === 'html' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}>
                  HTML
                </button>
              </div>
            </div>

            {mode === 'visual' ? (
              <div
                ref={areaRef}
                contentEditable
                suppressContentEditableWarning
                role="textbox" aria-multiline="true" aria-label="Isi konten artikel"
                data-gramm="false"
                className="prose-165 min-h-[320px] max-w-none px-4 py-3 text-[14.5px] leading-relaxed focus:outline-none"
                onInput={() => { /* konten dibaca langsung dari ref saat simpan */ }}
              />
            ) : (
              <Textarea
                value={draft.content}
                onChange={(e) => set('content', e.target.value)}
                className="min-h-[320px] rounded-none border-0 font-mono text-[12.5px] focus-visible:ring-0"
                aria-label="Kode HTML konten"
                placeholder="<p>Tulis HTML di sini…</p>"
              />
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ed-excerpt">Ringkasan (muncul di daftar artikel & hasil pencarian)</Label>
            <Textarea id="ed-excerpt" value={draft.excerpt} rows={2} placeholder="Tulis ringkasan singkat…" className="text-[13.5px]" onChange={(e) => set('excerpt', e.target.value)} />
            <p className="text-muted-foreground text-[11px]">Bila kosong, diambil otomatis dari awal konten.</p>
          </div>
        </div>

        {/* ------- kolom samping (publish box ala WordPress) ------- */}
        <aside className="space-y-4">
          <div className="border-border bg-card rounded-2xl border p-4">
            <h3 className="flex items-center gap-2 text-[13px] font-bold"><Send className="text-primary size-3.5" aria-hidden /> Terbitkan</h3>
            <div className="mt-3 space-y-2.5">
              {isNew ? (
                <>
                  <Button className="w-full" disabled={busy} onClick={() => save('published')}>
                    {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
                    Terbitkan sekarang
                  </Button>
                  <Button variant="outline" className="w-full" disabled={busy} onClick={() => save('draft')}>
                    <Save className="size-4" aria-hidden /> Simpan sebagai draf
                  </Button>
                </>
              ) : (
                <>
                  <Button className="w-full" disabled={busy} onClick={() => save(status)}>
                    <Check className="size-4" aria-hidden />
                    {status === 'published' ? 'Perbarui konten' : 'Simpan draf'}
                  </Button>
                  {status === 'draft' && (
                    <Button variant="secondary" className="w-full" disabled={busy} onClick={() => save('published')}>
                      <Send className="size-4" aria-hidden /> Terbitkan
                    </Button>
                  )}
                  {status === 'published' && (
                    <Button variant="outline" className="w-full" disabled={busy} onClick={() => save('draft')}>
                      <Lock className="size-4" aria-hidden /> Jadikan draf
                    </Button>
                  )}
                </>
              )}
              {!isNew && meta.updatedAt && (
                <p className="text-muted-foreground pt-1 text-[11px]">
                  Diperbarui: {fmtDateTime(meta.updatedAt)}
                  {meta.publishedAt ? ` · Terbit: ${fmtDateTime(meta.publishedAt)}` : ''}
                </p>
              )}
            </div>
          </div>

          <div className="border-border bg-card rounded-2xl border p-4">
            <h3 className="text-[13px] font-bold">Kategori</h3>
            <div className="mt-2.5">
              <Select value={draft.categoryId || 'none'} onValueChange={(v) => set('categoryId', v === 'none' ? '' : v)}>
                <SelectTrigger aria-label="Pilih kategori" className="w-full"><SelectValue placeholder="Tanpa kategori" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Tanpa kategori</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {categories.length === 0 && (
                <p className="text-muted-foreground mt-2 text-[11px]">Belum ada kategori — buka menu “Kategori & Tag” untuk membuat.</p>
              )}
            </div>
          </div>

          <div className="border-border bg-card rounded-2xl border p-4">
            <h3 className="text-[13px] font-bold">Tag</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {draft.tags.map((t) => (
                <span key={t} className="bg-secondary text-foreground inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[12px] font-semibold">
                  {t}
                  <button type="button" aria-label={`Hapus tag ${t}`} onClick={() => setDraft((d) => ({ ...d, tags: d.tags.filter((x) => x !== t) }))} className="text-muted-foreground hover:text-rose-700">
                    <X className="size-3" aria-hidden />
                  </button>
                </span>
              ))}
            </div>
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(tagInput) }
              }}
              onBlur={() => addTag(tagInput)}
              placeholder="tulis tag, Enter…"
              className="mt-2 text-[13px]"
              aria-label="Tambah tag"
            />
          </div>

          <div className="border-border bg-card rounded-2xl border p-4">
            <h3 className="text-[13px] font-bold">Gambar sampul</h3>
            {draft.coverUrl && (
               
              <img src={draft.coverUrl} alt="Sampul artikel" className="border-border mt-2 aspect-video w-full rounded-xl border object-cover" />
            )}
            <div className="mt-2.5 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setPickerOpen(true)}>
                <ImagePlus className="size-4" aria-hidden /> Pilih
              </Button>
              {draft.coverUrl && (
                <Button variant="ghost" size="sm" aria-label="Hapus sampul" onClick={() => set('coverUrl', null)}>
                  <X className="size-4" aria-hidden />
                </Button>
              )}
            </div>
          </div>

          {type === 'post' && (
            <div className="border-border bg-card flex items-center justify-between rounded-2xl border p-4">
              <div>
                <h3 className="text-[13px] font-bold">Sematkan di atas</h3>
                <p className="text-muted-foreground text-[11px]">Artikel tersemat muncul paling awal di blog.</p>
              </div>
              <Switch checked={draft.pinned} onCheckedChange={(v) => set('pinned', v)} aria-label="Sematkan artikel" />
            </div>
          )}

          {!isNew && (
            <Button variant="ghost" className="text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:hover:bg-rose-950/40 w-full" disabled={busy} onClick={trash}>
              <Trash2 className="size-4" aria-hidden /> Pindah ke sampah
            </Button>
          )}
        </aside>
      </div>

      {/* dialog pilih media */}
      <MediaPicker open={pickerOpen} onOpenChange={setPickerOpen} onPick={pickImage} />

      {/* dialog pratinjau */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-3xl rounded-3xl">
          <DialogHeader>
            <DialogTitle>{draft.title || 'Tanpa judul'}</DialogTitle>
          </DialogHeader>
          {draft.coverUrl && (
             
            <img src={draft.coverUrl} alt="Sampul" className="aspect-video w-full rounded-2xl object-cover" />
          )}
          <div
            className="prose-165 max-w-none text-[14.5px] leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: mode === 'html' ? draft.content : (areaRef.current?.innerHTML ?? draft.content),
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
