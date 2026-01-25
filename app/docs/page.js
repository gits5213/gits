'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DocsComponent from '@/src/page-components/docs'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function DocsPage() {
  const pathname = usePathname()
  const router = useRouter()
  const routerProps = useNextRouterAdapter()
  
  useEffect(() => {
    // Redirect /docs to /docs/agile if no specific tab
    if (pathname === '/docs') {
      router.replace('/docs/agile')
    }
  }, [pathname, router])
  
  return <DocsComponent {...routerProps} />
}
