'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonFileHandling() {
  return (
    <PythonTopicLayout title="File Handling" week={6} month={2}>
      <p style={{ marginBottom: '16px' }}>Read, write, and append files. Work with file paths and use context managers.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Read, write, and append files</li>
        <li>Working with file paths</li>
        <li><code>with open()</code> and line-by-line reading</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`with open("test.txt", "w") as f:
    f.write("Hello")
with open("test.txt") as f:
    print(f.read())`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
