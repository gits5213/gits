'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import APISComponent from '@/src/page-components/apis'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function APISPage() {
  const pathname = usePathname()
  const router = useRouter()
  const routerProps = useNextRouterAdapter()
  
  useEffect(() => {
    // Redirect /apis to /apis/selenium if no specific tab
    if (pathname === '/apis') {
      router.replace('/apis/selenium')
    }
  }, [pathname, router])
  
  return <APISComponent {...routerProps} />
}
