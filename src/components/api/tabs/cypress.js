import React from 'react';
import link from '../../../utilities/links.json';
import CypressLogo from '../../../images/tabs/CypressLogo.png';
import { pageContainerStyles, colors } from '../../../utils/globalStyles';
import {
  APIHero,
  APILinks,
  APICollapsibleSection,
  APICodeBlock,
  APIPDFDownload,
  APISectionContent,
  APIChecklistGrid,
  useCollapsible,
  FRAMEWORK_CONFIGS,
  CHECKLIST_SECTIONS
} from '../shared';

const resCypress = () => {
    // Use reusable collapsible hook
    const gettingStarted = useCollapsible(false);
    const checklist = useCollapsible(false);
    const commands = useCollapsible(false);
    const bestPractices = useCollapsible(false);

    // Get framework config
    const config = FRAMEWORK_CONFIGS.cypress;

    // PDF downloads configuration
    const pdfDownloads = [
        {
            title: 'Cypress Commands & Best Practices Handout',
            description: 'Download the complete Cypress JavaScript Commands & Best Practices handout',
            pdfPath: 'Cypress_Commands_Best_Practices_Handout_2026.pdf',
            downloadFileName: 'Cypress_Commands_Best_Practices_Handout_2026.pdf'
        }
    ];

    // Checklist sections
    const checklistSections = [
        {
            id: 'checklist-a',
            title: 'A) Test Structure & Organization',
            items: [
                'Use `describe()` to group tests by feature/module',
                'Use consistent naming: **Feature → Scenario → Expected Result**',
                'Keep tests **independent** (no hidden dependency on previous test)',
                'Use tags/annotations when needed (`@smoke`, `@regression`) *(optional)*'
            ]
        },
        {
            id: 'checklist-b',
            title: 'B) Hooks & Lifecycle',
            items: [
                'Use `before()` for **one-time setup** (seed data, login once, create users)',
                'Use `after()` for **one-time cleanup** (delete test data, close resources)',
                'Use `beforeEach()` to prepare state **per test** (navigate, login, reset mocks)',
                'Use `afterEach()` to capture **evidence** on failure (screenshot/logs)'
            ]
        },
        {
            id: 'checklist-c',
            title: 'C) Commands & Assertions',
            items: [
                'Use Cypress commands: `cy.get()`, `cy.contains()`, `cy.find()`',
                'Prefer data-cy attributes for stable selectors',
                'Use `.should()` for assertions (auto-retry built-in)',
                'Chain commands properly (Cypress commands are promises)'
            ]
        },
        {
            id: 'checklist-d',
            title: 'D) Quality & Stability',
            items: [
                'Avoid `cy.wait()` with arbitrary timeouts',
                'Use `cy.intercept()` for network stubbing/mocking',
                'Ensure every test has at least **one meaningful assertion**',
                'Keep UI tests fast—use API setup when possible'
            ]
        }
    ];

    return(
        <div style={pageContainerStyles.modern}>
            {/* Hero Section - Using reusable component */}
            <APIHero
                title="CypressIO Framework"
                subtitle="Fast, Easy and Reliable Testing for Anything That Runs in a Browser"
                logo={CypressLogo}
                gradientStart={config.gradientStart}
                gradientEnd={config.gradientEnd}
                logoAlt="Cypress Logo"
            />

            {/* GitHub Links - Using reusable component */}
            <APILinks
                githubUrl={link.CYPRESS_GITHUB}
                docsUrl={link.CYPRESS_WEBSITE || 'https://www.cypress.io/'}
                frameworkName="Cypress"
            />

            {/* PDF Download Section - Using reusable component */}
            <APIPDFDownload
                downloads={pdfDownloads}
                sectionTitle="📥 Download Cypress Resources"
                borderColor={config.gradientStart}
            />

            {/* Cypress Introduction Section - Using reusable component */}
            <APICollapsibleSection
                title="Getting Started"
                isExpanded={gettingStarted.isExpanded}
                onToggle={gettingStarted.toggle}
                borderColor={config.gradientStart}
                id="intro-what-is"
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '17px', 
                        color: '#475569',
                        lineHeight: '1.9',
                        marginBottom: '18px',
                        textAlign: 'left'
                    }}>
                        <strong>Cypress</strong> is a next-generation front-end testing tool built for the modern web. It enables you to write faster, easier, and more reliable tests. Cypress runs in the same run-loop as your application, giving you native access to every DOM element. It supports <strong>Chrome, Firefox, Edge, and Electron</strong> browsers.
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
                        <li><strong>Time travel:</strong> See exactly what happened at each step of your test</li>
                        <li><strong>Real-time reloads:</strong> Automatically reloads as you save your test files</li>
                        <li><strong>Automatic waiting:</strong> Never add waits or sleeps to your tests</li>
                        <li><strong>Network traffic control:</strong> Easily stub and mock network requests</li>
                        <li><strong>Screenshots & videos:</strong> Automatic screenshots and videos on failure</li>
                        <li><strong>Debugging:</strong> Readable errors and stack traces</li>
                        <li><strong>Cross-browser testing:</strong> Run tests in Chrome, Firefox, Edge, and Electron</li>
                        <li><strong>Dashboard service:</strong> Record test runs and view analytics</li>
                        <li><strong>Component testing:</strong> Test React, Vue, Angular components in isolation</li>
                    </ul>
                </div>

                <APISectionContent
                    id="intro-installation"
                    subtitle="Installation"
                    definition="Install Cypress using npm, yarn, or pnpm:"
                    code={`npm install cypress --save-dev
# or
yarn add cypress --dev
# or
pnpm add cypress --dev`}
                />

                <div style={{ marginBottom: '12px' }}>
                    <p style={{ 
                        fontSize: '15px', 
                        color: '#475569',
                        lineHeight: '1.8',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
                        After installation, open Cypress for the first time:
                    </p>
                    <APICodeBlock code={`npx cypress open
# or
yarn cypress open
# or
pnpm cypress open`} />
                </div>

                <APISectionContent
                    id="intro-running-tests"
                    subtitle="Running Tests"
                    definition="Run tests with the following commands:"
                    code={`# Run tests in headless mode
npx cypress run

# Run tests in interactive mode
npx cypress open

# Run a specific test file
npx cypress run --spec "cypress/e2e/login.cy.js"

# Run tests in a specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge

# Run tests with specific environment
npx cypress run --env apiUrl=https://api.example.com

# Run tests with tags
npx cypress run --env grepTags=@smoke

# Run tests in headed mode
npx cypress run --headed

# Show Cypress version
npx cypress version`}
                />

                <APISectionContent
                    id="intro-configuration"
                    subtitle="Configuration"
                    definition="Cypress configuration is done in cypress.config.js:"
                    code={`const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})`}
                />

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
                        <strong>Learn more:</strong> Visit the official <a href="https://docs.cypress.io/guides/getting-started/installing-cypress" target="_blank" rel="noopener noreferrer" style={{ color: '#17202A', textDecoration: 'none', borderBottom: '2px solid #17202A', fontWeight: '500', transition: 'all 0.2s ease' }}>Cypress Documentation</a> for comprehensive guides, API references, and best practices.
                    </p>
                </div>
            </APICollapsibleSection>

            {/* Cypress Course Checklist Section - Using reusable component */}
            <APICollapsibleSection
                title="Cypress Course Checklist"
                isExpanded={checklist.isExpanded}
                onToggle={checklist.toggle}
                borderColor={colors.primary}
            >
                <div style={{ marginBottom: '24px' }}>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#64748b',
                        marginBottom: 0,
                        lineHeight: '1.6',
                        textAlign: 'left'
                    }}>
                        Below is a <strong>course-wide Cypress checklist</strong>, followed by <strong>clear definitions</strong> and <strong>one-by-one examples</strong> for each item. Everything is written in a way you can hand to students and reuse throughout the training.
                    </p>
                </div>

                {/* Checklist Grid - Using reusable component */}
                <APIChecklistGrid sections={checklistSections} />

                {/* Definitions & Examples Sections */}
                {[
                            {
                                id: 'checklist-a',
                                title: 'A) Test Structure & Organization',
                                content: [
                                    {
                                        subtitle: '1.1 `describe()` — Group related tests',
                                        definition: '`describe()` creates a logical group (suite) of tests. Hooks inside it apply to tests in that block.',
                                        example: `describe('Login Feature', () => {
  it('should login with valid credentials', () => {
    cy.visit('/login');
    cy.get('[data-cy=username]').type('demo');
    cy.get('[data-cy=password]').type('demo123');
    cy.get('[data-cy=submit]').click();

    cy.get('[data-cy=dashboard]').should('be.visible');
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
                                        subtitle: '1.2 `before()` — One-time setup for the describe block',
                                        definition: 'Runs **once** before all tests in the current `describe` block. Good for: seeding data, creating test users via API, generating auth tokens once.',
                                        example: `describe('Authenticated Area', () => {
  before(() => {
    cy.request('POST', '/api/login', {
      username: 'demo',
      password: 'demo123'
    }).then((response) => {
      window.localStorage.setItem('token', response.body.token);
    });
  });

  it('should open profile page', () => {
    cy.visit('/profile');
    cy.get('[data-cy=profile]').should('be.visible');
  });
});`
                                    },
                                    {
                                        subtitle: '1.3 `after()` — One-time cleanup for the describe block',
                                        definition: 'Runs **once** after all tests in the current `describe` block. Good for: deleting test data, closing DB connections, cleaning up users created in `before`.',
                                        example: `describe('Data Setup/Cleanup Example', () => {
  let createdUserId;

  before(() => {
    cy.request('POST', '/api/users', {
      name: 'Cypress User'
    }).then((response) => {
      createdUserId = response.body.id;
    });
  });

  after(() => {
    if (createdUserId) {
      cy.request('DELETE', \`/api/users/\${createdUserId}\`);
    }
  });

  it('uses the created user', () => {
    // test steps...
  });
});`
                                    },
                                    {
                                        subtitle: '1.4 `beforeEach()` — Per-test setup',
                                        definition: 'Runs **before each test** in the `describe` block. Use it to: navigate to start page, reset application state, set test-specific context (like intercepts/mocks), ensure consistent starting condition.',
                                        example: `describe('Cart Module', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=navigation]').should('be.visible');
  });

  it('should add item to cart', () => {
    cy.get('[data-cy=products]').click();
    cy.get('[data-cy=add-to-cart]').first().click();

    cy.get('[data-cy=cart]').should('contain', 'Cart');
  });
});`
                                    },
                                    {
                                        subtitle: '1.5 `afterEach()` — Per-test teardown/evidence',
                                        definition: 'Runs **after each test**. Perfect place to: capture screenshot on failure, attach logs, clean temporary state if needed.',
                                        example: `describe('Evidence Capture', () => {
  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(\`\${this.currentTest.title}-failed\`);
    }
  });

  it('example test', () => {
    cy.visit('/');
    // steps...
  });
});`
                                    }
                                ]
                            },
                            {
                                id: 'checklist-c',
                                title: 'C) Commands & Assertions',
                                content: [
                                    {
                                        subtitle: '1.6 Cypress Commands — Core commands',
                                        definition: 'Cypress provides a rich set of commands for interacting with your application. Commands automatically retry and wait for elements.',
                                        example: `// Navigation
cy.visit('/login');

// Querying elements
cy.get('[data-cy=username]'); // by data-cy attribute (recommended)
cy.contains('Login'); // by text content
cy.find('[data-cy=form]'); // find within previous element

// Actions
cy.get('[data-cy=username]').type('demo');
cy.get('[data-cy=submit]').click();
cy.get('[data-cy=checkbox]').check();

// Assertions
cy.get('[data-cy=dashboard]').should('be.visible');
cy.get('[data-cy=title]').should('contain', 'Welcome');
cy.url().should('include', '/dashboard');`
                                    }
                                ]
                            },
                            {
                                id: 'checklist-d',
                                title: 'D) Quality & Stability',
                                content: [
                                    {
                                        subtitle: '1.7 Network Interception — Mock API calls',
                                        definition: 'Use `cy.intercept()` to stub and mock network requests. This makes tests faster and more reliable.',
                                        example: `describe('API Mocking', () => {
  it('should mock API response', () => {
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' }
      ]
    }).as('getUsers');

    cy.visit('/users');
    cy.wait('@getUsers');
    cy.get('[data-cy=user-list]').should('contain', 'User 1');
  });
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
                                        <APICodeBlock code={item.example} />
                                    </div>
                                ))}
                            </div>
                        ))}
            </APICollapsibleSection>

            {/* Cypress Commands Section - Using reusable component */}
            <APICollapsibleSection
                title="Cypress Commands Reference"
                isExpanded={commands.isExpanded}
                onToggle={commands.toggle}
                borderColor={config.gradientStart}
            >
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        fontWeight: '600',
                        marginBottom: '20px',
                        textAlign: 'left'
                    }}>
                        Common Cypress Commands
                    </h3>
                    
                    <APISectionContent
                        subtitle="Navigation Commands"
                        code={`// Visit a URL
cy.visit('/login');
cy.visit('https://example.com');

// Go back/forward in browser history
cy.go('back');
cy.go('forward');

// Reload the page
cy.reload();
cy.reload(true); // force reload without cache`}
                    />

                    <APISectionContent
                        subtitle="Querying Commands"
                        code={`// Get elements
cy.get('[data-cy=username]'); // by data-cy (recommended)
cy.get('#username'); // by ID
cy.get('.form-input'); // by class
cy.get('input[type="text"]'); // by attribute

// Find elements
cy.get('form').find('input'); // find within element
cy.contains('Login'); // find by text content
cy.get('button').contains('Submit'); // find button with text

// Get by role (accessibility)
cy.get('button').should('have.attr', 'role', 'button');`}
                    />

                    <APISectionContent
                        subtitle="Action Commands"
                        code={`// Type text
cy.get('[data-cy=username]').type('demo');
cy.get('[data-cy=username]').type('demo{enter}'); // with Enter key

// Click
cy.get('[data-cy=submit]').click();
cy.get('[data-cy=submit]').click({ force: true }); // force click

// Check/Uncheck
cy.get('[data-cy=checkbox]').check();
cy.get('[data-cy=checkbox]').uncheck();

// Select from dropdown
cy.get('[data-cy=select]').select('Option 1');

// Clear input
cy.get('[data-cy=input]').clear();

// Trigger events
cy.get('[data-cy=button]').trigger('mouseover');
cy.get('[data-cy=input]').trigger('focus');`}
                    />

                    <APISectionContent
                        subtitle="Assertion Commands"
                        code={`// Visibility assertions
cy.get('[data-cy=element]').should('be.visible');
cy.get('[data-cy=element]').should('not.exist');
cy.get('[data-cy=element]').should('exist');

// Text assertions
cy.get('[data-cy=title]').should('contain', 'Welcome');
cy.get('[data-cy=title]').should('have.text', 'Welcome');
cy.get('[data-cy=title]').should('include.text', 'Welcome');

// Attribute assertions
cy.get('[data-cy=link]').should('have.attr', 'href', '/dashboard');
cy.get('[data-cy=input]').should('have.value', 'demo');

// URL assertions
cy.url().should('include', '/dashboard');
cy.url().should('eq', 'https://example.com/dashboard');

// Window assertions
cy.window().should('have.property', 'localStorage');
cy.title().should('eq', 'Dashboard');`}
                    />

                    <APISectionContent
                        subtitle="Network Commands"
                        code={`// Intercept network requests
cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers');
cy.intercept('POST', '/api/login', { statusCode: 200, body: { token: 'abc123' } });

// Wait for network requests
cy.wait('@getUsers');

// Make API requests
cy.request('GET', '/api/users');
cy.request({
  method: 'POST',
  url: '/api/login',
  body: { username: 'demo', password: 'demo123' }
});`}
                    />
                </div>
            </APICollapsibleSection>

            {/* Best Practices Section - Using reusable component */}
            <APICollapsibleSection
                title="Best Practices"
                isExpanded={bestPractices.isExpanded}
                onToggle={bestPractices.toggle}
                borderColor={config.gradientStart}
            >
                <APISectionContent
                    subtitle="1. Use data-cy Attributes"
                    definition="Use data-cy attributes for stable selectors that won't change with CSS or structure changes."
                    code={`// ✅ Good - Stable selector
cy.get('[data-cy=login-button]').click();

// ❌ Bad - Fragile selector
cy.get('.btn.btn-primary.login-btn').click();`}
                />

                <APISectionContent
                    subtitle="2. Avoid Arbitrary Waits"
                    definition="Cypress automatically waits for elements. Avoid using cy.wait() with arbitrary timeouts."
                    code={`// ✅ Good - Cypress auto-waits
cy.get('[data-cy=element]').should('be.visible');

// ❌ Bad - Arbitrary wait
cy.wait(5000);
cy.get('[data-cy=element]').should('be.visible');`}
                />

                <APISectionContent
                    subtitle="3. Use Custom Commands for Reusable Logic"
                    definition="Create custom commands in cypress/support/commands.js for reusable actions."
                    code={`// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');
  cy.get('[data-cy=username]').type(username);
  cy.get('[data-cy=password]').type(password);
  cy.get('[data-cy=submit]').click();
});

// Use in tests
cy.login('demo', 'demo123');`}
                />

                <APISectionContent
                    subtitle="4. Mock Network Requests"
                    definition="Use cy.intercept() to mock API calls for faster, more reliable tests."
                    code={`beforeEach(() => {
  cy.intercept('GET', '/api/users', {
    statusCode: 200,
    body: [{ id: 1, name: 'User 1' }]
  }).as('getUsers');
});

it('should display users', () => {
  cy.visit('/users');
  cy.wait('@getUsers');
  cy.get('[data-cy=user-list]').should('be.visible');
});`}
                />

                <APISectionContent
                    subtitle="5. Keep Tests Independent"
                    definition="Each test should be able to run independently. Use beforeEach() to set up state, not rely on previous tests."
                    code={`// ✅ Good - Independent test
describe('Cart', () => {
  beforeEach(() => {
    cy.login('demo', 'demo123');
    cy.visit('/cart');
  });

  it('should add item', () => {
    // test steps
  });
});

// ❌ Bad - Depends on previous test
it('should add item', () => {
  // assumes previous test already logged in
});`}
                />
            </APICollapsibleSection>
        </div>
    )
}
export default resCypress;
