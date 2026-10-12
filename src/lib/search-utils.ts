// 165 — diacritic-insensitive search helpers (shared server + client)
// Users type ASCII ('futuh', 'hikam'); the registry uses scholarly
// transliteration ('Futūḥ', 'Ḥikam'). Unicode NFD + combining-mark
// strip makes both meet. Pure functions, no server dependencies.
export function norm(s: string | null | undefined): string {
  if (!s) return ''
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

export function matchesTerm(
  normed: string,
  e: {
    primaryName: string; subtitle: string | null; summary: string | null; summaryId: string | null
    globalId: string; slug: string; names: string[]
  },
): boolean {
  if (!normed) return true
  return (
    norm(e.primaryName).includes(normed) ||
    norm(e.subtitle).includes(normed) ||
    norm(e.summary).includes(normed) ||
    norm(e.summaryId).includes(normed) ||
    norm(e.globalId).includes(normed) ||
    norm(e.slug).includes(normed) ||
    e.names.some((n) => norm(n).includes(normed))
  )
}
