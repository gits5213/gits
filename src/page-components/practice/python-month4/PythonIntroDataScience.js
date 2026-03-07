'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonIntroDataScience() {
  return (
    <PythonTopicLayout title="Introduction to Data Science" week={13} month={4}>
      <p style={{ marginBottom: '16px' }}>Overview of data science workflow, Python's role, and types of datasets.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>What is data science and workflow overview</li>
        <li>Python in data science and types of datasets</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Explore sample datasets, identify rows, columns, features`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
