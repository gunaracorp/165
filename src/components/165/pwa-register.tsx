'use client'

// 165 — PWA register: installs the service worker in production & dev.
// Registered on window load so it never competes with first paint.
import { useEffect } from 'react'

export function PwaRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('serviceWorker' in navigator)) return
    let cancelled = false
    const register = async () => {
      try {
        await navigator.serviceWorker.register('/sw.js', { scope: '/' })
      } catch {
        // registration failure is non-fatal — the site remains fully usable
      }
    }
    if (document.readyState === 'complete') {
      if (!cancelled) void register()
    } else {
      window.addEventListener('load', register, { once: true })
    }
    return () => { cancelled = true }
  }, [])

  return null
}
