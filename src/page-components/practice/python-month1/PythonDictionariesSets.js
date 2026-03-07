'use client'

import React from 'react'
import PythonMonth1TopicLayout from './PythonMonth1TopicLayout'

export default function PythonDictionariesSets() {
  return (
    <PythonMonth1TopicLayout title="Dictionaries and Sets" week={4}>
      <p style={{ marginBottom: '16px' }}>
        Store key-value pairs with dictionaries and unique values with sets. Use dictionary methods and remove duplicates with sets.
      </p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you’ll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Dictionary creation and access by key</li>
        <li>Dictionary methods: <code>.keys()</code>, <code>.values()</code>, <code>.get()</code></li>
        <li>Set basics and uniqueness</li>
        <li>Removing duplicates from a list using a set</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>
{`student = {"name": "Ali", "age": 20}
print(student["name"])   # Ali
print(student.get("grade", "N/A"))

nums = {1, 2, 2, 3}
print(nums)   # {1, 2, 3}  (duplicates removed)
list_with_dupes = [1, 2, 2, 3]
unique = list(set(list_with_dupes))`}
      </pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.
      </p>
    </PythonMonth1TopicLayout>
  )
}
