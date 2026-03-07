'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonModulesPackages() {
  return (
    <PythonTopicLayout title="Modules and Packages" week={6} month={2}>
      <p style={{ marginBottom: '16px' }}>Import built-in and custom modules. Organize code into reusable files and packages.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Importing built-in modules</li>
        <li>Creating custom modules</li>
        <li>Organizing Python code</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# my_module.py: def hello(): print("Hi")
# another_file.py:
import my_module
my_module.hello()`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
