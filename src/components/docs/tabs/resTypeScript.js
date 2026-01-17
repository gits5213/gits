import React from 'react';
import Footer from '../../../components/footer';
import PdfDownload from '../../shared/PdfDownload';
import { scrollToTypeScriptItem } from '../../../utils/scrollHelpers';
import { checklistGridStyles, checklistLinkStyles } from '../../../utils/globalStyles';

const resTypeScript = () => {
    const scrollToItem = scrollToTypeScriptItem;

    return(
        <div className='page-tab-body'>
            <div>
                <h3>TypeScript for Playwright Test Automation</h3>
                <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f0f7fa', borderRadius: '5px' }}>
                    <p>
                        <strong>Page Description:</strong> TypeScript is a statically typed superset of JavaScript that brings 
                        type safety, better tooling, and improved code maintainability to Playwright test automation. This checklist 
                        provides an end-to-end guide to TypeScript concepts essential for building robust, scalable, and maintainable 
                        Playwright test automation frameworks. Each concept includes a definition and real-world examples from 
                        test automation scenarios.
                    </p>
                    <p>
                        Whether you're writing Page Object Models, creating reusable utilities, or building complex test frameworks, 
                        understanding these TypeScript fundamentals will help you write better, more reliable automation code.
                    </p>
                </div>
            </div>

            {/* PDF Download Section */}
            <PdfDownload
                pdfPath="TypeScript_for_Playwright_Checklist_Handout.pdf"
                title="📥 Download TypeScript Checklist Handout"
                description="Download the complete TypeScript for Playwright Checklist handout"
            />

            <div>
                <h3>TypeScript Checklist for Playwright Automation (End-to-End)</h3>

                {/* Master Checklist Card */}
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '40px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb',
                    textAlign: 'left'
                }}>
                    <div style={checklistGridStyles.modern}>
                        {[
                            { 
                                title: 'A. Language Fundamentals (must use daily)', 
                                items: [
                                    { text: 'const vs let (immutability mindset)', num: 1 },
                                    { text: 'Primitive types + type inference', num: 2 },
                                    { text: 'Arrays & objects (typed)', num: 3 },
                                    { text: 'Functions + return types', num: 4 },
                                    { text: 'async/await + Promise basics', num: 5 },
                                    { text: 'Error handling (try/catch)', num: 6 }
                                ]
                            },
                            { 
                                title: 'B. Code Organization (framework essentials)', 
                                items: [
                                    { text: 'ES Modules: import / export', num: 7 },
                                    { text: 'Folder structure conventions (tests/, pages/, utils/, fixtures/, data/)', num: 8 },
                                    { text: 'Reusable helper functions (pure utilities)', num: 9 }
                                ]
                            },
                            { 
                                title: 'C. Type Safety for Automation (core to TS value)', 
                                items: [
                                    { text: 'type vs interface (test data + page contracts)', num: 10 },
                                    { text: 'Optional properties (?) & union types (|)', num: 11 },
                                    { text: 'Type narrowing (safe guards in tests)', num: 12 },
                                    { text: 'Enums / string unions for constants (roles, environments, tags)', num: 13 },
                                    { text: 'Generics (for reusable utilities like API wrappers, data readers)', num: 14 }
                                ]
                            },
                            { 
                                title: 'D. Playwright-Specific TypeScript Usage', 
                                items: [
                                    { text: 'Typed Page Objects (classes)', num: 15 },
                                    { text: 'Typed fixtures (test.extend)', num: 16 },
                                    { text: 'Strong typing for locators and returned values', num: 17 },
                                    { text: 'Typed config and environment variables', num: 18 },
                                    { text: 'Typed API test utilities (APIRequestContext)', num: 19 },
                                    { text: 'Assertions & custom expect helpers (typed)', num: 20 }
                                ]
                            },
                            { 
                                title: 'E. Quality & Maintainability (professional standard)', 
                                items: [
                                    { text: 'Linting + formatting (ESLint/Prettier)', num: 21 },
                                    { text: 'Avoid any (use unknown + narrowing when needed)', num: 22 },
                                    { text: 'Reusable test data patterns (factories/builders)', num: 23 },
                                    { text: 'Clean error messages + logging', num: 24 },
                                    { text: 'Scalability patterns (composition over inheritance)', num: 25 }
                                ]
                            }
                        ].map((section, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                padding: '20px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    marginBottom: '16px',
                                    paddingBottom: '12px',
                                    borderBottom: '2px solid #e5e7eb',
                                    textAlign: 'left'
                                }}>
                                    {section.title}
                                </h4>
                                <ul style={{ 
                                    lineHeight: '1.8', 
                                    fontSize: '14px',
                                    color: '#475569',
                                    paddingLeft: '20px',
                                    margin: 0,
                                    flex: 1,
                                    textAlign: 'left'
                                }}>
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx} style={{ marginBottom: '6px' }}>
                                            <a
                                                href={`#ts-item-${item.num}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToItem(item.num);
                                                }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = checklistLinkStyles.hover.color;
                                                    e.target.style.borderBottomColor = checklistLinkStyles.hover.borderBottomColor;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = checklistLinkStyles.base.color;
                                                    e.target.style.borderBottomColor = checklistLinkStyles.base.borderBottomColor;
                                                }}
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h3>TypeScript for Playwright Automation — Checklist + Definitions + Examples</h3>

                <div id="ts-item-1" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>1) const vs let</h4>
                    <p><strong>Definition:</strong> Use <code>const</code> for values that should not be reassigned; use <code>let</code> only when reassignment is required. This reduces bugs and improves readability.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`const baseUrl = "https://example.com";
let retries = 0;
retries++;`}
                    </pre>
                </div>

                <div id="ts-item-2" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>2) Primitive types + type inference</h4>
                    <p><strong>Definition:</strong> TypeScript automatically infers types from assigned values; explicit primitive types help when clarity is needed.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`const suiteName = "Smoke Suite"; // inferred string
const maxUsers: number = 5;
const headless: boolean = true;`}
                    </pre>
                </div>

                <div id="ts-item-3" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>3) Typed arrays & objects</h4>
                    <p><strong>Definition:</strong> Define types for arrays/objects to ensure consistent structure and prevent invalid values.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`const browsers: string[] = ["chromium", "firefox", "webkit"];

const user: { username: string; password: string } = {
  username: "qa_user",
  password: "secret",
};`}
                    </pre>
                </div>

                <div id="ts-item-4" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>4) Functions + return types</h4>
                    <p><strong>Definition:</strong> Declare function parameter and return types to make behavior predictable and enforce correct usage.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`function buildEmail(name: string): string {
  return \`\${name.toLowerCase()}@example.com\`;
}`}
                    </pre>
                </div>

                <div id="ts-item-5" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>5) async/await + Promise basics</h4>
                    <p><strong>Definition:</strong> Use <code>async/await</code> to write clear asynchronous code—Playwright actions are async and must be awaited.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "user");
  await page.fill("#password", "pass");
  await page.click("button[type=submit]");
  await expect(page).toHaveURL(/dashboard/);
});`}
                    </pre>
                </div>

                <div id="ts-item-6" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>6) Error handling (try/catch)</h4>
                    <p><strong>Definition:</strong> Catch errors to add context (screenshots/logs) while still failing the test correctly.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { test } from "@playwright/test";

test("safe action", async ({ page }) => {
  try {
    await page.goto("https://example.com");
    await page.click("text=Start");
  } catch (err) {
    await page.screenshot({ path: "error.png", fullPage: true });
    throw err;
  }
});`}
                    </pre>
                </div>

                <div id="ts-item-7" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>7) ES Modules: import / export</h4>
                    <p><strong>Definition:</strong> Split code into reusable files and share functions/classes cleanly using module syntax.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// utils/date.ts
