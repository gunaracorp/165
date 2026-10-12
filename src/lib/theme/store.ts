'use client'

// 165 — theme store (module-level, SSR-safe via useSyncExternalStore)
// Persists to localStorage; toggles the `.dark` class on <html>.
// Default follows the OS (prefers-color-scheme) until the visitor chooses.
import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

export const DEFAULT_THEME: Theme = 'light'
const STORAGE_KEY = '165.theme'

let current: Theme = DEFAULT_THEME
let hydrated = false
const listeners = new Set<() => void>()

function systemTheme(): Theme {
  if (typeof window === 'undefined') return DEFAULT_THEME
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return DEFAULT_THEME
  }
}

function isValidTheme(v: string | null | undefined): v is Theme {
  return v === 'light' || v === 'dark'
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

function subscribe(fn: () => void) {
  if (!hydrated && typeof window !== 'undefined') {
    hydrated = true
    let saved: string | null = null
    try {
      saved = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // storage unavailable — follow system
    }
    current = isValidTheme(saved) ? saved : systemTheme()
    // keep visual state consistent even if the boot script did not run
    applyTheme(current)
  }
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

const getSnapshot = () => current
const getServerSnapshot = () => DEFAULT_THEME

/** Current resolved theme (reactive). */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function setTheme(theme: Theme) {
  if (theme === current) return
  current = theme
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // storage unavailable — session-only theme
    }
    applyTheme(theme)
  }
  listeners.forEach((fn) => fn())
}

export function toggleTheme() {
  setTheme(current === 'dark' ? 'light' : 'dark')
}

/**
 * Boot script injected before paint to prevent a flash of the wrong theme.
 * Runs before hydration; reads the saved choice or falls back to the OS.
 */
export const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var c=document.documentElement.classList;if(d)c.add('dark');else c.remove('dark')}catch(e){}})()`
