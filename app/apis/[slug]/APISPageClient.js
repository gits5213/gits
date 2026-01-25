'use client'

import APISComponent from '@/src/page-components/apis'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function APISPageClient() {
  const routerProps = useNextRouterAdapter()
  return <APISComponent {...routerProps} />
}
