'use client'

// 165 — AUDIO QASIDAH (beta, hari ke-45 roadmap)
// Pemutar "Dengar Arti": narasi terjemahan makna bahasa Indonesia per bait
// qasidah Ibadallah Rijalallah + slot rekaman asli majelis.
//
// DISIPLIN (sejalan arsip bacaan.ts — non-negotiable):
//  · Yang disintesis HANYA narasi arti (terjemahan makna) — TIDAK ADA lantunan
//    Arab buatan mesin. Lafaz ibadah, tartil & iramanya mengikuti majelis dan
//    ijazah murshid; audio ini alat belajar makna, bukan pengganti majelis.
//  · Slot rekaman asli: bila majelis mengunggah rekaman ke
//    /audio/qasidah/rekaman/bait-XX.mp3, tombol mode "Rekaman" langsung
//    hidup tanpa perubahan kode — display-only, tanpa menilai legitimasi.
//  · Label beta & sumber selalu tampil — jujur, tidak pura-pura asli.
import { useEffect, useMemo, useRef, useState } from 'react'
import { AudioLines, Pause, Play, Repeat, SkipBack, SkipForward } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HonestNote } from '../ui'

type PlayerVerse = { order: number; arabic: string; meaningId: string | null }
type AudioMode = 'arti' | 'rekaman'

const ARTI_BASE = '/audio/qasidah/arti'
const REKAMAN_BASE = '/audio/qasidah/rekaman'
const SPEEDS = [
  { v: 0.75, label: '0.75×' },
  { v: 0.85, label: '0.85×' },
  { v: 1, label: '1×' },
  { v: 1.25, label: '1.25×' },
]

const pad = (n: number) => String(n).padStart(2, '0')

function srcOf(bait: number, mode: AudioMode): string | null {
  if (mode === 'rekaman') return `${REKAMAN_BASE}/bait-${pad(bait)}.mp3`
  if (bait === 0) return `${ARTI_BASE}/bait-00-pengantar.mp3`
  return `${ARTI_BASE}/bait-${pad(bait)}.mp3`
}

const fmt = (s: number) =>
  Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00'

