'use client'

// 165 — LANGUAGES: the map of every nation to its language, with honest translation statuses
import { useMemo, useState } from 'react'
import { BookMarked, Globe2, HandHeart, Languages as LanguagesIcon, ListFilter, Search, ShieldCheck } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import {
  COUNTRIES,
  LANGUAGES,
  LANG_BY_CODE,
  REGIONS,
  countriesCountFor,
  countryStatus,
  langCounts,
  type LangStatus,
  type Region,
} from '@/lib/i18n/languages'
import { setLang, useLang, useT } from '@/lib/i18n/store'
import { HonestNote, SectionHeading } from '../ui'

const STATUS_DOT: Record<LangStatus, string> = {
  native: 'bg-emerald-600 dark:bg-emerald-400',
  assisted: 'bg-amber-500 dark:bg-amber-400',
  prep: 'bg-stone-400 dark:bg-stone-500',
}

function StatCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="bg-card/60 border-border/80 rounded-md border px-4 py-3.5">
      <div className="flex items-center gap-2">
        <Icon className="size-3.5 text-[var(--khidr)]" aria-hidden />
        <p className="label-caps text-muted-foreground text-[10.5px] leading-tight">{label}</p>
      </div>
      <p className="font-display mt-1.5 text-2xl leading-none font-semibold tabular-nums">{value}</p>
    </div>
  )
}

function StatusLegend() {
  const t = useT()
  const items: { s: LangStatus; label: string }[] = [
    { s: 'native', label: t.lpNative },
    { s: 'assisted', label: t.lpAssisted },
    { s: 'prep', label: t.lpPrep },
  ]
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
      {items.map((i) => (
        <span key={i.s} className="text-muted-foreground inline-flex items-center gap-1.5 text-[12px]">
          <span aria-hidden className={cn('inline-block size-1.5 rounded-full', STATUS_DOT[i.s])} />
          {i.label}
        </span>
      ))}
    </div>
  )
}

