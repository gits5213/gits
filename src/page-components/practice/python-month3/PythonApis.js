'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonApis() {
  return (
    <PythonTopicLayout title="APIs with Python" week={9} month={3}>
      <p style={{ marginBottom: '24px' }}>Use the <code>requests</code> library to call APIs. Send GET requests and parse JSON responses. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. What is an API</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>An API (Application Programming Interface) is a way for programs to talk to a service over the network. REST APIs use HTTP: you send a request (GET, POST, etc.) to a URL and get a response (often JSON). Many public APIs require no key (e.g. GitHub API); others need an API key in headers or query params.</p>
        <pre style={codeBlockStyle}>{`# Example: GET request returns data
# pip install requests
import requests
r = requests.get("https://api.github.com")
print(r.status_code)   # 200
print(r.headers["Content-Type"])   # application/json`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. requests library and GET</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Install with <code>pip install requests</code>. <code>requests.get(url)</code> sends a GET request and returns a Response object. Use <code>.status_code</code> for the HTTP status (200 = OK). Use <code>.text</code> for the raw body or <code>.json()</code> to parse JSON. Pass query params as <code>{'params={\'key\': \'value\'}'}</code> or in the URL.</p>
        <pre style={codeBlockStyle}>{`import requests
r = requests.get("https://api.github.com")
data = r.json()
print(data.get("current_user_url"))

# With query params
r = requests.get("https://api.example.com/search", params={"q": "python"})`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Parsing JSON response</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Call <code>response.json()</code> to get a Python dict (or list). Then access keys: <code>data["key"]</code> or <code>data.get("key", default)</code>. Handle errors: check <code>response.raise_for_status()</code> or <code>status_code</code> before parsing. For non-JSON responses use <code>response.text</code> and parse manually if needed.</p>
        <pre style={codeBlockStyle}>{`r = requests.get("https://api.github.com")
if r.status_code == 200:
    data = r.json()
    print(data.get("current_user_url"))
else:
    print("Error", r.status_code)

# Nested data
# data["key"]["nested_key"]`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. For official documentation, see <a href="https://docs.python.org/3/library/urllib.request.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>urllib.request</a> (stdlib) and <a href="https://docs.python.org/3/library/json.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>json</a>. For the <code>requests</code> library, see <a href="https://requests.readthedocs.io/" target="_blank" rel="noopener noreferrer" style={linkStyle}>requests docs</a>.
      </p>
    </PythonTopicLayout>
  )
}
