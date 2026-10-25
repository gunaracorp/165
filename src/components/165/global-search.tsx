'use client'

// 165 — Global Search Spotlight (Ctrl+K / ⌘K)
// Instant cross-entity search: entities via /api/search, institutional
// sections, quick actions. Recent searches persist to localStorage.
// Doctrine: results come ONLY from the live index — nothing invented.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { BookOpen, Building2, CalendarDays, FileText, FlaskConical, Landmark, Languages, Link2, Loader2, MapPin, Scale, ScrollText, Search, Sparkles, User, Video, Layers, Clock, CornerDownLeft } from 'lucide-react'
import { ENTITY_TYPES } from '@/lib/165'

const TYPE_ICONS: Record<string, typeof User> = {
  PERSON: User, INSTITUTION: Landmark, ORGANIZATION: Building2, PLACE: MapPin,
  BOOK: BookOpen, MANUSCRIPT: ScrollText, DOCUMENT: FileText, MEDIA: Video,
  EVENT: CalendarDays, SANAD: Link2, RESEARCH: FlaskConical, SOURCE: BookOpen,
  CLAIM: Scale, TRADITION: Sparkles, COLLECTION: Layers, TERM: Languages,
}

interface SearchHit {
  id: string; globalId: string; slug: string; type: string
  primaryName: string; subtitle?: string | null
  evidenceLevel: string; verificationStatus: string
}

interface SearchResponse {
  query: string
  groups: Record<string, SearchHit[]>
  total: number
}

const SECTIONS = [
  { key: 'explore', label: 'Jelajah — seluruh entitas' },
  { key: 'library', label: 'Pustaka — kitab & naskah' },
  { key: 'archive', label: 'Arsip — dokumen & sejarah' },
  { key: 'research', label: 'Riset — sumber & klaim' },
  { key: 'academy', label: 'Akademi — kurikulum' },
  { key: 'manaqib', label: 'Manaqib — Syekh Abdul Qodir Al-Jaelani' },
  { key: 'rahasia', label: 'Rahasia — Al-Qur\u2019an & Hadis' },
  { key: 'media', label: 'Media — video & audio' },
  { key: 'trust', label: 'Kepercayaan & Metode — bukti A–F' },
  { key: 'documents', label: 'Dokumen — 8 dokumen kanonik' },
  { key: 'seo', label: 'SEO — arsitektur halaman' },
  { key: 'about', label: 'Tentang 165' },
  { key: 'contribute', label: 'Kontribusi — kirim kiriman' },
]

const RECENT_KEY = '165.search.recent'

function readRecent(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY)
    return raw ? (JSON.parse(raw) as string[]).slice(0, 6) : []
  } catch { return [] }
}

