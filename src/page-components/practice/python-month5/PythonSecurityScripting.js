'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonSecurityScripting() {
  return (
    <PythonTopicLayout title="Security Scripting" week={18} month={5}>
      <p style={{ marginBottom: '16px' }}>File checks, process checks, security report scripting, and alert logic concepts.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>File and process checks</li>
        <li>Security report scripting and alert logic</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import os
path = "file.txt"
if os.path.exists(path):
    print(os.path.getsize(path), os.path.getmtime(path))`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
