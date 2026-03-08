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

export default function PythonListsTuples() {
  return (
    <PythonMonth1TopicLayout title="Lists and Tuples" week={4}>
      <p style={{ marginBottom: '24px' }}>
        Store ordered collections with lists (mutable) and tuples (immutable). Use list methods and understand when to use each. Below is a detailed breakdown with examples.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. List creation and indexing</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Lists are ordered, mutable sequences. Create with square brackets: <code>[1, 2, 3]</code> or <code>[]</code> for empty. Items can be any type (mixed). Index with <code>lst[i]</code> (0-based); negative index from end. Slicing <code>lst[start:stop]</code> returns a new list. <code>len(lst)</code> gives the length.
        </p>
        <pre style={codeBlockStyle}>{`grades = [85, 90, 78]
print(grades[0])    # 85
print(grades[-1])   # 78 (last)
print(grades[1:3])  # [90, 78]
print(len(grades))  # 3
mixed = [1, "two", 3.0, True]`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. List methods</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>.append(x)</code> adds one item at the end. <code>.insert(i, x)</code> inserts at index <code>i</code>. <code>.remove(x)</code> removes the first occurrence of <code>x</code>. <code>.pop(i)</code> removes and returns item at <code>i</code> (default last). <code>.sort()</code> sorts in place; <code>.reverse()</code> reverses in place. <code>.extend(iterable)</code> adds all items from another sequence.
        </p>
        <pre style={codeBlockStyle}>{`nums = [3, 1, 2]
nums.append(4)      # [3, 1, 2, 4]
nums.insert(0, 0)   # [0, 3, 1, 2, 4]
nums.remove(1)      # [0, 3, 2, 4]
nums.sort()         # [0, 2, 3, 4]
last = nums.pop()   # last=4, nums=[0, 2, 3]`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Tuple basics and immutability</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Tuples are ordered, immutable sequences. Create with parentheses: <code>(1, 2, 3)</code> or <code>1, 2, 3</code>. Single-item tuple needs a comma: <code>(1,)</code>. Index and slice like lists. You cannot change, add, or remove elements after creation. Use tuples for fixed data (e.g. coordinates, config pairs) and when you need a hashable type (e.g. as dict key).
        </p>
        <pre style={codeBlockStyle}>{`point = (10, 20)
print(point[0])   # 10
print(point[1])   # 20
# point[0] = 5    # Error: tuple is immutable
single = (42,)    # one-element tuple
coords = 1, 2    # parentheses optional`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>4. When to use list vs tuple</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Use a <strong>list</strong> when you need to change the collection (add, remove, reorder). Use a <strong>tuple</strong> when the collection is fixed (e.g. return multiple values from a function, keys in a dict, or data that shouldn't be changed). Tuples are slightly more memory-efficient and can be used in sets and as dict keys because they are hashable when all elements are hashable.
        </p>
        <pre style={codeBlockStyle}>{`# List: grow/shrink
items = []
items.append("a")
items.append("b")

# Tuple: fixed (e.g. function return)
def get_point():
    return (10, 20)
x, y = get_point()`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/introduction.html#lists" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — Lists</a>, <a href="https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences" target="_blank" rel="noopener noreferrer" style={linkStyle}>Tuples and Sequences</a>, and <a href="https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sequence Types</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
