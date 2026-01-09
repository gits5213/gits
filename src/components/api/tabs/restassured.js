import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import restassuredLogo from '../../../images/tabs/restassuredLogo.png'; 
import Footer from '../../../components/footer';
import PdfDownload from '../../shared/PdfDownload';
import { modernCardStyles, codeBlockStyles, sectionHeaderStyles, itemHeaderStyles, pageContainerStyles, modernHeroStyles, checklistGridStyles, checklistLinkStyles } from '../../../utils/globalStyles';

const resRestassured = () => {
    const scrollToItem = (itemNum) => {
        const element = document.getElementById(`api-item-${itemNum}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const originalBgColor = element.style.backgroundColor || 'transparent';
            element.style.backgroundColor = '#fef3c7';
            element.style.transition = 'background-color 0.3s ease';
            setTimeout(() => {
                element.style.backgroundColor = originalBgColor;
            }, 2000);
        }
    };

    // Use shared styles from globalStyles
    const cardStyle = modernCardStyles.base;
    const codeBlockStyle = codeBlockStyles.dark;
    const sectionHeaderStyle = sectionHeaderStyles.primary;
    const itemHeaderStyle = itemHeaderStyles.base;

    return(
        <div style={pageContainerStyles.modern}>
            {/* Hero Section */}
            <div style={modernHeroStyles.base}>
                <h1 style={modernHeroStyles.title}>
                    RESTAssured Framework
                </h1>
                <p style={modernHeroStyles.subtitle}>
                    Java DSL for Easy Testing of REST Services
                </p>
            </div>

            {/* Image Section */}
            <div style={{
                ...cardStyle,
                textAlign: 'center',
                padding: '32px'
            }}>
                <img 
                    src={restassuredLogo} 
                    alt='RESTAssured Logo'
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            {/* GitHub Links */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                marginBottom: '48px'
            }}>
                <a 
                    href={link.RESTASSURED_GITHUB} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '14px 28px',
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#dc3545',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 6px rgba(220,53,69,0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#c82333';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(220,53,69,0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#dc3545';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 6px rgba(220,53,69,0.3)';
                    }}
                >
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '18px', height: '18px' }} />
                    RESTAssured on GitHub
                </a>
                <a 
                    href={link.RESTASSURED_WEBSITE} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '14px 28px',
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#28a745',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 6px rgba(40,167,69,0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#218838';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(40,167,69,0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#28a745';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 6px rgba(40,167,69,0.3)';
                    }}
                >
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '18px', height: '18px' }} />
                    RESTAssured Org
                </a>
            </div>

            {/* REST API Automation Details Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '32px'
            }}>
                <h2 style={sectionHeaderStyle}>
                    REST API Automation with Playwright TypeScript
                </h2>
                <div style={{
                    backgroundColor: '#f8fafc',
                    padding: '24px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    marginBottom: '24px'
                }}>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: '#475569',
                        marginBottom: '20px'
                    }}>
                        REST API automation is a critical skill for modern test automation engineers. Using <strong>Playwright with TypeScript</strong>, you can create robust, maintainable API tests that validate backend services independently or in combination with UI tests.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: '#475569',
                        marginBottom: '20px'
                    }}>
                        <strong>Key Benefits:</strong>
                    </p>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#475569',
                        paddingLeft: '24px',
                        marginBottom: '20px'
                    }}>
                        <li>Fast execution compared to UI tests</li>
                        <li>Early detection of backend issues</li>
                        <li>Ability to seed test data via API before UI validation</li>
                        <li>Comprehensive coverage of business logic and edge cases</li>
                        <li>Integration with CI/CD pipelines</li>
                    </ul>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: '#475569'
                    }}>
                        This checklist covers <strong>end-to-end REST API automation practices</strong> using Playwright's <code>APIRequestContext</code>, ensuring your tests are production-ready, maintainable, and reliable.
                    </p>
                </div>
            </div>

            {/* Checklist Grid Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '32px'
            }}>
                <h3 style={sectionHeaderStyle}>
                    End-to-end REST API automation checklist (Playwright + TypeScript)
                </h3>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '16px',
                    marginBottom: '32px'
                }}>
                    {[
                        { num: 1, text: 'API scope & endpoints identified' },
                        { num: 2, text: 'Base URL + environment strategy' },
                        { num: 3, text: 'Authentication method confirmed' },
                        { num: 4, text: 'Test data strategy' },
                        { num: 5, text: 'Request builder + headers standardized' },
                        { num: 6, text: 'Response validation standards' },
                        { num: 7, text: 'Negative testing coverage' },
                        { num: 8, text: 'Idempotency & cleanup implemented' },
                        { num: 9, text: 'API ↔ UI integration flows' },
                        { num: 10, text: 'Retries/timeouts & network resilience' },
                        { num: 11, text: 'Logging + evidence' },
                        { num: 12, text: 'Reporting' },
                        { num: 13, text: 'CI readiness' },
                        { num: 14, text: 'Standards & reusability' }
                    ].map(item => (
                        <div key={item.num} style={checklistGridStyles.modern}>
                            <a
                                href={`#api-item-${item.num}`}
                                onClick={(e) => { e.preventDefault(); scrollToItem(item.num); }}
                                style={checklistLinkStyles.base}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#005a8a';
                                    e.target.style.borderBottomColor = '#005a8a';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#00416A';
                                    e.target.style.borderBottomColor = '#00416A';
                                }}
                            >
                                {item.num}. {item.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Definitions + Examples Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '32px'
            }}>
                <h3 style={sectionHeaderStyle}>
                    Definitions + Playwright TypeScript examples (one-by-one)
                </h3>

                <div id="api-item-1" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>1) API scope & endpoints identified</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Decide which endpoints are "in-scope" for automation (critical business flows) and what will be mocked or tested elsewhere.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example:</strong> In-scope: <code>POST /auth/login</code>, <code>POST /users</code>, <code>GET /users/{'{id}'}</code>, <code>DELETE /users/{'{id}'}</code>.
                    </p>
                </div>

                <div id="api-item-2" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>2) Base URL + environment strategy</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Tests must run against different environments without code changes. Use config/env variables.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (config):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: process.env.API_BASE_URL || 'https://api.example.com',
  },
});`}
                    </pre>
                </div>

                <div id="api-item-3" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>3) Authentication method confirmed</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Know how to obtain and pass credentials securely (never hardcode secrets).
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (token login helper):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`import { APIRequestContext, expect } from '@playwright/test';

