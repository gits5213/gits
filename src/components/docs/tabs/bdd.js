import React from 'react';
import { leftAlignStyles } from '../../../utils/globalStyles';

const Bdd = () => {
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
                        Behavior-Driven Development (BDD)
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        A Collaborative Approach to Test Automation and Software Development
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    What is BDD?
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Behavior-Driven Development (BDD) is a software development methodology that combines practices from Test-Driven Development (TDD) and Domain-Driven Design (DDD). BDD focuses on describing the behavior of an application in plain language that both technical and non-technical stakeholders can understand.
                </p>
                <p style={leftAlignStyles.paragraph}>
                    BDD encourages collaboration between developers, QA engineers, product owners, and business stakeholders by using a common language to describe how the application should behave. This shared understanding helps ensure that the right features are built correctly.
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#00416A', textAlign: 'left' }}>BDD Core Principles:</p>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px', textAlign: 'left' }}>
                        <li>Focus on behavior and outcomes, not implementation details</li>
                        <li>Use natural language that everyone can understand</li>
                        <li>Collaborate across roles and disciplines</li>
                        <li>Write executable specifications that serve as living documentation</li>
                    </ul>
                </div>
            </div>

            {/* Gherkin Syntax */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Gherkin Syntax
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Gherkin is the language used to write BDD scenarios. It uses a structured format with keywords that make scenarios readable and executable. Gherkin files are typically saved with a <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>.feature</code> extension.
                </p>
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Gherkin Keywords
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Feature:</strong> Describes the feature being tested</li>
                    <li><strong>Scenario:</strong> Describes a single test scenario</li>
                    <li><strong>Given:</strong> Sets up the initial context (preconditions)</li>
                    <li><strong>When:</strong> Describes the action or event</li>
                    <li><strong>Then:</strong> Describes the expected outcome</li>
                    <li><strong>And:</strong> Continues the previous step (Given/When/Then)</li>
                    <li><strong>But:</strong> Used for negative conditions</li>
                    <li><strong>Background:</strong> Steps that run before every scenario</li>
                    <li><strong>Scenario Outline:</strong> Template for scenarios with multiple data sets</li>
                    <li><strong>Examples:</strong> Data table for Scenario Outline</li>
                </ul>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Example Gherkin Scenario
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
    And I should see "Welcome, testuser" message

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter "invalid@example.com" in the email field
    And I enter "WrongPassword" in the password field
    And I click the "Login" button
    Then I should see an error message "Invalid credentials"
    And I should remain on the login page`}</pre>
                </div>
            </div>

            {/* BDD in Test Automation */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    BDD in Test Automation
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    BDD plays a crucial role in test automation by providing a bridge between business requirements and automated tests. Test automation frameworks that support BDD allow you to write tests in Gherkin syntax and execute them automatically.
                </p>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Benefits of BDD in Test Automation
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Readability:</strong> Tests are written in plain language that anyone can understand</li>
                    <li><strong>Maintainability:</strong> Changes to requirements can be easily reflected in test scenarios</li>
                    <li><strong>Reusability:</strong> Step definitions can be reused across multiple scenarios</li>
                    <li><strong>Documentation:</strong> Feature files serve as living documentation</li>
                    <li><strong>Collaboration:</strong> Business stakeholders can review and validate test scenarios</li>
                    <li><strong>Traceability:</strong> Easy to trace tests back to requirements</li>
                </ul>
            </div>

            {/* BDD Frameworks */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Popular BDD Testing Frameworks
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Cucumber
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Cucumber is one of the most popular BDD frameworks. It supports multiple programming languages including Java, JavaScript, Python, Ruby, and more.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Languages:</strong> Java, JavaScript, Python, Ruby, .NET, PHP</li>
                    <li><strong>Key Features:</strong> Gherkin parser, step definitions, hooks, data tables, scenario outlines</li>
                    <li><strong>Integration:</strong> Works with Selenium, Playwright, Cypress, REST Assured, and more</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    SpecFlow (.NET)
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    SpecFlow is the .NET implementation of Cucumber, bringing BDD to the .NET ecosystem.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Languages:</strong> C#, VB.NET, F#</li>
                    <li><strong>Key Features:</strong> Visual Studio integration, step definition generation, parallel execution</li>
                    <li><strong>Integration:</strong> Works with Selenium, SpecFlow+ Runner, NUnit, xUnit</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Behave (Python)
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Behave is a Python BDD framework that uses Gherkin syntax for writing test scenarios.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Language:</strong> Python</li>
                    <li><strong>Key Features:</strong> Gherkin parser, step definitions, fixtures, formatters</li>
                    <li><strong>Integration:</strong> Works with Selenium, pytest, unittest</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Cypress with Cucumber
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Cypress can be integrated with Cucumber preprocessor to write BDD-style tests for web applications.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Language:</strong> JavaScript/TypeScript</li>
                    <li><strong>Key Features:</strong> Fast execution, time-travel debugging, real browser testing</li>
                    <li><strong>Integration:</strong> @badeball/cypress-cucumber-preprocessor</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Playwright with Cucumber
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Playwright can be combined with Cucumber to create BDD test automation for modern web applications.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Language:</strong> JavaScript/TypeScript, Python, Java, C#</li>
                    <li><strong>Key Features:</strong> Cross-browser testing, auto-waiting, network interception</li>
                    <li><strong>Integration:</strong> @cucumber/cucumber with Playwright</li>
                </ul>
            </div>

            {/* Step Definitions */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Step Definitions
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Step definitions are the code implementations that connect Gherkin steps to actual test code. Each Given, When, Then, And, or But step in a scenario must have a corresponding step definition.
                </p>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Example Step Definitions (JavaScript/Cucumber)
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
            </div>

            {/* Best Practices */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    BDD Best Practices for Test Automation
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Writing Good Scenarios
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Keep scenarios focused:</strong> Each scenario should test one specific behavior</li>
                    <li><strong>Use clear language:</strong> Write scenarios that anyone can understand</li>
                    <li><strong>Avoid implementation details:</strong> Focus on "what" not "how"</li>
                    <li><strong>Use the right level of abstraction:</strong> Not too high-level, not too low-level</li>
                    <li><strong>Keep scenarios independent:</strong> Each scenario should be able to run independently</li>
                    <li><strong>Use Background wisely:</strong> Use Background for common setup steps</li>
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
                    <li>Use descriptive feature file names (e.g., <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>user_authentication.feature</code>)</li>
                    <li>Keep feature files focused on a single feature or user story</li>
                    <li>Use tags to categorize scenarios (e.g., @smoke, @regression, @api)</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Step Definition Best Practices
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Reusability:</strong> Write reusable step definitions that can be used across scenarios</li>
                    <li><strong>Parameterization:</strong> Use parameters to make steps flexible</li>
                    <li><strong>Single responsibility:</strong> Each step definition should do one thing</li>
                    <li><strong>Error handling:</strong> Implement proper error handling and meaningful error messages</li>
                    <li><strong>Page Object Model:</strong> Use Page Object Model pattern for better maintainability</li>
                    <li><strong>Data management:</strong> Separate test data from step definitions</li>
                </ul>
            </div>

            {/* Data Tables and Scenario Outlines */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Data Tables and Scenario Outlines
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    BDD supports parameterized testing through data tables and scenario outlines, allowing you to test multiple data combinations efficiently.
                </p>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Data Tables Example
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
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Scenario: User registration with different data
  Given I am on the registration page
  When I fill in the registration form with:
    | First Name | Last Name | Email              | Password   |
    | John       | Doe       | john@example.com   | Pass123!   |
    | Jane       | Smith     | jane@example.com   | Secure456! |
  Then I should see a success message`}</pre>
                </div>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Scenario Outline Example
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
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Scenario Outline: Login with different credentials
  Given I am on the login page
  When I enter "<email>" in the email field
  And I enter "<password>" in the password field
  And I click the "Login" button
  Then I should see "<result>" message

  Examples:
    | email              | password   | result                    |
    | valid@example.com  | Correct123 | Welcome                   |
    | invalid@example.com| WrongPass  | Invalid credentials       |
    | test@example.com   |            | Password is required      |`}</pre>
                </div>
            </div>

            {/* Hooks */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Hooks in BDD
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Hooks allow you to run code before or after scenarios, features, or steps. They're useful for setup and teardown operations.
                </p>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Common Hook Types
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Before:</strong> Runs before each scenario</li>
                    <li><strong>After:</strong> Runs after each scenario</li>
                    <li><strong>BeforeAll:</strong> Runs once before all scenarios</li>
                    <li><strong>AfterAll:</strong> Runs once after all scenarios</li>
                    <li><strong>BeforeStep:</strong> Runs before each step</li>
                    <li><strong>AfterStep:</strong> Runs after each step</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Example Hooks (JavaScript/Cucumber)
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
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

BeforeAll(async function () {
  // Setup that runs once before all scenarios
  console.log('Starting test suite');
});

Before(async function () {
  // Setup before each scenario
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  // Cleanup after each scenario
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});

AfterAll(async function () {
  // Cleanup that runs once after all scenarios
  console.log('Test suite completed');
});`}</pre>
                </div>
            </div>

            {/* Tags */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Tags in BDD
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Tags allow you to organize and filter scenarios. You can tag scenarios, features, or use tags to control which scenarios run.
                </p>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Common Tag Examples
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>@smoke</code> - Quick validation tests</li>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>@regression</code> - Full regression suite</li>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>@api</code> - API tests</li>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>@ui</code> - UI tests</li>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>@critical</code> - Critical path tests</li>
                    <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>@wip</code> - Work in progress</li>
                </ul>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Example Tag Usage
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
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`@smoke @ui
Feature: User Authentication
  As a user
  I want to log into the application
  So that I can access my account

  @critical
  Scenario: Successful login
    Given I am on the login page
    When I login with valid credentials
    Then I should be redirected to dashboard

  @regression
  Scenario: Failed login with invalid password
    Given I am on the login page
    When I login with invalid password
    Then I should see an error message`}</pre>
                </div>
            </div>

            {/* BDD Workflow */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    BDD Workflow in Test Automation
                </h2>
                <ol style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333333',
                    paddingLeft: '20px',
                    marginBottom: '30px',
                    textAlign: 'left'
                }}>
                    <li><strong>Discovery:</strong> Collaborate with stakeholders to identify behaviors</li>
                    <li><strong>Formulation:</strong> Write Gherkin scenarios describing the behavior</li>
                    <li><strong>Automation:</strong> Implement step definitions to automate the scenarios</li>
                    <li><strong>Execution:</strong> Run the scenarios as automated tests</li>
                    <li><strong>Reporting:</strong> Review test results and update scenarios as needed</li>
                    <li><strong>Maintenance:</strong> Keep scenarios and step definitions up to date</li>
                </ol>
            </div>

            {/* Common Challenges */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Common Challenges and Solutions
                </h2>
                
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Challenge: Overly Complex Scenarios
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>Solution:</strong> Break down complex scenarios into smaller, focused scenarios. Use Background for common setup steps.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Challenge: Duplicate Step Definitions
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>Solution:</strong> Create a shared step definitions library. Use regular expressions and parameters to make steps reusable.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Challenge: Slow Test Execution
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>Solution:</strong> Use parallel execution, optimize step definitions, use tags to run only necessary tests, and implement proper test data management.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Challenge: Maintaining Test Data
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>Solution:</strong> Use data tables, scenario outlines, external data files, or test data management tools. Keep test data separate from step definitions.
                </p>
            </div>

            {/* Integration with CI/CD */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    BDD in CI/CD Pipelines
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    BDD tests can be integrated into Continuous Integration/Continuous Deployment pipelines to ensure that new code changes don't break existing functionality.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li>Run smoke tests on every commit</li>
                    <li>Run regression tests on pull requests</li>
                    <li>Generate test reports and publish them</li>
                    <li>Use tags to control which tests run in different pipeline stages</li>
                    <li>Integrate with test reporting tools (Allure, Extent Reports, etc.)</li>
                </ul>
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
                        href="https://specflow.org/"
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
                        SpecFlow Documentation
                    </a>
                    <a
                        href="https://behave.readthedocs.io/"
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
                        Behave Documentation
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
export default Bdd;
