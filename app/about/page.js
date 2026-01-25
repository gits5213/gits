'use client'

import About from '@/src/page-components/about'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function AboutPage() {
  const routerProps = useNextRouterAdapter()
  return <About {...routerProps} />
}
