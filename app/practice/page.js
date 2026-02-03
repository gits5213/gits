'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PracticeComponent from '@/src/page-components/practice'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function PracticePage() {
  const pathname = usePathname()
  const router = useRouter()
  const routerProps = useNextRouterAdapter()
  
  useEffect(() => {
    // Redirect /practice to /practice/examples so Practice component (with dropdown) shows
    if (pathname === '/practice' || pathname === '/practice/') {
      router.replace('/practice/examples')
    }
  }, [pathname, router])
  
  return <PracticeComponent {...routerProps} />
}
