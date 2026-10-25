'use client'

// 165 — Sanad Registry: DISPLAY-ONLY and safety-gated.
// Per the Master Directive (§15): the system never creates, merges, predicts,
// or legitimizes sanad. Chains appear only when recorded with
// Source → Relationship → Evidence → Context → Verification Status.
// Task 30 (restorasi): TIGA jalur transmisi TQN kembali tampil — direkam
// ber-sumber dari Master Blueprint §3.5 yang didepositkan Founder, dengan
// simpul [ MATA BLOK ] jujur untuk generasi yang belum terekam.
import { ChevronRight, Link2 } from 'lucide-react'
import { EmptyState, EvidenceBadge, HonestNote, Kicker, StatusBadge, useApi } from './ui'
import type { EntitySummaryDTO } from '@/lib/165'

type SanadRecord = EntitySummaryDTO

export function SanadRegistry({ onOpenEntity }: { onOpenEntity?: (slug: string) => void }) {
  const { data, loading } = useApi<{ entities: SanadRecord[] }>('/api/entities?type=SANAD&limit=50')
  const chains = data?.entities ?? []

  return (
    <section aria-labelledby="sanad-h">
      <Kicker>Sanad safety</Kicker>
      <h2 id="sanad-h" className="font-display mt-1.5 flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <Link2 className="size-4.5 text-[var(--brass)]" aria-hidden /> Sanad registry — display-only
      </h2>

      <HonestNote className="mt-3" tone="green">
        <strong>Safety policy.</strong> The system does not create sanad, merge sanad without basis, predict
        transmission links, convert tradition into fact, or confer spiritual legitimacy automatically.
        A recorded chain requires <span className="font-mono text-[12px]">Source → Relationship → Evidence → Context → Verification Status</span>.
      </HonestNote>

      {loading ? (
        <div className="mt-4 h-24 animate-pulse rounded-md border border-border bg-card" />
      ) : chains.length === 0 ? (
        <EmptyState icon={ChevronRight} title="No sanad chains are recorded — by design" className="mt-4">
          <p>
            This emptiness is an institutional statement: until chains are deposited with their sources and reviewed,
            165 will display nothing — and will never generate a chain to fill the silence.
          </p>
        </EmptyState>
      ) : (
        <>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {chains.map((c) => (
              <li key={c.globalId}>
                <button
                  type="button"
                  onClick={() => onOpenEntity?.(c.slug)}
                  className="v4-lift group h-full w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <p className="font-mono text-[10px] text-[var(--brass)]">{c.globalId}</p>
                  <p className="mt-1 text-sm leading-snug font-semibold">{c.primaryName}</p>
                  {c.subtitle && <p className="text-muted-foreground mt-1 line-clamp-2 text-[12.5px]">{c.subtitle}</p>}
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                    <EvidenceBadge level={c.evidenceLevel} withLabel />
                    <StatusBadge status={c.verificationStatus} />
                    <ChevronRight
                      className="text-muted-foreground ml-auto size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-3 text-[12.5px] leading-relaxed">
            Buka sebuah jalur untuk melihat mata rantainya — termasuk simpul{' '}
            <span className="font-mono text-[11px]">[ MATA BLOK ]</span> yang menandai generasi yang belum terekam,
            ditandai jujur, tidak pernah dikarang.
          </p>
        </>
      )}
    </section>
  )
}
