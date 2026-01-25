'use client'

import TermsOfUseComponent from '@/src/page-components/termsOfUse'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function TermsOfUsePage() {
  const routerProps = useNextRouterAdapter()
  return <TermsOfUseComponent {...routerProps} />
}
