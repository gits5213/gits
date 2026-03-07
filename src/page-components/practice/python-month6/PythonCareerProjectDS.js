'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonCareerProjectDS() {
  return (
    <PythonTopicLayout title="Career Project Planning – Data Science" week={22} month={6}>
      <p style={{ marginBottom: '16px' }}>Dataset selection, problem definition, analysis plan, and visualization plan for your data science capstone.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Dataset selection and problem definition</li>
        <li>Analysis and visualization plan</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Pick a dataset (e.g. Kaggle), write 3 questions to answer`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
