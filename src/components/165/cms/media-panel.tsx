'use client'

// ============================================================
// CMS 165 — Pustaka Media: unggah (klik atau seret & letakkan),
// lihat grid, salin tautan, hapus. Gambar & PDF, maks 3 MB.
// ============================================================
import { useCallback, useRef, useState } from 'react'
import { Copy, Loader2, Trash2, UploadCloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { fmtBytes, type CmsMediaRow } from './types'
import { MediaDeleteButton, useMediaList } from './media-picker'

const MAX_BYTES = 3 * 1024 * 1024
const ALLOWED = 'image/jpeg,image/png,image/gif,image/webp,application/pdf'

export function MediaPanel() {
  const { items, loading, load } = useMediaList()
  const [uploading, setUploading] = useState(false)
  const [dragging, setDragging] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const upload = useCallback(async (files: FileList | File[]) => {
    const list = Array.from(files)
    if (list.length === 0) return
    setUploading(true)
    let ok = 0
    try {
      for (const f of list) {
        if (f.size > MAX_BYTES) {
          toast({ title: 'Dilewati: ' + f.name, description: 'Berkas melebihi 3 MB.', variant: 'destructive' })
          continue
        }
        const fd = new FormData()
        fd.append('file', f)
        const r = await fetch('/api/cms/media', { method: 'POST', body: fd })
        const j = await r.json().catch(() => ({}))
        if (r.ok) ok++
        else toast({ title: `Gagal: ${f.name}`, description: j.error ?? 'Jenis berkas tidak didukung.', variant: 'destructive' })
      }
      if (ok > 0) toast({ title: `${ok} berkas terunggah` })
      await load()
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }, [load, toast])

  const copyUrl = async (m: CmsMediaRow) => {
    try {
      await navigator.clipboard.writeText(m.url.startsWith('/') ? `${window.location.origin}${m.url}` : m.url)
      toast({ title: 'Tautan disalin', description: m.filename })
    } catch {
      toast({ title: 'Tidak dapat menyalin — salin manual: ' + m.url })
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Pustaka Media <span className="text-muted-foreground text-[13px] font-medium">({items.length})</span></h2>

      {/* zona unggah */}
      <div
        role="button" tabIndex={0}
        aria-label="Unggah berkas — klik atau seret ke sini"
        onClick={() => fileRef.current?.click()}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileRef.current?.click() }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); void upload(e.dataTransfer.files) }}
        className={cn(
          'flex cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed px-6 py-10 text-center transition-all active:scale-[0.99]',
          dragging ? 'border-primary bg-primary/10 scale-[1.01]' : 'border-primary/30 bg-primary/5 hover:border-primary/60 hover:bg-primary/10',
        )}
      >
        {uploading ? <Loader2 className="text-primary size-7 animate-spin" aria-hidden /> : <UploadCloud className="text-primary size-7" aria-hidden />}
        <p className="text-[14px] font-bold">{uploading ? 'Mengunggah…' : 'Seret &amp; letakkan berkas di sini, atau klik untuk memilih'}</p>
        <p className="text-muted-foreground text-[12px]">JPG, PNG, GIF, WebP, PDF · maksimal 3 MB per berkas</p>
        <input ref={fileRef} type="file" multiple accept={ALLOWED} className="hidden" onChange={(e) => { if (e.target.files) void upload(e.target.files) }} />
      </div>

      {/* grid */}
      {loading ? (
        <div className="flex items-center justify-center py-10"><Loader2 className="text-muted-foreground size-5 animate-spin" aria-hidden /></div>
      ) : items.length === 0 ? (
        <div className="border-border bg-card/60 rounded-3xl border-2 border-dashed px-6 py-10 text-center">
          <p className="font-semibold">Pustaka masih kosong.</p>
          <p className="text-muted-foreground mt-1 text-[13px]">Unggah gambar sampul atau ilustrasi artikel di atas.</p>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((m) => (
            <li key={m.id} className="border-border bg-card group overflow-hidden rounded-2xl border">
              <div className="bg-secondary/60 relative h-32">
                {m.mime.startsWith('image/') ? (
                   
                  <img src={m.url} alt={m.filename} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full items-center justify-center text-[13px] font-bold tracking-wide">PDF</div>
                )}
              </div>
              <div className="p-2.5">
                <p className="truncate text-[12px] font-bold" title={m.filename}>{m.filename}</p>
                <p className="text-muted-foreground text-[10.5px]">{fmtBytes(m.size)} · {new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short' }).format(new Date(m.createdAt))}</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="h-7 text-[11.5px]" onClick={() => void copyUrl(m)}>
                    <Copy className="size-3" aria-hidden /> Salin tautan
                  </Button>
                  <MediaDeleteButton id={m.id} onDone={() => void load()} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
