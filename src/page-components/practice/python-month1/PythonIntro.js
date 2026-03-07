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

export default function PythonIntro() {
  return (
    <PythonMonth1TopicLayout title="Introduction to Python" week={1}>
      <p style={{ marginBottom: '24px' }}>
        Python is a high-level, interpreted programming language that emphasizes readability. Below is a detailed breakdown of each concept with examples you can try.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. What is Python</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Python is a high-level, interpreted programming language. It emphasizes readability and lets you write clear code for small and large projects. Code is run line by line by the Python interpreter—no separate compile step. Python is used in web development, data science, automation, scripting, and more.
        </p>
        <pre style={codeBlockStyle}>{`# Python is run line by line
print("Hello, World")`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Why Python for career growth</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Python is in high demand for jobs in data science, automation, security, and backend development. Learning Python opens paths to roles like Data Analyst, Automation Engineer, Security Analyst, and Python Developer. Many companies use Python for data pipelines, testing, and APIs, so the skill set is widely applicable.
        </p>
        <pre style={codeBlockStyle}>{`# Check your Python version in the terminal:
# python --version
# or in code:
import sys
print(sys.version)`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Python installation</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Download the official installer from <strong>python.org</strong> (Downloads → Python 3.x). During setup, <strong>check “Add Python to PATH”</strong> so you can run <code>python</code> from any terminal. Restart your terminal (or computer) after installation. On macOS/Linux you may also have <code>python3</code>; use that if <code>python</code> points to an older version.
        </p>
        <pre style={codeBlockStyle}>{`# After install, open Terminal (or Command Prompt) and type:
# python --version
# You should see something like: Python 3.11.0`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>4. VS Code / Jupyter Notebook setup</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Install <strong>VS Code</strong> from code.visualstudio.com, then install the <strong>“Python”</strong> extension (by Microsoft) for syntax highlighting and running files. For notebooks: run <code>pip install jupyter</code> in the terminal, then create a new file and save as <code>.ipynb</code>. Use <strong>New File → Save As</strong> to create either <code>.py</code> (script) or <code>.ipynb</code> (notebook) files.
        </p>
        <pre style={codeBlockStyle}>{`# In VS Code: File → New File → Save As hello.py
# Then type a line and run with the play button, or in terminal:
# python hello.py`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>5. Your first Python program</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Create a new file (e.g. <code>hello.py</code>), write a single line that prints some text using <code>print(...)</code>, save the file, then run it from the terminal with <code>python hello.py</code>. The program executes from top to bottom; <code>print()</code> sends output to the screen.
        </p>
        <pre style={codeBlockStyle}>{`print("Hello")
# Save as hello.py, then in terminal run: python hello.py
# Output: Hello`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>6. Syntax basics and indentation</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          In Python, you typically write <strong>one statement per line</strong> (or separate with <code>;</code>). <strong>Indentation matters</strong>: blocks of code (e.g. inside <code>if</code>, <code>for</code>) are defined by indentation, not braces. Use a <strong>colon</strong> (<code>:</code>) before a block. Use 4 spaces (or one tab) consistently for each indentation level.
        </p>
        <pre style={codeBlockStyle}>{`x = 5
if x > 0:
    print("positive")   # this line is inside the if block
print("done")           # this is outside the if block`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>7. Comments and <code>print()</code> statements</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <strong>Comments</strong> start with <code>#</code> and are ignored by Python. Use them to explain your code. <strong><code>print()</code></strong> is a built-in function that sends one or more values to the screen (standard output). You can pass strings in quotes, variables, or expressions separated by commas.
        </p>
        <pre style={codeBlockStyle}>{`# This is a comment — Python ignores it
print("This is output")

# print can take multiple items (separated by spaces by default)
name = "Ali"
print("Hello,", name)   # Output: Hello, Ali`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/introduction.html" target="_blank" rel="noopener noreferrer" style={{ color: '#3776ab', fontWeight: '600' }}>Python Tutorial — Introduction</a> and <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" style={{ color: '#3776ab', fontWeight: '600' }}>The Python Tutorial</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
