// 165 — Indeks data halaman pengetahuan (sumber tunggal route + sitemap).
// 486 halaman nyata: satu slug = satu URL crawlable, tanpa URL bayangan.
import type { PageEntry, PageKind } from './types'
import { ENTRIES as GLOSSARY_1 } from './glossary-1'
import { ENTRIES as GLOSSARY_2 } from './glossary-2'
import { ENTRIES as GLOSSARY_3 } from './glossary-3'
import { ENTRIES as GLOSSARY_4 } from './glossary-4'
import { ENTRIES as LIBRARY_1 } from './library-1'
import { ENTRIES as LIBRARY_2 } from './library-2'
import { ENTRIES as LIBRARY_3 } from './library-3'
import { ENTRIES as ATLAS } from './atlas'
import { ENTRIES as INSTITUTION_1 } from './institution-1'
import { ENTRIES as INSTITUTION_2 } from './institution-2'
import { ENTRIES as ARCHIVE } from './archive'
import { ENTRIES as ASK } from './ask'

export * from './types'

export const ALL_PAGE_ENTRIES: PageEntry[] = [
  ...GLOSSARY_1, ...GLOSSARY_2, ...GLOSSARY_3, ...GLOSSARY_4,
  ...LIBRARY_1, ...LIBRARY_2, ...LIBRARY_3,
  ...ATLAS,
  ...INSTITUTION_1, ...INSTITUTION_2,
  ...ARCHIVE,
  ...ASK,
]

export function entriesByKind(kind: PageKind): PageEntry[] {
  return ALL_PAGE_ENTRIES.filter((e) => e.kind === kind)
}

// slug -> entry (pengisian pertama menang; dipakai untuk resolusi related lintas kind)
const GLOBAL_INDEX = new Map<string, PageEntry>()
for (const e of ALL_PAGE_ENTRIES) {
  if (!GLOBAL_INDEX.has(e.slug)) GLOBAL_INDEX.set(e.slug, e)
}

export function getEntry(kind: PageKind, slug: string): PageEntry | undefined {
  return ALL_PAGE_ENTRIES.find((e) => e.kind === kind && e.slug === slug)
}

/** Resolusi related lintas kind — slug yang tidak menemukan halaman mana pun dibuang (tanpa tautan mati). */
export function resolveRelated(entry: PageEntry): PageEntry[] {
  const out: PageEntry[] = []
  const seen = new Set<string>()
  for (const slug of entry.related ?? []) {
    const hit = GLOBAL_INDEX.get(slug)
    if (hit && hit.slug !== entry.slug && !seen.has(hit.slug)) {
      seen.add(hit.slug)
      out.push(hit)
    }
  }
  return out
}

export function categoriesOf(kind: PageKind): string[] {
  const cats: string[] = []
  for (const e of entriesByKind(kind)) {
    if (!cats.includes(e.category)) cats.push(e.category)
  }
  return cats
}

export function pageUrl(entry: PageEntry): string {
  return `${KIND_PATH[entry.kind]}${entry.slug}`
}
