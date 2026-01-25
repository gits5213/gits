// Server component wrapper for nested automation routes
import CoursesPageClient from '../../[slug]/CoursesPageClient'

// Generate static params for nested automation routes (required for static export)
export async function generateStaticParams() {
  return [
    { slug: 'selenium-webdriver' },
  ]
}

export default function AutomationSlugPage() {
  return <CoursesPageClient />
}
