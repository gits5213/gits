// Exam Data - 3 sets of 10 questions each

// Exam-0: BCS-JSE (Basic Computer Skills + Job Search Essentials) - 60 questions, 5 per session × 12 sessions
// Curriculum: https://gitsics.com/course-curriculum/
export const exam0Data = {
    examId: 0,
    examName: 'Exam-0',
    title: 'BCS-JSE: Basic Computer Skills + Job Search Essentials',
    questions: [
        // Session 1: Computer basics - mouse, keyboard, desktop
        { id: 1, question: 'Which action is used to select an item on the desktop?', options: ['Double-click', 'Single click', 'Right-click and drag', 'Press Enter only'], correctAnswer: 0 },
        { id: 2, question: 'What does the taskbar (Windows) or dock (Mac) typically show?', options: ['Only the clock', 'Open programs, Start/Apple menu, and system icons', 'Only the recycle bin', 'Only Wi-Fi'], correctAnswer: 1 },
        { id: 3, question: 'To safely turn off the computer, you should:', options: ['Unplug the power cord', 'Use Shut down or Sign out from the Start/Apple menu', 'Close the laptop lid only', 'Press the power button once and walk away'], correctAnswer: 1 },
        { id: 4, question: 'The Backspace key is commonly used to:', options: ['Move the cursor forward', 'Delete the character to the left of the cursor', 'Open a new window', 'Save the document'], correctAnswer: 1 },
        { id: 5, question: 'Which part of the computer displays the desktop and open windows?', options: ['Keyboard', 'Monitor', 'Mouse', 'Tower'], correctAnswer: 1 },
        // Session 2: Wi-Fi, settings, troubleshooting
        { id: 6, question: 'To connect to Wi-Fi, you typically need:', options: ['Only the computer brand', 'Network name (SSID) and password', 'A USB cable', 'Only the monitor'], correctAnswer: 1 },
        { id: 7, question: 'Where do you usually find display, sound, and language settings on a Windows PC?', options: ['In the Downloads folder', 'In Settings', 'In the Recycle Bin', 'In the browser'], correctAnswer: 1 },
        { id: 8, question: 'When might restarting the computer help?', options: ['When the screen is off', 'When programs are frozen or the system is slow', 'When you want to save a file', 'When you need to type faster'], correctAnswer: 1 },
        { id: 9, question: 'Checking for updates on your computer helps:', options: ['Only change the wallpaper', 'Improve security and fix bugs', 'Delete your files', 'Slow down the computer'], correctAnswer: 1 },
        { id: 10, question: 'The default browser is the one that:', options: ['Uses the most memory', 'Opens when you click a web link', 'Cannot be changed', 'Only runs on Mac'], correctAnswer: 1 },
        // Session 3: Files and folders
        { id: 11, question: 'A folder is used to:', options: ['Run programs', 'Organize files and other folders', 'Connect to the internet', 'Change the screen brightness'], correctAnswer: 1 },
        { id: 12, question: 'Where are new documents often saved by default?', options: ['Only on USB', 'Documents or Desktop', 'In the browser', 'In email'], correctAnswer: 1 },
        { id: 13, question: 'To find a file by name on Windows you can use:', options: ['Only File Explorer menu', 'Search in the taskbar or File Explorer', 'The Recycle Bin', 'The right-click menu only'], correctAnswer: 1 },
        { id: 14, question: 'Saving a file with a clear name helps you:', options: ['Use less storage', 'Find it later and know what it contains', 'Open the browser', 'Change settings'], correctAnswer: 1 },
        { id: 15, question: 'On a Mac, Spotlight is used to:', options: ['Only open apps', 'Search for files, apps, and more', 'Only adjust volume', 'Only connect Wi-Fi'], correctAnswer: 1 },
        // Session 4: Downloads, USB, cloud
        { id: 16, question: 'Files downloaded from the internet often go to:', options: ['Desktop only', 'The Downloads folder', 'Email', 'USB drive only'], correctAnswer: 1 },
        { id: 17, question: 'Before unplugging a USB drive, you should:', options: ['Turn off the computer', 'Safely eject it to avoid data loss', 'Delete all files first', 'Format the drive'], correctAnswer: 1 },
        { id: 18, question: 'Cloud storage (e.g., OneDrive, Google Drive) means:', options: ['Files are only on one device', 'Files can sync and be accessed from multiple devices', 'Files are deleted after a day', 'You cannot rename files'], correctAnswer: 1 },
        { id: 19, question: 'Renaming files with clear names (e.g., date or purpose) helps with:', options: ['Making files larger', 'Organization and finding them later', 'Deleting them faster', 'Sending email'], correctAnswer: 1 },
        { id: 20, question: 'Organizing documents into folders with sensible names is part of:', options: ['Installing software', 'File management', 'Connecting to Wi-Fi', 'Changing the browser'], correctAnswer: 1 },
        // Session 5: Microsoft Word basics
        { id: 21, question: 'In Microsoft Word, to make text bold you typically:', options: ['Change the font size only', 'Select the text and use the Bold button or Ctrl/Cmd+B', 'Only use the right-click menu', 'Save the document'], correctAnswer: 1 },
        { id: 22, question: 'Bullet points in Word are used to:', options: ['Insert images', 'Create a list of items', 'Change page margins', 'Print the document'], correctAnswer: 1 },
        { id: 23, question: 'To save a new document in Word, you should:', options: ['Only close the window', 'Use Save or Save As and choose a location and name', 'Only type the title', 'Only change the font'], correctAnswer: 1 },
        { id: 24, question: 'Line spacing in Word controls:', options: ['Only the font color', 'The space between lines of text', 'The number of pages', 'The file size'], correctAnswer: 1 },
        { id: 25, question: 'To create a new document in Word, you can:', options: ['Only open an existing file', 'Use File > New or a blank document template', 'Only use the taskbar', 'Only use the keyboard'], correctAnswer: 1 },
        // Session 6: Resume and cover letter in Word
        { id: 26, question: 'A resume typically includes:', options: ['Only your name', 'Contact info, summary, experience, education, and skills', 'Only the cover letter', 'Only the job title'], correctAnswer: 1 },
        { id: 27, question: 'A short cover letter usually has:', options: ['Only one word', 'A greeting, why you want the job, and a thank you', 'Only your address', 'Only the company name'], correctAnswer: 1 },
        { id: 28, question: 'Professional file names for resume and cover letter might be:', options: ['Document1.docx', 'FirstName_LastName_Resume.docx', 'Untitled.docx', 'New File.docx'], correctAnswer: 1 },
        { id: 29, question: 'Formatting section headings consistently on a resume helps:', options: ['Reduce file size', 'Make it look professional and easy to read', 'Send email faster', 'Use fewer words'], correctAnswer: 1 },
        { id: 30, question: 'The cover letter should be saved:', options: ['Only in email', 'In the same folder as the resume with a clear name', 'Only on USB', 'Only in Downloads'], correctAnswer: 1 },
        // Session 7: Excel - lists and budget
        { id: 31, question: 'In Excel, a cell is:', options: ['The entire sheet', 'The intersection of a row and column', 'Only the first row', 'Only the formula bar'], correctAnswer: 1 },
        { id: 32, question: 'The SUM function in Excel is used to:', options: ['Count words', 'Add numbers in a range', 'Change font', 'Insert a row'], correctAnswer: 1 },
        { id: 33, question: 'A simple monthly budget in Excel might include:', options: ['Only income', 'Income and expense categories with totals', 'Only formulas', 'Only headers'], correctAnswer: 1 },
        { id: 34, question: 'To format numbers as currency in Excel, you can:', options: ['Only type a dollar sign', 'Use number format options (e.g., Currency)', 'Only use SUM', 'Only change the column width'], correctAnswer: 1 },
        { id: 35, question: 'Headers in the first row of a list help you:', options: ['Delete data', 'Identify what each column contains', 'Merge cells only', 'Print blank sheets'], correctAnswer: 1 },
        // Session 8: Job tracker in Excel
        { id: 36, question: 'A job application tracker in Excel might have columns for:', options: ['Only company name', 'Company, Job Title, Date Applied, Status, Notes', 'Only salary', 'Only resume file'], correctAnswer: 1 },
        { id: 37, question: 'Updating the tracker when you apply to a job helps you:', options: ['Delete old applications', 'Keep track of where you applied and follow up', 'Only use Word', 'Only use email'], correctAnswer: 1 },
        { id: 38, question: 'Sorting the tracker by date can help you:', options: ['Remove duplicates only', 'See the most recent applications first', 'Change the format only', 'Add more columns only'], correctAnswer: 1 },
        { id: 39, question: 'Saving the job tracker in a dedicated folder (e.g., "Job Search") helps:', options: ['Send email', 'Keep job search materials organized', 'Install software', 'Change browser settings'], correctAnswer: 1 },
        { id: 40, question: 'Adding a new row to the tracker is useful when:', options: ['Deleting old data', 'You submit another application', 'Only updating the resume', 'Only changing the status'], correctAnswer: 1 },
        // Session 9: PowerPoint
        { id: 41, question: 'In PowerPoint, a title slide typically:', options: ['Has no text', 'Shows the presentation title and often the presenter name', 'Only has images', 'Only has bullet points'], correctAnswer: 1 },
        { id: 42, question: 'For clear slides, you should avoid:', options: ['Using bullet points', 'Long paragraphs and overcrowding', 'Using a theme', 'Adding images'], correctAnswer: 1 },
        { id: 43, question: 'Presenter View or full-screen view is used to:', options: ['Edit the slide content', 'Run the slideshow as the audience sees it', 'Only save the file', 'Only add images'], correctAnswer: 1 },
        { id: 44, question: 'You can insert an image on a slide from:', options: ['Only the keyboard', 'Your computer or stock images', 'Only the title', 'Only the notes'], correctAnswer: 1 },
        { id: 45, question: 'Choosing a theme or template in PowerPoint affects:', options: ['Only the number of slides', 'The overall look (colors, fonts) of the presentation', 'Only the file size', 'Only the title'], correctAnswer: 1 },
        // Session 10: Email and job search
        { id: 46, question: 'When composing an email, the subject line should:', options: ['Be left blank', 'Briefly describe what the email is about', 'Only contain the date', 'Only contain your name'], correctAnswer: 1 },
        { id: 47, question: 'To search for jobs online, you can use:', options: ['Only company websites', 'Indeed, LinkedIn, and company career pages', 'Only email', 'Only Word'], correctAnswer: 1 },
        { id: 48, question: 'Bookmarks in the browser can help you:', options: ['Delete history', 'Quickly open job sites like Indeed and LinkedIn', 'Only change the home page', 'Only clear cookies'], correctAnswer: 1 },
        { id: 49, question: 'A secure website often shows:', options: ['Only "www"', 'https and a lock icon', 'Only the company name', 'Only the search bar'], correctAnswer: 1 },
        { id: 50, question: 'Safe browsing when job searching includes:', options: ['Clicking every link in job ads', 'Being cautious of suspicious links and fake job offers', 'Sharing your password', 'Ignoring the URL'], correctAnswer: 1 },
        // Session 11: Online job application
        { id: 51, question: 'When completing an online job application, you often need to:', options: ['Only type your name', 'Enter personal info, work history, education, and upload resume if required', 'Only send email', 'Only use Excel'], correctAnswer: 1 },
        { id: 52, question: 'After submitting an application, you should:', options: ['Forget about it', 'Update your job tracker with date, status, and notes', 'Only call the company', 'Only send another resume'], correctAnswer: 1 },
        { id: 53, question: 'A follow-up email after applying is typically sent:', options: ['The same day only', 'About 1–2 weeks after applying, if appropriate', 'Only before applying', 'Only to every company'], correctAnswer: 1 },
        { id: 54, question: 'Saving a confirmation or application number when possible helps you:', options: ['Delete the resume', 'Reference the application later', 'Only change the tracker', 'Only use LinkedIn'], correctAnswer: 1 },
        { id: 55, question: 'Before submitting an application, you should:', options: ['Skip the review step', 'Review your answers and attachments', 'Only fill the first field', 'Only upload the resume'], correctAnswer: 1 },
        // Session 12: Install/uninstall and security
        { id: 56, question: 'To install software safely, you should use:', options: ['Any download link', 'Official app stores or official software websites', 'Only pop-up ads', 'Only email attachments'], correctAnswer: 1 },
        { id: 57, question: 'To uninstall an app on Windows, you typically go to:', options: ['Only the Desktop', 'Settings > Apps (or Applications)', 'Only the browser', 'Only the Recycle Bin'], correctAnswer: 1 },
        { id: 58, question: 'You should never share your passwords with:', options: ['Only strangers', 'Anyone, including people claiming to be tech support', 'Only friends', 'Only employers'], correctAnswer: 1 },
        { id: 59, question: 'Two-factor authentication (2FA) for email helps:', options: ['Only speed up login', 'Add an extra layer of security', 'Only change the password', 'Only clear cookies'], correctAnswer: 1 },
        { id: 60, question: 'Common online scams to avoid include:', options: ['Using official websites', 'Fake pop-ups, "tech support" calls, and phishing emails', 'Using strong passwords', 'Updating software'], correctAnswer: 1 }
    ]
};

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

