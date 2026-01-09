import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import webDriverIOLogo from '../../../images/tabs/playwrightLogo.png'; 
import Footer from '../../../components/footer';
import PdfDownload from '../../shared/PdfDownload';
import { scrollToItem, scrollToIntroSection, scrollToElement } from '../../../utils/scrollHelpers';
import { modernCardStyles, codeBlockStyles, sectionHeaderStyles, itemHeaderStyles, pageContainerStyles, modernHeroStyles, checklistGridStyles, checklistLinkStyles, colors } from '../../../utils/globalStyles';

const ResPlaywright = () => {
    // State for checklist section collapse/expand
    const [isChecklistExpanded, setIsChecklistExpanded] = useState(false);
    // State for fixtures section collapse/expand
    const [isFixturesExpanded, setIsFixturesExpanded] = useState(false);
    // State for role-based auth section collapse/expand
    const [isRoleAuthExpanded, setIsRoleAuthExpanded] = useState(false);
    // State for user events master list section collapse/expand
    const [isUserEventsExpanded, setIsUserEventsExpanded] = useState(false);

    // Toggle checklist section
    const toggleChecklist = () => {
        setIsChecklistExpanded(!isChecklistExpanded);
    };

    // Toggle fixtures section
    const toggleFixtures = () => {
        setIsFixturesExpanded(!isFixturesExpanded);
    };

    // Toggle role-based auth section
    const toggleRoleAuth = () => {
        setIsRoleAuthExpanded(!isRoleAuthExpanded);
    };

    // Toggle user events master list section
    const toggleUserEvents = () => {
        setIsUserEventsExpanded(!isUserEventsExpanded);
    };

    // Helper function to remove markdown syntax
    const removeMarkdown = (text) => {
        if (!text) return '';
        return text
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold **text**
            .replace(/`(.*?)`/g, '$1') // Remove code `text`
            .replace(/\*(.*?)\*/g, '$1'); // Remove italic *text*
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

            {/* PDF Download Section - Grid Layout */}
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
                    📥 Download Playwright Resources
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    {/* Download Option 1 */}
                    <div style={{
                        backgroundColor: '#f8fafc',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '2px dashed #cbd5e1',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = colors.primary;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                        <h4 style={{ 
                            marginBottom: '12px',
                            color: '#1e293b',
                            fontSize: '18px',
                            fontWeight: '600'
                        }}>
                            Playwright User Actions Handout
                        </h4>
                        <p style={{
                            marginBottom: '20px',
                            color: '#64748b',
                            fontSize: '14px',
                            lineHeight: '1.6'
                        }}>
                            Download the complete Playwright TypeScript User Events & Actions handout
                        </p>
                        <a
                            href={`${process.env.PUBLIC_URL || ''}/resources/Playwright_TS_User_Actions_Handout.pdf`.replace(/\/+/g, '/')}
                            download="Playwright_TS_User_Actions_Handout.pdf"
                            style={{
                                display: 'inline-block',
                                backgroundColor: colors.primary,
                                color: colors.textWhite,
                                padding: '12px 24px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px rgba(0, 65, 106, 0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = colors.primaryDark;
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 12px rgba(0, 65, 106, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = colors.primary;
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 6px rgba(0, 65, 106, 0.2)';
                            }}
                        >
                            📄 Download PDF
                        </a>
                    </div>

                    {/* Download Option 2 */}
                    <div style={{
                        backgroundColor: '#f8fafc',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '2px dashed #cbd5e1',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = colors.primary;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                        <h4 style={{ 
                            marginBottom: '12px',
                            color: '#1e293b',
                            fontSize: '18px',
                            fontWeight: '600'
                        }}>
                            Playwright Hooks & Checklist Handout
                        </h4>
                        <p style={{
                            marginBottom: '20px',
                            color: '#64748b',
                            fontSize: '14px',
                            lineHeight: '1.6'
                        }}>
                            Download the complete Playwright TypeScript Hooks & Checklist handout
                        </p>
                        <a
                            href={`${process.env.PUBLIC_URL || ''}/resources/Playwright_TS_Hooks_Checklist_Handout.pdf`.replace(/\/+/g, '/')}
                            download="Playwright_TS_Hooks_Checklist_Handout.pdf"
                            style={{
                                display: 'inline-block',
                                backgroundColor: colors.primary,
                                color: colors.textWhite,
                                padding: '12px 24px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px rgba(0, 65, 106, 0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = colors.primaryDark;
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 12px rgba(0, 65, 106, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = colors.primary;
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 6px rgba(0, 65, 106, 0.2)';
                            }}
                        >
                            📄 Download PDF
                        </a>
                    </div>
                </div>
            </div>

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

            {/* Playwright TS Course Checklist Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '48px'
            }}>
                <div
                    onClick={toggleChecklist}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: isChecklistExpanded ? '24px' : '0',
                        paddingBottom: isChecklistExpanded ? '20px' : '0',
                        borderBottom: isChecklistExpanded ? '2px solid #00416A' : 'none',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        if (!isChecklistExpanded) {
                            e.currentTarget.style.backgroundColor = '#f0f7fa';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isChecklistExpanded) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    <div>
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            marginBottom: '8px',
                            fontWeight: '700',
                            textAlign: 'left',
                            margin: 0
                        }}>
                            Playwright TS Course Checklist
                        </h2>
                        <p style={{ 
                            fontSize: '16px', 
                            color: '#64748b',
                            marginBottom: 0,
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            Below is a <strong>course-wide Playwright TypeScript checklist</strong>, followed by <strong>clear definitions</strong> and <strong>one-by-one examples</strong> for each item. Everything is written in a way you can hand to students and reuse throughout the training.
                        </p>
                    </div>
                    <span style={{
                        fontSize: '32px',
                        color: '#00416A',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease'
                    }}>
                        {isChecklistExpanded ? '−' : '+'}
                    </span>
                </div>

                {isChecklistExpanded && (
                    <div>
                        {/* Checklist Grid */}
                        <div style={checklistGridStyles.modern}>
                            {[
                                { 
                                    id: 'checklist-a',
                                    title: 'A) Test Structure & Organization',
                                    items: [
                                        'Use `test.describe()` to group tests by feature/module',
                                        'Use consistent naming: **Feature → Scenario → Expected Result**',
                                        'Keep tests **independent** (no hidden dependency on previous test)',
                                        'Use tags/annotations when needed (`@smoke`, `@regression`) *(optional)*'
                                    ]
                                },
                                { 
                                    id: 'checklist-b',
                                    title: 'B) Hooks & Lifecycle',
                                    items: [
                                        'Use `beforeAll()` for **one-time setup** (seed data, login once, create users)',
                                        'Use `afterAll()` for **one-time cleanup** (delete test data, close resources)',
                                        'Use `beforeEach()` to prepare state **per test** (navigate, login via storageState, reset mocks)',
                                        'Use `afterEach()` to capture **evidence** on failure (screenshot/trace/logs)'
                                    ]
                                },
                                { 
                                    id: 'checklist-c',
                                    title: 'C) Execution Control',
                                    items: [
                                        'Use `test.only()` **only locally** for debugging, never commit it',
                                        'Use `test.skip()` for known blocked tests (include reason + ticket)',
                                        'Prefer `test.fixme()` when it\'s a known bug and you want visibility *(optional but recommended)*'
                                    ]
                                },
                                { 
                                    id: 'checklist-d',
                                    title: 'D) Quality & Stability',
                                    items: [
                                        'Prefer `getByRole()` / `getByLabel()` / `getByTestId()` locators',
                                        'Avoid `waitForTimeout()` unless absolutely unavoidable',
                                        'Ensure every test has at least **one meaningful assertion**',
                                        'Keep UI tests fast—use API setup when possible'
                                    ]
                                }
                            ].map((section) => (
                                <div key={section.id} style={{
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    padding: '16px',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = colors.primary;
                                    e.currentTarget.style.backgroundColor = '#f0f7fa';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.backgroundColor = '#f8fafc';
                                }}
                                >
                                    <h3 style={{
                                        color: '#00416A',
                                        textDecoration: 'none',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        display: 'block',
                                        width: '100%',
                                        margin: 0
                                    }}>
                                        {section.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Definitions & Examples Sections */}
                        {[
                            {
                                id: 'checklist-a',
                                title: 'A) Test Structure & Organization',
                                content: [
                                    {
                                        subtitle: '2.1 `test.describe()` — Group related tests',
                                        definition: '`test.describe()` creates a logical group (suite) of tests. Hooks inside it apply to tests in that block.',
                                        example: `import { test, expect } from "@playwright/test";

test.describe("Login Feature", () => {
  test("should login with valid credentials", async ({ page }) => {
    await page.goto("https://example.com/login");
    await page.getByLabel("Username").fill("demo");
    await page.getByLabel("Password").fill("demo123");
    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  });
});`
                                    }
                                ]
                            },
                            {
                                id: 'checklist-b',
                                title: 'B) Hooks & Lifecycle',
                                content: [
                                    {
                                        subtitle: '2.2 `test.beforeAll()` — One-time setup for the describe block',
                                        definition: 'Runs **once** before all tests in the current `describe` block. Good for: seeding data, creating test users via API, generating auth state (`storageState`) once.',
                                        example: `import { test, expect } from "@playwright/test";

test.describe("Authenticated Area", () => {
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    await page.goto("https://example.com/login");
    await page.getByLabel("Username").fill("demo");
    await page.getByLabel("Password").fill("demo123");
    await page.getByRole("button", { name: "Sign in" }).click();

    // Save login session for reuse
    await page.context().storageState({ path: "storage/auth.json" });
    await page.close();
  });

  test("should open profile page", async ({ page }) => {
    // (In real project you'd load storageState in config or context)
    await page.goto("https://example.com/profile");
    await expect(page.getByRole("heading", { name: "Profile" })).toBeVisible();
  });
});`
                                    },
                                    {
                                        subtitle: '2.3 `test.afterAll()` — One-time cleanup for the describe block',
                                        definition: 'Runs **once** after all tests in the current `describe` block. Good for: deleting test data, closing DB connections, cleaning up users created in `beforeAll`.',
                                        example: `import { test } from "@playwright/test";

test.describe("Data Setup/Cleanup Example", () => {
  let createdUserId: string;

  test.beforeAll(async ({ request }) => {
    const res = await request.post("https://api.example.com/users", {
      data: { name: "PW User" },
    });
    const body = await res.json();
    createdUserId = body.id;
  });

  test.afterAll(async ({ request }) => {
    if (createdUserId) {
      await request.delete(\`https://api.example.com/users/\${createdUserId}\`);
    }
  });

  test("uses the created user", async ({ page }) => {
    // test steps...
  });
});`
                                    },
                                    {
                                        subtitle: '2.4 `test.beforeEach()` — Per-test setup',
                                        definition: 'Runs **before each test** in the `describe` block. Use it to: navigate to start page, reset application state, set test-specific context (like intercepts/mocks), ensure consistent starting condition.',
                                        example: `import { test, expect } from "@playwright/test";

test.describe("Cart Module", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("should add item to cart", async ({ page }) => {
    await page.getByRole("link", { name: "Products" }).click();
    await page.getByRole("button", { name: "Add to cart" }).first().click();

    await expect(page.getByRole("link", { name: /Cart/i })).toContainText("Cart");
  });
});`
                                    },
                                    {
                                        subtitle: '2.5 `test.afterEach()` — Per-test teardown/evidence',
                                        definition: 'Runs **after each test**. Perfect place to: capture screenshot on failure, attach logs, clean temporary state if needed.',
                                        example: `import { test } from "@playwright/test";

test.describe("Evidence Capture", () => {
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: \`test-results/\${testInfo.title}-failed.png\`,
        fullPage: true,
      });
    }
  });

  test("example test", async ({ page }) => {
    await page.goto("https://example.com");
    // steps...
  });
});`
                                    }
                                ]
                            },
                            {
                                id: 'checklist-c',
                                title: 'C) Execution Control',
                                content: [
                                    {
                                        subtitle: '2.7 `test.only()` — Run only this test (debugging)',
                                        definition: 'Runs only the marked test(s). Used for quick debugging **locally**. Rules: ✅ OK on your machine, ❌ Never commit into repo (breaks CI by running only one test).',
                                        example: `import { test, expect } from "@playwright/test";

test.only("debug this test only", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example/);
});`
                                    },
                                    {
                                        subtitle: '2.8 `test.skip()` — Skip a test (blocked/irrelevant)',
                                        definition: 'Skips the test. Use it when: blocked by known bug, environment limitation, not applicable for current run. Best practice: Always include a reason + ticket/bug id.',
                                        example: `import { test } from "@playwright/test";

test.skip("Blocked by BUG-1234: login service returns 500", async ({ page }) => {
  await page.goto("https://example.com/login");
});`
                                    }
                                ]
                            },
                            {
                                id: 'checklist-d',
                                title: 'D) Quality & Stability',
                                content: [
                                    {
                                        subtitle: '2.6 `test()` — The actual test case',
                                        definition: 'Defines a test. The callback receives fixtures like `{ page, request, browser }`.',
                                        example: `import { test, expect } from "@playwright/test";

test("home page should show heading", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
});`
                                    }
                                ]
                            }
                        ].map((section) => (
                            <div key={section.id} id={section.id} style={{
                                marginTop: '32px',
                                marginBottom: '24px',
                                scrollMarginTop: '100px'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginBottom: '20px',
                                    textAlign: 'left',
                                    paddingBottom: '12px',
                                    borderBottom: '2px solid #e5e7eb'
                                }}>
                                    {section.title}
                                </h3>
                                {section.content.map((item, idx) => (
                                    <div key={idx} style={{ marginBottom: idx < section.content.length - 1 ? '32px' : '0' }}>
                                        <h4 style={{
                                            color: '#00416A',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            marginBottom: '12px',
                                            textAlign: 'left'
                                        }}>
                                            {item.subtitle}
                                        </h4>
                                        <p style={{
                                            marginBottom: '16px',
                                            color: '#475569',
                                            lineHeight: '1.8',
                                            textAlign: 'left'
                                        }}>
                                            <strong style={{ color: '#1e293b' }}>Definition:</strong> {item.definition}
                                        </p>
                                        <pre style={codeBlockStyle}>{item.example}</pre>
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* Complete E2E Example */}
                        <div style={{
                            marginTop: '32px',
                            padding: '24px',
                            backgroundColor: '#f0f7fa',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '20px',
                                fontWeight: '600',
                                marginBottom: '16px',
                                textAlign: 'left'
                            }}>
                                3) One Complete "End-to-End" Example Using All of Them Together
                            </h3>
                            <pre style={codeBlockStyle}>{`import { test, expect } from "@playwright/test";

test.describe("E2E: Purchase Flow", () => {
  test.beforeAll(async ({ request }) => {
    // One-time setup example: seed required data
    await request.post("https://api.example.com/test/seed", { data: { scenario: "purchase" } });
  });

  test.afterAll(async ({ request }) => {
    // One-time cleanup example
    await request.post("https://api.example.com/test/cleanup", { data: { scenario: "purchase" } });
  });

  test.beforeEach(async ({ page }) => {
    // Per-test start condition
    await page.goto("https://example.com");
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test.afterEach(async ({ page }, testInfo) => {
    // Evidence on failure
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({ path: \`test-results/\${testInfo.title}-failed.png\`, fullPage: true });
    }
  });

  test("should complete checkout successfully", async ({ page }) => {
    await page.getByRole("link", { name: "Products" }).click();
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.getByRole("link", { name: /Cart/i }).click();
    await page.getByRole("button", { name: "Checkout" }).click();

    await expect(page.getByText("Order confirmed")).toBeVisible();
  });

  test.skip("Blocked by BUG-2222: payment gateway test env unavailable", async ({ page }) => {
    // placeholder test
  });

  // test.only("debug checkout issue", async ({ page }) => {
  //   // use locally only; do not commit
  // });
});`}</pre>
                        </div>
                    </div>
                )}
            </div>

            {/* Additional PDF Download Section */}
            <PdfDownload
                pdfPath="Playwright_TS_Hooks_Checklist_Handout.pdf"
                title="📥 Download Playwright Hooks & Checklist Handout"
                description="Download the complete Playwright TypeScript Hooks & Checklist handout"
                downloadFileName="Playwright_TS_Hooks_Checklist_Handout.pdf"
            />

            {/* Playwright Fixtures Package Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '48px'
            }}>
                <div
                    onClick={toggleFixtures}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: isFixturesExpanded ? '24px' : '0',
                        paddingBottom: isFixturesExpanded ? '20px' : '0',
                        borderBottom: isFixturesExpanded ? '2px solid #00416A' : 'none',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        if (!isFixturesExpanded) {
                            e.currentTarget.style.backgroundColor = '#f0f7fa';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isFixturesExpanded) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    <div>
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            marginBottom: '8px',
                            fontWeight: '700',
                            textAlign: 'left',
                            margin: 0
                        }}>
                            Playwright Fixtures Package (Course-Ready)
                        </h2>
                        <p style={{ 
                            fontSize: '16px', 
                            color: '#64748b',
                            marginBottom: 0,
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            Below is an <strong>end-to-end Playwright fixtures package</strong> your students can use <strong>throughout the entire course</strong> (UI + API + auth + pages + test data + environment config).
                        </p>
                    </div>
                    <span style={{
                        fontSize: '32px',
                        color: '#00416A',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease'
                    }}>
                        {isFixturesExpanded ? '−' : '+'}
                    </span>
                </div>

                {isFixturesExpanded && (
                    <div>
                        {/* Fixtures Checklist */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                textAlign: 'left'
                            }}>
                                1) Fixtures Checklist (Course-Ready)
                            </h3>
                            
                            <div style={checklistGridStyles.modern}>
                                {[
                                    {
                                        title: 'Core',
                                        items: [
                                            { text: 'baseURL + env config (dev/qa/prod, timeouts, retries)', id: 'fixture-env-config' },
                                            { text: 'page baseline fixture (already provided by Playwright)', id: 'fixture-base-test' },
                                            { text: 'testInfo usage (attachments, logging)', id: 'fixture-base-test' }
                                        ]
                                    },
                                    {
                                        title: 'Auth & Roles',
                                        items: [
                                            { text: 'storageState auth (login once, reuse session)', id: 'fixture-global-setup' },
                                            { text: 'Role-based users: adminUser, standardUser, readonlyUser', id: 'fixture-auth' },
                                            { text: 'loggedInPage fixture (pre-authenticated browser context)', id: 'fixture-auth' },
                                            { text: 'logout/cleanup (optional)', id: 'fixture-seed' }
                                        ]
                                    },
                                    {
                                        title: 'Page Objects',
                                        items: [
                                            { text: 'pages fixture: loginPage, dashboardPage, usersPage, etc.', id: 'fixture-pages' },
                                            { text: 'app / ui fixture: high-level actions (loginAsAdmin, createUser…)', id: 'fixture-pages' }
                                        ]
                                    },
                                    {
                                        title: 'API & Test Data',
                                        items: [
                                            { text: 'api fixture (request wrapper with helper methods)', id: 'fixture-api' },
                                            { text: 'testData fixture (randomized but controlled data factory)', id: 'fixture-test-data' },
                                            { text: 'seed fixture (create data via API before UI tests)', id: 'fixture-seed' },
                                            { text: 'cleanup fixture (delete what you created)', id: 'fixture-seed' }
                                        ]
                                    },
                                    {
                                        title: 'Observability / Debugging',
                                        items: [
                                            { text: 'Auto screenshots/video/trace rules', id: 'fixture-config' },
                                            { text: 'traceOnFailure fixture (optional manual control)', id: 'fixture-config' },
                                            { text: 'Network logging (optional)', id: 'fixture-network' }
                                        ]
                                    },
                                    {
                                        title: 'Network Control (Advanced)',
                                        items: [
                                            { text: 'mockServer / networkMock fixture (route mocking)', id: 'fixture-network' },
                                            { text: 'blockAds/analytics fixture (reduce noise + speed)', id: 'fixture-network' }
                                        ]
                                    },
                                    {
                                        title: 'CI-ready',
                                        items: [
                                            { text: 'Separate globalSetup for auth state generation', id: 'fixture-global-setup' },
                                            { text: 'Reporters + artifacts + output folder conventions', id: 'fixture-config' }
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
                                                <li key={itemIdx} style={{ marginBottom: '8px' }}>
                                                    <a
                                                        href={`#${item.id}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            scrollToElement(item.id);
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

                        {/* Definitions Section */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                textAlign: 'left'
                            }}>
                                2) Definitions (What each fixture is)
                            </h3>
                            
                            {[
                                {
                                    title: 'baseTest fixture set',
                                    definition: 'A custom test object created with test.extend() so every spec can share the same setup patterns.'
                                },
                                {
                                    title: 'storageState (Auth state)',
                                    definition: 'A JSON file containing cookies/localStorage that lets you skip logging in every test.'
                                },
                                {
                                    title: 'loggedInPage',
                                    definition: 'A Page created from a pre-authenticated context (using storageState). Tests start already logged in.'
                                },
                                {
                                    title: 'pages (Page Object fixture)',
                                    definition: 'A single fixture that constructs and returns your Page Objects. Keeps test files clean.'
                                },
                                {
                                    title: 'api fixture',
                                    definition: 'A thin wrapper around Playwright\'s request to do API setup/teardown reliably.'
                                },
                                {
                                    title: 'testData',
                                    definition: 'A factory that generates consistent data for forms (emails, names, IDs) without collisions.'
                                },
                                {
                                    title: 'seed / cleanup',
                                    definition: 'Ensures tests are independent and repeatable: create what you need, then delete it.'
                                },
                                {
                                    title: 'networkMock',
                                    definition: 'Allows stable tests when external services are unreliable.'
                                }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    marginBottom: '16px',
                                    padding: '16px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb'
                                }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        marginBottom: '8px',
                                        textAlign: 'left'
                                    }}>
                                        {item.title}
                                    </h4>
                                    <p style={{
                                        color: '#475569',
                                        lineHeight: '1.8',
                                        margin: 0,
                                        textAlign: 'left'
                                    }}>
                                        {item.definition}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Recommended Folder Structure */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                textAlign: 'left'
                            }}>
                                3) End-to-End Example (One-by-one)
                            </h3>
                            
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '20px',
                                fontWeight: '600',
                                marginBottom: '12px',
                                textAlign: 'left'
                            }}>
                                Recommended folder structure
                            </h4>
                            <pre style={codeBlockStyle}>{`playwright/
  auth/
    admin.storageState.json
  fixtures/
    baseTest.ts
    auth.fixtures.ts
    pages.fixtures.ts
    api.fixtures.ts
    data.fixtures.ts
    network.fixtures.ts
  pages/
    LoginPage.ts
    DashboardPage.ts
  utils/
    env.ts
    dataFactory.ts
global-setup.ts
playwright.config.ts
tests/
  smoke.login.spec.ts`}</pre>
                        </div>

                        {/* Code Examples */}
                        {[
                            {
                                id: 'fixture-env-config',
                                section: 'A) Environment Config (utility)',
                                title: 'utils/env.ts',
                                code: `export type EnvName = "dev" | "qa" | "prod";

export const ENV: EnvName = (process.env.ENV as EnvName) ?? "qa";

export const BASE_URL =
  process.env.BASE_URL ??
  (ENV === "dev"
    ? "https://dev.example.com"
    : ENV === "prod"
      ? "https://example.com"
      : "https://qa.example.com");

export const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Password123!";`
                            },
                            {
                                id: 'fixture-config',
                                section: 'B) Playwright Config (CI-friendly)',
                                title: 'playwright.config.ts',
                                code: `import { defineConfig } from "@playwright/test";
import { BASE_URL } from "./utils/env";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  expect: { timeout: 10_000 },

  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  use: {
    baseURL: BASE_URL,
    headless: true,
    actionTimeout: 10_000,
    navigationTimeout: 30_000,

    // Artifacts (good for training + debugging)
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  reporter: [
    ["html", { open: "never" }],
    ["list"],
  ],
});`
                            },
                            {
                                id: 'fixture-global-setup',
                                section: 'C) Global Setup (Create Admin Auth State Once)',
                                title: 'global-setup.ts',
                                code: `import { chromium, FullConfig } from "@playwright/test";
import path from "path";
import { ADMIN_USERNAME, ADMIN_PASSWORD, BASE_URL } from "./utils/env";

export default async function globalSetup(_config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Example login flow (adjust selectors/URL to your app)
  await page.goto(\`\${BASE_URL}/login\`);
  await page.getByLabel("Username").fill(ADMIN_USERNAME);
  await page.getByLabel("Password").fill(ADMIN_PASSWORD);
  await page.getByRole("button", { name: "Sign in" }).click();

  // Ensure login is complete (adjust to your app)
  await page.getByRole("heading", { name: /dashboard/i }).waitFor();

  const storagePath = path.resolve("playwright/auth/admin.storageState.json");
  await page.context().storageState({ path: storagePath });

  await browser.close();
}`
                            },
                            {
                                id: 'fixture-base-test',
                                section: 'D) Base Test (your custom test object)',
                                title: 'fixtures/baseTest.ts',
                                code: `import { test as base, expect } from "@playwright/test";

export const test = base;
export { expect };`
                            },
                            {
                                id: 'fixture-auth',
                                section: 'E) Auth Fixture (logged-in page)',
                                title: 'fixtures/auth.fixtures.ts',
                                code: `import { test as base } from "@playwright/test";
import path from "path";

type AuthFixtures = {
  loggedInPage: import("@playwright/test").Page;
};

export const test = base.extend<AuthFixtures>({
  // Creates a *new* authenticated context per test (clean + isolated)
  loggedInPage: async ({ browser }, use) => {
    const storageStatePath = path.resolve("playwright/auth/admin.storageState.json");

    const context = await browser.newContext({
      storageState: storageStatePath,
    });

    const page = await context.newPage();
    await use(page);

    await context.close();
  },
});`
                            },
                            {
                                id: 'fixture-pages',
                                section: 'F) Page Object Fixture (pages)',
                                title: 'pages/LoginPage.ts',
                                code: `import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("/login");
  }

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Sign in" }).click();
  }

  async assertOnDashboard() {
    await expect(this.page.getByRole("heading", { name: /dashboard/i })).toBeVisible();
  }
}`
                            },
                            {
                                id: 'fixture-pages',
                                section: 'F) Page Object Fixture (pages)',
                                title: 'pages/DashboardPage.ts',
                                code: `import { Page, expect } from "@playwright/test";

export class DashboardPage {
  constructor(private page: Page) {}

  async assertLoaded() {
    await expect(this.page.getByRole("heading", { name: /dashboard/i })).toBeVisible();
  }
}`
                            },
                            {
                                id: 'fixture-pages',
                                section: 'F) Page Object Fixture (pages)',
                                title: 'fixtures/pages.fixtures.ts',
                                code: `import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

type PagesFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

export const test = base.extend<PagesFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});`
                            },
                            {
                                id: 'fixture-api',
                                section: 'G) API Fixture (setup data via API)',
                                title: 'fixtures/api.fixtures.ts',
                                code: `import { test as base, APIRequestContext, expect } from "@playwright/test";

type ApiFixtures = {
  api: {
    request: APIRequestContext;
    createUser: (payload: { name: string; email: string }) => Promise<{ id: string }>;
    deleteUser: (id: string) => Promise<void>;
  };
};

export const test = base.extend<ApiFixtures>({
  api: async ({ request }, use) => {
    const api = {
      request,
      async createUser(payload: { name: string; email: string }) {
        const res = await request.post("/api/users", { data: payload });
        expect(res.ok()).toBeTruthy();
        return (await res.json()) as { id: string };
      },
      async deleteUser(id: string) {
        const res = await request.delete(\`/api/users/\${id}\`);
        expect(res.ok()).toBeTruthy();
      },
    };

    await use(api);
  },
});`
                            },
                            {
                                id: 'fixture-test-data',
                                section: 'H) Test Data Fixture (reusable data factory)',
                                title: 'utils/dataFactory.ts',
                                code: `export function uniqueEmail(prefix = "student") {
  const stamp = Date.now();
  return \`\${prefix}.\${stamp}@example.com\`;
}

export function personName(prefix = "Student") {
  const stamp = Date.now().toString().slice(-6);
  return \`\${prefix} \${stamp}\`;
}`
                            },
                            {
                                id: 'fixture-test-data',
                                section: 'H) Test Data Fixture (reusable data factory)',
                                title: 'fixtures/data.fixtures.ts',
                                code: `import { test as base } from "@playwright/test";
import { uniqueEmail, personName } from "../utils/dataFactory";

type DataFixtures = {
  testData: {
    name: string;
    email: string;
  };
};

export const test = base.extend<DataFixtures>({
  testData: async ({}, use) => {
    await use({
      name: personName(),
      email: uniqueEmail(),
    });
  },
});`
                            },
                            {
                                id: 'fixture-seed',
                                section: 'I) Seed & Cleanup Fixture (create once, cleanup always)',
                                title: 'fixtures/seed.fixtures.ts',
                                code: `import { test as base } from "@playwright/test";

type SeedFixtures = {
  seededUserId: string;
};

export const test = base.extend<SeedFixtures>({
  seededUserId: async ({ api, testData }, use) => {
    const created = await api.createUser({ name: testData.name, email: testData.email });
    await use(created.id);
    await api.deleteUser(created.id);
  },
});`
                            },
                            {
                                id: 'fixture-network',
                                section: 'J) Network Mock Fixture (Advanced)',
                                title: 'fixtures/network.fixtures.ts',
                                code: `import { test as base } from "@playwright/test";

type NetworkFixtures = {
  mockUserList: boolean;
};

export const test = base.extend<NetworkFixtures>({
  mockUserList: [false, { option: true }], // default off; can override per test
});

export const applyNetworkMocks = async (page: import("@playwright/test").Page, enabled: boolean) => {
  if (!enabled) return;

  await page.route("**/api/users", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([{ id: "1", name: "Mock User", email: "mock@example.com" }]),
    });
  });
};`
                            },
                            {
                                id: 'fixture-course-test',
                                section: 'K) Combine Everything into ONE Course Test Fixture',
                                title: 'fixtures/courseTest.ts',
                                code: `import { test as base, expect } from "@playwright/test";
import path from "path";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { uniqueEmail, personName } from "../utils/dataFactory";
import { applyNetworkMocks } from "./network.fixtures";

type CourseFixtures = {
  // Auth
  loggedInPage: import("@playwright/test").Page;

  // Page objects (on default page)
  loginPage: LoginPage;
  dashboardPage: DashboardPage;

  // API helper
  api: {
    createUser: (payload: { name: string; email: string }) => Promise<{ id: string }>;
    deleteUser: (id: string) => Promise<void>;
  };

  // Test data
  testData: { name: string; email: string };

  // Seeded entities
  seededUserId: string;

  // Network control
  mockUserList: boolean;
};

export const test = base.extend<CourseFixtures>({
  // network toggle
  mockUserList: [false, { option: true }],

  // auth page
  loggedInPage: async ({ browser }, use) => {
    const storageStatePath = path.resolve("playwright/auth/admin.storageState.json");
    const context = await browser.newContext({ storageState: storageStatePath });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  // page objects (default page fixture)
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  dashboardPage: async ({ page }, use) => await use(new DashboardPage(page)),

  // test data
  testData: async ({}, use) => {
    await use({ name: personName(), email: uniqueEmail() });
  },

  // api helpers (use built-in request fixture)
  api: async ({ request }, use) => {
    const api = {
      async createUser(payload: { name: string; email: string }) {
        const res = await request.post("/api/users", { data: payload });
        expect(res.ok()).toBeTruthy();
        return (await res.json()) as { id: string };
      },
      async deleteUser(id: string) {
        const res = await request.delete(\`/api/users/\${id}\`);
        expect(res.ok()).toBeTruthy();
      },
    };
    await use(api);
  },

  // seeded user lifecycle
  seededUserId: async ({ api, testData }, use) => {
    const created = await api.createUser({ name: testData.name, email: testData.email });
    await use(created.id);
    await api.deleteUser(created.id);
  },
});

export { expect, applyNetworkMocks };`
                            },
                            {
                                id: 'fixture-example-1',
                                section: 'L) Example Usage (One by one)',
                                title: 'Example 1: Normal UI test with page objects',
                                code: `import { test, expect } from "../playwright/fixtures/courseTest";

test("Day-2: dashboard loads", async ({ page, loginPage, dashboardPage }) => {
  await loginPage.goto();
  await loginPage.login("admin", "Password123!");
  await dashboardPage.assertLoaded();
  await expect(page).toHaveURL(/dashboard/);
});`
                            },
                            {
                                id: 'fixture-example-2',
                                section: 'L) Example Usage (One by one)',
                                title: 'Example 2: Authenticated test (skips login)',
                                code: `import { test, expect } from "../playwright/fixtures/courseTest";

test("Day-4: authenticated user can open dashboard", async ({ loggedInPage }) => {
  await loggedInPage.goto("/dashboard");
  await expect(loggedInPage.getByRole("heading", { name: /dashboard/i })).toBeVisible();
});`
                            },
                            {
                                id: 'fixture-example-3',
                                section: 'L) Example Usage (One by one)',
                                title: 'Example 3: API seed + UI validate (best for stable E2E)',
                                code: `import { test, expect } from "../playwright/fixtures/courseTest";

test("Day-6: create user via API, verify in UI", async ({ loggedInPage, seededUserId }) => {
  await loggedInPage.goto("/users");
  await expect(loggedInPage.getByText(seededUserId)).toBeVisible(); // replace with real UI assertion
});`
                            },
                            {
                                id: 'fixture-example-4',
                                section: 'L) Example Usage (One by one)',
                                title: 'Example 4: Network mocking (advanced)',
                                code: `import { test, expect, applyNetworkMocks } from "../playwright/fixtures/courseTest";

test("Day-8: users list uses mock data", async ({ page }, testInfo) => {
  await applyNetworkMocks(page, true);
  await page.goto("/users");
  await expect(page.getByText("Mock User")).toBeVisible();
});`
                            }
                        ].map((item, idx) => (
                            <div key={idx} id={item.id || `fixture-example-${idx}`} style={{ 
                                marginBottom: '32px',
                                scrollMarginTop: '100px'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    marginBottom: '12px',
                                    textAlign: 'left',
                                    paddingBottom: '8px',
                                    borderBottom: '2px solid #e5e7eb'
                                }}>
                                    {removeMarkdown(item.section)}
                                </h4>
                                <h5 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    marginBottom: '12px',
                                    textAlign: 'left'
                                }}>
                                    {removeMarkdown(item.title)}
                                </h5>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Role-Based Auth & BDD Integration Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '48px'
            }}>
                <div
                    onClick={toggleRoleAuth}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: isRoleAuthExpanded ? '24px' : '0',
                        paddingBottom: isRoleAuthExpanded ? '20px' : '0',
                        borderBottom: isRoleAuthExpanded ? '2px solid #00416A' : 'none',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        if (!isRoleAuthExpanded) {
                            e.currentTarget.style.backgroundColor = '#f0f7fa';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isRoleAuthExpanded) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    <div>
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            marginBottom: '8px',
                            fontWeight: '700',
                            textAlign: 'left',
                            margin: 0
                        }}>
                            Role-Based Auth & BDD Integration (Course-Ready)
                        </h2>
                        <p style={{ 
                            fontSize: '16px', 
                            color: '#64748b',
                            marginBottom: 0,
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            Complete fixture system with <strong>role-based auth states</strong> (Admin / Manager / User), works for <strong>any environment</strong> (demo app or real client app) via ENV/BASE_URL, and includes <strong>BDD (Cucumber) integration</strong> with Playwright fixtures.
                        </p>
                    </div>
                    <span style={{
                        fontSize: '32px',
                        color: '#00416A',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease'
                    }}>
                        {isRoleAuthExpanded ? '−' : '+'}
                    </span>
                </div>

                {isRoleAuthExpanded && (
                    <div>
                        {/* Checklist */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                textAlign: 'left'
                            }}>
                                1) Checklist (End-to-End Course Fixtures)
                            </h3>
                            
                            <div style={checklistGridStyles.modern}>
                                {[
                                    {
                                        title: 'A) Environment + Configuration',
                                        items: [
                                            { text: 'ENV + BASE_URL (demo/qa/prod switch)', id: 'role-auth-env' },
                                            { text: 'Centralized timeouts/retries/reporting', id: 'role-auth-config' },
                                            { text: 'Credentials per role from env vars (no hardcoding)', id: 'role-auth-env' }
                                        ]
                                    },
                                    {
                                        title: 'B) Role-Based Authentication',
                                        items: [
                                            { text: 'globalSetup generates storageState files', id: 'role-auth-global-setup' },
                                            { text: 'admin.storageState.json', id: 'role-auth-global-setup' },
                                            { text: 'manager.storageState.json', id: 'role-auth-global-setup' },
                                            { text: 'user.storageState.json', id: 'role-auth-global-setup' },
                                            { text: 'Fixture option role to choose which auth state to use', id: 'role-auth-course-test' },
                                            { text: 'authedPage (page already logged in based on role)', id: 'role-auth-course-test' }
                                        ]
                                    },
                                    {
                                        title: 'C) Core Automation Fixtures',
                                        items: [
                                            { text: 'pages (Page Objects) injected into tests', id: 'role-auth-pages' },
                                            { text: 'api helper (create/delete test data)', id: 'role-auth-course-test' },
                                            { text: 'testData factory (unique names/emails)', id: 'role-auth-data-factory' },
                                            { text: 'seededUser (create via API → cleanup after)', id: 'role-auth-course-test' }
                                        ]
                                    },
                                    {
                                        title: 'D) BDD (Cucumber) Fixtures',
                                        items: [
                                            { text: 'World holds page/context/request/testData', id: 'role-auth-bdd-world' },
                                            { text: 'Hooks: create browser context per scenario', id: 'role-auth-bdd-hooks' },
                                            { text: 'load role storageState based on tags (@admin, @manager, @user)', id: 'role-auth-bdd-hooks' },
                                            { text: 'attach screenshot on failure', id: 'role-auth-bdd-hooks' }
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
                                                <li key={itemIdx} style={{ marginBottom: '8px' }}>
                                                    <a
                                                        href={`#${item.id}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            scrollToElement(item.id);
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

                        {/* Definitions Section */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                textAlign: 'left'
                            }}>
                                2) Definitions (What each fixture means)
                            </h3>
                            
                            {[
                                {
                                    title: 'ENV / BASE_URL',
                                    definition: 'lets you run the same suite against demo or client env without code changes.'
                                },
                                {
                                    title: 'storageState',
                                    definition: 'saves login cookies/localStorage so tests start authenticated.'
                                },
                                {
                                    title: 'role',
                                    definition: 'a test option that selects which storageState to use.'
                                },
                                {
                                    title: 'authedPage',
                                    definition: 'a Page already logged in as the selected role.'
                                },
                                {
                                    title: 'pages',
                                    definition: 'Page Objects (LoginPage, DashboardPage, etc.) injected into tests.'
                                },
                                {
                                    title: 'api',
                                    definition: 'wrapper around Playwright request used for setup/teardown (fast + stable).'
                                },
                                {
                                    title: 'testData',
                                    definition: 'factory to generate unique but readable data.'
                                },
                                {
                                    title: 'BDD World/Hooks',
                                    definition: 'Cucumber-compatible injection of Playwright context/page + role selection via tags.'
                                }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    marginBottom: '16px',
                                    padding: '16px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb'
                                }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        marginBottom: '8px',
                                        textAlign: 'left'
                                    }}>
                                        {item.title}
                                    </h4>
                                    <p style={{
                                        color: '#475569',
                                        lineHeight: '1.8',
                                        margin: 0,
                                        textAlign: 'left'
                                    }}>
                                        {item.definition}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Recommended Structure */}
                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                fontWeight: '600',
                                marginBottom: '20px',
                                textAlign: 'left'
                            }}>
                                3) Full Example (One-by-one, copy/paste)
                            </h3>
                            
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '20px',
                                fontWeight: '600',
                                marginBottom: '12px',
                                textAlign: 'left'
                            }}>
                                Recommended structure
                            </h4>
                            <pre style={codeBlockStyle}>{`playwright/
  auth/
    admin.storageState.json
    manager.storageState.json
    user.storageState.json
  fixtures/
    courseTest.ts
  pages/
    LoginPage.ts
    DashboardPage.ts
  utils/
    env.ts
    dataFactory.ts
bdd/
  cucumber.js
  features/
    login.feature
  steps/
    login.steps.ts
  support/
    world.ts
    hooks.ts
global-setup.ts
playwright.config.ts
tests/
  smoke.dashboard.spec.ts`}</pre>
                        </div>

                        {/* Code Examples */}
                        {[
                            {
                                id: 'role-auth-env',
                                section: 'A) Env + Credentials (demo OR client env)',
                                title: 'playwright/utils/env.ts',
                                code: `export type EnvName = "demo" | "qa" | "prod";

export const ENV: EnvName = (process.env.ENV as EnvName) ?? "qa";
export const BASE_URL =
  process.env.BASE_URL ??
  (ENV === "demo"
    ? "https://demo.example.com"
    : ENV === "prod"
      ? "https://client.example.com"
      : "https://qa.example.com");

// Role credentials (set in pipeline or .env; never hardcode in real projects)
export const ADMIN_USER = process.env.ADMIN_USER ?? "admin";
export const ADMIN_PASS = process.env.ADMIN_PASS ?? "Password123!";

export const MANAGER_USER = process.env.MANAGER_USER ?? "manager";
export const MANAGER_PASS = process.env.MANAGER_PASS ?? "Password123!";

export const STANDARD_USER = process.env.STANDARD_USER ?? "user";
export const STANDARD_PASS = process.env.STANDARD_PASS ?? "Password123!";`
                            },
                            {
                                id: 'role-auth-config',
                                section: 'B) Playwright Config',
                                title: 'playwright.config.ts',
                                code: `import { defineConfig } from "@playwright/test";
import { BASE_URL } from "./playwright/utils/env";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  expect: { timeout: 10_000 },

  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  globalSetup: require.resolve("./global-setup"),

  use: {
    baseURL: BASE_URL,
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  reporter: [["html", { open: "never" }], ["list"]],
});`
                            },
                            {
                                id: 'role-auth-global-setup',
                                section: 'C) Global Setup: Create storageState for ALL roles',
                                title: 'global-setup.ts',
                                code: `import { chromium, FullConfig } from "@playwright/test";
import path from "path";
import {
  BASE_URL,
  ADMIN_USER, ADMIN_PASS,
  MANAGER_USER, MANAGER_PASS,
  STANDARD_USER, STANDARD_PASS,
} from "./playwright/utils/env";

type Role = "admin" | "manager" | "user";

async function loginAndSaveState(role: Role, username: string, password: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(\`\${BASE_URL}/login\`);

  // Adjust selectors to match your app
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: /sign in/i }).click();

  // Adjust "logged-in proof" selector
  await page.getByRole("heading", { name: /dashboard/i }).waitFor();

  const storagePath = path.resolve(\`playwright/auth/\${role}.storageState.json\`);
  await page.context().storageState({ path: storagePath });

  await browser.close();
}

export default async function globalSetup(_config: FullConfig) {
  await loginAndSaveState("admin", ADMIN_USER, ADMIN_PASS);
  await loginAndSaveState("manager", MANAGER_USER, MANAGER_PASS);
  await loginAndSaveState("user", STANDARD_USER, STANDARD_PASS);
}`
                            },
                            {
                                id: 'role-auth-pages',
                                section: 'D) Page Objects (example)',
                                title: 'playwright/pages/LoginPage.ts',
                                code: `import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("/login");
  }

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: /sign in/i }).click();
  }

  async assertDashboardLoaded() {
    await expect(this.page.getByRole("heading", { name: /dashboard/i })).toBeVisible();
  }
}`
                            },
                            {
                                id: 'role-auth-pages',
                                section: 'D) Page Objects (example)',
                                title: 'playwright/pages/DashboardPage.ts',
                                code: `import { Page, expect } from "@playwright/test";

export class DashboardPage {
  constructor(private page: Page) {}

  async assertLoaded() {
    await expect(this.page.getByRole("heading", { name: /dashboard/i })).toBeVisible();
  }
}`
                            },
                            {
                                id: 'role-auth-data-factory',
                                section: 'E) Data factory (unique but readable)',
                                title: 'playwright/utils/dataFactory.ts',
                                code: `export function uniqueEmail(prefix = "student") {
  return \`\${prefix}.\${Date.now()}@example.com\`;
}
export function personName(prefix = "Student") {
  return \`\${prefix} \${Date.now().toString().slice(-6)}\`;
}`
                            },
                            {
                                id: 'role-auth-course-test',
                                section: 'F) ONE "Course Test" with all fixtures (roles + pages + api + data)',
                                title: 'playwright/fixtures/courseTest.ts',
                                code: `import { test as base, expect, Page, APIRequestContext } from "@playwright/test";
import path from "path";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { uniqueEmail, personName } from "../utils/dataFactory";

export type Role = "admin" | "manager" | "user";

type CourseFixtures = {
  role: Role;                 // option
  authedPage: Page;           // page already logged in for selected role

  loginPage: LoginPage;       // page objects (default page)
  dashboardPage: DashboardPage;

  api: {
    request: APIRequestContext;
    createUser: (p: { name: string; email: string }) => Promise<{ id: string }>;
    deleteUser: (id: string) => Promise<void>;
  };

  testData: { name: string; email: string };
  seededUserId: string;
};

export const test = base.extend<CourseFixtures>({
  // Role is configurable per test/suite
  role: ["admin", { option: true }],

  // authedPage uses storageState based on role
  authedPage: async ({ browser, role }, use) => {
    const storageStatePath = path.resolve(\`playwright/auth/\${role}.storageState.json\`);
    const context = await browser.newContext({ storageState: storageStatePath });
    const page = await context.newPage();

    await use(page);

    await context.close();
  },

  // Page objects using default \`page\` fixture
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  dashboardPage: async ({ page }, use) => await use(new DashboardPage(page)),

  // Test data
  testData: async ({}, use) => {
    await use({ name: personName(), email: uniqueEmail() });
  },

  // API wrapper
  api: async ({ request }, use) => {
    const api = {
      request,
      async createUser(payload: { name: string; email: string }) {
        const res = await request.post("/api/users", { data: payload });
        expect(res.ok()).toBeTruthy();
        return (await res.json()) as { id: string };
      },
      async deleteUser(id: string) {
        const res = await request.delete(\`/api/users/\${id}\`);
        expect(res.ok()).toBeTruthy();
      },
    };
    await use(api);
  },

  // Seed user, ensure cleanup after
  seededUserId: async ({ api, testData }, use) => {
    const created = await api.createUser({ name: testData.name, email: testData.email });
    await use(created.id);
    await api.deleteUser(created.id);
  },
});

export { expect };`
                            },
                            {
                                id: 'role-auth-example-1',
                                section: 'UI Examples (one by one)',
                                title: 'Example 1: default role (admin)',
                                code: `import { test, expect } from "../playwright/fixtures/courseTest";

test("Dashboard loads for admin", async ({ authedPage }) => {
  await authedPage.goto("/dashboard");
  await expect(authedPage.getByRole("heading", { name: /dashboard/i })).toBeVisible();
});`
                            },
                            {
                                id: 'role-auth-example-2',
                                section: 'UI Examples (one by one)',
                                title: 'Example 2: manager role',
                                code: `import { test, expect } from "../playwright/fixtures/courseTest";

test.use({ role: "manager" });

test("Manager can access dashboard", async ({ authedPage }) => {
  await authedPage.goto("/dashboard");
  await expect(authedPage.getByRole("heading", { name: /dashboard/i })).toBeVisible();
});`
                            },
                            {
                                id: 'role-auth-example-3',
                                section: 'UI Examples (one by one)',
                                title: 'Example 3: API seed + UI verify (best E2E style)',
                                code: `import { test, expect } from "../playwright/fixtures/courseTest";

test("Seed user via API, verify in UI", async ({ authedPage, seededUserId }) => {
  await authedPage.goto("/users");
  await expect(authedPage.getByText(seededUserId)).toBeVisible(); // replace with real UI assertion
});`
                            },
                            {
                                id: 'role-auth-bdd-world',
                                section: 'G) BDD (Cucumber) Integration (All 3 categories included)',
                                title: 'bdd/support/world.ts',
                                code: `import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { BrowserContext, Page, APIRequestContext, request } from "@playwright/test";
import { uniqueEmail, personName } from "../../playwright/utils/dataFactory";
import { BASE_URL } from "../../playwright/utils/env";

export type Role = "admin" | "manager" | "user";

export class PWWorld extends World {
  context!: BrowserContext;
  page!: Page;
  api!: APIRequestContext;
  role: Role = "admin";

  testData = {
    name: personName(),
    email: uniqueEmail(),
  };

  constructor(options: IWorldOptions) {
    super(options);
  }

  async initApi() {
    this.api = await request.newContext({ baseURL: BASE_URL });
  }
}

setWorldConstructor(PWWorld);`
                            },
                            {
                                id: 'role-auth-bdd-hooks',
                                section: 'G) BDD (Cucumber) Integration',
                                title: 'bdd/support/hooks.ts',
                                code: `import { Before, After, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import path from "path";
import { PWWorld } from "./world";
import { BASE_URL } from "../../playwright/utils/env";

Before(async function (this: PWWorld, scenario) {
  // Role selection via tags: @admin @manager @user
  const tags = scenario.pickle.tags.map(t => t.name);
  if (tags.includes("@manager")) this.role = "manager";
  else if (tags.includes("@user")) this.role = "user";
  else this.role = "admin";

  await this.initApi();

  const browser = await chromium.launch();
  const storageStatePath = path.resolve(\`playwright/auth/\${this.role}.storageState.json\`);
  this.context = await browser.newContext({ storageState: storageStatePath, baseURL: BASE_URL });
  this.page = await this.context.newPage();
});

After(async function (this: PWWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, "image/png");
  }
  await this.context?.close();
  await this.api?.dispose();
});`
                            },
                            {
                                id: 'role-auth-bdd-feature',
                                section: 'G) BDD (Cucumber) Integration',
                                title: 'bdd/features/login.feature',
                                code: `@admin
Feature: Dashboard Access

  Scenario: Admin can open dashboard
    Given I open the dashboard
    Then I should see the dashboard title`
                            },
                            {
                                id: 'role-auth-bdd-steps',
                                section: 'G) BDD (Cucumber) Integration',
                                title: 'bdd/steps/login.steps.ts',
                                code: `import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { PWWorld } from "../support/world";

Given("I open the dashboard", async function (this: PWWorld) {
  await this.page.goto("/dashboard");
});

Then("I should see the dashboard title", async function (this: PWWorld) {
  await expect(this.page.getByRole("heading", { name: /dashboard/i })).toBeVisible();
});`
                            },
                            {
                                id: 'role-auth-bdd-config',
                                section: 'G) BDD (Cucumber) Integration',
                                title: 'bdd/cucumber.js',
                                code: `module.exports = {
  default: {
    require: [
      "bdd/support/world.ts",
      "bdd/support/hooks.ts",
      "bdd/steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress", "html:playwright-report/cucumber.html"],
    publishQuiet: true
  }
};`
                            }
                        ].map((item, idx) => (
                            <div key={idx} id={item.id || `role-auth-example-${idx}`} style={{ 
                                marginBottom: '32px',
                                scrollMarginTop: '100px'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    marginBottom: '12px',
                                    textAlign: 'left',
                                    paddingBottom: '8px',
                                    borderBottom: '2px solid #e5e7eb'
                                }}>
                                    {removeMarkdown(item.section)}
                                </h4>
                                <h5 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    marginBottom: '12px',
                                    textAlign: 'left'
                                }}>
                                    {removeMarkdown(item.title)}
                                </h5>
                                <pre style={codeBlockStyle}>{item.code}</pre>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Playwright TypeScript User Events & Actions Master List Section */}
            <div style={{
                ...cardStyle,
                marginBottom: '48px'
            }}>
                <div
                    onClick={toggleUserEvents}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: isUserEventsExpanded ? '24px' : '0',
                        paddingBottom: isUserEventsExpanded ? '20px' : '0',
                        borderBottom: isUserEventsExpanded ? '2px solid #00416A' : 'none',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        if (!isUserEventsExpanded) {
                            e.currentTarget.style.backgroundColor = '#f0f7fa';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isUserEventsExpanded) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    <div>
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            marginBottom: '8px',
                            fontWeight: '700',
                            textAlign: 'left',
                            margin: 0
                        }}>
                            Playwright TypeScript User Events & Actions Master List
                        </h2>
                        <p style={{ 
                            fontSize: '16px', 
                            color: '#64748b',
                            marginBottom: 0,
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}>
                            Below is an <strong>end-to-end Playwright TypeScript "User Events & Actions" master list</strong> you can use throughout the course.
                        </p>
                    </div>
                    <span style={{
                        fontSize: '32px',
                        color: '#00416A',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease'
                    }}>
                        {isUserEventsExpanded ? '−' : '+'}
                    </span>
                </div>

                {isUserEventsExpanded && (
                    <div>

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
                )}
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
export default ResPlaywright;
