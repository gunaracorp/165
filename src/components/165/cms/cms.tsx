'use client'

// ============================================================
// CMS 165 — SHELL (gaya WordPress, Bahasa Indonesia)
// Masuk dengan kata sandi admin (cookie yang sama dengan Ruang
// Admin) → sidebar kiri: Dasbor · Artikel · Halaman · Kategori &
// Tag · Komentar · Media · Pengaturan. Semuanya sangat mudah.
// ============================================================
import { useCallback, useEffect, useState } from 'react'
import {
  BookMarked, BookOpen, Brain, FileText, Image as ImageIcon, Inbox, KeyRound, LayoutDashboard,
  LayoutGrid, Lock, MessageSquare, Settings, ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Kicker, SkeletonCard } from '../ui'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { CmsDashboard } from './dashboard'
import { PostList } from './posts'
import { PostEditor, type EditorDraft } from './editor'
import { TaxonomyPanel } from './taxonomy'
import { CommentsPanel } from './comments-panel'
import { MediaPanel } from './media-panel'
import { PersonaPanel } from './persona-panel'
import { KitabPanel } from './kitab-panel'
import { SettingsPanel } from './settings-panel'
import type { CmsCategoryRow, CmsOverview } from './types'

type Tab = 'dasbor' | 'artikel' | 'halaman' | 'kitab' | 'taksonomi' | 'komentar' | 'media' | 'peran' | 'pengaturan'
type View = { mode: 'list' } | { mode: 'edit'; draft: EditorDraft | null }

const MENU: Array<{ key: Tab; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { key: 'dasbor', label: 'Dasbor', icon: LayoutDashboard },
  { key: 'artikel', label: 'Artikel', icon: BookOpen },
  { key: 'halaman', label: 'Halaman', icon: FileText },
  { key: 'kitab', label: 'Kitab', icon: BookMarked },
  { key: 'taksonomi', label: 'Kategori & Tag', icon: LayoutGrid },
  { key: 'komentar', label: 'Komentar', icon: MessageSquare },
  { key: 'media', label: 'Media', icon: ImageIcon },
  { key: 'peran', label: 'Peran & Persona', icon: Brain },
  { key: 'pengaturan', label: 'Pengaturan', icon: Settings },
]

