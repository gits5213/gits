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

export default function PythonStrings() {
  return (
    <PythonMonth1TopicLayout title="Strings" week={3}>
      <p style={{ marginBottom: '24px' }}>
        Work with text using string basics, indexing, slicing, and methods. Format output with f-strings. Below is a detailed breakdown with examples.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. String basics and quotes</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Strings are sequences of characters. Use single quotes <code>'...'</code> or double quotes <code>"..."</code>; both are equivalent. Use the other quote inside a string to avoid escaping: <code>"It's fine"</code> or <code>'Say "Hi"'</code>. Triple quotes <code>'''...'''</code> or <code>"""..."""</code> allow multi-line strings.
        </p>
        <pre style={codeBlockStyle}>{`a = "Hello"
b = 'World'
c = "It's a nice day"
d = '''Line one
Line two'''`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Indexing and slicing</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Indexing: <code>s[i]</code> gets the character at position <code>i</code> (0-based). Negative indices count from the end: <code>s[-1]</code> is the last character. Slicing: <code>s[start:stop]</code> returns characters from <code>start</code> to <code>stop-1</code>. Omit <code>start</code> (from beginning) or <code>stop</code> (to end). <code>s[start:stop:step]</code> uses step (e.g. <code>s[::-1]</code> reverses the string).
        </p>
        <pre style={codeBlockStyle}>{`s = "Hello, Python"
print(s[0])      # H
print(s[-1])     # n (last)
print(s[0:5])    # Hello
print(s[7:])     # Python
print(s[:5])     # Hello
print(s[::-1])   # nohtyP ,olleH`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. String methods</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Strings have many methods (they return a new string; strings are immutable). <code>.upper()</code>, <code>.lower()</code> for case; <code>.strip()</code> removes leading/trailing whitespace; <code>.split(sep)</code> splits into a list (default sep is whitespace); <code>.join(iterable)</code> joins with the string. Others: <code>.replace(old, new)</code>, <code>.startswith()</code>, <code>.endswith()</code>, <code>.find()</code>.
        </p>
        <pre style={codeBlockStyle}>{`s = "  Hello, Python  "
print(s.upper())       # HELLO, PYTHON
print(s.strip())       # Hello, Python
print(s.split(","))    # ['  Hello', ' Python  ']
print("-".join(["a", "b"]))  # a-b
print("hello".replace("l", "L"))  # heLLo`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>4. f-strings and .format()</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          f-strings: prefix with <code>f</code> and put expressions in <code>{'{}'}</code>: <code>{'f"Hi {name}"'}</code>. Good for readability. <code>.format()</code>: <code>{'"Hi {}".format(name)'}</code> or <code>{'"{0} and {1}".format(a, b)'}</code>. Both support formatting specs (e.g. <code>{'{x:.2f}'}</code> for two decimal places).
        </p>
        <pre style={codeBlockStyle}>{`name = "Ali"
age = 25
print(f"Hi {name}!")           # Hi Ali!
print(f"Age: {age}")           # Age: 25
print("Hi {}!".format(name))   # Hi Ali!
x = 3.14159
print(f"{x:.2f}")              # 3.14`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/introduction.html#strings" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — Strings</a> and <a href="https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str" target="_blank" rel="noopener noreferrer" style={linkStyle}>Text Sequence Type (str)</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
