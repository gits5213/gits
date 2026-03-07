'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonApis() {
  return (
    <PythonTopicLayout title="APIs with Python" week={9} month={3}>
      <p style={{ marginBottom: '16px' }}>Use the <code>requests</code> library to call APIs. Send GET requests and parse JSON responses.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>What is an API</li>
        <li><code>requests</code> library and GET methods</li>
        <li>Parsing JSON response</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import requests
r = requests.get("https://api.github.com")
data = r.json()
print(data.get("current_user_url"))`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
