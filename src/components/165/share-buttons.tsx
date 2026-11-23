'use client'

// 165 — Share Buttons (Engagement Kit): Web Share API first, graceful
// social fallbacks second, copy-link always. Nothing leaves the page
// until the visitor chooses a destination.
import { useCallback, useEffect, useState } from 'react'
import { Check, Copy, Link2, Share2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export function ShareButtons({ title, text }: { title: string; text?: string }) {
  // client gate: deferred to rAF so the effect body never sets state synchronously
  const [client, setClient] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setClient(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const url = client && typeof window !== 'undefined' ? window.location.href : ''
  const native = client && typeof navigator !== 'undefined' && !!navigator.share

  const copy = useCallback(async () => {
    if (!url) return
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast.success('Tautan tersalin — terima kasih menyebarkan ilmu bersumber')
      setTimeout(() => setCopied(false), 2200)
    } catch {
      toast.error('Gagal menyalin tautan')
    }
  }, [url])

  const share = useCallback(async () => {
    try {
      await navigator.share({ title, text, url })
      return
    } catch (e) {
      if ((e as Error)?.name === 'AbortError') return
    }
    await copy()
  }, [title, text, url, copy])

  const social = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}` },
    { label: 'Telegram', href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}` },
  ]

  return (
    <div className="no-print flex flex-wrap items-center gap-2" data-print="hide">
      {native && (
        <Button size="sm" onClick={share} className="v4-glow h-8 rounded-full px-3.5 text-xs">
          <Share2 className="mr-1.5 size-3.5" aria-hidden /> Bagikan
        </Button>
      )}
      {social.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Bagikan ke ${s.label}`}
          className="border-border bg-card hover:bg-accent inline-flex h-8 items-center rounded-full border px-3 text-xs font-semibold transition-colors"
        >
          {s.label}
        </a>
      ))}
      <Button size="sm" variant="outline" onClick={copy} className="h-8 rounded-full px-3 text-xs" disabled={!client}>
        {copied ? <Check className="mr-1.5 size-3.5 text-emerald-600" aria-hidden /> : <Copy className="mr-1.5 size-3.5" aria-hidden />}
        {copied ? 'Tersalin' : 'Salin Tautan'}
      </Button>
      <span className="text-muted-foreground inline-flex items-center gap-1 text-[11px]">
        <Link2 className="size-3" aria-hidden /> sebar ilmu ber-sumber
      </span>
    </div>
  )
}
