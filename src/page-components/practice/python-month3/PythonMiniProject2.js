'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonMiniProject2() {
  return (
    <PythonTopicLayout title="Mini Project 2" week={12} month={3}>
      <p style={{ marginBottom: '16px' }}>Plan and build an intermediate project: expense tracker, to-do app, contact manager, or CSV report generator.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Intermediate project planning</li>
        <li>Code organization and real-world utility</li>
        <li>Choose one: Expense tracker, To-do app, Contact manager, CSV report generator</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`tasks = []
while True:
    cmd = input("add / list / quit: ")
    if cmd == "add":
        tasks.append(input("Task: "))
    elif cmd == "list":
        for t in tasks:
            print(t)
    elif cmd == "quit":
        break`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
