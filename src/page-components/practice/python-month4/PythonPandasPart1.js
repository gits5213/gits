'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonPandasPart1() {
  return (
    <PythonTopicLayout title="Pandas Part 1" week={14} month={4}>
      <p style={{ marginBottom: '16px' }}>Work with Series and DataFrames. Load CSV, inspect data, and select columns and rows.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Series and DataFrames</li>
        <li>Loading CSV and inspecting data</li>
        <li>Selecting columns and rows</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import pandas as pd
df = pd.read_csv("yourfile.csv")
print(df.head())
print(df["column_name"])
print(df.describe())`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
