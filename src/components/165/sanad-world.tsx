'use client'

// 165 — PETA DUNIA SANAD (beta, roadmap hari ke-92)
// Jejaring geografis sanad TQN 165 yang DIURAIKAN dari SANAD_SPINE
// (lapangan `place` tiap simpul) — display-only, bukan klaim baru.
//
// DISIPLIN (Master Directive §15, sejalan sanad-diagram.tsx):
//  · Peta ini TIDAK menambah simpul, jalur, atau legitimasi — ia hanya
//    mengelompokkan simpul yang sudah tercatat menurut kota/negara modern.
//  · Lapisan diaspora hanya memakai fakta tercatat S2: "wakil talqin
//    tersebar di ±35 wilayah termasuk Singapura dan Malaysia" — tanpa
//    menambah nama orang/tempat yang tidak ada di sumber.
//  · Kota tanpa negara modern yang pasti tetap dipetakan hati-hati
//    (Bukhara = Asia Tengah) — tanpa memutakhirkan sejarah.
import { useMemo } from 'react'
import { Globe2, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  SANAD_SPINE,
  SANAD_SEG_BANTEN,
  SANAD_SEG_SURYALAYA,
  TERMINAL_ALBANTANI_NODE,
  TERMINAL_KARAWANG_NODE,
} from '@/lib/sanad-data'
import { HonestNote, Kicker } from './ui'

type Band = 'asia-tengah' | 'persia' | 'irak' | 'hijaz' | 'nusantara' | 'diaspora'

interface CountryGroup {
  key: string
  country: string
  band: Band
  match: string[] // substring lowercase dari lapangan `place`
  hue: string
}

// barat → timur: Asia Tengah → Persia → Irak → Hijaz → Nusantara → Diaspora
const COUNTRIES: CountryGroup[] = [
  {
    key: 'asia-tengah',
    country: 'Asia Tengah (kini Uzbekistan)',
    band: 'asia-tengah',
    match: ['bukhara', 'qasr al-arifan'],
    hue: 'text-violet-700 dark:text-violet-300 bg-violet-500/10 border-violet-500/25',
  },
  {
    key: 'persia',
    country: 'Persia (kini Iran)',
    band: 'persia',
    match: ['persia', 'jilan', 'thus'],
    hue: 'text-sky-700 dark:text-sky-300 bg-sky-500/10 border-sky-500/25',
  },
  {
    key: 'irak',
    country: 'Irak',
    band: 'irak',
    match: ['baghdad', 'karkh', 'karbala', 'kufa'],
    hue: 'text-rose-700 dark:text-rose-300 bg-rose-500/10 border-rose-500/25',
  },
  {
    key: 'hijaz',
    country: 'Hijaz (kini Arab Saudi)',
    band: 'hijaz',
    match: ['makkah', 'madinah'],
    hue: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25',
  },
  {
    key: 'indonesia',
    country: 'Nusantara (kini Indonesia)',
    band: 'nusantara',
    match: ['karawang', 'rengasdengklok', 'cikangkung', 'menes', 'pandeglang', 'cibeber', 'caringin', 'labuan', 'tanara', 'serang', 'banten', 'suryalaya', 'pagerageung', 'tasikmalaya', 'cicalung', 'sumedang', 'trusmi', 'kalisapu', 'weru', 'cirebon', 'sambas', 'kalimantan'],
    hue: 'text-teal-700 dark:text-teal-300 bg-teal-500/10 border-teal-500/25',
  },
]

const BAND_LABEL: Record<Band, string> = {
  'asia-tengah': 'Asia Tengah',
  persia: 'Persia',
  irak: 'Irak',
  hijaz: 'Hijaz',
  nusantara: 'Nusantara',
  diaspora: 'Diaspora',
}

// kata wilayah generik yang muncul di lapangan place — bukan nama kota
const REGION_WORDS = new Set(['persia', 'hijaz', 'irak', 'nusantara', 'asia tengah'])

interface WorldNode {
  name: string
  place: string
  country: string | null
  rank?: number
  terminal?: boolean
}

function extractCities(place: string): string[] {
  return place
    .split(/[/,·]| — | dekat /)
    .map((s) => s.trim())
    .filter(Boolean)
}

/** negara simpul = kelompok dengan pangsa cocok TERBANYAK pada lapangan place —
 *  bukan cocok pertama (place dua negara seperti "Lempuyang, Tanara, … / Makkah"
 *  harus jatuh ke Nusantara, bukan Hijaz). Seri → band lebih barat (urutan array). */
function countryFor(place: string): CountryGroup | null {
  const lower = place.toLowerCase()
  let best: CountryGroup | null = null
  let bestHits = 0
  for (const g of COUNTRIES) {
    const hits = g.match.filter((m) => lower.includes(m)).length
    if (hits > bestHits) {
      best = g
      bestHits = hits
    }
  }
  return best
}

