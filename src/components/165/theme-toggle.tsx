'use client'

// 165 — ThemeToggle: Terang (Cerah Khidir) ⇄ Gelap (Malam Zikir)
// Icon visibility is CSS-driven (.dark variant) so markup is hydration-safe.
import { Moon, Sun } from 'lucide-react'
import { toggleTheme } from '@/lib/theme/store'

export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        'border-border bg-card hover:bg-accent hover:border-[var(--khidr)]/50 relative inline-flex size-9 items-center justify-center rounded-sm border transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ' +
        (className ?? '')
      }
      aria-label="Ganti tema — mode terang dan gelap"
      title="Mode Terang / Gelap"
    >
      {/* sun — visible in light mode */}
      <Sun
        className="text-[var(--khidr)] size-4.5 transition-transform duration-300 dark:hidden dark:-rotate-90"
        aria-hidden
      />
      {/* moon — visible in dark mode */}
      <Moon
        className="text-[var(--khidr)] hidden size-4.5 rotate-90 transition-transform duration-300 dark:block dark:rotate-0"
        aria-hidden
      />
    </button>
  )
}
