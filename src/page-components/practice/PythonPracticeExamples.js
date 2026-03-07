'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import '../../styles/base.css'

// Topics by month from the Python (docs) 6-month course plan — matches resPython.js weekPlan
const PYTHON_MONTH_EXAMPLES = [
  {
    month: 1,
    title: 'Month 1 — Python fundamentals',
    examples: [
      { name: 'Introduction to Python', week: 1, path: '/practice/python-intro' },
      { name: 'Variables and Data Types', week: 1, path: '/practice/python-variables-data-types' },
      { name: 'Operators and Expressions', week: 2, path: '/practice/python-operators-expressions' },
      { name: 'Conditional Statements', week: 2, path: '/practice/python-conditional-statements' },
      { name: 'Loops', week: 3, path: '/practice/python-loops' },
      { name: 'Strings', week: 3, path: '/practice/python-strings' },
      { name: 'Lists and Tuples', week: 4, path: '/practice/python-lists-tuples' },
      { name: 'Dictionaries and Sets', week: 4, path: '/practice/python-dictionaries-sets' }
    ]
  },
  {
    month: 2,
    title: 'Month 2 — Functions, modules & OOP',
    examples: [
      { name: 'Functions', week: 5, path: '/practice/python-functions' },
      { name: 'Advanced Functions', week: 5, path: '/practice/python-advanced-functions' },
      { name: 'Modules and Packages', week: 6, path: '/practice/python-modules-packages' },
      { name: 'File Handling', week: 6, path: '/practice/python-file-handling' },
      { name: 'Exception Handling', week: 7, path: '/practice/python-exception-handling' },
      { name: 'Object-Oriented Programming Part 1', week: 7, path: '/practice/python-oop-part1' },
      { name: 'Object-Oriented Programming Part 2', week: 8, path: '/practice/python-oop-part2' },
      { name: 'Mini Project 1', week: 8, path: '/practice/python-mini-project-1' }
    ]
  },
  {
    month: 3,
    title: 'Month 3 — Data, APIs & automation',
    examples: [
      { name: 'Working with JSON and CSV', week: 9, path: '/practice/python-json-csv' },
      { name: 'APIs with Python', week: 9, path: '/practice/python-apis' },
      { name: 'SQLite Database Basics', week: 10, path: '/practice/python-sqlite' },
      { name: 'Git and GitHub', week: 10, path: '/practice/python-git-github' },
      { name: 'Debugging and Testing', week: 11, path: '/practice/python-debugging-testing' },
      { name: 'Python Automation', week: 11, path: '/practice/python-automation' },
      { name: 'Problem Solving with Python', week: 12, path: '/practice/python-problem-solving' },
      { name: 'Mini Project 2', week: 12, path: '/practice/python-mini-project-2' }
    ]
  },
  {
    month: 4,
    title: 'Month 4 — Data science & ML',
    examples: [
      { name: 'Introduction to Data Science', week: 13, path: '/practice/python-intro-data-science' },
      { name: 'NumPy Basics', week: 13, path: '/practice/python-numpy' },
      { name: 'Pandas Part 1', week: 14, path: '/practice/python-pandas-part1' },
      { name: 'Pandas Part 2', week: 14, path: '/practice/python-pandas-part2' },
      { name: 'Data Visualization', week: 15, path: '/practice/python-data-visualization' },
      { name: 'Advanced Data Analysis', week: 15, path: '/practice/python-advanced-data-analysis' },
      { name: 'Intro to Machine Learning Concepts', week: 16, path: '/practice/python-intro-ml' },
      { name: 'Scikit-learn Basics', week: 16, path: '/practice/python-scikit-learn' }
    ]
  },
  {
    month: 5,
    title: 'Month 5 — Cyber security with Python',
    examples: [
      { name: 'Introduction to Cyber Security with Python', week: 17, path: '/practice/python-intro-cyber-security' },
      { name: 'Log Analysis with Python', week: 17, path: '/practice/python-log-analysis' },
      { name: 'Networking Basics for Python', week: 18, path: '/practice/python-networking-basics' },
      { name: 'Security Scripting', week: 18, path: '/practice/python-security-scripting' },
      { name: 'Regular Expressions for Security and Data Parsing', week: 19, path: '/practice/python-regex-security' },
      { name: 'Hashing and Basic Cryptography Concepts', week: 19, path: '/practice/python-hashing-cryptography' },
      { name: 'API Security and Data Collection Basics', week: 20, path: '/practice/python-api-security' },
      { name: 'Cyber Security Mini Project', week: 20, path: '/practice/python-cyber-mini-project' }
    ]
  },
  {
    month: 6,
    title: 'Month 6 — Advanced & career',
    examples: [
      { name: 'Advanced Python Concepts', week: 21, path: '/practice/python-advanced-concepts' },
      { name: 'Clean Code and Project Architecture', week: 21, path: '/practice/python-clean-code' },
      { name: 'Career Project Planning – Data Science', week: 22, path: '/practice/python-career-project-ds' },
      { name: 'Career Project Planning – Cyber Security', week: 22, path: '/practice/python-career-project-cyber' },
      { name: 'Capstone Development', week: 23, path: '/practice/python-capstone' },
      { name: 'Final Project Presentation', week: 24, path: '/practice/python-final-presentation' },
      { name: 'Career Readiness and Interview Preparation', week: 24, path: '/practice/python-career-readiness' }
    ]
  }
]

