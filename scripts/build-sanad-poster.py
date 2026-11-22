#!/usr/bin/env python3
# 165 — Peta Sanad TQN: HTML (Layout C phased vertical) -> PNG via Playwright
# Data: scripts/sanad-data.json (dump dari src/lib/sanad-data.ts — satu sumber kebenaran)
import json, html, os
from pathlib import Path

ROOT = Path('/home/z/my-project')
DATA = json.loads((ROOT / 'scripts' / 'sanad-data.json').read_text())

FONT_DIR = ROOT / 'scripts' / 'fonts'
FONT_FACE = ''
if (FONT_DIR / 'Amiri-Regular.ttf').exists():
    FONT_FACE = (f"\n  @font-face {{ font-family:'Amiri'; src:url('file://{FONT_DIR}/Amiri-Regular.ttf') format('truetype'); font-weight:400; }}"
                 f"\n  @font-face {{ font-family:'Amiri'; src:url('file://{FONT_DIR}/Amiri-Bold.ttf') format('truetype'); font-weight:700; }}")

FOUNDER_LABEL = {'QODIRIYAH': 'Pendiri Qodiriah', 'NAQSABANDIYAH': 'Pendiri Naqsabandiyah', 'TQN': 'Pendiri TQN'}

def clean(s):
    # font-safety untuk renderer headless (hindari glyph tanpa font fallback)
    if not s:
        return s
    return (s.replace('\uFDFA', 'SAW').replace('\u02BF', "'").replace('\u02BE', "'"))

def esc(s):
    return html.escape(clean(s or ''))

def esc_ar(s):
    # teks Arab: JANGAN ganti \uFDFA (Amiri punya ligaturnya) — hanya escape HTML
    return html.escape(s or '')

def chip(node, tone='normal'):
    n = node
    name = esc(n['name'])
    name_ar = n.get('nameAr')
    role = n.get('role') or FOUNDER_LABEL.get(n.get('founderOf') or '', '')
    place = n.get('place')
    dates = n.get('dates')
    rank = n['rank']
    cls = 'chip'
    if tone == 'pivot':
        cls += ' pivot'
    elif tone == 'founder':
        cls += ' founder'
    elif tone == 'apex':
        cls += ' apex'
    parts = [f'<div class="chip-head"><span class="rank">{rank}</span><span class="name">{name}</span></div>']
    if name_ar:
        parts.append(f'<div class="name-ar" dir="rtl">{esc_ar(name_ar)}</div>')
    if role:
        parts.append(f'<div class="role">{esc(role)}</div>')
    if place:
        parts.append(f'<div class="place">{esc(place)}</div>')
    if dates:
        parts.append(f'<div class="dates">{esc(dates)}</div>')
    elif tone != 'apex':
        parts.append('<div class="dates nodate">tahun belum terdokumentasi — terbuka untuk deposit (kolasi Level A)</div>')
    return f'<div class="{cls}">' + ''.join(parts) + '</div>'

def arrow(label='', ar=''):
    lab = f'<span class="a-label">{esc(label)}</span>' if label else ''
    a = f'<span class="a-ar" dir="rtl">{esc_ar(ar)}</span>' if ar else ''
    return f'<div class="flow-arrow"><span class="a-glyph">&#8595;</span>{lab}{a}</div>'

def phase(no, title, subtitle, body, color):
    return (f'<div class="phase" style="--pc:{color}">'
            f'<div class="phase-title"><span class="phase-no">Fase {no}</span>{esc(title)}'
            f'<div class="phase-sub">{esc(subtitle)}</div></div>'
            f'{body}</div>')

flow = DATA['flow']
segB = DATA['segBanten']
segS = DATA['segSuryalaya']
arabic = DATA.get('arabic', {})
tafsir_items = DATA.get('tafsir', [])
termK = DATA['terminalKarawang']
termA = DATA['terminalAlBantani']

apex = [n for n in flow if n.get('kind') == 'APEX']
rasul = [n for n in flow if n.get('kind') == 'RASUL']
q_early = [n for n in flow if not n.get('kind') and not n.get('founderOf') and 4 <= n['rank'] <= 17]
q_late = [n for n in flow if n['rank'] in (18, 19)]
naqsh = [n for n in flow if n['rank'] == 22 and n.get('founderOf') == 'NAQSABANDIYAH']
tail = [n for n in flow if 21 <= n['rank'] <= 33 and not n.get('kind') and not n.get('founderOf')]
sambas = [n for n in flow if n['rank'] == 34]

