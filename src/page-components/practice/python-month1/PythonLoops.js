'use client'

import React from 'react'
import PythonMonth1TopicLayout from './PythonMonth1TopicLayout'

const codeBlockStyle = {
  background: '#1e293b',
  color: '#e2e8f0',
  padding: '16px',
  borderRadius: '8px',
  overflowX: 'auto',
  fontSize: '14px',
  marginTop: '8px',
  marginBottom: '20px'
}

const pointSection = {
  marginBottom: '28px',
  paddingBottom: '24px',
  borderBottom: '1px solid #e9ecef'
}

const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonLoops() {
  return (
    <PythonMonth1TopicLayout title="Loops" week={3}>
      <p style={{ marginBottom: '24px' }}>
        Repeat actions with <code>for</code> and <code>while</code> loops. Use <code>range()</code>, <code>break</code>, <code>continue</code>, and <code>pass</code>. Below is a detailed breakdown with examples.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. for loop and range()</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>for item in sequence:</code> runs the block once per item in a sequence (list, string, or <code>range()</code>). <code>range(n)</code> gives 0 to n-1; <code>range(start, stop)</code> gives start to stop-1; <code>range(start, stop, step)</code> uses step. <code>range()</code> is memory-efficient (does not build a list in memory).
        </p>
        <pre style={codeBlockStyle}>{`for i in range(5):
    print(i)   # 0, 1, 2, 3, 4

for n in range(1, 11):
    print(f"7 x {n} = {7 * n}")

for k in range(0, 10, 2):
    print(k)   # 0, 2, 4, 6, 8`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. while loop</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>while condition:</code> repeats the block as long as the condition is true. Update the variable used in the condition inside the loop so it eventually becomes false (otherwise you get an infinite loop). Use <code>while</code> when you don't know the number of iterations in advance (e.g. "until user quits").
        </p>
        <pre style={codeBlockStyle}>{`count = 0
while count < 3:
    print(count)
    count += 1
# 0, 1, 2

# Typical pattern: loop until a flag or user action
n = 0
while n < 5:
    n += 1
    print("Step", n)`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. break, continue, pass</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>break</code> exits the loop immediately (no more iterations). <code>continue</code> skips the rest of the current iteration and goes to the next one. <code>pass</code> does nothing—use it as a placeholder where syntax requires a block (e.g. an empty <code>if</code> or loop body you'll fill later).
        </p>
        <pre style={codeBlockStyle}>{`# break: stop when we find 5
for i in range(10):
    if i == 5:
        break
    print(i)   # 0, 1, 2, 3, 4

# continue: skip even numbers
for i in range(5):
    if i % 2 == 0:
        continue
    print(i)   # 1, 3

# pass: placeholder
for x in []:
    pass   # do nothing`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/controlflow.html#for-statements" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — for Statements</a>, <a href="https://docs.python.org/3/tutorial/controlflow.html#the-range-function" target="_blank" rel="noopener noreferrer" style={linkStyle}>range()</a>, and <a href="https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements" target="_blank" rel="noopener noreferrer" style={linkStyle}>break and continue</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
