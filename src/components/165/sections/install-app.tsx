'use client'

// 165 — PASANG APLIKASI (beta, hari ke-68 roadmap "Kemasan Toko Aplikasi")
// Kartu pemasangan PWA langsung dari situs:
//  · Chromium/Android: beforeinstallprompt → tombol "Pasang sekarang" satu ketuk
//  · iPhone/iPad: panduan Share → Add to Home Screen (Safari, batasan platform)
//  · Terpasang: deteksi display-mode standalone / navigator.standalone
// Jujur: ini pemasangan PWA dari browser — bukan paket toko aplikasi;
// bungkus PWABuilder menyusul bila keluarga besar memintanya.
import { useEffect, useState } from 'react'
import { CheckCircle2, Download, Share, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallAppCard() {
  const [promptEvt, setPromptEvt] = useState<InstallPromptEvent | null>(null)
  const [installed, setInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    const onBip = (e: Event) => {
      e.preventDefault()
      setPromptEvt(e as InstallPromptEvent)
    }
    const onInstalled = () => {
      setInstalled(true)
      setPromptEvt(null)
    }
    window.addEventListener('beforeinstallprompt', onBip)
    window.addEventListener('appinstalled', onInstalled)
    // deteksi awal via pola defer (konvensi codebase)
    const dt = window.setTimeout(() => {
      const standalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as Navigator & { standalone?: boolean }).standalone === true
      if (standalone) setInstalled(true)
      setIsIOS(/iphone|ipad|ipod/i.test(window.navigator.userAgent))
    }, 0)
    return () => {
      window.clearTimeout(dt)
      window.removeEventListener('beforeinstallprompt', onBip)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const install = async () => {
    if (!promptEvt) return
    setMsg(null)
    try {
      await promptEvt.prompt()
      const { outcome } = await promptEvt.userChoice
      if (outcome === 'accepted') setInstalled(true)
      else setMsg('Pemasangan ditunda — tombol ini tetap tersedia kapan pun siap.')
    } catch {
      setMsg('Browser menolak permintaan pasang — coba lewat ikon pasang di bilah alamat.')
    }
    setPromptEvt(null)
  }

  return (
    <div className="v4-card rounded-[1.75rem] border bg-gradient-to-r p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="v4-glow bg-gradient-to-br from-primary to-emerald-500 flex size-11 shrink-0 items-center justify-center rounded-2xl text-white">
            <Smartphone className="size-5" aria-hidden />
          </span>
          <div>
            <p className="label-caps text-[11px]">Versi aplikasi · Beta</p>
            <p className="font-display mt-1 text-[16px] leading-snug font-semibold sm:text-[17px]">
              Pasang Aplikasi 165 di layar utama
            </p>
            <p className="text-muted-foreground mt-1 text-[12.5px] leading-relaxed">
              Satu ketuk — bacaan, tasbih, wiridian &amp; roadmap 99 hari menempel di layar utama, siap tanpa
              membuka browser. Tanpa toko aplikasi, tanpa berat.
            </p>
          </div>
        </div>
        <div className="shrink-0 sm:self-center">
          {installed ? (
            <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-4.5" aria-hidden />
              Sudah terpasang di perangkat ini
            </p>
          ) : promptEvt ? (
            <Button onClick={install} className="h-10 rounded-full px-5 text-[13px] font-bold">
              <Download className="mr-2 size-4" aria-hidden />
              Pasang sekarang
            </Button>
          ) : isIOS ? (
            <ol className="text-muted-foreground space-y-1 text-[12px] leading-relaxed">
              <li>
                <strong className="text-foreground">1.</strong> Buka situs ini di Safari
              </li>
              <li>
                <strong className="text-foreground">2.</strong> Ketuk ikon Bagikan <Share className="inline size-3.5" aria-hidden />
              </li>
              <li>
                <strong className="text-foreground">3.</strong> Pilih &quot;Tambah ke Layar Utama&quot;
              </li>
            </ol>
          ) : (
            <p className="text-muted-foreground max-w-[15rem] text-[12px] leading-relaxed">
              Tombol pasang akan muncul di sini (dan di bilah alamat Chrome/Edge) setelah browser mengenali
              aplikasinya — muat ulang bila perlu.
            </p>
          )}
        </div>
      </div>
      {msg && <p className="text-muted-foreground mt-3 text-[11.5px] italic">{msg}</p>}
    </div>
  )
}
