'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonAdvancedFunctions() {
  return (
    <PythonTopicLayout title="Advanced Functions" week={5} month={2}>
      <p style={{ marginBottom: '16px' }}>Use default and keyword arguments, <code>*args</code> and <code>**kwargs</code>, and lambda expressions.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Default and keyword arguments</li>
        <li><code>*args</code> and <code>**kwargs</code></li>
        <li>Lambda basics</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`def say(msg="Hi"):
    print(msg)
say()
say("Bye")
double = lambda x: x * 2
print(double(5))  # 10`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
