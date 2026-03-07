'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonDebuggingTesting() {
  return (
    <PythonTopicLayout title="Debugging and Testing" week={11} month={3}>
      <p style={{ marginBottom: '16px' }}>Debug with print and the debugger. Write unit tests with <code>unittest</code> and assertions.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Debugging strategies and debugger</li>
        <li>Intro to unittest and assertions</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import unittest
class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(2 + 2, 4)
if __name__ == "__main__":
    unittest.main()`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
