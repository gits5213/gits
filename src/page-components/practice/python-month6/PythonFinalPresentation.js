'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonFinalPresentation() {
  return (
    <PythonTopicLayout title="Final Project Presentation" week={24} month={6}>
      <p style={{ marginBottom: '16px' }}>Data Science and Cyber Security project presentations. Feedback and improvements.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Data Science project presentation</li>
        <li>Cyber Security project presentation</li>
        <li>Feedback and improvements</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# 5–10 min: problem, what you built, what you learned`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
