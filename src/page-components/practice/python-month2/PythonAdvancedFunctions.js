'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonAdvancedFunctions() {
  return (
    <PythonTopicLayout title="Advanced Functions" week={5} month={2}>
      <p style={{ marginBottom: '24px' }}>Use default and keyword arguments, <code>*args</code> and <code>**kwargs</code>, and lambda expressions. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Default and keyword arguments</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Default arguments get a value in the <code>def</code> (e.g. <code>def f(x=0)</code>). Callers can omit them. Keyword arguments pass by name: <code>f(a=1, b=2)</code>, so order does not matter. Mix positional and keyword; positional must come first.</p>
        <pre style={codeBlockStyle}>{`def say(msg="Hi"):
    print(msg)
say()           # Hi
say("Bye")      # Bye

def greet(name, greeting="Hello"):
    print(greeting, name)
greet("Ali")                    # Hello Ali
greet("Ali", greeting="Hi")     # Hi Ali`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. *args and **kwargs</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><code>*args</code> collects extra positional arguments into a tuple. <code>**kwargs</code> collects extra keyword arguments into a dict. Use them to write functions that accept variable numbers of arguments. Names <code>args</code> and <code>kwargs</code> are convention; the important part is <code>*</code> and <code>**</code>.</p>
        <pre style={codeBlockStyle}>{`def sum_all(*args):
    return sum(args)
print(sum_all(1, 2, 3))   # 6

def show(**kwargs):
    for k, v in kwargs.items():
        print(k, v)
show(name="Ali", age=20)`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Lambda basics</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>A lambda is a small anonymous function: <code>lambda params: expression</code>. It returns the result of the expression. Use it for short one-line functions passed to <code>sorted()</code>, <code>map()</code>, etc. For anything longer, use a normal <code>def</code>.</p>
        <pre style={codeBlockStyle}>{`double = lambda x: x * 2
print(double(5))   # 10

add = lambda a, b: a + b
print(add(2, 3))   # 5

# Often used with sorted, map, filter
nums = [1, 3, 2]
print(sorted(nums, key=lambda x: -x))   # [3, 2, 1]`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions" target="_blank" rel="noopener noreferrer" style={linkStyle}>More on Defining Functions</a> and <a href="https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions" target="_blank" rel="noopener noreferrer" style={linkStyle}>Lambda Expressions</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
