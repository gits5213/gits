'use client'

import React from 'react'
import PythonMonth1TopicLayout from './PythonMonth1TopicLayout'

export default function PythonConditionalStatements() {
  return (
    <PythonMonth1TopicLayout title="Conditional Statements" week={2}>
      <p style={{ marginBottom: '16px' }}>
        Control the flow of your program with <code>if</code>, <code>elif</code>, and <code>else</code>. Use nested conditions for real-life decision logic.
      </p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you’ll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li><code>if</code>, <code>elif</code>, <code>else</code></li>
        <li>Nested conditions</li>
        <li>Real-life decision logic (grades, age, eligibility)</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>
{`age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")

score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")`}
      </pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.
      </p>
    </PythonMonth1TopicLayout>
  )
}
