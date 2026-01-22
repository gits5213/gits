import React, {Component} from 'react';
import Footer from '../../components/footer';
import { CodeBlock, InlineCode } from '../../components/shared';
import { pageContainerStyles, modernCardStyles, sectionHeaderStyles, itemHeaderStyles } from '../../utils/globalStyles';

class NamingConventions extends Component {
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
                        GITS Playwright TypeScript Naming Conventions & Coding Best Practices
                    </h1>
                    <div style={{
                        fontSize: '17px',
                        opacity: 0.95,
                        lineHeight: '1.7',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <p style={{ marginBottom: '8px' }}>
                            <strong>Applies to:</strong> All GITS QA projects using <strong>Playwright + TypeScript</strong>
                        </p>
                        <p style={{ marginBottom: '8px' }}>
                            <strong>Owner:</strong> Test Architect / QA Automation Lead
                        </p>
                        <p style={{ margin: 0 }}>
                            <strong>Goal:</strong> Make automation code <strong>readable, searchable, reusable, and consistent</strong> across all teams.
                        </p>
                    </div>
                </div>

                {/* Section 1: Guiding Principles */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>1) Guiding Principles</h2>
                    <ol style={{
                        paddingLeft: '24px',
                        lineHeight: '1.8',
                        fontSize: '16px',
                        color: '#334155'
                    }}>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Consistency beats preference</strong> — we standardize to reduce cognitive load.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Readable test intent</strong> — test names should describe behavior and expected outcome.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Stable selectors first</strong> — prefer accessibility-first locators and <InlineCode>data-testid</InlineCode>.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>No flakiness by design</strong> — rely on Playwright auto-wait and explicit expectations.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Single Responsibility</strong> — Page Objects represent UI interactions; tests represent scenarios.
                        </li>
                        <li style={{ marginBottom: '14px' }}>
                            <strong>Independent tests</strong> — tests must run in any order, in parallel, and in isolation.
                        </li>
                    </ol>
                </div>

                {/* Section 2: Naming Standards */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>2) Naming Standards</h2>
                    
                    <h3 style={itemHeaderStyle}>2.1 Test File Naming</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Standard format:</strong><br />
                        <InlineCode>{'<feature-or-module>.<behavior-or-action>.spec.ts'}</InlineCode>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>auth.login.spec.ts</InlineCode></li>
                        <li><InlineCode>user.create.spec.ts</InlineCode></li>
                        <li><InlineCode>orders.checkout.spec.ts</InlineCode></li>
                        <li><InlineCode>accessibility.homepage.spec.ts</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <strong>lowercase</strong> and <strong>dot-separated</strong> segments.</li>
                        <li>Keep file names <strong>short, descriptive, and searchable</strong>.</li>
                        <li>One file should ideally focus on <strong>one feature area</strong>.</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Folder organization (recommended):</strong>
                    </p>
                    <CodeBlock code={`tests/
  smoke/
  functional/
  regression/
  a11y/`} />
                </div>

                {/* Section 2.2: describe Block Naming */}
                <div style={cardStyle}>
                    <h3 style={itemHeaderStyle}>2.2 describe Block Naming</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Purpose:</strong> Organize tests by feature/module and context.
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Standard format:</strong><br />
                        <InlineCode>{'<Feature/Module> - <Context>'}</InlineCode>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <CodeBlock code={`test.describe('Auth - Login', () => { ... });
test.describe('Orders - Checkout', () => { ... });
test.describe('User Management - Roles', () => { ... });`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <strong>Title Case</strong> for readability.</li>
                        <li>Avoid overly long nested <InlineCode>describe</InlineCode> blocks (max 2 levels recommended).</li>
                        <li>Use describes to group by <strong>feature</strong> and <strong>scenario group</strong>, not by implementation.</li>
                    </ul>
                </div>

                {/* Section 2.3: Test Title Naming */}
                <div style={cardStyle}>
                    <h3 style={itemHeaderStyle}>2.3 Test Title Naming</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Test titles must be outcome-focused and readable.</strong>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Standard format:</strong><br />
                        <InlineCode>{'[@tag][@tag] should <expected behavior/outcome>'}</InlineCode>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <CodeBlock code={`test('[@smoke][@critical] should allow valid user to login and reach dashboard', async () => {});
test('[@functional] should block submission when email is invalid', async () => {});
test('[@regression] should persist user profile changes after refresh', async () => {});
test('[@a11y] should have no critical accessibility violations on homepage', async () => {});`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Start with <strong>tags</strong>.</li>
                        <li>Use <strong>"should"</strong> language for consistent searching and reporting.</li>
                        <li>Avoid numbers and vague labels (❌ <InlineCode>test 1</InlineCode>, ❌ <InlineCode>login works</InlineCode>).</li>
                        <li>Do not include implementation details in titles (❌ <InlineCode>should click button and wait for URL</InlineCode>).</li>
                    </ul>
                </div>

                {/* Section 3: Page Object Naming & Structure */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>3) Page Object Naming & Structure</h2>
                    
                    <h3 style={itemHeaderStyle}>3.1 Class Naming</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><strong>Class names:</strong> <InlineCode>PascalCase</InlineCode></li>
                        <li><strong>File names:</strong> <InlineCode>kebab-case.ts</InlineCode> (recommended)</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>pages/login-page.ts</InlineCode> → <InlineCode>class LoginPage</InlineCode></li>
                        <li><InlineCode>pages/order-details-page.ts</InlineCode> → <InlineCode>class OrderDetailsPage</InlineCode></li>
                    </ul>

                    <h3 style={itemHeaderStyle}>3.2 Method Naming</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <strong>lowerCamelCase</strong> verbs that describe user actions.</li>
                        <li>Prefer <strong>clear intent</strong> over short names.</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Good:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>open()</InlineCode></li>
                        <li><InlineCode>login(email, password)</InlineCode></li>
                        <li><InlineCode>searchUser(name)</InlineCode></li>
                        <li><InlineCode>submitOrder()</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Avoid:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>doLogin()</InlineCode></li>
                        <li><InlineCode>clickBtn()</InlineCode></li>
                        <li><InlineCode>t1()</InlineCode></li>
                    </ul>

                    <h3 style={itemHeaderStyle}>3.3 Single Responsibility Rule (MANDATORY)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Page Objects must:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Encapsulate <strong>locators</strong> and <strong>page interactions</strong></li>
                        <li>Provide methods that represent <strong>user actions</strong></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Page Objects must NOT:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Contain test-case orchestration across multiple pages</li>
                        <li>Contain business validation that spans the system</li>
                        <li>Include environment/test-data creation logic</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Good POM:
                    </p>
                    <CodeBlock code={`export class LoginPage {
  constructor(private readonly page: Page) {}

  async open() { await this.page.goto('/login'); }
  async login(email: string, password: string) { /* fill + click */ }
}`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Bad POM (too much logic):
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Creating users, seeding DB, verifying emails, and asserting end-to-end flow inside a Page Object.</li>
                    </ul>
                </div>

                {/* Section 4: Selector / Locator Strategy */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>4) Selector / Locator Strategy (Industry Standard)</h2>
                    
                    <h3 style={itemHeaderStyle}>4.1 Locator Priority Order (MANDATORY)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Use locators in this order:
                    </p>
                    <ol style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '1.8' }}>
                        <li><strong>Accessibility-first locators</strong>
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li><InlineCode>getByRole()</InlineCode></li>
                                <li><InlineCode>getByLabel()</InlineCode></li>
                            </ul>
                        </li>
                        <li><strong>Test IDs</strong>
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li><InlineCode>getByTestId()</InlineCode> (standard attribute: <InlineCode>data-testid</InlineCode>)</li>
                            </ul>
                        </li>
                        <li><strong>Text-based locators</strong> (use carefully; may be brittle)
                            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
                                <li><InlineCode>getByText()</InlineCode></li>
                                <li><InlineCode>getByPlaceholder()</InlineCode></li>
                            </ul>
                        </li>
                        <li><strong>CSS/XPath</strong> (last resort; must be justified with comment)</li>
                    </ol>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Preferred:
                    </p>
                    <CodeBlock code={`page.getByRole('button', { name: 'Sign in' });
page.getByTestId('dashboard-title');
page.getByLabel('Email');`} />
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Avoid:
                    </p>
                    <CodeBlock code={`page.locator('div:nth-child(2) > div > button');
page.locator('//button[contains(text(),"Sign in")]');`} />

                    <h3 style={itemHeaderStyle}>4.2 data-testid Standard</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Use <InlineCode>data-testid</InlineCode> for stable, automation-friendly selectors.</li>
                        <li>Test IDs should represent <strong>semantic UI meaning</strong>, not styling.</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Good:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>data-testid="login-submit"</InlineCode></li>
                        <li><InlineCode>data-testid="user-search-input"</InlineCode></li>
                        <li><InlineCode>data-testid="order-confirmation-number"</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ❌ Bad:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>data-testid="blue-button"</InlineCode></li>
                        <li><InlineCode>data-testid="div-12"</InlineCode></li>
                    </ul>
                </div>

                {/* Section 5: Coding Best Practices */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>5) Coding Best Practices</h2>
                    
                    <h3 style={itemHeaderStyle}>5.1 No Hard Waits (MANDATORY)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        <strong>Hard waits are prohibited in committed code:</strong>
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>❌ <InlineCode>waitForTimeout()</InlineCode></li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Use:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Playwright auto-wait</li>
                        <li>Explicit locator expectations only when needed</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Example:
                    </p>
                    <CodeBlock code={`await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByTestId('toast-success')).toBeVisible();`} />

                    <h3 style={itemHeaderStyle}>5.2 Auto-wait + Explicit Expectations</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Playwright auto-wait is strong, but use expectations to verify readiness when:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Waiting for navigation or state changes</li>
                        <li>Confirming visible/hidden/enabled states</li>
                        <li>Preventing race conditions</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Examples:
                    </p>
                    <CodeBlock code={`await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
await page.waitForURL(/dashboard/);
await expect(page.getByTestId('submit')).toBeEnabled();`} />

                    <h3 style={itemHeaderStyle}>5.3 Test Independence & Cleanup (MANDATORY)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Rules:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>No ordering dependency</li>
                        <li>Parallel-safe</li>
                        <li>Use fixtures for auth/session and setup</li>
                        <li>Cleanup by API teardown or resetting state</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Recommended:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Unique test data per run (uuid/timestamp)</li>
                        <li>Avoid shared mutable accounts unless isolated and reset</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>5.4 AAA Pattern (Recommended)</h3>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Arrange → Act → Assert
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        ✅ Example:
                    </p>
                    <CodeBlock code={`test('[@functional] should prevent invalid email submission', async ({ page }) => {
  // Arrange
  await page.goto('/signup');

  // Act
  await page.getByLabel('Email').fill('invalid-email');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert
  await expect(page.getByText('Enter a valid email')).toBeVisible();
});`} />
                </div>

                {/* Section 6: Linting / Formatting */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>6) Linting / Formatting Baseline (MANDATORY)</h2>
                    
                    <h3 style={itemHeaderStyle}>6.1 TypeScript Strict</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>tsconfig.json</InlineCode> must be strict</li>
                        <li>Avoid <InlineCode>any</InlineCode> unless documented</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Recommended:
                    </p>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li><InlineCode>{'"strict": true'}</InlineCode></li>
                    </ul>

                    <h3 style={itemHeaderStyle}>6.2 ESLint + Prettier</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>ESLint enforces quality</li>
                        <li>Prettier enforces formatting</li>
                        <li>CI must fail on lint errors</li>
                    </ul>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Required scripts:
                    </p>
                    <CodeBlock code={`npm run lint
npm run format`} />
                </div>

                {/* Section 7: PR Review Checklist */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>7) PR Review Checklist (MANDATORY)</h2>
                    <p style={{ marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                        Reviewers must validate these items before approving a PR.
                    </p>
                    
                    <h3 style={itemHeaderStyle}>A) Test Structure & Naming</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Test file name follows: <InlineCode>{'<feature>.<action>.spec.ts'}</InlineCode></li>
                        <li>[ ] <InlineCode>describe</InlineCode> blocks follow: <InlineCode>{'<Feature> - <Context>'}</InlineCode></li>
                        <li>[ ] Each test title clearly states expected outcome (uses "should …")</li>
                        <li>[ ] Tests include tags in title (e.g., <InlineCode>[@smoke]</InlineCode>, <InlineCode>[@functional]</InlineCode>, etc.)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>B) Tags & Suite Alignment</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Every test has <strong>at least one</strong> test-type tag: <InlineCode>@smoke</InlineCode> / <InlineCode>@functional</InlineCode> / <InlineCode>@regression</InlineCode> / <InlineCode>@a11y</InlineCode></li>
                        <li>[ ] If the test is required for smoke, it includes <InlineCode>@smoke</InlineCode> even if also <InlineCode>@regression</InlineCode></li>
                        <li>[ ] <InlineCode>@wip</InlineCode> tests are not merged into main unless explicitly approved</li>
                        <li>[ ] <InlineCode>@flaky</InlineCode> tests have a tracking ticket and are not used for PR gating (unless exception approved)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>C) Locator & Stability Rules</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Uses <InlineCode>getByRole()</InlineCode> and/or <InlineCode>getByTestId()</InlineCode> where possible</li>
                        <li>[ ] Avoids brittle selectors (<InlineCode>nth-child</InlineCode>, deep CSS chains, XPath)</li>
                        <li>[ ] No <InlineCode>waitForTimeout()</InlineCode> or other hard waits in committed code</li>
                        <li>[ ] Uses explicit <InlineCode>expect()</InlineCode> for readiness only when needed</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>D) Page Object Model (POM) Rules</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Page Objects encapsulate locators and page actions only</li>
                        <li>[ ] No end-to-end orchestration logic inside Page Objects</li>
                        <li>[ ] POM methods are verb-based, readable, and reusable</li>
                        <li>[ ] Page Objects do not create test data or contain environment logic</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>E) Test Independence & Data</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Test does not rely on execution order</li>
                        <li>[ ] Parallel-safe (unique data or isolated state)</li>
                        <li>[ ] Setup/teardown is handled via fixtures or API utilities</li>
                        <li>[ ] Cleanup is performed or state is reset when needed</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>F) Quality Gates</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] ESLint passes locally / in CI</li>
                        <li>[ ] Prettier formatting applied</li>
                        <li>[ ] TypeScript strict rules respected (no unexplained <InlineCode>any</InlineCode>)</li>
                        <li>[ ] Test failure artifacts are supported (trace/screenshot/video policy respected)</li>
                    </ul>

                    <h3 style={itemHeaderStyle}>G) Documentation & Maintainability</h3>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] New utilities/pages include brief comments where needed</li>
                        <li>[ ] Non-obvious design decisions are documented (short note in code or PR)</li>
                        <li>[ ] Any standards exception has justification and approval</li>
                    </ul>
                </div>

                {/* Section 8: Acceptance Criteria */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>8) Acceptance Criteria Checklist (Must Pass)</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>[ ] Naming defined for test files, describe blocks, test titles</li>
                        <li>[ ] Naming defined for Page Object classes and methods</li>
                        <li>[ ] Locator strategy documented (role-based, testid preferred)</li>
                        <li>[ ] Hard waits prohibited; auto-wait + expectations used correctly</li>
                        <li>[ ] Single responsibility rule for POM documented</li>
                        <li>[ ] Test independence and cleanup rules documented</li>
                        <li>[ ] ESLint/Prettier + TS strict baseline documented</li>
                        <li>[ ] PR Review Checklist included and enforced</li>
                    </ul>
                </div>

                {/* Section 9: Quick Examples */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>9) Quick Examples (Copy/Paste)</h2>
                    
                    <h3 style={itemHeaderStyle}>Standard test template</h3>
                    <CodeBlock code={`test.describe('Auth - Login', () => {
  test('[@smoke][@critical] should allow valid user to login and reach dashboard', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill(process.env.E2E_USER_EMAIL!);
    await page.getByLabel('Password').fill(process.env.E2E_USER_PASS!);
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByTestId('dashboard-title')).toBeVisible();
  });
});`} />

                    <h3 style={itemHeaderStyle}>Standard POM template</h3>
                    <CodeBlock code={`export class DashboardPage {
  constructor(private readonly page: Page) {}

  readonly title = () => this.page.getByTestId('dashboard-title');

  async open() {
    await this.page.goto('/dashboard');
    await expect(this.title()).toBeVisible();
  }
}`} />
                </div>

                {/* Section 10: Governance */}
                <div style={cardStyle}>
                    <h2 style={sectionHeaderStyle}>10) Governance</h2>
                    <ul style={{ paddingLeft: '28px', marginBottom: '24px', lineHeight: '1.9', fontSize: '17px', color: '#475569' }}>
                        <li>Standards updates require PR + approval by Test Architect / QA Lead</li>
                        <li>Violations (hard waits, missing tags, brittle locators) are <strong>merge blockers</strong></li>
                        <li>Exceptions must be documented and approved</li>
                    </ul>
                </div>

                <Footer />
            </div>
        );
    }
}

export default NamingConventions;
