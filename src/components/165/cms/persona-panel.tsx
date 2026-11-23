'use client'

// ============================================================
// CMS 165 — Peran & Persona: "Dewan Pakar 46"
// Aktifkan peran penulis ala WordPress: satu persona aktif
// (Master Polymath Sage Universal — gabungan 46 dewan pakar
// lintas bidang, setiap bidang berpengalaman 150 tahun — atau
// salah satu pakar) menjadi nama penulis artikel baru.
// Persona bisa disunting, dicari, dan dipulihkan ke default.
// ============================================================
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Archive, BarChart3, BookOpen, Brain, BrainCircuit, Building2, Calculator, Camera,
  Check, Code2, Coins, Crown, Database, Gavel, Globe, GraduationCap, Heart,
  Landmark, Languages, Leaf, Library, Loader2, Moon, Music, Network, Palette,
  PenTool, Pencil, RefreshCw, Scale, School, Scroll, ScrollText, Search,
  Server, Shield, ShieldCheck, Sparkles, Stethoscope, TrendingUp, Users,
  Video, X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { SkeletonCard } from '../ui'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

type Persona = {
  id: string
  key: string
  name: string
  field: string
  title: string | null
  bio: string | null
  icon: string
  master: boolean
  active: boolean
}

// peta ikon (kunci string di DB → komponen lucide)
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  crown: Crown, moon: Moon, 'book-open': BookOpen, scroll: Scroll, scale: Scale,
  heart: Heart, sparkles: Sparkles, landmark: Landmark, network: Network,
  'scroll-text': ScrollText, languages: Languages, 'pen-tool': PenTool,
  gavel: Gavel, coins: Coins, 'trending-up': TrendingUp, calculator: Calculator,
  code: Code2, shield: Shield, 'shield-check': ShieldCheck, database: Database,
  brain: Brain, server: Server, palette: Palette, camera: Camera, video: Video,
  music: Music, library: Library, archive: Archive, 'graduation-cap': GraduationCap,
  school: School, stethoscope: Stethoscope, users: Users, globe: Globe,
  'building-2': Building2, leaf: Leaf, chart: BarChart3,
}

function PersonaIcon({ icon, className }: { icon: string; className?: string }) {
  const Cmp = ICONS[icon] ?? Sparkles
  return <Cmp className={className} aria-hidden />
}

