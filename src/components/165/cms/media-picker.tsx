'use client'

// ============================================================
// CMS 165 — MediaPicker: dialog pilih gambar dari pustaka media
// (bisa unggah langsung dari dialog). Dipakai editor & sampul.
// ============================================================
import { useCallback, useEffect, useRef, useState } from 'react'
import { ImagePlus, Loader2, Trash2, UploadCloud } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { fmtBytes, type CmsMediaRow } from './types'

const MAX_BYTES = 3 * 1024 * 1024

export function MediaPicker({
  open,
  onOpenChange,
  onPick,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  onPick: (url: string) => void
}) {
  const [items, setItems] = useState<CmsMediaRow[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const r = await fetch('/api/cms/media')
      const j = await r.json().catch(() => ({}))
      setItems(Array.isArray(j.items) ? j.items : [])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (open) void load()
  }, [open, load])

  const upload = async (file: File) => {
    if (file.size > MAX_BYTES) {
      toast({ title: 'Berkas terlalu besar', description: 'Maksimum 3 MB.', variant: 'destructive' })
      return
    }
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const r = await fetch('/api/cms/media', { method: 'POST', body: fd })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) {
        toast({ title: 'Unggah gagal', description: j.error ?? 'Coba berkas lain.', variant: 'destructive' })
        return
      }
      toast({ title: 'Media terunggah', description: j.media?.filename })
      await load()
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-3xl p-0 overflow-hidden">
        <DialogHeader className="border-border/60 bg-secondary/40 px-6 py-4">
          <DialogTitle className="flex items-center gap-2 text-base">
            <ImagePlus className="size-4 text-primary" aria-hidden /> Pustaka Media
          </DialogTitle>
          <DialogDescription className="text-[13px]">
            Pilih gambar yang sudah ada, atau unggah berkas baru (JPG, PNG, GIF, WebP, PDF · maks 3 MB).
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[55vh] overflow-y-auto p-4">
          {/* area unggah */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Unggah berkas media"
            onClick={() => fileRef.current?.click()}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileRef.current?.click() }}
            className={cn(
              'border-primary/30 bg-primary/5 text-primary flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed px-4 py-6 text-center transition-all',
              'hover:border-primary/60 hover:bg-primary/10 active:scale-[0.99]',
            )}
          >
            {uploading ? (
              <Loader2 className="size-5 animate-spin" aria-hidden />
            ) : (
              <UploadCloud className="size-5" aria-hidden />
            )}
            <p className="text-[13px] font-bold">{uploading ? 'Mengunggah…' : 'Klik untuk memilih berkas'}</p>
            <p className="text-muted-foreground text-[11px]">atau seret & letakkan (max 3 MB)</p>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/gif,image/webp,application/pdf"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) void upload(f) }}
          />

          {/* grid media */}
          {loading ? (
            <div className="flex items-center justify-center py-10"><Loader2 className="text-muted-foreground size-5 animate-spin" aria-hidden /></div>
          ) : items.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center text-[13px]">Pustaka masih kosong — unggah gambar pertama Anda.</p>
          ) : (
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {items.map((m) => (
                <li key={m.id} className="border-border bg-card group relative overflow-hidden rounded-2xl border">
                  <button
                    type="button"
                    onClick={() => { onPick(m.url); onOpenChange(false) }}
                    className="block w-full text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-label={`Pilih ${m.filename}`}
                  >
                    {m.mime.startsWith('image/') ? (
                       
                      <img src={m.url} alt={m.filename} className="h-24 w-full object-cover transition-transform group-hover:scale-105" />
                    ) : (
                      <div className="bg-secondary flex h-24 items-center justify-center text-[11px] font-bold">PDF</div>
                    )}
                    <span className="block truncate px-2 py-1.5 text-[11px] font-semibold" title={m.filename}>{m.filename}</span>
                    <span className="text-muted-foreground block px-2 pb-1.5 text-[10px]">{fmtBytes(m.size)}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ---------- panel Media (kelola penuh) ----------
export function useMediaList() {
  const [items, setItems] = useState<CmsMediaRow[]>([])
  const [loading, setLoading] = useState(false)
  const load = useCallback(async () => {
    setLoading(true)
    try {
      const r = await fetch('/api/cms/media')
      const j = await r.json().catch(() => ({}))
      setItems(Array.isArray(j.items) ? j.items : [])
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => { void load() }, [load])
  return { items, loading, load }
}

export function MediaDeleteButton({ id, onDone }: { id: string; onDone: () => void }) {
  const [busy, setBusy] = useState(false)
  const { toast } = useToast()
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Hapus media"
      disabled={busy}
      onClick={async () => {
        setBusy(true)
        try {
          const r = await fetch(`/api/cms/media/${id}`, { method: 'DELETE' })
          if (r.ok) { toast({ title: 'Media dihapus' }); onDone() }
          else toast({ title: 'Gagal menghapus media', variant: 'destructive' })
        } finally { setBusy(false) }
      }}
    >
      {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Trash2 className="size-4" aria-hidden />}
    </Button>
  )
}
