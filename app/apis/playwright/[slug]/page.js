// Server component wrapper for generateStaticParams
import PlaywrightPageClient from './PlaywrightPageClient'

// Generate static params for static export (must be in server component)
export function generateStaticParams() {
  return [
    { slug: 'naming-conventions' },
    { slug: 'pr-review-checklist' },
    { slug: 'test-type-taxonomy' },
    { slug: 'automation-standards' },
  ]
}

export default function PlaywrightSlugPage() {
  return <PlaywrightPageClient />
}
