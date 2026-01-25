'use client'

import ContactComponent from '@/src/page-components/contact'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function ContactPage() {
  const routerProps = useNextRouterAdapter()
  return <ContactComponent {...routerProps} />
}