export function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

// test
import { todayISO } from "../utils/date";
// Example: todayISO() returns current date in ISO format`}
                    </pre>
                </div>

                <div id="ts-item-8" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>8) Folder structure conventions</h4>
                    <p><strong>Definition:</strong> Standard folders ensure maintainability and team consistency (tests, pages, fixtures, utils, data).</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`tests/    pages/    fixtures/    utils/    data/`}
                    </pre>
                </div>

                <div id="ts-item-9" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>9) Reusable helper functions</h4>
                    <p><strong>Definition:</strong> Create small, pure utility functions to avoid duplicating logic across tests.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`export function assertNonEmpty(value: string, label: string): void {
  if (!value.trim()) throw new Error(\`\${label} must not be empty\`);
}`}
                    </pre>
                </div>

                <div id="ts-item-10" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>10) type vs interface</h4>
                    <p><strong>Definition:</strong> Use <code>interface</code> for object shapes (often extended); use <code>type</code> for unions, compositions, and aliases.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`export interface Credentials { username: string; password: string; }
export type UserRole = "admin" | "member" | "guest";`}
                    </pre>
                </div>

                <div id="ts-item-11" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>11) Optional properties (?) & union types (|)</h4>
                    <p><strong>Definition:</strong> Optional properties allow missing fields; unions allow multiple valid types for a value.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`interface UserProfile { name: string; phone?: string; }

function formatPhone(phone: string | undefined): string {
  return phone ?? "N/A";
}`}
                    </pre>
                </div>

                <div id="ts-item-12" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>12) Type narrowing (safe guards)</h4>
                    <p><strong>Definition:</strong> Convert broad types (<code>unknown</code>, union types) into safe, specific types using checks before using them.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`function toErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}`}
                    </pre>
                </div>

                <div id="ts-item-13" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>13) Enums / string unions for constants</h4>
                    <p><strong>Definition:</strong> Use string unions (or enums) to restrict values to approved constants (env, role, browser).</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`type Env = "dev" | "qa" | "prod";
const env: Env = "qa";`}
                    </pre>
                </div>

                <div id="ts-item-14" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>14) Generics</h4>
                    <p><strong>Definition:</strong> Write reusable functions/classes that work with many types while preserving type safety.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`function first<T>(items: T[]): T {
  return items[0];
}`}
                    </pre>
                </div>

                <div id="ts-item-15" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>15) Typed Page Objects (classes)</h4>
                    <p><strong>Definition:</strong> Encapsulate page actions/locators into a class to reduce duplication and improve readability.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  constructor(private page: Page) {
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submit = page.locator("button[type=submit]");
  }

  async goto(): Promise<void> { await this.page.goto("/login"); }

  async login(user: string, pass: string): Promise<void> {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
    await expect(this.page).toHaveURL(/dashboard/);
  }
}`}
                    </pre>
                </div>

                <div id="ts-item-16" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>16) Typed fixtures (test.extend)</h4>
                    <p><strong>Definition:</strong> Use fixtures to inject reusable setup (pages, login, API clients) into tests with strong typing.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

type Fixtures = { loginPage: LoginPage };

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
export { expect } from "@playwright/test";`}
                    </pre>
                </div>

                <div id="ts-item-17" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>17) Strong typing for locators & return values</h4>
                    <p><strong>Definition:</strong> Ensure helper functions return correct Playwright types to avoid misuse and improve IDE support.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { Page, Locator } from "@playwright/test";

