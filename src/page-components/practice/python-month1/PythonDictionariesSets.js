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

export default function PythonDictionariesSets() {
  return (
    <PythonMonth1TopicLayout title="Dictionaries and Sets" week={4}>
      <p style={{ marginBottom: '24px' }}>
        Store key-value pairs with dictionaries and unique values with sets. Use dictionary methods and remove duplicates with sets. Below is a detailed breakdown with examples.
      </p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Dictionary creation and access by key</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Dictionaries map keys to values. Create with <code>{'{}'}</code> or <code>dict()</code>: <code>{'{ "name": "Ali", "age": 20 }'}</code>. Keys must be hashable (e.g. strings, numbers, tuples); values can be any type. Access with <code>d[key]</code> (KeyError if missing) or <code>d.get(key, default)</code> (returns default if key missing). Assign with <code>d[key] = value</code>.
        </p>
        <pre style={codeBlockStyle}>{`student = {"name": "Ali", "age": 20}
print(student["name"])   # Ali
print(student.get("age")) # 20
print(student.get("grade", "N/A"))  # N/A (key missing)
student["grade"] = "A"    # add or update`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Dictionary methods</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          <code>.keys()</code> returns a view of keys; <code>.values()</code> returns a view of values; <code>.items()</code> returns (key, value) pairs. <code>.get(key, default)</code> safely gets a value. <code>.pop(key)</code> removes and returns the value. <code>.update(other)</code> merges another dict. <code>key in d</code> checks if a key exists.
        </p>
        <pre style={codeBlockStyle}>{`d = {"a": 1, "b": 2, "c": 3}
print(list(d.keys()))    # ['a', 'b', 'c']
print(list(d.values()))  # [1, 2, 3]
for k, v in d.items():
    print(k, v)
print("b" in d)          # True
d.pop("b")               # removes 'b', returns 2`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Set basics and uniqueness</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Sets are unordered collections of unique, hashable elements. Create with <code>{'{}'}</code> (not empty—<code>set()</code> for empty) or <code>set(iterable)</code>. Duplicates are automatically removed. Use for membership tests (<code>x in s</code>), removing duplicates, and set math (union, intersection, difference).
        </p>
        <pre style={codeBlockStyle}>{`nums = {1, 2, 2, 3, 3, 3}
print(nums)   # {1, 2, 3}  (duplicates removed)
empty = set() # empty set (not {} — that's a dict)
print(2 in nums)   # True
nums.add(4)
nums.discard(2)    # remove if present`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>4. Removing duplicates from a list using a set</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>
          Convert a list to a set to remove duplicates, then back to a list if you need order: <code>list(set(my_list))</code>. Note: order is not preserved (sets are unordered). To preserve order while removing duplicates (Python 3.7+), you can use <code>dict.fromkeys(my_list)</code> then <code>list(...)</code>, or iterate and append to a new list if not seen.
        </p>
        <pre style={codeBlockStyle}>{`list_with_dupes = [1, 2, 2, 3, 1, 4, 3]
unique = list(set(list_with_dupes))
print(unique)   # order may vary: e.g. [1, 2, 3, 4]

# Preserve order (Python 3.7+ dict preserves insertion order)
ordered_unique = list(dict.fromkeys(list_with_dupes))
print(ordered_unique)   # [1, 2, 3, 4]`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation on this topic, see the <a href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries" target="_blank" rel="noopener noreferrer" style={linkStyle}>Python Tutorial — Dictionaries</a>, <a href="https://docs.python.org/3/tutorial/datastructures.html#sets" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sets</a>, and <a href="https://docs.python.org/3/library/stdtypes.html#mapping-types-dict" target="_blank" rel="noopener noreferrer" style={linkStyle}>Mapping Types (dict)</a> (python.org).
      </p>
    </PythonMonth1TopicLayout>
  )
}