export async function getToken(request: APIRequestContext) {
  const res = await request.post('/auth/login', {
    data: { 
      username: process.env.API_USER, 
      password: process.env.API_PASS 
    },
  });
  expect(res.ok()).toBeTruthy();
  const body = await res.json();
  return body.token as string;
}`}
                    </pre>
                </div>

                <div id="api-item-4" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>4) Test data strategy</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Data must be unique per test run and not depend on manual preloaded records.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (unique email):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`export function uniqueEmail(prefix = 'student') {
  return \`\${prefix}.\${Date.now()}@example.com\`;
}`}
                    </pre>
                </div>

                <div id="api-item-5" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>5) Request builder + headers standardized</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Centralize common headers (auth, content-type) and reuse across tests.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example:</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`export function authHeaders(token: string) {
  return {
    Authorization: \`Bearer \${token}\`,
    'Content-Type': 'application/json',
  };
}`}
                    </pre>
                </div>

                <div id="api-item-6" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>6) Response validation standards</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Validate more than status code: check important fields + types + business rule.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (create user):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`import { test, expect } from '@playwright/test';
import { getToken } from '../utils/auth';
import { authHeaders } from '../utils/headers';
import { uniqueEmail } from '../utils/data';

test('POST /users creates a user', async ({ request }) => {
  const token = await getToken(request);
  const email = uniqueEmail();

  const res = await request.post('/users', {
    headers: authHeaders(token),
    data: { name: 'Student One', email },
  });

  expect(res.status()).toBe(201);

  const body = await res.json();
  expect(body).toMatchObject({
    name: 'Student One',
    email,
  });
  expect(typeof body.id).toBe('string');
});`}
                    </pre>
                </div>

                <div id="api-item-7" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>7) Negative testing coverage</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Confirm API fails correctly and returns meaningful errors.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (unauthorized):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`import { test, expect } from '@playwright/test';

test('GET /users should return 401 without token', async ({ request }) => {
  const res = await request.get('/users');
  expect(res.status()).toBe(401);

  const body = await res.json();
  expect(body).toHaveProperty('message');
});`}
                    </pre>
                </div>

                <div id="api-item-8" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>8) Idempotency & cleanup implemented</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Tests must clean up created data or isolate it so reruns don't fail.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (create → delete):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`import { test, expect } from '@playwright/test';
