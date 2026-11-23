// 165 — dump sanad data ke JSON untuk poster renderer
import { SANAD_SPINE, SANAD_SEG_BANTEN, SANAD_SEG_SURYALAYA, TERMINAL_KARAWANG_NODE, TERMINAL_ALBANTANI_NODE, SANAD_TAFSIR, SANAD_ARABIC } from '../src/lib/sanad-data'
import { writeFileSync } from 'node:fs'

const flow = [...SANAD_SPINE].reverse() // arus sanad: Apex → mursyid
const payload = {
  flow,
  segBanten: SANAD_SEG_BANTEN,
  segSuryalaya: SANAD_SEG_SURYALAYA,
  terminalKarawang: TERMINAL_KARAWANG_NODE,
  terminalAlBantani: TERMINAL_ALBANTANI_NODE,
  tafsir: SANAD_TAFSIR,
  arabic: SANAD_ARABIC,
}
writeFileSync(new URL('./sanad-data.json', import.meta.url), JSON.stringify(payload, null, 2))
console.log('OK flow:', flow.length, '| banten:', SANAD_SEG_BANTEN.length, '| suryalaya:', SANAD_SEG_SURYALAYA.length)
