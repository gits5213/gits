import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import webDriverIOLogo from '../../../images/tabs/playwrightLogo.png'; 
import Footer from '../../../components/footer';
import PdfDownload from '../../shared/PdfDownload';
import { scrollToItem, scrollToIntroSection } from '../../../utils/scrollHelpers';
import { modernCardStyles, codeBlockStyles, sectionHeaderStyles, itemHeaderStyles, pageContainerStyles, modernHeroStyles, checklistGridStyles, checklistLinkStyles } from '../../../utils/globalStyles';

const resPlaywright = () => {

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
                    Playwright Framework
                </h1>
                <p style={modernHeroStyles.subtitle}>
                    Fast and Reliable End-to-End Testing for Modern Web Apps
                </p>
            </div>

            {/* Image Section */}
            <div style={{
                ...cardStyle,
                textAlign: 'center',
                padding: '32px'
            }}>
                <img 
                    src={webDriverIOLogo} 
                    alt='Playwright Logo'
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
                    href={link.PLAYWRIGHT_GITHUB || link.GITHUB_ICON} 
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
                    Playwright on GitHub
                </a>
                <a 
                    href={link.PLAYWRIGHT_WEBSITE || link.GITHUB_ICON} 
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
                    Playwright API
                </a>
            </div>

            {/* PDF Download Section */}
            <PdfDownload
                pdfPath="Playwright_TS_User_Actions_Handout.pdf"
                title="📥 Download Playwright User Actions Handout"
                description="Download the complete Playwright TypeScript User Events & Actions handout"
            />

            {/* Playwright Introduction Checklist */}
            <div style={{
                ...cardStyle,
                marginBottom: '32px'
            }}>
                <h3 style={{ 
                    color: '#00416A', 
                    fontSize: '24px', 
                    marginBottom: '24px',
                    fontWeight: '600',
                    textAlign: 'left'
                }}>
                    Playwright Getting Started Checklist
                </h3>
                <div style={checklistGridStyles.compact}>
                    {[
                        { text: 'What is Playwright?', id: 'intro-what-is' },
                        { text: 'Installation', id: 'intro-installation' },
                        { text: 'Running Tests', id: 'intro-running-tests' },
                        { text: 'Codegen - Generate Tests', id: 'intro-codegen' },
                        { text: 'Other Useful Commands', id: 'intro-other-commands' }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            padding: '16px',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToIntroSection(item.id);
                                }}
                                style={{
                                    color: '#00416A',
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    width: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#005a8a';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#00416A';
                                }}
                            >
                                {item.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Playwright Introduction Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '48px'
            }}>
                <h2 id="intro-what-is" style={{ 
                    color: '#00416A', 
                    fontSize: '28px', 
                    marginBottom: '20px',
                    fontWeight: '700',
                    textAlign: 'left',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    What is Playwright?
                </h2>
                
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        <strong>Playwright Test</strong> is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling. Playwright supports <strong>Chromium, WebKit and Firefox</strong> on Windows, Linux and macOS, locally or in CI, headless or headed, with native mobile emulation for Chrome (Android) and Mobile Safari.
                    </p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '20px', 
                        marginBottom: '12px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Key Features
                    </h3>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Cross-browser testing:</strong> Test across Chromium, Firefox, and WebKit</li>
                        <li><strong>Cross-platform:</strong> Works on Windows, Linux, and macOS</li>
                        <li><strong>Auto-waiting:</strong> Automatically waits for elements to be ready before performing actions</li>
                        <li><strong>Isolation:</strong> Each test runs in its own browser context for true isolation</li>
                        <li><strong>Parallelization:</strong> Run tests in parallel across multiple browsers</li>
                        <li><strong>Rich tooling:</strong> Trace viewer, UI mode, codegen, and more</li>
                        <li><strong>Mobile emulation:</strong> Native mobile emulation for Chrome (Android) and Mobile Safari</li>
                        <li><strong>Network interception:</strong> Mock and stub network requests</li>
                        <li><strong>Multiple languages:</strong> Supports TypeScript, JavaScript, Python, Java, and .NET</li>
                    </ul>
                </div>

                <div id="intro-installation" style={{ 
                    marginBottom: '24px',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '20px', 
                        marginBottom: '12px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Installation
                    </h3>
                    <p style={{ 
                        fontSize: '15px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
                        Get started by installing Playwright using npm, yarn, or pnpm:
                    </p>
                    <pre style={{
                        backgroundColor: '#1e293b',
                        color: '#e2e8f0',
                        padding: '16px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px',
                        fontFamily: 'Monaco, "Courier New", monospace',
                        lineHeight: '1.6',
                        border: '1px solid #334155',
                        marginTop: '12px',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
{`npm init playwright@latest
# or
yarn create playwright
# or
pnpm create playwright`}
                    </pre>
                    <p style={{ 
                        fontSize: '15px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
                        When prompted, choose TypeScript or JavaScript, tests folder name, and whether to add GitHub Actions workflow. Playwright downloads required browser binaries and creates the test configuration.
                    </p>
                </div>

                <div id="intro-running-tests" style={{ 
                    marginBottom: '24px',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '20px', 
                        marginBottom: '12px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Running Tests
                    </h3>
                    <p style={{ 
                        fontSize: '15px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
                        Run tests with the following commands:
                    </p>
                    <pre style={{
                        backgroundColor: '#1e293b',
                        color: '#e2e8f0',
                        padding: '16px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px',
                        fontFamily: 'Monaco, "Courier New", monospace',
                        lineHeight: '1.6',
                        border: '1px solid #334155',
                        marginTop: '12px',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
{`# Run all tests
npx playwright test

# Run in headed mode (see browser)
npx playwright test --headed

# Run a specific browser
npx playwright test --project=chromium

# Run a specific test file
npx playwright test tests/login.spec.ts

# Run tests matching a pattern
npx playwright test --grep "login"

# Run with UI mode (interactive)
npx playwright test --ui

# Run in debug mode
npx playwright test --debug

# Run with trace (for debugging)
npx playwright test --trace on

# Show HTML report
npx playwright show-report`}
                    </pre>
                </div>

                <div id="intro-codegen" style={{ 
                    marginBottom: '24px',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '20px', 
                        marginBottom: '12px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Codegen - Generate Tests
                    </h3>
                    <p style={{ 
                        fontSize: '15px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
                        Use Codegen to automatically generate tests by recording your interactions:
                    </p>
                    <pre style={{
                        backgroundColor: '#1e293b',
                        color: '#e2e8f0',
                        padding: '16px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px',
                        fontFamily: 'Monaco, "Courier New", monospace',
                        lineHeight: '1.6',
                        border: '1px solid #334155',
                        marginTop: '12px',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
{`# Generate tests by recording interactions
npx playwright codegen

# Generate tests for a specific URL
npx playwright codegen https://example.com

# Generate tests with specific browser
npx playwright codegen --browser=firefox

# Generate tests and save to file
npx playwright codegen --target=typescript -o tests/example.spec.ts`}
                    </pre>
                </div>

                <div id="intro-other-commands" style={{ 
                    marginBottom: '24px',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '20px', 
                        marginBottom: '12px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Other Useful Commands
                    </h3>
                    <pre style={{
                        backgroundColor: '#1e293b',
                        color: '#e2e8f0',
                        padding: '16px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px',
                        fontFamily: 'Monaco, "Courier New", monospace',
                        lineHeight: '1.6',
                        border: '1px solid #334155',
                        marginTop: '12px',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
{`# Install/update browsers
npx playwright install
npx playwright install chromium

# Install browsers with system dependencies
npx playwright install --with-deps

# Open Playwright Inspector
npx playwright open

# Show trace viewer
npx playwright show-trace trace.zip

# Check Playwright version
npx playwright --version

# Run tests in parallel (sharding)
npx playwright test --shard=1/4

# Run tests with retries
npx playwright test --retries=2

# Run tests with specific timeout
npx playwright test --timeout=60000

# Run only failed tests
npx playwright test --last-failed

# Update Playwright
npm install -D @playwright/test@latest
npx playwright install --with-deps`}
                    </pre>
                </div>

                <div style={{ 
                    backgroundColor: '#f0f7fa',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    marginTop: '24px'
                }}>
                    <p style={{ 
                        fontSize: '15px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <strong>Learn more:</strong> Visit the official <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'none', borderBottom: '1px solid #00416A' }}>Playwright Documentation</a> for comprehensive guides, API references, and best practices.
                    </p>
                </div>
            </div>

            {/* Main Content Section */}
            <div style={{ marginBottom: '48px' }}>
                <div style={{
                    textAlign: 'left',
                    marginBottom: '40px'
                }}>
                    <h2 style={{ 
                        color: '#00416A', 
                        fontSize: '32px', 
                        marginBottom: '12px',
                        fontWeight: '700'
                    }}>
                        Playwright TypeScript User Events & Actions Master List
                    </h2>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#64748b',
                        maxWidth: '800px',
                        margin: '0',
                        lineHeight: '1.6'
                    }}>
                        Below is an <strong>end-to-end Playwright TypeScript "User Events & Actions" master list</strong> you can use throughout the course.
                    </p>
                </div>

                {/* Master Checklist Card */}
                <div style={cardStyle}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '24px', 
                        marginBottom: '24px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        1) Master Checklist — Playwright User Events & Actions
                    </h3>

                    <div style={checklistGridStyles.modern}>
                        {[
                            { title: 'A. Navigation & Page Lifecycle', items: [
                                { text: 'Launch browser and open a page', num: 1 },
                                { text: 'Navigate to URL and wait for page readiness', num: 2 },
                                { text: 'Go back/forward/refresh', num: 3 },
                                { text: 'Work with multiple tabs/windows', num: 4 },
                                { text: 'Handle iframes (frames)', num: 5 },
                                { text: 'Handle popups (new page from click)', num: 6 }
                            ]},
                            { title: 'B. Locators & Element Interaction', items: [
                                { text: 'Locate by role/name/label/text/testid', num: 7 },
                                { text: 'Click (single/double/right click)', num: 8 },
                                { text: 'Hover', num: 9 },
                                { text: 'Focus / blur', num: 10 },
                                { text: 'Fill input / clear input', num: 11 },
                                { text: 'Type with delays (simulate real typing)', num: 12 },
                                { text: 'Press keyboard keys / shortcuts', num: 13 },
                                { text: 'Select dropdown options', num: 14 },
                                { text: 'Check/uncheck checkbox', num: 15 },
                                { text: 'Choose radio button', num: 16 },
                                { text: 'Upload file(s)', num: 17 },
                                { text: 'Download file(s)', num: 18 },
                                { text: 'Drag and drop', num: 19 },
                                { text: 'Scroll into view / scroll container', num: 20 }
                            ]},
                            { title: 'C. Assertions & Validation', items: [
                                { text: 'Assert visibility / hidden', num: 21 },
                                { text: 'Assert text / partial text', num: 22 },
                                { text: 'Assert attribute / CSS / value', num: 23 },
                                { text: 'Assert URL / title', num: 24 },
                                { text: 'Assert enabled/disabled / editable', num: 25 },
                                { text: 'Soft assertions when needed', num: 26 }
                            ]},
                            { title: 'D. Waiting & Stability', items: [
                                { text: 'Rely on auto-waiting correctly', num: 27 },
                                { text: 'Wait for element state (visible/hidden/attached)', num: 28 },
                                { text: 'Wait for navigation / URL changes', num: 29 },
                                { text: 'Wait for network response/request', num: 30 }
                            ]},
                            { title: 'E. Dialogs, Alerts, and Overlays', items: [
                                { text: 'Handle browser dialogs (alert/confirm/prompt)', num: 31 },
                                { text: 'Handle modals (close, confirm)', num: 32 },
                                { text: 'Handle toast notifications', num: 33 }
                            ]},
                            { title: 'F. Authentication & Session', items: [
                                { text: 'Reuse authenticated state (storageState)', num: 34 },
                                { text: 'Login once, run many tests', num: 35 }
                            ]},
                            { title: 'G. Network & API Actions', items: [
                                { text: 'Use Playwright APIRequestContext for API calls', num: 36 },
                                { text: 'Create data via API then verify via UI', num: 37 },
                                { text: 'Network mocking/interception (route)', num: 38 }
                            ]},
                            { title: 'H. Test Structure & Reporting', items: [
                                { text: 'Hooks and structure', num: 39 },
                                { text: 'Tags (Smoke/Regression)', num: 40 },
                                { text: 'Screenshot/Trace on failure', num: 41 }
                            ]}
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
                                                href={`#item-${item.num}`}
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

                {/* Definitions + Examples */}
                <div style={cardStyle}>
                    <h3 style={{ 
                        color: '#00416A', 
                        fontSize: '24px', 
                        marginBottom: '32px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        2) Definitions + One Example (one-by-one)
                    </h3>

                    {/* Section A: Navigation & Page Lifecycle */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>A) Navigation & Page Lifecycle</h4>

                        {[
                            { num: 1, title: 'Launch browser and open a page', def: 'Start a Playwright test and open a browser page context to run user actions.', code: `import { test, expect } from "@playwright/test";

test("open homepage", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example/);
});`},
                            { num: 2, title: 'Navigate to URL and wait for readiness', def: 'Navigate to a URL and ensure the page is ready (DOM content loaded or network idle).', code: `await page.goto("https://example.com", { waitUntil: "domcontentloaded" });`},
                            { num: 3, title: 'Go back / forward / refresh', def: 'Simulate browser navigation history actions.', code: `await page.goBack();
await page.goForward();
await page.reload();`},
                            { num: 4, title: 'Multiple tabs/windows', def: 'Work with more than one page created in the same browser context.', code: `const [newPage] = await Promise.all([
  page.context().waitForEvent("page"),
  page.getByRole("link", { name: "Open new tab" }).click(),
]);

await newPage.waitForLoadState();
await expect(newPage).toHaveURL(/new/);`},
                            { num: 5, title: 'Iframes (frames)', def: 'Interact with elements inside iframe content.', code: `const frame = page.frameLocator("#payment-iframe");
await frame.getByRole("textbox", { name: "Card number" }).fill("4111111111111111");`},
                            { num: 6, title: 'Popups (new page from click)', def: 'Capture and interact with a popup created via window.open.', code: `const popup = await page.waitForEvent("popup", async () => {
  await page.getByText("Terms & Conditions").click();
});
await expect(popup).toHaveURL(/terms/);`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>

                    {/* Section B: Locators & Element Interaction */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>B) Locators & Element Interaction</h4>

                        {[
                            { num: 7, title: 'Locate by role/name/label/text/testid', def: 'Select elements using reliable selectors (accessibility-first).', code: `const loginBtn = page.getByRole("button", { name: "Login" });
await expect(loginBtn).toBeVisible();`},
                            { num: 8, title: 'Click (single/double/right click)', def: 'Trigger mouse click actions.', code: `await page.getByRole("button", { name: "Submit" }).click();
await page.getByText("Row 1").dblclick();
await page.getByText("Options").click({ button: "right" });`},
                            { num: 9, title: 'Hover', def: 'Move mouse pointer over an element to reveal menus/tooltips.', code: `await page.getByText("Profile").hover();
await expect(page.getByText("Logout")).toBeVisible();`},
                            { num: 10, title: 'Focus / blur', def: 'Set focus to an input or remove focus to trigger validation.', code: `const email = page.getByLabel("Email");
await email.focus();
await email.fill("wrong-email");
await page.getByRole("heading").click(); // blur by clicking elsewhere`},
                            { num: 11, title: 'Fill input / clear input', def: 'Enter text into input fields; clear them when needed.', code: `const search = page.getByPlaceholder("Search");
await search.fill("Playwright");
await search.clear();`},
                            { num: 12, title: 'Type with delays', def: 'Simulate real typing (sometimes useful for debounced inputs).', code: `await page.getByLabel("Username").type("mdzaman", { delay: 50 });`},
                            { num: 13, title: 'Press keyboard keys / shortcuts', def: 'Simulate keyboard actions like Enter, Tab, Ctrl/Cmd shortcuts.', code: `await page.getByLabel("Password").fill("Secret123");
await page.keyboard.press("Enter");`},
                            { num: 14, title: 'Select dropdown options', def: 'Choose a value from <select> or custom dropdown.', code: `await page.getByLabel("Country").selectOption("US");`},
                            { num: 15, title: 'Check / uncheck checkbox', def: 'Toggle checkbox selection reliably.', code: `const terms = page.getByLabel("I agree");
await terms.check();
await expect(terms).toBeChecked();
await terms.uncheck();`},
                            { num: 16, title: 'Choose radio button', def: 'Select one option among many.', code: `await page.getByLabel("Pay by Card").check();`},
                            { num: 17, title: 'Upload files', def: 'Upload one or more files through file input.', code: `await page.setInputFiles('input[type="file"]', "tests/fixtures/sample.pdf");`},
                            { num: 18, title: 'Download files', def: 'Capture and validate a file download triggered by user action.', code: `const download = await Promise.all([
  page.waitForEvent("download"),
  page.getByRole("button", { name: "Download report" }).click(),
]).then(([d]) => d);

const path = await download.path();
expect(path).toBeTruthy();`},
                            { num: 19, title: 'Drag and drop', def: 'Move one element to another via drag-drop.', code: `await page.dragAndDrop("#source", "#target");`},
                            { num: 20, title: 'Scroll into view / scroll container', def: 'Ensure element is visible within viewport or scrollable area.', code: `const footer = page.getByText("Footer");
await footer.scrollIntoViewIfNeeded();
await expect(footer).toBeVisible();`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>

                    {/* Section C: Assertions & Validation */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>C) Assertions & Validation</h4>

                        {[
                            { num: 21, title: 'Assert visibility / hidden', def: 'Confirm element is shown or not shown.', code: `await expect(page.getByText("Welcome")).toBeVisible();
await expect(page.getByText("Error")).toBeHidden();`},
                            { num: 22, title: 'Assert text / partial text', def: 'Validate UI text content.', code: `await expect(page.getByTestId("cart-count")).toHaveText("2");
await expect(page.getByRole("alert")).toContainText("failed");`},
                            { num: 23, title: 'Assert attribute / value', def: 'Validate HTML attributes or input values.', code: `await expect(page.getByRole("button", { name: "Save" })).toHaveAttribute("disabled", "");
await expect(page.getByLabel("Email")).toHaveValue("user@example.com");`},
                            { num: 24, title: 'Assert URL / title', def: 'Validate navigation result.', code: `await expect(page).toHaveURL(/dashboard/);
await expect(page).toHaveTitle(/Dashboard/);`},
                            { num: 25, title: 'Assert enabled/disabled / editable', def: 'Validate state of controls.', code: `await expect(page.getByRole("button", { name: "Submit" })).toBeEnabled();
await expect(page.getByLabel("Username")).toBeEditable();`},
                            { num: 26, title: 'Soft assertions', def: 'Continue test execution even if one assertion fails (use carefully).', code: `expect.soft(await page.getByTestId("status").innerText()).toContain("OK");`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>

                    {/* Section D: Waiting & Stability */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>D) Waiting & Stability</h4>

                        {[
                            { num: 27, title: 'Use auto-waiting correctly', def: 'Let Playwright wait for elements/actions naturally by using locators + expects.', code: `await page.getByRole("button", { name: "Login" }).click();
await expect(page.getByText("Dashboard")).toBeVisible();`},
                            { num: 28, title: 'Wait for element states', def: 'Wait for visible/hidden/attached states when necessary.', code: `await page.getByRole("progressbar").waitFor({ state: "hidden" });`},
                            { num: 29, title: 'Wait for navigation / URL changes', def: 'Ensure navigation completes after an action.', code: `await Promise.all([
  page.waitForURL(/checkout/),
  page.getByRole("button", { name: "Checkout" }).click(),
]);`},
                            { num: 30, title: 'Wait for network response', def: 'Validate backend response tied to UI action.', code: `const response = await page.waitForResponse((r) =>
  r.url().includes("/api/login") && r.status() === 200
);
expect(response.ok()).toBeTruthy();`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>

                    {/* Section E: Dialogs, Alerts, Overlays */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>E) Dialogs, Alerts, Overlays</h4>

                        {[
                            { num: 31, title: 'Handle browser dialogs', def: 'Accept/dismiss alerts/confirmations.', code: `page.on("dialog", async (dialog) => {
  await dialog.accept();
});
await page.getByRole("button", { name: "Delete" }).click();`},
                            { num: 32, title: 'Handle modals', def: 'Interact with modal dialogs (confirm/cancel).', code: `await page.getByRole("dialog").getByRole("button", { name: "Confirm" }).click();`},
                            { num: 33, title: 'Handle toast notifications', def: 'Validate transient success/error messages.', code: `await expect(page.getByRole("status")).toContainText("Saved successfully");`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>

                    {/* Section F: Authentication & Session */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>F) Authentication & Session</h4>

                        {[
                            { num: 34, title: 'Reuse authenticated state (storageState)', def: 'Save login state once and reuse across tests for speed/stability.', code: `await page.goto("https://app.example.com/login");
await page.getByLabel("Username").fill("user");
await page.getByLabel("Password").fill("pass");
await page.getByRole("button", { name: "Login" }).click();
await page.context().storageState({ path: "storageState.json" });`},
                            { num: 35, title: 'Use storageState in config', def: 'Load stored state for all tests.', code: `// playwright.config.ts
use: {
  storageState: "storageState.json",
}`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>

                    {/* Section G: Network & API Actions */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>G) Network & API Actions</h4>

                        {[
                            { num: 36, title: 'API calls via APIRequestContext', def: 'Call APIs directly for setup/validation without UI.', code: `import { test, expect } from "@playwright/test";

test("create user via API", async ({ request }) => {
  const res = await request.post("https://api.example.com/users", {
    data: { name: "Zaman" },
  });
  expect(res.status()).toBe(201);
});`},
                            { num: 37, title: 'Create data via API then verify via UI', def: 'Combine API setup with UI validation (fast & reliable).', code: `test("API setup -> UI verify", async ({ request, page }) => {
  const res = await request.post("https://api.example.com/items", { data: { name: "Item1" } });
  expect(res.ok()).toBeTruthy();

  await page.goto("https://app.example.com/items");
  await expect(page.getByText("Item1")).toBeVisible();
});`},
                            { num: 38, title: 'Network mocking/interception (route)', def: 'Stub responses to test UI scenarios reliably.', code: `await page.route("**/api/profile", async (route) => {
  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ name: "Mock User" }),
  });
});
await page.goto("https://app.example.com/profile");
await expect(page.getByText("Mock User")).toBeVisible();`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>

                    {/* Section H: Test Structure & Reporting */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={sectionHeaderStyle}>H) Test Structure & Reporting</h4>

                        {[
                            { num: 39, title: 'Hooks and structure', def: 'Use hooks to keep tests clean and consistent.', code: `test.describe("Auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://app.example.com");
  });

  test("smoke: home loads", async ({ page }) => {
    await expect(page).toHaveTitle(/App/);
  });
});`},
                            { num: 40, title: 'Tags (Smoke/Regression)', def: 'Mark tests so teams can run subsets.', code: `test("@smoke login works", async ({ page }) => { /* ... */ });
test("@regression checkout flow", async ({ page }) => { /* ... */ });`},
                            { num: 41, title: 'Screenshot/Trace on failure', def: 'Capture evidence automatically for debugging.', code: `// playwright.config.ts
use: {
  screenshot: "only-on-failure",
  trace: "on-first-retry",
  video: "retain-on-failure",
}`}
                        ].map((item, idx) => (
                            <div key={idx} id={`item-${item.num}`} style={{ marginBottom: '28px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                <h5 style={itemHeaderStyle}>{item.num}) {item.title}</h5>
                                <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                    <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.def}
                                </p>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '48px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resPlaywright;
