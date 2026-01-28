// Server component wrapper for generateStaticParams
import DocsPageClient from './DocsPageClient'

// Generate static params for static export (must be in server component)
export function generateStaticParams() {
  return [
    { slug: 'agile' },
    { slug: 'scrum' },
    { slug: 'manual' },
    { slug: 'bdd' },
    { slug: 'linux' },
    { slug: 'git' },
    { slug: 'html' },
    { slug: 'css' },
    { slug: 'javascript' },
    { slug: 'typescript' },
    { slug: 'reactjs' },
    { slug: 'nextjs' },
    { slug: 'sql' },
    { slug: 'java' },
    { slug: 'python' },
    { slug: 'network' },
    { slug: 'links' },
  ]
}

export default function DocsSlugPage() {
  return <DocsPageClient />
}
