'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonMiniProject1() {
  return (
    <PythonTopicLayout title="Mini Project 1" week={8} month={2}>
      <p style={{ marginBottom: '16px' }}>Design and build a console-based project: structure code, apply problem solving, and use OOP.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Console-based real project design</li>
        <li>Code structure and problem solving</li>
        <li>Choose one: Student management, Inventory system, Library management</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`# Menu: 1. Add student 2. List students
students = []
while True:
    choice = input("Choice: ")
    if choice == "1":
        name = input("Name: ")
        students.append({"name": name})
    elif choice == "2":
        for s in students:
            print(s["name"])`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
