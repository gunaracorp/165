'use client'

// ============================================================
// 165 — PANEL ADMIN: SEO & INDEXNOW
// Penjelasan sederhana untuk pendiri + satu tombol ping.
// IndexNow: protokol resmi (milik Bing, dipakai bersama Yandex, Seznam,
// Naver, Yes) yang memberi tahu mesin pencari secara INSTAN ketika ada
// halaman baru/berubah — sehingga situs lebih cepat muncul & diperbarui
// di hasil pencarian tanpa menunggu siklus perayapan.
// ============================================================
import { useEffect, useState } from 'react'
import { Globe, RefreshCw, SearchCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Status {
  protocol: string
  key: string
  keyLocation: string
  trackedUrls: number
  engines: string[]
}

interface PingOutcome {
  target: string
  ok: boolean
  status: number | string
  detail?: string
}

export function IndexNowPanel() {
  const [status, setStatus] = useState<Status | null>(null)
  const [busy, setBusy] = useState(false)
  const [results, setResults] = useState<PingOutcome[] | null>(null)
  const [submitted, setSubmitted] = useState(0)

  useEffect(() => {
    fetch('/api/indexnow')
      .then((r) => r.json())
      .then(setStatus)
      .catch(() => setStatus(null))
  }, [])

  const ping = async () => {
    setBusy(true)
    setResults(null)
    try {
      const r = await fetch('/api/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ all: true }),
      })
      const j = await r.json()
      setResults(j.results ?? [])
      setSubmitted(j.submitted ?? 0)
    } catch {
      setResults([{ target: 'Jaringan', ok: false, status: 'ERR', detail: 'Tidak dapat menghubungi server.' }])
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-4">
      <Card className="v4-card border-border/70">
        <CardContent className="p-5">
          <div className="flex items-center gap-2">
            <SearchCheck className="text-primary size-4.5" aria-hidden />
            <p className="font-display text-lg font-bold">SEO · IndexNow</p>
          </div>
          <div className="text-muted-foreground mt-2 space-y-2 text-[13px] leading-relaxed">
            <p>
              <strong>IndexNow</strong> adalah protokol resmi untuk memberi tahu mesin pencari
              (<strong>Bing, Yandex, Seznam, Naver, Yes</strong>) secara <strong>instan</strong> setiap kali ada
              halaman baru atau berubah — situs lebih cepat muncul dan lebih cepat diperbarui di hasil pencarian.
            </p>
            <p>
              Kunci verifikasi sudah terpasang di <code className="bg-secondary rounded px-1.5 py-0.5 text-[11.5px]">{status?.keyLocation ?? '/<kunci>.txt'}</code> —
              inilah syarat protokol, tidak perlu diubah.
            </p>
            <p>
              <strong>Google</strong> tidak tergabung IndexNow dan sejak 2023 tidak lagi menyediakan ping —
              ia merayapi <code className="bg-secondary rounded px-1.5 py-0.5 text-[11.5px]">/sitemap.xml</code> secara mandiri
              (sudah dikawal robots.txt). Jalur lain (Bing dkk.) dipercepat langsung lewat IndexNow.
            </p>
            <p>
              Ping <strong>otomatis</strong> juga berjalan setiap kali bacaan/entitas baru diterbitkan lewat Ruang Admin —
              tidak perlu menekan apa pun.
            </p>
          </div>

          {status && (
            <div className="bg-secondary/50 mt-4 grid grid-cols-2 gap-3 rounded-2xl p-3.5 sm:grid-cols-3">
              <div>
                <p className="label-caps text-muted-foreground text-[9.5px]">Protokol</p>
                <p className="text-sm font-bold">{status.protocol}</p>
              </div>
              <div>
                <p className="label-caps text-muted-foreground text-[9.5px]">URL terpantau</p>
                <p className="text-sm font-bold tabular-nums">{status.trackedUrls}</p>
              </div>
              <div>
                <p className="label-caps text-muted-foreground text-[9.5px]">Mesin pencari</p>
                <p className="text-sm font-bold">{status.engines.length} jalur</p>
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button size="sm" className="h-9 rounded-full px-4 text-xs" onClick={ping} disabled={busy}>
              <RefreshCw className={cn('mr-1.5 size-3.5', busy && 'animate-spin')} aria-hidden />
              {busy ? 'Mengirim…' : 'Ping mesin pencari sekarang'}
            </Button>
            {status && (
              <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs">
                <Globe className="size-3.5" aria-hidden /> kunci: {status.key.slice(0, 8)}…{status.key.slice(-4)}
              </span>
            )}
          </div>

          {results && (
            <ul className="mt-3 space-y-1.5">
              {results.map((r) => (
                <li key={r.target} className="flex items-start justify-between gap-2 rounded-xl border border-border/60 px-3 py-2">
                  <span className="text-[12.5px] font-semibold">{r.target}</span>
                  <span className={cn('text-[11px] font-bold', r.ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400')}>
                    {r.ok ? 'terkirim' : `gagal (${r.status})`}
                    {r.detail && <span className="text-muted-foreground block font-normal">{r.detail}</span>}
                  </span>
                </li>
              ))}
              {submitted > 0 && (
                <li className="text-muted-foreground text-[11px]">{submitted} URL dikirim ke antrean IndexNow.</li>
              )}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