export function menuItem(page: Page, name: string): Locator {
  return page.getByRole("menuitem", { name });
}`}
                    </pre>
                </div>

                <div id="ts-item-18" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>18) Typed config + environment variables</h4>
                    <p><strong>Definition:</strong> Validate and type environment variables to avoid runtime surprises and misconfiguration.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`type EnvName = "dev" | "qa" | "prod";

function getEnv(): EnvName {
  const v = process.env.ENV as EnvName | undefined;
  return v ?? "qa";
}`}
                    </pre>
                </div>

                <div id="ts-item-19" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>19) Typed API utilities (APIRequestContext)</h4>
                    <p><strong>Definition:</strong> Build reusable API helpers with typed inputs/outputs to create data and validate endpoints reliably.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { APIRequestContext, expect } from "@playwright/test";

export async function createUser(api: APIRequestContext, payload: { name: string }) {
  const res = await api.post("/api/users", { data: payload });
  expect(res.ok()).toBeTruthy();
  return (await res.json()) as { id: string; name: string };
}`}
                    </pre>
                </div>

                <div id="ts-item-20" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>20) Assertions & custom expect helpers (typed)</h4>
                    <p><strong>Definition:</strong> Centralize common assertions for consistency and clearer failure messages.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { expect, Locator } from "@playwright/test";

