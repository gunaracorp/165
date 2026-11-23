// CMS 165 — shared client types for panels
export type CmsCategoryRow = { id: string; name: string; slug: string; desc?: string | null; posts?: number }

export type CmsTagRow = { id: string; name: string; slug: string; posts?: number }

export type CmsPostRow = {
  id: string
  type: 'post' | 'page'
  title: string
  slug: string
  excerpt: string | null
  coverUrl: string | null
  status: 'draft' | 'published' | 'trash'
  pinned: boolean
  author: string
  views: number
  categoryId: string | null
  category: CmsCategoryRow | null
  tags: { id: string; name: string }[]
  comments: number
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

export type CmsCommentRow = {
  id: string
  name: string
  email: string | null
  body: string
  status: 'pending' | 'approved' | 'spam' | 'trash'
  createdAt: string
  post: { id: string; title: string; slug: string } | null
}

export type CmsMediaRow = {
  id: string
  filename: string
  mime: string
  size: number
  url: string
  createdAt: string
}

export type CmsOverview = {
  stats: {
    posts: number; published: number; pages: number; drafts: number
    categories: number; tags: number; media: number
    comments: number; pendingComments: number; trash: number; views: number
    subscribers: number; pendingContributions: number; personas: number
  }
  activePersona: { name: string; field: string; title: string | null; master: boolean } | null
  recentPosts: { id: string; title: string; slug: string; status: string; category: string | null; comments: number; updatedAt: string }[]
  recentComments: { id: string; name: string; body: string; status: string; createdAt: string; post: { title: string; slug: string } | null }[]
}

export type CmsSession = { authenticated: boolean }

export function fmtBytes(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / (1024 * 1024)).toFixed(1)} MB`
}
