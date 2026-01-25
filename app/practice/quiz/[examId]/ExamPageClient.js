'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

// Dynamic import for Exam components
const examComponents = {
  'exam-1': () => import('@/src/page-components/practice/Exam1'),
  'exam-2': () => import('@/src/page-components/practice/Exam2'),
  'exam-3': () => import('@/src/page-components/practice/Exam3'),
  'exam-4': () => import('@/src/page-components/practice/Exam4'),
  'exam-5': () => import('@/src/page-components/practice/Exam5'),
  'exam-6': () => import('@/src/page-components/practice/Exam6'),
  'exam-7': () => import('@/src/page-components/practice/Exam7'),
  'exam-8': () => import('@/src/page-components/practice/Exam8'),
  'exam-9': () => import('@/src/page-components/practice/Exam9'),
  'exam-10': () => import('@/src/page-components/practice/Exam10'),
  'exam-11': () => import('@/src/page-components/practice/Exam11'),
  'exam-12': () => import('@/src/page-components/practice/Exam12'),
  'exam-13': () => import('@/src/page-components/practice/Exam13'),
  'exam-14': () => import('@/src/page-components/practice/Exam14'),
  'exam-15': () => import('@/src/page-components/practice/Exam15'),
  'exam-16': () => import('@/src/page-components/practice/Exam16'),
  'exam-17': () => import('@/src/page-components/practice/Exam17'),
}

export default function ExamPageClient() {
  const params = useParams()
  const routerProps = useNextRouterAdapter()
  const examId = params?.examId
  const [Component, setComponent] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (!examId || !examComponents[examId]) {
      setLoading(false)
      return
    }
    
    examComponents[examId]()
      .then(module => {
        setComponent(() => module.default || module)
        setLoading(false)
      })
      .catch(error => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error loading exam:', error)
        }
        setLoading(false)
      })
  }, [examId])
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!examId || !examComponents[examId]) {
    return <div>Exam not found</div>
  }
  
  if (!Component) {
    return <div>Error loading exam</div>
  }
  
  return <Component {...routerProps} />
}
