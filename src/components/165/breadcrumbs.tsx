'use client'

// 165 — Breadcrumbs (Engagement Kit): visible trail + BreadcrumbList JSON-LD
// so search engines read the same hierarchy humans do.
import { useSyncExternalStore } from 'react'
import { ChevronRight, Home } from 'lucide-react'

// hydration gate: false saat SSR & render hidrasi pertama, true setelahnya —
// tanpa set-state-in-effect (aman aturan react-hooks v6).
const subscribeNoop = () => () => {}
const useMounted = () => useSyncExternalStore(subscribeNoop, () => true, () => false)

export interface Crumb {
  label: string
  hash?: string // SPA section anchor
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const base = 'https://165.web.id'
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${base}/` },
      ...items.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.label,
        item: `${base}/${c.hash ? '#' + c.hash : ''}`,
      })),
    ],
  }

  const go = (hash?: string) => {
    if (!hash) return
    try { history.replaceState(null, '', `#${hash}`) } catch { /* noop */ }
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }

  // Trail mengikuti state SPA yang hanya ada di sisi client (hash/section),
  // maka render selalu SETELAH mount — tidak pernah ikut dalam perbandingan
  // hydration. Ini mencegah hydration mismatch (server selalu merender null,
  // render pertama client pun null, trail muncul seketika setelah hidrasi).
  const mounted = useMounted()

  // halaman beranda tidak butuh trail — sembunyikan sepenuhnya
  if (!mounted || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="no-print mb-4" data-print="hide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ol className="text-muted-foreground flex flex-wrap items-center gap-1 text-[12.5px]">
        <li>
          <button type="button" onClick={() => go('')} className="hover:text-foreground inline-flex items-center gap-1 font-semibold transition-colors">
            <Home className="size-3.5" aria-hidden /> Beranda
          </button>
        </li>
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="inline-flex items-center gap-1">
            <ChevronRight className="size-3.5 opacity-50" aria-hidden />
            {c.hash ? (
              <button type="button" onClick={() => go(c.hash)} className="hover:text-foreground font-semibold transition-colors" aria-current={i === items.length - 1 ? 'page' : undefined}>
                {c.label}
              </button>
            ) : (
              <span className={i === items.length - 1 ? 'text-foreground font-bold' : 'font-medium'} aria-current={i === items.length - 1 ? 'page' : undefined}>
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
