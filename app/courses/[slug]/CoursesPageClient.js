'use client'

import CoursesComponent from '@/src/page-components/courses'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function CoursesPageClient() {
  const routerProps = useNextRouterAdapter()
  
  // Provide router props to the component (withRouter polyfill will pass them through)
  return <CoursesComponent {...routerProps} />
}
