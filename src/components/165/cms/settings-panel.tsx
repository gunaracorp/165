'use client'

// ============================================================
// CMS 165 — Pengaturan Situs: judul, tagline, jumlah artikel per
// halaman, moderasi komentar otomatis, tampil penulis.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import { Loader2, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { SkeletonCard } from '../ui'
import { useToast } from '@/hooks/use-toast'

type Settings = {
  'site.title': string
  'site.tagline': string
  'blog.postsPerPage': string
  'blog.autoApproveComments': string
  'blog.showAuthors': string
}

const EMPTY: Settings = {
  'site.title': '', 'site.tagline': '',
  'blog.postsPerPage': '9', 'blog.autoApproveComments': 'false', 'blog.showAuthors': 'true',
}

export function SettingsPanel() {
  const [s, setS] = useState<Settings>(EMPTY)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const { toast } = useToast()

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const r = await fetch('/api/cms/settings')
      const j = await r.json().catch(() => ({}))
      if (r.ok && j.settings) setS({ ...EMPTY, ...j.settings })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void load() }, [load])

  const save = async () => {
    setBusy(true)
    try {
      const r = await fetch('/api/cms/settings', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings: s }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal menyimpan', description: j.error, variant: 'destructive' }); return }
      toast({ title: 'Pengaturan tersimpan', description: 'Perubahan langsung berlaku di blog publik.' })
      if (j.settings) setS({ ...EMPTY, ...j.settings })
    } finally { setBusy(false) }
  }

  if (loading) return <div className="grid gap-3 sm:grid-cols-2"><SkeletonCard /><SkeletonCard /></div>

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Pengaturan Situs</h2>
      <p className="text-muted-foreground -mt-2 text-[13px]">Pengaturan berlaku untuk blog publik (bagian Artikel di situs 165).</p>

      <div className="border-border bg-card grid gap-5 rounded-2xl border p-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="set-title">Judul situs</Label>
          <Input id="set-title" value={s['site.title']} onChange={(e) => setS((prev) => ({ ...prev, 'site.title': e.target.value }))} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="set-tagline">Tagline (slogan pendek)</Label>
          <Input id="set-tagline" value={s['site.tagline']} onChange={(e) => setS((prev) => ({ ...prev, 'site.tagline': e.target.value }))} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="set-ppp">Artikel per halaman blog</Label>
          <Input id="set-ppp" type="number" min={1} max={50} value={s['blog.postsPerPage']}
            onChange={(e) => setS((prev) => ({ ...prev, 'blog.postsPerPage': e.target.value }))} />
        </div>
        <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
          <div>
            <p className="text-[13px] font-bold">Setujui komentar otomatis</p>
            <p className="text-muted-foreground text-[11.5px]">Nonaktif = setiap komentar menunggu Anda setujui (disarankan).</p>
          </div>
          <Switch
            checked={s['blog.autoApproveComments'] === 'true'}
            onCheckedChange={(v) => setS((prev) => ({ ...prev, 'blog.autoApproveComments': v ? 'true' : 'false' }))}
            aria-label="Setujui komentar otomatis"
          />
        </div>
        <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3 sm:col-span-2">
          <div>
            <p className="text-[13px] font-bold">Tampilkan nama penulis</p>
            <p className="text-muted-foreground text-[11.5px]">Nama “Admin 165” muncul di artikel blog.</p>
          </div>
          <Switch
            checked={s['blog.showAuthors'] !== 'false'}
            onCheckedChange={(v) => setS((prev) => ({ ...prev, 'blog.showAuthors': v ? 'true' : 'false' }))}
            aria-label="Tampilkan nama penulis"
          />
        </div>
      </div>

      <Button onClick={() => void save()} disabled={busy}>
        {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Save className="size-4" aria-hidden />}
        Simpan pengaturan
      </Button>
    </div>
  )
}
