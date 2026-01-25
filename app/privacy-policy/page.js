'use client'

import PrivacyPolicyComponent from '@/src/page-components/privacyPolicy'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function PrivacyPolicyPage() {
  const routerProps = useNextRouterAdapter()
  return <PrivacyPolicyComponent {...routerProps} />
}
