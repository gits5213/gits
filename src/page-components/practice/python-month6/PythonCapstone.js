'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonCapstone() {
  return (
    <PythonTopicLayout title="Capstone Development" week={23} month={6}>
      <p style={{ marginBottom: '16px' }}>Guided build session, testing, final polishing, and prepare presentation. Push to GitHub and add README.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Guided build, problem solving, debugging</li>
        <li>Testing, final polishing, presentation prep</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Implement step by step; run and fix errors
# Push to GitHub, add README with sample output`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
