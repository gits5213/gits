import React from 'react';
import { leftAlignStyles } from '../../../utils/globalStyles';

const Cucumber = () => {
    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                ...leftAlignStyles.heroSection,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={leftAlignStyles.heroTitle}>
                        Cucumber
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        BDD Testing Framework for Test Automation
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    What is Cucumber?
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Cucumber is a popular open-source BDD (Behavior-Driven Development) testing framework that supports multiple programming languages. It allows you to write test scenarios in plain English using Gherkin syntax, making tests readable and understandable by both technical and non-technical stakeholders.
                </p>
                <p style={leftAlignStyles.paragraph}>
                    Cucumber reads executable specifications written in plain language and validates that the software does what those specifications say. The specifications consist of multiple examples, or scenarios, written in a structured format.
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#00416A', textAlign: 'left' }}>Key Features:</p>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px', textAlign: 'left' }}>
                        <li>Supports multiple programming languages (Java, JavaScript, Ruby, Python, .NET, etc.)</li>
                        <li>Readable test scenarios using Gherkin syntax</li>
                        <li>Reusable step definitions</li>
                        <li>Powerful hooks for setup and teardown</li>
                        <li>Data-driven testing with scenario outlines</li>
                        <li>Integration with various testing frameworks</li>
                    </ul>
                </div>
            </div>

            {/* Installation */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Installation
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    JavaScript/TypeScript (Node.js)
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`npm install --save-dev @cucumber/cucumber
npm install --save-dev @cucumber/cucumber-js`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Java
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`<!-- Maven -->
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-java</artifactId>
    <version>7.14.0</version>
    <scope>test</scope>
</dependency>

<!-- Gradle -->
testImplementation 'io.cucumber:cucumber-java:7.14.0'`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Python
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`pip install cucumber`}</pre>
                </div>
            </div>

            {/* Project Structure */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Cucumber Project Structure
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    A typical Cucumber project follows a standard directory structure:
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`project-root/
├── features/
│   ├── login.feature
│   ├── registration.feature
│   └── checkout.feature
├── step_definitions/
│   ├── login_steps.js
│   ├── registration_steps.js
│   └── common_steps.js
├── support/
│   ├── hooks.js
│   ├── world.js
│   └── page_objects/
│       ├── LoginPage.js
│       └── DashboardPage.js
├── cucumber.js (or cucumber.json)
└── package.json`}</pre>
                </div>
            </div>

            {/* Basic Example */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Basic Cucumber Example
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Feature File (login.feature)
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Feature: User Login
  As a user
  I want to log into the application
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter "testuser@example.com" in the email field
    And I enter "SecurePass123" in the password field
    And I click the "Login" button
    Then I should be redirected to the dashboard
    And I should see "Welcome, testuser" message`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Step Definitions (JavaScript)
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the login page', async function () {
  // Navigate to login page
  await this.page.goto('https://example.com/login');
});

When('I enter {string} in the email field', async function (email) {
  await this.page.fill('#email', email);
});

When('I enter {string} in the password field', async function (password) {
  await this.page.fill('#password', password);
});

When('I click the {string} button', async function (buttonText) {
  await this.page.click('button:has-text("' + buttonText + '")');
});

Then('I should be redirected to the dashboard', async function () {
  await this.page.waitForURL(/.*dashboard/);
});

Then('I should see {string} message', async function (message) {
  await this.page.locator('text=' + message).waitFor();
});`}</pre>
                </div>
            </div>

            {/* Traditional vs Cucumber Automation */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Traditional Automation vs Cucumber Automation
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Understanding the differences between traditional test automation and Cucumber-based automation helps you make informed decisions about which approach to use for your testing needs.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Traditional Test Automation Approach
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Traditional automation typically involves writing test scripts directly in programming languages without a structured, readable format. Tests are written by developers/testers and may not be easily understood by non-technical stakeholders.
                </p>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Example: Traditional Automation (Playwright)
                </h4>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// test/login.test.js
const { test, expect } = require('@playwright/test');

test('user login test', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://example.com/login');
  
  // Enter email
  await page.fill('#email', 'testuser@example.com');
  
  // Enter password
  await page.fill('#password', 'SecurePass123');
  
  // Click login button
  await page.click('button:has-text("Login")');
  
  // Wait for navigation
  await page.waitForURL(/.*dashboard/);
  
  // Verify welcome message
  const welcomeMessage = page.locator('text=Welcome, testuser');
  await expect(welcomeMessage).toBeVisible();
});`}</pre>
                </div>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Characteristics of Traditional Automation
                </h4>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Code-centric:</strong> Tests are written entirely in programming code</li>
                    <li><strong>Technical knowledge required:</strong> Only developers/testers can read and understand tests</li>
                    <li><strong>Less collaboration:</strong> Business stakeholders cannot easily review or validate tests</li>
                    <li><strong>Direct implementation:</strong> Test logic and implementation are tightly coupled</li>
                    <li><strong>Faster initial setup:</strong> No need for feature files or step definitions</li>
                    <li><strong>Less documentation:</strong> Tests serve as code documentation only</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Cucumber Automation Approach
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Cucumber automation separates test scenarios (written in plain language) from test implementation (step definitions). This creates a bridge between business requirements and technical implementation.
                </p>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Example: Cucumber Automation (Playwright + Cucumber)
                </h4>
                
                <h5 style={{
                    color: '#00416A',
                    fontSize: '18px',
                    marginBottom: '10px',
                    marginTop: '15px',
                    fontWeight: '600',
                    textAlign: 'left'
                }}>
                    Feature File (login.feature)
                </h5>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Feature: User Login
  As a user
  I want to log into the application
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter "testuser@example.com" in the email field
    And I enter "SecurePass123" in the password field
    And I click the "Login" button
    Then I should be redirected to the dashboard
    And I should see "Welcome, testuser" message`}</pre>
                </div>

                <h5 style={{
                    color: '#00416A',
                    fontSize: '18px',
                    marginBottom: '10px',
                    marginTop: '15px',
                    fontWeight: '600',
                    textAlign: 'left'
                }}>
                    Step Definitions (login_steps.js)
                </h5>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// step_definitions/login_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function () {
  await this.page.goto('https://example.com/login');
});

