import dynamic from 'next/dynamic'
import { InstitutionApp } from '@/components/165/institution-app'

// v.4-perf — spotlight pencarian (cmdk + indeks entitas) hanya dibuka lewat
// tombol/shortcut, jadi chunk-nya diunduh on-demand, bukan di bundle awal.
const GlobalSearch = dynamic(() => import('@/components/165/global-search').then((m) => m.GlobalSearch))

export default function Home() {
  return (
    <>
      <InstitutionApp />
      <GlobalSearch />
    </>
  )
}
