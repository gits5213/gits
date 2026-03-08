'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonProblemSolving() {
  return (
    <PythonTopicLayout title="Problem Solving with Python" week={12} month={3}>
      <p style={{ marginBottom: '24px' }}>Build logic, tackle pattern problems, and break down coding challenges step by step. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Logic building and pattern problems</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Start with small steps: variables, conditionals, loops. Pattern problems (e.g. print rows of stars or numbers) help with nested loops and indices. Use <code>range()</code> and indexing; write one line or one row first, then wrap in a loop. Practice on paper or in comments before coding.</p>
        <pre style={codeBlockStyle}>{`# Pattern: 5 rows, row i has i stars
for i in range(1, 6):
    print("*" * i)
# *
# **
# ***
# ****
# *****`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Coding challenge strategy</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Read the problem carefully; identify inputs, outputs, and edge cases. Solve by hand for a small example. Break into steps (e.g. "read input → validate → compute → format output"). Write a simple solution first, then refine. Test with the given examples and with your own (empty input, one item, large value).</p>
        <pre style={codeBlockStyle}>{`# Example: sum of list
def sum_list(nums):
    total = 0
    for n in nums:
        total += n
    return total
print(sum_list([1, 2, 3]))   # 6
print(sum_list([]))          # 0`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Breaking down problems</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>For a larger task (e.g. to-do app), list: (1) what data we need (list of tasks), (2) what actions (add, list, quit), (3) what each action does step by step. Implement one action at a time and test. Use functions for each action so the main loop stays clear. Same approach for mini projects: inputs, outputs, data structure, then code.</p>
        <pre style={codeBlockStyle}>{`# To-do: data = list, actions = add / list / quit
tasks = []
while True:
    cmd = input("add / list / quit: ")
    if cmd == "quit":
        break
    elif cmd == "add":
        tasks.append(input("Task: "))
    elif cmd == "list":
        for i, t in enumerate(tasks, 1):
            print(i, t)`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For general Python practice, see the <a href="https://docs.python.org/3/tutorial/index.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial</a> and <a href="https://docs.python.org/3/tutorial/controlflow.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Control Flow</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