When('I enter {string} in the email field', async function (email) {
  await this.page.fill('#email', email);
});

When('I enter {string} in the password field', async function (password) {
  await this.page.fill('#password', password);
});

When('I click the {string} button', async function (buttonText) {
  await this.page.click('button:has-text("' + buttonText + '")');
});

Then('I should be redirected to the dashboard', async function () {
  await expect(this.page).toHaveURL(/.*dashboard/);
});

Then('I should see {string} message', async function (message) {
  await expect(this.page.locator('text=' + message)).toBeVisible();
});`}</pre>
                </div>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Characteristics of Cucumber Automation
                </h4>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Readable scenarios:</strong> Tests written in plain English using Gherkin syntax</li>
                    <li><strong>Business-friendly:</strong> Non-technical stakeholders can read and understand tests</li>
                    <li><strong>Enhanced collaboration:</strong> Business analysts, product owners, and developers can collaborate</li>
                    <li><strong>Separation of concerns:</strong> Test scenarios (what) are separated from implementation (how)</li>
                    <li><strong>Living documentation:</strong> Feature files serve as executable documentation</li>
                    <li><strong>Reusable steps:</strong> Step definitions can be reused across multiple scenarios</li>
                    <li><strong>BDD approach:</strong> Focuses on behavior and business value</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Key Differences Comparison
                </h3>
                
                <div style={{
                    backgroundColor: '#f0f8ff',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    border: '1px solid #00416A',
                    textAlign: 'left'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '16px',
                        textAlign: 'left'
                    }}>
                        <thead>
                            <tr style={{
                                backgroundColor: '#00416A',
                                color: '#ffffff'
                            }}>
                                <th style={{
                                    padding: '12px',
                                    border: '1px solid #00416A',
                                    textAlign: 'left'
                                }}>Aspect</th>
                                <th style={{
                                    padding: '12px',
                                    border: '1px solid #00416A',
                                    textAlign: 'left'
                                }}>Traditional Automation</th>
                                <th style={{
                                    padding: '12px',
                                    border: '1px solid #00416A',
                                    textAlign: 'left'
                                }}>Cucumber Automation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{
                                backgroundColor: '#ffffff'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Readability</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Requires programming knowledge</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Plain English, readable by all</td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#f8f9fa'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Stakeholder Collaboration</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Limited - technical only</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>High - business and technical</td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Documentation</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Code comments and test names</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Executable feature files</td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#f8f9fa'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Test Structure</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Code-based, flexible structure</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Gherkin syntax, structured format</td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Reusability</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Functions/helpers for reuse</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Step definitions across scenarios</td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#f8f9fa'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Setup Complexity</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Simpler initial setup</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Requires feature files + step definitions</td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Maintenance</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Update code when requirements change</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Update feature files, step definitions may remain</td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#f8f9fa'
                            }}>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>Business Value</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Technical focus</td>
                                <td style={{
                                    padding: '12px',
                                    border: '1px solid #e0e0e0',
                                    textAlign: 'left'
                                }}>Business behavior focus</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    When to Use Each Approach
                </h3>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Use Traditional Automation When:
                </h4>
                <ul style={leftAlignStyles.list}>
                    <li>Team consists primarily of technical members</li>
                    <li>Rapid test development is prioritized</li>
                    <li>Tests are highly technical and don't need business review</li>
                    <li>You need maximum flexibility in test structure</li>
                    <li>Simple, straightforward test scenarios</li>
                    <li>No requirement for business-readable documentation</li>
                </ul>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Use Cucumber Automation When:
                </h4>
                <ul style={leftAlignStyles.list}>
                    <li>Business stakeholders need to review and validate tests</li>
                    <li>You want living documentation of system behavior</li>
                    <li>BDD approach aligns with your development methodology</li>
                    <li>You need to bridge communication between technical and non-technical teams</li>
                    <li>Test scenarios need to be easily understood by product owners</li>
                    <li>You want reusable step definitions across multiple scenarios</li>
                    <li>Compliance or documentation requirements exist</li>
                </ul>

                <div style={{
                    backgroundColor: '#fff3cd',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '30px',
                    borderLeft: '4px solid #ffc107',
                    textAlign: 'left'
                }}>
                    <p style={{
                        margin: 0,
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#856404',
                        textAlign: 'left',
                        marginBottom: '10px'
                    }}>
                        💡 Pro Tip:
                    </p>
                    <p style={{
                        margin: 0,
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#856404',
                        textAlign: 'left'
                    }}>
                        Many teams use a hybrid approach: Cucumber for high-level, business-critical scenarios that need stakeholder review, and traditional automation for technical, low-level tests. This combines the benefits of both approaches.
                    </p>
                </div>
            </div>

            {/* Cucumber with Playwright Integration */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Integrating Cucumber with Playwright
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Playwright is a powerful browser automation framework that works excellently with Cucumber for end-to-end testing. This integration allows you to write BDD-style tests while leveraging Playwright's robust browser automation capabilities.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Step 1: Install Dependencies
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`npm install --save-dev @cucumber/cucumber
npm install --save-dev playwright
npm install --save-dev @playwright/test`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Step 2: Setup World Object
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Create a custom World object to share Playwright browser, context, and page instances across step definitions.
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/world.js
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async initBrowser() {
    this.browser = await chromium.launch({
      headless: false, // Set to true for CI/CD
      slowMo: 50 // Slow down operations for debugging
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Step 3: Setup Hooks
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Use hooks to initialize and clean up Playwright resources before and after scenarios.
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/hooks.js
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

BeforeAll(async function () {
  console.log('Starting test suite');
});

Before(async function () {
  // Initialize browser before each scenario
  await this.initBrowser();
});

After(async function () {
  // Cleanup after each scenario
  await this.closeBrowser();
});

AfterAll(async function () {
  console.log('Test suite completed');
});`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Step 4: Create Step Definitions with Playwright
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// step_definitions/login_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function () {
  await this.page.goto('https://example.com/login');
  await this.page.waitForLoadState('networkidle');
});

