'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonMiniProject2() {
  return (
    <PythonTopicLayout title="Mini Project 2" week={12} month={3}>
      <p style={{ marginBottom: '24px' }}>Plan and build an intermediate project: expense tracker, to-do app, contact manager, or CSV report generator. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Intermediate project planning</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Define the goal and scope: e.g. "To-do app: add task, list tasks, mark done, quit." List data you need (e.g. list of dicts with <code>task</code>, <code>done</code>). List actions and for each: inputs, validation, how data changes, output. Optionally add persistence (save/load to a JSON or CSV file) so data survives restarts.</p>
        <pre style={codeBlockStyle}>{`# Plan: to-do app
# Data: list of {"task": str, "done": bool}
# Actions: add, list, done <n>, quit
# Add: input task, append to list
# List: print numbered tasks
# Done: set tasks[n]["done"] = True`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Code organization and real-world utility</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use functions for each action (add, list, save, load). Keep the main loop short: get command, dispatch to the right function. Use constants or a config for the data file path. Validate user input (e.g. index in range). Add a simple save/load with <code>json</code> or <code>csv</code> so the app is useful across runs.</p>
        <pre style={codeBlockStyle}>{`import json
def load_tasks():
    try:
        with open("tasks.json") as f:
            return json.load(f)
    except FileNotFoundError:
        return []
def save_tasks(tasks):
    with open("tasks.json", "w") as f:
        json.dump(tasks, f, indent=2)`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Choose one: Expense tracker, To-do, Contact manager, CSV report</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><strong>Expense tracker:</strong> add (amount, category, date), list, sum by category. <strong>To-do:</strong> add, list, mark done, optionally delete. <strong>Contact manager:</strong> add (name, phone, email), list, search. <strong>CSV report:</strong> read a CSV, compute stats (sum, average, count), write a summary to another file. Implement one end-to-end with menu, data structure, and optional file I/O.</p>
        <pre style={codeBlockStyle}>{`# Minimal to-do with add/list/quit
tasks = []
while True:
    cmd = input("add / list / quit: ")
    if cmd == "add":
        tasks.append(input("Task: "))
    elif cmd == "list":
        for i, t in enumerate(tasks, 1):
            print(i, t)
    elif cmd == "quit":
        break`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For file and data handling, see <a href="https://docs.python.org/3/tutorial/inputoutput.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Input and Output</a> and <a href="https://docs.python.org/3/library/json.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>json</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
