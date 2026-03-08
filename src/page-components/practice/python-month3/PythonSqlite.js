'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonSqlite() {
  return (
    <PythonTopicLayout title="SQLite Database Basics" week={10} month={3}>
      <p style={{ marginBottom: '24px' }}>Connect to SQLite, create tables, and run insert, update, delete, and fetch operations. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Database concepts and SQLite connection</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>SQLite is a file-based database (no separate server). Data is stored in a single file. Use <code>sqlite3.connect("file.db")</code> to open or create a database; it returns a connection object. Use <code>conn.cursor()</code> to get a cursor for executing SQL. Close the connection with <code>conn.close()</code> or use a context manager.</p>
        <pre style={codeBlockStyle}>{`import sqlite3
conn = sqlite3.connect("test.db")
cur = conn.cursor()
# ... run SQL ...
conn.close()

# Or with context manager
with sqlite3.connect("test.db") as conn:
    cur = conn.cursor()`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Create tables, insert, update, delete, fetch</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Execute SQL with <code>cur.execute("SQL", params)</code>. Use <code>CREATE TABLE IF NOT EXISTS</code> to define tables. <code>INSERT INTO table VALUES (...)</code> or use placeholders <code>?</code> and a tuple of values. Call <code>conn.commit()</code> after writes. <code>SELECT</code> with <code>cur.fetchone()</code>, <code>cur.fetchall()</code>, or iterate the cursor. <code>UPDATE</code> and <code>DELETE</code> use the same <code>execute</code> + <code>commit</code> pattern.</p>
        <pre style={codeBlockStyle}>{`import sqlite3
conn = sqlite3.connect("test.db")
cur = conn.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)")
cur.execute("INSERT INTO users VALUES (?, ?)", (1, "Ali"))
conn.commit()
cur.execute("SELECT * FROM users")
print(cur.fetchall())   # [(1, 'Ali')]
cur.execute("UPDATE users SET name = ? WHERE id = ?", ("Ali K", 1))
conn.commit()
conn.close()`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/library/sqlite3.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>sqlite3</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