When('I enter {string} in the email field', async function (email) {
  await this.page.fill('input[name="email"]', email);
});

When('I enter {string} in the password field', async function (password) {
  await this.page.fill('input[name="password"]', password);
});

When('I click the {string} button', async function (buttonText) {
  await this.page.click('button:has-text("' + buttonText + '")');
  await this.page.waitForLoadState('networkidle');
});

Then('I should be redirected to the dashboard', async function () {
  await expect(this.page).toHaveURL(/.*dashboard/);
});

Then('I should see {string} message', async function (message) {
  const locator = this.page.locator('text=' + message);
  await expect(locator).toBeVisible();
});`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Step 5: Advanced Playwright Features with Cucumber
                </h3>
                
                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Screenshots on Failure
                </h4>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/hooks.js
After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    const screenshot = await this.page.screenshot({
      path: 'screenshots/' + scenario.pickle.name + '_' + Date.now() + '.png',
      fullPage: true
    });
    await this.attach(screenshot, 'image/png');
  }
  await this.closeBrowser();
});`}</pre>
                </div>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Video Recording
                </h4>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/world.js
async initBrowser() {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: 'videos/',
      size: { width: 1920, height: 1080 }
    }
  });
  this.page = await this.context.newPage();
}

async closeBrowser() {
  if (this.page) await this.page.close();
  await this.context.close();
  await this.browser.close();
}`}</pre>
                </div>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Network Interception
                </h4>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// step_definitions/api_steps.js
When('I intercept API calls', async function () {
  await this.page.route('**/api/**', route => {
    console.log('Intercepted:', route.request().url());
    route.continue();
  });
});

When('I mock API response for {string}', async function (endpoint) {
  await this.page.route('**/' + endpoint, route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true })
    });
  });
});`}</pre>
                </div>

                <h4 style={{
                    color: '#00416A',
                    fontSize: '20px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Multiple Browser Contexts
                </h4>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/world.js
class CustomWorld {
  constructor() {
    this.browser = null;
    this.contexts = {};
    this.pages = {};
  }

  async createContext(name) {
    this.contexts[name] = await this.browser.newContext();
    this.pages[name] = await this.contexts[name].newPage();
  }

  async switchToContext(name) {
    this.page = this.pages[name];
    this.context = this.contexts[name];
  }
}

// Usage in step definitions
Given('I open a new browser context named {string}', async function (contextName) {
  await this.createContext(contextName);
  await this.switchToContext(contextName);
});`}</pre>
                </div>
            </div>

            {/* Configuration */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Cucumber Configuration
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    cucumber.js Configuration File
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// cucumber.js
module.exports = {
  default: {
    require: [
      'step_definitions/**/*.js',
      'support/**/*.js'
    ],
    format: [
      'progress-bar',
      'json:reports/cucumber_report.json',
      'html:reports/cucumber_report.html',
      'message:reports/cucumber_report.ndjson'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true,
    tags: '@smoke or @regression'
  },
  smoke: {
    require: [
      'step_definitions/**/*.js',
      'support/**/*.js'
    ],
    format: ['progress-bar'],
    tags: '@smoke'
  },
  regression: {
    require: [
      'step_definitions/**/*.js',
      'support/**/*.js'
    ],
    format: ['progress-bar'],
    tags: '@regression'
  }
};`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Running Tests
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Run all tests
npx cucumber-js

# Run specific feature
npx cucumber-js features/login.feature

# Run with specific profile
npx cucumber-js --profile smoke

# Run with specific tags
npx cucumber-js --tags "@smoke"

# Run in parallel
npx cucumber-js --parallel 4`}</pre>
                </div>
            </div>

            {/* Page Object Model */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Page Object Model with Cucumber and Playwright
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Using Page Object Model (POM) pattern with Cucumber and Playwright helps maintain clean, reusable, and maintainable test code.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Base Page Class
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/page_objects/BasePage.js
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async click(locator) {
    await this.page.click(locator);
  }

  async fill(locator, text) {
    await this.page.fill(locator, text);
  }

  async getText(locator) {
    return await this.page.locator(locator).textContent();
  }

  async waitForElement(locator) {
    await this.page.locator(locator).waitFor();
  }
}

module.exports = BasePage;`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Login Page Object
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/page_objects/LoginPage.js
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = 'input[name="email"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button:has-text("Login")';
    this.errorMessage = '.error-message';
  }

  async navigateToLoginPage() {
    await this.navigateTo('https://example.com/login');
  }

  async enterEmail(email) {
    await this.fill(this.emailInput, email);
  }

  async enterPassword(password) {
    await this.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }
}

