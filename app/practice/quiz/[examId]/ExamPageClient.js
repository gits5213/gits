'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { useNextRouterAdapter } from '@/src/utils/nextRouterAdapter'

// Dynamic import for Exam components
const examComponents = {
  'exam-0': () => import('@/src/page-components/practice/Exam0'),
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
  'exam-18': () => import('@/src/page-components/practice/Exam18'),
  'exam-19': () => import('@/src/page-components/practice/Exam19'),
  'exam-20': () => import('@/src/page-components/practice/Exam20'),
  'exam-21': () => import('@/src/page-components/practice/Exam21'),
  'exam-22': () => import('@/src/page-components/practice/Exam22'),
  'exam-23': () => import('@/src/page-components/practice/Exam23'),
}

// Optimized loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    padding: '40px 20px'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #667eea',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '20px'
    }}></div>
    <p style={{
      fontSize: '16px',
      color: '#666',
      margin: 0
    }}>Loading exam...</p>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

export default function ExamPageClient() {
  const params = useParams()
  const routerProps = useNextRouterAdapter()
  const examId = params?.examId
  const [Component, setComponent] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Start loading immediately
  useEffect(() => {
    if (!examId || !examComponents[examId]) {
      setLoading(false)
      return
    }
    
    // Load component immediately
    const loadComponent = async () => {
      try {
        const module = await examComponents[examId]()
        setComponent(() => module.default || module)
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error loading exam:', error)
        }
      } finally {
        setLoading(false)
      }
    }
    
    loadComponent()
  }, [examId])
  
  if (loading) {
    return <LoadingSpinner />
  }
  
  if (!examId || !examComponents[examId]) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px 20px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h2 style={{ color: '#e74c3c', marginBottom: '10px' }}>Exam not found</h2>
        <p style={{ color: '#666' }}>The exam you're looking for doesn't exist.</p>
      </div>
    )
  }
  
  if (!Component) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px 20px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h2 style={{ color: '#e74c3c', marginBottom: '10px' }}>Error loading exam</h2>
        <p style={{ color: '#666' }}>There was an error loading the exam. Please try again.</p>
      </div>
    )
  }
  
  return <Component {...routerProps} />
}
