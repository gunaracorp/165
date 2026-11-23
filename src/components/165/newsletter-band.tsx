'use client'

// 165 — Newsletter Band (Engagement Kit): subscribe to institutional
// updates. Posts to /api/subscribers; honest states, no dark patterns.
import { useState } from 'react'
import { Loader2, MailCheck, Send } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterBand() {
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const value = email.trim()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      toast.error('Mohon masukkan email yang valid')
      return
    }
    setBusy(true)
    try {
      const res = await fetch('/api/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string }
      if (!res.ok || !json.ok) throw new Error(json.message || 'failed')
      setDone(true)
      setEmail('')
      toast.success('Terdaftar — kabar pelestarian akan mengalir ke email Anda')
    } catch {
      toast.error('Pendaftaran gagal — coba lagi sebentar')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="no-print border-t border-white/10" data-print="hide">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <p className="flex items-center gap-2 text-[15px] font-bold text-white/90">
            <MailCheck className="size-4.5 text-[#e3b95c]" aria-hidden />
            Kabar Pelestarian 165
          </p>
          <p className="mt-1 text-[12.5px] leading-relaxed text-white/55">
            Kiriman berkala: entitas baru, catatan sanad, dan laporan transparansi arsip. Tanpa spam — hanya ilmu ber-sumber.
          </p>
        </div>
        {done ? (
          <p className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-[13px] font-semibold text-emerald-200">
            <MailCheck className="size-4" aria-hidden /> Email Anda tercatat — terima kasih
          </p>
        ) : (
          <form onSubmit={submit} className="flex w-full max-w-md gap-2" aria-label="Formulir langganan kabar 165">
            <label htmlFor="nl-email" className="sr-only">Alamat email</label>
            <Input
              id="nl-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="h-10 flex-1 rounded-full border-white/15 bg-white/10 text-white placeholder:text-white/35 focus-visible:ring-[#e3b95c]/50"
              autoComplete="email"
            />
            <Button type="submit" disabled={busy} className="h-10 shrink-0 rounded-full bg-[#e3b95c] px-4 text-[13px] font-bold text-emerald-950 hover:bg-[#f0cd74] disabled:opacity-60">
              {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
              <span className="ml-1">Langgan</span>
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
