'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonDebuggingTesting() {
  return (
    <PythonTopicLayout title="Debugging and Testing" week={11} month={3}>
      <p style={{ marginBottom: '24px' }}>Debug with print and the debugger. Write unit tests with <code>unittest</code> and assertions. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Debugging strategies and the debugger</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use <code>print(variable)</code> to inspect values at runtime. Use the built-in debugger: <code>import pdb; pdb.set_trace()</code> to break; then step with <code>n</code> (next), <code>s</code> (step into), <code>c</code> (continue). In VS Code, set breakpoints in the gutter and run "Debug Python File". Read error messages and tracebacks to find the failing line.</p>
        <pre style={codeBlockStyle}>{`# Print debugging
def add(a, b):
    print("a =", a, "b =", b)
    return a + b

# Breakpoint with pdb
import pdb
def bad():
    x = 1
    pdb.set_trace()  # execution stops here
    return x + 1`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Intro to unittest and assertions</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>The <code>unittest</code> module provides a test framework. Create a class that inherits <code>unittest.TestCase</code>. Name test methods <code>test_*</code>. Use <code>self.assertEqual(a, b)</code>, <code>self.assertTrue(x)</code>, <code>self.assertRaises(ExceptionType, callable)</code>. Run with <code>python -m unittest test_module</code> or <code>unittest.main()</code> in the file.</p>
        <pre style={codeBlockStyle}>{`import unittest
class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(2 + 2, 4)
    def test_positive(self):
        self.assertTrue(3 > 0)
    def test_type_error(self):
        with self.assertRaises(TypeError):
            int("abc")
if __name__ == "__main__":
    unittest.main()`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/library/unittest.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>unittest</a> and <a href="https://docs.python.org/3/library/pdb.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>pdb</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
