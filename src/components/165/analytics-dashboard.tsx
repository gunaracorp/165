'use client'

// 165 — Analytics Room (admin): live visitor aggregates, top searches,
// top entities, 7-day series. Aggregates only — no personal data, ever.
import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Activity, Eye, Search, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

interface Summary {
  totals: { all: number; last24h: number; last7d: number }
  topPaths: { path: string; count: number }[]
  topSearches: { term: string | null; count: number }[]
  topEntities: { path: string; count: number }[]
  series: { day: string; count: number }[]
}

function useSummary() {
  const [data, setData] = useState<Summary | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        const res = await fetch('/api/analytics/summary')
        const json = (await res.json()) as Summary
        if (alive) setData(json)
      } catch { /* honest zero state */ }
      if (alive) setLoading(false)
    }
    void load()
    const id = setInterval(load, 30000)
    return () => { alive = false; clearInterval(id) }
  }, [])
  return { data, loading }
}

const DAY_LABEL = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

export function AnalyticsDashboard() {
  const { data, loading } = useSummary()

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}
      </div>
    )
  }

  const totals = data?.totals ?? { all: 0, last24h: 0, last7d: 0 }
  const series = (data?.series ?? []).map((s) => ({
    ...s,
    label: DAY_LABEL[(new Date(s.day + 'T00:00:00').getDay() + 6) % 7],
  }))

  return (
    <div className="flex flex-col gap-5">
      {/* stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Kunjungan', value: totals.all, icon: Eye, tone: 'text-primary' },
          { label: '24 Jam Terakhir', value: totals.last24h, icon: Activity, tone: 'text-emerald-600' },
          { label: '7 Hari Terakhir', value: totals.last7d, icon: TrendingUp, tone: 'text-[var(--brass)]' },
          { label: 'Sesi Pencarian', value: (data?.topSearches ?? []).reduce((a, b) => a + b.count, 0), icon: Search, tone: 'text-teal-600' },
        ].map((s) => (
          <Card key={s.label} className="v4-card v4-lift border-border/60">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-[12.5px] font-semibold">{s.label}</CardTitle>
              <s.icon className={`size-4.5 ${s.tone}`} aria-hidden />
            </CardHeader>
            <CardContent>
              <div className="font-display text-3xl font-bold tracking-tight">{s.value.toLocaleString('id-ID')}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 7-day series */}
      <Card className="v4-card border-border/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base"><Users className="text-primary size-4.5" aria-hidden /> Kunjungan 7 Hari</CardTitle>
        </CardHeader>
        <CardContent className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={series} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, fontSize: 12.5 }}
                labelStyle={{ fontWeight: 700 }}
              />
              <Bar dataKey="count" name="Kunjungan" fill="var(--primary)" radius={[8, 8, 0, 0]} maxBarSize={44} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* lists */}
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { title: 'Ruang Terpopuler', icon: Eye, rows: (data?.topPaths ?? []).map((r) => ({ key: r.path, label: r.path.replace(/^\/#?/, '') || 'Beranda', count: r.count })) },
          { title: 'Pencarian Populer', icon: Search, rows: (data?.topSearches ?? []).map((r) => ({ key: r.term ?? '—', label: r.term ?? '—', count: r.count })) },
          { title: 'Entitas Terbuka', icon: TrendingUp, rows: (data?.topEntities ?? []).map((r) => ({ key: r.path, label: r.path.replace('entity:', ''), count: r.count })) },
        ].map((col) => (
          <Card key={col.title} className="v4-card border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm"><col.icon className="text-primary size-4" aria-hidden /> {col.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1.5">
              {col.rows.length === 0 && <p className="text-muted-foreground text-xs">Belum ada data — statistik hidup mengikuti kenyataan.</p>}
              {col.rows.slice(0, 6).map((r, i) => (
                <div key={r.key} className="border-border/40 flex items-center justify-between gap-2 rounded-xl border px-3 py-1.5">
                  <span className="min-w-0 flex-1 truncate text-[12.5px] font-medium capitalize">
                    <Badge variant="outline" className="mr-1.5 h-4.5 px-1 text-[10px]">{i + 1}</Badge>
                    {r.label}
                  </span>
                  <span className="text-muted-foreground shrink-0 font-mono text-xs">{r.count}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