export const exam4Data = {
    examId: 4,
    examName: 'Exam-4',
    title: 'Playwright Advanced - 1',
    questions: [
        {
            id: 31,
            summary: 'Best test title: descriptive "should..." (e.g. should allow user to login with valid credentials).',
            question: 'Which naming convention is BEST for Playwright test titles?',
            options: [
                '"Test 1"',
                '"Verify"',
                '"should allow user to login with valid credentials"',
                '"Login test case final"'
            ],
            correctAnswer: 2
        },
        {
            id: 32,
            summary: 'Use stable attributes like data-testid / data-test for selectors; avoid fragile XPath or indices.',
            question: 'Best practice for naming selectors used in automation is:',
            options: [
                'Use random XPath always',
                'Use CSS classes from UI framework',
                'Use stable attributes like `data-testid` / `data-test`',
                'Use element index like `button:nth-child(2)`'
            ],
            correctAnswer: 2
        },
        {
            id: 33,
            summary: 'test.describe() groups related tests into a suite/block.',
            question: 'What is `test.describe()` used for?',
            options: [
                'To generate code automatically',
                'To group related tests into a suite/block',
                'To pause execution',
                'To run only in Chromium'
            ],
            correctAnswer: 1
        },
        {
            id: 34,
            summary: 'test.describe.only() runs only that describe block; all other tests are skipped.',
            question: 'What does `test.describe.only()` do?',
            options: [
                'Runs all tests except the describe block',
                'Skips tests inside the describe block',
                'Runs only the tests inside that describe block (and ignores others)',
                'Runs tests only in headed mode'
            ],
            correctAnswer: 2
        },
        {
            id: 35,
            summary: 'test.only() runs only that single test and skips all others.',
            question: 'What does `test.only()` do?',
            options: [
                'Runs only that single test (and skips all others)',
                'Runs only on CI',
                'Runs only in Firefox',
                'Runs only if test name contains "only"'
            ],
            correctAnswer: 0
        },
        {
            id: 36,
            summary: 'test.skip() skips the test so it does not run.',
            question: 'What does `test.skip()` do?',
            options: [
                'Deletes the test from the repo',
                'Skips the test (won\'t run)',
                'Runs the test faster',
                'Retries the test automatically'
            ],
            correctAnswer: 1
        },
        {
            id: 37,
            summary: 'Use test.only() only temporarily for local debugging; remove before pushing.',
            question: 'When should you use `test.only()` in a real project?',
            options: [
                'Always commit it to main branch',
                'Use temporarily for local debugging; remove before pushing',
                'Use to speed up CI permanently',
                'Use to make tests more stable'
            ],
            correctAnswer: 1
        },
        {
            id: 38,
            summary: 'page.pause() pauses the test and opens Playwright Inspector for debugging.',
            question: 'What does `page.pause()` do?',
            options: [
                'Stops all tests forever',
                'Pauses the test and opens Playwright Inspector to debug',
                'Captures trace automatically',
                'Closes the browser'
            ],
            correctAnswer: 1
        },
        {
            id: 39,
            summary: 'Interactive UI mode: npx playwright test --ui',
            question: 'Which command opens Playwright\'s interactive UI mode?',
            options: [
                '`npx playwright test --open`',
                '`npx playwright test --ui`',
                '`npx playwright test ui`',
                '`npx playwright --ui test`'
            ],
            correctAnswer: 1
        },
        {
            id: 40,
            summary: 'Step-by-step debugging: npx playwright test --debug',
            question: 'Which command is used for debugging step-by-step with inspector tools?',
            options: [
                '`npx playwright test --debug`',
                '`npx playwright test --fast`',
                '`npx playwright test --parallel`',
                '`npx playwright test --trace=off`'
            ],
            correctAnswer: 0
        },
        {
            id: 41,
            summary: 'Record actions to generate tests: npx playwright codegen',
            question: 'Which command generates tests by recording your actions?',
            options: [
                '`npx playwright test --ui`',
                '`npx playwright test codegen`',
                '`npx playwright codegen`',
                '`npx playwright test --record`'
            ],
            correctAnswer: 2
        },
        {
            id: 42,
            summary: 'Run only Chromium: npx playwright test --project=chromium',
            question: 'How do you run only the Chromium project (from config projects)?',
            options: [
                '`npx playwright test --project=chromium`',
                '`npx playwright test --browser=chromium`',
                '`npx playwright test --only=chromium`',
                '`npx playwright test --chromium`'
            ],
            correctAnswer: 0
        },
        {
            id: 43,
            summary: 'Run one spec: npx playwright test example.spec.ts',
            question: 'How do you run a single spec file `example.spec.ts`?',
            options: [
                '`npx playwright test --spec example.spec.ts`',
                '`npx playwright test example.spec.ts`',
                '`npx playwright run example.spec.ts`',
                '`npx playwright example.spec.ts test`'
            ],
            correctAnswer: 1
        },
        {
            id: 44,
            summary: 'Headed (visible browser): npx playwright test --headed',
            question: 'Which command runs tests in headed (non-headless) mode?',
            options: [
                '`npx playwright test --headed`',
                '`npx playwright test --head`',
                '`npx playwright test --show`',
                '`npx playwright test --no-headless=false`'
            ],
            correctAnswer: 0
        },
        {
            id: 45,
            summary: 'Run tests matching a name: npx playwright test --grep "login"',
            question: 'Which command runs tests matching a name pattern (grep)?',
            options: [
                '`npx playwright test --find "login"`',
                '`npx playwright test --match "login"`',
                '`npx playwright test --grep "login"`',
                '`npx playwright test --search "login"`'
            ],
            correctAnswer: 2
        },
        {
            id: 46,
            summary: 'List tests without running: npx playwright test --list',
            question: 'Which command lists all discovered tests without running them?',
            options: [
                '`npx playwright test --dry`',
                '`npx playwright test --list`',
                '`npx playwright test --show-tests`',
                '`npx playwright test --report-only`'
            ],
            correctAnswer: 1
        },
        {
            id: 47,
            summary: 'Input with label "Email": page.getByLabel(\'Email\')',
            question: 'Best locator for an input with visible label "Email" is:',
            options: [
                '`page.locator(\'#email\')` always',
                '`page.getByLabel(\'Email\')`',
                '`page.getByText(\'Email\')`',
                '`page.getByRole(\'div\', { name: \'Email\' })`'
            ],
            correctAnswer: 1
        },
        {
            id: 48,
            summary: 'Button "Sign in": page.getByRole(\'button\', { name: \'Sign in\' })',
            question: 'Best locator for a button with accessible name "Sign in" is:',
            options: [
                '`page.getByRole(\'button\', { name: \'Sign in\' })`',
                '`page.getByText(\'Sign in\')` always',
                '`page.locator(\'button:nth-child(1)\')`',
                '`page.locator(\'.btn-primary\')`'
            ],
            correctAnswer: 0
        },
        {
            id: 49,
            summary: 'getByTestId(\'save\') uses data-testid (or configured test id attribute).',
            question: 'What is `page.getByTestId(\'save\')` mainly based on?',
            options: [
                'CSS class `.save`',
                'Attribute like `data-testid="save"` (or configured test id attribute)',
                'Text content "save"',
                'Element id `id="save"`'
            ],
            correctAnswer: 1
        },
        {
            id: 50,
            summary: '3rd matching element: locator.nth(2) (zero-based index).',
            question: 'How do you select the 3rd matching element using locators?',
            options: [
                '`locator.third()`',
                '`locator.index(3)`',
                '`locator.nth(2)`',
                '`locator.nth(3)`'
            ],
            correctAnswer: 2
        }
    ]
};

