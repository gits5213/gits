'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonAutomation() {
  return (
    <PythonTopicLayout title="Python Automation" week={11} month={3}>
      <p style={{ marginBottom: '24px' }}>Automate repetitive tasks with the <code>os</code> and <code>shutil</code> modules. File and folder automation. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Automating repetitive tasks</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use loops and file/path operations to batch-process files: list files in a folder, filter by extension, rename or move. Combine with <code>open()</code> to read/write many files. Use <code>os</code> or <code>pathlib</code> for paths and <code>shutil</code> for copy/move. Scripts can run on a schedule (cron, Task Scheduler) or on demand.</p>
        <pre style={codeBlockStyle}>{`import os
for name in os.listdir("."):
    if name.endswith(".txt"):
        print("Process", name)`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. OS and shutil basics</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><code>os.listdir(path)</code> returns filenames in a directory. <code>os.path.join(a, b)</code> builds paths. <code>os.path.exists(path)</code>, <code>os.path.isfile(path)</code>, <code>os.path.isdir(path)</code>. <code>os.getcwd()</code>, <code>os.chdir(path)</code>. <code>shutil.copy(src, dst)</code>, <code>shutil.move(src, dst)</code>, <code>shutil.copytree(src, dst)</code> for directories.</p>
        <pre style={codeBlockStyle}>{`import os
print(os.listdir("."))
print(os.path.join("dir", "file.txt"))
print(os.path.exists("file.txt"))

import shutil
shutil.copy("a.txt", "b.txt")
# shutil.move("a.txt", "backup/a.txt")`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. File and folder automation</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Combine listing, filtering, and copy/move to build organizers: e.g. move all <code>.pdf</code> into a <code>pdfs</code> folder. Create directories with <code>os.makedirs(path, exist_ok=True)</code>. Iterate with <code>os.walk(path)</code> for recursive directory traversal. Always check paths exist and handle errors (e.g. try/except, <code>exist_ok=True</code>).</p>
        <pre style={codeBlockStyle}>{`import os
import shutil
os.makedirs("backup", exist_ok=True)
for name in os.listdir("."):
    if name.endswith(".txt"):
        shutil.copy(name, os.path.join("backup", name))`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/library/os.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>os</a>, <a href="https://docs.python.org/3/library/os.path.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>os.path</a>, and <a href="https://docs.python.org/3/library/shutil.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>shutil</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
