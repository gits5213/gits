'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import CoursesComponent from '@/src/page-components/courses'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function CoursesPage() {
  const pathname = usePathname()
  const router = useRouter()
  const routerProps = useNextRouterAdapter()
  
  useEffect(() => {
    // Redirect /courses to /courses/code4kids if no specific tab
    if (pathname === '/courses') {
      router.replace('/courses/code4kids')
    }
  }, [pathname, router])
  
  // Provide router props to the component (withRouter polyfill will pass them through)
  return <CoursesComponent {...routerProps} />
}
