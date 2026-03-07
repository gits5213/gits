'use client'

import React from 'react'
import PythonMonth1TopicLayout from './PythonMonth1TopicLayout'

export default function PythonLoops() {
  return (
    <PythonMonth1TopicLayout title="Loops" week={3}>
      <p style={{ marginBottom: '16px' }}>
        Repeat actions with <code>for</code> and <code>while</code> loops. Use <code>range()</code>, <code>break</code>, <code>continue</code>, and <code>pass</code>.
      </p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you’ll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li><code>for</code> loop over sequences and <code>range()</code></li>
        <li><code>while</code> loop</li>
        <li><code>break</code>, <code>continue</code>, <code>pass</code></li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>
{`for i in range(5):
    print(i)   # 0, 1, 2, 3, 4

for n in range(1, 11):
    print(f"7 x {n} = {7 * n}")

count = 0
while count < 3:
    print(count)
    count += 1`}
      </pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.
      </p>
    </PythonMonth1TopicLayout>
  )
}
