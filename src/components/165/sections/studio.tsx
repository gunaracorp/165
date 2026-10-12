'use client'

// 165 — FOUNDER STUDIO
// The WordPress-like room of this platform: log in, add records, edit
// records, review public contributions. Discipline never takes a day
// off here — every save produces a VersionSnapshot + AuditLog row.
// This section is reached via the footer link or /?section=studio.
import { useMemo, useState } from 'react'
import {
  BookOpen, CheckCircle2, ChevronRight, ExternalLink, Inbox, KeyRound, LayoutDashboard,
  Loader2, LockKeyhole, LogOut, PenLine, Plus, RotateCcw, Save, Search, ShieldCheck, X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { norm } from '@/lib/search-utils'
import {
  EVIDENCE_LEVELS, ENTITY_TYPES, VERIFICATION_STATUSES,
  type EvidenceLevelKey, type VerificationStatusKey,
} from '@/lib/165'
import { useT } from '@/lib/i18n/store'
import { EvidenceBadge, Kicker, StatusBadge, TypeBadge, useApi } from '../ui'
import { AnimatedNumber, Reveal, Stagger, StaggerItem } from '../motion'
import { useToast } from '@/hooks/use-toast'

// ---------- shared form styling (institutional, compact) ----------
const INPUT = 'border-border bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none w-full rounded-sm border px-3 py-2 text-sm transition-colors disabled:opacity-50'
const LABEL = 'text-muted-foreground mb-1 block text-[12px] font-medium'
const BTN = 'inline-flex h-10 items-center gap-2 rounded-sm px-4 text-sm font-medium transition-colors'
const BTN_PRIMARY = `${BTN} bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50`
const BTN_GHOST = `${BTN} border-border bg-card hover:bg-accent border disabled:opacity-50`
const BTN_SMALL = 'inline-flex h-8 items-center gap-1.5 rounded-sm px-2.5 text-[12.5px] font-medium transition-colors'

type TabKey = 'overview' | 'records' | 'new' | 'contributions'

async function send<T = Record<string, unknown>>(url: string, method: 'POST' | 'PATCH', body: unknown): Promise<{ ok: boolean; data: T | null; error?: string }> {
  try {
    const r = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const json = await r.json().catch(() => ({}))
    if (!r.ok) return { ok: false, data: null, error: (json as { error?: string }).error ?? `Request failed (${r.status})` }
    return { ok: true, data: json as T }
  } catch (e) {
    return { ok: false, data: null, error: e instanceof Error ? e.message : 'Network error' }
  }
}

// ============================================================
// LOGIN GATE
// ============================================================
function LoginGate({ onSuccess }: { onSuccess: () => void }) {
  const [passphrase, setPassphrase] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  const { toast } = useToast()

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setErr(null)
    const res = await send('/api/studio/login', 'POST', { passphrase })
    setBusy(false)
    if (!res.ok) { setErr(res.error ?? 'Login failed'); return }
    toast({ title: 'Welcome back, Founder', description: 'The studio is unlocked.' })
    onSuccess()
  }

  return (
    <Reveal className="mx-auto max-w-md">
      <div className="rounded-lg border border-[var(--brass)]/40 bg-card p-6 shadow-sm sm:p-8">
        <div className="border-[var(--brass)]/40 bg-[var(--brass-soft)] mx-auto flex size-12 items-center justify-center rounded-full border">
          <LockKeyhole className="text-[var(--brass-text)] size-5" aria-hidden />
        </div>
        <h2 className="font-display mt-4 text-center text-xl font-semibold">Founder Studio</h2>
        <p className="text-muted-foreground mt-1.5 text-center text-[13px] leading-relaxed">
          The private management room — records, contributions and the editorial workflow, in one place.
        </p>
        <form onSubmit={submit} className="mt-6 space-y-3">
          <div>
            <label htmlFor="studio-pass" className={LABEL}>Founder passphrase</label>
            <input
              id="studio-pass"
              type="password"
              autoComplete="current-password"
              className={INPUT}
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              placeholder="••••••••••••"
              required
              minLength={4}
            />
          </div>
          {err && <p role="alert" className="text-destructive text-[13px]">{err}</p>}
          <button type="submit" disabled={busy || passphrase.length < 4} className={cn(BTN_PRIMARY, 'w-full justify-center')}>
            {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <KeyRound className="size-4" aria-hidden />}
            Unlock Studio
          </button>
        </form>
        <p className="text-muted-foreground/80 mt-5 text-center text-[11.5px] leading-relaxed">
          Passphrase is set by the platform owner (<span className="font-mono">FOUNDER_PASSPHRASE</span>).
          Attempts are rate-limited; sessions last 7 days.
        </p>
      </div>
    </Reveal>
  )
}

