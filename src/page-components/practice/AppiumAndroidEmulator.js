'use client'

import React from 'react'
import Link from 'next/link'
import '../../styles/base.css'

export default function AppiumAndroidEmulator() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        backgroundColor: '#f8f9fa'
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          backgroundColor: '#ffffff',
          padding: '48px 40px',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}
      >
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          Appium Android (Emulator) Practice Example
        </h1>
        <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '24px', lineHeight: 1.6 }}>
          Appium Android emulator practice content is coming soon. Use the link below to return to practice type selection.
        </p>
        <Link
          href="/practice/select"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#00416A',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          ← Back to Practice Type
        </Link>
      </div>
    </main>
  )
}
