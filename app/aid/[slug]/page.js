// Server component wrapper for generateStaticParams
import AIDPageClient from './AIDPageClient'

// Generate static params for static export (must be in server component)
export function generateStaticParams() {
  return [
    { slug: 'window' },
    { slug: 'mac' },
    { slug: 'basic' },
    { slug: 'gk' },
    { slug: 'help' },
    { slug: 'frontend' },
    { slug: 'codesnippet' },
  ]
}

export default function AIDSlugPage() {
  return <AIDPageClient />
}
