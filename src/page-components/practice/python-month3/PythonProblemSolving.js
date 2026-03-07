'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonProblemSolving() {
  return (
    <PythonTopicLayout title="Problem Solving with Python" week={12} month={3}>
      <p style={{ marginBottom: '16px' }}>Build logic, tackle pattern problems, and break down coding challenges step by step.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Logic building and pattern problems</li>
        <li>Coding challenge strategy</li>
        <li>Breaking down problems</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Break project into steps: inputs, outputs, data
# Build a to-do: list for tasks, loop with add/list/quit`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
