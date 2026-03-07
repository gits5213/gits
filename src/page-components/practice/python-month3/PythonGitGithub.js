'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonGitGithub() {
  return (
    <PythonTopicLayout title="Git and GitHub" week={10} month={3}>
      <p style={{ marginBottom: '16px' }}>Use Git for version control: repositories, commit, push, pull. Build a portfolio on GitHub.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Git basics and repositories</li>
        <li>Commit, push, pull</li>
        <li>Portfolio thinking and organizing code</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# In terminal:
# git init
# git add .
# git commit -m "First commit"
# Create repo on GitHub, then:
# git remote add origin <url>
# git push -u origin main`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
