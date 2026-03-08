'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonOOPPart2() {
  return (
    <PythonTopicLayout title="Object-Oriented Programming Part 2" week={8} month={2}>
      <p style={{ marginBottom: '24px' }}>Apply inheritance, encapsulation, polymorphism, and method overriding. Build class hierarchies. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Inheritance, encapsulation, polymorphism</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><strong>Inheritance:</strong> a child class gets attributes and methods from a parent: <code>class Child(Parent):</code>. <strong>Encapsulation:</strong> keep data inside the object; use methods to access or change it (e.g. prefix "private" with <code>_</code> by convention). <strong>Polymorphism:</strong> different classes can have methods with the same name; the right one is called based on the object type.</p>
        <pre style={codeBlockStyle}>{`class Person:
    def __init__(self, name):
        self.name = name
class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name)   # call parent __init__
        self.grade = grade
s = Student("Ali", "A")
print(s.name, s.grade)   # Ali A`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Method overriding</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Override a parent method by defining a method with the same name in the child. The child version is used when called on a child instance. Use <code>super().method_name()</code> to call the parent's version from the child (e.g. in <code>__init__</code> or when extending behavior).</p>
        <pre style={codeBlockStyle}>{`class Animal:
    def speak(self):
        return "Some sound"
class Dog(Animal):
    def speak(self):
        return "Woof"
d = Dog()
print(d.speak())   # Woof (overridden)
# super().speak() would call Animal.speak`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/tutorial/classes.html#inheritance" target="_blank" rel="noopener noreferrer" style={linkStyle}>Inheritance</a> and <a href="https://docs.python.org/3/tutorial/classes.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Classes</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
