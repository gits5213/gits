'use client'

import CopyrightNoticeComponent from '@/src/page-components/copyrightNotice'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

export default function CopyrightNoticePage() {
  const routerProps = useNextRouterAdapter()
  return <CopyrightNoticeComponent {...routerProps} />
}
