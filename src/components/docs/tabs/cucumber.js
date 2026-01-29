import React from 'react';
import link from '../../../utilities/links.json';
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
                    Introduction to Cucumber
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Cucumber is a popular open-source BDD (Behavior-Driven Development) testing framework that supports multiple programming languages. It allows you to write test scenarios in plain English using Gherkin syntax, making tests readable and understandable by both technical and non-technical stakeholders.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is Cucumber?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Cucumber is a BDD (Behavior-Driven Development) testing framework</li>
                    <li>Cucumber reads executable specifications written in plain language</li>
                    <li>Cucumber validates that software does what specifications say</li>
                    <li>Cucumber supports multiple programming languages (Java, JavaScript, Ruby, Python, .NET, etc.)</li>
                    <li>Cucumber uses Gherkin syntax for readable test scenarios</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What Can Cucumber Do?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Write test scenarios in plain English using Gherkin syntax</li>
                    <li>Create reusable step definitions</li>
                    <li>Use powerful hooks for setup and teardown</li>
                    <li>Perform data-driven testing with scenario outlines</li>
                    <li>Integrate with various testing frameworks (Playwright, Selenium, etc.)</li>
                    <li>Generate comprehensive HTML and JSON reports</li>
                    <li>Support multiple programming languages</li>
                    <li>Enable collaboration between technical and non-technical team members</li>
                    <li>Organize tests with tags and feature files</li>
                    <li>Run tests in parallel for faster execution</li>
                </ul>
            </div>

            {/* Getting Started Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Getting Started: Step-by-Step Guide to Automate Test Cases with Playwright + Cucumber
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    This comprehensive guide will walk you through automating a complete test scenario using Playwright and Cucumber with TypeScript, from initial setup to running your first test. All code examples use TypeScript for type safety and better developer experience.
                </p>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 1: Initialize Your Project
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create a new directory for your test automation project and initialize it with npm.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Create project directory
mkdir playwright-cucumber-tests
cd playwright-cucumber-tests

# Initialize npm project
npm init -y`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 2: Install Required Dependencies
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Install Cucumber, Playwright, TypeScript, and their dependencies as development dependencies.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Install Cucumber
npm install --save-dev @cucumber/cucumber

# Install Playwright
npm install --save-dev playwright @playwright/test

# Install TypeScript and type definitions
npm install --save-dev typescript @types/node ts-node

# Install Playwright browsers
npx playwright install`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 3: Create Project Directory Structure
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create the standard Cucumber directory structure for organizing your tests.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Create directory structure
mkdir -p features
mkdir -p features/step-definitions
mkdir -p features/support
mkdir -p features/support/page-objects
mkdir -p screenshots
mkdir -p reports`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 4: Configure TypeScript
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create a tsconfig.json file for TypeScript configuration.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["features/**/*"],
  "exclude": ["node_modules"]
}`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 5: Create Cucumber Configuration
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create a cucumber.config.ts file to configure Cucumber settings.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// cucumber.config.ts
import { defineConfig } from '@cucumber/cucumber';

export default defineConfig({
  default: {
    paths: ['features/**/*.feature'],
    require: ['features/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'json:reports/cucumber_report.json',
      'html:reports/cucumber_report.html',
      'progress-bar'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    }
  }
});`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 6: Create World Object
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create a World object to share browser context between step definitions.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// features/support/world.ts
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async initBrowser(): Promise<void> {
    this.browser = await chromium.launch({
      headless: false
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    this.page = await this.context.newPage();
  }

  async closeBrowser(): Promise<void> {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 7: Create Hooks for Setup and Teardown
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create hooks.ts file to initialize and clean up browser resources.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// features/support/hooks.ts
import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.initBrowser();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    await this.page.screenshot({
      path: 'screenshots/' + scenario.pickle.name + '.png'
    });
  }
  await this.closeBrowser();
});`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 8: Write Your First Feature File
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create a feature file with your test scenario written in Gherkin syntax.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# features/login.feature
Feature: User Login
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
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 9: Create Step Definitions
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create step definition files that map Gherkin steps to Playwright code.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// features/step-definitions/loginSteps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the login page', async function (this: CustomWorld) {
  await this.page.goto('https://example.com/login');
  await this.page.waitForLoadState('networkidle');
});

When('I enter {string} in the email field', async function (this: CustomWorld, email: string) {
  await this.page.fill('input[name="email"]', email);
});

When('I enter {string} in the password field', async function (this: CustomWorld, password: string) {
  await this.page.fill('input[name="password"]', password);
});

When('I click the {string} button', async function (this: CustomWorld, buttonText: string) {
  await this.page.click('button:has-text("' + buttonText + '")');
  await this.page.waitForLoadState('networkidle');
});

Then('I should be redirected to the dashboard', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/.*dashboard/);
});

Then('I should see {string} message', async function (this: CustomWorld, message: string) {
  const locator = this.page.locator('text=' + message);
  await expect(locator).toBeVisible();
});`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 10: Add Test Scripts to package.json
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Add npm scripts to make running tests easier.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// package.json
{
  "scripts": {
    "test": "cucumber-js",
    "test:smoke": "cucumber-js --tags @smoke",
    "test:regression": "cucumber-js --tags @regression"
  }
}`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 11: Run Your First Test
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Execute your test scenario using the Cucumber CLI.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Run all tests
npm test

# Run specific feature file
npx cucumber-js features/login.feature

# Run with specific tags
npx cucumber-js --tags @smoke`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 12: How to Run and View Reports
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        After running your tests, Cucumber generates HTML and JSON reports that provide detailed information about test execution.
                    </p>
                    <h4 style={{
                        color: '#00416A',
                        fontSize: '18px',
                        marginBottom: '10px',
                        marginTop: '20px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Viewing HTML Reports
                    </h4>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# On macOS:
open reports/cucumber_report.html

# On Linux:
xdg-open reports/cucumber_report.html

# On Windows:
start reports/cucumber_report.html`}</pre>
                    </div>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        The HTML report includes test execution summary, detailed view of each scenario, execution time, error messages, and feature file structure.
                    </p>
                </div>
            </div>

            {/* Key Concepts Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Gherkin Syntax
                    </h3>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '15px'
                    }}>
                        Gherkin is a plain-text language used to describe software behavior. It uses keywords like:
                    </p>
                    <ul style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>Feature:</strong> Describes the feature being tested</li>
                        <li><strong>Scenario:</strong> Describes a test scenario</li>
                        <li><strong>Given:</strong> Sets up initial context</li>
                        <li><strong>When:</strong> Describes an action</li>
                        <li><strong>Then:</strong> Describes expected outcome</li>
                        <li><strong>And/But:</strong> Continues previous step</li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Step Definitions
                    </h3>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '15px'
                    }}>
                        Step definitions connect Gherkin steps to executable code:
                    </p>
                    <ul style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li>Each step in feature files must have a matching step definition</li>
                        <li>Step definitions use regular expressions or strings</li>
                        <li>Parameters can be captured using <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'{string}'}</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'{int}'}</code></li>
                        <li>Step definitions are reusable across multiple scenarios</li>
                    </ul>
                </div>
            </div>

            {/* Best Practices Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Best Practices
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Writing Effective Feature Files
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li>Write scenarios in plain, business-readable language</li>
                        <li>Keep scenarios focused on a single behavior</li>
                        <li>Use descriptive scenario names</li>
                        <li>Organize related scenarios in the same feature file</li>
                        <li>Use tags to categorize scenarios (@smoke, @regression, etc.)</li>
                        <li>Avoid technical implementation details in feature files</li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Organizing Step Definitions
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li>Group related step definitions in the same file</li>
                        <li>Use Page Object Model pattern for better maintainability</li>
                        <li>Keep step definitions simple and focused</li>
                        <li>Reuse step definitions across multiple scenarios</li>
                        <li>Use hooks for setup and teardown operations</li>
                    </ul>
                </div>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href="https://cucumber.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Cucumber Official Website
                </a>
                <a 
                    href="https://github.com/cucumber/cucumber-js" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Cucumber JS GitHub
                </a>
                <a 
                    href="https://cucumber.io/docs/gherkin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Gherkin Reference
                </a>
                <a 
                    href="https://playwright.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Playwright Documentation
                </a>
            </div>

            <section style={{ marginTop: '40px' }}>
            </section>
        </div>
    )
}

export default Cucumber;
