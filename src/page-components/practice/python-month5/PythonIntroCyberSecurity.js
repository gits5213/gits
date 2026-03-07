'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonIntroCyberSecurity() {
  return (
    <PythonTopicLayout title="Introduction to Cyber Security with Python" week={17} month={5}>
      <p style={{ marginBottom: '16px' }}>Python in cyber security. Legal and ethical boundaries. Common security automation use cases.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Python in cyber security</li>
        <li>Legal and ethical boundaries</li>
        <li>Security engineer mindset</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Read sample security logs, identify suspicious entries`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