grid = lambda nodes: '<div class="grid4">' + ''.join(chip(n) for n in nodes) + '</div>'

# fase 1 — apex
p1_body = '<div class="row2">' + ''.join(chip(n, 'apex') for n in apex) + '</div>' + arrow() + ''.join(chip(n, 'pivot') for n in rasul)
p1 = phase(1, 'Sumber segala sumber — Apex sanad', 'Peringkat S1 #1–#2 direkam apa adanya · Rasulullah ﷺ puncak sanad manusiawi'.replace('\uFDFA','SAW'), p1_body, '#A8C3B6')

# fase 2 — qodiriah
p2_body = grid(q_early) + arrow('melalui ribat Baghdad') + '<div class="row2">' + ''.join(chip(n, 'founder' if n.get('founderOf') else 'normal') for n in q_late) + '</div>'
p2 = phase(2, 'Punggung Qodiriah — Sayyidina Ali → Ahlul Bait → para syekh Baghdad', 'S1 #4 → #19 · tahun klasik dari riwayat biografi standar (S9)', p2_body, '#8FB39F')

# fase 3 — naqsyabandi
p3_body = ''.join(chip(n, 'founder') for n in naqsh)
p3 = phase(3, 'Penyisipan Naqsabandiah — Syekh Bahauddin an-Naqsyabandiyah', 'S1 memakai ulang angka 22 untuk pendiri Naqsabandiyah — direkam apa adanya, tidak dinomori ulang', p3_body, '#76A28B')

# fase 4 — tail + sambas
p4_body = grid(tail) + arrow('titik temu ketiga jalur') + ''.join(chip(n, 'pivot') for n in sambas)
p4 = phase(4, 'Punggung bersama — para syekh Baghdad & Makkah (#21 → #34)', 'Tahun wafat #31 (1266 H / 1850 M) dan #32 (1277 H / 1860 M) terekam pada daftar S1 sendiri', p4_body, '#5E9177')

# fase 5 — tiga jalur
def jalur_col(title, title_ar, badge, region, nodes):
    inner = []
    for i, n in enumerate(nodes):
        if i > 0:
            inner.append('<div class="col-arrow">&#8595;</div>')
        inner.append(chip(n, 'pivot' if i == 0 else 'normal'))
    return (f'<div class="jalur"><div class="j-badge">{esc(badge)}</div>'
            f'<div class="j-title">{esc(title)}</div>'
            f'<div class="j-title-ar" dir="rtl">{esc_ar(title_ar)}</div>'
            f'<div class="j-region">{esc(region)}</div>'
            '<div class="j-chain">' + ''.join(inner) + '</div></div>')

karawang_nodes = [termK, segB[0]]
albantani_nodes = [termA, segB[0]]
suryalaya_nodes = list(segS)

p5_body = ('<div class="jalur3">'
           + jalur_col('Jalur Karawang', 'مَسْلَكُ كَارَاوَانْغ', 'S1 #39a · 165-SANAD-000001', 'Cikangkung, Rengasdengklok, Karawang, Jawa Barat', karawang_nodes)
           + jalur_col('Jalur Al-Bantani (Kaduparasi)', 'مَسْلَكُ البَنْتَانِيِّ الكَادُوبَرَاسِيِّ', 'S1 #39b · 165-SANAD-000002', 'Kaduparasi, Labuan, Pandeglang, Banten', albantani_nodes)
           + jalur_col('Jalur TQN Suryalaya', 'مَسْلَكُ سُورِيَلَايَا', 'S2 ke-37 · 165-SANAD-000003', 'Suryalaya, Pagerageung, Tasikmalaya, Jawa Barat', suryalaya_nodes)
           + '</div>'
           + '<div class="p5-note">Karawang &amp; Al-Bantani turun dari jalur Banten/Asnawi S1 (#38 &#8594; #35). Suryalaya turun dari penomoran resmi Suryalaya S2 (ke-35 Tholhah &#8594; ke-36 Abah Sepuh &#8594; ke-37 Abah Anom). Suksesi setelah Abah Anom dipersoalkan publik oleh pihak berbeda — 165 mencatat perbedaan itu tanpa memihak.</div>')
p5 = phase(5, 'Tiga jalur terminal — murid-penerus tercatat', 'Direkam dari sumber berbeda (S1 & S2), dipertemukan pada #34 Syekh Khatib Sambas', p5_body, '#4A8065')

