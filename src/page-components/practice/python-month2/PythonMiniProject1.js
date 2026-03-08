'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonMiniProject1() {
  return (
    <PythonTopicLayout title="Mini Project 1" week={8} month={2}>
      <p style={{ marginBottom: '24px' }}>Design and build a console-based project: structure code, apply problem solving, and use OOP. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Console-based real project design</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Choose a small scope: e.g. Student management (add/list students), Inventory (add/list items), or Library (add/list books). Run in the terminal with <code>input()</code> for choices and data. Use a loop (e.g. <code>while True</code>) and a menu (1. Add, 2. List, 3. Quit). Store data in memory (lists, dicts) first; you can add file saving later.</p>
        <pre style={codeBlockStyle}>{`# Menu-driven loop
while True:
    print("1. Add  2. List  3. Quit")
    choice = input("Choice: ")
    if choice == "3":
        break
    # handle 1 and 2...`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Code structure and problem solving</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Break the project into steps: (1) show menu, (2) get choice, (3) perform action. Use functions for each action (e.g. <code>add_student()</code>, <code>list_students()</code>) to keep the main loop short. Use a list of dicts or a list of objects to store records. Validate input (e.g. non-empty name) and use try/except for numbers.</p>
        <pre style={codeBlockStyle}>{`students = []
def add_student():
    name = input("Name: ")
    students.append({"name": name})
def list_students():
    for s in students:
        print(s["name"])`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Choose one: Student management, Inventory, Library</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Implement one project end-to-end: same menu pattern, different data (e.g. Student: name, id; Inventory: item, quantity; Library: title, author). Optionally use a class to represent each entity (e.g. <code>class Student:</code> with name, id) and store a list of instances. Add a simple "View" or "Search" option to practice more logic.</p>
        <pre style={codeBlockStyle}>{`# Example: minimal student list
students = []
while True:
    choice = input("1.Add 2.List 3.Quit: ")
    if choice == "1":
        name = input("Name: ")
        students.append({"name": name})
    elif choice == "2":
        for s in students:
            print(s["name"])
    elif choice == "3":
        break`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For general Python tutorial and project ideas, see the <a href="https://docs.python.org/3/tutorial/index.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial</a> and <a href="https://docs.python.org/3/tutorial/controlflow.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Control Flow</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
