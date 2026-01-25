'use client'

import WebsiteDisclaimerComponent from '@/src/page-components/websiteDisclaimer'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function WebsiteDisclaimerPage() {
  const routerProps = useNextRouterAdapter()
  return <WebsiteDisclaimerComponent {...routerProps} />
}