function pushRecent(q: string) {
  try {
    const next = [q, ...readRecent().filter((r) => r !== q)].slice(0, 6)
    localStorage.setItem(RECENT_KEY, JSON.stringify(next))
  } catch { /* storage unavailable */ }
}

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [data, setData] = useState<SearchResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [recent, setRecent] = useState<string[]>([])
  const abortRef = useRef<AbortController | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // keyboard shortcut: Ctrl/Cmd+K, and "/" when not typing in a field
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === '/' && !open) {
        const el = document.activeElement
        const tag = el?.tagName?.toLowerCase()
        if (tag !== 'input' && tag !== 'textarea' && (el as HTMLElement | null)?.isContentEditable !== true) {
          e.preventDefault()
          setOpen(true)
        }
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('165:open-search', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('165:open-search', onOpen)
    }
  }, [open])

  // load recents when opening
  useEffect(() => {
    if (open) setRecent(readRecent())
  }, [open])

  // debounced live search against the institutional index
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    const term = query.trim()
    if (term.length < 2) { setData(null); setLoading(false); return }
    setLoading(true)
    timerRef.current = setTimeout(async () => {
      abortRef.current?.abort()
      const ac = new AbortController()
      abortRef.current = ac
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(term)}`, { signal: ac.signal })
        if (!res.ok) throw new Error(String(res.status))
        const json = (await res.json()) as SearchResponse
        setData(json)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') setData(null)
      } finally {
        if (!ac.signal.aborted) setLoading(false)
      }
    }, 220)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [query])

  const run = useCallback((q: string) => {
    const term = q.trim()
    if (term) pushRecent(term)
    setQuery(term)
  }, [])

  const navigateSection = useCallback((key: string) => {
    setOpen(false)
    try { history.replaceState(null, '', `#${key}`) } catch { /* noop */ }
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }, [])

  const openEntity = useCallback((slug: string) => {
    setOpen(false)
    window.dispatchEvent(new CustomEvent('165:open-entity', { detail: { slug } }))
  }, [])

  const grouped = useMemo(() => {
    if (!data?.groups) return [] as [string, SearchHit[]][]
    return Object.entries(data.groups)
  }, [data])

  return (
    <CommandDialog open={open} onOpenChange={setOpen} shouldFilter={false}>
      <div className="flex items-center gap-2 border-b px-3">
        <Search className="text-muted-foreground size-4 shrink-0" aria-hidden />
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Cari entitas, kitab, tokoh, istilah… (min. 2 huruf)"
          className="h-12 border-0 text-[15px] focus:ring-0"
        />
        {loading && <Loader2 className="text-muted-foreground size-4 animate-spin" aria-hidden />}
        <kbd className="text-muted-foreground bg-muted hidden rounded border px-1.5 py-0.5 font-mono text-[10px] sm:block">ESC</kbd>
      </div>
      <CommandList className="max-h-[62vh] nice-scroll">
        {!query.trim() && recent.length > 0 && (
          <CommandGroup heading="Pencarian terakhir">
            {recent.map((r) => (
              <CommandItem key={r} value={`recent-${r}`} onSelect={() => run(r)} className="gap-2">
                <Clock className="text-muted-foreground size-4" aria-hidden />
                <span className="text-sm">{r}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {!query.trim() && (
          <CommandGroup heading="Buka ruang institusi">
            {SECTIONS.slice(0, 6).map((s) => (
              <CommandItem key={s.key} value={`sec-${s.key}`} onSelect={() => navigateSection(s.key)} className="gap-2">
                <CornerDownLeft className="text-muted-foreground size-3.5" aria-hidden />
                <span className="text-sm font-medium">{s.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {query.trim().length >= 2 && grouped.map(([type, hits]) => {
          const Icon = TYPE_ICONS[type] ?? FileText
          const meta = ENTITY_TYPES[type as keyof typeof ENTITY_TYPES]
          return (
            <CommandGroup
              key={type}
              heading={`${meta?.labelId ?? type} — ${hits.length} hasil`}
            >
              {hits.slice(0, 8).map((h) => (
                <CommandItem
                  key={h.id}
                  value={`ent-${h.slug}`}
                  onSelect={() => openEntity(h.slug)}
                  className="gap-2.5"
                >
                  <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{h.primaryName}</span>
                    <span className="text-muted-foreground block truncate text-xs">
                      {h.subtitle || h.globalId}
                    </span>
                  </span>
                  <span className="text-muted-foreground shrink-0 font-mono text-[10px] tracking-wide">
                    {h.evidenceLevel}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )
        })}
        {query.trim().length >= 2 && !loading && data?.total === 0 && (
          <CommandEmpty>
            <span className="text-muted-foreground text-sm">
              Tidak ada hasil untuk “{query.trim()}” — kejujuran lebih penting daripada kepenuhan. Coba istilah lain.
            </span>
          </CommandEmpty>
        )}
        {query.trim().length >= 2 && grouped.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Ruang terkait">
              {SECTIONS.slice(0, 4).map((s) => (
                <CommandItem key={s.key} value={`go-${s.key}`} onSelect={() => navigateSection(s.key)} className="gap-2">
                  <CornerDownLeft className="text-muted-foreground size-3.5" aria-hidden />
                  <span className="text-sm">{s.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
      <div className="text-muted-foreground border-t px-3 py-2 text-[11px]">
        <kbd className="bg-muted rounded border px-1">⌘K</kbd> / <kbd className="bg-muted rounded border px-1">Ctrl K</kbd> buka ·
        <kbd className="bg-muted ml-1 rounded border px-1">/</kbd> cepat · hasil dari indeks nyata, bukan karangan
      </div>
    </CommandDialog>
  )
}
