'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonOOPPart1() {
  return (
    <PythonTopicLayout title="Object-Oriented Programming Part 1" week={7} month={2}>
      <p style={{ marginBottom: '24px' }}>Create classes and objects. Use attributes, methods, and the <code>__init__</code> constructor. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Classes and objects</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>A class is a blueprint; an object is an instance of that class. Define a class with <code>class ClassName:</code> and create objects with <code>ClassName()</code>. Each object has its own data (attributes). Use the class to model real-world entities (e.g. Student, Product).</p>
        <pre style={codeBlockStyle}>{`class Dog:
    pass
d = Dog()
print(d)   # <__main__.Dog object at ...>`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Attributes and methods</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Attributes are data on the object (e.g. <code>obj.name</code>). Methods are functions defined inside the class; the first parameter is <code>self</code> (the instance). Call methods as <code>obj.method_name(args)</code>. Access or set attributes with <code>obj.attr</code>.</p>
        <pre style={codeBlockStyle}>{`class Student:
    def greet(self):
        print("Hi, I am a student")
s = Student()
s.name = "Jane"    # attribute
s.greet()          # Hi, I am a student
print(s.name)      # Jane`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Constructor __init__</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><code>__init__(self, ...)</code> is the constructor: it runs when you create an object with <code>ClassName(...)</code>. Use it to set initial attributes from arguments. Assign to <code>self.attr</code> so each instance has its own data. Do not return a value from <code>__init__</code>.</p>
        <pre style={codeBlockStyle}>{`class Student:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hello, I am", self.name)
s = Student("Jane")
print(s.name)   # Jane
s.greet()       # Hello, I am Jane`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/tutorial/classes.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Classes</a> and <a href="https://docs.python.org/3/tutorial/classes.html#class-objects" target="_blank" rel="noopener noreferrer" style={linkStyle}>Class Objects</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