// ============================================================
// OVERVIEW TAB
// ============================================================
function OverviewTab({ onGo }: { onGo: (t: TabKey) => void }) {
  const { data, loading } = useApi<{ stats: { total: number; byType: Record<string, number>; relations: number; sanadChains: number; contributions: number } }>('/api/stats')
  const stats = data?.stats
  return (
    <div className="space-y-4">
      <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Studio statistics">
        {[
          { label: 'Records', value: stats?.total },
          { label: 'Relationships', value: stats?.relations },
          { label: 'Sanad chains', value: stats?.sanadChains },
          { label: 'Contributions', value: stats?.contributions },
        ].map((s) => (
          <StaggerItem key={s.label} className="h-full">
            <div className="h-full rounded-md border border-border bg-card p-4">
              <p className="font-display text-2xl font-semibold tabular-nums sm:text-3xl">
                {s.value === undefined ? (loading ? '—' : '0') : <AnimatedNumber value={s.value} />}
              </p>
              <p className="text-muted-foreground mt-0.5 text-[12px]">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button onClick={() => onGo('new')} className="border-border bg-card hover:border-[var(--brass)]/50 hover:shadow-md flex items-start gap-3 rounded-md border p-4 text-left transition-all">
          <Plus className="text-[var(--khidr)] mt-0.5 size-4.5 shrink-0" aria-hidden />
          <span>
            <span className="font-display block text-[15px] font-semibold">Add a new record</span>
            <span className="text-muted-foreground mt-0.5 block text-[13px] leading-relaxed">Kitab, tokoh, naskah, peristiwa — with evidence level and honest status, like filling in a catalog card.</span>
          </span>
          <ChevronRight className="text-muted-foreground ml-auto size-4" aria-hidden />
        </button>
        <button onClick={() => onGo('records')} className="border-border bg-card hover:border-[var(--brass)]/50 hover:shadow-md flex items-start gap-3 rounded-md border p-4 text-left transition-all">
          <PenLine className="text-[var(--khidr)] mt-0.5 size-4.5 shrink-0" aria-hidden />
          <span>
            <span className="font-display block text-[15px] font-semibold">Edit existing records</span>
            <span className="text-muted-foreground mt-0.5 block text-[13px] leading-relaxed">Every save is archived as a new version — nothing is ever silently overwritten.</span>
          </span>
          <ChevronRight className="text-muted-foreground ml-auto size-4" aria-hidden />
        </button>
      </div>

      <div className="border-border/70 bg-secondary/40 rounded-md border px-4 py-3 text-[13px] leading-relaxed text-muted-foreground">
        <ShieldCheck className="text-[var(--khidr)] mr-1.5 -mt-0.5 inline size-4" aria-hidden />
        <strong className="text-foreground font-medium">Preservation discipline:</strong> every create/edit is recorded in the audit trail with your identity (<span className="font-mono">founder-studio</span>) and a version snapshot. The registry is append-only — history is never erased.
      </div>
    </div>
  )
}

// ============================================================
// RECORD EDITOR (fetches full profile for the chosen slug)
// ============================================================
type ProfileDTO = {
  slug: string; globalId: string; type: string; primaryName: string; subtitle?: string | null
  summary?: string | null; summaryId?: string | null; summaryAr?: string | null
  evidenceLevel: string; verificationStatus: string
  startDate?: string | null; startDatePrecision?: string | null
  endDate?: string | null; endDatePrecision?: string | null
  region?: string | null
  details?: Record<string, unknown> | null
}

const EVIDENCE_KEYS = Object.keys(EVIDENCE_LEVELS) as EvidenceLevelKey[]
const STATUS_KEYS = Object.keys(VERIFICATION_STATUSES) as VerificationStatusKey[]
const PRECISIONS = ['DAY', 'MONTH', 'YEAR', 'DECADE', 'CENTURY', 'UNKNOWN']

function RecordEditor({ slug, onSaved, onBrowse }: { slug: string; onSaved: () => void; onBrowse: () => void }) {
  const { data, loading, ref } = useApi<{ profile: ProfileDTO }>(`/api/entities/${slug}`)
  const { toast } = useToast()
  const [busy, setBusy] = useState(false)
  const p = data?.profile

  const [form, setForm] = useState<Partial<Record<string, string | null>>>({})
  const [reason, setReason] = useState('')
  const set = (k: string, v: string | null) => setForm((f) => ({ ...f, [k]: v }))
  const val = (k: string): string => (form[k] !== undefined && form[k] !== null ? String(form[k]) : (p as unknown as Record<string, string | null>)?.[k] ?? '')

  if (loading) {
    return <div className="animate-pulse rounded-md border border-border bg-card p-5"><div className="h-4 w-40 rounded bg-muted" /><div className="mt-3 h-3 w-full rounded bg-muted" /></div>
  }
  if (!p) return <p role="alert" className="text-destructive text-sm">Record could not be loaded.</p>

  async function save() {
    if (!p) return
    setBusy(true)
    const detailsRaw = form.details !== undefined ? String(form.details ?? '').trim() : undefined
    let details: Record<string, unknown> | null | undefined
    if (detailsRaw !== undefined) {
      if (detailsRaw === '') { details = null }
      else {
        try { details = JSON.parse(detailsRaw) as Record<string, unknown> } catch {
          setBusy(false)
          toast({ title: 'Details is not valid JSON', description: 'Fix the JSON or empty the field.', variant: 'destructive' })
          return
        }
      }
    }
    const body: Record<string, unknown> = { ...form, details, reason: reason.trim() || undefined }
    const res = await send(`/api/studio/entities/${p.slug}`, 'PATCH', body)
    setBusy(false)
    if (!res.ok) { toast({ title: 'Could not save', description: res.error, variant: 'destructive' }); return }
    const saved = (res.data as { entity?: { version?: number } })?.entity
    toast({ title: 'Record saved', description: `${p.globalId} is now at version ${saved?.version ?? '?'} — previous state archived.` })
    setForm({})
    setReason('')
    ref()
    onSaved()
  }

  return (
    <div className="rounded-md border border-[var(--brass)]/40 bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <TypeBadge type={p.type} />
        <span className="text-muted-foreground font-mono text-[11px]">{p.globalId}</span>
        <span className="text-muted-foreground font-mono text-[11px]">/{p.slug}</span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="ed-name" className={LABEL}>Primary name</label>
          <input id="ed-name" className={INPUT} value={form.primaryName !== undefined ? String(form.primaryName) : p.primaryName} onChange={(e) => set('primaryName', e.target.value)} />
        </div>
        <div>
          <label htmlFor="ed-sub" className={LABEL}>Subtitle / epithet</label>
          <input id="ed-sub" className={INPUT} value={val('subtitle')} onChange={(e) => set('subtitle', e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ed-sum" className={LABEL}>Summary (English)</label>
          <textarea id="ed-sum" rows={3} className={INPUT} value={val('summary')} onChange={(e) => set('summary', e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ed-sumid" className={LABEL}>Summary (Indonesia)</label>
          <textarea id="ed-sumid" rows={2} className={INPUT} value={val('summaryId')} onChange={(e) => set('summaryId', e.target.value)} />
        </div>
        <div>
          <label htmlFor="ed-ev" className={LABEL}>Evidence level</label>
          <select id="ed-ev" className={INPUT} value={val('evidenceLevel') || 'F'} onChange={(e) => set('evidenceLevel', e.target.value)}>
            {EVIDENCE_KEYS.map((k) => <option key={k} value={k}>{k} — {EVIDENCE_LEVELS[k].label.split('— ')[1]}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="ed-st" className={LABEL}>Verification status</label>
          <select id="ed-st" className={INPUT} value={val('verificationStatus') || 'UNVERIFIED'} onChange={(e) => set('verificationStatus', e.target.value)}>
            {STATUS_KEYS.map((k) => <option key={k} value={k}>{VERIFICATION_STATUSES[k].label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="ed-sd" className={LABEL}>Start date</label>
          <input id="ed-sd" className={INPUT} placeholder="e.g. 1928 — empty = not recorded" value={val('startDate')} onChange={(e) => set('startDate', e.target.value)} />
        </div>
        <div>
          <label htmlFor="ed-sdp" className={LABEL}>Start precision</label>
          <select id="ed-sdp" className={INPUT} value={val('startDatePrecision') || ''} onChange={(e) => set('startDatePrecision', e.target.value || null)}>
            <option value="">— not set —</option>
            {PRECISIONS.map((x) => <option key={x} value={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="ed-region" className={LABEL}>Region</label>
          <input id="ed-region" className={INPUT} value={val('region')} onChange={(e) => set('region', e.target.value)} />
        </div>
        <div>
          <label htmlFor="ed-vis" className={LABEL}>Visibility</label>
          <select id="ed-vis" className={INPUT} value={val('visibility') || 'PUBLIC'} onChange={(e) => set('visibility', e.target.value)}>
            <option value="PUBLIC">PUBLIC</option>
            <option value="RESTRICTED">RESTRICTED</option>
            <option value="PRIVATE">PRIVATE</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ed-details" className={LABEL}>Details (JSON — type-specific fields)</label>
          <textarea id="ed-details" rows={4} spellCheck={false} className={cn(INPUT, 'font-mono text-[12.5px]')} placeholder={p.details ? undefined : '{"recordBasis":"scholarly citation"}'} value={form.details !== undefined ? String(form.details) : (p.details ? JSON.stringify(p.details, null, 2) : '')} onChange={(e) => set('details', e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ed-reason" className={LABEL}>Reason for this change (archived with the version)</label>
          <input id="ed-reason" className={INPUT} placeholder="e.g. corrected date after checking source" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button type="button" onClick={save} disabled={busy} className={BTN_PRIMARY}>
          {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Save className="size-4" aria-hidden />} Save with version archive
        </button>
        <button type="button" onClick={() => { setForm({}); setReason('') }} className={BTN_GHOST}>
          <RotateCcw className="size-4" aria-hidden /> Reset form
        </button>
        <button type="button" onClick={onBrowse} className={cn(BTN_GHOST, 'ml-auto')}>
          <ExternalLink className="size-4" aria-hidden /> View in Explore
        </button>
      </div>
    </div>
  )
}

// ============================================================
// RECORDS TAB (list + filter + editor)
// ============================================================
type EntityRow = { id: string; slug: string; globalId: string; type: string; primaryName: string; subtitle?: string | null; evidenceLevel: string; verificationStatus: string }

function RecordsTab({ refreshKey }: { refreshKey: number }) {
  const { data, loading, ref } = useApi<{ entities: EntityRow[] }>(`/api/entities?limit=200&r=${refreshKey}`)
  const [q, setQ] = useState('')
  const [type, setType] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const rows = data?.entities ?? []
  const filtered = useMemo(() => rows.filter((r) =>
    (type ? r.type === type : true) &&
    (q.trim()
      ? [r.primaryName, r.subtitle, r.globalId].some((v) => norm(v).includes(norm(q.trim())))
      : true)
  ), [rows, q, type])
  const typesPresent = useMemo(() => Array.from(new Set(rows.map((r) => r.type))).sort(), [rows])

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" aria-hidden />
          <input aria-label="Search records" className={cn(INPUT, 'pl-9')} placeholder="Search name, subtitle or Global ID…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <select aria-label="Filter by type" className={cn(INPUT, 'sm:w-56')} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All types ({rows.length})</option>
          {typesPresent.map((t) => <option key={t} value={t}>{ENTITY_TYPES[t as keyof typeof ENTITY_TYPES]?.label ?? t} ({rows.filter((r) => r.type === t).length})</option>)}
        </select>
      </div>

      <div className="border-border rounded-md border" >
        <ul className="max-h-[24rem] divide-y overflow-y-auto" style={{ scrollbarWidth: 'thin' }} aria-label="Records list">
          {loading && Array.from({ length: 6 }).map((_, i) => <li key={i} className="animate-pulse px-4 py-3"><div className="h-3.5 w-1/2 rounded bg-muted" /></li>)}
          {!loading && filtered.length === 0 && <li className="text-muted-foreground px-4 py-6 text-center text-sm">No records match the filter.</li>}
          {filtered.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => setSelected(selected === r.slug ? null : r.slug)}
                aria-expanded={selected === r.slug}
                className={cn('hover:bg-accent/50 flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors', selected === r.slug && 'bg-secondary')}
              >
                <TypeBadge type={r.type} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14px] font-medium">{r.primaryName}</span>
                  {r.subtitle && <span className="text-muted-foreground block truncate text-[12px]">{r.subtitle}</span>}
                </span>
                <span className="text-muted-foreground/70 hidden font-mono text-[10.5px] sm:inline">{r.globalId}</span>
                <EvidenceBadge level={r.evidenceLevel} />
                {selected === r.slug ? <X className="text-muted-foreground size-3.5" aria-hidden /> : <PenLine className="text-muted-foreground size-3.5" aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selected && (
        <Reveal>
          <RecordEditor slug={selected} onSaved={ref} onBrowse={() => { window.location.href = '/?q=' + encodeURIComponent(selected) }} />
        </Reveal>
      )}
    </div>
  )
}

// ============================================================
// NEW RECORD TAB
// ============================================================
function NewRecordTab({ onCreated }: { onCreated: () => void }) {
  const { toast } = useToast()
  const [busy, setBusy] = useState(false)
  const [f, setF] = useState<Record<string, string>>({
    type: 'BOOK', primaryName: '', subtitle: '', summary: '', summaryId: '',
    evidenceLevel: 'C', verificationStatus: 'DOCUMENTED', startDate: '', startDatePrecision: '', region: '', details: '',
  })
  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }))
  const valid = f.primaryName.trim().length >= 2

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid || busy) return
    setBusy(true)
    let details: Record<string, unknown> | null = null
    if (f.details.trim()) {
      try { details = JSON.parse(f.details) as Record<string, unknown> } catch {
        setBusy(false)
        toast({ title: 'Details is not valid JSON', description: 'Fix the JSON or empty the field.', variant: 'destructive' })
        return
      }
    }
    const res = await send('/api/studio/entities', 'POST', {
      type: f.type, primaryName: f.primaryName.trim(), subtitle: f.subtitle.trim(), summary: f.summary.trim(),
      summaryId: f.summaryId.trim(), evidenceLevel: f.evidenceLevel, verificationStatus: f.verificationStatus,
      startDate: f.startDate.trim(), startDatePrecision: f.startDatePrecision || undefined,
      region: f.region.trim(), details,
    })
    setBusy(false)
    if (!res.ok) { toast({ title: 'Could not create record', description: res.error, variant: 'destructive' }); return }
    const created = (res.data as { entity?: { globalId: string; slug: string } })?.entity
    toast({ title: 'Record created', description: `${created?.globalId} — now live in Explore.` })
    setF((s) => ({ ...s, primaryName: '', subtitle: '', summary: '', summaryId: '', details: '', startDate: '', region: '' }))
    onCreated()
  }

  return (
    <form onSubmit={submit} className="rounded-md border border-border bg-card p-4 sm:p-5" aria-label="Create record">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="nw-type" className={LABEL}>Record type</label>
          <select id="nw-type" className={INPUT} value={f.type} onChange={(e) => set('type', e.target.value)}>
            {Object.entries(ENTITY_TYPES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="nw-name" className={LABEL}>Primary name *</label>
          <input id="nw-name" required minLength={2} className={INPUT} value={f.primaryName} onChange={(e) => set('primaryName', e.target.value)} placeholder="e.g. Kitab Sab'il Mathani" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="nw-sub" className={LABEL}>Subtitle / epithet</label>
          <input id="nw-sub" className={INPUT} value={f.subtitle} onChange={(e) => set('subtitle', e.target.value)} placeholder="author, epithet or role line" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="nw-sum" className={LABEL}>Summary (English)</label>
          <textarea id="nw-sum" rows={3} className={INPUT} value={f.summary} onChange={(e) => set('summary', e.target.value)} placeholder="What is this? One honest paragraph." />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="nw-sumid" className={LABEL}>Summary (Indonesia)</label>
          <textarea id="nw-sumid" rows={2} className={INPUT} value={f.summaryId} onChange={(e) => set('summaryId', e.target.value)} />
        </div>
        <div>
          <label htmlFor="nw-ev" className={LABEL}>Evidence level</label>
          <select id="nw-ev" className={INPUT} value={f.evidenceLevel} onChange={(e) => set('evidenceLevel', e.target.value)}>
            {EVIDENCE_KEYS.map((k) => <option key={k} value={k}>{k} — {EVIDENCE_LEVELS[k].label.split('— ')[1]}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="nw-st" className={LABEL}>Verification status</label>
          <select id="nw-st" className={INPUT} value={f.verificationStatus} onChange={(e) => set('verificationStatus', e.target.value)}>
            {STATUS_KEYS.map((k) => <option key={k} value={k}>{VERIFICATION_STATUSES[k].label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="nw-sd" className={LABEL}>Start date (optional)</label>
          <input id="nw-sd" className={INPUT} value={f.startDate} onChange={(e) => set('startDate', e.target.value)} placeholder="empty = date not recorded" />
        </div>
        <div>
          <label htmlFor="nw-sdp" className={LABEL}>Start precision</label>
          <select id="nw-sdp" className={INPUT} value={f.startDatePrecision} onChange={(e) => set('startDatePrecision', e.target.value)}>
            <option value="">— not set —</option>
            {PRECISIONS.map((x) => <option key={x} value={x}>{x}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="nw-region" className={LABEL}>Region (optional)</label>
          <input id="nw-region" className={INPUT} value={f.region} onChange={(e) => set('region', e.target.value)} placeholder="e.g. Southeast Asia" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="nw-details" className={LABEL}>Details JSON (optional — e.g. recordBasis, sourceRef)</label>
          <textarea id="nw-details" rows={3} spellCheck={false} className={cn(INPUT, 'font-mono text-[12.5px]')} value={f.details} onChange={(e) => set('details', e.target.value)} placeholder='{"recordBasis":"scholarly citation","sourceRef":"165-SRC-000007"}' />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="submit" disabled={!valid || busy} className={BTN_PRIMARY}>
          {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Plus className="size-4" aria-hidden />} Create record
        </button>
        <p className="text-muted-foreground text-[12px]">A Global ID (e.g. <span className="font-mono">165-BOOK-000010</span>) is assigned automatically.</p>
      </div>
    </form>
  )
}

// ============================================================
// CONTRIBUTIONS TAB — the moderation desk
// ============================================================
type ContributionRow = {
  reference: string; kind: string; title: string; payload: string
  submitterName: string; submitterContact?: string | null
  status: string; statusNote?: string | null; createdAt: string
}

const FLOW = ['SUBMITTED', 'SCREENING', 'EDITORIAL_REVIEW', 'SOURCE_REVIEW', 'VERIFICATION', 'APPROVED']

function statusTone(s: string): string {
  if (s === 'APPROVED') return 'border-emerald-700/30 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/45 dark:text-emerald-100'
  if (s === 'REJECTED' || s === 'DISPUTED') return 'border-rose-700/30 bg-rose-50 text-rose-900 dark:bg-rose-950/45 dark:text-rose-100'
  if (s === 'SUBMITTED' || s === 'SCREENING') return 'border-amber-700/30 bg-amber-50 text-amber-900 dark:bg-amber-950/45 dark:text-amber-100'
  return 'border-teal-700/30 bg-teal-50 text-teal-900 dark:bg-teal-950/45 dark:text-teal-100'
}

function ContributionsTab({ refreshKey }: { refreshKey: number }) {
  const { data, loading, error, ref } = useApi<{ contributions: ContributionRow[] }>(`/api/studio/contributions?r=${refreshKey}`)
  const { toast } = useToast()
  const [busyRef, setBusyRef] = useState<string | null>(null)
  const rows = data?.contributions ?? []

  async function move(row: ContributionRow, status: string) {
    setBusyRef(row.reference)
    const res = await send('/api/studio/contributions', 'PATCH', { reference: row.reference, status })
    setBusyRef(null)
    if (!res.ok) { toast({ title: 'Could not update', description: res.error, variant: 'destructive' }); return }
    toast({ title: `${row.reference} → ${status}` })
    ref()
  }

  if (error) {
    return (
      <div className="border-border border-dashed bg-card/60 rounded-md border px-6 py-8 text-center text-sm">
        <Inbox className="text-muted-foreground mx-auto size-6" aria-hidden />
        <p className="text-muted-foreground mt-3 leading-relaxed">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {loading && <div className="animate-pulse rounded-md border border-border bg-card p-5"><div className="h-4 w-52 rounded bg-muted" /></div>}
      {!loading && rows.length === 0 && (
        <div className="border-border border-dashed bg-card/60 rounded-md border px-6 py-8 text-center">
          <Inbox className="text-muted-foreground mx-auto size-6" aria-hidden />
          <p className="text-muted-foreground mt-3 text-sm">No public contributions yet. The inbox fills as the community responds.</p>
        </div>
      )}
      {rows.map((c) => {
        let desc = ''
        try { desc = (JSON.parse(c.payload) as { description?: string }).description ?? '' } catch { desc = '' }
        const idx = FLOW.indexOf(c.status)
        const next = idx >= 0 && idx < FLOW.length - 1 ? FLOW[idx + 1] : null
        const terminal = c.status === 'APPROVED' || c.status === 'REJECTED' || c.status === 'DISPUTED'
        return (
          <div key={c.reference} className="rounded-md border border-border bg-card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn('inline-flex items-center gap-1.5 rounded-sm border px-1.5 py-0.5 text-[11px] font-medium leading-none', statusTone(c.status))}>
                <span aria-hidden className="inline-block size-1.5 rounded-full bg-current opacity-70" />{c.status}
              </span>
              <span className="text-muted-foreground font-mono text-[11px]">{c.reference}</span>
              <span className="text-muted-foreground text-[11px] uppercase">{c.kind}</span>
              <span className="text-muted-foreground ml-auto text-[11px]">{new Date(c.createdAt).toLocaleDateString()}</span>
            </div>
            <h3 className="font-display mt-2 text-[15px] font-semibold">{c.title}</h3>
            {desc && <p className="text-muted-foreground mt-1 line-clamp-3 text-[13px] leading-relaxed">{desc}</p>}
            <p className="text-muted-foreground mt-1.5 text-[12px]">Submitted by <strong className="text-foreground font-medium">{c.submitterName}</strong>{c.submitterContact ? ` · ${c.submitterContact}` : ''}</p>
            {c.statusNote && <p className="text-muted-foreground/90 mt-1.5 text-[12px] italic">{c.statusNote}</p>}
            {!terminal && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {next && (
                  <button type="button" onClick={() => move(c, next)} disabled={busyRef === c.reference} className={cn(BTN_SMALL, 'bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50')}>
                    {busyRef === c.reference ? <Loader2 className="size-3.5 animate-spin" aria-hidden /> : <CheckCircle2 className="size-3.5" aria-hidden />}
                    Advance to {next}
                  </button>
                )}
                <button type="button" onClick={() => move(c, 'REJECTED')} disabled={busyRef === c.reference} className={cn(BTN_SMALL, 'border-border bg-card hover:bg-accent border disabled:opacity-50')}>
                  <X className="size-3.5" aria-hidden /> Reject
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ============================================================
// STUDIO SHELL
// ============================================================
const TABS: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'overview', label: 'Overview', icon: LayoutDashboard },
  { key: 'records', label: 'Records', icon: BookOpen },
  { key: 'new', label: 'Add Record', icon: Plus },
  { key: 'contributions', label: 'Contributions', icon: Inbox },
]

export function StudioSection() {
  const t = useT()
  const { data: session, loading: sessionLoading, ref: refSession } = useApi<{ authed: boolean }>('/api/studio/session')
  const [tab, setTab] = useState<TabKey>('overview')
  const [refreshKey, setRefreshKey] = useState(0)
  const authed = session?.authed === true

  const { toast } = useToast()

  async function logout() {
    await fetch('/api/studio/logout', { method: 'POST' })
    toast({ title: 'Studio locked', description: 'Session ended. See you soon.' })
    refSession()
    setTab('overview')
  }

  return (
    <div className="space-y-6">
      <Reveal>
        <Kicker>{t.navContribute === 'Contribute' ? 'Private room' : 'Private room'}</Kicker>
        <div className="mt-1.5 flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Founder Studio</h1>
          {authed && (
            <button type="button" onClick={logout} className={cn(BTN_GHOST, 'h-9')}>
              <LogOut className="size-4" aria-hidden /> Lock Studio
            </button>
          )}
        </div>
        <p className="text-muted-foreground mt-2 max-w-2xl text-[15px] leading-relaxed">
          The management room of 165 — add records, refine existing ones and guide public contributions
          through the editorial workflow. Same discipline as the whole platform: nothing is deleted, every change is archived.
        </p>
      </Reveal>

      {sessionLoading ? (
        <div className="animate-pulse rounded-md border border-border bg-card p-10 text-center text-sm text-muted-foreground">Checking session…</div>
      ) : !authed ? (
        <LoginGate onSuccess={refSession} />
      ) : (
        <>
          <div className="border-border bg-secondary/40 flex w-full gap-1 overflow-x-auto rounded-md border p-1" role="tablist" aria-label="Studio sections">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={cn(
                  'inline-flex h-9 flex-1 min-w-fit items-center justify-center gap-1.5 rounded-sm px-3 text-[13px] font-medium whitespace-nowrap transition-colors',
                  tab === key ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <Icon className="size-3.5" aria-hidden /> {label}
              </button>
            ))}
          </div>

          {tab === 'overview' && <OverviewTab onGo={setTab} />}
          {tab === 'records' && <RecordsTab refreshKey={refreshKey} />}
          {tab === 'new' && <NewRecordTab onCreated={() => { setRefreshKey((k) => k + 1); setTab('records') }} />}
          {tab === 'contributions' && <ContributionsTab refreshKey={refreshKey} />}
        </>
      )}
    </div>
  )
}
