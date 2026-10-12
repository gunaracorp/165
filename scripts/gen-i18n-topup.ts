// 165 — PIPELINE TOPUP terjemahan antarmuka via LLM (backend only)
// Mengisi HANYA kunci katalog yang hilang di kamus AI yang sudah ada
// (mis. kunci Manaqib & Rahasia dari Task 32–33) — tanpa menerjemahkan
// ulang kamus yang sudah lengkap. Resume-safe: bahasa tanpa kekurangan dilewati.
// Jalankan ulang: bun scripts/gen-i18n-topup.ts
import ZAI from 'z-ai-web-dev-sdk'
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { CATALOG, CATALOG_KEYS } from '../src/lib/i18n/catalog'
import { TARGETS } from './gen-i18n-targets'

const OUT_DIR = 'src/data/i18n'

function missingKeys(code: string): string[] {
  try {
    const raw = JSON.parse(readFileSync(`${OUT_DIR}/${code}.json`, 'utf8')) as { strings?: Record<string, string> }
    const have = raw.strings ?? {}
    return CATALOG_KEYS.filter((k) => !(k in have) || typeof have[k] !== 'string' || have[k].trim() === '')
  } catch {
    return []
  }
}

function extractJson(raw: string): Record<string, string> | null {
  let t = raw.trim()
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fence) t = fence[1].trim()
  const start = t.indexOf('{')
  const end = t.lastIndexOf('}')
  if (start === -1 || end === -1) return null
  try {
    const obj = JSON.parse(t.slice(start, end + 1))
    if (obj && typeof obj === 'object') return obj as Record<string, string>
    return null
  } catch {
    return null
  }
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`timeout after ${ms}ms`)), ms)),
  ])
}

const CONCURRENCY = 2

async function main() {
  const codes = readdirSync(OUT_DIR).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''))
  const targetMeta = new Map(TARGETS.map(([c, native, english]) => [c, { native, english }]))
  const queue = codes
    .map((code) => ({ code, missing: missingKeys(code) }))
    .filter((x) => x.missing.length > 0)

  console.log(`topup: ${queue.length} bahasa perlu ditambah, kunci katalog=${CATALOG_KEYS.length}`)
  if (queue.length === 0) return

  const zai = await ZAI.create()
  let idx = 0
  let done = 0
  let failed = 0

  async function worker(id: number) {
    await new Promise((r) => setTimeout(r, id * 4000))
    while (idx < queue.length) {
      const my = queue[idx++]
      const { native, english } = targetMeta.get(my.code) ?? { native: my.code, english: my.code }
      const want = my.missing.join('\n')
      let ok = false
      for (let attempt = 1; attempt <= 4 && !ok; attempt++) {
        try {
          const completion = await withTimeout(
            zai.chat.completions.create({
              messages: [
                {
                  role: 'assistant',
                  content: [
                    'You are a professional UI localizer for 165.web.id — a dignified, scholarly Islamic heritage institution (TQN Qodiriah Naqsabandiyah knowledge & preservation platform).',
                    `Translate interface strings into: ${english} (${native}). Output language: ${native === english ? english : english}.`,
                    'Rules:',
                    '- Respectful, formal, clean register suited to a scholarly Islamic institution. No slang.',
                    '- Keep placeholders EXACTLY as-is: {n} {q} {code} {title} {curated} {ai}.',
                    '- Keep brand tokens unchanged: "165", "TQN Qodiriah Naqsabandiyah", "Master Blueprint", "MATA BLOK", "Sanad".',
                    '- Islamic terms (Manaqib, Karamah, Hikam, dhikr, sharia) may stay romanized when natural.',
                    '- Return ONLY a valid JSON object mapping each requested key to its translation. No markdown fences, no commentary.',
                  ].join('\n'),
                },
                {
                  role: 'user',
                  content: `Translate ONLY these keys. Respond with JSON only, keys unchanged:\n${CATALOG ? '' : ''}${my.missing
                    .map((k) => `${k} = ${JSON.stringify(CATALOG[k as keyof typeof CATALOG][0])}`)
                    .join('\n')}\n\n(raw keys, one per line, for reference only)\n${want}`,
                },
              ],
              thinking: { type: 'disabled' },
            }),
            120_000,
          )
          const parsed = extractJson(completion.choices[0]?.message?.content ?? '')
          if (!parsed) throw new Error('unparseable response')
          const file = JSON.parse(readFileSync(`${OUT_DIR}/${my.code}.json`, 'utf8')) as { code: string; strings: Record<string, string> }
          let filled = 0
          for (const k of my.missing) {
            const v = parsed[k]
            if (typeof v === 'string' && v.trim().length > 0) {
              file.strings[k] = v.trim()
              filled++
            }
          }
          file.generatedAt = new Date().toISOString()
          writeFileSync(`${OUT_DIR}/${my.code}.json`, JSON.stringify(file, null, 1), 'utf8')
          console.log(`[topup ${my.code}] +${filled}/${my.missing.length} kunci`)
          ok = true
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err)
          console.warn(`[topup ${my.code}] percobaan ${attempt} gagal: ${msg.slice(0, 110)}`)
          if (attempt < 4) await new Promise((r) => setTimeout(r, 8000 * attempt))
        }
      }
      if (ok) done++
      else failed++
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)))
  console.log(`topup selesai: ${done} bahasa terisi, ${failed} gagal (resume-safe — jalankan ulang bila perlu).`)
}

main().catch((e) => {
  console.error('topup fatal:', e)
  process.exit(1)
})
