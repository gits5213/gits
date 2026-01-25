'use client'

import AIDComponent from '@/src/page-components/aid'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function AIDPageClient() {
  const routerProps = useNextRouterAdapter()
  return <AIDComponent {...routerProps} />
}