export function LanguagesSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const t = useT()
  const lang = useLang()
  const [q, setQ] = useState('')
  const [region, setRegion] = useState<string>('all')

  const counts = langCounts()

  const filteredCountries = useMemo(() => {
    const query = q.trim().toLowerCase()
    return COUNTRIES.filter((c) => {
      if (region !== 'all' && c.region !== region) return false
      if (!query) return true
      const langNames = c.langs.map((l) => LANG_BY_CODE[l]).filter(Boolean)
      return (
        c.name.toLowerCase().includes(query) ||
        c.code.toLowerCase().includes(query) ||
        langNames.some((l) => l.en.toLowerCase().includes(query) || l.native.toLowerCase().includes(query))
      )
    })
  }, [q, region])

  const grouped = useMemo(() => {
    const map = new Map<Region, typeof filteredCountries>()
    for (const c of filteredCountries) {
      const arr = map.get(c.region) ?? []
      arr.push(c)
      map.set(c.region, arr)
    }
    return [...map.entries()].sort((a, b) => REGIONS.indexOf(a[0]) - REGIONS.indexOf(b[0]))
  }, [filteredCountries])

  const filteredLangs = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return LANGUAGES
    return LANGUAGES.filter(
      (l) => l.code.includes(query) || l.en.toLowerCase().includes(query) || l.native.toLowerCase().includes(query),
    )
  }, [q])

  return (
    <div className="space-y-10">
      <SectionHeading kicker={t.lpKicker} title={t.lpTitle} lede={t.lpLede} />

      {/* stats */}
      <section aria-label="Language system statistics" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard icon={Globe2} label={t.lpCountries} value={String(COUNTRIES.length)} />
        <StatCard icon={LanguagesIcon} label={t.lpLanguages} value={String(LANGUAGES.length)} />
        <StatCard icon={ShieldCheck} label={t.lpNative} value={String(counts.native)} />
        <StatCard icon={BookMarked} label={t.lpAssisted} value={String(counts.assisted)} />
      </section>

      <HonestNote>
        <strong className="font-semibold">{t.status}:</strong> {t.lpStatusNote}
      </HonestNote>

      {/* controls */}
      <section aria-label="Coverage explorer" className="space-y-4">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" aria-hidden />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.lpFind} className="pl-9" aria-label={t.search} />
          </div>
          <div className="flex items-center gap-2">
            <ListFilter className="text-muted-foreground size-4 shrink-0" aria-hidden />
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="w-full rounded-sm sm:w-52" aria-label={t.lpAllCountries}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.lpAllCountries}</SelectItem>
                {REGIONS.map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="text-muted-foreground tabular-nums text-[12px] sm:ml-auto sm:shrink-0" aria-live="polite">
            {filteredCountries.length} / {COUNTRIES.length}
          </p>
        </div>

        {/* country coverage — grouped, scrollable */}
        <div className="bg-card/40 border-border nice-scroll max-h-[520px] overflow-y-auto rounded-md border">
          {grouped.length === 0 && (
            <p className="text-muted-foreground px-4 py-10 text-center text-sm">— {t.search} —</p>
          )}
          {grouped.map(([r, list]) => (
            <div key={r}>
              <div className="border-border/70 bg-secondary/60 sticky top-0 z-10 border-b px-4 py-2 backdrop-blur">
                <p className="label-caps text-[11px]">{r} <span className="text-muted-foreground/70">· {list.length}</span></p>
              </div>
              <ul className="divide-border/60 divide-y">
                {list.map((c) => {
                  const st = countryStatus(c)
                  return (
                    <li key={c.code} className="hover:bg-secondary/40 flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2.5 transition-colors">
                      <span className="text-muted-foreground/70 w-7 shrink-0 font-mono text-[10.5px] tracking-wide">{c.code}</span>
                      <span className="min-w-[10rem] flex-1 text-[13.5px] font-medium">{c.name}</span>
                      <span className="flex flex-wrap items-center gap-1.5">
                        {c.langs.map((code) => {
                          const l = LANG_BY_CODE[code]
                          if (!l) return null
                          const available = l.status !== 'prep'
                          const Chip = available ? 'button' : 'span'
                          return (
                            <Chip
                              key={code}
                              {...(available
                                ? {
                                    type: 'button' as const,
                                    onClick: () => setLang(code),
                                    title: `${l.native} (${l.en}) — ${t.status}: ${l.status === 'native' ? t.lpNative : t.lpAssisted}`,
                                  }
                                : { title: `${l.native} (${l.en}) — ${t.lpPrep}` })}
                              className={cn(
                                'border-border/70 inline-flex items-center gap-1.5 rounded-sm border px-1.5 py-0.5 text-[11px] leading-none transition-colors',
                                available && 'hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                                lang === code && 'border-[var(--khidr)]/60 bg-secondary',
                              )}
                            >
                              <span aria-hidden className={cn('inline-block size-1.5 rounded-full', STATUS_DOT[l.status])} />
                              <span className="font-mono text-[10px] tracking-wide uppercase">{code}</span>
                              <span className="hidden max-w-[10rem] truncate sm:inline">{l.native}</span>
                            </Chip>
                          )
                        })}
                      </span>
                      <span
                        className={cn(
                          'w-full text-[10.5px] sm:w-auto',
                          st === 'available' ? 'text-emerald-800 dark:text-emerald-300' : 'text-muted-foreground',
                        )}
                      >
                        {st === 'available' ? `✓ ${t.lpAvailable}` : t.lpPartial}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <StatusLegend />
      </section>

      {/* language registry table */}
      <section aria-label="Language registry" className="space-y-3">
        <div className="bg-card/40 border-border overflow-hidden rounded-md border">
          <div className="nice-scroll max-h-[460px] overflow-y-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="border-border/70 bg-secondary/60 sticky top-0 z-10 backdrop-blur">
                <tr className="label-caps text-[10.5px]">
                  <th scope="col" className="px-4 py-2.5 font-medium">{t.language}</th>
                  <th scope="col" className="px-2 py-2.5 font-medium">ISO</th>
                  <th scope="col" className="hidden px-2 py-2.5 font-medium sm:table-cell">{t.status}</th>
                  <th scope="col" className="px-4 py-2.5 text-right font-medium tabular-nums">{t.lpCountries}</th>
                </tr>
              </thead>
              <tbody className="divide-border/60 divide-y">
                {filteredLangs.map((l) => (
                  <tr
                    key={l.code}
                    className={cn(
                      'hover:bg-secondary/40 transition-colors',
                      lang === l.code && 'bg-secondary/70',
                      l.status !== 'prep' && 'cursor-pointer',
                    )}
                    onClick={l.status !== 'prep' ? () => setLang(l.code) : undefined}
                  >
                    <td className="px-4 py-2">
                      <span className="block leading-tight font-medium">{l.native}</span>
                      <span className="text-muted-foreground block text-[11px] leading-tight">
                        {l.en}
                        {l.dir === 'rtl' ? ' · RTL' : ''}
                      </span>
                    </td>
                    <td className="text-muted-foreground/80 px-2 py-2 font-mono text-[11px] tracking-wide uppercase">{l.code}</td>
                    <td className="hidden px-2 py-2 sm:table-cell">
                      <span className="text-muted-foreground inline-flex items-center gap-1.5 text-[12px]">
                        <span aria-hidden className={cn('inline-block size-1.5 rounded-full', STATUS_DOT[l.status])} />
                        {l.status === 'native' ? t.lpNative : l.status === 'assisted' ? t.lpAssisted : t.lpPrep}
                      </span>
                    </td>
                    <td className="text-muted-foreground px-4 py-2 text-right tabular-nums">{countriesCountFor(l.code)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* adopt a language */}
      <section className="border-[var(--brass)]/35 bg-secondary/50 rounded-md border px-5 py-6 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card">
            <HandHeart className="size-4.5 text-[var(--khidr)]" aria-hidden />
          </div>
          <div className="max-w-2xl">
            <h2 className="font-display text-lg font-semibold">{t.lpAdoptTitle}</h2>
            <p className="text-muted-foreground mt-1 text-[13.5px] leading-relaxed">{t.lpAdoptLede}</p>
            <p className="text-muted-foreground/80 mt-2 text-[12px]">
              {counts.prep} {t.lpPrep.toLowerCase()} · {t.lpPartial}
            </p>
          </div>
          <button
            onClick={() => onNavigate('contribute')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-auto inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-sm px-5 text-sm font-medium transition-colors sm:ml-auto sm:self-center"
          >
            <HandHeart className="size-4" aria-hidden />
            {t.navContribute}
          </button>
        </div>
      </section>
    </div>
  )
}
