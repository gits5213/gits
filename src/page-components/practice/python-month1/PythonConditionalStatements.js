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

export default function PythonConditionalStatements() {
  return (
    <PythonMonth1TopicLayout title="Conditional Statements" week={2}>
      <p style={{ marginBottom: '24px' }}>
        Control the flow of your program with <code>if</code>, <code>elif</code>, and <code>else</code>. Use nested conditions for real-life decision logic. Below is a detailed breakdown with examples.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. if, elif, else</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>if</code> runs a block when its condition is true. <code>elif</code> (else-if) is checked only if the previous <code>if</code>/<code>elif</code> was false. <code>else</code> runs when no previous condition was true. Use a colon after the condition and indent the block (4 spaces). Only one branch runs in a single <code>if</code>/<code>elif</code>/<code>else</code> chain.
        </p>
        <pre style={codeBlockStyle}>{`age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")

score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Nested conditions</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          You can put an <code>if</code> inside another <code>if</code> (or inside <code>elif</code>/<code>else</code>). The inner block is run only when the outer condition is true and then the inner condition is true. Keep nesting shallow when possible for readability; use <code>and</code>/<code>or</code> to combine conditions instead of deep nesting.
        </p>
        <pre style={codeBlockStyle}>{`age = 20
has_ticket = True
if age >= 18:
    if has_ticket:
        print("You may enter")
    else:
        print("Need a ticket")
else:
    print("Must be 18+")`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Real-life decision logic</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Use conditionals for grade checkers, age checks, eligibility (e.g. voting, discounts), and input validation. Combine comparison and logical operators: <code>if score &gt;= 80 and score &lt; 90</code>. Order <code>elif</code> from strictest to loosest (e.g. 90+ then 80+ then 70+) so the first match wins.
        </p>
        <pre style={codeBlockStyle}>{`# Grade checker
score = 88
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")

# Age / eligibility
age = 16
print("Can vote:" if age >= 18 else "Cannot vote")`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/controlflow.html#if-statements" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — if Statements</a> and <a href="https://docs.python.org/3/tutorial/controlflow.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Control Flow</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
