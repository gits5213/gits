'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

export default function PythonSqlite() {
  return (
    <PythonTopicLayout title="SQLite Database Basics" week={10} month={3}>
      <p style={{ marginBottom: '16px' }}>Connect to SQLite, create tables, and run insert, update, delete, and fetch operations.</p>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>What you'll practice</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li>Database concepts and SQLite connection</li>
        <li>Create tables, insert, update, delete, fetch</li>
      </ul>
      <h3 style={{ color: '#00416A', fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Try it</h3>
      <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>{`import sqlite3
conn = sqlite3.connect("test.db")
cur = conn.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)")
cur.execute("INSERT INTO users VALUES (1, 'Ali')")
conn.commit()
cur.execute("SELECT * FROM users")
print(cur.fetchall())`}</pre>
      <p style={{ marginTop: '16px', color: '#64748b', fontSize: '15px' }}>For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={{ color: '#3776ab', fontWeight: '600' }}>Python curriculum</a>.</p>
    </PythonTopicLayout>
  )
}
