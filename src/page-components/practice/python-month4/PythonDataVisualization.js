'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonDataVisualization() {
  return (
    <PythonTopicLayout title="Data Visualization" week={15} month={4}>
      <p style={{ marginBottom: '16px' }}>Use Matplotlib for line, bar, and histogram charts. Interpret and present data visually.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Matplotlib basics, line, bar, histogram</li>
        <li>Chart interpretation</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [4, 5, 6])
plt.show()
plt.bar(["A", "B"], [10, 20])
plt.show()`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
