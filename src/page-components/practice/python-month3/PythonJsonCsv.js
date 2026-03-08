'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonJsonCsv() {
  return (
    <PythonTopicLayout title="Working with JSON and CSV" week={9} month={3}>
      <p style={{ marginBottom: '24px' }}>Read and write CSV and JSON. Convert data and parse structured formats. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. CSV reading and writing with the csv module</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use the built-in <code>csv</code> module. Open the file with <code>open()</code> then <code>csv.reader(f)</code> for rows as lists, or <code>csv.DictReader(f)</code> for rows as dicts (first row as keys). For writing: <code>csv.writer(f)</code> and <code>writerow(row)</code>, or <code>csv.DictWriter</code> with <code>writeheader()</code> and <code>writerow(dict)</code>.</p>
        <pre style={codeBlockStyle}>{`import csv
# Read
with open("data.csv") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)   # each row is a list

# Write
with open("out.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["Name", "Age"])
    w.writerow(["Ali", 25])`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. JSON basics and the json module</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>JSON is text that represents objects and arrays. Use <code>json.loads(string)</code> to parse a string into a Python dict/list. Use <code>json.dumps(obj)</code> to convert a dict/list into a JSON string. Use <code>json.load(file)</code> and <code>json.dump(obj, file)</code> for file I/O. Keys must be strings in JSON.</p>
        <pre style={codeBlockStyle}>{`import json
# String to dict
d = json.loads('{"a": 1, "b": [2, 3]}')
print(d["a"], d["b"])   # 1 [2, 3]

# Dict to string
s = json.dumps({"name": "Ali", "age": 20})
print(s)

# File
with open("data.json") as f:
    data = json.load(f)`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Data conversion and parsing structured data</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Convert between CSV rows and dicts using <code>DictReader</code>/<code>DictWriter</code>. Parse JSON from API responses or config files with <code>json.loads(response.text)</code>. Handle encoding (e.g. <code>encoding="utf-8"</code>) when reading/writing files. Validate or normalize data after parsing (e.g. type conversion, required keys).</p>
        <pre style={codeBlockStyle}>{`# CSV with headers as dicts
with open("data.csv") as f:
    for row in csv.DictReader(f):
        print(row["Name"], row["Age"])

# JSON from API-style string
text = '{"id": 1, "name": "Item"}'
obj = json.loads(text)
print(obj["name"])`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>csv</a> and <a href="https://docs.python.org/3/library/json.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>json</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