export function SanadWorld() {
  const nodes = useMemo<WorldNode[]>(() => {
    const all = [...SANAD_SPINE, ...SANAD_SEG_BANTEN, ...SANAD_SEG_SURYALAYA, TERMINAL_KARAWANG_NODE, TERMINAL_ALBANTANI_NODE]
    return all.map((n) => {
      const place = n.place ?? ''
      const grp = place ? countryFor(place) : null
      return {
        name: n.name,
        place,
        country: grp?.country ?? null,
        rank: n.rank,
        terminal: n.rank === 39 || (n.rank === 37 && n.segment === 'SURYALAYA') || Boolean(n.founderOf),
      }
    })
  }, [])

  const byCountry = useMemo(() => {
    const map = new Map<string, { group: CountryGroup; cities: Map<string, { label: string; n: number }>; count: number }>()
    const getEntry = (grp: CountryGroup) => {
      const e = map.get(grp.key) ?? { group: grp, cities: new Map<string, { label: string; n: number }>(), count: 0 }
      map.set(grp.key, e)
      return e
    }
    for (const n of nodes) {
      if (!n.country) continue
      const grp = COUNTRIES.find((g) => g.country === n.country)!
      getEntry(grp).count += 1
      // tiap KOTA dicocokkan ke negaranya sendiri bila bisa — kota dalam satu
      // lapangan place bisa lintas negara (mis. "Madinah / Thus, Persia")
      for (const raw of extractCities(n.place)) {
        const c = raw.replace(/\(kini.*?\)/g, '').trim()
        if (!c) continue
        const low = c.toLowerCase()
        if (REGION_WORDS.has(low)) continue // kata wilayah generik — bukan kota
        const g2 = COUNTRIES.find((g) => g.match.some((m) => low.includes(m)))
        const entry = getEntry(g2 ?? grp)
        const prev = entry.cities.get(low)
        entry.cities.set(low, { label: prev?.label ?? c, n: (prev?.n ?? 0) + 1 })
      }
    }
    // urutkan band barat → timur
    const ORDER: Band[] = ['asia-tengah', 'persia', 'irak', 'hijaz', 'nusantara']
    return [...map.values()].sort((a, b) => ORDER.indexOf(a.group.band) - ORDER.indexOf(b.group.band))
  }, [nodes])

  const unmapped = useMemo(() => nodes.filter((n) => !n.country && n.place), [nodes])
  const totalMapped = byCountry.reduce((s, e) => s + e.count, 0)

  return (
    <section aria-labelledby="sworld-h" className="rounded-lg border border-border bg-card/50 p-5 sm:p-6">
      <Kicker>Peta dunia sanad — beta · diuraikan dari simpul tercatat</Kicker>
      <h2 id="sworld-h" className="font-display mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <Globe2 className="text-[var(--brass)] size-5" aria-hidden /> Jejaring geografis tiga jalur
      </h2>
      <p className="text-muted-foreground mt-2 max-w-3xl text-[14px] leading-relaxed">
        Bukan peta baru — hanya pengelompokan simpul sanad yang <em>sudah</em> tercatat menurut kota/negara modern
        ({totalMapped} simpul terpetakan). Arus ilmu mengalir dari barat (Asia Tengah) ke timur (Nusantara),
        lalu menyebar sebagai wakil talqin.
      </p>

      {/* pita barat → timur */}
      <div className="mt-5 grid gap-3 md:grid-cols-5">
        {byCountry.map((e, i) => (
          <div key={e.group.key} className="border-border bg-background/60 relative rounded-md border p-4">
            <span className="text-muted-foreground/60 absolute top-2 right-2.5 font-mono text-[10px]">{i + 1}</span>
            <p className={cn('inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10.5px] font-semibold', e.group.hue)}>
              {BAND_LABEL[e.group.band]}
            </p>
            <p className="font-display mt-2 text-[13.5px] leading-snug font-semibold">{e.group.country}</p>
            <p className="text-muted-foreground mt-1 text-[11.5px]">
              {e.count} simpul tercatat
            </p>
            <ul className="mt-2 space-y-1">
              {[...e.cities.values()].slice(0, 6).map(({ label, n }) => (
                <li key={label} className="text-muted-foreground/90 flex items-start gap-1.5 text-[11.5px] leading-snug">
                  <MapPin className="text-[var(--brass)]/70 mt-0.5 size-3 shrink-0" aria-hidden />
                  <span className="min-w-0">{label}{n > 1 && <span className="text-muted-foreground/60"> ×{n}</span>}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* lapisan diaspora — hanya fakta tercatat S2 */}
      <div className="border-border mt-3 rounded-md border border-dashed bg-secondary/40 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-sm border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 text-[10.5px] font-semibold text-amber-700 dark:text-amber-300">
            Diaspora
          </span>
          <span className="text-[13px] font-semibold">Wakil talqin di luar Jawa</span>
          <span className="border-border bg-secondary text-muted-foreground rounded-sm border px-1.5 py-0.5 font-mono text-[10.5px]">S2</span>
        </div>
        <p className="text-muted-foreground mt-2 text-[13px] leading-relaxed">
          Catatan resmi Suryalaya (S2) merekam: wakil talqin Abah Anom tersebar di ±35 wilayah,{' '}
          <strong>termasuk Singapura dan Malaysia</strong>. Nama-nama wilayah/persona di luar itu{' '}
          <em>belum</em> direkam di arsip 165 — peta ini menunggu kolasi, tidak menebak-nebak.
        </p>
      </div>

      {unmapped.length > 0 && (
        <p className="text-muted-foreground/70 mt-3 text-[11.5px]">
          {unmapped.length} simpul dengan lapangan tempat belum terpetakan negara modern — tampil apa adanya, terbuka untuk koreksi.
        </p>
      )}

      <HonestNote tone="amber" className="mt-4">
        <strong>Beta — display-only.</strong> Peta ini tidak membuat, menggabung, atau melegitimasi sanad (Master Directive §15).
        Pengelompokan kota → negara modern adalah bantuan baca; nama historis (Persia, Hijaz) dipertahankan berdampingan
        dengan nama kini — bukan pemutakhiran sejarah. Koreksi geografis masuk lewat ruang Kontribusi.
      </HonestNote>
    </section>
  )
}
