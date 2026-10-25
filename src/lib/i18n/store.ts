'use client'

// 165 — language store (module-level, SSR-safe via useSyncExternalStore)
// Persists to localStorage; drives <html lang/dir> for RTL languages.
import { useSyncExternalStore } from 'react'
import { isRtl } from './languages'
import { getDict, type Dict } from './translations'

export const DEFAULT_LANG = 'en'
const STORAGE_KEY = '165.lang'

let current: string = DEFAULT_LANG
let hydrated = false
const listeners = new Set<() => void>()

function isValid(code: string): boolean {
  return code.length >= 2 && code.length <= 3
}

function subscribe(fn: () => void) {
  if (!hydrated && typeof window !== 'undefined') {
    hydrated = true
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && isValid(saved)) current = saved
  }
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

const getSnapshot = () => current
const getServerSnapshot = () => DEFAULT_LANG

/** Current language code (reactive). */
export function useLang(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

/** Merged translation dict for the current language (English fallback per key). */
export function useT(): Dict {
  return getDict(useLang())
}

export function setLang(code: string) {
  if (code === current) return
  current = code
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, code)
    } catch {
      // storage unavailable — session-only language
    }
    document.documentElement.lang = code
    document.documentElement.dir = isRtl(code) ? 'rtl' : 'ltr'
  }
  listeners.forEach((fn) => fn())
}

/** Called once from the app shell to sync <html> attributes with the restored language. */
export function syncDocumentLang(code: string) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = code
  document.documentElement.dir = isRtl(code) ? 'rtl' : 'ltr'
}
