// Server component wrapper for generateStaticParams
import APISPageClient from './APISPageClient'

// Generate static params for static export (must be in server component)
export function generateStaticParams() {
  return [
    { slug: 'selenium' },
    { slug: 'playwright' },
    { slug: 'cypressio' },
    { slug: 'protractor' },
    { slug: 'restassured' },
    { slug: 'readyapi' },
    { slug: 'performance' },
    { slug: 'architecture' },
    { slug: 'appium' },
    { slug: 'webdriverio' },
    { slug: 'supertest' },
    { slug: 'frisby' },
  ]
}

export default function APISSlugPage() {
  return <APISPageClient />
}
