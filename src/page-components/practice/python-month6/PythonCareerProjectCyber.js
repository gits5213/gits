'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonCareerProjectCyber() {
  return (
    <PythonTopicLayout title="Career Project Planning – Cyber Security" week={22} month={6}>
      <p style={{ marginBottom: '16px' }}>Define security problem, script objective, input/output design, and reporting and evidence.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Define security problem and script objective</li>
        <li>Input/output design and reporting</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Define: inputs (e.g. log file), outputs (e.g. report)`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
