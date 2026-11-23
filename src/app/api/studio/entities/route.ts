import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { isFounder } from '@/lib/studio-auth'
import { ENTITY_TYPES } from '@/lib/165'

// 165 — FOUNDER STUDIO · record creation
// Contribution ≠ Publication also applies to the founder: every studio
// write lands with a VersionSnapshot + AuditLog, exactly like seeds do.

const TYPE_KEYS = Object.keys(ENTITY_TYPES) as [string, ...string[]]
const PRECISIONS = ['DAY', 'MONTH', 'YEAR', 'DECADE', 'CENTURY', 'UNKNOWN'] as const
const EVIDENCE = ['A', 'B', 'C', 'D', 'E', 'F'] as const
const STATUSES = ['VERIFIED', 'DOCUMENTED', 'COMMUNITY_SUBMITTED', 'DISPUTED', 'TRADITIONAL_ACCOUNT', 'UNVERIFIED', 'WITHDRAWN'] as const
const VISIBILITIES = ['PUBLIC', 'RESTRICTED', 'PRIVATE'] as const

const createSchema = z.object({
  type: z.enum(TYPE_KEYS),
  primaryName: z.string().trim().min(2).max(200),
  subtitle: z.string().trim().max(300).optional().or(z.literal('')),
  summary: z.string().trim().max(4000).optional().or(z.literal('')),
  summaryId: z.string().trim().max(4000).optional().or(z.literal('')),
  summaryAr: z.string().trim().max(4000).optional().or(z.literal('')),
  evidenceLevel: z.enum(EVIDENCE).default('F'),
  verificationStatus: z.enum(STATUSES).default('UNVERIFIED'),
  visibility: z.enum(VISIBILITIES).default('PUBLIC'),
  startDate: z.string().trim().max(40).optional().or(z.literal('')),
  startDatePrecision: z.enum(PRECISIONS).optional(),
  endDate: z.string().trim().max(40).optional().or(z.literal('')),
  endDatePrecision: z.enum(PRECISIONS).optional(),
  region: z.string().trim().max(120).optional().or(z.literal('')),
  latitude: z.number().min(-90).max(90).nullable().optional(),
  longitude: z.number().min(-180).max(180).nullable().optional(),
  details: z.record(z.string(), z.unknown()).nullable().optional(),
})

function slugify(input: string): string {
  const base = input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
  return base || 'record'
}

async function uniqueSlug(base: string): Promise<string> {
  let slug = base
  for (let i = 2; ; i++) {
    const clash = await db.entity.findUnique({ where: { slug }, select: { id: true } })
    if (!clash) return slug
    slug = `${base}-${i}`
  }
}

async function nextGlobalId(type: string): Promise<string> {
  const prefix = `165-${type}-`
  const rows = await db.entity.findMany({
    where: { globalId: { startsWith: prefix } },
    select: { globalId: true },
  })
  let max = 0
  for (const r of rows) {
    const n = parseInt(r.globalId.slice(prefix.length), 10)
    if (Number.isFinite(n) && n > max) max = n
  }
  return `${prefix}${String(max + 1).padStart(6, '0')}`
}

export async function POST(req: NextRequest) {
  if (!isFounder(req)) return NextResponse.json({ error: 'Founder authentication required.' }, { status: 401 })
  try {
    const body = await req.json().catch(() => null)
    const parsed = createSchema.safeParse(body)
    if (!parsed.success) {
      const first = parsed.error.issues[0]
      return NextResponse.json({ error: `${first?.path?.join('.') ?? 'field'}: ${first?.message ?? 'invalid'}` }, { status: 400 })
    }
    const d = parsed.data
    const globalId = await nextGlobalId(d.type)
    const slug = await uniqueSlug(slugify(d.primaryName))

    const entity = await db.entity.create({
      data: {
        globalId,
        slug,
        type: d.type,
        primaryName: d.primaryName,
        subtitle: d.subtitle || null,
        summary: d.summary || null,
        summaryId: d.summaryId || null,
        summaryAr: d.summaryAr || null,
        evidenceLevel: d.evidenceLevel,
        verificationStatus: d.verificationStatus,
        visibility: d.visibility,
        startDate: d.startDate || null,
        startDatePrecision: d.startDatePrecision ?? null,
        endDate: d.endDate || null,
        endDatePrecision: d.endDatePrecision ?? null,
        region: d.region || null,
        latitude: d.latitude ?? null,
        longitude: d.longitude ?? null,
        details: d.details ? JSON.stringify(d.details) : null,
        nameVariants: {
          create: { name: d.primaryName, language: 'en', kind: 'PRIMARY' },
        },
      },
    })

    await db.versionSnapshot.create({
      data: {
        entityId: entity.id,
        version: 1,
        snapshot: JSON.stringify({ after: { globalId, slug, primaryName: d.primaryName, type: d.type, evidenceLevel: d.evidenceLevel, verificationStatus: d.verificationStatus } }),
        changedBy: 'founder-studio',
        reason: 'Record created via Founder Studio.',
      },
    })
    await db.auditLog.create({
      data: { actor: 'founder-studio', action: 'CREATE', target: globalId, detail: `Created ${d.type} "${d.primaryName}" via Founder Studio.` },
    })

    return NextResponse.json({ ok: true, entity: { globalId: entity.globalId, slug: entity.slug, primaryName: entity.primaryName, type: entity.type } }, { status: 201 })
  } catch (err) {
    console.error('[api/studio/entities POST]', err)
    const msg = err instanceof Error ? err.message : String(err)
    const readonly = /readonly|read-only|SQLITE_|P1003|P2021|P2022/i.test(msg)
    return NextResponse.json(
      { error: readonly ? 'The connected database is read-only or absent on this host. Studio writes need a hosted database (free options in README §32) — the public site keeps displaying the bundled snapshot.' : 'Failed to create record.' },
      { status: 503 },
    )
  }
}