export function PersonaPanel() {
  const [items, setItems] = useState<Persona[] | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const [q, setQ] = useState('')
  const [edit, setEdit] = useState<Persona | null>(null)
  const [editForm, setEditForm] = useState({ name: '', field: '', bio: '' })
  const [confirmReset, setConfirmReset] = useState(false)
  const { toast } = useToast()

  const load = useCallback(async () => {
    try {
      const r = await fetch('/api/cms/personas')
      const j = await r.json().catch(() => ({}))
      if (r.ok && Array.isArray(j.items)) setItems(j.items)
      else setItems([])
    } catch {
      setItems([])
    }
  }, [])

  useEffect(() => { void load() }, [load])

  const put = async (body: Record<string, unknown>, okMsg: string) => {
    setBusy('save')
    try {
      const r = await fetch('/api/cms/personas', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { toast({ title: 'Gagal menyimpan', description: j.error, variant: 'destructive' }); return }
      if (Array.isArray(j.items)) setItems(j.items)
      toast({ title: okMsg })
    } finally {
      setBusy(null)
    }
  }

  const activate = async (p: Persona) => {
    if (p.active) {
      await put({ activateId: null }, `Peran "${p.name}" dinonaktifkan.`)
    } else {
      await put({ activateId: p.id }, `Menulis sebagai "${p.name}".`)
    }
  }

  const saveEdit = async () => {
    if (!edit) return
    if (editForm.name.trim().length < 2) {
      toast({ title: 'Nama persona minimal 2 karakter.', variant: 'destructive' })
      return
    }
    await put(
      { updates: [{ id: edit.id, name: editForm.name, field: editForm.field, bio: editForm.bio }] },
      'Persona diperbarui.',
    )
    setEdit(null)
  }

  const reset = async () => {
    setConfirmReset(false)
    await put({ reset: true }, 'Semua persona dipulihkan ke default.')
  }

  const master = useMemo(() => items?.find((p) => p.master) ?? null, [items])
  const experts = useMemo(() => (items ?? []).filter((p) => !p.master), [items])
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return experts
    return experts.filter((p) =>
      [p.name, p.field, p.bio ?? ''].some((t) => t.toLowerCase().includes(term)),
    )
  }, [experts, q])
  const activePersona = useMemo(() => items?.find((p) => p.active) ?? null, [items])

  const openEdit = (p: Persona) => {
    setEdit(p)
    setEditForm({ name: p.name, field: p.field, bio: p.bio ?? '' })
  }

  if (items === null) {
    return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>
  }

  return (
    <div className="space-y-5">
      {/* ------- kartu Master (gabungan 46 dewan pakar) ------- */}
      {master && (
        <section
          className={cn(
            'relative overflow-hidden rounded-3xl border p-5 sm:p-7',
            master.active
              ? 'border-[var(--brass)]/60 bg-gradient-to-br from-[var(--brass-soft)] via-[var(--brass-soft)]/60 to-transparent'
              : 'border-border bg-card',
          )}
        >
          <div className="flex flex-wrap items-start gap-4">
            <div className="border-[var(--brass)]/50 bg-secondary flex size-14 shrink-0 items-center justify-center rounded-2xl border">
              <BrainCircuit className="text-[var(--brass)] size-7" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-muted-foreground text-[11px] font-bold tracking-[0.14em] uppercase">Peran gabungan · Dewan Pakar 46</p>
              <h2 className="font-display mt-0.5 text-xl font-bold tracking-tight sm:text-2xl">{master.name}</h2>
              <p className="text-[var(--brass)] mt-0.5 text-[13.5px] font-semibold">{master.field}{master.title ? ` — ${master.title}` : ''}</p>
              {master.bio && <p className="text-muted-foreground mt-2 max-w-2xl text-[13px] leading-relaxed">{master.bio}</p>}
            </div>
            <div className="flex w-full gap-2 sm:w-auto sm:flex-col">
              <Button
                className="flex-1 sm:flex-none"
                variant={master.active ? 'outline' : 'default'}
                disabled={busy === 'save'}
                onClick={() => void activate(master)}
              >
                {busy === 'save' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : master.active ? <X className="size-4" aria-hidden /> : <Check className="size-4" aria-hidden />}
                {master.active ? 'Nonaktifkan' : 'Aktifkan peran ini'}
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 sm:flex-none" onClick={() => openEdit(master)}>
                <Pencil className="size-4" aria-hidden /> Sunting
              </Button>
            </div>
          </div>
          {master.active && (
            <p className="bg-background/70 text-[var(--brass)] mt-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--brass)]/40 px-3 py-1 text-[12px] font-bold">
              <Sparkles className="size-3.5" aria-hidden /> Aktif — artikel &amp; kitab baru terbit dengan nama &ldquo;{master.name}&rdquo;
            </p>
          )}
        </section>
      )}

      {/* ------- ringkasan & pencarian ------- */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-0 flex-1">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" aria-hidden />
          <Input
            value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Cari pakar: fikih, sejarah, teknologi…"
            className="pl-9" aria-label="Cari persona pakar"
          />
        </div>
        <Button variant="outline" size="sm" onClick={() => setConfirmReset(true)} disabled={busy === 'save'}>
          <RefreshCw className="size-4" aria-hidden /> Pulihkan default
        </Button>
      </div>

      {activePersona && !activePersona.master && (
        <p className="text-[var(--brass)] border-[var(--brass)]/40 bg-[var(--brass-soft)] inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] font-bold">
          <Crown className="size-3.5" aria-hidden /> Peran aktif saat ini: {activePersona.name} ({activePersona.field})
        </p>
      )}

      {/* ------- daftar 46 dewan pakar ------- */}
      <div>
        <h3 className="text-[14px] font-bold">
          Dewan Pakar 46 <span className="text-muted-foreground font-normal">· {filtered.length} dari {experts.length} bidang</span>
        </h3>
        {filtered.length === 0 ? (
          <p className="text-muted-foreground border-border bg-card/60 mt-3 rounded-2xl border-2 border-dashed p-8 text-center text-[13px]">
            Tidak ada pakar yang cocok dengan pencarian.
          </p>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => {
              const isActive = p.active
              return (
                <article
                  key={p.id}
                  className={cn(
                    'group border-border bg-card flex flex-col rounded-2xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md',
                    isActive && 'border-primary/50 bg-primary/5 ring-primary/20 ring-2',
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      'flex size-10 shrink-0 items-center justify-center rounded-xl border',
                      isActive ? 'border-primary/40 bg-primary/10 text-primary' : 'border-border bg-secondary text-foreground/70',
                    )}>
                      <PersonaIcon icon={p.icon} className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-[13.5px] font-bold" title={p.name}>{p.name}</h4>
                      <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-[11.5px] font-semibold">
                        <span className="truncate">{p.field}</span>
                        <span className="border-[var(--brass)]/40 bg-[var(--brass-soft)] text-[var(--brass)] inline-flex shrink-0 items-center rounded-full border px-1.5 py-0.5 text-[9.5px] font-bold tracking-wide">
                          150 tahun
                        </span>
                      </p>
                    </div>
                  </div>
                  {p.bio && <p className="text-muted-foreground mt-2 line-clamp-2 text-[12px] leading-relaxed">{p.bio}</p>}
                  <div className="mt-3 flex items-center gap-1.5 border-t border-border/60 pt-3">
                    <Button
                      size="sm" variant={isActive ? 'secondary' : 'outline'}
                      className="h-8 flex-1 text-[12px]" disabled={busy === 'save'}
                      onClick={() => void activate(p)}
                    >
                      {isActive ? <><X className="size-3.5" aria-hidden /> Nonaktifkan</> : <><Check className="size-3.5" aria-hidden /> Aktifkan</>}
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 px-2.5" aria-label={`Sunting ${p.name}`} onClick={() => openEdit(p)}>
                      <Pencil className="size-3.5" aria-hidden />
                    </Button>
                  </div>
                  {isActive && (
                    <p className="text-primary mt-2 flex items-center gap-1 text-[11px] font-bold">
                      <Sparkles className="size-3" aria-hidden /> Menjadi penulis artikel
                    </p>
                  )}
                </article>
              )
            })}
          </div>
        )}
      </div>

      {/* ------- dialog sunting persona ------- */}
      <Dialog open={edit !== null} onOpenChange={(v) => { if (!v) setEdit(null) }}>
        <DialogContent className="max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle>Sunting persona</DialogTitle>
          </DialogHeader>
          <div className="space-y-3.5">
            <div className="space-y-1.5">
              <Label htmlFor="per-name">Nama (tampil sebagai penulis)</Label>
              <Input id="per-name" value={editForm.name} onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="per-field">Bidang keahlian</Label>
              <Input id="per-field" value={editForm.field} onChange={(e) => setEditForm((f) => ({ ...f, field: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="per-bio">Deskripsi singkat</Label>
              <Textarea id="per-bio" rows={3} value={editForm.bio} onChange={(e) => setEditForm((f) => ({ ...f, bio: e.target.value }))} />
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <Button variant="ghost" onClick={() => setEdit(null)}>Batal</Button>
              <Button onClick={() => void saveEdit()} disabled={busy === 'save'}>
                {busy === 'save' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Check className="size-4" aria-hidden />} Simpan
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ------- dialog pulihkan default ------- */}
      <Dialog open={confirmReset} onOpenChange={setConfirmReset}>
        <DialogContent className="max-w-sm rounded-3xl">
          <DialogHeader>
            <DialogTitle>Pulihkan semua persona?</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-[13px] leading-relaxed">
            Semua perubahan pada nama, bidang, dan deskripsi persona akan dikembalikan ke bawaan (Master Polymath + 46 pakar). Master menjadi peran aktif.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>Batal</Button>
            <Button variant="destructive" onClick={() => void reset()} disabled={busy === 'save'}>
              {busy === 'save' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <RefreshCw className="size-4" aria-hidden />} Pulihkan
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
