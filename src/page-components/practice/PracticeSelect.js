'use client'

import React, { useState } from 'react'
import '../../styles/base.css'

const PRACTICE_OPTIONS = [
  { value: 'ui', label: 'UI Practice Examples', path: '/practice/examples' },
  { value: 'api', label: 'API Practice Examples', path: '/practice/api-examples' },
  { value: 'performance', label: 'Performance Practice Example', path: '/practice/performance-examples' },
  { value: 'appium-ios-emulator', label: 'Appium iOS (Emulator) Practice Example', path: '/practice/appium-ios-emulator' },
  { value: 'appium-android-emulator', label: 'Appium Android (Emulator) Practice Example', path: '/practice/appium-android-emulator' },
  { value: 'appium-ios-device', label: 'Appium iOS (Real Device) Practice Example', path: '/practice/appium-ios-device' },
  { value: 'appium-android-device', label: 'Appium Android (Device) Practice Example', path: '/practice/appium-android-device' }
]

export default function PracticeSelect(props) {
  const { history } = props
  const [selected, setSelected] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSelected(value)
    if (value) {
      const option = PRACTICE_OPTIONS.find((o) => o.value === value)
      if (option && history && typeof history.push === 'function') {
        history.push(option.path)
      }
    }
  }

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          backgroundColor: '#ffffff',
          padding: '48px 40px',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(226, 232, 240, 0.8)'
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '8px',
            textAlign: 'center'
          }}
        >
          Labs – Practice Type
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: '#64748b',
            marginBottom: '32px',
            textAlign: 'center',
            lineHeight: 1.5
          }}
        >
          Choose a practice category to continue.
        </p>
        <label
          htmlFor="practice-type-select"
          style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#334155',
            marginBottom: '10px'
          }}
        >
          Practice type
        </label>
        <select
          id="practice-type-select"
          value={selected}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '14px 16px',
            fontSize: '16px',
            color: '#1e293b',
            backgroundColor: '#ffffff',
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            cursor: 'pointer',
            outline: 'none',
            appearance: 'auto',
            fontFamily: 'inherit'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea'
            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.2)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e2e8f0'
            e.target.style.boxShadow = 'none'
          }}
        >
          <option value="">Select practice type...</option>
          {PRACTICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </main>
  )
}