export function CmsSection() {
  const [checking, setChecking] = useState(true)
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState<Tab>('dasbor')
  const [view, setView] = useState<View>({ mode: 'list' })
  const [categories, setCategories] = useState<CmsCategoryRow[]>([])
  const [pending, setPending] = useState(0)
  const [authorDefault, setAuthorDefault] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const [password, setPassword] = useState('')
  const [loginBusy, setLoginBusy] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)
  const { toast } = useToast()

  const checkSession = useCallback(async () => {
    setChecking(true)
    try {
      const r = await fetch('/api/cms/overview')
      if (r.status === 401) { setAuthed(false); return }
      const j = await r.json().catch(() => ({}))
      if (r.ok) {
        setAuthed(true)
        setPending(j.stats?.pendingComments ?? 0)
      }
    } catch {
      setAuthed(false)
    } finally {
      setChecking(false)
    }
  }, [])

  // defer kecil: hindari fetch saat SSR hydrate (pola lint 165)
  useEffect(() => {
    const t = window.setTimeout(() => { void checkSession() }, 0)
    return () => window.clearTimeout(t)
  }, [checkSession])

  const loadCategories = useCallback(async () => {
    try {
      const r = await fetch('/api/cms/categories')
      const j = await r.json().catch(() => ({}))
      if (r.ok) setCategories(Array.isArray(j.items) ? j.items : [])
    } catch { /* diam */ }
  }, [])

  useEffect(() => {
    if (!authed) return
    const t = window.setTimeout(() => { void loadCategories() }, 0)
    return () => window.clearTimeout(t)
  }, [authed, loadCategories, refreshKey])

  // persona aktif (Peran & Persona) → nama penulis artikel baru
  const loadPersonas = useCallback(async () => {
    try {
      const r = await fetch('/api/cms/personas')
      const j = await r.json().catch(() => ({}))
      if (r.ok && Array.isArray(j.items)) {
        const act = j.items.find((p: { active: boolean; name: string }) => p.active)
        setAuthorDefault(act ? act.name : null)
      }
    } catch { /* diam */ }
  }, [])

  useEffect(() => {
    if (!authed) return
    const t = window.setTimeout(() => { void loadPersonas() }, 0)
    return () => window.clearTimeout(t)
  }, [authed, loadPersonas, refreshKey])

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginBusy(true)
    setLoginError(null)
    try {
      const r = await fetch('/api/admin/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) { setLoginError(j.error ?? 'Login gagal.'); return }
      setPassword('')
      toast({ title: 'Selamat datang di CMS 165!' })
      await checkSession()
    } catch {
      setLoginError('Tidak dapat menghubungi server.')
    } finally {
      setLoginBusy(false)
    }
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' }).catch(() => {})
    setAuthed(false)
    setTab('dasbor')
    setView({ mode: 'list' })
    toast({ title: 'Anda telah keluar.' })
  }

  const afterChange = useCallback(async (opts?: { commentChange?: boolean }) => {
    setRefreshKey((k) => k + 1)
    if (opts?.commentChange) {
      try {
        const r = await fetch('/api/cms/overview')
        const j = await r.json().catch(() => ({}))
        if (r.ok) setPending(j.stats?.pendingComments ?? 0)
      } catch { /* diam */ }
    }
  }, [])

  // ---------------- loading & login ----------------
  if (checking) {
    return (
      <div className="space-y-4 py-6">
        <div className="mx-auto flex max-w-md flex-col items-center gap-3 py-10">
          <LayoutGrid className="text-muted-foreground size-8 animate-pulse" aria-hidden />
          <p className="text-muted-foreground text-[13px]">Memeriksa sesi admin…</p>
        </div>
        <SkeletonCard />
      </div>
    )
  }

  if (!authed) {
    return (
      <div className="mx-auto max-w-md py-6 sm:py-10">
        <Card className="border-border/80">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center">
              <div className="border-[var(--brass)]/50 bg-secondary mx-auto flex size-14 items-center justify-center rounded-sm border">
                <Lock className="size-5 text-[var(--brass)]" aria-hidden />
              </div>
              <Kicker className="mt-4 justify-center">CMS 165 · sangat mudah</Kicker>
              <h1 className="font-display mt-1 text-2xl font-semibold tracking-tight">Masuk CMS 165</h1>
              <p className="text-muted-foreground mt-2 text-[13px] leading-relaxed">
                Tulis artikel, kelola halaman, unggah media, dan moderasi komentar — seperti WordPress, tapi dalam Bahasa Indonesia.
              </p>
            </div>
            <form onSubmit={login} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="cms-password">Kata sandi admin</Label>
                <Input
                  id="cms-password" type="password" value={password} required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••" autoComplete="current-password"
                />
              </div>
              {loginError && (
                <p role="alert" className="rounded-sm border border-rose-700/30 bg-rose-50 px-3 py-2 text-[13px] text-rose-900">{loginError}</p>
              )}
              <Button type="submit" className="w-full" disabled={loginBusy || password.length === 0}>
                <KeyRound className="size-4" aria-hidden /> {loginBusy ? 'Memeriksa…' : 'Masuk'}
              </Button>
            </form>
            <p className="text-muted-foreground mt-5 border-t border-border/60 pt-4 text-center text-[12px] leading-relaxed">
              <ShieldCheck className="mr-1 inline size-3.5 text-[var(--brass)]" aria-hidden />
              Satu sandi untuk CMS &amp; Ruang Admin. Default pengembangan: <code>qodiriyah165</code> — ganti lewat <code>ADMIN_PASSWORD</code>.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ---------------- dashboard layout ----------------
  const editorOpen = view.mode === 'edit'

  return (
    <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
      {/* sidebar (desktop) + tabbar (mobile) */}
      <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <div className="border-border bg-card hidden rounded-2xl border p-2 lg:block">
          <p className="text-muted-foreground px-2.5 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase">CMS 165</p>
          <nav aria-label="Menu CMS">
            <ul className="space-y-0.5">
              {MENU.map((m) => (
                <li key={m.key}>
                  <button
                    type="button"
                    aria-current={tab === m.key ? 'true' : undefined}
                    onClick={() => { setTab(m.key); setView({ mode: 'list' }) }}
                    className={cn(
                      'flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-[13.5px] font-semibold transition-all active:scale-[0.98]',
                      tab === m.key ? 'bg-primary text-primary-foreground v4-glow' : 'text-foreground/75 hover:bg-secondary hover:text-foreground',
                    )}
                  >
                    <m.icon className="size-4 shrink-0" aria-hidden />
                    {m.label}
                    {m.key === 'komentar' && pending > 0 && (
                      <span className={cn('ml-auto rounded-full px-1.5 py-0.5 text-[10px] font-bold', tab === 'komentar' ? 'bg-primary-foreground text-primary' : 'bg-rose-600 text-white')}>
                        {pending}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-border/60 mt-2 border-t pt-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-[13px]" onClick={() => logout()}>
              Keluar
            </Button>
          </div>
        </div>

        {/* mobile tabbar */}
        <div className="border-border bg-card/70 flex gap-1 overflow-x-auto rounded-2xl border p-2 lg:hidden" role="tablist" aria-label="Menu CMS">
          {MENU.map((m) => (
            <button
              key={m.key} type="button" role="tab" aria-selected={tab === m.key}
              onClick={() => { setTab(m.key); setView({ mode: 'list' }) }}
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[12.5px] font-bold transition-all active:scale-95',
                tab === m.key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              <m.icon className="size-3.5" aria-hidden />
              {m.label}
              {m.key === 'komentar' && pending > 0 && (
                <span className={cn('rounded-full px-1.5 py-0.5 text-[10px] font-bold', tab === 'komentar' ? 'bg-primary-foreground text-primary' : 'bg-rose-600 text-white')}>
                  {pending}
                </span>
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* konten */}
      <div className="min-w-0">
        {tab === 'dasbor' && view.mode === 'list' && (
          <CmsDashboard onNavigate={(t) => { setTab(t); setView({ mode: 'list' }) }} refreshKey={refreshKey} />
        )}

        {tab === 'artikel' && view.mode === 'list' && (
          <PostList
            type="post"
            categories={categories}
            onEdit={(row) => setView({ mode: 'edit', draft: rowToDraft(row) })}
            onCreate={() => setView({ mode: 'edit', draft: null })}
          />
        )}

        {tab === 'halaman' && view.mode === 'list' && (
          <PostList
            type="page"
            categories={categories}
            onEdit={(row) => setView({ mode: 'edit', draft: rowToDraft(row) })}
            onCreate={() => setView({ mode: 'edit', draft: null })}
          />
        )}

        {editorOpen && view.mode === 'edit' && (
          <PostEditor
            key={view.draft?.id ?? 'new'}
            initial={view.draft}
            categories={categories}
            authorDefault={authorDefault ?? undefined}
            onSaved={async () => {
              setView({ mode: 'list' })
              await afterChange()
            }}
            onCancel={() => setView({ mode: 'list' })}
          />
        )}

        {tab === 'kitab' && view.mode === 'list' && <KitabPanel />}

        {tab === 'taksonomi' && view.mode === 'list' && <TaxonomyPanel onChanged={() => void afterChange()} />}

        {tab === 'komentar' && view.mode === 'list' && <CommentsPanel onChanged={() => void afterChange({ commentChange: true })} />}

        {tab === 'media' && view.mode === 'list' && <MediaPanel />}

        {tab === 'peran' && view.mode === 'list' && <PersonaPanel />}

        {tab === 'pengaturan' && view.mode === 'list' && <SettingsPanel />}
      </div>
    </div>
  )
}

function rowToDraft(row: { id: string; type: 'post' | 'page'; title: string; slug: string; coverUrl: string | null; pinned: boolean; categoryId: string | null; tags: { name: string }[] }): EditorDraft {
  return {
    id: row.id, type: row.type, title: row.title, slug: row.slug,
    excerpt: '', content: '', coverUrl: row.coverUrl,
    pinned: row.pinned, categoryId: row.categoryId ?? '',
    tags: row.tags.map((t) => t.name),
  }
}

// re-export agar overview type terpakai oleh shell (lint)
export type { CmsOverview }
