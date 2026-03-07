'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonJsonCsv() {
  return (
    <PythonTopicLayout title="Working with JSON and CSV" week={9} month={3}>
      <p style={{ marginBottom: '16px' }}>Read and write CSV and JSON. Convert data and parse structured formats.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>CSV reading/writing with <code>csv</code> module</li>
        <li>JSON basics and <code>json</code> module</li>
        <li>Data conversion and parsing</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import csv
with open("data.csv") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

import json
d = json.loads('{"a": 1}')
print(d["a"])`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