# fase 6 — tafsir indah (Arab + Indonesia)
TKIND_META = {
    'AYAT': ('AYAT AL-QUR\u2019AN', 'k-ayat'),
    'HADIS': ('HADIS NABI ﷺ', 'k-hadis'),
    'PERINGATAN AHLUL ILM': ('PERINGATAN AHLUL ILM', 'k-ilm'),
}

def tafsir_card(t):
    klabel, kcls = TKIND_META.get(t['kind'], (t['kind'], 'k-ilm'))
    return (f'<div class="tcard"><div class="tcard-head"><span class="tkind {kcls}">{esc_ar(klabel)}</span>'
            f'<span class="tsrc">{esc(t["source"])}</span></div>'
            f'<div class="t-ar" dir="rtl">{esc_ar(t["ar"])}</div>'
            f'<div class="t-idn">{esc(t["idn"])}</div>'
            f'<div class="t-note">{esc(t["note"])}</div></div>')

p6 = (f'<div class="tafsir-band"><div class="t-head"><div class="t-title">Tafsir indah yang menjelaskan jiwa sanad</div>'
      f'<div class="t-title-ar" dir="rtl">{esc_ar(arabic.get("rijalTitleAr", ""))}</div></div>'
      '<div class="t-sub">Ayat, hadis, dan peringatan ahlul ilm tentang makna sanad dan Rijalullah — direkam bilingual: huruf Arab seperti mushaf + terjemah Indonesia. Catatan tafsir menjelaskan kaitannya dengan peta; ia bukan fatwa dan bukan keputusan.</div>'
      '<div class="tgrid">' + ''.join(tafsir_card(t) for t in tafsir_items) + '</div>'
      '<div class="t-foot">Teks Arab direkam dari mushaf &amp; kumpulan hadis standar; terjemah Indonesia mengikuti gaya terjemah resmi. Nama Arab pada setiap simpul adalah penulisan standar/transliterasi dari nama Latin tercatat — bukan sumber baru dan bukan koreksi fakta.</div>'
      '</div>')

legend = ('<div class="legend">'
          '<div class="li"><span class="dot dot-normal"></span>Simpul rantai</div>'
          '<div class="li"><span class="dot dot-founder"></span>Pendiri tarekat</div>'
          '<div class="li"><span class="dot dot-pivot"></span>Titik temu / mursyid pivot</div>'
          '<div class="li"><span class="dot dot-apex"></span>Apex sanad</div>'
          '<div class="li"><span class="mono-chip">monospace</span>Tahun terdokumentasi (S9)</div>'
          '<div class="li"><span class="dot nodate-dot"></span><em>tanpa tanggal = belum terdokumentasi — tidak dikarang</em></div>'
          '</div>')

footer = ('<div class="footer">'
          '<div class="f-row"><strong>Catatan reproduksi setia.</strong> Daftar sumber S1 ("Silsilah TQN di Indonesia Yang Diakui Dunia (Mu\'tabaroh)", 13-12-2023) melewati angka 20 dan memakai angka 22 dua kali — sekali di tulang punggung Qodiriah (#22a Syamsuddin), sekali untuk pendiri Naqsabandiyah (#22b Bahauddin). 165 mereproduksi daftar apa adanya dan tidak diam-diam menomorinya ulang.</div>'
          '<div class="f-row"><strong>Disiplin tanggal (S9).</strong> Tahun hanya dari referensi biografi publik terdokumentasi: suryalaya.org (riwayat1, riwayat2), Wikipedia (id), NU Online Jabar, biografi komunitas tersilang. Perbedaan catatan wafat Khatib Sambas (1875 Wikipedia/akademik vs 1878 suryalaya.org) direkam keduanya tanpa memutus. Simpul tanpa tanggal = belum terdokumentasi publik — terbuka untuk deposit ijazah/manuskrip/katatan talqin lewat alur contribute, tanpa biaya (never pay-to-verify).</div>'
          '<div class="f-row"><strong>Sumber rantai.</strong> S1 — daftar silsilah bernomor 39&#8594;1 dari Founder (165-SRC-000003, level B). S2 — sejarah resmi TQN suryalaya.org (level C). S4 — excerpt akademik (Sukanta 1935/1356 H &#8211; 2015/1436 H). S9 — referensi tanggal (level C, dates-only).</div>'
          '<div class="f-row f-brand">165 &#8211; PLATFORM PENGETAHUAN SANAD · sanad terekam ditampilkan APA ADANYA &#8212; catatan tradisi, bukan fakta sejarah terverifikasi, bukan sertifikat legitimasi ruhani &#8212; dirender dari src/lib/sanad-data.ts (satu sumber kebenaran situs)</div>'
          '</div>')

