'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonRegexSecurity() {
  return (
    <PythonTopicLayout title="Regular Expressions for Security and Data Parsing" week={19} month={5}>
      <p style={{ marginBottom: '16px' }}>Pattern matching, searching logs and text, extracting structured information.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Pattern matching with <code>re</code></li>
        <li>Extracting IPs, emails, dates from logs</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import re
print(re.findall(r"\\d+", "a1b22c"))  # ['1', '22']`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
