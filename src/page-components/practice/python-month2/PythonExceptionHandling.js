'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonExceptionHandling() {
  return (
    <PythonTopicLayout title="Exception Handling" week={7} month={2}>
      <p style={{ marginBottom: '24px' }}>Handle errors with <code>try</code>, <code>except</code>, <code>else</code>, and <code>finally</code>. Raise exceptions and write safer code. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Errors vs exceptions</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Errors (e.g. <code>SyntaxError</code>) are usually programming mistakes. Exceptions (e.g. <code>ValueError</code>, <code>TypeError</code>, <code>FileNotFoundError</code>) can occur at runtime (invalid input, missing file). Use try/except to catch exceptions and handle them so the program does not crash.</p>
        <pre style={codeBlockStyle}>{`# Without handling - program crashes
# x = int("abc")   # ValueError

# With handling - program continues
try:
    x = int("abc")
except ValueError:
    print("Invalid number")`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. try, except, else, finally</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><code>try:</code> run code that might raise an exception. <code>except ExceptionType:</code> run if that exception occurs; you can have multiple except blocks. <code>else:</code> runs only if no exception was raised. <code>finally:</code> always runs (cleanup, e.g. close file). Order: try → except → else → finally.</p>
        <pre style={codeBlockStyle}>{`try:
    x = int(input("Enter a number: "))
except ValueError:
    print("Not a valid number")
else:
    print("You entered", x)
finally:
    print("Done")`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Raise exceptions and safe coding</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use <code>raise ExceptionType("message")</code> to raise an exception (e.g. <code>raise ValueError("Age must be positive")</code>). Validate inputs and raise when invalid. Catch specific exceptions (e.g. <code>except ValueError</code>) instead of bare <code>except:</code> so you do not hide bugs. Use try/except around risky operations (file I/O, user input, conversions).</p>
        <pre style={codeBlockStyle}>{`def set_age(age):
    if age < 0 or age > 150:
        raise ValueError("Age must be 0-150")
    return age

try:
    set_age(-1)
except ValueError as e:
    print(e)   # Age must be 0-150`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/tutorial/errors.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Errors and Exceptions</a> and <a href="https://docs.python.org/3/library/exceptions.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Built-in Exceptions</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
