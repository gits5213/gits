'use client'

import DocsComponent from '@/src/page-components/docs'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function DocsPageClient() {
  const routerProps = useNextRouterAdapter()
  return <DocsComponent {...routerProps} />
}
