import React, {Component} from 'react';
import Footer from '../../components/footer';
import { CodeBlock, InlineCode } from '../../components/shared';
import { pageContainerStyles, modernCardStyles, sectionHeaderStyles, itemHeaderStyles } from '../../utils/globalStyles';

class AutomationStandards extends Component {
    render() {
        const cardStyle = modernCardStyles.base;
        const sectionHeaderStyle = sectionHeaderStyles.primary;
        const itemHeaderStyle = itemHeaderStyles.base;

        return (
            <div style={pageContainerStyles.modern}>
                {/* Hero Section */}
                <div style={{
                    ...cardStyle,
                    marginBottom: '40px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#ffffff',
                    padding: '56px 48px',
                    boxShadow: '0 20px 25px -5px rgba(102, 126, 234, 0.3), 0 10px 10px -5px rgba(102, 126, 234, 0.2)',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        transform: 'translate(30%, -30%)'
                    }}></div>
                    <h1 style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: '800',
                        marginBottom: '20px',
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        GITS Playwright TypeScript Automation Standards
                    </h1>
                    <div style={{
                        fontSize: '17px',
                        opacity: 0.95,
                        lineHeight: '1.7',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <p style={{ marginBottom: '8px' }}>
                            <strong>Priority:</strong> Critical
                        </p>
                        <p style={{ marginBottom: '8px' }}>
                            <strong>Owner:</strong> Test Architect (GITS)
                        </p>
                        <p style={{ margin: 0 }}>
                            <strong>Scope:</strong> Applies to <strong>all</strong> GITS QA automation projects using <strong>Playwright + TypeScript</strong>.
                        </p>
                    </div>
                </div>

                {/* Why this exists */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>Why this exists</h2>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155', lineHeight: '1.8' }}>
                        We standardize Playwright TypeScript automation practices across all GITS QA projects to ensure:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Consistency across teams and repositories</li>
                        <li>Maintainability and readability of tests</li>
                        <li>Reusability of components (POM/fixtures/utils)</li>
                        <li>Efficient collaboration and faster onboarding</li>
                        <li>Predictable CI execution and stable reporting</li>
                    </ul>
                </div>

                {/* Core Principles */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>Core Principles (Non-negotiable)</h2>
                    <ol style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px', color: '#334155' }}>
                        <li style={{ marginBottom: '12px' }}><strong>Stability over cleverness</strong> (deterministic tests, minimal flakiness)</li>
                        <li style={{ marginBottom: '12px' }}><strong>Readable and maintainable</strong> (clear naming, consistent structure)</li>
                        <li style={{ marginBottom: '12px' }}><strong>Single Responsibility</strong> (tests validate behavior; POM encapsulates UI interaction)</li>
                        <li style={{ marginBottom: '12px' }}><strong>No hard waits</strong> (<InlineCode>waitForTimeout</InlineCode> is prohibited except for debugging)</li>
                        <li style={{ marginBottom: '12px' }}><strong>Prefer resilient locators</strong> (<InlineCode>getByRole</InlineCode>, <InlineCode>getByTestId</InlineCode>, accessible locators)</li>
                        <li style={{ marginBottom: '12px' }}><strong>Tagged & runnable suites</strong> (smoke/functional/a11y/regression are always runnable)</li>
                    </ol>
                </div>

                {/* Section 1: Project Setup & Tooling Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>1) Project Setup & Tooling Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>1.1 Required baseline</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Language:</strong> TypeScript</li>
                        <li><strong>Framework:</strong> Playwright Test Runner</li>
                        <li><strong>Package manager:</strong> npm (or pnpm/yarn allowed if org-approved, but standardize per repo)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>1.2 Required configuration files</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>package.json</InlineCode> (scripts and dependencies)</li>
                        <li><InlineCode>playwright.config.ts</InlineCode> (standard config)</li>
                        <li><InlineCode>tsconfig.json</InlineCode> (strict)</li>
                        <li><InlineCode>.eslintrc.*</InlineCode> + <InlineCode>.prettierrc</InlineCode> (lint/format)</li>
                        <li><InlineCode>.gitignore</InlineCode></li>
                    </ul>

                    <h3 style={itemHeaderStyle}>1.3 Required scripts (minimum)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        In <InlineCode>package.json</InlineCode>:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>test</InlineCode> (default)</li>
                        <li><InlineCode>test:smoke</InlineCode></li>
                        <li><InlineCode>test:functional</InlineCode></li>
                        <li><InlineCode>test:regression</InlineCode></li>
                        <li><InlineCode>test:a11y</InlineCode></li>
                        <li><InlineCode>lint</InlineCode></li>
                        <li><InlineCode>format</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Example:
                    </p>
                    <CodeBlock code={`{
  "scripts": {
    "test": "playwright test",
    "test:smoke": "playwright test --grep @smoke",
    "test:functional": "playwright test --grep @functional",
    "test:regression": "playwright test --grep @regression",
    "test:a11y": "playwright test --grep @a11y",
    "lint": "eslint . --ext .ts",
    "format": "prettier . --write"
  }
}`} />
                </div>

                {/* Section 2: Repository / Project Structure Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>2) Repository / Project Structure Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>2.1 Required folder structure</h3>
                    <CodeBlock code={`.
├─ docs/
│  └─ automation-standards/            # This README + future standards docs
├─ playwright.config.ts
├─ package.json
├─ tsconfig.json
├─ .eslintrc.cjs
├─ .prettierrc
├─ tests/
│  ├─ smoke/
│  ├─ functional/
│  ├─ regression/
│  └─ a11y/
├─ pages/                               # Page Objects
├─ fixtures/                            # Custom fixtures, base test, auth setup
├─ utils/                               # Reusable utilities/helpers
├─ data/                                # Test data (JSON/builders/factories)
├─ config/                              # Env configs, constants (no secrets)
└─ results/                             # Test artifacts (gitignored)`} />

                    <h3 style={itemHeaderStyle}>2.2 File placement rules</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Tests go under: <InlineCode>tests/**</InlineCode></li>
                        <li>Page objects go under: <InlineCode>pages/**</InlineCode></li>
                        <li>Fixtures/base test go under: <InlineCode>fixtures/**</InlineCode></li>
                        <li>Helpers go under: <InlineCode>utils/**</InlineCode></li>
                        <li>Data objects/builders under: <InlineCode>data/**</InlineCode></li>
                        <li>Environment configuration under: <InlineCode>config/**</InlineCode></li>
                        <li><strong>No secrets</strong> committed in repo (use CI secrets / env vars)</li>
                    </ul>
                </div>

                {/* Section 3: Code Architecture Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>3) Code Architecture Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>3.1 Layers</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Tests:</strong> Define scenarios, assertions, flow, high-level intent</li>
                        <li><strong>Page Objects (POM):</strong> Encapsulate UI interactions and locators per page/component</li>
                        <li><strong>Fixtures:</strong> Provide shared setup (auth/session), reusable contexts, base test extensions</li>
                        <li><strong>Utils:</strong> Shared generic functions (date/time, API helpers, formatting)</li>
                        <li><strong>Data:</strong> Test data builders/factories and static datasets</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>3.2 Page Object Model (POM) rules</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ POM <strong>should</strong> include:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Locators</li>
                        <li>Page actions (e.g., <InlineCode>login()</InlineCode>, <InlineCode>searchUser()</InlineCode>)</li>
                        <li>Page assertions helpers (optional but keep minimal)</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ POM <strong>must not</strong> include:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Complex business assertions spanning multiple pages</li>
                        <li>Test-case logic or multi-page end-to-end orchestration (keep in tests)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>3.3 Fixture rules</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Use fixtures for:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Authentication/session reuse</li>
                        <li>Shared test context setup</li>
                        <li>Common navigation bootstrap</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Avoid fixture bloat: fixtures must remain reusable and generic
                    </p>
                </div>

                {/* Section 4: Naming Conventions Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>4) Naming Conventions Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>4.1 Test files & suites</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Test file naming: <InlineCode>feature.action.spec.ts</InlineCode> OR <InlineCode>feature.spec.ts</InlineCode></li>
                        <li>Folder naming: kebab-case or camelCase, but be consistent per repo (recommend kebab-case)</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Examples:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>tests/smoke/auth.login.spec.ts</InlineCode></li>
                        <li><InlineCode>tests/functional/user.create.spec.ts</InlineCode></li>
                    </ul>

                    <h3 style={itemHeaderStyle}>4.2 Test titles</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Must be descriptive and outcome-focused:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>✅ <InlineCode>should allow a valid user to log in and reach dashboard</InlineCode></li>
                        <li>❌ <InlineCode>login test 1</InlineCode></li>
                    </ul>

                    <h3 style={itemHeaderStyle}>4.3 Tags</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Tags go in the test title or describe block:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Required test type tags: <InlineCode>@smoke</InlineCode>, <InlineCode>@functional</InlineCode>, <InlineCode>@regression</InlineCode>, <InlineCode>@a11y</InlineCode></li>
                        <li>Optional tags: <InlineCode>@critical</InlineCode>, <InlineCode>@flaky</InlineCode>, <InlineCode>@wip</InlineCode>, <InlineCode>@api</InlineCode>, <InlineCode>@ui</InlineCode>, <InlineCode>@mobile</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Example:
                    </p>
                    <CodeBlock code={`test('[@smoke][@critical] should allow login with valid credentials', async ({ page }) => {
  // ...
});`} />

                    <h3 style={itemHeaderStyle}>4.4 Page Objects</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Class names: <InlineCode>PascalCase</InlineCode> (e.g., <InlineCode>LoginPage</InlineCode>)</li>
                        <li>File names: <InlineCode>kebab-case.ts</InlineCode> or <InlineCode>camelCase.ts</InlineCode> (choose one; recommend <InlineCode>kebab-case</InlineCode>)</li>
                        <li>Methods: verbs, lowerCamelCase (<InlineCode>login</InlineCode>, <InlineCode>open</InlineCode>, <InlineCode>fillForm</InlineCode>)</li>
                    </ul>
                </div>

                {/* Section 5: Test Writing Best Practices Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>5) Test Writing Best Practices Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>5.1 Locator policy (MANDATORY)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Preferred order:
                    </p>
                    <ol style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px', color: '#334155' }}>
                        <li><InlineCode>getByRole(...)</InlineCode></li>
                        <li><InlineCode>getByTestId(...)</InlineCode> (standard attribute: <InlineCode>data-testid</InlineCode>)</li>
                        <li><InlineCode>getByLabel(...)</InlineCode>, <InlineCode>getByPlaceholder(...)</InlineCode>, <InlineCode>getByText(...)</InlineCode> (use cautiously)</li>
                        <li>CSS/XPath only if no better option (must be justified in code comments)</li>
                    </ol>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Example:
                    </p>
                    <CodeBlock code={`await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page.getByTestId('dashboard-title')).toBeVisible();`} />

                    <h3 style={itemHeaderStyle}>5.2 Wait strategy (MANDATORY)</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use Playwright auto-wait + explicit <InlineCode>expect()</InlineCode> for readiness</li>
                        <li><strong>Do not use</strong> <InlineCode>waitForTimeout()</InlineCode> in committed code</li>
                        <li>Prefer:
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li><InlineCode>await expect(locator).toBeVisible()</InlineCode></li>
                                <li><InlineCode>await page.waitForURL(...)</InlineCode> (when navigation is expected)</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 style={itemHeaderStyle}>5.3 Assertion strategy</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Assert <strong>business outcomes</strong>, not implementation details</li>
                        <li>Use targeted assertions:
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li>✅ <InlineCode>expect(orderConfirmation).toContainText(orderId)</InlineCode></li>
                                <li>❌ <InlineCode>expect(url).toContain('step=3')</InlineCode> unless it is a requirement</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 style={itemHeaderStyle}>5.4 Test independence</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Tests must run in isolation</li>
                        <li>No reliance on execution order</li>
                        <li>Use setup/teardown or fixtures to create/cleanup state</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>5.5 Flaky test policy</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>If flaky confirmed:
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li>Tag <InlineCode>@flaky</InlineCode></li>
                                <li>Create a bug/tech debt ticket</li>
                                <li>Move to quarantine (optional) or isolate from PR gating suites</li>
                            </ul>
                        </li>
                        <li>Fix root cause (locator, timing, data dependency, environment instability)</li>
                    </ul>
                </div>

                {/* Section 6: Test Type Definitions */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>6) Test Type Definitions (Smoke vs Functional vs 508 vs Regression)</h2>
                    
                    <h3 style={itemHeaderStyle}>6.1 Smoke Tests (@smoke)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>What these are:</strong> Minimal set that proves the build is usable and critical paths work.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Purpose:</strong> Fast signal. Block deployments if failing.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>App loads successfully</li>
                        <li>Login works</li>
                        <li>Core dashboard loads</li>
                        <li>Critical transaction completes</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Run frequency:</strong> Every PR / every deployment pipeline
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Rules:</strong> Must be fast, stable, minimal external dependencies.
                    </p>

                    <h3 style={itemHeaderStyle}>6.2 Functional Tests (@functional)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>What these are:</strong> Validate individual features/requirements behave correctly.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Purpose:</strong> Feature correctness.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Form validation scenarios</li>
                        <li>CRUD operations</li>
                        <li>Role/permission checks</li>
                        <li>Search/filter/sort correctness</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Run frequency:</strong> PR (subset as needed), Nightly (full functional)
                    </p>

                    <h3 style={itemHeaderStyle}>6.3 508 Accessibility Tests (@a11y)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>What these are:</strong> Automated accessibility checks aligned with Section 508 / WCAG expectations.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Purpose:</strong> Catch accessibility regressions early.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Missing labels, ARIA violations</li>
                        <li>Contrast issues (tool-dependent)</li>
                        <li>Keyboard navigation blockers</li>
                        <li>Improper heading structure</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Run frequency:</strong> Nightly + pre-release + after major UI changes
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Note:</strong> Automated tests do not replace manual accessibility audits.
                    </p>

                    <h3 style={itemHeaderStyle}>6.4 Regression Tests (@regression)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>What these are:</strong> Broad stable suite ensuring existing functionality hasn't broken.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Purpose:</strong> Release confidence.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Examples:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Stable end-to-end flows across modules</li>
                        <li>Known bug prevention tests</li>
                        <li>High-value scenarios across features</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Run frequency:</strong> Nightly and before releases
                    </p>

                    <h3 style={itemHeaderStyle}>6.5 Overlap rule</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        A test may belong to multiple categories, but it <strong>must</strong> include the tag for how it is executed.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Example: a smoke test can also be regression:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>[@smoke][@regression]</InlineCode></li>
                    </ul>
                </div>

                {/* Section 7: Reporting, Artifacts, Debugging Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>7) Reporting, Artifacts, Debugging Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>7.1 Artifact capture rules</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Screenshot: <strong>on failure</strong></li>
                        <li>Trace: <strong>on first retry / on failure</strong> (recommended)</li>
                        <li>Video: <strong>retain-on-failure</strong> (recommended)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>7.2 Required reporting</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>HTML report must be enabled</li>
                        <li>CI must upload report + key artifacts for failures</li>
                    </ul>
                </div>

                {/* Section 8: CI/CD Execution Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>8) CI/CD Execution Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>8.1 Required suite triggers</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>PR Gate:</strong> <InlineCode>@smoke</InlineCode> (and optionally a small <InlineCode>@functional</InlineCode> subset)</li>
                        <li><strong>Nightly:</strong> <InlineCode>@regression</InlineCode> + <InlineCode>@a11y</InlineCode></li>
                        <li><strong>Pre-release:</strong> Full <InlineCode>@regression</InlineCode> + <InlineCode>@a11y</InlineCode> (+ cross-browser if required)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>8.2 Parallelization guidance</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use Playwright workers appropriate to CI capacity</li>
                        <li>Avoid over-parallelization that overloads environments</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>8.3 Environment handling</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Configuration via environment variables (baseURL, credentials via secrets)</li>
                        <li>No secrets in git</li>
                        <li>Maintain <InlineCode>config/env.example</InlineCode> as a template</li>
                    </ul>
                </div>

                {/* Section 9: Standard Code Examples */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>9) Standard Code Examples</h2>
                    
                    <h3 style={itemHeaderStyle}>9.1 Standard base fixture (example)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <InlineCode>fixtures/baseTest.ts</InlineCode>:
                    </p>
                    <CodeBlock code={`import { test as base, expect } from '@playwright/test';

type Fixtures = {
  // add typed fixtures here as needed
};

export const test = base.extend<Fixtures>({
  // fixtures here
});

export { expect };`} />

                    <h3 style={itemHeaderStyle}>9.2 Sample Page Object</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <InlineCode>pages/login-page.ts</InlineCode>:
                    </p>
                    <CodeBlock code={`import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.getByLabel('Email');
    this.password = page.getByLabel('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }

  async open() {
    await this.page.goto('/login');
    await expect(this.signInButton).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signInButton.click();
  }
}`}
                    />

                    <h3 style={itemHeaderStyle}>9.3 Sample Smoke Test (with tags)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <InlineCode>tests/smoke/auth.login.spec.ts</InlineCode>:
                    </p>
                    <CodeBlock code={`import { test, expect } from '../../fixtures/baseTest';
import { LoginPage } from '../../pages/login-page';

test('[@smoke][@critical] should allow valid user to login and reach dashboard', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login(process.env.E2E_USER_EMAIL!, process.env.E2E_USER_PASS!);

  await expect(page.getByTestId('dashboard-title')).toBeVisible();
});`} />

                    <h3 style={itemHeaderStyle}>9.4 Sample A11y Test (conceptual)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <InlineCode>tests/a11y/homepage.a11y.spec.ts</InlineCode>:
                    </p>
                    <CodeBlock code={`import { test, expect } from '../../fixtures/baseTest';

// NOTE: Integrate an approved a11y tool (e.g., axe) per project policy.
// This example shows structure, not tool implementation.

test('[@a11y] should have no critical accessibility violations on homepage', async ({ page }) => {
  await page.goto('/');
  // run accessibility scan here (axe, etc.)
  expect(true).toBeTruthy(); // replace with actual scan result assertions
});`} />
                </div>

                {/* Section 10: Governance & Versioning Standard */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>10) Governance & Versioning Standard</h2>
                    
                    <h3 style={itemHeaderStyle}>10.1 Ownership</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Owner:</strong> Test Architect</li>
                        <li><strong>Approvers:</strong> QA Lead(s) + Project Lead(s) (as defined per org)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>10.2 Change process</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Standards changes require PR</li>
                        <li>Minimum required approvals: <strong>2</strong> (recommended)</li>
                        <li>Update changelog on every change</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>10.3 Version history</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Changelog</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>v1.0.0 - Initial standards published</li>
                    </ul>
                </div>

                {/* Section 11: Compliance Checklist */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>11) Compliance Checklist (New Project Must Pass)</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Folder structure matches standard</li>
                        <li>[ ] Standard scripts exist (<InlineCode>test:smoke</InlineCode>, <InlineCode>test:regression</InlineCode>, <InlineCode>test:a11y</InlineCode>)</li>
                        <li>[ ] Lint/format configured and enforced</li>
                        <li>[ ] Tags used on all tests</li>
                        <li>[ ] No <InlineCode>waitForTimeout()</InlineCode> in committed code</li>
                        <li>[ ] Locators follow policy (<InlineCode>role</InlineCode>/<InlineCode>testid</InlineCode> preferred)</li>
                        <li>[ ] Artifacts enabled (trace/screenshots on failure)</li>
                        <li>[ ] CI runs smoke on PR and regression/a11y nightly</li>
                    </ul>
                </div>

                {/* Section 12: Migration Guide */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>12) Migration Guide (Existing Projects)</h2>
                    <ol style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px', color: '#334155' }}>
                        <li>Adopt folder structure (move tests/pages/utils/fixtures)</li>
                        <li>Add standard tags to tests</li>
                        <li>Create base fixture and standardize shared setup</li>
                        <li>Replace brittle selectors with role/testid</li>
                        <li>Remove <InlineCode>waitForTimeout()</InlineCode> and stabilize waits via <InlineCode>expect()</InlineCode></li>
                        <li>Align scripts and CI suites</li>
                        <li>Add reporting artifacts and ensure uploads in CI</li>
                        <li>Track progress using the Compliance Checklist</li>
                    </ol>
                </div>

                {/* Section 13: Quick Commands */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>13) Quick Commands</h2>
                    <CodeBlock code={`npm run test
npm run test:smoke
npm run test:functional
npm run test:regression
npm run test:a11y
npm run lint
npm run format`} />
                </div>

                {/* Contact / Support */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>Contact / Support</h2>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155', lineHeight: '1.8' }}>
                        For standards questions or exceptions, contact the Test Architect (GITS). Exceptions must be documented and approved.
                    </p>
                </div>

                <Footer />
            </div>
        );
    }
}

export default AutomationStandards;
