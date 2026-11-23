// Produksi audio qasidah Ibadallah Rijalallah — narasi ARTI bahasa Indonesia
// per bait (bukan lantunan Arab — lafaz ibadah mengikuti majelis, disiplin
// non-negotiable bacaan.ts). Voice tongtong, speed 0.85 (pelan, mudah diikuti).
// Output: public/audio/qasidah/arti/bait-00-pengantar.mp3 … bait-13.mp3
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

const OUT_DIR = '/tmp/qasidah-wav'

// meaningId 13 bait — sinkron dengan src/data/wiridian/bacaan.ts (QASIDAH_IBADALLAH)
const MEANINGS = [
  { n: 1, text: 'Wahai para hamba Allah, wahai para lelaki, wali-wali Allah.' },
  { n: 2, text: 'Wahai para hamba Allah, wahai para wali Allah. Tolonglah kami, karena Allah. Karena Allah.' },
  { n: 3, text: 'Jadilah, karena Allah, pelaku penolong bagi kami. Mudah-mudahan kami melangkah dengan karunia Allah.' },
  { n: 4, text: 'Shalawat Allah atas Nabi Yang Cukup. Salam Allah atas Nabi Yang Penyembuh.' },
  { n: 5, text: 'Dengan perantaraan Muhyiddin, penghidup agama, selamatkanlah kami dari segala bala, ya Allah.' },
  { n: 6, text: 'Wahai para kutub, poros-poros para wali. Wahai para anjab. Wahai para sayyid, pemimpin. Wahai para kekasih-Nya.' },
  { n: 7, text: 'Dan kalian, wahai para ulul albab, pemilik hati yang cerdas. Datanglah, dan tolonglah karena Allah.' },
  { n: 8, text: 'Kami meminta kepada kalian, kami meminta kepada kalian. Dan karena kedekatan kepada Allah, kami berharap kepada kalian.' },
  { n: 9, text: 'Dan dalam urusan yang menuntun kami kepada kalian, teguhkanlah tujuan, azam, kalian karena Allah.' },
  { n: 10, text: 'Maka ya Rabb-ku, dengan keberkahan para sayyid, wujudkanlah bagi aku isyarat, petunjuk-Mu.' },
  { n: 11, text: 'Mudah-mudahan ia datang membawa kebahagiaan, dan menyucikan waktu kami karena Allah.' },
  { n: 12, text: 'Dengan terbukanya tirai dari mataku, dan terangkatnya penghalang-penghalang di antara kami.' },
  { n: 13, text: 'Dan hapuskanlah keraguan tentang bagaimana dan di mana, dengan cahaya Wajah-Nya, ya Allah.' },
]

const INTRO =
  'Qasidah Ibadallah Rijalallah Aghitsuna li Ajlillah. Narasi arti bahasa Indonesia, bait demi bait — untuk ikhwan dan akhwat yang lupa tujuan. Lafaz Arab dan iramanya mengikuti majelis. Mari kita mulai.'

const ORDINALS = [
  '', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan',
  'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas',
]

function label(n) {
  if (n === 0) return INTRO
  return `Bait ${ORDINALS[n]}. ${MEANINGS.find((m) => m.n === n).text}`
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const zai = await ZAI.create()
  const only = process.argv[2] ? Number(process.argv[2]) : null
  const results = []
  for (let n = 0; n <= 13; n++) {
    if (only !== null && n !== only) continue
    const file = n === 0 ? 'bait-00-pengantar.mp3' : `bait-${String(n).padStart(2, '0')}.mp3`
    const out = path.join(OUT_DIR, file)
    if (fs.existsSync(out) && fs.statSync(out).size > 20000) {
      results.push(`SKIP ${file} (sudah ada)`)
      continue
    }
    const t0 = Date.now()
    let buffer = null
    for (let attempt = 1; attempt <= 4; attempt++) {
      try {
        const response = await zai.audio.tts.create({
          input: label(n),
          voice: 'tongtong',
          speed: 0.85,
          response_format: 'wav',
          stream: false,
        })
        buffer = Buffer.from(new Uint8Array(await response.arrayBuffer()))
        break
      } catch (e) {
        if (String(e.message).includes('429') && attempt < 4) {
          console.log(`429 bait ${n} — tunggu 20s (percobaan ${attempt})`)
          await new Promise((r) => setTimeout(r, 20000))
        } else throw e
      }
    }
    fs.writeFileSync(out, buffer)
    const kb = (buffer.length / 1024).toFixed(0)
    results.push(`OK ${file} ${kb}KB ${Date.now() - t0}ms`)
    await new Promise((r) => setTimeout(r, 3000))
  }
  console.log(results.join('\n'))
}

main().catch((e) => { console.error('FATAL', e.message); process.exit(1) })
