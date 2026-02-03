'use client'

import PracticeSelect from '@/src/page-components/practice/PracticeSelect'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function PracticeSelectPage() {
  const routerProps = useNextRouterAdapter()
  return <PracticeSelect {...routerProps} />
}
