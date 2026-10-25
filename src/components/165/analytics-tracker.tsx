'use client'

// 165 — Analytics Tracker: privacy-first page-view beacon.
// Tracks hash-section navigations + entity opens + search terms through a
// fire-and-forget beacon. No cookies, no IPs, no personal data — aggregates only.
import { useEffect } from 'react'

function send(payload: { path: string; kind: 'pageview' | 'search' | 'entity'; term?: string; ref?: string }) {
  try {
    const body = JSON.stringify(payload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/track', new Blob([body], { type: 'application/json' }))
    } else {
      void fetch('/api/analytics/track', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } })
    }
  } catch { /* tracking must never break the page */ }
}

export function AnalyticsTracker() {
  useEffect(() => {
    let last = window.location.pathname + window.location.hash

    const onHash = () => {
      const now = window.location.pathname + window.location.hash
      if (now === last) return
      last = now
      const hash = window.location.hash.replace('#', '')
      send({ path: now.slice(0, 300), kind: hash ? 'pageview' : 'pageview' })
    }

    const onEntity = (e: Event) => {
      const slug = (e as CustomEvent<{ slug?: string }>).detail?.slug
      if (slug) send({ path: `entity:${slug}`, kind: 'entity' })
    }

    // instrument the global search: capture submitted terms via recent-write hook
    const origSet = localStorage.setItem.bind(localStorage)
    localStorage.setItem = function (k: string, v: string) {
      if (k === '165.search.recent') {
        try {
          const arr = JSON.parse(v) as string[]
          if (arr[0]) send({ path: '/', kind: 'search', term: arr[0] })
        } catch { /* noop */ }
      }
      return origSet(k, v)
    }

    send({ path: last.slice(0, 300), kind: 'pageview' })
    window.addEventListener('hashchange', onHash)
    window.addEventListener('165:open-entity', onEntity)
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('165:open-entity', onEntity)
    }
  }, [])

  return null
}
