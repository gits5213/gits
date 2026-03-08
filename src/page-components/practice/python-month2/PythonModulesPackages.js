'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonModulesPackages() {
  return (
    <PythonTopicLayout title="Modules and Packages" week={6} month={2}>
      <p style={{ marginBottom: '24px' }}>Import built-in and custom modules. Organize code into reusable files and packages. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Importing built-in modules</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Python comes with many built-in modules. Use <code>import module_name</code> then call <code>module_name.function_name()</code>. Use <code>from module import name</code> to use the name directly. Use <code>import math</code> or <code>from math import sqrt</code> for math functions.</p>
        <pre style={codeBlockStyle}>{`import math
print(math.sqrt(16))    # 4.0

from math import pi, ceil
print(pi)
print(ceil(3.2))        # 4`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Creating custom modules</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Any <code>.py</code> file is a module. Put functions and variables in it. From another file in the same directory (or on the path), use <code>import my_module</code> then <code>my_module.my_function()</code>. The module runs once on first import.</p>
        <pre style={codeBlockStyle}>{`# File: my_utils.py
def hello():
    print("Hi from my_utils")

def add(a, b):
    return a + b

# File: main.py (same folder)
import my_utils
my_utils.hello()
print(my_utils.add(1, 2))`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Organizing Python code</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Keep related code in modules; use packages (folders with <code>__init__.py</code>) for larger projects. Use clear names and avoid circular imports. Put executable code under <code>if __name__ == "__main__":</code> so it runs only when the file is executed, not when imported.</p>
        <pre style={codeBlockStyle}>{`# In my_module.py - run demo only when executed directly
def helper():
    return 42

if __name__ == "__main__":
    print(helper())   # runs when: python my_module.py`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see the <a href="https://docs.python.org/3/tutorial/modules.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — Modules</a> and <a href="https://docs.python.org/3/tutorial/modules.html#packages" target="_blank" rel="noopener noreferrer" style={linkStyle}>Packages</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