page = f'''<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8">
<style>{FONT_FACE}
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',sans-serif; background:#FFFFFF; color:#101828; -webkit-font-smoothing:antialiased; }}
  #root {{ width:2060px; margin:0 auto; padding:0; background:#fff; }}

  .hero {{ background:linear-gradient(135deg,#0B2E24 0%,#0F172A 100%); padding:52px 64px; color:#fff; }}
  .hero-badge {{ display:inline-block; background:rgba(231,201,143,0.14); color:#E7C98F; font-size:13px; font-weight:700; letter-spacing:1.5px; padding:6px 16px; border-radius:999px; margin-bottom:18px; }}
  .hero h1 {{ font-size:40px; font-weight:800; letter-spacing:-0.5px; }}
  .hero .lede {{ font-size:16px; color:#B9CFC5; max-width:1400px; line-height:1.65; margin-top:12px; }}
  .hero .meta {{ display:flex; flex-wrap:wrap; gap:10px; margin-top:22px; }}
  .m-chip {{ background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.16); color:#DCE9E3; font-size:13px; font-weight:600; padding:6px 14px; border-radius:999px; font-variant-numeric:tabular-nums; }}

  .legend {{ display:flex; flex-wrap:wrap; gap:20px; align-items:center; margin:26px 64px 8px; padding:14px 22px; background:#F7FAF8; border:1px solid #E3EBE7; border-radius:14px; }}
  .li {{ display:flex; align-items:center; gap:8px; font-size:13.5px; color:#344054; }}
  .dot {{ width:14px; height:14px; border-radius:4px; border:2px solid; display:inline-block; }}
  .dot-normal {{ background:#FFFFFF; border-color:#C7D3CD; }}
  .dot-founder {{ background:#FFF7ED; border-color:#D97706; }}
  .dot-pivot {{ background:linear-gradient(135deg,#14532D,#0B2E24); border-color:#14532D; }}
  .dot-apex {{ background:#FFFBEB; border-color:#B45309; }}
  .dot-nodate-dot {{ background:#FFFFFF; border-color:#E3E8E4; border-style:dashed; }}
  .mono-chip {{ font-family:'SFMono-Regular',Menlo,Consolas,monospace; font-size:12px; background:#E7F0EC; color:#1F5E4C; padding:2px 8px; border-radius:6px; }}

  .wrap {{ padding:18px 64px 8px; }}

  .phase {{ background:#F6F9F7; border-radius:18px; padding:24px 28px; border-left:6px solid var(--pc); margin-bottom:0; }}
  .phase-title {{ font-size:20px; font-weight:800; color:#132E24; letter-spacing:-0.2px; }}
  .phase-no {{ display:inline-block; background:var(--pc); color:#FFFFFF; font-size:12.5px; font-weight:800; letter-spacing:1px; padding:4px 12px; border-radius:999px; margin-right:12px; vertical-align:middle; }}
  .phase-sub {{ font-size:14px; color:#5D6F67; font-weight:500; margin-top:8px; }}

  .grid4 {{ display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:18px; }}
  .row2 {{ display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin-top:18px; }}

  .chip {{ background:#FFFFFF; border:1.5px solid #DCE5E0; border-radius:14px; padding:16px 18px; }}
  .chip-head {{ display:flex; align-items:flex-start; gap:10px; }}
  .rank {{ flex:0 0 auto; background:#E7F0EC; color:#1F5E4C; font-family:Menlo,Consolas,monospace; font-size:12.5px; font-weight:700; padding:3px 9px; border-radius:999px; margin-top:1px; }}
  .name {{ font-size:15.5px; font-weight:700; line-height:1.35; color:#101828; }}
  .role {{ font-size:12.5px; font-weight:700; color:#B45309; margin-top:5px; }}
  .place {{ font-size:12.5px; color:#5D6F67; margin-top:5px; line-height:1.4; }}
  .place::before {{ content:"\\25B8  "; color:#94A3B8; }}
  .dates {{ font-family:Menlo,Consolas,monospace; font-size:12.5px; color:#334155; margin-top:6px; }}
  .dates.nodate {{ font-family:inherit; font-style:italic; color:#9AA6A0; font-size:12px; }}

  .chip.founder {{ background:#FFF7ED; border:2px solid #D97706; }}
  .chip.founder .name {{ color:#7C2D12; }}
  .chip.apex {{ background:#FFFBEB; border:2px solid #B45309; }}
  .chip.apex .name {{ color:#713F12; }}
  .chip.pivot {{ background:linear-gradient(135deg,#14532D 0%,#0B2E24 100%); border:none; }}
  .chip.pivot .name {{ color:#FFFFFF; font-size:17px; }}
  .chip.pivot .rank {{ background:rgba(255,255,255,0.16); color:#FFF; }}
  .chip.pivot .role {{ color:#E7C98F; }}
  .chip.pivot .place {{ color:#C7D9D0; }}
  .chip.pivot .place::before {{ content:"\\25B8  "; color:#6E9385; }}
  .chip.pivot .dates {{ color:#E2EEE8; }}
  .chip.pivot .dates.nodate {{ color:#9DB8AD; }}

  .name-ar {{ font-family:'Amiri',serif; font-size:16px; line-height:1.9; text-align:right; color:#5D6F67; margin-top:3px; }}
  .chip.founder .name-ar {{ color:#B45309; }}
  .chip.apex .name-ar {{ color:#92660A; }}
  .chip.pivot .name-ar {{ color:#DCE9E3; }}
  .a-ar {{ font-family:'Amiri',serif; font-size:16px; color:#5D6F67; }}
  .j-title-ar {{ font-family:'Amiri',serif; font-size:17px; color:#B45309; text-align:right; direction:rtl; margin-top:4px; line-height:1.8; }}
  .hero-ar {{ font-family:'Amiri',serif; font-size:28px; color:#E7C98F; margin-top:14px; line-height:2; }}
  .hero-ar-sep {{ color:#6E9385; padding:0 14px; }}

  .tafsir-band {{ background:#FFFDF4; border:2px solid #E2C48A; border-radius:18px; padding:26px 30px; margin-top:18px; }}
  .t-head {{ display:flex; align-items:baseline; justify-content:space-between; gap:20px; flex-wrap:wrap; }}
  .t-title {{ font-size:21px; font-weight:800; color:#132E24; letter-spacing:-0.2px; }}
  .t-title-ar {{ font-family:'Amiri',serif; font-size:32px; color:#B45309; line-height:1.8; }}
  .t-sub {{ font-size:14px; color:#5D6F67; margin-top:8px; line-height:1.65; }}
  .tgrid {{ display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:18px; }}
  .tcard {{ background:#FFFFFF; border:1.5px solid #E3DED0; border-radius:14px; padding:18px 20px; }}
  .tcard-head {{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; }}
  .tkind {{ font-size:11px; font-weight:800; letter-spacing:0.8px; padding:4px 10px; border-radius:999px; }}
  .k-ayat {{ background:#E7F0EC; color:#1F5E4C; }}
  .k-hadis {{ background:#FFF7ED; color:#B45309; }}
  .k-ilm {{ background:#F1F5F4; color:#5D6F67; }}
  .tsrc {{ font-family:Menlo,Consolas,monospace; font-size:11.5px; color:#64748B; }}
  .t-ar {{ font-family:'Amiri',serif; font-size:19px; line-height:2.15; text-align:right; color:#101828; margin-top:14px; }}
  .t-idn {{ font-size:13.5px; color:#4B5563; line-height:1.7; margin-top:10px; }}
  .t-note {{ font-size:12.5px; color:#5D6F67; line-height:1.65; margin-top:10px; padding-top:10px; border-top:1px dashed #D9DDD9; }}
  .t-foot {{ font-size:12.5px; color:#5D6F67; margin-top:16px; }}

  .flow-arrow {{ display:flex; align-items:center; justify-content:center; gap:10px; padding:16px 0; }}
  .a-glyph {{ font-size:26px; color:#7C988C; line-height:1; }}
  .a-label {{ font-size:13.5px; font-weight:700; color:#5D6F67; letter-spacing:0.4px; }}

  .jalur3 {{ display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:18px; }}
  .jalur {{ background:#FFFFFF; border:1.5px solid #DCE5E0; border-radius:16px; padding:18px 20px; }}
  .j-badge {{ font-family:Menlo,Consolas,monospace; font-size:11.5px; color:#B45309; font-weight:700; }}
  .j-title {{ font-size:16.5px; font-weight:800; color:#132E24; margin-top:6px; }}
  .j-region {{ font-size:12.5px; color:#5D6F67; margin-top:4px; }}
  .j-chain {{ margin-top:14px; }}
  .col-arrow {{ text-align:center; color:#7C988C; font-size:18px; padding:4px 0; }}
  .p5-note {{ font-size:13px; color:#4B5563; line-height:1.6; margin-top:16px; padding:12px 16px; background:#FFF; border:1px dashed #C7D3CD; border-radius:12px; }}

  .footer {{ margin:26px 64px 40px; padding:22px 26px; background:#F7FAF8; border:1px solid #E3EBE7; border-radius:14px; }}
  .f-row {{ font-size:13px; color:#344054; line-height:1.65; margin-bottom:10px; }}
  .f-row strong {{ color:#132E24; }}
  .f-brand {{ margin-bottom:0; padding-top:12px; border-top:1px solid #E3EBE7; font-size:12.5px; font-weight:700; color:#1F5E4C; letter-spacing:0.3px; }}
</style>
</head>
<body>
<div id="root">
  <div class="hero">
    <div class="hero-badge">PLATFORM PENGETAHUAN 165 &#183; REKAM APA ADANYA</div>
    <h1>Satu Sanad, Tiga Jalur &#8212; Peta Silsilah Lengkap TQN</h1>
    <div class="hero-ar" dir="rtl">{esc_ar(arabic.get('orderNameAr', ''))}<span class="hero-ar-sep">&#183;</span>{esc_ar(arabic.get('sanadMuttashilAr', ''))}</div>
    <div class="lede">Thariqah Qodiriah wa Naqsyabandiyah &#8212; dari Apex (Allah SWT &#8594; Jibril AS &#8594; Rasulullah SAW)
      melalui punggung Qodiriah, penyisipan Naqsabandiah, dan titik konvergensi #34 Syekh Khatib Sambas (pendiri TQN),
      turun ke tiga jalur terminal tercatat: <strong style="color:#E7C98F">Karawang</strong> &#183;
      <strong style="color:#E7C98F">Al-Bantani (Kaduparasi, Labuan)</strong> &#183;
      <strong style="color:#E7C98F">TQN Suryalaya</strong>. Nama lengkap + tahun terdokumentasi.</div>
    <div class="meta">
      <span class="m-chip">34 simpul punggung (S1 #1&#8211;#34)</span>
      <span class="m-chip">Penyisipan Naqsabandiah (#22b)</span>
      <span class="m-chip">3 jalur terminal (#39a &#183; #39b &#183; ke-37)</span>
      <span class="m-chip">Tahun dari referensi publik terdokumentasi (S9)</span>
      <span class="m-chip">Nama Arab di setiap simpul &#183; tafsir Arab&#8211;Indonesia</span>
      <span class="m-chip">Angka 20 dilewati &#183; 22 dipakai 2&#215; &#8212; apa adanya</span>
    </div>
  </div>

  {legend}

  <div class="wrap">
    {p1}
    {arrow('sanad Qodiriah — via Sayyidina Ali', 'سَنَدُ القَادِرِيَّةِ')}
    {p2}
    {arrow('penyisipan Naqsabandiah', 'إِدْرَاجُ النَّقْشَبَنْدِيَّةِ')}
    {p3}
    {arrow('punggung bersama menuju konvergensi', 'إِلَى مِلْتَقَى المَسَارِكَ')}
    {p4}
    {arrow('tiga jalur terminal — murid-penerus tercatat', 'ثَلَاثَةُ مَسَارِكَ')}
    {p5}
    {p6}
  </div>

  {footer}
</div>
</body>
</html>'''

out_html = ROOT / 'scripts' / 'sanad-poster.html'
out_html.write_text(page, encoding='utf-8')
print('HTML:', out_html, f'({out_html.stat().st_size//1024}KB)')

# ---- render ----
import asyncio
from playwright.async_api import async_playwright

async def render():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 2120, 'height': 1200}, device_scale_factor=1.5)
        await page.goto(f'file://{out_html}', wait_until='networkidle')
        await page.wait_for_timeout(400)
        el = page.locator('#root')
        bbox = await el.bounding_box()
        print('bbox:', bbox)
        if bbox:
            await page.set_viewport_size({'width': max(2120, int(bbox['width']) + 60), 'height': int(bbox['height']) + 60})
            await page.wait_for_timeout(200)
        out = ROOT / 'download' / 'peta-sanad-tqn-165.png'
        await el.screenshot(path=str(out))
        await browser.close()
        print('PNG:', out, f'({out.stat().st_size//1024}KB)')

asyncio.run(render())
