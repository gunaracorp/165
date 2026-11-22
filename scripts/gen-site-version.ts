// ============================================================
// 165 — GENERATOR VERSI SITUS
// Menulis src/data/site-version.ts dari kondisi repo:
//   · versi  : package.json "version"
//   · diperbarui : waktu commit terakhir (git log -1)
//   · kompos : 7 karakter hash commit terakhir
// Dijalankan otomatis sebelum dev & build (lihat package.json) sehingga
// footer selalu menampilkan versi lengkap yang termutakhir.
// ============================================================
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(import.meta.dir, '..')

function git(args: string): string {
  try {
    return execSync(args, { cwd: ROOT, encoding: 'utf8' }).trim()
  } catch {
    return ''
  }
}

const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8')) as { version: string }
const version = pkg.version || '0.0.0'
const iso = git('git log -1 --format=%cI') || new Date().toISOString()
const commit = (git('git log -1 --format=%h') || 'lokal').slice(0, 7)

const updatedHuman = new Date(iso).toLocaleString('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Jakarta',
})

const out = `// AUTO-GENERATED oleh scripts/gen-site-version.ts — jangan sunting manual.
// Dihasilkan: ${new Date().toISOString()}
export const SITE_VERSION = '${version}'
export const SITE_COMMIT = '${commit}'
export const SITE_UPDATED_ISO = '${iso}'
export const SITE_UPDATED_HUMAN = '${updatedHuman} (WIB)'
export const SITE_VERSION_LABEL = \`165 v${version} · Terakhir diperbarui ${updatedHuman} (WIB) · kompos ${commit}\`
`

writeFileSync(resolve(ROOT, 'src/data/site-version.ts'), out)
console.log(`[site-version] v${version} · ${commit} · ${updatedHuman} (WIB)`)