import { getToken } from '../utils/auth';
import { authHeaders } from '../utils/headers';
import { uniqueEmail } from '../utils/data';

test('Create and cleanup user', async ({ request }) => {
  const token = await getToken(request);

  // Create
  const createRes = await request.post('/users', {
    headers: authHeaders(token),
    data: { name: 'Temp User', email: uniqueEmail() },
  });
  expect(createRes.status()).toBe(201);
  const created = await createRes.json();
  const userId = created.id;

  // Cleanup
  const delRes = await request.delete(\`/users/\${userId}\`, {
    headers: authHeaders(token),
  });
  expect([200, 204]).toContain(delRes.status());
});`}
                    </pre>
                </div>

                <div id="api-item-9" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>9) API ↔ UI integration flows</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Use API to prepare data quickly, then UI tests validate behavior (fast + reliable).
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (seed via API, verify via UI):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`import { test, expect } from '@playwright/test';
import { getToken } from '../utils/auth';
import { authHeaders } from '../utils/headers';
import { uniqueEmail } from '../utils/data';

test('API seeds user, UI verifies user appears', async ({ request, page }) => {
  const token = await getToken(request);
  const email = uniqueEmail('seeded');

  const createRes = await request.post('/users', {
    headers: authHeaders(token),
    data: { name: 'Seeded User', email },
  });
  expect(createRes.status()).toBe(201);

  await page.goto('/users'); // UI baseURL assumed in config
  await expect(page.getByText(email)).toBeVisible();
});`}
                    </pre>
                </div>

                <div id="api-item-10" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>10) Retries/timeouts & resilience</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Avoid flaky tests by setting reasonable timeouts, and retry only where appropriate.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (timeout on a single request):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`const res = await request.get('/health', { timeout: 10_000 });`}
                    </pre>
                </div>

                <div id="api-item-11" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>11) Logging + evidence</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> On failure, provide enough info to debug (status, endpoint, key response fields). Avoid leaking secrets.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (safe debug print):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`const bodyText = await res.text();
test.info().attach('api-response', { 
  body: bodyText, 
  contentType: 'text/plain' 
});`}
                    </pre>
                </div>

                <div id="api-item-12" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>12) Reporting</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Ensure output is visible to stakeholders (HTML/JUnit) and includes evidence.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (config snippet):</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`// playwright.config.ts
reporter: [
  ['html'], 
  ['junit', { outputFile: 'results/junit.xml' }]
],`}
                    </pre>
                </div>

                <div id="api-item-13" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>13) CI readiness</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Use environment variables for secrets; run headless; produce consistent artifacts.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Example (CI env vars):</strong>
                    </p>
                    <ul style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', paddingLeft: '24px' }}>
                        <li><code>API_BASE_URL</code></li>
                        <li><code>API_USER</code></li>
                        <li><code>API_PASS</code></li>
                    </ul>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Command:</strong>
                    </p>
                    <pre style={codeBlockStyle}>
{`npx playwright test --reporter=html`}
                    </pre>
                </div>

                <div id="api-item-14" style={{ marginBottom: '40px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4 style={itemHeaderStyle}>14) Standards & reusability</h4>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Keep API tests organized, readable, and reusable using a shared structure.
                    </p>
                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                        <strong style={{ color: '#1e293b' }}>Suggested folders:</strong>
                    </p>
                    <ul style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', paddingLeft: '24px' }}>
                        <li><code>tests/api/</code> (API tests)</li>
                        <li><code>tests/ui/</code> (UI tests)</li>
                        <li><code>utils/auth.ts</code>, <code>utils/headers.ts</code>, <code>utils/data.ts</code></li>
                    </ul>
                </div>
            </div>

            {/* PDF Download Section */}
            <PdfDownload
                pdfPath="Playwright_TS_REST_API_Automation_Handout.pdf"
                title="📥 Download REST API Automation PDF Handout"
                description="Download the complete REST API automation checklist for Playwright TypeScript (PDF format)"
                downloadFileName="Playwright_TS_REST_API_Automation_Handout.pdf"
            />

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resRestassured;
