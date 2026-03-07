'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonCareerReadiness() {
  return (
    <PythonTopicLayout title="Career Readiness and Interview Preparation" week={24} month={6}>
      <p style={{ marginBottom: '16px' }}>Resume building, LinkedIn profile, GitHub portfolio review, mock interview questions, and career roadmap.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Resume building and LinkedIn profile</li>
        <li>GitHub portfolio review</li>
        <li>Mock interview questions and career roadmap</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Add projects to resume and LinkedIn; list Python and tool skills`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
