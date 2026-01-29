'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import APISComponent from '@/src/page-components/apis'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'
import ErrorBoundary from '@/src/components/ErrorBoundary'

export default function APISPage() {
  const pathname = usePathname()
  const router = useRouter()
  const routerProps = useNextRouterAdapter()
  
  useEffect(() => {
    // Redirect /apis to /apis/selenium if no specific tab
    if (pathname === '/apis' || pathname === '/apis/') {
      router.replace('/apis/selenium')
    }
  }, [pathname, router])
  
  return (
    <ErrorBoundary>
      <APISComponent {...routerProps} />
    </ErrorBoundary>
  )
}
