'use client'

// 165 — APP BAR (versi aplikasi)
// Bilah navigasi bawah ala aplikasi ponsel: pintasan terpenting selalu
// berada dalam jangkauan ibu jari. Hanya tampil di layar kecil/sedang —
// di desktop navigasi tetap pada pil kaca di kepala halaman.
import { useEffect, useRef, useState } from 'react'
import { Compass, Home, LayoutGrid, Map, ScrollText, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n'
import type { CatalogKey } from '@/lib/i18n/catalog'

const QUICK = [
  { key: 'home', icon: Home },
  { key: 'wiridian', icon: ScrollText },
  { key: 'tasbih', icon: Compass },
  { key: 'roadmap', icon: Map },
] as const

export function AppBar({
  section,
  sections,
  onNavigate,
}: {
  section: string
  sections: readonly { key: string; label: string }[]
  onNavigate: (s: string) => void
}) {
  const { t } = useI18n()
  // lembar terbuka hanya selama masih di ruangan saat dibuka —
  // pindah ruang otomatis menutup lembar tanpa effect/setState tambahan
  const [openedFor, setOpenedFor] = useState<string | null>(null)
  const sheetOpen = openedFor === section
  const wrapRef = useRef<HTMLDivElement>(null)

  const closeSheet = () => setOpenedFor(null)
  const toggleSheet = () => setOpenedFor(sheetOpen ? null : section)

  // tutup lembar saat klik di luar / Escape
  useEffect(() => {
    if (!sheetOpen) return
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) closeSheet()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSheet()
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [sheetOpen])

  return (
    <div ref={wrapRef} className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      {/* lembar "Ruang Lainnya" — daftar seluruh ruangan */}
      {sheetOpen && (
        <nav
          aria-label={t('nav.more')}
          className="border-border/60 bg-card/95 animate-in fade-in-0 slide-in-from-bottom-4 mx-auto mb-2 max-w-md rounded-3xl border p-3 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl duration-200"
        >
          <div className="mb-2 flex items-center justify-between px-1">
            <p className="label-caps text-muted-foreground text-[10px]">Seluruh Ruang 165</p>
            <button
              type="button"
              onClick={closeSheet}
              aria-label="Tutup lembar navigasi"
              className="text-muted-foreground hover:text-foreground rounded-full p-1 transition-colors"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
          <ul className="grid grid-cols-3 gap-1.5">
            {sections.map((n) => (
              <li key={n.key}>
                <button
                  onClick={() => onNavigate(n.key)}
                  aria-current={section === n.key ? 'page' : undefined}
                  className={cn(
                    'w-full truncate rounded-2xl px-2.5 py-2.5 text-center text-[12px] font-semibold transition-all duration-150 active:scale-[0.96]',
                    section === n.key ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary',
                  )}
                >
                  {t(`nav.${n.key}` as CatalogKey)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* bilah utama — pil kaca mengapung */}
      <div className="px-3 pb-3">
        <div className="border-border/60 bg-card/90 mx-auto flex max-w-md items-center justify-around rounded-full border p-1.5 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl">
          {QUICK.map(({ key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              aria-current={section === key ? 'page' : undefined}
              aria-label={t(`nav.${key}` as CatalogKey)}
              className={cn(
                'relative flex size-11 items-center justify-center rounded-full transition-all duration-200 active:scale-90',
                section === key ? 'text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              <Icon className="size-5" aria-hidden />
              {section === key && (
                <span className="bg-primary v4-glow absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full" aria-hidden />
              )}
            </button>
          ))}
          <button
            onClick={() => toggleSheet()}
            aria-expanded={sheetOpen}
            aria-label={t('nav.more')}
            className={cn(
              'flex h-11 items-center gap-1.5 rounded-full px-3.5 text-[12.5px] font-bold transition-all duration-200 active:scale-95',
              sheetOpen ? 'bg-secondary text-foreground' : 'bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground v4-glow',
            )}
          >
            <LayoutGrid className="size-4" aria-hidden />
            {t('nav.more')}
          </button>
        </div>
      </div>
    </div>
  )
}
