'use client'

import React, { Suspense } from 'react'
import { useParams } from 'next/navigation'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'
import { practicePagesMap } from '../practicePagesMap'

function PracticeContent() {
  const params = useParams()
  const routerProps = useNextRouterAdapter()
  const slug = params?.slug
  
  // If it's a tab route (examples, testcases, quiz, scorecard), use main Practice component
  const tabRoutes = ['examples', 'testcases', 'quiz', 'scorecard']
  if (slug && tabRoutes.includes(slug)) {
    const PracticeComponent = require('@/src/page-components/practice').default
    return <PracticeComponent {...routerProps} />
  }
  
  // Otherwise, try to load the specific practice page
  if (!slug || !practicePagesMap[slug]) {
    // Fallback to main Practice component
    const PracticeComponent = require('@/src/page-components/practice').default
    return <PracticeComponent {...routerProps} />
  }
  
  const PracticePageComponent = React.lazy(practicePagesMap[slug])
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PracticePageComponent {...routerProps} />
    </Suspense>
  )
}

export default function PracticePageClient() {
  return <PracticeContent />
}
