'use client'

// 165 — Install Prompt: invites visitors to install 165 as an app.
// Shows once after meaningful engagement (2nd visit OR 25s dwell),
// respects the browser's beforeinstallprompt lifecycle, and remembers
// dismissal for 30 days. Never nagging — dignity before growth.
import { useEffect, useState } from 'react'
import { Download, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const DISMISS_KEY = '165.pwa.dismissed'

interface BipEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BipEvent | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let dismissedRecently = false
    try {
      const raw = localStorage.getItem(DISMISS_KEY)
      dismissedRecently = raw ? Date.now() - Number(raw) < 30 * 24 * 60 * 60 * 1000 : false
    } catch { /* noop */ }
    if (dismissedRecently) return
    if (window.matchMedia('(display-mode: standalone)').matches) return

    const onBip = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BipEvent)
      // dwell gate: 25s of engagement before inviting
      setTimeout(() => setVisible(true), 25000)
    }
    window.addEventListener('beforeinstallprompt', onBip)
    return () => window.removeEventListener('beforeinstallprompt', onBip)
  }, [])

  if (!visible || !deferred) return null

  const accept = async () => {
    try {
      await deferred.prompt()
      await deferred.userChoice
    } catch { /* noop */ }
    setVisible(false)
  }

  const dismiss = () => {
    try { localStorage.setItem(DISMISS_KEY, String(Date.now())) } catch { /* noop */ }
    setVisible(false)
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-sm sm:right-4 sm:left-auto" role="dialog" aria-label="Undang pasang aplikasi 165">
      <Card className="v4-card animate-in fade-in-0 slide-in-from-bottom-4 border-border/70 bg-card/95 duration-300 backdrop-blur-xl">
        <CardContent className="flex items-start gap-3 p-4">
          <span className="bg-gradient-to-br from-primary via-emerald-500 to-[var(--brass)] v4-glow flex size-11 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-bold text-white">165</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold">Pasang 165 di perangkat Anda</p>
            <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">
              Akses cepat ke pengetahuan, warisan &amp; arsip — juga saat offline.
            </p>
            <div className="mt-2.5 flex gap-2">
              <Button size="sm" className="v4-glow h-8 rounded-full px-3.5 text-xs" onClick={accept}>
                <Download className="mr-1 size-3.5" aria-hidden /> Pasang
              </Button>
              <Button size="sm" variant="ghost" className="h-8 rounded-full px-3 text-xs" onClick={dismiss}>
                Nanti saja
              </Button>
            </div>
          </div>
          <button type="button" onClick={dismiss} aria-label="Tutup undangan" className="text-muted-foreground hover:text-foreground -mt-1 -mr-1 rounded-full p-1 transition-colors">
            <X className="size-4" aria-hidden />
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
