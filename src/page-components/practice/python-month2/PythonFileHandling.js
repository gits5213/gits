'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonFileHandling() {
  return (
    <PythonTopicLayout title="File Handling" week={6} month={2}>
      <p style={{ marginBottom: '24px' }}>Read, write, and append files. Work with file paths and use context managers. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Read, write, and append files</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><code>open(path, mode)</code> returns a file object. Modes: <code>"r"</code> read (default), <code>"w"</code> write (overwrites), <code>"a"</code> append. Always close the file with <code>.close()</code> or use <code>with open(...) as f:</code> so it closes automatically. <code>.read()</code> returns the full contents; <code>.write(s)</code> writes a string.</p>
        <pre style={codeBlockStyle}>{`# Write
with open("test.txt", "w") as f:
    f.write("Hello\\n")
    f.write("World\\n")

# Read
with open("test.txt") as f:
    print(f.read())

# Append
with open("test.txt", "a") as f:
    f.write("Line 3\\n")`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Working with file paths</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use the <code>os</code> or <code>pathlib</code> module for paths. <code>os.path.join(a, b)</code> joins path parts. <code>os.path.exists(path)</code> checks if a file exists. <code>pathlib.Path</code> offers an object-oriented API: <code>Path("dir") / "file.txt"</code>.</p>
        <pre style={codeBlockStyle}>{`import os
path = os.path.join("data", "file.txt")
print(os.path.exists(path))

from pathlib import Path
p = Path("data") / "file.txt"
print(p.exists())`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. with open() and line-by-line reading</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use <code>with open(path) as f:</code> so the file is closed when the block exits. Iterate with <code>for line in f:</code> to read line by line (memory-friendly for large files). Use <code>line.strip()</code> to remove newline and surrounding whitespace.</p>
        <pre style={codeBlockStyle}>{`with open("test.txt") as f:
    for line in f:
        print(line.strip())

# Read all lines into a list
with open("test.txt") as f:
    lines = f.readlines()`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files" target="_blank" rel="noopener noreferrer" style={linkStyle}>Reading and Writing Files</a> and <a href="https://docs.python.org/3/library/functions.html#open" target="_blank" rel="noopener noreferrer" style={linkStyle}>open()</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
