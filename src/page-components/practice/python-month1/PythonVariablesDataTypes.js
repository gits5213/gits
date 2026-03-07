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

export default function PythonVariablesDataTypes() {
  return (
    <PythonMonth1TopicLayout title="Variables and Data Types" week={1}>
      <p style={{ marginBottom: '24px' }}>
        Variables hold values. Python has built-in types—integers, floats, strings, and booleans—and lets you get user input and convert between types. Below is a detailed breakdown with examples.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Variables</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Variables hold values in memory. You assign with the <code>=</code> operator: <code>name = value</code>. You don't declare a type; Python infers it. Name variables clearly so others (and you later) can read the code. Variable names are case-sensitive (<code>age</code> and <code>Age</code> are different).
        </p>
        <pre style={codeBlockStyle}>{`name = "Ali"
age = 25
print(name, age)   # Output: Ali 25`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. int, float, string, boolean</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <strong><code>int</code></strong> = whole numbers (e.g. <code>10</code>, <code>-3</code>). <strong><code>float</code></strong> = decimals (e.g. <code>3.14</code>, <code>0.5</code>). <strong><code>str</code></strong> (string) = text in single or double quotes (e.g. <code>"hello"</code>, <code>'world'</code>). <strong><code>bool</code></strong> (boolean) = <code>True</code> or <code>False</code>. Python infers the type from the value you assign.
        </p>
        <pre style={codeBlockStyle}>{`a = 10          # int
b = 3.14        # float
c = "hello"     # string
d = True        # boolean
print(type(a), type(b), type(c), type(d))
# Output: <class 'int'> <class 'float'> <class 'str'> <class 'bool'>`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Type casting</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Type casting converts one type to another. <code>int("42")</code> → integer 42; <code>float("3.14")</code> → float 3.14; <code>str(100)</code> → string <code>"100"</code>. Use this when you need a number from user input (since <code>input()</code> returns a string) or when formatting output.
        </p>
        <pre style={codeBlockStyle}>{`s = "42"
n = int(s)       # n is 42
print(n + 1)     # 43

text = "3.14"
x = float(text)
print(x * 2)     # 6.28

num = 100
msg = str(num) + " items"
print(msg)       # 100 items`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>4. User input</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>input("Prompt: ")</code> waits for the user to type and press Enter. It always <strong>returns a string</strong>. Store the result in a variable. To use it as a number, cast it with <code>int()</code> or <code>float()</code>. The prompt string is optional but helps the user know what to enter.
        </p>
        <pre style={codeBlockStyle}>{`name = input("Enter your name: ")
print("Hello,", name)

# For numbers, cast the input:
age_str = input("Enter your age: ")
age = int(age_str)
print("Next year you will be", age + 1)`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>5. Naming conventions</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Use <strong>lowercase</strong> and <strong>underscores</strong> for multi-word names: <code>user_name</code>, <code>max_count</code>. Avoid camelCase for regular variables (that's more common in other languages). Don't use names that match built-ins like <code>print</code>, <code>list</code>, <code>str</code>, or <code>type</code>, or you'll shadow the built-in. Names must start with a letter or underscore and can contain letters, digits, and underscores.
        </p>
        <pre style={codeBlockStyle}>{`user_age = 20
max_count = 100
is_active = True

# Avoid: list = [1, 2, 3]  # shadows built-in list`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/introduction.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — Introduction</a> (numbers, strings) and <a href="https://docs.python.org/3/library/stdtypes.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Built-in Types</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
