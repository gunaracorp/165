/**
 * 165 — RESTORE SNAPSHOT → DB (additive, idempoten)
 *
 * Latar (sesi koreksi Founder): DB lokal hilang sebagian entitas inti
 * (mis. 165-PERSON-000001 pendiri & 165-CLM-000002) yang masih hidup di
 * snapshot arsip heritage-snapshot.json (fallback live). Agar export
 * snapshot berikutnya TIDAK menghilangkan apa pun dari live, skrip ini
 * memulihkan semua baris snapshot yang belum ada di DB — dengan pemetaan
 * id (cuid lama → globalId → id lokal).
 *
 * DISIPLIN: PURE APPEND — tidak ada baris DB yang diubah/dihapus.
 * Baris yang sudah ada (globalId/kunci duplikat) dilewati.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { PrismaClient } from '@prisma/client'

type SnapEntity = {
  id: string; globalId: string; slug: string; type: string; primaryName: string
  subtitle?: string | null; summary?: string | null; summaryId?: string | null; summaryAr?: string | null
  evidenceLevel?: string; verificationStatus?: string; isExampleRecord?: boolean
  startDate?: string | null; startDatePrecision?: string | null
  endDate?: string | null; endDatePrecision?: string | null
  latitude?: number | null; longitude?: number | null; region?: string | null
  details?: string | null; visibility?: string
}

const db = new PrismaClient()

async function main() {
  const snap = JSON.parse(readFileSync(join(process.cwd(), 'src/data/heritage-snapshot.json'), 'utf-8'))
  const cuidToGlobal = new Map<string, string>()
  for (const e of snap.entities as SnapEntity[]) cuidToGlobal.set(e.id, e.globalId)

  // globalId → id lokal (baru/lama)
  const idByGlobal = new Map<string, string>()
  const all = await db.entity.findMany({ select: { id: true, globalId: true } })
  for (const r of all) idByGlobal.set(r.globalId, r.id)

  // slug terpakai (hindari konflik unique)
  const usedSlugs = new Set((await db.entity.findMany({ select: { slug: true } })).map((r) => r.slug))

  let restored = { entities: 0, variants: 0, relations: 0, claims: 0, items: 0, sanad: 0, versions: 0, contributions: 0 }

  // 1) entitas (+ nameVariants bawaan array terpisah, jadi di sini tanpa variant)
  for (const e of snap.entities as SnapEntity[]) {
    if (idByGlobal.has(e.globalId)) continue
    let slug = e.slug
    if (usedSlugs.has(slug)) slug = `${slug}-restored`.slice(0, 80)
    usedSlugs.add(slug)
    const row = await db.entity.create({
      data: {
        globalId: e.globalId, slug, type: e.type, primaryName: e.primaryName,
        subtitle: e.subtitle ?? null, summary: e.summary ?? null,
        summaryId: e.summaryId ?? null, summaryAr: e.summaryAr ?? null,
        evidenceLevel: e.evidenceLevel ?? 'F', verificationStatus: e.verificationStatus ?? 'UNVERIFIED',
        isExampleRecord: e.isExampleRecord ?? false,
        startDate: e.startDate ?? null, startDatePrecision: e.startDatePrecision ?? null,
        endDate: e.endDate ?? null, endDatePrecision: e.endDatePrecision ?? null,
        latitude: e.latitude ?? null, longitude: e.longitude ?? null, region: e.region ?? null,
        details: e.details ?? null, visibility: e.visibility ?? 'PUBLIC',
      },
    })
    idByGlobal.set(e.globalId, row.id)
    await db.versionSnapshot.create({
      data: {
        entityId: row.id, version: 1,
        snapshot: JSON.stringify({ globalId: e.globalId, primaryName: e.primaryName, verificationStatus: e.verificationStatus, evidenceLevel: e.evidenceLevel }),
        changedBy: 'restore-snapshot',
        reason: 'Restorasi dari heritage-snapshot.json — entitas inti hilang dari DB lokal; agar export berikutnya tidak menghapus apa pun dari fallback live.',
      },
    })
    await db.auditLog.create({
      data: { actor: 'restore-snapshot', action: 'CREATE', target: e.globalId, detail: `Entity ${e.type} dipulihkan dari snapshot arsip (additive).` },
    })
    restored.entities++
  }

  const localId = (cuid: string): string | null => {
    const g = cuidToGlobal.get(cuid)
    return g ? idByGlobal.get(g) ?? null : null
  }

  // 2) nameVariants
  for (const nv of snap.nameVariants as { entityId: string; name: string; language?: string; kind?: string; note?: string | null }[]) {
    const eid = localId(nv.entityId)
    if (!eid) continue
    const ent = await db.entity.findUnique({ where: { id: eid }, include: { nameVariants: true } })
    if (!ent || ent.nameVariants.some((v) => v.name === nv.name)) continue
    await db.nameVariant.create({
      data: { entityId: eid, name: nv.name, language: nv.language ?? 'en', kind: nv.kind ?? 'VARIANT', note: nv.note ?? null },
    })
    restored.variants++
  }

  // 3) relationships
  for (const r of snap.relationships as { fromEntityId: string; toEntityId: string; predicate: string; evidenceLevel?: string; verificationStatus?: string; context?: string | null; sourceRef?: string | null }[]) {
    const from = localId(r.fromEntityId), to = localId(r.toEntityId)
    if (!from || !to) continue
    const dup = await db.relationship.findFirst({ where: { fromEntityId: from, toEntityId: to, predicate: r.predicate } })
    if (dup) continue
    await db.relationship.create({
      data: {
        fromEntityId: from, toEntityId: to, predicate: r.predicate,
        evidenceLevel: r.evidenceLevel ?? 'F', verificationStatus: r.verificationStatus ?? 'UNVERIFIED',
        context: r.context ?? null, sourceRef: r.sourceRef ?? null,
      },
    })
    restored.relations++
  }

  // 4) claimSources
  for (const c of snap.claimSources as { claimEntityId: string; sourceEntityId: string; stance: string; note?: string | null }[]) {
    const claim = localId(c.claimEntityId), source = localId(c.sourceEntityId)
    if (!claim || !source) continue
    const dup = await db.claimSource.findFirst({ where: { claimEntityId: claim, sourceEntityId: source } })
    if (dup) continue
    await db.claimSource.create({ data: { claimEntityId: claim, sourceEntityId: source, stance: c.stance, note: c.note ?? null } })
    restored.claims++
  }

  // 5) collectionItems
  for (const ci of snap.collectionItems as { collectionId: string; itemEntityId: string; order?: number; note?: string | null }[]) {
    const col = localId(ci.collectionId), item = localId(ci.itemEntityId)
    if (!col || !item) continue
    const dup = await db.collectionItem.findFirst({ where: { collectionId: col, itemEntityId: item } })
    if (dup) continue
    await db.collectionItem.create({ data: { collectionId: col, itemEntityId: item, order: ci.order ?? 0, note: ci.note ?? null } })
    restored.items++
  }

  // 6) sanadLinks
  for (const l of snap.sanadLinks as { sanadEntityId: string; order: number; fromName: string; toName: string; personEntityId?: string | null; eraNote?: string | null; evidenceLevel?: string; verificationStatus?: string; sourceRef?: string | null; context?: string | null }[]) {
    const sanad = localId(l.sanadEntityId)
    if (!sanad) continue
    const person = l.personEntityId ? localId(l.personEntityId) : null
    const dup = await db.sanadLink.findFirst({ where: { sanadEntityId: sanad, order: l.order, fromName: l.fromName, toName: l.toName } })
    if (dup) continue
    await db.sanadLink.create({
      data: {
        sanadEntityId: sanad, order: l.order, fromName: l.fromName, toName: l.toName,
        personEntityId: person, eraNote: l.eraNote ?? null,
        evidenceLevel: l.evidenceLevel ?? 'F', verificationStatus: l.verificationStatus ?? 'UNVERIFIED',
        sourceRef: l.sourceRef ?? null, context: l.context ?? null,
      },
    })
    restored.sanad++
  }

  // 7) versionSnapshots (riwayat — idempoten per entityId+version)
  for (const v of snap.versions as { entityId: string; version: number; snapshot: string; changedBy?: string; reason?: string | null; createdAt?: string }[]) {
    const eid = localId(v.entityId)
    if (!eid) continue
    const dup = await db.versionSnapshot.findFirst({ where: { entityId: eid, version: v.version } })
    if (dup) continue
    await db.versionSnapshot.create({
      data: { entityId: eid, version: v.version, snapshot: v.snapshot, changedBy: v.changedBy ?? 'system', reason: v.reason ?? null },
    })
    restored.versions++
  }

  // 8) contributions (riwayat publik — idempoten per reference)
  for (const c of snap.contributions as { reference: string; kind: string; title: string; payload?: string; submitterName?: string; submitterContact?: string | null; status?: string; createdAt?: string }[]) {
    const dup = await db.contribution.findUnique({ where: { reference: c.reference } })
    if (dup) continue
    await db.contribution.create({
      data: {
        reference: c.reference, kind: c.kind ?? 'OTHER', title: c.title,
        payload: c.payload ?? JSON.stringify(c), submitterName: c.submitterName ?? 'Tidak terekam (restorasi snapshot)',
        submitterContact: c.submitterContact ?? null, status: c.status ?? 'SUBMITTED',
      },
    })
    restored.contributions++
  }

  const total = Object.values(restored).reduce((a, b) => a + b, 0)
  console.log(`restore-snapshot: ${total} baris dipulihkan →`, restored)
  await db.auditLog.create({
    data: { actor: 'restore-snapshot', action: 'RESTORE', target: 'HERITAGE-SNAPSHOT', detail: `Restorasi aditif dari snapshot arsip: ${JSON.stringify(restored)}` },
  })
}

main()
  .then(() => console.log('Restorasi selesai — DB kini superset dari snapshot arsip.'))
  .finally(() => db.$disconnect())