export default function PythonPracticeExamples() {
  const [selectedMonth, setSelectedMonth] = useState(1)
  const current = PYTHON_MONTH_EXAMPLES.find((m) => m.month === selectedMonth) || PYTHON_MONTH_EXAMPLES[0]

  return (
    <main
      id="python-practice-examples-main"
      data-testid="python-practice-examples-main"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
      }}
    >
      <div
        id="python-practice-examples-container"
        data-testid="python-practice-examples-container"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '40px 20px'
        }}
      >
        <div
          id="python-practice-examples-header"
          data-testid="python-practice-examples-header"
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            position: 'relative'
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(55, 118, 171, 0.25)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '24px'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                opacity: 0.5
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1
                id="python-practice-examples-title"
                data-testid="python-practice-examples-title"
                style={{
                  fontSize: '42px',
                  color: '#1e293b',
                  marginBottom: '12px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)'
                }}
              >
                Python Practice Examples
              </h1>
              <p
                id="python-practice-examples-subtitle"
                data-testid="python-practice-examples-subtitle"
                style={{
                  fontSize: '18px',
                  color: '#334155',
                  margin: 0,
                  textAlign: 'center',
                  fontWeight: '500'
                }}
              >
                Practice by month — aligned with the Python: Data Science & Cyber Security curriculum
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginBottom: '24px',
            maxWidth: '400px'
          }}
        >
          <label
            htmlFor="python-month-select"
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#334155',
              marginBottom: '8px'
            }}
          >
            Select month
          </label>
          <select
            id="python-month-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '16px',
              color: '#1e293b',
              backgroundColor: '#ffffff',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              cursor: 'pointer',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          >
            {PYTHON_MONTH_EXAMPLES.map((m) => (
              <option key={m.month} value={m.month}>
                {m.title}
              </option>
            ))}
          </select>
        </div>

        <div
          id="python-practice-examples-table-container"
          data-testid="python-practice-examples-table-container"
          style={{
            marginBottom: '40px',
            overflowX: 'auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e9ecef'
          }}
        >
          <table
            id="python-practice-examples-table"
            data-testid="python-practice-examples-table"
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '500px'
            }}
          >
            <thead>
              <tr
                style={{
                  background: 'linear-gradient(135deg, #3776ab 0%, #2d5a87 100%)',
                  color: '#ffffff'
                }}
              >
                <th
                  style={{
                    padding: '18px 20px',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: '600',
                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                  }}
                >
                  #
                </th>
                <th
                  style={{
                    padding: '18px 20px',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: '600',
                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                  }}
                >
                  Practice example (Week)
                </th>
                <th
                  style={{
                    padding: '18px 20px',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: '600',
                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {current.examples.map((ex, index) => (
                <tr
                  key={`${current.month}-${index}`}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                    borderBottom: '1px solid #e9ecef'
                  }}
                >
                  <td
                    style={{
                      padding: '18px 20px',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      borderRight: '1px solid #e9ecef'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #3776ab 0%, #2d5a87 100%)',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}
                    >
                      {index + 1}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: '18px 20px',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#333',
                      lineHeight: '1.6',
                      borderRight: '1px solid #e9ecef'
                    }}
                  >
                    {ex.name} <span style={{ color: '#64748b', fontWeight: '400' }}>(Week {ex.week})</span>
                  </td>
                  <td style={{ padding: '18px 20px' }}>
                    <Link
                      href={ex.path || '/docs/python'}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        background: 'linear-gradient(135deg, #3776ab 0%, #2d5a87 100%)',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(55, 118, 171, 0.3)'
                      }}
                    >
                      <span>{ex.path ? 'View' : 'View curriculum'}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            textAlign: 'center',
            padding: '24px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '16px',
            border: '1px solid #bae6fd',
            marginTop: '24px'
          }}
        >
          <p style={{ fontSize: '15px', color: '#0c4a6e', margin: 0, fontWeight: '500' }}>
            All topics and step-by-step labs are in the{' '}
            <Link href="/docs/python" style={{ color: '#0369a1', fontWeight: '600', textDecoration: 'underline' }}>
              Python curriculum
            </Link>
            . Use the dropdown above to switch months and practice in order.
          </p>
        </div>
      </div>
    </main>
  )
}
