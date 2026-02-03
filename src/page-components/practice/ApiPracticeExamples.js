'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Quiz from '../../components/practice/tabs/Quiz'
import Scorecard from '../../components/practice/tabs/Scorecard'
import '../../styles/base.css'

const HTTPBIN_BASE = 'https://httpbin.org'

const API_TABS = [
  { label: 'API Practice Examples', id: 0, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { label: 'API Test Cases', id: 1, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { label: 'Quiz', id: 2, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 9H15C14.4477 9 14 8.55228 14 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { label: 'Scorecard', id: 3, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17V7M13 17V7M17 17V7M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>) }
]

// API Test Case sections (similar format to UI Test Cases)
const API_TEST_CASE_SECTIONS = [
  {
    id: 'get-get',
    title: 'GET /get Test Cases',
    endpoint: 'GET https://httpbin.org/get',
    description: 'Test cases for GET /get — verify request data and query args are returned.',
    testCases: [
      {
        id: 'API-TC-001',
        title: 'GET /get — Success returns 200 and JSON with args',
        priority: 'High',
        steps: [
          { step: 1, action: 'Open Postman or send GET request', testData: 'GET ' + HTTPBIN_BASE + '/get', expectedResult: 'Request sent successfully' },
          { step: 2, action: 'Verify HTTP status code', testData: 'N/A', expectedResult: '200 OK' },
          { step: 3, action: 'Verify response body is JSON', testData: 'N/A', expectedResult: 'Content-Type: application/json; body has "args", "url", "headers"' },
          { step: 4, action: 'Send GET with query params ?key=value', testData: 'GET ' + HTTPBIN_BASE + '/get?key=value', expectedResult: 'Response args contain key=value' }
        ]
      }
    ]
  },
  {
    id: 'post-post',
    title: 'POST /post Test Cases',
    endpoint: 'POST https://httpbin.org/post',
    description: 'Test cases for POST /post — verify request body and headers are echoed.',
    testCases: [
      {
        id: 'API-TC-002',
        title: 'POST /post — Success returns 200 with request body',
        priority: 'High',
        steps: [
          { step: 1, action: 'Set method to POST and URL to ' + HTTPBIN_BASE + '/post', testData: 'POST ' + HTTPBIN_BASE + '/post', expectedResult: 'Request configured' },
          { step: 2, action: 'Set header Content-Type: application/json', testData: 'Content-Type: application/json', expectedResult: 'Header set' },
          { step: 3, action: 'Set body to raw JSON', testData: '{"name":"test","value":1}', expectedResult: 'Body set' },
          { step: 4, action: 'Send request', testData: 'N/A', expectedResult: '200 OK; response body "json" contains {"name":"test","value":1}' }
        ]
      }
    ]
  },
  {
    id: 'status-codes',
    title: 'Status Codes Test Cases',
    endpoint: 'GET https://httpbin.org/status/{code}',
    description: 'Test cases for /status/:code — verify API returns expected HTTP status.',
    testCases: [
      {
        id: 'API-TC-003',
        title: 'GET /status/200 — Returns 200',
        priority: 'High',
        steps: [
          { step: 1, action: 'Send GET to ' + HTTPBIN_BASE + '/status/200', testData: 'GET ' + HTTPBIN_BASE + '/status/200', expectedResult: '200 OK' }
        ]
      },
      {
        id: 'API-TC-004',
        title: 'GET /status/404 — Returns 404',
        priority: 'High',
        steps: [
          { step: 1, action: 'Send GET to ' + HTTPBIN_BASE + '/status/404', testData: 'GET ' + HTTPBIN_BASE + '/status/404', expectedResult: '404 Not Found' }
        ]
      },
      {
        id: 'API-TC-005',
        title: 'GET /status/500 — Returns 500',
        priority: 'Medium',
        steps: [
          { step: 1, action: 'Send GET to ' + HTTPBIN_BASE + '/status/500', testData: 'GET ' + HTTPBIN_BASE + '/status/500', expectedResult: '500 Internal Server Error' }
        ]
      }
    ]
  },
  {
    id: 'basic-auth',
    title: 'Basic Auth Test Cases',
    endpoint: 'GET https://httpbin.org/basic-auth/user/passwd',
    description: 'Test cases for HTTP Basic Authentication.',
    testCases: [
      {
        id: 'API-TC-006',
        title: 'Basic Auth — Valid credentials return 200',
        priority: 'High',
        steps: [
          { step: 1, action: 'Send GET with Basic Auth user=user, password=passwd', testData: 'Authorization: Basic dXNlcjpwYXNzd2Q=', expectedResult: '200 OK; body "authenticated": true, "user": "user"' },
          { step: 2, action: 'Verify response JSON', testData: 'N/A', expectedResult: 'JSON contains authenticated, user' }
        ]
      },
      {
        id: 'API-TC-007',
        title: 'Basic Auth — Missing/invalid credentials return 401',
        priority: 'High',
        steps: [
          { step: 1, action: 'Send GET without Authorization header', testData: 'No auth header', expectedResult: '401 Unauthorized' }
        ]
      }
    ]
  },
  {
    id: 'headers',
    title: 'Headers Test Cases',
    endpoint: 'GET https://httpbin.org/headers',
    description: 'Test cases for /headers — verify request headers are returned.',
    testCases: [
      {
        id: 'API-TC-008',
        title: 'GET /headers — Returns request headers',
        priority: 'High',
        steps: [
          { step: 1, action: 'Send GET to ' + HTTPBIN_BASE + '/headers', testData: 'GET ' + HTTPBIN_BASE + '/headers', expectedResult: '200 OK' },
          { step: 2, action: 'Verify response body contains headers object', testData: 'N/A', expectedResult: 'JSON "headers" contains User-Agent, Host, etc.' }
        ]
      }
    ]
  },
  {
    id: 'delay',
    title: 'Delay Test Cases',
    endpoint: 'GET https://httpbin.org/delay/1',
    description: 'Test cases for /delay/:n — verify delayed response.',
    testCases: [
      {
        id: 'API-TC-009',
        title: 'GET /delay/1 — Response after ~1 second',
        priority: 'Medium',
        steps: [
          { step: 1, action: 'Send GET to ' + HTTPBIN_BASE + '/delay/1', testData: 'GET ' + HTTPBIN_BASE + '/delay/1', expectedResult: '200 OK after ~1 second delay' }
        ]
      }
    ]
  },
  {
    id: 'best-practices',
    title: 'API Testing Best Practices — Manual Test Cases',
    endpoint: 'Apply to any API under test',
    description: 'Reusable best-practice test cases to include in manual API test plans (status, headers, performance, schema, errors, security).',
    testCases: [
      {
        id: 'API-BP-001',
        title: 'Verify HTTP status code for success and error scenarios',
        priority: 'High',
        steps: [
          { step: 1, action: 'For happy-path request, verify response status', testData: 'e.g. GET /resource', expectedResult: '200 OK (or 201 Created for POST)' },
          { step: 2, action: 'For not-found resource, verify status', testData: 'e.g. GET /resource/invalid-id', expectedResult: '404 Not Found' },
          { step: 3, action: 'For unauthorized access, verify status', testData: 'Request without valid auth', expectedResult: '401 Unauthorized' },
          { step: 4, action: 'For forbidden access, verify status', testData: 'Valid auth but insufficient permissions', expectedResult: '403 Forbidden' },
          { step: 5, action: 'For invalid input (bad request), verify status', testData: 'Missing required field or invalid format', expectedResult: '400 Bad Request' }
        ]
      },
      {
        id: 'API-BP-002',
        title: 'Verify response Content-Type and headers',
        priority: 'High',
        steps: [
          { step: 1, action: 'Check Content-Type header matches contract', testData: 'e.g. application/json', expectedResult: 'Content-Type is application/json (or API spec value)' },
          { step: 2, action: 'Verify charset when applicable', testData: 'N/A', expectedResult: 'e.g. application/json; charset=utf-8' },
          { step: 3, action: 'Check cache/security headers if required', testData: 'N/A', expectedResult: 'No sensitive data cached; security headers present per policy' }
        ]
      },
      {
        id: 'API-BP-003',
        title: 'Verify response time (performance) within SLA',
        priority: 'High',
        steps: [
          { step: 1, action: 'Record response time for critical endpoints', testData: 'Use Postman/DevTools or timer', expectedResult: 'Response time within agreed SLA (e.g. < 2s for read)' },
          { step: 2, action: 'Repeat under normal load if possible', testData: 'Multiple sequential or parallel requests', expectedResult: 'No significant degradation; times remain acceptable' }
        ]
      },
      {
        id: 'API-BP-004',
        title: 'Verify response body structure and required fields',
        priority: 'High',
        steps: [
          { step: 1, action: 'Confirm response is valid JSON (or expected format)', testData: 'Parse response body', expectedResult: 'Valid JSON; no parse errors' },
          { step: 2, action: 'Verify all required fields per API contract are present', testData: 'API spec / schema', expectedResult: 'Required fields present; types match (string, number, boolean, array, object)' },
          { step: 3, action: 'Check for unexpected extra fields if contract is strict', testData: 'N/A', expectedResult: 'No undocumented fields, or extra fields are allowed per design' }
        ]
      },
      {
        id: 'API-BP-005',
        title: 'Verify error response format for 4xx/5xx',
        priority: 'High',
        steps: [
          { step: 1, action: 'Trigger 400, 401, 404, 500 and capture response body', testData: 'Invalid input, no auth, invalid ID, server error simulation', expectedResult: 'Consistent error payload (e.g. code, message, details)' },
          { step: 2, action: 'Verify error message does not leak internal details', testData: 'N/A', expectedResult: 'User-facing message only; no stack traces or internal paths in body' },
          { step: 3, action: 'Verify error format matches API documentation', testData: 'API spec', expectedResult: 'Same structure across endpoints (e.g. { "error": { "code": "...", "message": "..." } })' }
        ]
      },
      {
        id: 'API-BP-006',
        title: 'Verify authentication and authorization',
        priority: 'High',
        steps: [
          { step: 1, action: 'Call protected endpoint without credentials', testData: 'No Authorization header / token', expectedResult: '401 Unauthorized (or 403)' },
          { step: 2, action: 'Call with invalid/expired token', testData: 'Invalid or expired token', expectedResult: '401 Unauthorized with clear message' },
          { step: 3, action: 'Call with valid credentials', testData: 'Valid token / Basic auth', expectedResult: '200/201 as per endpoint; resource returned' },
          { step: 4, action: 'Call with valid user but no access to resource', testData: 'Different user’s resource ID', expectedResult: '403 Forbidden or 404 depending on design' }
        ]
      },
      {
        id: 'API-BP-007',
        title: 'Verify input validation (required, format, boundaries)',
        priority: 'High',
        steps: [
          { step: 1, action: 'Omit required field in request body/query', testData: 'e.g. POST without "name"', expectedResult: '400 Bad Request; message indicates missing/invalid field' },
          { step: 2, action: 'Send wrong data type (e.g. string for number)', testData: 'Invalid type in JSON body', expectedResult: '400 Bad Request' },
          { step: 3, action: 'Send boundary values (min/max length, min/max number)', testData: 'Empty string, very long string, zero, negative', expectedResult: '400 or 200 per business rules; no server crash' }
        ]
      },
      {
        id: 'API-BP-008',
        title: 'Verify idempotency and method behavior',
        priority: 'Medium',
        steps: [
          { step: 1, action: 'GET same resource multiple times', testData: 'Same URL, same params', expectedResult: 'Same response; no side effects' },
          { step: 2, action: 'If API supports idempotency key (e.g. POST), send same key twice', testData: 'Idempotency-Key header with same value', expectedResult: 'Second request returns same result; no duplicate resource' },
          { step: 3, action: 'Verify PUT/PATCH/DELETE semantics per API spec', testData: 'N/A', expectedResult: 'PUT replaces; PATCH partial update; DELETE removes or returns 404' }
        ]
      },
      {
        id: 'API-BP-009',
        title: 'Verify pagination, sorting, and filtering (if applicable)',
        priority: 'Medium',
        steps: [
          { step: 1, action: 'Request first page with page size', testData: 'e.g. ?page=1&size=10', expectedResult: '200; body has expected structure (items, total, next/prev)' },
          { step: 2, action: 'Request next page and verify no duplicate items', testData: '?page=2&size=10', expectedResult: 'Different set of items; no overlap with page 1' },
          { step: 3, action: 'Apply filter/sort params per API spec', testData: '?sort=name&filter=active', expectedResult: 'Results match filter and sort order' }
        ]
      },
      {
        id: 'API-BP-010',
        title: 'Verify security and safe handling of sensitive data',
        priority: 'High',
        steps: [
          { step: 1, action: 'Confirm credentials/tokens not in URL or logs', testData: 'Inspect request URL and logs', expectedResult: 'Auth in headers only; no password in query/body logs' },
          { step: 2, action: 'Check response does not expose internal IDs or PII unnecessarily', testData: 'N/A', expectedResult: 'Only necessary fields returned; no internal system details' },
          { step: 3, action: 'Verify HTTPS in production', testData: 'Endpoint URL', expectedResult: 'All calls over HTTPS' }
        ]
      }
    ]
  }
]

const API_EXAMPLES = [
  { name: 'GET /get', method: 'GET', path: '/get', description: 'Returns GET request data and args' },
  { name: 'POST /post', method: 'POST', path: '/post', description: 'Returns POST request data and body' },
  { name: 'PUT /put', method: 'PUT', path: '/put', description: 'Returns PUT request data' },
  { name: 'PATCH /patch', method: 'PATCH', path: '/patch', description: 'Returns PATCH request data' },
  { name: 'DELETE /delete', method: 'DELETE', path: '/delete', description: 'Returns DELETE request data' },
  { name: 'GET /headers', method: 'GET', path: '/headers', description: 'Returns request headers' },
  { name: 'GET /ip', method: 'GET', path: '/ip', description: 'Returns origin IP' },
  { name: 'GET /user-agent', method: 'GET', path: '/user-agent', description: 'Returns user-agent header' },
  { name: 'GET /uuid', method: 'GET', path: '/uuid', description: 'Returns UUID4' },
  { name: 'GET /anything', method: 'GET', path: '/anything', description: 'Returns request data (any method)' },
  { name: 'GET /status/200', method: 'GET', path: '/status/200', description: 'Returns HTTP 200' },
  { name: 'GET /status/404', method: 'GET', path: '/status/404', description: 'Returns HTTP 404' },
  { name: 'GET /status/500', method: 'GET', path: '/status/500', description: 'Returns HTTP 500' },
  { name: 'GET /delay/1', method: 'GET', path: '/delay/1', description: 'Delays response by 1 second' },
  { name: 'GET /basic-auth/user/passwd', method: 'GET', path: '/basic-auth/user/passwd', description: 'HTTP Basic Auth (user: user, pass: passwd)' },
  { name: 'GET /bearer', method: 'GET', path: '/bearer', description: 'Bearer token auth (header: Authorization: Bearer &lt;token&gt;)' },
  { name: 'GET /redirect/1', method: 'GET', path: '/redirect/1', description: '302 redirect once' },
  { name: 'GET /redirect/2', method: 'GET', path: '/redirect/2', description: '302 redirect twice' },
  { name: 'GET /cookies', method: 'GET', path: '/cookies', description: 'Returns cookie data' },
  { name: 'GET /response-headers', method: 'GET', path: '/response-headers', description: 'Returns response headers (supports query params)' },
  { name: 'GET /gzip', method: 'GET', path: '/gzip', description: 'Returns gzip-encoded response' },
  { name: 'GET /deflate', method: 'GET', path: '/deflate', description: 'Returns deflate-encoded response' },
  { name: 'GET /html', method: 'GET', path: '/html', description: 'Returns simple HTML page' },
  { name: 'GET /bytes/128', method: 'GET', path: '/bytes/128', description: 'Returns 128 random bytes' },
  { name: 'GET /json', method: 'GET', path: '/json', description: 'Returns JSON response' }
]

export default function ApiPracticeExamples(props) {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }))
  }

  return (
    <div className="category-tabs">
      {/* Tab Navigation - same style as practice page */}
      <div style={{
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        borderBottom: '1px solid #e9ecef',
        marginBottom: '30px',
        position: 'sticky',
        top: '64px',
        zIndex: 100,
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px',
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin'
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 'min-content',
            flexWrap: 'wrap'
          }}>
            {API_TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    fontSize: '16px',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? '#ffffff' : '#495057',
                    background: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#ffffff',
                    border: isActive ? 'none' : '2px solid #e9ecef',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    whiteSpace: 'nowrap',
                    fontFamily: 'inherit',
                    outline: 'none',
                    boxShadow: isActive ? '0 8px 16px rgba(102, 126, 234, 0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
                    transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%)'
                      e.currentTarget.style.borderColor = '#667eea'
                      e.currentTarget.style.color = '#667eea'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.15)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#ffffff'
                      e.currentTarget.style.borderColor = '#e9ecef'
                      e.currentTarget.style.color = '#495057'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)'
                    }
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>{tab.icon}</span>
                  <span style={{ position: 'relative', zIndex: 1 }}>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <section>
        <div className="content">
          {activeTab === 2 && <Quiz />}
          {activeTab === 3 && <Scorecard key="scorecard" {...props} />}
          {(activeTab === 0 || activeTab === 1) && (
    <main
      id="api-practice-examples-main"
      data-testid="api-practice-examples-main"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
      }}
    >
      <div
        id="api-practice-examples-container"
        data-testid="api-practice-examples-container"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '40px 20px'
        }}
      >
        {activeTab === 0 && (
          <>
        {/* Modern Header Section - same as practice/examples */}
        <div
          id="api-practice-examples-header"
          data-testid="api-practice-examples-header"
          style={{
            textAlign: 'center',
            marginBottom: '50px',
            position: 'relative'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '30px'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              opacity: 0.3
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1
                id="api-practice-examples-title"
                data-testid="api-practice-examples-title"
                style={{
                  fontSize: '42px',
                  color: '#ffffff',
                  marginBottom: '15px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Welcome to GITS API Practice Center
              </h1>
              <p
                id="api-practice-examples-subtitle"
                data-testid="api-practice-examples-subtitle"
                style={{
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.95)',
                  margin: 0,
                  textAlign: 'center',
                  fontWeight: '400'
                }}
              >
                Explore our comprehensive collection of API practice examples
              </p>
            </div>
          </div>
        </div>

        {/* API Practice Examples Table - same format as practice/examples */}
        <div
          id="api-practice-examples-table-container"
          data-testid="api-practice-examples-table-container"
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
            id="api-practice-examples-table"
            data-testid="api-practice-examples-table"
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '600px'
            }}
          >
            <thead>
              <tr style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#ffffff'
              }}>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: '600',
                  borderBottom: '2px solid rgba(255,255,255,0.2)'
                }}>
                  #
                </th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: '600',
                  borderBottom: '2px solid rgba(255,255,255,0.2)'
                }}>
                  Practice Example
                </th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: '600',
                  borderBottom: '2px solid rgba(255,255,255,0.2)'
                }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {API_EXAMPLES.map((example, index) => (
                  <tr
                    key={example.path}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                      borderBottom: '1px solid #e9ecef',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e3f2fd'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f8f9fa'
                    }}
                  >
                    <td style={{
                      padding: '18px 20px',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      borderRight: '1px solid #e9ecef',
                      textAlign: 'left'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        boxShadow: '0 2px 6px rgba(102, 126, 234, 0.3)'
                      }}>
                        {index + 1}
                      </span>
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#333',
                      lineHeight: '1.6',
                      borderRight: '1px solid #e9ecef',
                      textAlign: 'left'
                    }}>
                      {example.name}
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      textAlign: 'left'
                    }}>
                      <button
                        type="button"
                        onClick={() => {
                          if (typeof window === 'undefined') return
                          const isGet = example.method === 'GET'
                          const url = isGet ? `${HTTPBIN_BASE}${example.path}` : `${HTTPBIN_BASE}/`
                          if (url) window.open(url, '_blank', 'noopener,noreferrer')
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 20px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: '600',
                          fontSize: '14px',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)'
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)'
                        }}
                        title={example.method === 'GET' ? `Open ${example.path} in new tab` : 'Use Postman/curl to send ' + example.method}
                      >
                        <span>View</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer and Back link - only for tab 0 */}
        <div
          id="api-practice-examples-footer-note"
          data-testid="api-practice-examples-footer-note"
          style={{
            textAlign: 'center',
            padding: '24px',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            borderRadius: '16px',
            border: '1px solid #e9ecef',
            marginTop: '40px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}
        >
          <p id="api-practice-examples-footer-text" data-testid="api-practice-examples-footer-text" style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: '500' }}>
            Powered by <a href="https://httpbin.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', fontWeight: '600' }}>httpbin.org</a>
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Link href="/practice/select" style={{ fontSize: '14px', color: '#667eea', fontWeight: '500', textDecoration: 'none' }}>
            ← Back to Practice Type
          </Link>
        </div>
          </>
        )}

        {/* API Test Cases Section - tab 1 only */}
        {activeTab === 1 && (
        <>
        <div style={{ marginTop: '0', marginBottom: '40px' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '30px',
            position: 'relative'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '32px 40px',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                opacity: 0.3
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                  fontSize: '32px',
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  API Practice Examples — API Test Cases
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.95)',
                  margin: 0,
                  textAlign: 'center',
                  fontWeight: '400'
                }}>
                  Manual API test cases for httpbin.org endpoints (Postman / curl)
                </p>
              </div>
            </div>
          </div>

          {/* API Test Cases List - Tabular Format */}
          <div style={{
            marginBottom: '40px',
            overflowX: 'auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e9ecef'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#ffffff'
                }}>
                  <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '16px', fontWeight: '600', borderBottom: '2px solid rgba(255,255,255,0.2)' }}>#</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '16px', fontWeight: '600', borderBottom: '2px solid rgba(255,255,255,0.2)' }}>Test Case Section</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '16px', fontWeight: '600', borderBottom: '2px solid rgba(255,255,255,0.2)' }}>Endpoint</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '16px', fontWeight: '600', borderBottom: '2px solid rgba(255,255,255,0.2)' }}>Description</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '16px', fontWeight: '600', borderBottom: '2px solid rgba(255,255,255,0.2)' }}>API Test Cases Count</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '16px', fontWeight: '600', borderBottom: '2px solid rgba(255,255,255,0.2)' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {API_TEST_CASE_SECTIONS.map((section, index) => (
                  <tr
                    key={section.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                      borderBottom: '1px solid #e9ecef',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8f4fc' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f8f9fa' }}
                  >
                    <td style={{ padding: '18px 20px', fontSize: '16px', fontWeight: '600', color: '#333', borderRight: '1px solid #e9ecef', textAlign: 'left' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #00416A 0%, #006ba8 100%)',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        boxShadow: '0 2px 6px rgba(0, 65, 106, 0.3)'
                      }}>
                        {index + 1}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px', fontSize: '16px', fontWeight: '600', color: '#00416A', borderRight: '1px solid #e9ecef', textAlign: 'left' }}>
                      {section.title}
                    </td>
                    <td style={{ padding: '18px 20px', fontSize: '14px', color: '#333', borderRight: '1px solid #e9ecef', textAlign: 'left', fontFamily: 'monospace' }}>
                      {section.endpoint}
                    </td>
                    <td style={{ padding: '18px 20px', fontSize: '15px', color: '#666', lineHeight: '1.5', borderRight: '1px solid #e9ecef', textAlign: 'left', maxWidth: '400px' }}>
                      {section.description}
                    </td>
                    <td style={{ padding: '18px 20px', fontSize: '15px', color: '#333', fontWeight: '500', borderRight: '1px solid #e9ecef', textAlign: 'left' }}>
                      {section.testCases.length} test case{section.testCases.length !== 1 ? 's' : ''}
                    </td>
                    <td style={{ padding: '18px 20px', textAlign: 'left' }}>
                      <button
                        type="button"
                        onClick={() => toggleSection(section.id)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '10px 20px',
                          background: expandedSections[section.id]
                            ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)'
                            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: '600',
                          fontSize: '14px',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)'
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)'
                        }}
                      >
                        <span>{expandedSections[section.id] ? 'Hide' : 'View'}</span>
                        <span style={{ transition: 'transform 0.3s ease', transform: expandedSections[section.id] ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Expanded API Test Cases Details */}
          {API_TEST_CASE_SECTIONS.filter((s) => expandedSections[s.id]).map((section, sectionIndex) => (
            <div
              key={section.id}
              id={`api-test-case-section-${section.id}`}
              style={{
                marginBottom: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '2px solid #00416A',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                marginTop: '20px'
              }}
            >
              <h3 style={{
                color: '#00416A',
                fontSize: '22px',
                marginBottom: '8px',
                fontWeight: '600',
                textAlign: 'left',
                borderBottom: '2px solid #00416A',
                paddingBottom: '10px'
              }}>
                {sectionIndex + 1}. {section.title}
              </h3>
              <p style={{ color: '#666', fontSize: '15px', marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
                {section.description}
              </p>
              {section.testCases.map((tc) => (
                <div
                  key={tc.id}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '20px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '6px 12px',
                      backgroundColor: '#00416A',
                      color: '#fff',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {tc.id}
                    </span>
                    <span style={{
                      padding: '4px 10px',
                      backgroundColor: tc.priority === 'High' ? '#dc2626' : '#ca8a04',
                      color: '#fff',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {tc.priority}
                    </span>
                  </div>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '12px', textAlign: 'left' }}>
                    {tc.title}
                  </p>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#e2e8f0' }}>
                        <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '600', color: '#334155', width: '60px' }}>Step #</th>
                        <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '600', color: '#334155' }}>Action</th>
                        <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '600', color: '#334155' }}>Test Data</th>
                        <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: '600', color: '#334155' }}>Expected Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tc.steps.map((s, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                          <td style={{ padding: '10px 12px', fontWeight: '600', color: '#333' }}>{s.step}</td>
                          <td style={{ padding: '10px 12px', color: '#333' }}>{s.action}</td>
                          <td style={{ padding: '10px 12px', color: '#333', fontFamily: 'monospace', fontSize: '13px' }}>{s.testData}</td>
                          <td style={{ padding: '10px 12px', color: '#333' }}>{s.expectedResult}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          ))}
        </div>
        </>
        )}
      </div>
    </main>
          )}
        </div>
      </section>
    </div>
  )
}
