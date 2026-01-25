'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import AIDComponent from '@/src/page-components/aid'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function AIDPage() {
  const pathname = usePathname()
  const router = useRouter()
  const routerProps = useNextRouterAdapter()
  
  useEffect(() => {
    // Redirect /aid to /aid/window if no specific tab
    if (pathname === '/aid') {
      router.replace('/aid/window')
    }
  }, [pathname, router])
  
  return <AIDComponent {...routerProps} />
}
