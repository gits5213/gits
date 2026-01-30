'use client';

import React from 'react';
import { pageContainerStyles } from '../../../utils/globalStyles';
import {
  APIHero,
  APICollapsibleSection,
  APISectionContent,
  APIChecklistGrid,
  useCollapsible
} from '../shared';

const Automation = () => {
    // Use reusable collapsible hooks
    const bestPractices = useCollapsible(true);
    const dryKiss = useCollapsible(false);
    const noHardcoding = useCollapsible(false);
    const pageObjectModel = useCollapsible(false);
    const locatorStrategy = useCollapsible(false);
    const noHardWaits = useCollapsible(false);
    const independentTests = useCollapsible(false);
    const aaaPattern = useCollapsible(false);
    const naming = useCollapsible(false);
    const testData = useCollapsible(false);
    const assertions = useCollapsible(false);
    const logging = useCollapsible(false);
    const tagging = useCollapsible(false);
    const reliability = useCollapsible(false);
    const codeQuality = useCollapsible(false);

    // Best practices checklist sections
    const checklistSections = [
        {
            id: 'checklist-1',
            title: '1) Apply DRY + KISS',
            items: [
                "Don't repeat logic across tests (login, navigation, test data setup → move to helpers/fixtures)",
                'Keep tests short and readable: one clear goal per test',
                'Prefer small reusable methods over long "do everything" scripts'
            ]
        },
        {
            id: 'checklist-2',
            title: '2) No Hard-Coding',
            items: [
                'Avoid hard-coded URLs, credentials, environment configs',
                'Avoid user names / IDs that change',
                'Avoid timeouts / sleeps / dates',
                'Use .env / config files',
                'Use secrets in CI/CD',
                'Use test-data factories / JSON fixtures'
            ]
        },
        {
            id: 'checklist-3',
            title: '3) Use Page Object Model (POM)',
            items: [
                'Put UI locators + actions in Page Objects',
                'Tests should read like business flows (not locator scripts)',
                'Keep assertions mostly in tests (pages do actions, tests verify outcomes)'
            ]
        },
        {
            id: 'checklist-4',
            title: '4) Stable Locator Strategy',
            items: [
                'Prefer getByRole, getByLabel, data-testid',
                'Avoid fragile locators: long XPath, CSS chains, text that changes often',
                'Create a locator standard for the team (consistent test ids)'
            ]
        },
        {
            id: 'checklist-5',
            title: '5) No Hard Waits',
            items: [
                'Avoid sleep(), wait(5000), etc.',
                'Use built-in auto-wait + explicit expectations only when needed',
                'Wait for element visible / enabled',
                'Use network wait (route/waitForResponse) when appropriate'
            ]
        },
        {
            id: 'checklist-6',
            title: '6) Tests Must Be Independent',
            items: [
                'Each test should run alone and still pass',
                "Don't depend on execution order",
                'Clean up: delete created data (or use isolated test accounts/tenants)'
            ]
        },
        {
            id: 'checklist-7',
            title: '7) AAA Pattern (Arrange–Act–Assert)',
            items: [
                'Arrange: setup state + data',
                'Act: perform action',
                'Assert: validate result',
                'This keeps tests consistent and easy to review'
            ]
        },
        {
            id: 'checklist-8',
            title: '8) Clear, Business-Friendly Naming',
            items: [
                'Test names should explain user behavior + expected result',
                '✅ "User can submit registration form with valid data"',
                '❌ "Test1_submit_form"'
            ]
        },
        {
            id: 'checklist-9',
            title: '9) Smart Test Data Management',
            items: [
                'Use factories/builders to generate unique data',
                'Avoid shared static accounts that cause collisions',
                'Keep data close to test intent (minimal but meaningful)'
            ]
        },
        {
            id: 'checklist-10',
            title: '10) Proper Assertions (not too many, not too few)',
            items: [
                'Assert what matters for the scenario',
                'Avoid over-asserting UI details that change often',
                'Prefer functional assertions over styling/layout unless UI checks are required'
            ]
        },
        {
            id: 'checklist-11',
            title: '11) Logging + Reporting',
            items: [
                'Add screenshots/videos/traces on failure (especially for CI)',
                'Allure/HTML reporting helps debugging and visibility'
            ]
        },
        {
            id: 'checklist-12',
            title: '12) Tagging & Test Suite Discipline',
            items: [
                'Tag tests: @smoke, @regression, @accessibility, @api, @critical',
                'Keep smoke suite fast (minutes, not hours)',
                'Run heavy suites nightly; keep PR checks lean'
            ]
        },
        {
            id: 'checklist-13',
            title: '13) Reliability: Minimize Flakiness',
            items: [
                'Avoid random timing dependencies',
                'Retry only as last resort (fix root cause first)',
                'Mock unstable external systems where acceptable'
            ]
        },
        {
            id: 'checklist-14',
            title: '14) Code Quality Standards',
            items: [
                'Linting/formatting (ESLint/Prettier)',
                'Code review checklist for tests',
                'Consistent folder structure and naming conventions'
            ]
        }
    ];

    return(
        <div style={pageContainerStyles.modern}>
            {/* Hero Section */}
            <APIHero
                title="Automation Test Case Best Practices"
                subtitle="Comprehensive checklist for Playwright, Cypress, Selenium, and any UI automation framework"
                gradientStart="#667eea"
                gradientEnd="#764ba2"
            />

            {/* Introduction Section */}
            <APICollapsibleSection
                title="Overview"
                isExpanded={bestPractices.isExpanded}
                onToggle={bestPractices.toggle}
                borderColor="#667eea"
                id="overview"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '17px', 
                        color: '#475569',
                        lineHeight: '1.9',
                        marginBottom: '18px',
                        textAlign: 'left'
                    }}>
                        This comprehensive checklist covers <strong>automation test case best practices</strong> that work for any UI automation framework—whether you're using <strong>Playwright</strong>, <strong>Cypress</strong>, <strong>Selenium</strong>, or any other testing tool. These practices help ensure your tests are maintainable, reliable, and scalable.
                    </p>
                    <p style={{ 
                        fontSize: '17px', 
                        color: '#475569',
                        lineHeight: '1.9',
                        marginBottom: '18px',
                        textAlign: 'left'
                    }}>
                        Following these guidelines will help your team write better tests, reduce flakiness, and improve overall test suite quality. Each practice is framework-agnostic and can be adapted to your specific stack and team needs.
                    </p>
                </div>
            </APICollapsibleSection>

            {/* Best Practices Checklist */}
            <div style={{ marginTop: '40px' }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'center'
                }}>
                    Best Practices Checklist
                </h2>
                <APIChecklistGrid sections={checklistSections} />
            </div>

            {/* Detailed Sections */}
            <APICollapsibleSection
                title="1) Apply DRY + KISS"
                isExpanded={dryKiss.isExpanded}
                onToggle={dryKiss.toggle}
                borderColor="#667eea"
                id="dry-kiss"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        <strong>DRY (Don't Repeat Yourself)</strong> and <strong>KISS (Keep It Simple, Stupid)</strong> are fundamental principles in test automation.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Extract common logic:</strong> Move repeated operations (login, navigation, data setup) to helper functions, fixtures, or page objects</li>
                        <li><strong>One clear goal per test:</strong> Each test should verify one specific behavior or scenario</li>
                        <li><strong>Reusable methods:</strong> Create small, focused utility functions instead of duplicating code</li>
                        <li><strong>Keep it simple:</strong> Avoid over-engineering—simple, readable tests are easier to maintain</li>
                    </ul>
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="2) No Hard-Coding"
                isExpanded={noHardcoding.isExpanded}
                onToggle={noHardcoding.toggle}
                borderColor="#667eea"
                id="no-hardcoding"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Hard-coded values make tests brittle and difficult to maintain across environments.
                    </p>
                    <APISectionContent
                        id="no-hardcoding-examples"
                        subtitle="What to Avoid"
                        definition="Never hard-code:"
                        code={`// ❌ Bad
const username = 'john.doe@example.com';
const password = 'password123';
const baseUrl = 'https://prod.example.com';
await page.waitForTimeout(5000);`}
                    />
                    <APISectionContent
                        id="no-hardcoding-solution"
                        subtitle="Better Approach"
                        definition="Use configuration and environment variables:"
                        code={`// ✅ Good
const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
await page.waitForSelector('.element');`}
                    />
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="3) Use Page Object Model (POM)"
                isExpanded={pageObjectModel.isExpanded}
                onToggle={pageObjectModel.toggle}
                borderColor="#667eea"
                id="pom"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Page Object Model separates test logic from UI implementation details, making tests more maintainable.
                    </p>
                    <APISectionContent
                        id="pom-example"
                        subtitle="Example Structure"
                        definition="Page Object:"
                        code={`// LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Login' });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// Test file
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('user@example.com', 'password');
  await expect(page).toHaveURL('/dashboard');
});`}
                    />
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="4) Stable Locator Strategy"
                isExpanded={locatorStrategy.isExpanded}
                onToggle={locatorStrategy.toggle}
                borderColor="#667eea"
                id="locators"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Choose locators that are resilient to UI changes and easy to maintain.
                    </p>
                    <APISectionContent
                        id="locator-priority"
                        subtitle="Locator Priority (Best to Worst)"
                        definition="1. Semantic locators (best):"
                        code={`// ✅ Best - Most stable
page.getByRole('button', { name: 'Submit' })
page.getByLabel('Email Address')
page.getByTestId('submit-button')`}
                    />
                    <APISectionContent
                        id="locator-avoid"
                        subtitle="Avoid Fragile Locators"
                        definition="2. Avoid these (fragile):"
                        code={`// ❌ Avoid - Fragile
page.locator('div > div > div > button:nth-child(3)')
page.locator('//div[@class="container"]/div[2]/button')
page.locator('.btn.btn-primary.btn-lg.mt-3')`}
                    />
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="5) No Hard Waits"
                isExpanded={noHardWaits.isExpanded}
                onToggle={noHardWaits.toggle}
                borderColor="#667eea"
                id="no-waits"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Hard waits make tests slow and unreliable. Use framework's built-in waiting mechanisms instead.
                    </p>
                    <APISectionContent
                        id="wait-bad"
                        subtitle="❌ Bad - Hard Waits"
                        definition="Never use arbitrary waits:"
                        code={`await page.waitForTimeout(5000); // ❌ Bad
await new Promise(resolve => setTimeout(resolve, 3000)); // ❌ Bad`}
                    />
                    <APISectionContent
                        id="wait-good"
                        subtitle="✅ Good - Explicit Waits"
                        definition="Use explicit waits:"
                        code={`// Playwright
await page.waitForSelector('.element', { state: 'visible' });
await page.waitForResponse(response => response.url().includes('/api/data'));

// Cypress
cy.get('.element').should('be.visible');
cy.wait('@apiCall');

// Selenium
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.elementToBeClickable(element));`}
                    />
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="6) Tests Must Be Independent"
                isExpanded={independentTests.isExpanded}
                onToggle={independentTests.toggle}
                borderColor="#667eea"
                id="independence"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Each test should be able to run in isolation and produce the same result regardless of execution order.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>No dependencies:</strong> Tests shouldn't rely on data or state from other tests</li>
                        <li><strong>Clean setup:</strong> Each test sets up its own required data</li>
                        <li><strong>Clean teardown:</strong> Clean up created data after test execution</li>
                        <li><strong>Isolated accounts:</strong> Use unique test accounts or tenants to avoid collisions</li>
                    </ul>
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="7) AAA Pattern (Arrange–Act–Assert)"
                isExpanded={aaaPattern.isExpanded}
                onToggle={aaaPattern.toggle}
                borderColor="#667eea"
                id="aaa"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Structure your tests clearly with three distinct sections.
                    </p>
                    <APISectionContent
                        id="aaa-example"
                        subtitle="AAA Pattern Example"
                        definition="Clear structure:"
                        code={`test('user can submit registration form', async ({ page }) => {
  // Arrange: Setup state and data
  const userData = {
    email: 'test@example.com',
    password: 'SecurePass123!'
  };
  await page.goto('/register');

  // Act: Perform the action
  await page.getByLabel('Email').fill(userData.email);
  await page.getByLabel('Password').fill(userData.password);
  await page.getByRole('button', { name: 'Register' }).click();

  // Assert: Validate the result
  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByText('Welcome')).toBeVisible();
});`}
                    />
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="8) Clear, Business-Friendly Naming"
                isExpanded={naming.isExpanded}
                onToggle={naming.toggle}
                borderColor="#667eea"
                id="naming"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Test names should clearly describe what the test does and what outcome is expected.
                    </p>
                    <APISectionContent
                        id="naming-examples"
                        subtitle="Naming Examples"
                        definition="Good vs Bad:"
                        code={`// ✅ Good - Clear and descriptive
test('User can submit registration form with valid data')
test('User cannot login with invalid credentials')
test('Shopping cart displays correct total when items are added')

// ❌ Bad - Unclear and unhelpful
test('Test1_submit_form')
test('login_test')
test('cart_test_2')`}
                    />
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="9) Smart Test Data Management"
                isExpanded={testData.isExpanded}
                onToggle={testData.toggle}
                borderColor="#667eea"
                id="test-data"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Generate unique, meaningful test data that doesn't cause collisions.
                    </p>
                    <APISectionContent
                        id="test-data-example"
                        subtitle="Data Factory Pattern"
                        definition="Generate unique data:"
                        code={`// Test data factory
class UserFactory {
  static createUser() {
    const timestamp = Date.now();
    return {
      email: \`test-\${timestamp}@example.com\`,
      username: \`user_\${timestamp}\`,
      password: 'SecurePass123!'
    };
  }
}

// In test
test('user registration', async ({ page }) => {
  const userData = UserFactory.createUser();
  // Use userData...
});`}
                    />
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="10) Proper Assertions"
                isExpanded={assertions.isExpanded}
                onToggle={assertions.toggle}
                borderColor="#667eea"
                id="assertions"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Assert what matters for the scenario—not too many, not too few.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Focus on functionality:</strong> Assert business outcomes, not implementation details</li>
                        <li><strong>Avoid over-asserting:</strong> Don't check every UI detail that might change</li>
                        <li><strong>One meaningful assertion minimum:</strong> Every test should verify something important</li>
                    </ul>
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="11) Logging + Reporting"
                isExpanded={logging.isExpanded}
                onToggle={logging.toggle}
                borderColor="#667eea"
                id="logging"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Good logging and reporting make debugging failures much easier.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Screenshots on failure:</strong> Automatically capture screenshots when tests fail</li>
                        <li><strong>Videos/Traces:</strong> Record test execution for debugging (especially in CI)</li>
                        <li><strong>HTML reports:</strong> Use tools like Allure, HTML Reporter, or framework-specific reporters</li>
                        <li><strong>Structured logs:</strong> Log important steps and decisions in your tests</li>
                    </ul>
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="12) Tagging & Test Suite Discipline"
                isExpanded={tagging.isExpanded}
                onToggle={tagging.toggle}
                borderColor="#667eea"
                id="tagging"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Organize tests with tags and run appropriate suites at the right times.
                    </p>
                    <APISectionContent
                        id="tagging-examples"
                        subtitle="Common Tags"
                        definition="Tag your tests:"
                        code={`// Playwright
test('login test', { tag: '@smoke' }, async ({ page }) => { ... });
test('checkout flow', { tag: '@critical' }, async ({ page }) => { ... });

// Cypress
describe('User Registration', { tags: '@smoke @regression' }, () => { ... });

// Jest
test('api test', () => { ... }, { tags: ['@api', '@smoke'] });`}
                    />
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        marginTop: '16px',
                        textAlign: 'left'
                    }}>
                        <li><strong>@smoke:</strong> Critical path tests—run on every PR (fast, &lt; 5 minutes)</li>
                        <li><strong>@regression:</strong> Full test suite—run nightly or on release</li>
                        <li><strong>@critical:</strong> Business-critical features</li>
                        <li><strong>@api:</strong> API-only tests (faster than UI tests)</li>
                        <li><strong>@accessibility:</strong> A11y-specific tests</li>
                    </ul>
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="13) Reliability: Minimize Flakiness"
                isExpanded={reliability.isExpanded}
                onToggle={reliability.toggle}
                borderColor="#667eea"
                id="reliability"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Flaky tests erode trust in your test suite. Fix root causes instead of adding retries.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Fix timing issues:</strong> Use proper waits instead of arbitrary delays</li>
                        <li><strong>Mock external dependencies:</strong> Mock APIs, databases, or services that are unstable</li>
                        <li><strong>Isolate tests:</strong> Ensure tests don't interfere with each other</li>
                        <li><strong>Retry as last resort:</strong> Only retry if the failure is truly intermittent and unfixable</li>
                    </ul>
                </div>
            </APICollapsibleSection>

            <APICollapsibleSection
                title="14) Code Quality Standards"
                isExpanded={codeQuality.isExpanded}
                onToggle={codeQuality.toggle}
                borderColor="#667eea"
                id="code-quality"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Apply the same code quality standards to test code as you do to production code.
                    </p>
                    <ul style={{ 
                        lineHeight: '2', 
                        fontSize: '15px',
                        color: '#475569',
                        paddingLeft: '24px',
                        margin: 0,
                        textAlign: 'left'
                    }}>
                        <li><strong>Linting:</strong> Use ESLint, Prettier, or similar tools</li>
                        <li><strong>Code reviews:</strong> Review test code with the same rigor as production code</li>
                        <li><strong>Consistent structure:</strong> Follow consistent folder structure and naming conventions</li>
                        <li><strong>Documentation:</strong> Document complex test scenarios and setup requirements</li>
                    </ul>
                </div>
            </APICollapsibleSection>

            {/* Summary Section */}
            <div style={{
                backgroundColor: '#f0f7fa',
                padding: '30px',
                borderRadius: '12px',
                marginTop: '40px',
                border: '2px solid #667eea'
            }}>
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    textAlign: 'center'
                }}>
                    Summary
                </h3>
                <p style={{ 
                    fontSize: '16px', 
                    color: '#475569',
                    lineHeight: '1.8',
                    textAlign: 'left'
                }}>
                    Following these automation test case best practices will help you build a maintainable, reliable, and scalable test suite. Remember that these principles apply to any UI automation framework—whether you're using <strong>Playwright</strong>, <strong>Cypress</strong>, <strong>Selenium</strong>, or any other tool. Adapt these practices to your team's specific needs and stack.
                </p>
            </div>
        </div>
    );
};

export default Automation;
