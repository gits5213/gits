'use client'

import Landing from '../src/page-components/landing'
import { useNextRouterAdapter } from '../src/utils/nextRouterAdapter'

export default function HomePage() {
  const routerProps = useNextRouterAdapter()
  return <Landing {...routerProps} />
}
