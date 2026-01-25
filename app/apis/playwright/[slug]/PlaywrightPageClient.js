'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

// Dynamic import for Playwright sub-pages
const playwrightPages = {
  'naming-conventions': () => import('@/src/page-components/playwright/NamingConventions'),
  'pr-review-checklist': () => import('@/src/page-components/playwright/PRReviewChecklist'),
  'test-type-taxonomy': () => import('@/src/page-components/playwright/TestTypeTaxonomy'),
  'automation-standards': () => import('@/src/page-components/playwright/AutomationStandards'),
}

export default function PlaywrightPageClient() {
  const params = useParams()
  const routerProps = useNextRouterAdapter()
  const slug = params?.slug
  const [Component, setComponent] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (!slug || !playwrightPages[slug]) {
      setLoading(false)
      return
    }
    
    playwrightPages[slug]()
      .then(module => {
        setComponent(() => module.default || module)
        setLoading(false)
      })
      .catch(error => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error loading Playwright page:', error)
        }
        setLoading(false)
      })
  }, [slug])
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!slug || !playwrightPages[slug]) {
    return <div>Page not found</div>
  }
  
  if (!Component) {
    return <div>Error loading page</div>
  }
  
  return <Component {...routerProps} />
}
