// Exam Data - 3 sets of 10 questions each

export const exam1Data = {
    examId: 1,
    examName: 'Exam-1',
    title: 'Basic Manual Testing',
    questions: [
        {
            id: 1,
            question: 'What is the main goal of software testing?',
            options: [
                'Prove the software has no defects',
                'Find defects and reduce risk',
                'Make the software run faster',
                'Write documentation'
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'Which document usually defines what the system should do?',
            options: [
                'Test Summary Report',
                'Requirements / SRS / User Stories',
                'Bug report',
                'Test execution log'
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'What is a "test case"?',
            options: [
                'A piece of code to run tests automatically',
                'A list of UI screenshots',
                'A set of steps + expected results to verify a feature',
                'A deployment plan'
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            question: 'Smoke testing is best described as:',
            options: [
                'Deep testing of every feature',
                'Quick testing of core critical functions to see if build is stable',
                'Performance testing',
                'Security testing'
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Regression testing means:',
            options: [
                'Testing only new features',
                'Testing to ensure previously working features still work after changes',
                'Testing database backups',
                'Testing only UI colors'
            ],
            correctAnswer: 1
        },
        {
            id: 6,
            question: 'Severity in a defect means:',
            options: [
                'How angry the customer is',
                'The impact of the defect on the system',
                'Who found the defect',
                'When the defect was logged'
            ],
            correctAnswer: 1
        },
        {
            id: 7,
            question: 'Priority in a defect means:',
            options: [
                'The impact on the system',
                'How quickly the defect should be fixed',
                'The number of steps to reproduce',
                'The defect category'
            ],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Which is the BEST example of an expected result?',
            options: [
                '"It should work"',
                '"No errors should appear"',
                '"User is navigated to Dashboard and sees \'Welcome, <name>\'"',
                '"Looks fine"'
            ],
            correctAnswer: 2
        },
        {
            id: 9,
            question: 'Which testing is typically done without knowing internal code?',
            options: [
                'White-box testing',
                'Black-box testing',
                'Static code analysis',
                'Compiler testing'
            ],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'A good bug report should include:',
            options: [
                'Only a screenshot',
                'Steps to reproduce + actual vs expected + environment details',
                'Only severity',
                'Only the developer name'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam2Data = {
    examId: 2,
    examName: 'Exam-2',
    title: 'Automation Testing (General)',
    questions: [
        {
            id: 11,
            question: 'Main benefit of test automation is:',
            options: [
                'Replaces all manual testing',
                'Faster, repeatable testing for stable checks',
                'Removes need for requirements',
                'Guarantees zero defects'
            ],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Which tests are usually BEST to automate first?',
            options: [
                'Frequently repeated, stable smoke/regression checks',
                'One-time exploratory tests',
                'UI animations and colors only',
                'Features changing every day'
            ],
            correctAnswer: 0
        },
        {
            id: 13,
            question: 'What is a common reason automated UI tests become flaky?',
            options: [
                'Tests run too fast',
                'Unstable locators / timing issues / not waiting for app readiness',
                'Too many comments',
                'Using TypeScript'
            ],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'What is the best practice instead of using fixed waits (sleep)?',
            options: [
                'Always add `wait(5000)`',
                'Use condition-based waits (assertions) or wait for network/state',
                'Remove all assertions',
                'Run tests only once'
            ],
            correctAnswer: 1
        },
        {
            id: 15,
            question: 'Which is a key goal of a test framework?',
            options: [
                'Make tests longer',
                'Organize tests, reuse utilities, improve maintainability & reporting',
                'Hide failures',
                'Prevent CI/CD'
            ],
            correctAnswer: 1
        },
        {
            id: 16,
            question: 'What does CI (Continuous Integration) usually do with tests?',
            options: [
                'Runs tests automatically on commits/PRs',
                'Writes test cases automatically',
                'Replaces developers',
                'Only runs tests monthly'
            ],
            correctAnswer: 0
        },
        {
            id: 17,
            question: 'What is "test data management" in automation?',
            options: [
                'Storing test videos only',
                'Creating/controlling data needed for tests and cleaning it up',
                'Turning off the database',
                'Running tests without data'
            ],
            correctAnswer: 1
        },
        {
            id: 18,
            question: 'Which locator strategy is usually MOST stable?',
            options: [
                'Random XPath',
                'CSS class from UI library',
                'Data attributes like `data-testid` / `data-cy`',
                'Element position like "first button"'
            ],
            correctAnswer: 2
        },
        {
            id: 19,
            question: 'In automation, Page Object Model (POM) is used to:',
            options: [
                'Make tests depend on each other',
                'Store selectors and page actions to reduce duplication',
                'Remove assertions',
                'Increase flakiness'
            ],
            correctAnswer: 1
        },
        {
            id: 20,
            question: 'In test automation, an assertion is used to:',
            options: [
                'Click elements',
                'Verify expected behavior/output',
                'Load environment variables',
                'Create Git branches'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam3Data = {
    examId: 3,
    examName: 'Exam-3',
    title: 'Playwright-Specific',
    questions: [
        {
            id: 21,
            question: 'In Playwright Test, the default test function is:',
            options: [
                '`it()`',
                '`test()`',
                '`spec()`',
                '`run()`'
            ],
            correctAnswer: 1
        },
        {
            id: 22,
            question: 'What is the recommended way to find elements in Playwright?',
            options: [
                '`page.$()` everywhere',
                '`locator()` (e.g., `page.getByRole()`, `page.locator()`)',
                '`document.querySelector()`',
                'Only XPath'
            ],
            correctAnswer: 1
        },
        {
            id: 23,
            question: 'Which locator is BEST practice for a button with accessible name "Submit"?',
            options: [
                '`page.locator("//button[1]")`',
                '`page.getByRole(\'button\', { name: \'Submit\' })`',
                '`page.getByText(\'Submit\')` always',
                '`page.locator(\'.btn-primary\')`'
            ],
            correctAnswer: 1
        },
        {
            id: 24,
            question: 'Playwright locators are "auto-waiting", meaning:',
            options: [
                'They never fail',
                'They automatically wait for elements to be ready for actions/assertions',
                'They require `waitForTimeout()`',
                'They skip assertions'
            ],
            correctAnswer: 1
        },
        {
            id: 25,
            question: 'Which command runs Playwright tests?',
            options: [
                '`npm start`',
                '`npx playwright test`',
                '`node test`',
                '`npx playwright run`'
            ],
            correctAnswer: 1
        },
        {
            id: 26,
            question: 'How do you run tests in Playwright UI mode (interactive runner)?',
            options: [
                '`npx playwright test --ui`',
                '`npx playwright test --open`',
                '`npx playwright test --chrome-only`',
                '`npx playwright test --debug=false`'
            ],
            correctAnswer: 0
        },
        {
            id: 27,
            question: 'What does `expect(locator).toBeVisible()` do?',
            options: [
                'Click the element',
                'Check visibility with auto-wait until timeout',
                'Refresh the page',
                'Clear cookies'
            ],
            correctAnswer: 1
        },
        {
            id: 28,
            question: 'How do you capture a trace for debugging in Playwright Test?',
            options: [
                'Only screenshots are possible',
                'Use config `use: { trace: \'on\' }` or `\'retain-on-failure\'`',
                'Use `trace: \'off\'`',
                'Use `page.pause()` only'
            ],
            correctAnswer: 1
        },
        {
            id: 29,
            question: 'Best way to handle auth reuse across tests in Playwright is:',
            options: [
                'Log in from UI in every test always',
                'Use `storageState` to save/load authenticated state',
                'Disable authentication',
                'Use only API tests'
            ],
            correctAnswer: 1
        },
        {
            id: 30,
            question: 'How can you intercept/modify network requests in Playwright?',
            options: [
                '`cy.intercept()`',
                '`page.route()`',
                '`browser.route()`',
                '`expect.route()`'
            ],
            correctAnswer: 1
        }
    ]
};
