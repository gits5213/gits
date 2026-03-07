'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonExceptionHandling() {
  return (
    <PythonTopicLayout title="Exception Handling" week={7} month={2}>
      <p style={{ marginBottom: '16px' }}>Handle errors with <code>try</code>, <code>except</code>, <code>else</code>, and <code>finally</code>. Raise exceptions and write safer code.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Errors vs exceptions</li>
        <li>try, except, else, finally</li>
        <li>Raise exceptions and safe coding</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`try:
    x = int("abc")
except ValueError:
    print("Invalid number")`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
