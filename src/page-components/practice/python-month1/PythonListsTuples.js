'use client'

import React from 'react'
import PythonMonth1TopicLayout from './PythonMonth1TopicLayout'

export default function PythonListsTuples() {
  return (
    <PythonMonth1TopicLayout title="Lists and Tuples" week={4}>
      <p style={{ marginBottom: '16px' }}>
        Store ordered collections with lists (mutable) and tuples (immutable). Use list methods and understand when to use each.
      </p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you’ll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>List creation and indexing</li>
        <li>List methods: <code>.append()</code>, <code>.insert()</code>, <code>.remove()</code>, <code>.sort()</code></li>
        <li>Tuple basics and immutability</li>
        <li>When to use list vs tuple</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>
{`grades = [85, 90, 78]
grades.append(92)
print(grades[0])   # 85

point = (10, 20)   # tuple
# point[0] = 5     # Error: tuple is immutable`}
      </pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.
      </p>
    </PythonMonth1TopicLayout>
  )
}