export const exam5Data = {
    examId: 5,
    examName: 'Exam-5',
    title: 'Playwright Advanced - 2',
    questions: [
        {
            id: 51,
            question: 'Playwright "strict mode" means:',
            options: [
                'Playwright allows multiple matches always',
                'Actions require the locator to match exactly one element, otherwise it fails',
                'Playwright blocks network calls',
                'Playwright disables retries'
            ],
            correctAnswer: 1
        },
        {
            id: 52,
            question: 'Your locator matches 2 buttons and `click()` fails. Best fix is:',
            options: [
                'Add `waitForTimeout(5000)`',
                'Use a more specific locator (role + name, or filter)',
                'Use `page.$()` instead',
                'Disable strict mode globally'
            ],
            correctAnswer: 1
        },
        {
            id: 53,
            question: 'Best locator for an input with placeholder "Search…" is:',
            options: [
                '`page.getByPlaceholder(\'Search…\')`',
                '`page.getByText(\'Search…\')`',
                '`page.locator(\'.search\')`',
                '`page.locator(\'input:nth-child(1)\')`'
            ],
            correctAnswer: 0
        },
        {
            id: 54,
            question: 'Best locator for an image with alt text "Company logo" is:',
            options: [
                '`page.getByAltText(\'Company logo\')`',
                '`page.locator(\'img\').first()`',
                '`page.getByText(\'Company logo\')`',
                '`page.locator(\'#logo\')` always'
            ],
            correctAnswer: 0
        },
        {
            id: 55,
            question: 'Best locator for a link with accessible name "Forgot password?" is:',
            options: [
                '`page.getByRole(\'link\', { name: \'Forgot password?\' })`',
                '`page.locator(\'a\').first()`',
                '`page.locator(\'.forgot\')`',
                '`page.getByText(\'Forgot password?\')` always'
            ],
            correctAnswer: 0
        },
        {
            id: 56,
            question: 'Which is the best way to locate a row in a table that contains text "John Smith"?',
            options: [
                '`page.locator(\'tr:has-text("John Smith")\')`',
                '`page.locator(\'tr\').nth(0)`',
                '`page.locator(\'table\').click()`',
                '`page.getByRole(\'table\', { name: \'John Smith\' })`'
            ],
            correctAnswer: 0
        },
        {
            id: 57,
            question: 'You want the "Delete" button inside a specific row that has "John Smith". Best approach:',
            options: [
                'Click the first "Delete" on the page',
                'Find the row first, then locate the button within it',
                'Use XPath only',
                'Use `waitForTimeout()` then click'
            ],
            correctAnswer: 1
        },
        {
            id: 58,
            question: 'Which example correctly uses locator chaining?',
            options: [
                '`page.getByRole(\'form\').getByRole(\'button\', { name: \'Save\' })`',
                '`page.locator(\'form\').getByRole(\'button\', { name: \'Save\' })`',
                '`page.click(\'form\').getByRole(\'button\')`',
                '`page.getByText(\'form\').locator(\'Save\')`'
            ],
            correctAnswer: 1
        },
        {
            id: 59,
            question: 'How do you pick an element by visible text "Settings" (simple case)?',
            options: [
                '`page.getByText(\'Settings\')`',
                '`page.getByRole(\'text\', { name: \'Settings\' })`',
                '`page.locator(\'Settings\')`',
                '`page.getByLabel(\'Settings\')`'
            ],
            correctAnswer: 0
        },
        {
            id: 60,
            question: 'Best locator for a checkbox labeled "I agree" is:',
            options: [
                '`page.getByRole(\'checkbox\', { name: \'I agree\' })`',
                '`page.getByText(\'I agree\')`',
                '`page.locator(\'input[type=checkbox]\').first()`',
                '`page.locator(\'.checkbox\')`'
            ],
            correctAnswer: 0
        },
        {
            id: 61,
            question: 'What does `locator.first()` do?',
            options: [
                'Selects the best locator automatically',
                'Picks the first match from multiple elements',
                'Waits for the element to become visible',
                'Clicks the element'
            ],
            correctAnswer: 1
        },
        {
            id: 62,
            question: 'What does `locator.nth(2)` select?',
            options: [
                '2nd element (1-based)',
                '3rd element (0-based index)',
                '2nd element (0-based index)',
                'All elements'
            ],
            correctAnswer: 1
        },
        {
            id: 63,
            question: 'Which is the correct way to filter a locator by text using Playwright locator filters?',
            options: [
                '`page.locator(\'button\', { hasText: \'Save\' })`',
                '`page.locator(\'button\').filter({ hasText: \'Save\' })`',
                '`page.getByRole(\'button\').hasText(\'Save\')`',
                '`page.filter(\'button\', \'Save\')`'
            ],
            correctAnswer: 1
        },
        {
            id: 64,
            question: 'You need a `div` that contains a specific child element (like an icon). Best Playwright approach:',
            options: [
                '`filter({ has: locator })`',
                '`waitForTimeout()`',
                '`page.$eval()`',
                '`page.route()`'
            ],
            correctAnswer: 0
        },
        {
            id: 65,
            question: 'Which one is most stable across UI redesigns?',
            options: [
                '`page.locator(\'.MuiButton-root\')`',
                '`page.locator(\'button:nth-child(2)\')`',
                '`page.getByRole(\'button\', { name: \'Save\' })`',
                '`page.locator(\'//button[2]\')`'
            ],
            correctAnswer: 2
        },
        {
            id: 66,
            question: 'Which command runs only tests whose titles match "login" (pattern)?',
            options: [
                '`npx playwright test --grep login`',
                '`npx playwright test --find login`',
                '`npx playwright test --match login`',
                '`npx playwright test --name login`'
            ],
            correctAnswer: 0
        },
        {
            id: 67,
            question: 'Which command runs tests with a single worker (good for debugging flakiness)?',
            options: [
                '`npx playwright test --workers=1`',
                '`npx playwright test --threads=1`',
                '`npx playwright test --single-worker`',
                '`npx playwright test --parallel=false`'
            ],
            correctAnswer: 0
        },
        {
            id: 68,
            question: 'Which command re-runs failed tests only (when supported by Playwright\'s CLI options)?',
            options: [
                '`npx playwright test --repeat-failed`',
                '`npx playwright test --last-failed`',
                '`npx playwright test --failed-only`',
                '`npx playwright test --rerun`'
            ],
            correctAnswer: 1
        },
        {
            id: 69,
            question: 'Which is the correct command to run Playwright code generator (record actions)?',
            options: [
                '`npx playwright test codegen`',
                '`npx playwright codegen`',
                '`npx playwright test --codegen`',
                '`npx playwright --record`'
            ],
            correctAnswer: 1
        },
        {
            id: 70,
            question: 'Best way to debug a specific point inside a test is:',
            options: [
                'Add `cy.pause()`',
                'Add `page.pause()`',
                'Add `console.pause()`',
                'Add `test.pause()`'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam6Data = {
    examId: 6,
    examName: 'Exam-6',
    title: 'Playwright Advanced - 3',
    questions: [
        {
            id: 71,
            question: 'In Playwright Test, which fixture is commonly used for browser page actions?',
            options: [
                '`driver`',
                '`page`',
                '`window`',
                '`browserPage`'
            ],
            correctAnswer: 1
        },
        {
            id: 72,
            question: 'What is the purpose of `test.beforeEach()`?',
            options: [
                'Runs once before all tests in the file',
                'Runs before each test in the file/describe block',
                'Runs after each test',
                'Skips tests automatically'
            ],
            correctAnswer: 1
        },
        {
            id: 73,
            question: 'What is the purpose of `test.afterEach()`?',
            options: [
                'Runs before each test',
                'Runs after each test',
                'Runs once before all tests',
                'Runs only for failed tests'
            ],
            correctAnswer: 1
        },
        {
            id: 74,
            question: 'Which hook runs once before all tests in a file/describe block?',
            options: [
                '`test.beforeAll()`',
                '`test.beforeEach()`',
                '`test.setup()`',
                '`test.init()`'
            ],
            correctAnswer: 0
        },
        {
            id: 75,
            question: '`expect.soft()` is used to:',
            options: [
                'Skip the test',
                'Continue the test even if the assertion fails, and report failures at the end',
                'Retry the test automatically',
                'Make assertions run faster'
            ],
            correctAnswer: 1
        },
        {
            id: 76,
            question: 'Best assertion to verify the page navigated to `/dashboard` is:',
            options: [
                '`expect(page).toBeVisible(\'/dashboard\')`',
                '`expect(page).toHaveURL(\'/dashboard\')`',
                '`expect(page.url()).toBe(\'/dashboard\')` only',
                '`expect(page).toContain(\'/dashboard\')`'
            ],
            correctAnswer: 1
        },
        {
            id: 77,
            question: 'Best assertion to verify a locator has text "Welcome" is:',
            options: [
                '`expect(locator).toHaveText(\'Welcome\')`',
                '`expect(locator).toBe(\'Welcome\')`',
                '`expect(page).toHaveText(\'Welcome\')`',
                '`expect(text).toBeVisible()`'
            ],
            correctAnswer: 0
        },
        {
            id: 78,
            question: 'Best assertion to verify a list has exactly 5 items is:',
            options: [
                '`expect(list).toHaveSize(5)`',
                '`expect(locator).toHaveCount(5)`',
                '`expect(locator).toBeFive()`',
                '`expect(locator).toHaveLength(5)`'
            ],
            correctAnswer: 1
        },
        {
            id: 79,
            question: 'The best way to reuse login across tests is:',
            options: [
                'Perform UI login in every test',
                'Use `storageState` to save/load authenticated state',
                'Disable authentication in test env',
                'Use only screenshots'
            ],
            correctAnswer: 1
        },
        {
            id: 80,
            question: '`storageState` mainly stores:',
            options: [
                'Only HTML source',
                'Cookies and localStorage/sessionStorage state needed for auth',
                'Only test results',
                'Only video recordings'
            ],
            correctAnswer: 1
        },
        {
            id: 81,
            question: 'Which Playwright API is used to intercept requests and mock responses?',
            options: [
                '`page.intercept()`',
                '`page.route()`',
                '`page.mock()`',
                '`page.network()`'
            ],
            correctAnswer: 1
        },
        {
            id: 82,
            question: 'Which fixture helps you send API requests without UI (API testing)?',
            options: [
                '`http`',
                '`request`',
                '`apiDriver`',
                '`net`'
            ],
            correctAnswer: 1
        },
        {
            id: 83,
            question: 'Best practice when UI depends on API data is:',
            options: [
                'Add `waitForTimeout()`',
                'Mock/stub API responses for deterministic tests where appropriate',
                'Remove assertions',
                'Use XPath everywhere'
            ],
            correctAnswer: 1
        },
        {
            id: 84,
            question: 'What is a Playwright "trace" helpful for?',
            options: [
                'Making tests run faster',
                'Debugging: includes snapshots, actions, network, console info (when enabled)',
                'Deleting cookies',
                'Running tests in parallel'
            ],
            correctAnswer: 1
        },
        {
            id: 85,
            question: 'A good trace setting to keep traces only on failures is:',
            options: [
                '`trace: \'off\'`',
                '`trace: \'on\'`',
                '`trace: \'retain-on-failure\'`',
                '`trace: \'always-off\'`'
            ],
            correctAnswer: 2
        },
        {
            id: 86,
            question: 'Which reporter commonly generates an HTML report?',
            options: [
                '`dot`',
                '`html`',
                '`csv`',
                '`gui`'
            ],
            correctAnswer: 1
        },
        {
            id: 87,
            question: 'Command to open the last HTML report is typically:',
            options: [
                '`npx playwright report`',
                '`npx playwright show-report`',
                '`npx playwright open-report`',
                '`npx playwright test --report`'
            ],
            correctAnswer: 1
        },
        {
            id: 88,
            question: 'Retries in Playwright are mainly used to:',
            options: [
                'Hide real bugs forever',
                'Reduce flakiness in unstable environments while you fix root cause',
                'Replace assertions',
                'Make tests slower for accuracy'
            ],
            correctAnswer: 1
        },
        {
            id: 89,
            question: 'Best option to run tests in parallel faster (commonly configured via workers) is:',
            options: [
                '`--headed`',
                '`--workers`',
                '`--ui`',
                '`--debug`'
            ],
            correctAnswer: 1
        },
        {
            id: 90,
            question: 'If you want to run only one file and one project (Chromium) together, which is correct?',
            options: [
                '`npx playwright test example.spec.ts --project=chromium`',
                '`npx playwright test --project chromium example.spec.ts`',
                '`npx playwright test --chromium example.spec.ts`',
                '`npx playwright example.spec.ts --project=chromium test`'
            ],
            correctAnswer: 0
        }
    ]
};

export const exam7Data = {
    examId: 7,
    examName: 'Exam-7',
    title: 'Playwright Advanced - 4',
    questions: [
        {
            id: 91,
            question: 'The default Playwright Test configuration file is usually named:',
            options: [
                '`playwright.json`',
                '`playwright.config.ts` or `playwright.config.js`',
                '`playwright.settings.js`',
                '`config.playwright.yml`'
            ],
            correctAnswer: 1
        },
        {
            id: 92,
            question: 'Where do you set the base URL so you can use `page.goto(\'/\')`?',
            options: [
                '`projects`',
                '`use: { baseURL: \'...\' }`',
                '`reporter`',
                '`grep`'
            ],
            correctAnswer: 1
        },
        {
            id: 93,
            question: 'Which config option controls default timeouts for expect assertions?',
            options: [
                '`timeout`',
                '`expect: { timeout: ... }`',
                '`actionTimeout`',
                '`navigationTimeout`'
            ],
            correctAnswer: 1
        },
        {
            id: 94,
            question: 'Which config option sets the maximum time a single test can run?',
            options: [
                '`testTimeout`',
                '`timeout`',
                '`runTimeout`',
                '`maxTimeout`'
            ],
            correctAnswer: 1
        },
        {
            id: 95,
            question: 'Where do you configure screenshots to be captured only on failures?',
            options: [
                '`use: { screenshot: \'only-on-failure\' }`',
                '`expect: { screenshot: true }`',
                '`projects: { screenshot: \'failure\' }`',
                '`reporter: { screenshot: \'on\' }`'
            ],
            correctAnswer: 0
        },
        {
            id: 96,
            question: 'Where do you configure trace collection only when a test fails?',
            options: [
                '`trace: \'on\'`',
                '`use: { trace: \'retain-on-failure\' }`',
                '`expect: { trace: \'on\' }`',
                '`reporter: \'trace\'`'
            ],
            correctAnswer: 1
        },
        {
            id: 97,
            question: 'Which config section is used to define browser projects like Chromium/Firefox/WebKit?',
            options: [
                '`browsers`',
                '`projects`',
                '`devices`',
                '`targets`'
            ],
            correctAnswer: 1
        },
        {
            id: 98,
            question: 'Which option is commonly used to run tests in parallel by controlling workers?',
            options: [
                '`parallel`',
                '`workers`',
                '`threads`',
                '`shards`'
            ],
            correctAnswer: 1
        },
        {
            id: 99,
            question: 'In CI, many teams set `retries` to > 0. Where is it configured?',
            options: [
                '`use: { retries: 2 }`',
                'Top-level `retries: 2`',
                '`expect: { retries: 2 }`',
                '`projects: { retries: 2 }` only'
            ],
            correctAnswer: 1
        },
        {
            id: 100,
            question: 'If you want to stop accidental commits of `test.only`, which config option helps?',
            options: [
                '`forbidOnly: true`',
                '`strictOnly: true`',
                '`banOnly: true`',
                '`disableOnly: true`'
            ],
            correctAnswer: 0
        },
        {
            id: 101,
            question: 'A test is flaky because it uses `page.locator(\'.btn\')` and the class changes often. Best fix:',
            options: [
                'Add `waitForTimeout(5000)`',
                'Use `getByRole()` or `getByTestId()` with stable selectors',
                'Use `nth(0)` everywhere',
                'Disable retries'
            ],
            correctAnswer: 1
        },
        {
            id: 102,
            question: 'Strict mode failure happens because `page.getByText(\'Save\')` matches two elements. Best fix:',
            options: [
                'Use `force: true` click',
                'Use `getByRole(\'button\', { name: \'Save\' })` or filter to target correct element',
                'Turn off strict mode globally',
                'Add `page.pause()` in CI'
            ],
            correctAnswer: 1
        },
        {
            id: 103,
            question: 'Your test clicks "Submit" but sometimes a spinner overlay covers it. Best approach:',
            options: [
                'Click with `{ force: true }` always',
                'Wait for overlay to disappear (`should not be visible/exist`) then click',
                'Use `waitForTimeout()` only',
                'Remove the click step'
            ],
            correctAnswer: 1
        },
        {
            id: 104,
            question: 'You must avoid UI login in every test. Best practice in Playwright:',
            options: [
                'Copy cookies manually into every test',
                'Use `storageState` and reuse auth state across tests',
                'Use only `--headed` mode',
                'Hardcode tokens inside tests'
            ],
            correctAnswer: 1
        },
        {
            id: 105,
            question: 'A test passes locally but fails in CI because timing is slower. Best improvement:',
            options: [
                'Increase `waitForTimeout()` everywhere',
                'Use Playwright auto-waiting with proper locators + assert key UI state + wait for network when needed',
                'Remove assertions',
                'Run only Chromium'
            ],
            correctAnswer: 1
        },
        {
            id: 106,
            question: 'You need deterministic tests for an unstable API response. Best solution:',
            options: [
                'Disable the API server',
                'Mock the API response with `page.route()`',
                'Add random retries',
                'Use XPath instead'
            ],
            correctAnswer: 1
        },
        {
            id: 107,
            question: 'A test fails with "Target closed" after navigation because the page reloads unexpectedly. Best practice:',
            options: [
                'Store element handles and reuse them after navigation',
                'Re-locate elements after navigation using locators, and assert URL/page-ready state',
                'Use `page.$()` to avoid retry',
                'Only use `waitForTimeout()`'
            ],
            correctAnswer: 1
        },
        {
            id: 108,
            question: 'Your locator works, but action fails because element is not visible yet (animation). Best practice:',
            options: [
                '`expect(locator).toBeVisible()` then click',
                '`waitForTimeout(3000)` then click',
                'Click immediately',
                'Use `{ force: true }` always'
            ],
            correctAnswer: 0
        },
        {
            id: 109,
            question: 'Your network mocking must apply before the page loads. What should you do?',
            options: [
                'Call `page.route()` after the request finishes',
                'Set up `page.route()` **before** `page.goto()` or before the action triggers the request',
                'Only use `page.pause()`',
                'Use screenshots instead'
            ],
            correctAnswer: 1
        },
        {
            id: 110,
            question: 'A "flaky locator" is often caused by:',
            options: [
                'Too many test files',
                'Unstable selectors (dynamic IDs/classes), timing, and DOM re-renders',
                'Using TypeScript',
                'Running in headed mode'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam8Data = {
    examId: 8,
    examName: 'Exam-8',
    title: 'Playwright TypeScript & package.json',
    questions: [
        {
            id: 111,
            question: 'In a Node.js project, `package.json` is mainly used to:',
            options: [
                'Store HTML templates',
                'Define project metadata, scripts, and dependencies',
                'Replace TypeScript compiler',
                'Run browsers without Node'
            ],
            correctAnswer: 1
        },
        {
            id: 112,
            question: 'Which section in `package.json` lists runtime dependencies?',
            options: [
                '`scripts`',
                '`dependencies`',
                '`devDependencies`',
                '`engines`'
            ],
            correctAnswer: 1
        },
        {
            id: 113,
            question: 'Playwright Test is usually installed under:',
            options: [
                '`dependencies`',
                '`devDependencies`',
                '`optionalDependencies` only',
                '`peerDependencies` only'
            ],
            correctAnswer: 1
        },
        {
            id: 114,
            question: 'Which package is most commonly used to run Playwright tests?',
            options: [
                '`@playwright/test`',
                '`playwright-core` only',
                '`jest-playwright`',
                '`selenium-webdriver`'
            ],
            correctAnswer: 0
        },
        {
            id: 115,
            question: 'To use TypeScript in a Playwright project, which package is commonly included?',
            options: [
                '`typescript`',
                '`babel-core`',
                '`ts-node` (only)',
                '`eslint` (only)'
            ],
            correctAnswer: 0
        },
        {
            id: 116,
            question: 'Where do you define commands like `test`, `lint`, `format` in `package.json`?',
            options: [
                '`name`',
                '`scripts`',
                '`version`',
                '`repository`'
            ],
            correctAnswer: 1
        },
        {
            id: 117,
            question: 'Which script is the most standard to run Playwright tests?',
            options: [
                '"test": "npx playwright test"',
                '"test": "node playwright test"',
                '"test": "playwright run"',
                '"test": "npm playwright test"'
            ],
            correctAnswer: 0
        },
        {
            id: 118,
            question: 'Which script runs Playwright tests in UI mode?',
            options: [
                '"test:ui": "npx playwright test --ui"',
                '"test:ui": "npx playwright --ui test"',
                '"test:ui": "npx test playwright ui"',
                '"test:ui": "node --ui playwright"'
            ],
            correctAnswer: 0
        },
        {
            id: 119,
            question: 'Which script runs tests in headed mode?',
            options: [
                '"test:headed": "npx playwright test --headed"',
                '"test:headed": "npx playwright test --head"',
                '"test:headed": "npx playwright --headed"',
                '"test:headed": "npx test --headed playwright"'
            ],
            correctAnswer: 0
        },
        {
            id: 120,
            question: 'Which script runs tests only in Chromium project?',
            options: [
                '"test:chrome": "npx playwright test --project=chromium"',
                '"test:chrome": "npx playwright test --browser=chromium"',
                '"test:chrome": "npx playwright chromium test"',
                '"test:chrome": "npx playwright test --only=chromium"'
            ],
            correctAnswer: 0
        },
        {
            id: 121,
            question: 'Which script runs a single spec file named `login.spec.ts`?',
            options: [
                '"test:login": "npx playwright test --spec login.spec.ts"',
                '"test:login": "npx playwright test login.spec.ts"',
                '"test:login": "npx playwright run login.spec.ts"',
                '"test:login": "node login.spec.ts"'
            ],
            correctAnswer: 1
        },
        {
            id: 122,
            question: 'Which script runs only tests that match "login" in the title?',
            options: [
                '"test:grep": "npx playwright test --grep login"',
                '"test:grep": "npx playwright test --search login"',
                '"test:grep": "npx playwright test --find login"',
                '"test:grep": "npx playwright test --match login"'
            ],
            correctAnswer: 0
        },
        {
            id: 123,
            question: 'What does `npx playwright install` generally do?',
            options: [
                'Installs Node.js',
                'Downloads the required browser binaries for Playwright',
                'Compiles TypeScript',
                'Generates test cases'
            ],
            correctAnswer: 1
        },
        {
            id: 124,
            question: 'Which script is best to generate test code by recording actions?',
            options: [
                '"codegen": "npx playwright test codegen"',
                '"codegen": "npx playwright codegen"',
                '"codegen": "npx playwright --record"',
                '"codegen": "npx playwright generate"'
            ],
            correctAnswer: 1
        },
        {
            id: 125,
            question: 'Why do teams often add an `engines` field in `package.json`?',
            options: [
                'To store passwords',
                'To specify supported Node/npm versions for consistency in CI',
                'To speed up browser downloads',
                'To run tests in parallel'
            ],
            correctAnswer: 1
        },
        {
            id: 126,
            question: 'If you want to prevent `npm test` from running unit tests and e2e tests together, what is a good approach?',
            options: [
                'Put everything into one script only',
                'Create separate scripts like `test:unit` and `test:e2e`',
                'Delete `scripts` section',
                'Use only `dependencies`'
            ],
            correctAnswer: 1
        },
        {
            id: 127,
            question: 'Which script commonly opens the Playwright HTML report?',
            options: [
                '"report": "npx playwright report"',
                '"report": "npx playwright show-report"',
                '"report": "npx playwright test --report"',
                '"report": "npx report playwright"'
            ],
            correctAnswer: 1
        },
        {
            id: 128,
            question: 'In a Playwright TS repo, which `package.json` field can mark the project as ESM?',
            options: [
                '"type": "module"',
                '"module": "true"',
                '"esm": true',
                '"format": "esm"'
            ],
            correctAnswer: 0
        },
        {
            id: 129,
            question: 'Why is it useful to pin versions (or use a lock file) for Playwright?',
            options: [
                'To make tests random',
                'To keep consistent dependency versions across machines and CI',
                'To remove TypeScript',
                'To avoid writing config files'
            ],
            correctAnswer: 1
        },
        {
            id: 130,
            question: 'A good CI-friendly `package.json` practice for Playwright is:',
            options: [
                'Always use `latest` versions',
                'Add scripts like `test`, `test:ui`, `test:headed`, and keep dependencies pinned + lock file committed',
                'Put Playwright in `dependencies` only',
                'Avoid scripts and run commands manually'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam9Data = {
    examId: 9,
    examName: 'Exam-9',
    title: 'Playwright TypeScript Fundamentals',
    questions: [
        {
            id: 131,
            question: 'Why do many teams use TypeScript for Playwright tests?',
            options: [
                'It makes browsers faster',
                'It provides type safety + better autocompletion and maintainability',
                'It removes the need for assertions',
                'It prevents flaky tests automatically'
            ],
            correctAnswer: 1
        },
        {
            id: 132,
            question: 'In Playwright tests, why do we commonly use `async`/`await`?',
            options: [
                'To make code shorter',
                'Because Playwright APIs return promises for async actions',
                'To avoid importing anything',
                'Because TypeScript requires it always'
            ],
            correctAnswer: 1
        },
        {
            id: 133,
            question: 'What is the type of `page` in Playwright Test?',
            options: [
                '`Browser`',
                '`Page`',
                '`Context`',
                '`Frame`'
            ],
            correctAnswer: 1
        },
        {
            id: 134,
            question: 'Which import is commonly correct in Playwright Test with TypeScript?',
            options: [
                '`import test from \'@playwright/test\'`',
                '`import { test, expect } from \'@playwright/test\'`',
                '`import { Page } from \'playwright\'` only',
                '`import { expect } from \'typescript\'`'
            ],
            correctAnswer: 1
        },
        {
            id: 135,
            question: 'Which statement about TypeScript types is TRUE?',
            options: [
                'Types exist at runtime in JavaScript execution',
                'Types are checked at compile time and removed at runtime',
                'Types automatically fix bugs in production',
                'Types replace unit tests'
            ],
            correctAnswer: 1
        },
        {
            id: 136,
            question: 'How do you declare a variable that can be either string or number?',
            options: [
                '`let id: string & number`',
                '`let id: string | number`',
                '`let id: string || number`',
                '`let id: union(string, number)`'
            ],
            correctAnswer: 1
        },
        {
            id: 137,
            question: 'What does `interface` help with in TypeScript tests?',
            options: [
                'It runs tests faster',
                'It defines the shape (structure) of an object',
                'It replaces Playwright locators',
                'It disables type checking'
            ],
            correctAnswer: 1
        },
        {
            id: 138,
            question: 'Which is a correct interface example?',
            options: [
                '`interface User { name: string; age: number }`',
                '`interface User = (name: string)`',
                '`interface User => { name: string }`',
                '`interface User { name = string }`'
            ],
            correctAnswer: 0
        },
        {
            id: 139,
            question: 'What is the best return type for an async function that returns nothing?',
            options: [
                '`void`',
                '`Promise<void>`',
                '`null`',
                '`undefined`'
            ],
            correctAnswer: 1
        },
        {
            id: 140,
            question: 'In Playwright, why is this helpful? `const user = process.env.USERNAME;`',
            options: [
                'It stores secrets permanently',
                'It reads environment variables for configuration (like credentials)',
                'It makes code compile faster',
                'It disables browser downloads'
            ],
            correctAnswer: 1
        },
        {
            id: 141,
            question: 'If `process.env.USERNAME` might be undefined, what TypeScript-safe approach is best?',
            options: [
                'Ignore it always',
                'Use a fallback or assert it exists',
                'Convert it to a number',
                'Add `any` everywhere'
            ],
            correctAnswer: 1
        },
        {
            id: 142,
            question: 'What does `type` alias do?',
            options: [
                'Runs tests in parallel',
                'Creates a custom type name (like unions, object shapes)',
                'Installs dependencies',
                'Records videos'
            ],
            correctAnswer: 1
        },
        {
            id: 143,
            question: 'Which is a correct `type` alias example?',
            options: [
                '`type Role = \'admin\' | \'user\' | \'viewer\'`',
                '`type Role => admin | user`',
                '`type Role = admin || user`',
                '`type Role = (admin, user)`'
            ],
            correctAnswer: 0
        },
        {
            id: 144,
            question: 'What does `as const` do (commonly)?',
            options: [
                'Makes the variable editable',
                'Narrows values to literal types and makes them readonly',
                'Converts strings to numbers',
                'Disables lint rules'
            ],
            correctAnswer: 1
        },
        {
            id: 145,
            question: 'Why should you avoid using `any` in Playwright TypeScript projects?',
            options: [
                'It breaks Playwright',
                'It removes type safety and can hide errors',
                'It increases browser speed',
                'It reduces file size too much'
            ],
            correctAnswer: 1
        },
        {
            id: 146,
            question: 'What is the purpose of `export` / `import` in TypeScript automation code?',
            options: [
                'To run tests',
                'To share reusable utilities, page objects, and helpers across files',
                'To hide test results',
                'To avoid writing assertions'
            ],
            correctAnswer: 1
        },
        {
            id: 147,
            question: 'A good type for a helper that returns a Locator should be:',
            options: [
                '`string`',
                '`Locator`',
                '`ElementHandle` always',
                '`any`'
            ],
            correctAnswer: 1
        },
        {
            id: 148,
            question: 'In TypeScript, optional properties are written as:',
            options: [
                '`email: string?`',
                '`email?: string`',
                '`?email: string`',
                '`email?: \'string\'`'
            ],
            correctAnswer: 1
        },
        {
            id: 149,
            question: 'Which is the correct way to type an array of strings?',
            options: [
                '`let tags: string`',
                '`let tags: string[]`',
                '`let tags: array<string>` only',
                '`let tags: [string]`'
            ],
            correctAnswer: 1
        },
        {
            id: 150,
            question: 'Why do Playwright projects often use `tsconfig.json`?',
            options: [
                'To store screenshots',
                'To configure TypeScript compiler options (target, strict, paths, etc.)',
                'To run GitHub Actions',
                'To install browsers'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam10Data = {
    examId: 10,
    examName: 'Exam-10',
    title: 'Git Fundamentals',
    questions: [
        {
            id: 151,
            question: 'What does `git clone` do?',
            options: [
                'Uploads your code to GitHub',
                'Creates a local copy of a remote repository',
                'Deletes a branch',
                'Shows commit history'
            ],
            correctAnswer: 1
        },
        {
            id: 152,
            question: 'What is the purpose of `git status`?',
            options: [
                'Run tests',
                'Show current branch and changes (staged/unstaged/untracked)',
                'Create a new repository',
                'Download dependencies'
            ],
            correctAnswer: 1
        },
        {
            id: 153,
            question: 'Which command stages changes for commit?',
            options: [
                '`git stage .`',
                '`git add .`',
                '`git push .`',
                '`git commit -a "msg"`'
            ],
            correctAnswer: 1
        },
        {
            id: 154,
            question: 'What does `git commit` do?',
            options: [
                'Uploads commits to remote',
                'Saves a snapshot of staged changes to local repository history',
                'Downloads latest changes',
                'Removes merge conflicts automatically'
            ],
            correctAnswer: 1
        },
        {
            id: 155,
            question: 'What does `git push` do?',
            options: [
                'Brings changes from remote to local',
                'Sends local commits to a remote repository',
                'Deletes local commits',
                'Renames files'
            ],
            correctAnswer: 1
        },
        {
            id: 156,
            question: 'What does `git pull` do?',
            options: [
                'Only uploads your changes',
                'Fetches and merges changes from remote into your current branch',
                'Deletes remote branches',
                'Creates a new tag'
            ],
            correctAnswer: 1
        },
        {
            id: 157,
            question: 'Which command creates and switches to a new branch in one step?',
            options: [
                '`git branch new-feature`',
                '`git checkout -b new-feature`',
                '`git switch new-feature`',
                '`git merge new-feature`'
            ],
            correctAnswer: 1
        },
        {
            id: 158,
            question: 'What is a merge conflict?',
            options: [
                'When Git cannot automatically combine changes from different branches',
                'When a commit message is too long',
                'When the remote server is down',
                'When tests fail'
            ],
            correctAnswer: 0
        },
        {
            id: 159,
            question: 'Which command shows commit history (log) for the current branch?',
            options: [
                '`git history`',
                '`git log`',
                '`git commits`',
                '`git show-branch`'
            ],
            correctAnswer: 1
        },
        {
            id: 160,
            question: 'What does `git checkout <branch>` (or `git switch <branch>`) do?',
            options: [
                'Uploads branch to remote',
                'Switches your working directory to that branch',
                'Deletes the branch',
                'Creates a pull request'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam11Data = {
    examId: 11,
    examName: 'Exam-11',
    title: 'Linux/Unix Command Line Fundamentals',
    questions: [
        {
            id: 161,
            question: 'Which command shows your current directory (path)?',
            options: [
                '`whereami`',
                '`pwd`',
                '`path`',
                '`loc`'
            ],
            correctAnswer: 1
        },
        {
            id: 162,
            question: 'Which command lists files and folders in the current directory?',
            options: [
                '`list`',
                '`dironly`',
                '`ls`',
                '`showfiles`'
            ],
            correctAnswer: 2
        },
        {
            id: 163,
            question: 'Which command changes directory to `Documents`?',
            options: [
                '`go Documents`',
                '`cd Documents`',
                '`open Documents`',
                '`move Documents`'
            ],
            correctAnswer: 1
        },
        {
            id: 164,
            question: 'Which command creates a new directory named `tests`?',
            options: [
                '`mk tests`',
                '`mkdir tests`',
                '`newdir tests`',
                '`createdir tests`'
            ],
            correctAnswer: 1
        },
        {
            id: 165,
            question: 'Which command creates an empty file called `notes.txt`?',
            options: [
                '`new notes.txt`',
                '`touch notes.txt`',
                '`makefile notes.txt`',
                '`file notes.txt`'
            ],
            correctAnswer: 1
        },
        {
            id: 166,
            question: 'Which command copies `a.txt` to `b.txt`?',
            options: [
                '`copy a.txt b.txt`',
                '`cp a.txt b.txt`',
                '`dup a.txt b.txt`',
                '`mv a.txt b.txt`'
            ],
            correctAnswer: 1
        },
        {
            id: 167,
            question: 'Which command moves or renames `old.txt` to `new.txt`?',
            options: [
                '`rn old.txt new.txt`',
                '`mv old.txt new.txt`',
                '`cp old.txt new.txt`',
                '`movefile old.txt new.txt`'
            ],
            correctAnswer: 1
        },
        {
            id: 168,
            question: 'Which command deletes a file named `temp.log`?',
            options: [
                '`del temp.log`',
                '`rm temp.log`',
                '`erase temp.log`',
                '`remove temp.log`'
            ],
            correctAnswer: 1
        },
        {
            id: 169,
            question: 'Which command deletes a directory `logs` and all its contents?',
            options: [
                '`rm logs`',
                '`rmdir logs`',
                '`rm -r logs`',
                '`delete -all logs`'
            ],
            correctAnswer: 2
        },
        {
            id: 170,
            question: 'Which command prints the contents of `README.md` to the terminal?',
            options: [
                '`print README.md`',
                '`cat README.md`',
                '`type README.md`',
                '`show README.md`'
            ],
            correctAnswer: 1
        },
        {
            id: 171,
            question: 'Which command shows the last 20 lines of a file `app.log`?',
            options: [
                '`tail -20 app.log`',
                '`head -20 app.log`',
                '`last -20 app.log`',
                '`end app.log 20`'
            ],
            correctAnswer: 0
        },
        {
            id: 172,
            question: 'Which command shows the first 10 lines of a file `app.log`?',
            options: [
                '`tail app.log`',
                '`head app.log`',
                '`start app.log 10`',
                '`first app.log`'
            ],
            correctAnswer: 1
        },
        {
            id: 173,
            question: 'Which command searches for the word "error" inside `app.log`?',
            options: [
                '`find error app.log`',
                '`grep "error" app.log`',
                '`search error app.log`',
                '`look error app.log`'
            ],
            correctAnswer: 1
        },
        {
            id: 174,
            question: 'Which command shows running processes?',
            options: [
                '`process`',
                '`ps`',
                '`toplist`',
                '`runlist`'
            ],
            correctAnswer: 1
        },
        {
            id: 175,
            question: 'Which command shows a live updating process view?',
            options: [
                '`top`',
                '`ps -a`',
                '`liveps`',
                '`watchps`'
            ],
            correctAnswer: 0
        },
        {
            id: 176,
            question: 'Which command shows disk usage in human-readable format?',
            options: [
                '`disk -h`',
                '`df -h`',
                '`space --human`',
                '`du --all`'
            ],
            correctAnswer: 1
        },
        {
            id: 177,
            question: 'Which command shows file/folder sizes in the current directory (human-readable)?',
            options: [
                '`du -sh *`',
                '`df -h *`',
                '`size -h *`',
                '`ls -size`'
            ],
            correctAnswer: 0
        },
        {
            id: 178,
            question: 'Which command changes file permissions to make `run.sh` executable?',
            options: [
                '`chmod +x run.sh`',
                '`chmod 777 run.sh`',
                '`exec run.sh`',
                '`perm +x run.sh`'
            ],
            correctAnswer: 0
        },
        {
            id: 179,
            question: 'Which command shows the full path of a command like `node`?',
            options: [
                '`where node`',
                '`which node`',
                '`path node`',
                '`locate node`'
            ],
            correctAnswer: 1
        },
        {
            id: 180,
            question: 'Which command clears the terminal screen?',
            options: [
                '`reset`',
                '`clear`',
                '`cls`',
                '`wipe`'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam12Data = {
    examId: 12,
    examName: 'Exam-12',
    title: 'HTML Fundamentals',
    questions: [
        {
            id: 181,
            question: 'What does HTML stand for?',
            options: [
                'High Text Machine Language',
                'HyperText Markup Language',
                'Hyper Tool Markup Language',
                'Home Tool Markup Language'
            ],
            correctAnswer: 1
        },
        {
            id: 182,
            question: 'Which tag is used for the largest heading?',
            options: [
                '`<h6>`',
                '`<head>`',
                '`<h1>`',
                '`<title>`'
            ],
            correctAnswer: 2
        },
        {
            id: 183,
            question: 'Which tag is used to create a hyperlink?',
            options: [
                '`<link>`',
                '`<a>`',
                '`<href>`',
                '`<url>`'
            ],
            correctAnswer: 1
        },
        {
            id: 184,
            question: 'Which attribute specifies the link destination for an `<a>` tag?',
            options: [
                '`src`',
                '`href`',
                '`target`',
                '`rel`'
            ],
            correctAnswer: 1
        },
        {
            id: 185,
            question: 'Which tag is used to display an image?',
            options: [
                '`<img>`',
                '`<image>`',
                '`<pic>`',
                '`<src>`'
            ],
            correctAnswer: 0
        },
        {
            id: 186,
            question: 'Which attribute provides alternative text for an image (accessibility)?',
            options: [
                '`title`',
                '`alt`',
                '`name`',
                '`aria-label`'
            ],
            correctAnswer: 1
        },
        {
            id: 187,
            question: 'Which tag creates a line break?',
            options: [
                '`<lb>`',
                '`<break>`',
                '`<br>`',
                '`<hr>`'
            ],
            correctAnswer: 2
        },
        {
            id: 188,
            question: 'Which tag creates a horizontal line?',
            options: [
                '`<line>`',
                '`<br>`',
                '`<hr>`',
                '`<border>`'
            ],
            correctAnswer: 2
        },
        {
            id: 189,
            question: 'Which tag is used for an unordered (bulleted) list?',
            options: [
                '`<ol>`',
                '`<ul>`',
                '`<li>`',
                '`<list>`'
            ],
            correctAnswer: 1
        },
        {
            id: 190,
            question: 'Which tag is used for an ordered (numbered) list?',
            options: [
                '`<order>`',
                '`<ol>`',
                '`<ul>`',
                '`<li>`'
            ],
            correctAnswer: 1
        },
        {
            id: 191,
            question: 'Which tag is used to define a list item?',
            options: [
                '`<ul>`',
                '`<ol>`',
                '`<li>`',
                '`<item>`'
            ],
            correctAnswer: 2
        },
        {
            id: 192,
            question: 'Which element contains metadata like the title and links to CSS?',
            options: [
                '`<body>`',
                '`<main>`',
                '`<head>`',
                '`<footer>`'
            ],
            correctAnswer: 2
        },
        {
            id: 193,
            question: 'Which tag is used to define the page title shown in the browser tab?',
            options: [
                '`<meta>`',
                '`<title>`',
                '`<header>`',
                '`<h1>`'
            ],
            correctAnswer: 1
        },
        {
            id: 194,
            question: 'Which tag is used to create a form?',
            options: [
                '`<input>`',
                '`<form>`',
                '`<fieldset>`',
                '`<submit>`'
            ],
            correctAnswer: 1
        },
        {
            id: 195,
            question: 'Which input type hides typed characters (password field)?',
            options: [
                '`type="text"`',
                '`type="email"`',
                '`type="password"`',
                '`type="hidden"`'
            ],
            correctAnswer: 2
        },
        {
            id: 196,
            question: 'Which attribute is required for form inputs to be submitted with a name/value pair?',
            options: [
                '`id`',
                '`name`',
                '`class`',
                '`style`'
            ],
            correctAnswer: 1
        },
        {
            id: 197,
            question: 'What is the purpose of the `<label>` element?',
            options: [
                'To make text bold',
                'To attach a human-readable label to a form control (improves accessibility)',
                'To create a hyperlink',
                'To load JavaScript'
            ],
            correctAnswer: 1
        },
        {
            id: 198,
            question: 'Which attribute connects a `<label>` to an input element by id?',
            options: [
                '`name`',
                '`for`',
                '`href`',
                '`rel`'
            ],
            correctAnswer: 1
        },
        {
            id: 199,
            question: 'Which semantic tag typically contains the main content of the page?',
            options: [
                '`<aside>`',
                '`<nav>`',
                '`<main>`',
                '`<section>`'
            ],
            correctAnswer: 2
        },
        {
            id: 200,
            question: 'Which element is used to include JavaScript in an HTML page?',
            options: [
                '`<js>`',
                '`<javascript>`',
                '`<script>`',
                '`<code>`'
            ],
            correctAnswer: 2
        }
    ]
};

export const exam13Data = {
    examId: 13,
    examName: 'Exam-13',
    title: 'CSS Fundamentals',
    questions: [
        {
            id: 201,
            question: 'What does CSS stand for?',
            options: [
                'Computer Style System',
                'Cascading Style Sheets',
                'Creative Styling Source',
                'Color Style Syntax'
            ],
            correctAnswer: 1
        },
        {
            id: 202,
            question: 'Which is the correct way to apply CSS to an HTML element inline?',
            options: [
                '`<p css="color:red">`',
                '`<p style="color:red">`',
                '`<p class="color:red">`',
                '`<p id="color:red">`'
            ],
            correctAnswer: 1
        },
        {
            id: 203,
            question: 'Which selector targets an element by its `id`?',
            options: [
                '`.header`',
                '`#header`',
                '`header`',
                '`*header`'
            ],
            correctAnswer: 1
        },
        {
            id: 204,
            question: 'Which selector targets elements by their class name?',
            options: [
                '`#menu`',
                '`.menu`',
                '`menu()`',
                '`@menu`'
            ],
            correctAnswer: 1
        },
        {
            id: 205,
            question: 'Which selector targets all `<p>` elements?',
            options: [
                '`#p`',
                '`.p`',
                '`p`',
                '`*p`'
            ],
            correctAnswer: 2
        },
        {
            id: 206,
            question: 'Which property changes text color?',
            options: [
                '`font-color`',
                '`text-color`',
                '`color`',
                '`foreground`'
            ],
            correctAnswer: 2
        },
        {
            id: 207,
            question: 'Which property changes the background color?',
            options: [
                '`bgcolor`',
                '`background-color`',
                '`background-style`',
                '`color-background`'
            ],
            correctAnswer: 1
        },
        {
            id: 208,
            question: 'Which property changes the font size?',
            options: [
                '`text-size`',
                '`font-size`',
                '`size-font`',
                '`font`'
            ],
            correctAnswer: 1
        },
        {
            id: 209,
            question: 'Which property is used to make text bold?',
            options: [
                '`font-style`',
                '`font-weight`',
                '`text-bold`',
                '`bold`'
            ],
            correctAnswer: 1
        },
        {
            id: 210,
            question: 'Which property adds space *inside* the border of an element?',
            options: [
                '`margin`',
                '`padding`',
                '`spacing`',
                '`border-gap`'
            ],
            correctAnswer: 1
        },
        {
            id: 211,
            question: 'Which property adds space *outside* the border of an element?',
            options: [
                '`margin`',
                '`padding`',
                '`outline`',
                '`gap`'
            ],
            correctAnswer: 0
        },
        {
            id: 212,
            question: 'In the CSS box model, the correct order from inside to outside is:',
            options: [
                'margin → border → padding → content',
                'content → padding → border → margin',
                'content → border → padding → margin',
                'padding → content → border → margin'
            ],
            correctAnswer: 1
        },
        {
            id: 213,
            question: 'Which property controls whether an element is visible but still takes space?',
            options: [
                '`display: none`',
                '`visibility: hidden`',
                '`opacity: 0`',
                '`z-index: 0`'
            ],
            correctAnswer: 1
        },
        {
            id: 214,
            question: 'Which property removes an element from the layout completely?',
            options: [
                '`visibility: hidden`',
                '`display: none`',
                '`opacity: 0`',
                '`position: relative`'
            ],
            correctAnswer: 1
        },
        {
            id: 215,
            question: 'Which property changes the stacking order (which element appears on top)?',
            options: [
                '`layer`',
                '`z-index`',
                '`stack-order`',
                '`priority`'
            ],
            correctAnswer: 1
        },
        {
            id: 216,
            question: 'Which position value places an element relative to its nearest positioned ancestor?',
            options: [
                '`static`',
                '`relative`',
                '`absolute`',
                '`fixed`'
            ],
            correctAnswer: 2
        },
        {
            id: 217,
            question: 'Which property is often used to create space between items in a flexbox or grid?',
            options: [
                '`space`',
                '`gap`',
                '`padding-gap`',
                '`margin-gap`'
            ],
            correctAnswer: 1
        },
        {
            id: 218,
            question: 'Which CSS rule targets an element when the mouse hovers over it?',
            options: [
                '`:focus`',
                '`:hover`',
                '`:active`',
                '`:checked`'
            ],
            correctAnswer: 1
        },
        {
            id: 219,
            question: 'Which is the correct syntax to select all `<a>` elements inside a `<nav>`?',
            options: [
                '`nav + a`',
                '`nav a`',
                '`nav#a`',
                '`nav.a`'
            ],
            correctAnswer: 1
        },
        {
            id: 220,
            question: 'Which statement about CSS specificity is TRUE?',
            options: [
                'Class selectors are more specific than ID selectors',
                'ID selectors are more specific than class selectors',
                'Element selectors are more specific than IDs',
                '`*` is the most specific selector'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam14Data = {
    examId: 14,
    examName: 'Exam-14',
    title: 'Agile & Scrum Fundamentals',
    questions: [
        {
            id: 221,
            question: 'In Scrum, the main purpose of a Sprint is to:',
            options: [
                'Finish all project documentation',
                'Deliver a potentially shippable increment of value',
                'Freeze requirements',
                'Stop changes'
            ],
            correctAnswer: 1
        },
        {
            id: 222,
            question: 'In an Agile team, QA\'s primary responsibility is to:',
            options: [
                'Only do manual testing at the end',
                'Ensure product quality through continuous testing and prevention',
                'Approve budgets',
                'Write only performance tests'
            ],
            correctAnswer: 1
        },
        {
            id: 223,
            question: 'The Scrum artifact that contains all desired work items is:',
            options: [
                'Sprint Backlog',
                'Product Backlog',
                'Increment',
                'Burnup chart'
            ],
            correctAnswer: 1
        },
        {
            id: 224,
            question: 'QA helps most during backlog refinement by:',
            options: [
                'Writing code only',
                'Identifying test scenarios, edge cases, and acceptance criteria gaps',
                'Canceling user stories',
                'Removing estimates'
            ],
            correctAnswer: 1
        },
        {
            id: 225,
            question: 'Acceptance Criteria (AC) are mainly used to:',
            options: [
                'Replace user stories',
                'Define conditions of satisfaction for a story and guide testing',
                'Make sprints longer',
                'Avoid automation'
            ],
            correctAnswer: 1
        },
        {
            id: 226,
            question: 'A "Definition of Done (DoD)" typically includes:',
            options: [
                'Story is coded but not tested',
                'Completed dev + tested + meets AC + no critical bugs + meets quality checks',
                'Only unit tests passed',
                'Only QA sign-off'
            ],
            correctAnswer: 1
        },
        {
            id: 227,
            question: 'In Scrum, QA should ideally start testing:',
            options: [
                'Only after the whole sprint is done',
                'As soon as a slice of the story is ready (shift-left)',
                'Only during UAT',
                'Only after release'
            ],
            correctAnswer: 1
        },
        {
            id: 228,
            question: 'The Daily Scrum is mainly for:',
            options: [
                'Managers to assign tasks',
                'Developers only',
                'Team to inspect progress toward Sprint Goal and plan next 24 hours',
                'QA to present test cases'
            ],
            correctAnswer: 2
        },
        {
            id: 229,
            question: 'In Sprint Planning, QA contributes by:',
            options: [
                'Only estimating development effort',
                'Clarifying test approach, risks, test data, and effort for validation',
                'Removing the Sprint Goal',
                'Approving the release date'
            ],
            correctAnswer: 1
        },
        {
            id: 230,
            question: 'A common QA activity in Agile is "shift-left," which means:',
            options: [
                'Testing only on the left side of the screen',
                'Testing earlier in the lifecycle (requirements, design, code reviews)',
                'Testing only after deployment',
                'Reducing automation'
            ],
            correctAnswer: 1
        },
        {
            id: 231,
            question: 'For a QA engineer, the BEST way to reduce regression risk each sprint is:',
            options: [
                'Run only manual tests once',
                'Maintain a stable automated smoke/regression suite in CI',
                'Avoid writing tests',
                'Release less often'
            ],
            correctAnswer: 1
        },
        {
            id: 232,
            question: 'In Agile, "test automation" should be treated as:',
            options: [
                'Optional work done only if time remains',
                'Part of the Definition of Done for appropriate stories',
                'Only for QA interns',
                'Only for performance testing'
            ],
            correctAnswer: 1
        },
        {
            id: 233,
            question: 'What is a "Sprint Review" mainly for?',
            options: [
                'Private meeting for Scrum Master only',
                'Demo and feedback on the increment with stakeholders',
                'Writing test cases',
                'Estimating next sprint'
            ],
            correctAnswer: 1
        },
        {
            id: 234,
            question: 'What is a "Sprint Retrospective" mainly for?',
            options: [
                'Reporting to leadership',
                'Team improvement: what to start/stop/continue for next sprint',
                'Demo to customers',
                'Writing release notes'
            ],
            correctAnswer: 1
        },
        {
            id: 235,
            question: 'A QA engineer can improve story quality by adding:',
            options: [
                'Random comments',
                'Testability notes (data setup, environment needs, logging, stable selectors)',
                'Only UI screenshots',
                'Personal opinions only'
            ],
            correctAnswer: 1
        },
        {
            id: 236,
            question: 'The best way to manage defects in Scrum is:',
            options: [
                'Log everything and stop development',
                'Prioritize defects based on severity/impact and align with sprint/release goals',
                'Ignore defects until the end of project',
                'Fix only cosmetic bugs'
            ],
            correctAnswer: 1
        },
        {
            id: 237,
            question: 'A "test pyramid" supports Agile quality by recommending:',
            options: [
                'Only UI tests',
                'More unit and API tests, fewer UI tests (balanced strategy)',
                'No automation',
                'Only end-to-end tests'
            ],
            correctAnswer: 1
        },
        {
            id: 238,
            question: 'When a story is "blocked," QA should:',
            options: [
                'Do nothing until unblocked',
                'Communicate the block, capture evidence, help troubleshoot, and shift to other work',
                'Delete the story',
                'Skip testing permanently'
            ],
            correctAnswer: 1
        },
        {
            id: 239,
            question: 'In Scrum, QA and Dev collaboration is best represented by:',
            options: [
                'QA works alone after dev finishes',
                'Shared ownership of quality (pairing, reviews, early validation)',
                'QA only writes documentation',
                'QA signs off without testing'
            ],
            correctAnswer: 1
        },
        {
            id: 240,
            question: 'A good QA metric in Agile should focus on:',
            options: [
                'Counting only number of test cases',
                'Outcomes: risk reduction, escaped defects, cycle time, stability of CI, quality trends',
                'Number of meetings attended',
                'Lines of code in tests'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam15Data = {
    examId: 15,
    examName: 'Exam-15',
    title: 'BDD (Behavior-Driven Development)',
    questions: [
        {
            id: 241,
            question: 'BDD stands for:',
            options: [
                'Basic Design Document',
                'Behavior-Driven Development',
                'Build-Driven Deployment',
                'Bug-Driven Development'
            ],
            correctAnswer: 1
        },
        {
            id: 242,
            question: 'The main purpose of BDD is to:',
            options: [
                'Replace developers with testers',
                'Improve collaboration using shared examples of behavior',
                'Eliminate the need for requirements',
                'Make tests run faster'
            ],
            correctAnswer: 1
        },
        {
            id: 243,
            question: 'Gherkin is:',
            options: [
                'A JavaScript framework',
                'A plain-text language for writing scenarios (Given/When/Then)',
                'A database tool',
                'A CI server'
            ],
            correctAnswer: 1
        },
        {
            id: 244,
            question: 'Cucumber is best described as:',
            options: [
                'A browser automation tool',
                'A BDD tool that executes Gherkin feature files via step definitions',
                'A performance testing tool',
                'A code editor'
            ],
            correctAnswer: 1
        },
        {
            id: 245,
            question: 'A `.feature` file typically contains:',
            options: [
                'Only Java code',
                'Features, scenarios, and steps written in Gherkin',
                'Only screenshots',
                'Only API schemas'
            ],
            correctAnswer: 1
        },
        {
            id: 246,
            question: 'In Gherkin, the keyword that describes initial context is:',
            options: [
                '`When`',
                '`Then`',
                '`Given`',
                '`And`'
            ],
            correctAnswer: 2
        },
        {
            id: 247,
            question: 'In Gherkin, the keyword that describes an action is:',
            options: [
                '`Given`',
                '`When`',
                '`Then`',
                '`But`'
            ],
            correctAnswer: 1
        },
        {
            id: 248,
            question: 'In Gherkin, the keyword that describes the expected outcome is:',
            options: [
                '`Given`',
                '`When`',
                '`Then`',
                '`And`'
            ],
            correctAnswer: 2
        },
        {
            id: 249,
            question: 'What is a "step definition"?',
            options: [
                'A UI selector list',
                'Code that maps Given/When/Then steps to automation logic',
                'A test plan document',
                'A database script'
            ],
            correctAnswer: 1
        },
        {
            id: 250,
            question: 'What is the best practice for writing Gherkin steps?',
            options: [
                'Include detailed UI clicks and selectors in every step',
                'Focus on business behavior and outcomes, not implementation details',
                'Use random wording each time',
                'Avoid acceptance criteria'
            ],
            correctAnswer: 1
        },
        {
            id: 251,
            question: 'Scenario Outline is used when:',
            options: [
                'You want to skip a scenario',
                'You want to run the same scenario with multiple data sets',
                'You want to run tests in parallel',
                'You want to generate screenshots'
            ],
            correctAnswer: 1
        },
        {
            id: 252,
            question: 'In Scenario Outline, the data table is introduced with:',
            options: [
                '`Data:`',
                '`Examples:`',
                '`Parameters:`',
                '`Table:`'
            ],
            correctAnswer: 1
        },
        {
            id: 253,
            question: 'In Scenario Outline, placeholders are usually written as:',
            options: [
                '`{username}`',
                '`<username>`',
                '`$(username)`',
                '`@username`'
            ],
            correctAnswer: 1
        },
        {
            id: 254,
            question: 'Which keyword is used for background steps that run before each scenario in a feature?',
            options: [
                '`Before`',
                '`Setup`',
                '`Background`',
                '`Init`'
            ],
            correctAnswer: 2
        },
        {
            id: 255,
            question: 'Which is the best example of a good Gherkin step?',
            options: [
                '"Click the blue login button"',
                '"Given the user is logged in"',
                '"Wait 5 seconds"',
                '"Find element by XPath"'
            ],
            correctAnswer: 1
        },
        {
            id: 256,
            question: 'What is the risk of putting too many UI details in Gherkin?',
            options: [
                'It makes tests faster',
                'It makes tests more brittle and less readable for business users',
                'It improves collaboration',
                'It removes need for step definitions'
            ],
            correctAnswer: 1
        },
        {
            id: 257,
            question: 'What does "living documentation" mean in BDD?',
            options: [
                'Documentation that changes color',
                'Feature files can serve as up-to-date documentation when kept in sync with behavior',
                'Documentation stored only in PDFs',
                'Documentation written after release only'
            ],
            correctAnswer: 1
        },
        {
            id: 258,
            question: 'Cucumber tags (like `@smoke`, `@regression`) are used to:',
            options: [
                'Rename variables',
                'Organize and filter which scenarios to run',
                'Speed up browser rendering',
                'Replace assertions'
            ],
            correctAnswer: 1
        },
        {
            id: 259,
            question: 'The best practice for step definitions is:',
            options: [
                'One step definition should do everything for the whole test',
                'Keep steps reusable, readable, and aligned with business meaning',
                'Hardcode test data in every step',
                'Avoid reusing steps'
            ],
            correctAnswer: 1
        },
        {
            id: 260,
            question: 'Who benefits most from BDD-style scenarios?',
            options: [
                'Only developers',
                'Only QA engineers',
                'QA, developers, product owners, and business stakeholders (shared understanding)',
                'Only project managers'
            ],
            correctAnswer: 2
        }
    ]
};

export const exam16Data = {
    examId: 16,
    examName: 'Exam-16',
    title: 'JavaScript Fundamentals for Playwright',
    questions: [
        {
            id: 261,
            question: 'Why do Playwright tests commonly use `async`/`await` in JavaScript?',
            options: [
                'It makes selectors shorter',
                'Playwright actions return Promises and must be awaited for correct order',
                'It disables timeouts',
                'It converts JS to TypeScript'
            ],
            correctAnswer: 1
        },
        {
            id: 262,
            question: 'What happens if you forget to `await` a Playwright action like `page.click()`?',
            options: [
                'Nothing changes; it always works',
                'The test may continue before the click finishes, causing flaky behavior',
                'The browser closes immediately',
                'Playwright automatically retries the missing await'
            ],
            correctAnswer: 1
        },
        {
            id: 263,
            question: 'In JavaScript, a Promise represents:',
            options: [
                'A synchronous function',
                'A value that may be available now, later, or never (async result)',
                'A CSS selector',
                'A test case title'
            ],
            correctAnswer: 1
        },
        {
            id: 264,
            question: 'Which is the correct way to import Playwright Test in JavaScript?',
            options: [
                '`import test, expect from \'@playwright/test\'`',
                '`import { test, expect } from \'@playwright/test\'`',
                '`import { page } from \'@playwright/test\'`',
                '`import playwright from \'test\'`'
            ],
            correctAnswer: 1
        },
        {
            id: 265,
            question: 'What is destructuring in this function parameter: `async ({ page }) => {}` ?',
            options: [
                'Converting JS to JSON',
                'Extracting `page` property from the argument object',
                'Deleting the page object',
                'Importing modules'
            ],
            correctAnswer: 1
        },
        {
            id: 266,
            question: 'In `test(\'title\', async ({ page }) => {})`, what is `{ page }`?',
            options: [
                'An array',
                'A Playwright fixture object property extracted by destructuring',
                'A string selector',
                'A CSS style object'
            ],
            correctAnswer: 1
        },
        {
            id: 267,
            question: 'Which statement about `const`, `let`, and `var` is TRUE?',
            options: [
                '`var` is block-scoped',
                '`let` is function-scoped',
                '`const` cannot be reassigned',
                '`const` can be redeclared in the same scope'
            ],
            correctAnswer: 2
        },
        {
            id: 268,
            question: 'Best practice for selectors in automation code is to:',
            options: [
                'Hardcode random XPaths',
                'Use stable attributes like `data-testid` and accessible locators',
                'Use `setTimeout()` before every click',
                'Use only `.first()` for everything'
            ],
            correctAnswer: 1
        },
        {
            id: 269,
            question: 'What does `Array.map()` return?',
            options: [
                'It modifies the original array and returns nothing',
                'A new array with transformed elements',
                'The count of elements',
                'Only the first element'
            ],
            correctAnswer: 1
        },
        {
            id: 270,
            question: 'What does `Array.filter()` return?',
            options: [
                'A new array containing elements that pass the condition',
                'The last item only',
                'The sum of values',
                'A boolean'
            ],
            correctAnswer: 0
        },
        {
            id: 271,
            question: 'Which is the correct way to loop through an array in async code when you need `await` each step?',
            options: [
                '`arr.forEach(async item => await doWork(item))`',
                '`for (const item of arr) { await doWork(item) }`',
                '`arr.map(async item => await doWork(item))` always',
                '`arr.every(async item => await doWork(item))`'
            ],
            correctAnswer: 1
        },
        {
            id: 272,
            question: 'Why is `forEach(async () => ...)` often a problem in test automation?',
            options: [
                'It runs too slow',
                '`forEach` doesn\'t await async callbacks properly, causing out-of-order steps',
                'It deletes array values',
                'It disables retries'
            ],
            correctAnswer: 1
        },
        {
            id: 273,
            question: 'Which is a correct way to set a default value using `||`?',
            options: [
                '`const baseURL = process.env.BASE_URL || \'http://localhost:3000\'`',
                '`const baseURL = process.env.BASE_URL && \'http://localhost:3000\'`',
                '`const baseURL = process.env.BASE_URL == \'http://localhost:3000\'`',
                '`const baseURL = process.env.BASE_URL ??= \'http://localhost:3000\'`'
            ],
            correctAnswer: 0
        },
        {
            id: 274,
            question: 'What does optional chaining `user?.name` do?',
            options: [
                'Throws error if user is null',
                'Safely accesses `name` only if `user` is not null/undefined',
                'Converts `name` to uppercase',
                'Waits for `name`'
            ],
            correctAnswer: 1
        },
        {
            id: 275,
            question: 'What does the nullish coalescing operator `??` do?',
            options: [
                'Works like `||` for all falsy values',
                'Uses the right value only if left is `null` or `undefined`',
                'Converts null to string',
                'Stops execution'
            ],
            correctAnswer: 1
        },
        {
            id: 276,
            question: 'What is the purpose of `try/catch` in automation scripts?',
            options: [
                'To speed up tests',
                'To handle errors and perform custom recovery/logging when something fails',
                'To avoid writing assertions',
                'To run tests in parallel'
            ],
            correctAnswer: 1
        },
        {
            id: 277,
            question: 'In Node.js, what does `process.env` typically store?',
            options: [
                'HTML files',
                'Environment variables (like URLs, tokens, credentials)',
                'Browser cookies only',
                'Test videos'
            ],
            correctAnswer: 1
        },
        {
            id: 278,
            question: 'Which is a good practice for test data in JS automation?',
            options: [
                'Hardcode production passwords in code',
                'Use env vars or test users in a secure test environment',
                'Store secrets in commit messages',
                'Print tokens in logs always'
            ],
            correctAnswer: 1
        },
        {
            id: 279,
            question: 'In JS modules, what does `export` allow you to do?',
            options: [
                'Run tests automatically',
                'Share functions/classes/constants across files',
                'Change CSS selectors',
                'Mock API responses'
            ],
            correctAnswer: 1
        },
        {
            id: 280,
            question: 'Why do we avoid `waitForTimeout(5000)` as a general strategy?',
            options: [
                'It\'s always wrong',
                'It makes tests slower and flaky; prefer waiting for conditions or network/state',
                'It disables screenshots',
                'It breaks TypeScript compilation'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam17Data = {
    examId: 17,
    examName: 'Exam-17',
    title: 'Requirements, Test Cases & Bug Management',
    questions: [
        {
            id: 281,
            question: 'What is the main purpose of requirements?',
            options: [
                'To write automation code',
                'To define what the system should do and constraints',
                'To list bugs',
                'To create UI designs only'
            ],
            correctAnswer: 1
        },
        {
            id: 282,
            question: 'Which document commonly contains functional requirements?',
            options: [
                'SRS / User Stories / BRD',
                'Test Summary Report',
                'Release notes',
                'Build log'
            ],
            correctAnswer: 0
        },
        {
            id: 283,
            question: 'Acceptance Criteria (AC) are best defined as:',
            options: [
                'Optional notes for developers',
                'Conditions that must be met for a user story to be accepted',
                'Performance metrics only',
                'Only UI design rules'
            ],
            correctAnswer: 1
        },
        {
            id: 284,
            question: 'Who should collaborate to define clear Acceptance Criteria?',
            options: [
                'Only QA',
                'Only developer',
                'Product Owner, dev, QA, stakeholders',
                'Only Scrum Master'
            ],
            correctAnswer: 2
        },
        {
            id: 285,
            question: 'A good Acceptance Criteria statement should be:',
            options: [
                'Vague so it can be flexible',
                'Testable and specific',
                'Only technical',
                'Only UI-focused'
            ],
            correctAnswer: 1
        },
        {
            id: 286,
            question: 'Which is the best example of testable AC?',
            options: [
                '"The page should look nice."',
                '"Login should be fast."',
                '"Given valid credentials, user is redirected to Dashboard within 2 seconds."',
                '"System must be modern."'
            ],
            correctAnswer: 2
        },
        {
            id: 287,
            question: 'Functional requirements describe:',
            options: [
                'System performance limits only',
                'What the system should do (features/behaviors)',
                'Server hardware details',
                'Code style rules'
            ],
            correctAnswer: 1
        },
        {
            id: 288,
            question: 'Non-functional requirements include:',
            options: [
                'Button labels',
                'Performance, security, usability, accessibility',
                'User stories only',
                'Unit test code'
            ],
            correctAnswer: 1
        },
        {
            id: 289,
            question: 'What is requirement ambiguity?',
            options: [
                'Requirement is too long',
                'Requirement can be interpreted in multiple ways',
                'Requirement is written in code',
                'Requirement has a screenshot'
            ],
            correctAnswer: 1
        },
        {
            id: 290,
            question: 'QA helps reduce ambiguity by:',
            options: [
                'Skipping refinement meetings',
                'Asking clarifying questions and creating examples/test scenarios',
                'Removing acceptance criteria',
                'Testing only after release'
            ],
            correctAnswer: 1
        },
        {
            id: 291,
            question: '"INVEST" is related to:',
            options: [
                'Bug severity',
                'Writing good user stories (Independent, Negotiable, Valuable, Estimable, Small, Testable)',
                'Writing test scripts',
                'Performance tuning'
            ],
            correctAnswer: 1
        },
        {
            id: 292,
            question: 'What is the best time to review requirements?',
            options: [
                'After production release',
                'During backlog refinement and before development starts',
                'Only during UAT',
                'After all tests are executed'
            ],
            correctAnswer: 1
        },
        {
            id: 293,
            question: 'User stories usually follow the format:',
            options: [
                '"System shall…"',
                '"As a <role>, I want <goal>, so that <benefit>"',
                '"Bug: …"',
                '"Given/When/Then only"'
            ],
            correctAnswer: 1
        },
        {
            id: 294,
            question: 'Acceptance Criteria in Gherkin format uses:',
            options: [
                'Before/After',
                'Given/When/Then',
                'Create/Update/Delete',
                'Start/Stop/Continue'
            ],
            correctAnswer: 1
        },
        {
            id: 295,
            question: 'What is the purpose of Definition of Done (DoD)?',
            options: [
                'Define story points',
                'Define minimum quality steps for completion (tested, reviewed, etc.)',
                'Define UI layout',
                'Define sprint length'
            ],
            correctAnswer: 1
        },
        {
            id: 296,
            question: 'A test scenario is:',
            options: [
                'A detailed step-by-step procedure',
                'A high-level description of what to test',
                'A defect report',
                'A deployment script'
            ],
            correctAnswer: 1
        },
        {
            id: 297,
            question: 'A test case typically includes:',
            options: [
                'Only test data',
                'Preconditions, steps, expected results',
                'Only screenshots',
                'Only bug IDs'
            ],
            correctAnswer: 1
        },
        {
            id: 298,
            question: 'Test data means:',
            options: [
                'The list of testers',
                'Input values required to execute a test',
                'Version control settings',
                'CI pipeline status'
            ],
            correctAnswer: 1
        },
        {
            id: 299,
            question: 'What is a precondition in a test case?',
            options: [
                'Expected result',
                'Steps to reproduce bug',
                'Required state/setup before executing test',
                'Test execution status'
            ],
            correctAnswer: 2
        },
        {
            id: 300,
            question: 'Regression testing is done to:',
            options: [
                'Test new features only',
                'Ensure existing functionality still works after changes',
                'Test performance only',
                'Validate hardware'
            ],
            correctAnswer: 1
        },
        {
            id: 301,
            question: 'Smoke testing focuses on:',
            options: [
                'Deep testing all modules',
                'Basic critical functionalities to confirm build stability',
                'Accessibility only',
                'Database indexing'
            ],
            correctAnswer: 1
        },
        {
            id: 302,
            question: 'Exploratory testing is:',
            options: [
                'Fully scripted testing only',
                'Testing while learning the product and discovering risks',
                'Only automation testing',
                'Testing without any goal'
            ],
            correctAnswer: 1
        },
        {
            id: 303,
            question: 'Boundary Value Analysis (BVA) is used to:',
            options: [
                'Test only UI colors',
                'Test values at the edges of valid/invalid ranges',
                'Test network speed',
                'Find memory leaks'
            ],
            correctAnswer: 1
        },
        {
            id: 304,
            question: 'Equivalence Partitioning helps by:',
            options: [
                'Increasing number of test cases',
                'Grouping inputs into partitions to reduce redundant tests',
                'Eliminating need for requirements',
                'Avoiding defect reporting'
            ],
            correctAnswer: 1
        },
        {
            id: 305,
            question: 'What is the purpose of a test plan?',
            options: [
                'Provide user documentation',
                'Define scope, approach, resources, schedule, risks for testing',
                'Replace test cases',
                'List source code files'
            ],
            correctAnswer: 1
        },
        {
            id: 306,
            question: 'What is "test coverage"?',
            options: [
                'Number of testers available',
                'Measure of how much of requirements/features are tested',
                'Number of meetings attended',
                'CPU usage'
            ],
            correctAnswer: 1
        },
        {
            id: 307,
            question: 'Which is a good test case writing practice?',
            options: [
                'Use unclear expected results',
                'Keep steps clear, atomic, and verifiable',
                'Avoid preconditions',
                'Use random data'
            ],
            correctAnswer: 1
        },
        {
            id: 308,
            question: 'A negative test case is designed to:',
            options: [
                'Prove system always works',
                'Validate system behavior with invalid inputs or error scenarios',
                'Replace regression suite',
                'Increase performance'
            ],
            correctAnswer: 1
        },
        {
            id: 309,
            question: 'What does "re-test" mean?',
            options: [
                'Running full regression suite',
                'Testing a specific fixed defect again',
                'Testing only UI layout',
                'Testing unit tests'
            ],
            correctAnswer: 1
        },
        {
            id: 310,
            question: 'What is a test summary report?',
            options: [
                'A list of developers',
                'Document summarizing testing activities, results, and quality status',
                'A requirement document',
                'A build script'
            ],
            correctAnswer: 1
        },
        {
            id: 311,
            question: 'A defect is:',
            options: [
                'A feature request',
                'Deviation between expected and actual result',
                'A test case',
                'A requirement'
            ],
            correctAnswer: 1
        },
        {
            id: 312,
            question: 'Bug severity indicates:',
            options: [
                'How quickly to fix',
                'Impact of the defect on system/functionality',
                'Who reported it',
                'How many comments on the ticket'
            ],
            correctAnswer: 1
        },
        {
            id: 313,
            question: 'Bug priority indicates:',
            options: [
                'Technical root cause',
                'How soon it should be fixed (business urgency)',
                'Lines of code changed',
                'Screenshot count'
            ],
            correctAnswer: 1
        },
        {
            id: 314,
            question: 'Which is most important in a bug report?',
            options: [
                'Fancy formatting',
                'Steps to reproduce + expected vs actual + environment',
                'Only severity',
                'Only title'
            ],
            correctAnswer: 1
        },
        {
            id: 315,
            question: '"Cannot reproduce" typically means:',
            options: [
                'Bug is fake always',
                'Tester/developer can\'t reproduce with given steps/environment',
                'Fix is complete',
                'Feature is removed'
            ],
            correctAnswer: 1
        },
        {
            id: 316,
            question: 'What is bug triage?',
            options: [
                'Writing new requirements',
                'Reviewing/prioritizing defects and deciding next actions',
                'Closing all bugs automatically',
                'Running performance tests'
            ],
            correctAnswer: 1
        },
        {
            id: 317,
            question: 'A "blocker" defect means:',
            options: [
                'Cosmetic UI issue',
                'Stops testing or release due to critical failure',
                'Minor usability issue',
                'Documentation mismatch'
            ],
            correctAnswer: 1
        },
        {
            id: 318,
            question: 'Best practice when logging a defect is to:',
            options: [
                'Provide incomplete steps',
                'Provide logs/screenshots/video when helpful',
                'Only mention "it doesn\'t work"',
                'Avoid mentioning environment'
            ],
            correctAnswer: 1
        },
        {
            id: 319,
            question: 'What is "duplicate" defect status?',
            options: [
                'Defect is resolved',
                'Same issue already reported in another ticket',
                'Defect is invalid',
                'Defect is postponed'
            ],
            correctAnswer: 1
        },
        {
            id: 320,
            question: 'What is "deferred" or "won\'t fix" typically used for?',
            options: [
                'Critical production outage',
                'Low priority defects postponed or not planned to be fixed now',
                'All defects',
                'Security bugs'
            ],
            correctAnswer: 1
        },
        {
            id: 321,
            question: 'Root cause analysis helps teams:',
            options: [
                'Write more bugs',
                'Identify why defect happened and prevent recurrence',
                'Skip testing',
                'Increase manual work'
            ],
            correctAnswer: 1
        },
        {
            id: 322,
            question: 'A good "actual result" description is:',
            options: [
                '"Not working"',
                '"It fails sometimes"',
                '"On clicking Save, a 500 error appears and record is not saved."',
                '"Looks wrong"'
            ],
            correctAnswer: 2
        },
        {
            id: 323,
            question: 'A good "expected result" description is:',
            options: [
                '"Should be okay"',
                '"Should work properly"',
                '"Record is saved successfully and success message is displayed."',
                '"No issues"'
            ],
            correctAnswer: 2
        },
        {
            id: 324,
            question: 'RTM stands for:',
            options: [
                'Release Testing Method',
                'Requirements Traceability Matrix',
                'Risk Tracking Model',
                'Regression Test Map'
            ],
            correctAnswer: 1
        },
        {
            id: 325,
            question: 'The main purpose of an RTM is to:',
            options: [
                'Replace bug tracking',
                'Ensure each requirement is covered by tests and track coverage',
                'Replace sprint backlog',
                'Track developer productivity'
            ],
            correctAnswer: 1
        },
        {
            id: 326,
            question: 'RTM typically maps:',
            options: [
                'Test cases to source code only',
                'Requirements ↔ test cases (and sometimes defects)',
                'UI designs ↔ marketing plan',
                'Servers ↔ browsers'
            ],
            correctAnswer: 1
        },
        {
            id: 327,
            question: 'RTM is most useful for:',
            options: [
                'Choosing fonts',
                'Ensuring no requirement is missed in testing',
                'Writing automation scripts faster',
                'Avoiding stakeholder reviews'
            ],
            correctAnswer: 1
        },
        {
            id: 328,
            question: 'If a requirement changes, RTM helps to:',
            options: [
                'Ignore the impact',
                'Identify impacted test cases and update them',
                'Delete all tests',
                'Stop regression testing'
            ],
            correctAnswer: 1
        },
        {
            id: 329,
            question: 'Traceability from requirements to defects helps teams:',
            options: [
                'Hide bugs',
                'Understand which requirements are failing and prioritize fixes',
                'Reduce communication',
                'Avoid documentation'
            ],
            correctAnswer: 1
        },
        {
            id: 330,
            question: 'Which is a best practice for RTM maintenance?',
            options: [
                'Update only once a year',
                'Keep it updated as requirements and tests evolve (continuous)',
                'Don\'t include test case IDs',
                'Only include passed tests'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam18Data = {
    examId: 18,
    examName: 'Exam-18',
    title: 'BDD, Cucumber & Playwright Integration',
    questions: [
        {
            id: 331,
            question: 'What command is used to install Cucumber for Playwright?',
            options: [
                'npm install cucumber',
                'npm install --save-dev @cucumber/cucumber',
                'npm install playwright-cucumber',
                'npm install cucumber-playwright'
            ],
            correctAnswer: 1
        },
        {
            id: 332,
            question: 'Which Gherkin keyword is used to describe the initial state or context?',
            options: [
                'When',
                'Given',
                'Then',
                'And'
            ],
            correctAnswer: 1
        },
        {
            id: 333,
            question: 'What is the correct Playwright command to run tests in headed mode?',
            options: [
                'npx playwright test --headed',
                'npx playwright test --headless',
                'npx playwright test --browser',
                'npx playwright test --ui'
            ],
            correctAnswer: 0
        },
        {
            id: 334,
            question: 'In Cucumber, what file extension is used for feature files?',
            options: [
                '.cucumber',
                '.feature',
                '.gherkin',
                '.bdd'
            ],
            correctAnswer: 1
        },
        {
            id: 335,
            question: 'What command generates a Cucumber HTML report?',
            options: [
                'cucumber-js --format html',
                'cucumber-js --format html:reports/cucumber.html',
                'npx cucumber-js --format html',
                'playwright test --reporter html'
            ],
            correctAnswer: 1
        },
        {
            id: 336,
            question: 'Which Playwright command installs browser binaries?',
            options: [
                'npx playwright install',
                'npm install playwright',
                'playwright install browsers',
                'npx playwright setup'
            ],
            correctAnswer: 0
        },
        {
            id: 337,
            question: 'What is the purpose of a World object in Cucumber with Playwright?',
            options: [
                'To store global test data',
                'To share browser, page, and context instances across steps',
                'To define test scenarios',
                'To generate reports'
            ],
            correctAnswer: 1
        },
        {
            id: 338,
            question: 'Which Gherkin keyword represents an action performed by the user?',
            options: [
                'Given',
                'When',
                'Then',
                'But'
            ],
            correctAnswer: 1
        },
        {
            id: 339,
            question: 'What Playwright command runs tests in debug mode?',
            options: [
                'npx playwright test --debug',
                'npx playwright test --inspect',
                'npx playwright test --trace on',
                'npx playwright test --devtools'
            ],
            correctAnswer: 0
        },
        {
            id: 340,
            question: 'In Cucumber, what is a Step Definition?',
            options: [
                'A feature file',
                'JavaScript/TypeScript code that maps Gherkin steps to actions',
                'A test report',
                'A configuration file'
            ],
            correctAnswer: 1
        },
        {
            id: 341,
            question: 'What command runs Playwright tests with code coverage?',
            options: [
                'npx playwright test --coverage',
                'npx playwright test --coverage-report',
                'npx playwright test with coverage',
                'Playwright does not support coverage directly'
            ],
            correctAnswer: 3
        },
        {
            id: 342,
            question: 'Which Cucumber hook runs before each scenario?',
            options: [
                'BeforeAll',
                'Before',
                'BeforeEach',
                'Setup'
            ],
            correctAnswer: 2
        },
        {
            id: 343,
            question: 'What Playwright command shows the test report after execution?',
            options: [
                'npx playwright show-report',
                'npx playwright report',
                'npx playwright view-report',
                'npx playwright open-report'
            ],
            correctAnswer: 0
        },
        {
            id: 344,
            question: 'In BDD, what does the "Background" keyword do?',
            options: [
                'Sets up data for all scenarios in a feature',
                'Runs tests in the background',
                'Defines test environment',
                'Creates a test report background'
            ],
            correctAnswer: 0
        },
        {
            id: 345,
            question: 'What command runs Playwright tests in a specific browser?',
            options: [
                'npx playwright test --browser chromium',
                'npx playwright test --project chromium',
                'npx playwright test chromium',
                'npx playwright test --browser=chromium'
            ],
            correctAnswer: 1
        },
        {
            id: 346,
            question: 'What is a Scenario Outline used for in Cucumber?',
            options: [
                'To define test structure',
                'To run the same scenario with different data sets',
                'To create test reports',
                'To define step definitions'
            ],
            correctAnswer: 1
        },
        {
            id: 347,
            question: 'Which Playwright command runs tests in UI mode?',
            options: [
                'npx playwright test --ui',
                'npx playwright test --headed',
                'npx playwright ui',
                'npx playwright test-ui'
            ],
            correctAnswer: 0
        },
        {
            id: 348,
            question: 'In Cucumber, what symbol is used for Data Tables?',
            options: [
                '|',
                '||',
                '|||',
                'Table'
            ],
            correctAnswer: 0
        },
        {
            id: 349,
            question: 'What command runs Playwright tests with retries?',
            options: [
                'npx playwright test --retries 2',
                'npx playwright test --retry 2',
                'npx playwright test --retry-count 2',
                'Configure retries in playwright.config.ts, then run normally'
            ],
            correctAnswer: 3
        },
        {
            id: 350,
            question: 'What is the correct way to attach a screenshot in Cucumber with Playwright?',
            options: [
                'await this.attach(await this.page.screenshot(), "image/png")',
                'await page.screenshot("screenshot.png")',
                'await screenshot(page)',
                'await attachScreenshot(page)'
            ],
            correctAnswer: 0
        }
    ]
};

export const exam19Data = {
    examId: 19,
    examName: 'Exam-19',
    title: 'Postman, REST API & HTTP Methods',
    questions: [
        {
            id: 351,
            question: 'What does REST stand for?',
            options: [
                'Remote Execution System Technology',
                'Representational State Transfer',
                'Resource Exchange Service Transfer',
                'Request Execution Service Technology'
            ],
            correctAnswer: 1
        },
        {
            id: 352,
            question: 'Which HTTP method is used to retrieve data from a server?',
            options: [
                'POST',
                'GET',
                'PUT',
                'DELETE'
            ],
            correctAnswer: 1
        },
        {
            id: 353,
            question: 'What HTTP method is used to create a new resource on the server?',
            options: [
                'GET',
                'POST',
                'PUT',
                'PATCH'
            ],
            correctAnswer: 1
        },
        {
            id: 354,
            question: 'In Postman, what is a Collection?',
            options: [
                'A single API request',
                'A group of related API requests organized together',
                'A test script',
                'An environment variable'
            ],
            correctAnswer: 1
        },
        {
            id: 355,
            question: 'Which HTTP method is idempotent?',
            options: [
                'POST',
                'GET',
                'POST and PUT',
                'GET, PUT, and DELETE'
            ],
            correctAnswer: 3
        },
        {
            id: 356,
            question: 'What is the difference between PUT and PATCH HTTP methods?',
            options: [
                'PUT updates entire resource, PATCH updates partial resource',
                'PUT creates resources, PATCH deletes resources',
                'PUT is for GET requests, PATCH is for POST requests',
                'There is no difference'
            ],
            correctAnswer: 0
        },
        {
            id: 357,
            question: 'In Postman, what is an Environment?',
            options: [
                'A collection of requests',
                'A set of variables for different environments (dev, staging, prod)',
                'A test script',
                'A response template'
            ],
            correctAnswer: 1
        },
        {
            id: 358,
            question: 'What HTTP status code indicates a successful creation of a resource?',
            options: [
                '200 OK',
                '201 Created',
                '204 No Content',
                '202 Accepted'
            ],
            correctAnswer: 1
        },
        {
            id: 359,
            question: 'Which HTTP status code indicates "Not Found"?',
            options: [
                '400 Bad Request',
                '401 Unauthorized',
                '404 Not Found',
                '500 Internal Server Error'
            ],
            correctAnswer: 2
        },
        {
            id: 360,
            question: 'What is the purpose of HTTP headers in API requests?',
            options: [
                'To store response data',
                'To provide metadata about the request/response (authentication, content type, etc.)',
                'To define the URL',
                'To execute test scripts'
            ],
            correctAnswer: 1
        },
        {
            id: 361,
            question: 'In Postman, what is a Pre-request Script used for?',
            options: [
                'To parse response data',
                'To execute code before sending the request (set variables, generate tokens)',
                'To delete requests',
                'To create collections'
            ],
            correctAnswer: 1
        },
        {
            id: 362,
            question: 'What HTTP method is used to delete a resource?',
            options: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ],
            correctAnswer: 3
        },
        {
            id: 363,
            question: 'What is the Content-Type header used for?',
            options: [
                'To specify authentication method',
                'To indicate the media type of the request/response body (JSON, XML, etc.)',
                'To set the HTTP method',
                'To define the URL'
            ],
            correctAnswer: 1
        },
        {
            id: 364,
            question: 'In REST API, what does idempotent mean?',
            options: [
                'The request can be executed multiple times with the same result',
                'The request must be executed only once',
                'The request requires authentication',
                'The request returns an error'
            ],
            correctAnswer: 0
        },
        {
            id: 365,
            question: 'What HTTP status code indicates "Unauthorized" (authentication required)?',
            options: [
                '400 Bad Request',
                '401 Unauthorized',
                '403 Forbidden',
                '404 Not Found'
            ],
            correctAnswer: 1
        },
        {
            id: 366,
            question: 'In Postman, what is Newman?',
            options: [
                'A collection type',
                'A command-line tool to run Postman collections',
                'An environment variable',
                'A test assertion'
            ],
            correctAnswer: 1
        },
        {
            id: 367,
            question: 'What HTTP method should be used to update an existing resource completely?',
            options: [
                'POST',
                'PUT',
                'PATCH',
                'GET'
            ],
            correctAnswer: 1
        },
        {
            id: 368,
            question: 'What is the difference between 401 and 403 HTTP status codes?',
            options: [
                '401 means not authenticated, 403 means authenticated but not authorized',
                '401 means server error, 403 means client error',
                'There is no difference',
                '401 means resource not found, 403 means bad request'
            ],
            correctAnswer: 0
        },
        {
            id: 369,
            question: 'In Postman, what is a Test Script used for?',
            options: [
                'To send requests',
                'To write assertions and validate responses',
                'To create environments',
                'To delete collections'
            ],
            correctAnswer: 1
        },
        {
            id: 370,
            question: 'What HTTP status code range indicates client errors?',
            options: [
                '100-199',
                '200-299',
                '300-399',
                '400-499'
            ],
            correctAnswer: 3
        }
    ]
};

export const exam20Data = {
    examId: 20,
    examName: 'Exam-20',
    title: 'Performance Testing with JMeter',
    questions: [
        {
            id: 371,
            question: 'What is JMeter primarily used for?',
            options: [
                'Unit testing',
                'Performance and load testing of web applications',
                'Code compilation',
                'Database design'
            ],
            correctAnswer: 1
        },
        {
            id: 372,
            question: 'What is a Thread Group in JMeter?',
            options: [
                'A collection of test scripts',
                'A group of virtual users that simulate load on the application',
                'A type of listener',
                'A configuration element'
            ],
            correctAnswer: 1
        },
        {
            id: 373,
            question: 'What command runs a JMeter test plan from the command line?',
            options: [
                'jmeter -n -t testplan.jmx',
                'jmeter run testplan.jmx',
                'jmeter execute testplan.jmx',
                'jmeter start testplan.jmx'
            ],
            correctAnswer: 0
        },
        {
            id: 374,
            question: 'What is the difference between Load Testing and Stress Testing?',
            options: [
                'Load testing uses more threads',
                'Load testing tests normal expected load, Stress testing tests beyond normal capacity',
                'There is no difference',
                'Stress testing is faster'
            ],
            correctAnswer: 1
        },
        {
            id: 375,
            question: 'What is a Sampler in JMeter?',
            options: [
                'A component that generates sample data',
                'A component that sends requests to a server (HTTP, FTP, JDBC, etc.)',
                'A type of listener',
                'A configuration element'
            ],
            correctAnswer: 1
        },
        {
            id: 376,
            question: 'What is the purpose of a Timer in JMeter?',
            options: [
                'To measure test execution time',
                'To add delays between requests to simulate real user behavior',
                'To schedule test runs',
                'To time out requests'
            ],
            correctAnswer: 1
        },
        {
            id: 377,
            question: 'What command generates an HTML report from JMeter results?',
            options: [
                'jmeter -g results.jtl -o report/',
                'jmeter report results.jtl',
                'jmeter generate-report results.jtl',
                'jmeter -r results.jtl -o report/'
            ],
            correctAnswer: 0
        },
        {
            id: 378,
            question: 'What is Throughput in performance testing?',
            options: [
                'The number of requests per second',
                'The total number of requests',
                'The response time',
                'The error rate'
            ],
            correctAnswer: 0
        },
        {
            id: 379,
            question: 'What is a Listener in JMeter?',
            options: [
                'A component that sends requests',
                'A component that displays and saves test results',
                'A type of timer',
                'A configuration element'
            ],
            correctAnswer: 1
        },
        {
            id: 380,
            question: 'What does Ramp-up Period mean in a Thread Group?',
            options: [
                'The time to shut down threads',
                'The time taken to start all threads (gradual load increase)',
                'The total test duration',
                'The delay between requests'
            ],
            correctAnswer: 1
        },
        {
            id: 381,
            question: 'What is Spike Testing?',
            options: [
                'Testing with constant load',
                'Testing with sudden, extreme increases in load',
                'Testing with decreasing load',
                'Testing with random load'
            ],
            correctAnswer: 1
        },
        {
            id: 382,
            question: 'What is the purpose of an Assertion in JMeter?',
            options: [
                'To add delays',
                'To validate response data and verify test results',
                'To configure threads',
                'To generate reports'
            ],
            correctAnswer: 1
        },
        {
            id: 383,
            question: 'What file format does JMeter use to save test results?',
            options: [
                '.xml',
                '.csv',
                '.jtl (JMeter Test Log)',
                '.json'
            ],
            correctAnswer: 2
        },
        {
            id: 384,
            question: 'What is Response Time in performance testing?',
            options: [
                'The time between requests',
                'The time taken for the server to respond to a request',
                'The total test duration',
                'The time to start threads'
            ],
            correctAnswer: 1
        },
        {
            id: 385,
            question: 'What is a Configuration Element in JMeter?',
            options: [
                'A component that sends requests',
                'A component that configures settings for samplers (HTTP headers, cookies, etc.)',
                'A type of listener',
                'A test plan structure'
            ],
            correctAnswer: 1
        },
        {
            id: 386,
            question: 'What command runs JMeter in non-GUI mode?',
            options: [
                'jmeter -n -t testplan.jmx',
                'jmeter -gui -t testplan.jmx',
                'jmeter run testplan.jmx',
                'jmeter execute testplan.jmx'
            ],
            correctAnswer: 0
        },
        {
            id: 387,
            question: 'What is the 90th percentile response time?',
            options: [
                'The average response time',
                '90% of requests completed within this time',
                'The maximum response time',
                'The minimum response time'
            ],
            correctAnswer: 1
        },
        {
            id: 388,
            question: 'What is a Pre-Processor in JMeter?',
            options: [
                'A component that runs before the test starts',
                'A component that modifies requests before they are sent',
                'A type of listener',
                'A configuration element'
            ],
            correctAnswer: 1
        },
        {
            id: 389,
            question: 'What is Endurance Testing (Soak Testing)?',
            options: [
                'Testing with maximum load',
                'Testing application stability under normal load for extended periods',
                'Testing with minimum load',
                'Testing response times only'
            ],
            correctAnswer: 1
        },
        {
            id: 390,
            question: 'What is the purpose of a Post-Processor in JMeter?',
            options: [
                'To modify requests',
                'To extract data from responses for use in subsequent requests',
                'To configure threads',
                'To generate reports'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam21Data = {
    examId: 21,
    examName: 'Exam-21',
    title: 'Appium Test Automation with Windows',
    questions: [
        {
            id: 391,
            question: 'What is WinAppDriver used for in Appium Windows automation?',
            options: [
                'To run Android tests',
                'To automate Windows desktop applications',
                'To test web applications',
                'To manage test data'
            ],
            correctAnswer: 1
        },
        {
            id: 392,
            question: 'What capability is required to connect Appium to a Windows application?',
            options: [
                'platformName: "Windows"',
                'deviceName: "WindowsPC"',
                'app: "path/to/app.exe"',
                'All of the above'
            ],
            correctAnswer: 3
        },
        {
            id: 393,
            question: 'What command starts the WinAppDriver server?',
            options: [
                'winappdriver start',
                'WinAppDriver.exe',
                'appium --winappdriver',
                'npm start winappdriver'
            ],
            correctAnswer: 1
        },
        {
            id: 394,
            question: 'What is the default port for WinAppDriver?',
            options: [
                '4723',
                '4724',
                '4725',
                '4726'
            ],
            correctAnswer: 0
        },
        {
            id: 395,
            question: 'Which locator strategy is commonly used for Windows desktop applications in Appium?',
            options: [
                'XPath',
                'Accessibility ID',
                'Name',
                'All of the above'
            ],
            correctAnswer: 3
        },
        {
            id: 396,
            question: 'What capability specifies the Windows application to automate?',
            options: [
                'appPackage',
                'appActivity',
                'app',
                'bundleId'
            ],
            correctAnswer: 2
        },
        {
            id: 397,
            question: 'What tool is used to inspect Windows application elements?',
            options: [
                'Appium Inspector',
                'Inspect.exe (Windows SDK)',
                'UI Automation',
                'All of the above'
            ],
            correctAnswer: 3
        },
        {
            id: 398,
            question: 'What is the correct Appium capability for Windows platform name?',
            options: [
                'platformName: "Windows"',
                'platformName: "Win"',
                'platformName: "Windows10"',
                'platformName: "Desktop"'
            ],
            correctAnswer: 0
        },
        {
            id: 399,
            question: 'What command installs WinAppDriver?',
            options: [
                'npm install -g winappdriver',
                'Download from GitHub and install manually',
                'choco install winappdriver',
                'Both B and C'
            ],
            correctAnswer: 3
        },
        {
            id: 400,
            question: 'What is the purpose of the deviceName capability in Windows automation?',
            options: [
                'To specify the Windows version',
                'To identify the Windows machine/PC name',
                'To set the application name',
                'To configure the driver'
            ],
            correctAnswer: 1
        },
        {
            id: 401,
            question: 'Which Appium command connects to a Windows application?',
            options: [
                'driver = new WindowsDriver(new URL("http://127.0.0.1:4723"), capabilities)',
                'driver = new AppiumDriver(capabilities)',
                'driver = new WebDriver(capabilities)',
                'driver = new WinDriver(capabilities)'
            ],
            correctAnswer: 0
        },
        {
            id: 402,
            question: 'What is UIA (UI Automation) in Windows automation?',
            options: [
                'A testing framework',
                'Microsoft\'s accessibility framework for automating Windows applications',
                'A programming language',
                'A test reporting tool'
            ],
            correctAnswer: 1
        },
        {
            id: 403,
            question: 'What capability is used to launch an existing Windows application?',
            options: [
                'app',
                'appTopLevelWindow',
                'appArguments',
                'Both B and C'
            ],
            correctAnswer: 3
        },
        {
            id: 404,
            question: 'What is the correct way to find an element by name in Windows Appium?',
            options: [
                'driver.findElement(By.name("ButtonName"))',
                'driver.findElement(By.id("ButtonName"))',
                'driver.findElement(By.xpath("//Button[@Name=\'ButtonName\']"))',
                'All of the above'
            ],
            correctAnswer: 3
        },
        {
            id: 405,
            question: 'What must be enabled in Windows for WinAppDriver to work?',
            options: [
                'Developer Mode',
                'Windows Subsystem for Linux',
                'Hyper-V',
                'None of the above'
            ],
            correctAnswer: 0
        },
        {
            id: 406,
            question: 'What is the purpose of appTopLevelWindow capability?',
            options: [
                'To specify the main window handle of an already running application',
                'To set the application path',
                'To configure the app package',
                'To define test data'
            ],
            correctAnswer: 0
        },
        {
            id: 407,
            question: 'Which method is used to click a button in Windows Appium?',
            options: [
                'element.click()',
                'element.sendKeys(Keys.ENTER)',
                'driver.executeScript("arguments[0].click()", element)',
                'All of the above'
            ],
            correctAnswer: 3
        },
        {
            id: 408,
            question: 'What is the correct Appium server URL for Windows automation?',
            options: [
                'http://localhost:4723/wd/hub',
                'http://127.0.0.1:4723',
                'http://localhost:4724',
                'Both A and B'
            ],
            correctAnswer: 3
        },
        {
            id: 409,
            question: 'What is WinAppDriver\'s relationship with Appium?',
            options: [
                'WinAppDriver is a separate tool that Appium can use for Windows automation',
                'They are the same tool',
                'Appium replaces WinAppDriver',
                'WinAppDriver is deprecated'
            ],
            correctAnswer: 0
        },
        {
            id: 410,
            question: 'What capability is used to pass arguments to a Windows application?',
            options: [
                'appArguments',
                'appParams',
                'arguments',
                'appOptions'
            ],
            correctAnswer: 0
        }
    ]
};

export const exam22Data = {
    examId: 22,
    examName: 'Exam-22',
    title: 'SQL Fundamentals',
    questions: [
        {
            id: 411,
            question: 'What does SQL stand for?',
            options: [
                'Structured Query Language',
                'Simple Query Language',
                'Standard Query Language',
                'Sequential Query Language'
            ],
            correctAnswer: 0
        },
        {
            id: 412,
            question: 'Which SQL statement is used to retrieve data from a database?',
            options: [
                'GET',
                'SELECT',
                'FETCH',
                'RETRIEVE'
            ],
            correctAnswer: 1
        },
        {
            id: 413,
            question: 'What is the correct SQL syntax to select all columns from a table named "Users"?',
            options: [
                'SELECT * FROM Users',
                'SELECT all FROM Users',
                'GET * FROM Users',
                'SELECT Users.*'
            ],
            correctAnswer: 0
        },
        {
            id: 414,
            question: 'Which SQL clause is used to filter records?',
            options: [
                'FILTER',
                'WHERE',
                'HAVING',
                'CONDITION'
            ],
            correctAnswer: 1
        },
        {
            id: 415,
            question: 'What type of JOIN returns only matching records from both tables?',
            options: [
                'LEFT JOIN',
                'RIGHT JOIN',
                'INNER JOIN',
                'FULL OUTER JOIN'
            ],
            correctAnswer: 2
        },
        {
            id: 416,
            question: 'Which SQL function counts the number of rows?',
            options: [
                'SUM()',
                'COUNT()',
                'TOTAL()',
                'NUMBER()'
            ],
            correctAnswer: 1
        },
        {
            id: 417,
            question: 'What SQL statement is used to insert new data into a table?',
            options: [
                'ADD',
                'INSERT',
                'CREATE',
                'UPDATE'
            ],
            correctAnswer: 1
        },
        {
            id: 418,
            question: 'Which SQL clause is used to sort the result set?',
            options: [
                'SORT BY',
                'ORDER BY',
                'ARRANGE BY',
                'GROUP BY'
            ],
            correctAnswer: 1
        },
        {
            id: 419,
            question: 'What is the difference between WHERE and HAVING clauses?',
            options: [
                'WHERE filters rows, HAVING filters groups',
                'There is no difference',
                'HAVING is used before GROUP BY, WHERE after',
                'WHERE is for SELECT, HAVING is for UPDATE'
            ],
            correctAnswer: 0
        },
        {
            id: 420,
            question: 'Which SQL statement is used to modify existing data in a table?',
            options: [
                'MODIFY',
                'CHANGE',
                'UPDATE',
                'ALTER'
            ],
            correctAnswer: 2
        },
        {
            id: 421,
            question: 'What does the GROUP BY clause do?',
            options: [
                'Groups rows with the same values into summary rows',
                'Sorts the result set',
                'Filters records',
                'Joins tables'
            ],
            correctAnswer: 0
        },
        {
            id: 422,
            question: 'Which SQL aggregate function returns the average value?',
            options: [
                'AVG()',
                'MEAN()',
                'AVERAGE()',
                'MEDIAN()'
            ],
            correctAnswer: 0
        },
        {
            id: 423,
            question: 'What SQL statement is used to delete data from a table?',
            options: [
                'REMOVE',
                'DELETE',
                'DROP',
                'TRUNCATE'
            ],
            correctAnswer: 1
        },
        {
            id: 424,
            question: 'What is a PRIMARY KEY constraint?',
            options: [
                'A key that allows NULL values',
                'A unique identifier for each row in a table',
                'A foreign key reference',
                'An index on a column'
            ],
            correctAnswer: 1
        },
        {
            id: 425,
            question: 'Which JOIN returns all records from the left table and matching records from the right table?',
            options: [
                'INNER JOIN',
                'LEFT JOIN',
                'RIGHT JOIN',
                'FULL OUTER JOIN'
            ],
            correctAnswer: 1
        },
        {
            id: 426,
            question: 'What does the DISTINCT keyword do in SQL?',
            options: [
                'Sorts results',
                'Removes duplicate rows from the result set',
                'Groups data',
                'Filters records'
            ],
            correctAnswer: 1
        },
        {
            id: 427,
            question: 'Which SQL operator is used to combine multiple conditions (all must be true)?',
            options: [
                'OR',
                'AND',
                'NOT',
                'XOR'
            ],
            correctAnswer: 1
        },
        {
            id: 428,
            question: 'What is a FOREIGN KEY constraint?',
            options: [
                'A key that must be unique',
                'A key that references a PRIMARY KEY in another table',
                'A key that cannot be NULL',
                'A key used for sorting'
            ],
            correctAnswer: 1
        },
        {
            id: 429,
            question: 'Which SQL function returns the maximum value?',
            options: [
                'MAX()',
                'HIGHEST()',
                'TOP()',
                'PEAK()'
            ],
            correctAnswer: 0
        },
        {
            id: 430,
            question: 'What does the LIKE operator do in SQL?',
            options: [
                'Performs exact match',
                'Searches for a specified pattern in a column',
                'Compares two values',
                'Joins tables'
            ],
            correctAnswer: 1
        }
    ]
};

export const exam23Data = {
    examId: 23,
    examName: 'Exam-23',
    title: 'Git & Linux Fundamentals',
    questions: [
        {
            id: 431,
            question: 'What Git command is used to clone a repository?',
            options: [
                'git copy',
                'git clone',
                'git download',
                'git get'
            ],
            correctAnswer: 1
        },
        {
            id: 432,
            question: 'Which Linux command lists files and directories?',
            options: [
                'list',
                'ls',
                'dir',
                'show'
            ],
            correctAnswer: 1
        },
        {
            id: 433,
            question: 'What Git command stages files for commit?',
            options: [
                'git stage',
                'git add',
                'git commit',
                'git save'
            ],
            correctAnswer: 1
        },
        {
            id: 434,
            question: 'Which Linux command changes the current directory?',
            options: [
                'change',
                'cd',
                'move',
                'goto'
            ],
            correctAnswer: 1
        },
        {
            id: 435,
            question: 'What Git command creates a new branch?',
            options: [
                'git create branch',
                'git branch',
                'git new branch',
                'git add branch'
            ],
            correctAnswer: 1
        },
        {
            id: 436,
            question: 'Which Linux command displays the current working directory?',
            options: [
                'pwd',
                'cwd',
                'where',
                'current'
            ],
            correctAnswer: 0
        },
        {
            id: 437,
            question: 'What Git command shows the commit history?',
            options: [
                'git history',
                'git log',
                'git show',
                'git list'
            ],
            correctAnswer: 1
        },
        {
            id: 438,
            question: 'Which Linux command searches for text patterns in files?',
            options: [
                'find',
                'grep',
                'search',
                'locate'
            ],
            correctAnswer: 1
        },
        {
            id: 439,
            question: 'What Git command pushes changes to a remote repository?',
            options: [
                'git upload',
                'git push',
                'git send',
                'git upload'
            ],
            correctAnswer: 1
        },
        {
            id: 440,
            question: 'Which Linux command removes files or directories?',
            options: [
                'delete',
                'rm',
                'remove',
                'del'
            ],
            correctAnswer: 1
        },
        {
            id: 441,
            question: 'What Git command merges branches?',
            options: [
                'git combine',
                'git merge',
                'git join',
                'git unite'
            ],
            correctAnswer: 1
        },
        {
            id: 442,
            question: 'Which Linux command changes file permissions?',
            options: [
                'chmod',
                'chperm',
                'perm',
                'setperm'
            ],
            correctAnswer: 0
        },
        {
            id: 443,
            question: 'What Git command shows the status of your working directory?',
            options: [
                'git info',
                'git status',
                'git state',
                'git check'
            ],
            correctAnswer: 1
        },
        {
            id: 444,
            question: 'Which Linux command creates a new directory?',
            options: [
                'mkdir',
                'makedir',
                'newdir',
                'create'
            ],
            correctAnswer: 0
        },
        {
            id: 445,
            question: 'What Git command pulls changes from a remote repository?',
            options: [
                'git fetch',
                'git pull',
                'git download',
                'git get'
            ],
            correctAnswer: 1
        },
        {
            id: 446,
            question: 'Which Linux command displays running processes?',
            options: [
                'process',
                'ps',
                'procs',
                'list'
            ],
            correctAnswer: 1
        },
        {
            id: 447,
            question: 'What Git command discards changes in the working directory?',
            options: [
                'git undo',
                'git reset',
                'git checkout --',
                'Both B and C'
            ],
            correctAnswer: 3
        },
        {
            id: 448,
            question: 'Which Linux command displays disk usage?',
            options: [
                'disk',
                'du',
                'df',
                'Both B and C'
            ],
            correctAnswer: 3
        },
        {
            id: 449,
            question: 'What Git command shows differences between commits?',
            options: [
                'git diff',
                'git compare',
                'git difference',
                'git show-diff'
            ],
            correctAnswer: 0
        },
        {
            id: 450,
            question: 'Which Linux command kills a process by PID?',
            options: [
                'stop',
                'kill',
                'terminate',
                'end'
            ],
            correctAnswer: 1
        }
    ]
};
