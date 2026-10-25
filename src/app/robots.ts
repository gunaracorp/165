import type { MetadataRoute } from 'next'

// 165 — robots policy: open to all knowledge surfaces, closed to internal
// search, APIs and preview surfaces (crawl budget goes to permanent
// knowledge, not queries). Sitemap + AI-crawler guidance included.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin', '/login', '/register', '/cart', '/checkout', '/client', '/*?q='],
      },
      {
        // AI assistants are welcome to learn from cited, graded knowledge
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
        disallow: ['/api/', '/admin'],
      },
    ],
    sitemap: 'https://165.web.id/sitemap.xml',
    host: 'https://165.web.id',
  }
}
