'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonFunctions() {
  return (
    <PythonTopicLayout title="Functions" week={5} month={2}>
      <p style={{ marginBottom: '24px' }}>Define reusable blocks of code with functions. Use parameters, arguments, and return values. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Defining functions with def</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use <code>def function_name(parameters):</code> followed by an indented block. The function runs when you call it with <code>function_name(arguments)</code>. Define functions before you call them (or ensure they are defined at runtime).</p>
        <pre style={codeBlockStyle}>{`def greet():
    print("Hello!")
greet()   # Hello!`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Parameters and arguments</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Parameters are the names listed in the <code>def</code>; arguments are the values you pass when calling. Positional arguments match by order. You can have multiple parameters; pass the same number of arguments (unless using defaults or *args).</p>
        <pre style={codeBlockStyle}>{`def greet(name):
    return "Hello, " + name
print(greet("Sam"))      # Hello, Sam

def add(a, b):
    return a + b
print(add(3, 5))         # 8`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Return values and scope basics</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><code>return</code> sends a value back to the caller and exits the function. Without <code>return</code>, the function returns <code>None</code>. Variables defined inside the function are local (not visible outside). Variables read inside the function can be global if not assigned in the function.</p>
        <pre style={codeBlockStyle}>{`def square(n):
    return n * n
print(square(4))   # 16

def no_return():
    print("hi")
print(no_return()) # hi, then None`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see the <a href="https://docs.python.org/3/tutorial/controlflow.html#defining-functions" target="_blank" rel="noopener noreferrer" style={linkStyle}>Defining Functions</a> and <a href="https://docs.python.org/3/tutorial/controlflow.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Control Flow</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
