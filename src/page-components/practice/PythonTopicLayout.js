'use client'

import React from 'react'
import Link from 'next/link'
import '../../styles/base.css'

export default function PythonTopicLayout({ title, week, month = 1, children }) {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        padding: '40px 20px'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '1px solid #e9ecef'
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #3776ab 0%, #2d5a87 100%)',
            color: '#ffffff',
            padding: '24px 28px',
            borderRadius: '8px',
            marginBottom: '28px'
          }}
        >
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', margin: 0 }}>
            {title}
          </h1>
          <p style={{ fontSize: '15px', opacity: 0.95, margin: 0 }}>Month {month} · Week {week}</p>
        </div>
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
          {children}
        </div>
        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #e9ecef' }}>
          <Link
            href="/practice/python-examples"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#3776ab',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '16px'
            }}
          >
            <span>← Back to Python Practice Examples</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