module.exports = LoginPage;`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Using Page Objects in Step Definitions
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// step_definitions/login_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../support/page_objects/LoginPage');

Given('I am on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateToLoginPage();
});

When('I enter {string} in the email field', async function (email) {
  await this.loginPage.enterEmail(email);
});

When('I enter {string} in the password field', async function (password) {
  await this.loginPage.enterPassword(password);
});

When('I click the {string} button', async function (buttonText) {
  await this.loginPage.clickLoginButton();
});

Then('I should see {string} message', async function (message) {
  const errorMessage = await this.loginPage.getErrorMessage();
  if (errorMessage !== message) {
    throw new Error('Expected: ' + message + ', but got: ' + errorMessage);
  }
});`}</pre>
                </div>
            </div>

            {/* Best Practices */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Best Practices for Cucumber with Playwright
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Writing Effective Step Definitions
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Keep steps reusable:</strong> Write generic step definitions that can be used across multiple scenarios</li>
                    <li><strong>Use parameters:</strong> Leverage Cucumber's parameter matching to make steps flexible</li>
                    <li><strong>Avoid hardcoding:</strong> Use configuration files or environment variables for URLs and test data</li>
                    <li><strong>Implement proper waits:</strong> Use Playwright's built-in waiting mechanisms instead of hardcoded sleeps</li>
                    <li><strong>Handle errors gracefully:</strong> Provide meaningful error messages when steps fail</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Organizing Feature Files
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Group related scenarios in the same feature file</li>
                    <li>Use descriptive feature and scenario names</li>
                    <li>Keep scenarios focused on a single behavior</li>
                    <li>Use tags to categorize scenarios (@smoke, @regression, @api, @ui)</li>
                    <li>Use Background for common setup steps</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Performance Optimization
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Run tests in parallel using Cucumber's parallel execution</li>
                    <li>Use Playwright's browser context pooling</li>
                    <li>Reuse browser instances across scenarios when possible</li>
                    <li>Use headless mode for faster execution in CI/CD</li>
                    <li>Optimize selectors for better performance</li>
                </ul>
            </div>

            {/* CI/CD Integration */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    CI/CD Integration
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Cucumber tests with Playwright can be easily integrated into CI/CD pipelines for automated testing.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    GitHub Actions Example
                </h3>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# .github/workflows/test.yml
name: Cucumber Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      
      - name: Run Cucumber tests
        run: npx cucumber-js --profile smoke
      
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: |
            reports/
            screenshots/
            videos/`}</pre>
                </div>
            </div>

            {/* Common Issues and Solutions */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Common Issues and Solutions
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Issue: Browser not closing properly
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>Solution:</strong> Ensure proper cleanup in After hooks. Always close pages, contexts, and browsers in the correct order.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Issue: Flaky tests due to timing
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>Solution:</strong> Use Playwright's auto-waiting features. Avoid hardcoded waits and use <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>waitForLoadState()</code> and <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>waitFor()</code> methods.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Issue: Step definitions not found
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>Solution:</strong> Ensure step definition files are in the correct directory and properly required in the cucumber.js configuration file.
                </p>
            </div>

            {/* Resources Section */}
            <div style={leftAlignStyles.sectionContainer}>
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Additional Resources
                </h3>
                <div style={leftAlignStyles.gridLinks}>
                    <a
                        href="https://cucumber.io/docs/cucumber/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={leftAlignStyles.gridLink}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Cucumber Documentation
                    </a>
                    <a
                        href="https://playwright.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={leftAlignStyles.gridLink}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Playwright Documentation
                    </a>
                    <a
                        href="https://github.com/cucumber/cucumber-js"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={leftAlignStyles.gridLink}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Cucumber JS GitHub
                    </a>
                    <a
                        href="https://cucumber.io/docs/gherkin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={leftAlignStyles.gridLink}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Gherkin Reference
                    </a>
                </div>
            </div>

            <div>
            </div>
            <section style={{ marginTop: '40px' }}>
            </section>
        </div>
    )
}
export default Cucumber;
