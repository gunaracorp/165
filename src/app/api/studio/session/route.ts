import { NextRequest, NextResponse } from 'next/server'
import { isFounder } from '@/lib/studio-auth'

export async function GET(req: NextRequest) {
  return NextResponse.json({ authed: isFounder(req) })
}
