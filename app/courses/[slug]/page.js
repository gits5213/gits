// Server component wrapper for generateStaticParams
import CoursesPageClient from './CoursesPageClient'

// Generate static params for static export (must be in server component)
export function generateStaticParams() {
  return [
    { slug: 'code4kids' },
    { slug: 'webdevelopment' },
    { slug: 'automation' },
    { slug: 'manual' },
    { slug: 'accessibility' },
    { slug: 'sdet-roadmap' },
    { slug: 'ai-for-qa' },
    { slug: 'performance' },
    { slug: 'security' },
    { slug: 'api-automation' },
    { slug: 'devops-pipeline' },
    { slug: 'selenium-webdriver' },
    { slug: 'digital-marketing' }
  ]
}

export default function CoursesSlugPage() {
  return <CoursesPageClient />
}
