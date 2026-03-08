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

export default function PythonOperatorsExpressions() {
  return (
    <PythonMonth1TopicLayout title="Operators and Expressions" week={2}>
      <p style={{ marginBottom: '24px' }}>
        Use arithmetic, comparison, and logical operators to build expressions. Python follows standard operator precedence. Below is a detailed breakdown with examples.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Arithmetic operators</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), <code>/</code> (divide, always gives a float), <code>//</code> (floor division, integer result), <code>%</code> (modulo, remainder). <code>**</code> is exponentiation (e.g. <code>2 ** 3</code> is 8). For integers, <code>/</code> in Python 3 returns a float; use <code>//</code> for integer division.
        </p>
        <pre style={codeBlockStyle}>{`print(10 + 3)    # 13
print(10 - 3)    # 7
print(10 * 3)    # 30
print(10 / 3)    # 3.333...
print(10 // 3)   # 3 (floor division)
print(10 % 3)    # 1 (remainder)
print(2 ** 3)    # 8 (2 to the power of 3)`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Comparison operators</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Comparisons return <code>True</code> or <code>False</code>. <code>==</code> (equal), <code>!=</code> (not equal), <code>&gt;</code> (greater than), <code>&lt;</code> (less than), <code>&gt;=</code> (greater or equal), <code>&lt;=</code> (less or equal). You can chain comparisons: <code>0 &lt; x &lt; 10</code> is valid and means <code>x</code> is between 0 and 10.
        </p>
        <pre style={codeBlockStyle}>{`print(10 > 3)    # True
print(10 == 10)   # True
print(10 != 3)    # True
print(5 >= 5)     # True
print(5 <= 4)     # False

x = 7
print(0 < x < 10) # True (chained comparison)`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Logical operators</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>and</code> — both sides must be true. <code>or</code> — at least one side true. <code>not</code> — inverts a boolean. They short-circuit: <code>and</code> stops if the first is false; <code>or</code> stops if the first is true. Use them to combine conditions in <code>if</code> statements and loops.
        </p>
        <pre style={codeBlockStyle}>{`print(True and False)   # False
print(True or False)    # True
print(not True)         # False

age = 20
has_ticket = True
print(age >= 18 and has_ticket)  # True`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>4. Assignment operators</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>=</code> assigns a value. Compound assignment updates a variable in place: <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>//=</code>, <code>%=</code>, <code>**=</code>. For example, <code>x += 2</code> is equivalent to <code>x = x + 2</code>. Useful in loops for counters and accumulators.
        </p>
        <pre style={codeBlockStyle}>{`x = 5
x += 2   # x is now 7 (same as x = x + 2)
x -= 1   # x is now 6
x *= 2   # x is now 12
x //= 4  # x is now 3

total = 0
total += 10
total += 20
print(total)  # 30`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>5. Practice logic building</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Combine operators in expressions. Use parentheses to control order: <code>(a + b) * c</code>. Operator precedence: <code>**</code> first, then <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code>, then <code>+</code>, <code>-</code>. Comparison and logical operators have lower precedence. Practice with small calculations and conditions before using them in <code>if</code> and loops.
        </p>
        <pre style={codeBlockStyle}>{`# Precedence: * before +
print(2 + 3 * 4)    # 14, not 20
print((2 + 3) * 4) # 20

# Combine in conditions (used in if/elif/else next)
score = 85
print(score >= 80 and score < 90)  # True (B range)`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/introduction.html#numbers" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — Numbers</a>, <a href="https://docs.python.org/3/library/stdtypes.html#comparisons" target="_blank" rel="noopener noreferrer" style={linkStyle}>Comparisons</a>, and <a href="https://docs.python.org/3/reference/expressions.html#operator-precedence" target="_blank" rel="noopener noreferrer" style={linkStyle}>Operator precedence</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