export function QasidahAudioPlayer({ verses }: { verses: PlayerVerse[] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const maxBait = useMemo(() => verses.reduce((m, v) => Math.max(m, v.order), 0), [verses])
  const verseOf = useMemo(() => new Map(verses.map((v) => [v.order, v])), [verses])

  // bait: -1 = belum mulai, 0 = pengantar (mode arti), 1..13 = nomor bait
  const [bait, setBait] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const [mode, setMode] = useState<AudioMode>('arti')
  const [speed, setSpeed] = useState(0.85)
  const [loopAll, setLoopAll] = useState(false)
  const [time, setTime] = useState(0)
  const [dur, setDur] = useState(0)
  const [rekamanMissing, setRekamanMissing] = useState(false)

  // muat/ganti sumber sesuai bait+mode, terapkan tempo
  useEffect(() => {
    const a = audioRef.current
    if (!a || bait < 0) return
    const src = srcOf(bait, mode)
    if (!src) return
    const next = new URL(src, window.location.origin).href
    if (a.src !== next) {
      a.src = src
      window.setTimeout(() => {
        setTime(0)
        setDur(0)
      }, 0)
    }
    a.playbackRate = speed
    if (playing) a.play().catch(() => setPlaying(false))
    else a.pause()
  }, [bait, mode, playing, speed])

  const selectBait = (n: number) => {
    setBait(n)
    setPlaying(true)
  }

  const togglePlay = () => {
    if (bait < 0) {
      selectBait(mode === 'rekaman' ? 1 : 0)
      return
    }
    setPlaying((p) => !p)
  }

  const step = (dir: 1 | -1) => {
    if (bait < 0) return selectBait(mode === 'rekaman' ? 1 : 0)
    const next = bait + dir
    if (next > maxBait) {
      if (loopAll) setBait(mode === 'rekaman' ? 1 : 0)
      else setPlaying(false)
      return
    }
    if (next < (mode === 'rekaman' ? 1 : 0)) {
      if (loopAll) setBait(maxBait)
      else {
        setBait(0)
        setPlaying(false)
      }
      return
    }
    setBait(next)
  }

  const switchMode = (m: AudioMode) => {
    if (m === mode) return
    setMode(m)
    setRekamanMissing(false) // percobaan baru — bila tetap 404, catatan jujur muncul lagi
    if (m === 'rekaman' && bait <= 0) setBait(1)
  }

  const verse = bait > 0 ? verseOf.get(bait) : undefined

  return (
    <div className="border-[var(--brass)]/40 v4-card overflow-hidden rounded-3xl border">
      {/* header */}
      <div className="border-border/60 bg-secondary/30 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <AudioLines className="text-[var(--brass)] size-4.5" aria-hidden />
          <p className="text-[13px] font-bold">
            Dengar Arti <span className="text-amber-600 dark:text-amber-400">· Beta</span>
          </p>
        </div>
        {/* mode: narasi arti vs rekaman majelis */}
        <div className="border-border bg-background/60 inline-flex rounded-full border p-0.5" role="group" aria-label="Sumber audio">
          {(
            [
              ['arti', 'Narasi arti'],
              ['rekaman', 'Rekaman majelis'],
            ] as [AudioMode, string][]
          ).map(([m, label]) => (
            <button
              key={m}
              type="button"
              onClick={() => switchMode(m)}
              aria-pressed={mode === m}
              className={cn(
                'rounded-full px-3 py-1 text-[11.5px] font-semibold transition-all duration-200 active:scale-95',
                mode === m ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* badan pemutar */}
      <div className="space-y-3.5 px-4 py-4 sm:px-5">
        {/* kendali utama */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={bait < 0}
            aria-label="Bait sebelumnya"
            className="border-border text-muted-foreground hover:bg-secondary inline-flex size-9 items-center justify-center rounded-full border transition-all duration-200 active:scale-90 disabled:opacity-40"
          >
            <SkipBack className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? 'Jeda' : bait < 0 ? 'Putar dari awal' : 'Lanjutkan'}
            className="bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground v4-glow inline-flex size-13 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-90"
          >
            {playing ? <Pause className="size-6" aria-hidden /> : <Play className="size-6 translate-x-[1px]" aria-hidden />}
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={bait < 0}
            aria-label="Bait berikutnya"
            className="border-border text-muted-foreground hover:bg-secondary inline-flex size-9 items-center justify-center rounded-full border transition-all duration-200 active:scale-90 disabled:opacity-40"
          >
            <SkipForward className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setLoopAll((l) => !l)}
            aria-pressed={loopAll}
            aria-label="Ulangi seluruh bait"
            className={cn(
              'ml-auto inline-flex size-9 items-center justify-center rounded-full border transition-all duration-200 active:scale-90',
              loopAll
                ? 'border-primary/50 bg-primary/10 text-primary'
                : 'border-border text-muted-foreground hover:bg-secondary',
            )}
          >
            <Repeat className="size-4" aria-hidden />
          </button>
          {/* tempo */}
          <div className="border-border bg-background/60 inline-flex rounded-full border p-0.5" role="group" aria-label="Tempo narasi">
            {SPEEDS.map((s) => (
              <button
                key={s.v}
                type="button"
                onClick={() => setSpeed(s.v)}
                aria-pressed={speed === s.v}
                className={cn(
                  'rounded-full px-2 py-1 font-mono text-[10.5px] font-semibold transition-all duration-200 active:scale-95',
                  speed === s.v ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* progres + waktu */}
        {bait >= 0 && (
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground w-9 font-mono text-[10.5px] tabular-nums">{fmt(time)}</span>
            <input
              type="range"
              min={0}
              max={dur || 0}
              step={0.1}
              value={Math.min(time, dur || 0)}
              onChange={(e) => {
                const a = audioRef.current
                const v = Number(e.target.value)
                if (a && Number.isFinite(v)) a.currentTime = v
                setTime(v)
              }}
              aria-label="Geser posisi audio"
              className="accent-primary h-1.5 flex-1 cursor-pointer"
            />
            <span className="text-muted-foreground w-9 text-right font-mono text-[10.5px] tabular-nums">{fmt(dur)}</span>
          </div>
        )}

        {/* deretan bait */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Pilih bait">
          {mode === 'arti' && (
            <button
              type="button"
              onClick={() => selectBait(0)}
              aria-pressed={bait === 0}
              className={cn(
                'rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all duration-200 active:scale-95',
                bait === 0 ? 'bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:bg-secondary border bg-card',
              )}
            >
              Pengantar
            </button>
          )}
          {Array.from({ length: maxBait }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => selectBait(n)}
              aria-pressed={bait === n}
              aria-label={`Bait ${n}`}
              className={cn(
                'inline-flex size-7 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-200 active:scale-95',
                bait === n
                  ? 'bg-primary text-primary-foreground v4-glow'
                  : 'border-border text-muted-foreground hover:bg-secondary border bg-card',
              )}
            >
              {n}
            </button>
          ))}
        </div>

        {/* panel bait aktif */}
        <div aria-live="polite" className="border-border/60 bg-background/50 rounded-2xl border p-3.5">
          {bait < 0 ? (
            <p className="text-muted-foreground text-[12.5px] leading-relaxed">
              Tekan putar — narasi pembuka menjelaskan cara memakai audio ini, lalu arti berjalan bait demi bait
              sambil teks Arab &amp; artinya tampil di sini.
            </p>
          ) : bait === 0 ? (
            <p className="text-foreground/80 text-[12.5px] leading-relaxed">
              <span className="label-caps text-[var(--brass)] text-[10px]">Pengantar · </span>
              Qasidah Ibadallah Rijalallah Aghitsuna li Ajlillah — narasi arti bahasa Indonesia bait demi bait,
              untuk ikhwan &amp; akhwat yang lupa tujuan.
            </p>
          ) : verse ? (
            <div className="space-y-1.5">
              <p className="label-caps text-[var(--brass)] text-[10px]">
                Bait {bait} dari {maxBait}
              </p>
              <p dir="rtl" lang="ar" className="text-right text-[19px] leading-[2]">
                {verse.arabic}
              </p>
              {verse.meaningId && (
                <p className="text-muted-foreground text-[12.5px] leading-relaxed">{verse.meaningId}</p>
              )}
            </div>
          ) : null}
        </div>
      </div>

      {/* catatan jujur */}
      <div className="border-border/60 border-t px-4 py-3 sm:px-5">
        <HonestNote tone={rekamanMissing ? 'amber' : 'green'}>
          {rekamanMissing ? (
            <span>
              Rekaman asli majelis belum tersedia di arsip ini — menunggu unggahan (display-only). Sementara itu
              narasi arti tetap bisa dipakai untuk belajar makna.
            </span>
          ) : (
            <span>
              <span className="label-caps text-[10px]">Jujur · </span>
              Yang terdengar adalah narasi arti (terjemahan makna) dari suara sintesis — <strong>beta</strong>, bukan
              lantunan majelis. Lafaz Arab, tartil &amp; irama mengikuti majelis/ijazah murshid. Slot rekaman asli
              tersedia: unggah ke <code className="font-mono text-[10.5px]">/audio/qasidah/rekaman/bait-XX.mp3</code>{' '}
              dan tombol &quot;Rekaman majelis&quot; langsung hidup.
            </span>
          )}
        </HonestNote>
      </div>

      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration || 0)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onEnded={() => step(1)}
        onError={() => {
          if (mode === 'rekaman') {
            setRekamanMissing(true)
            setMode('arti')
          } else {
            setPlaying(false)
          }
        }}
        className="hidden"
      />
    </div>
  )
}