export async function expectVisible(locator: Locator): Promise<void> {
  await expect(locator).toBeVisible();
}`}
                    </pre>
                </div>

                <div id="ts-item-21" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>21) Linting + formatting (ESLint/Prettier)</h4>
                    <p><strong>Definition:</strong> Enforce consistent style and catch common issues early; required for maintainable team code.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`Rule: code must pass lint + formatting before PR merge.`}
                    </pre>
                </div>

                <div id="ts-item-22" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>22) Avoid any (use unknown + narrowing)</h4>
                    <p><strong>Definition:</strong> <code>any</code> disables type safety; use <code>unknown</code> and narrow safely before using the value.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`function parseJson(text: string): unknown {
  return JSON.parse(text);
}`}
                    </pre>
                </div>

                <div id="ts-item-23" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>23) Reusable test data patterns (factories/builders)</h4>
                    <p><strong>Definition:</strong> Generate consistent test data with defaults + overrides to keep tests readable and scalable.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`type User = { username: string; password: string; role: "admin" | "user" };

export function buildUser(overrides?: Partial<User>): User {
  return { username: "user1", password: "pass1", role: "user", ...overrides };
}`}
                    </pre>
                </div>

                <div id="ts-item-24" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>24) Clean error messages + logging</h4>
                    <p><strong>Definition:</strong> Provide actionable failure context (which data, which step) to speed up debugging.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`export function failWithContext(msg: string, ctx: Record<string, unknown>): never {
  throw new Error(\`\${msg} | context=\${JSON.stringify(ctx)}\`);
}`}
                    </pre>
                </div>

                <div id="ts-item-25" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                    <h4>25) Scalability patterns (composition over inheritance)</h4>
                    <p><strong>Definition:</strong> Prefer composing small components (Nav, Widgets, Sections) instead of deep class inheritance to keep framework flexible.</p>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`import { Page } from "@playwright/test";

class Nav {
  constructor(private page: Page) {}
  async openSettings() {
    await this.page.getByRole("link", { name: "Settings" }).click();
  }
}

class SettingsPage {
  constructor(private page: Page, private nav: Nav) {}
  async goto() { await this.nav.openSettings(); }
}`}
                    </pre>
                </div>
            </div>

            <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f7fa', borderRadius: '5px' }}>
                <h3>Summary</h3>
                <p>
                    This comprehensive checklist covers all essential TypeScript concepts needed for professional Playwright test automation. 
                    By mastering these fundamentals, you'll be able to:
                </p>
                <ul>
                    <li>Write type-safe, maintainable test code</li>
                    <li>Build scalable test frameworks with proper organization</li>
                    <li>Create reusable utilities and Page Objects</li>
                    <li>Handle errors gracefully with proper typing</li>
                    <li>Maintain code quality with linting and formatting</li>
                    <li>Scale your test suite efficiently</li>
                </ul>
                <p>
                    Remember: TypeScript's value comes from catching errors at compile time, improving IDE support, 
                    and making code self-documenting through types. Use these patterns consistently throughout your 
                    Playwright test automation projects.
                </p>
            </div>

            <section className='pt4'>
                <Footer />
            </section>
        </div>
    )
}
export default resTypeScript;
