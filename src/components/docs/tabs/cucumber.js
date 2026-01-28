'use client';

import React, { useState } from 'react';
import { leftAlignStyles } from '../../../utils/globalStyles';

const Cucumber = () => {
    // State for all collapsible sections (all collapsed by default)
    const [isGettingStartedExpanded, setIsGettingStartedExpanded] = useState(false);
    const [isInstallationExpanded, setIsInstallationExpanded] = useState(false);
    const [isProjectStructureExpanded, setIsProjectStructureExpanded] = useState(false);
    const [isBasicExampleExpanded, setIsBasicExampleExpanded] = useState(false);
    const [isTraditionalVsCucumberExpanded, setIsTraditionalVsCucumberExpanded] = useState(false);
    const [isPlaywrightIntegrationExpanded, setIsPlaywrightIntegrationExpanded] = useState(false);
    const [isConfigurationExpanded, setIsConfigurationExpanded] = useState(false);
    const [isPageObjectModelExpanded, setIsPageObjectModelExpanded] = useState(false);
    const [isBestPracticesExpanded, setIsBestPracticesExpanded] = useState(false);
    const [isCICDExpanded, setIsCICDExpanded] = useState(false);
    const [isCommonIssuesExpanded, setIsCommonIssuesExpanded] = useState(false);
    const [isResourcesExpanded, setIsResourcesExpanded] = useState(false);

    // Toggle functions for each section
    const toggleGettingStarted = () => setIsGettingStartedExpanded(!isGettingStartedExpanded);
    const toggleInstallation = () => setIsInstallationExpanded(!isInstallationExpanded);
    const toggleProjectStructure = () => setIsProjectStructureExpanded(!isProjectStructureExpanded);
    const toggleBasicExample = () => setIsBasicExampleExpanded(!isBasicExampleExpanded);
    const toggleTraditionalVsCucumber = () => setIsTraditionalVsCucumberExpanded(!isTraditionalVsCucumberExpanded);
    const togglePlaywrightIntegration = () => setIsPlaywrightIntegrationExpanded(!isPlaywrightIntegrationExpanded);
    const toggleConfiguration = () => setIsConfigurationExpanded(!isConfigurationExpanded);
    const togglePageObjectModel = () => setIsPageObjectModelExpanded(!isPageObjectModelExpanded);
    const toggleBestPractices = () => setIsBestPracticesExpanded(!isBestPracticesExpanded);
    const toggleCICD = () => setIsCICDExpanded(!isCICDExpanded);
    const toggleCommonIssues = () => setIsCommonIssuesExpanded(!isCommonIssuesExpanded);
    const toggleResources = () => setIsResourcesExpanded(!isResourcesExpanded);

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

            {/* Getting Started - Collapsible Section */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isGettingStartedExpanded ? '20px' : '0'
                    }}
                    onClick={toggleGettingStarted}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Getting Started: Step-by-Step Guide to Automate Test Cases with Playwright + Cucumber
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isGettingStartedExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isGettingStartedExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#333333',
                                marginBottom: '30px',
                                textAlign: 'left'
                            }}>
                                This comprehensive guide will walk you through automating a complete test scenario using Playwright and Cucumber with TypeScript, from initial setup to running your first test. All code examples use TypeScript for type safety and better developer experience.
                            </p>

                            {/* Step 1 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
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
                                <p style={{
                                    fontSize: '14px',
                                    fontStyle: 'italic',
                                    color: '#666666',
                                    textAlign: 'left'
                                }}>
                                    This creates a package.json file with default values. You can modify it later if needed.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
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
npm install --save-dev playwright

# Install Playwright test utilities
npm install --save-dev @playwright/test

# Install TypeScript and type definitions
npm install --save-dev typescript @types/node

# Install ts-node for running TypeScript files
npm install --save-dev ts-node

# Install Playwright browsers
npx playwright install`}</pre>
                                </div>
                                <p style={{
                                    fontSize: '14px',
                                    fontStyle: 'italic',
                                    color: '#666666',
                                    textAlign: 'left'
                                }}>
                                    The <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>--save-dev</code> flag ensures these packages are saved as development dependencies, not production dependencies.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
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
mkdir -p step_definitions
mkdir -p support
mkdir -p support/page_objects
mkdir -p screenshots
mkdir -p reports`}</pre>
                                </div>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    marginBottom: '10px',
                                    textAlign: 'left'
                                }}>
                                    <strong>Directory Purpose:</strong>
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    paddingLeft: '20px',
                                    textAlign: 'left'
                                }}>
                                    <li><strong>features/</strong> - Contains your .feature files with Gherkin scenarios</li>
                                    <li><strong>step_definitions/</strong> - Contains TypeScript files (.ts) with step definitions</li>
                                    <li><strong>support/</strong> - Contains hooks, world configuration, and helper files</li>
                                    <li><strong>support/page_objects/</strong> - Contains Page Object Model classes</li>
                                    <li><strong>screenshots/</strong> - Stores test failure screenshots</li>
                                    <li><strong>reports/</strong> - Stores test execution reports</li>
                                </ul>
                            </div>

                            {/* Step 4 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Step 4: Create TypeScript and Cucumber Configuration Files
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    marginBottom: '15px',
                                    textAlign: 'left'
                                }}>
                                    Create TypeScript configuration (tsconfig.json) and Cucumber configuration (cucumber.js) files.
                                </p>
                                
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '10px',
                                    marginTop: '20px',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>
                                    TypeScript Configuration (tsconfig.json)
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
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "types": ["node", "@cucumber/cucumber"]
  },
  "include": [
    "features/**/*",
    "step_definitions/**/*",
    "support/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}`}</pre>
                                </div>

                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '10px',
                                    marginTop: '20px',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>
                                    Cucumber Configuration (cucumber.js)
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
                                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// cucumber.js
module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'step_definitions/**/*.ts',
      'support/**/*.ts'
    ],
    format: [
      'progress-bar',
      'json:reports/cucumber_report.json',
      'html:reports/cucumber_report.html'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true
  }
};`}</pre>
                                </div>
                                <p style={{
                                    fontSize: '14px',
                                    fontStyle: 'italic',
                                    color: '#666666',
                                    textAlign: 'left'
                                }}>
                                    The <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>requireModule: ['ts-node/register']</code> enables TypeScript support, and the require paths point to <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>.ts</code> files instead of <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>.js</code> files.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Step 5: Create Custom World Object with TypeScript
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    marginBottom: '15px',
                                    textAlign: 'left'
                                }}>
                                    Create a custom World object with TypeScript types to share Playwright browser, context, and page instances across step definitions.
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
                                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/world.ts
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

export class CustomWorld extends World {
  browser: Browser | null = null;
  context: BrowserContext | null = null;
  page: Page | null = null;

  async initBrowser(): Promise<void> {
    this.browser = await chromium.launch({
      headless: false, // Set to true for CI/CD
      slowMo: 50 // Slow down operations for debugging (optional)
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
                                <p style={{
                                    fontSize: '14px',
                                    fontStyle: 'italic',
                                    color: '#666666',
                                    textAlign: 'left'
                                }}>
                                    The World object extends Cucumber's <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>World</code> class and uses TypeScript types for type safety. The <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>this</code> keyword in step definitions refers to this World instance.
                                </p>
                            </div>

                            {/* Step 6 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Step 6: Create Hooks for Setup and Teardown
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    marginBottom: '15px',
                                    textAlign: 'left'
                                }}>
                                    Create hooks.ts file with TypeScript to initialize and clean up browser resources before and after each scenario.
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
                                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// support/hooks.ts
import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';
import { CustomWorld } from './world';

BeforeAll(async function () {
  console.log('Starting test suite...');
});

Before(async function (this: CustomWorld) {
  // Initialize browser before each scenario
  await this.initBrowser();
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  // Take screenshot on failure
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshot = await this.page.screenshot({
      path: 'screenshots/' + scenario.pickle.name + '_' + Date.now() + '.png',
      fullPage: true
    });
    console.log('Screenshot saved for failed scenario:', scenario.pickle.name);
  }
  
  // Cleanup after each scenario
  await this.closeBrowser();
});

AfterAll(async function () {
  console.log('Test suite completed.');
});`}</pre>
                                </div>
                                <p style={{
                                    fontSize: '14px',
                                    fontStyle: 'italic',
                                    color: '#666666',
                                    textAlign: 'left'
                                }}>
                                    Hooks use TypeScript type annotations (<code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>this: CustomWorld</code>) for type safety. <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>Before</code> runs before each scenario, <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>After</code> runs after each scenario.
                                </p>
                            </div>

                            {/* Step 7 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Step 7: Write Your First Feature File
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
                                <p style={{
                                    fontSize: '14px',
                                    fontStyle: 'italic',
                                    color: '#666666',
                                    textAlign: 'left'
                                }}>
                                    Feature files use the <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>.feature</code> extension and contain scenarios written in plain English using Gherkin keywords (Given, When, Then, And, But).
                                </p>
                            </div>

                            {/* Step 8 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Step 8: Create Step Definitions with TypeScript
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    marginBottom: '15px',
                                    textAlign: 'left'
                                }}>
                                    Create step definition files with TypeScript that map Gherkin steps to actual Playwright code with type safety.
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
                                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`// step_definitions/login_steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the login page', async function (this: CustomWorld) {
  if (!this.page) throw new Error('Page is not initialized');
  await this.page.goto('https://example.com/login');
  await this.page.waitForLoadState('networkidle');
});

When('I enter {string} in the email field', async function (this: CustomWorld, email: string) {
  if (!this.page) throw new Error('Page is not initialized');
  await this.page.fill('input[name="email"]', email);
});

When('I enter {string} in the password field', async function (this: CustomWorld, password: string) {
  if (!this.page) throw new Error('Page is not initialized');
  await this.page.fill('input[name="password"]', password);
});

When('I click the {string} button', async function (this: CustomWorld, buttonText: string) {
  if (!this.page) throw new Error('Page is not initialized');
  await this.page.click('button:has-text("' + buttonText + '")');
  await this.page.waitForLoadState('networkidle');
});

Then('I should be redirected to the dashboard', async function (this: CustomWorld) {
  if (!this.page) throw new Error('Page is not initialized');
  await expect(this.page).toHaveURL(/.*dashboard/);
});

Then('I should see {string} message', async function (this: CustomWorld, message: string) {
  if (!this.page) throw new Error('Page is not initialized');
  const locator = this.page.locator('text=' + message);
  await expect(locator).toBeVisible();
});`}</pre>
                                </div>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    marginBottom: '10px',
                                    textAlign: 'left'
                                }}>
                                    <strong>Key Points:</strong>
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    paddingLeft: '20px',
                                    textAlign: 'left'
                                }}>
                                    <li>Each step in the feature file must have a corresponding step definition</li>
                                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>{'{string}'}</code> captures quoted strings from the feature file and is typed as <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>string</code></li>
                                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>this: CustomWorld</code> provides type safety and IntelliSense</li>
                                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>this.page</code> refers to the Playwright page object from the World</li>
                                    <li>Use null checks to ensure page is initialized before use</li>
                                    <li>Use <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>waitForLoadState()</code> to ensure pages are fully loaded</li>
                                </ul>
                            </div>

                            {/* Step 9 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Step 9: Add Test Scripts to package.json
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
    "test:regression": "cucumber-js --tags @regression",
    "test:parallel": "cucumber-js --parallel 4"
  }
}`}</pre>
                                </div>
                                <p style={{
                                    fontSize: '14px',
                                    fontStyle: 'italic',
                                    color: '#666666',
                                    textAlign: 'left'
                                }}>
                                    These scripts allow you to run tests with simple commands like <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>npm test</code> or <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>npm run test:smoke</code>.
                                </p>
                            </div>

                            {/* Step 10 */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '25px',
                                borderRadius: '8px',
                                marginBottom: '25px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Step 10: Run Your First Test
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

# Or use cucumber-js directly
npx cucumber-js

# Run specific feature file
npx cucumber-js features/login.feature

# Run with specific tags
npx cucumber-js --tags @smoke`}</pre>
                                </div>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    marginBottom: '10px',
                                    textAlign: 'left'
                                }}>
                                    <strong>Expected Output:</strong>
                                </p>
                                <div style={{
                                    backgroundColor: '#e8f5e9',
                                    padding: '15px',
                                    borderRadius: '6px',
                                    fontFamily: 'monospace',
                                    fontSize: '14px',
                                    border: '1px solid #4caf50',
                                    marginBottom: '15px',
                                    textAlign: 'left',
                                    overflowX: 'auto'
                                }}>
                                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Feature: User Login

  Scenario: Successful login with valid credentials
    ✓ Given I am on the login page
    ✓ When I enter "testuser@example.com" in the email field
    ✓ And I enter "SecurePass123" in the password field
    ✓ And I click the "Login" button
    ✓ Then I should be redirected to the dashboard
    ✓ And I should see "Welcome, testuser" message

1 scenario (1 passed)
6 steps (6 passed)`}</pre>
                                </div>
                            </div>

                            {/* Troubleshooting */}
                            <div style={{
                                backgroundColor: '#fff3cd',
                                padding: '25px',
                                borderRadius: '8px',
                                marginTop: '30px',
                                borderLeft: '4px solid #ffc107'
                            }}>
                                <h3 style={{
                                    color: '#856404',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    🔧 Troubleshooting Common Issues
                                </h3>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#856404',
                                    paddingLeft: '20px',
                                    textAlign: 'left'
                                }}>
                                    <li><strong>Step definitions not found:</strong> Ensure step definition files are in the <code style={{ backgroundColor: '#fff9e6', padding: '2px 6px', borderRadius: '4px' }}>step_definitions/</code> directory and cucumber.js includes the correct paths</li>
                                    <li><strong>Browser not launching:</strong> Run <code style={{ backgroundColor: '#fff9e6', padding: '2px 6px', borderRadius: '4px' }}>npx playwright install</code> to install browser binaries</li>
                                    <li><strong>Tests timing out:</strong> Increase timeout values or add explicit waits using <code style={{ backgroundColor: '#fff9e6', padding: '2px 6px', borderRadius: '4px' }}>waitForLoadState()</code></li>
                                    <li><strong>World object not accessible:</strong> Ensure <code style={{ backgroundColor: '#fff9e6', padding: '2px 6px', borderRadius: '4px' }}>support/world.js</code> is loaded before step definitions</li>
                                </ul>
                            </div>

                            {/* Next Steps */}
                            <div style={{
                                backgroundColor: '#e7f3ff',
                                padding: '25px',
                                borderRadius: '8px',
                                marginTop: '30px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    🚀 Next Steps
                                </h3>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#00416A',
                                    paddingLeft: '20px',
                                    textAlign: 'left'
                                }}>
                                    <li>Add more scenarios to your feature files</li>
                                    <li>Create reusable step definitions for common actions</li>
                                    <li>Implement Page Object Model for better maintainability</li>
                                    <li>Add tags to organize and filter scenarios</li>
                                    <li>Set up CI/CD pipeline for automated test execution</li>
                                    <li>Generate and review HTML test reports</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Installation - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isInstallationExpanded ? '20px' : '0'
                    }}
                    onClick={toggleInstallation}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Installation
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isInstallationExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isInstallationExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Project Structure - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isProjectStructureExpanded ? '20px' : '0'
                    }}
                    onClick={toggleProjectStructure}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Cucumber Project Structure
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isProjectStructureExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isProjectStructureExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Basic Example - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isBasicExampleExpanded ? '20px' : '0'
                    }}
                    onClick={toggleBasicExample}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Basic Cucumber Example
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isBasicExampleExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isBasicExampleExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Traditional vs Cucumber Automation - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isTraditionalVsCucumberExpanded ? '20px' : '0'
                    }}
                    onClick={toggleTraditionalVsCucumber}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Traditional Automation vs Cucumber Automation
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isTraditionalVsCucumberExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isTraditionalVsCucumberExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Cucumber with Playwright Integration - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isPlaywrightIntegrationExpanded ? '20px' : '0'
                    }}
                    onClick={togglePlaywrightIntegration}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Integrating Cucumber with Playwright
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isPlaywrightIntegrationExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isPlaywrightIntegrationExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Configuration - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isConfigurationExpanded ? '20px' : '0'
                    }}
                    onClick={toggleConfiguration}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Cucumber Configuration
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isConfigurationExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isConfigurationExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Page Object Model - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isPageObjectModelExpanded ? '20px' : '0'
                    }}
                    onClick={togglePageObjectModel}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Page Object Model with Cucumber and Playwright
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isPageObjectModelExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isPageObjectModelExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Best Practices - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isBestPracticesExpanded ? '20px' : '0'
                    }}
                    onClick={toggleBestPractices}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Best Practices for Cucumber with Playwright
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isBestPracticesExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isBestPracticesExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* CI/CD Integration - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isCICDExpanded ? '20px' : '0'
                    }}
                    onClick={toggleCICD}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            CI/CD Integration
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isCICDExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isCICDExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Common Issues and Solutions - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isCommonIssuesExpanded ? '20px' : '0'
                    }}
                    onClick={toggleCommonIssues}
                    >
                        <h2 style={{ 
                            color: '#00416A', 
                            fontSize: '32px', 
                            margin: 0,
                            fontWeight: 'bold'
                        }}>
                            Common Issues and Solutions
                        </h2>
                        <span style={{ 
                            fontSize: '32px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isCommonIssuesExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isCommonIssuesExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
                </div>
            </div>

            {/* Resources Section - Collapsible */}
            <div style={leftAlignStyles.sectionContainer}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isResourcesExpanded ? '20px' : '0'
                    }}
                    onClick={toggleResources}
                    >
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '24px',
                            margin: 0,
                            fontWeight: 'bold',
                            textAlign: 'left'
                        }}>
                            Additional Resources
                        </h3>
                        <span style={{ 
                            fontSize: '24px', 
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px'
                        }}>
                            {isResourcesExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isResourcesExpanded && (
                        <div style={{
                            animation: 'fadeIn 0.3s ease'
                        }}>
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
                    )}
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
