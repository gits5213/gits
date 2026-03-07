'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonNumPy() {
  return (
    <PythonTopicLayout title="NumPy Basics" week={13} month={4}>
      <p style={{ marginBottom: '16px' }}>Create arrays, perform operations, and use NumPy for mathematical computation.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Arrays and array operations</li>
        <li>Mathematical computation and why NumPy matters</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import numpy as np
a = np.array([1, 2, 3])
print(a * 2)
m = np.array([[1, 2], [3, 4]])
print(m.shape, m.sum())`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
