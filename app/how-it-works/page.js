'use client'

import HowItWorksComponent from '@/src/page-components/howItWorks'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function HowItWorksPage() {
  const routerProps = useNextRouterAdapter()
  return <HowItWorksComponent {...routerProps} />
}
