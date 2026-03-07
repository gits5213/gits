'use client'

import React from 'react'
import PythonMonth1TopicLayout from './PythonMonth1TopicLayout'

export default function PythonStrings() {
  return (
    <PythonMonth1TopicLayout title="Strings" week={3}>
      <p style={{ marginBottom: '16px' }}>
        Work with text using string basics, indexing, slicing, and methods. Format output with f-strings.
      </p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you’ll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>String basics and quotes</li>
        <li>Indexing and slicing <code>s[0]</code>, <code>s[1:4]</code></li>
        <li>String methods: <code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code>, <code>.split()</code></li>
        <li>f-strings and <code>.format()</code></li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>
{`s = "Hello, Python"
print(s[0])      # H
print(s[0:5])    # Hello
print(s.upper()) # HELLO, PYTHON
name = "Ali"
print(f"Hi {name}!")  # Hi Ali!`}
      </pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.
      </p>
    </PythonMonth1TopicLayout>
  )
}
