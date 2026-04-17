/**
 * Playwright syntax reference sections (documentation copy for UI).
 * Used by PlaywrightSyntaxReference.js
 */
export const PLAYWRIGHT_SYNTAX_SECTIONS = [
  {
    id: 'imports',
    title: '1. Import and basic test structure',
    code: `import { test, expect } from '@playwright/test';

test('test name', async ({ page }) => {
  // test steps
});`,
  },
  {
    id: 'hooks',
    title: '2. Hooks',
    code: `test.beforeAll(async () => {});
test.afterAll(async () => {});
test.beforeEach(async ({ page }) => {});
test.afterEach(async ({ page }) => {});`,
  },
  {
    id: 'grouping',
    title: '3. Grouping tests',
    code: `test.describe('Smoke Suite', () => {
  test('login test', async ({ page }) => {});
});

test.describe.only('Only this suite', () => {});
test.describe.skip('Skip this suite', () => {});`,
  },
  {
    id: 'running',
    title: '4. Running specific tests',
    code: `test.only('run only this test', async ({ page }) => {});
test.skip('skip this test', async ({ page }) => {});
test.fixme('mark as fixme', async ({ page }) => {});
test.fail('expected to fail', async ({ page }) => {});
test.slow('mark test as slow', async ({ page }) => {});`,
  },
  {
    id: 'navigation',
    title: '5. Navigation',
    code: `await page.goto('https://example.com');
await page.reload();
await page.goBack();
await page.goForward();
await page.waitForURL('**/dashboard');`,
  },
  {
    id: 'browser-page',
    title: '6. Browser / page actions',
    code: `await page.close();
await page.bringToFront();
const title = await page.title();
const url = page.url();
const content = await page.content();`,
  },
  {
    id: 'locators',
    title: '7. Locators',
    code: `page.locator('css=button');
page.locator('//button');
page.getByText('Login');
page.getByRole('button', { name: 'Login' });
page.getByLabel('Email');
page.getByPlaceholder('Enter email');
page.getByTestId('submit-btn');
page.getByAltText('Logo');
page.getByTitle('Close');`,
  },
  {
    id: 'chaining',
    title: '8. Locator chaining and filtering',
    code: `page.locator('.card').locator('button');
page.locator('.item').first();
page.locator('.item').last();
page.locator('.item').nth(2);
page.locator('.row').filter({ hasText: 'Product 1' });
page.locator('.row').filter({ has: page.locator('button') });`,
  },
  {
    id: 'page-actions',
    title: '9. Click and input actions (page)',
    code: `await page.click('text=Login');
await page.fill('#username', 'admin');
await page.type('#search', 'Playwright');
await page.press('#search', 'Enter');
await page.check('#rememberMe');
await page.uncheck('#subscribe');
await page.selectOption('#country', 'USA');
await page.setInputFiles('#upload', 'tests/test-data/file.pdf');
await page.clearCookies();`,
  },
  {
    id: 'locator-actions',
    title: '10. Locator actions',
    code: `await locator.click();
await locator.dblclick();
await locator.fill('text');
await locator.clear();
await locator.type('hello');
await locator.press('Enter');
await locator.check();
await locator.uncheck();
await locator.hover();
await locator.focus();
await locator.scrollIntoViewIfNeeded();
await locator.selectOption('option1');
await locator.setInputFiles('file.pdf');`,
  },
  {
    id: 'keyboard-mouse',
    title: '11. Keyboard and mouse',
    code: `await page.keyboard.type('Hello');
await page.keyboard.press('Enter');
await page.keyboard.down('Control');
await page.keyboard.up('Control');

await page.mouse.move(100, 200);
await page.mouse.click(100, 200);
await page.mouse.dblclick(100, 200);
await page.mouse.down();
await page.mouse.up();
await page.mouse.wheel(0, 500);`,
  },
  {
    id: 'assertions',
    title: '12. Assertions',
    code: `await expect(page).toHaveURL(/dashboard/);
await expect(page).toHaveTitle(/Home/);

await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
await expect(locator).toBeEditable();
await expect(locator).toHaveText('Welcome');
await expect(locator).toContainText('Welcome');
await expect(locator).toHaveValue('admin');
await expect(locator).toHaveAttribute('type', 'text');
await expect(locator).toHaveCount(3);
await expect(locator).toHaveClass(/active/);`,
  },
  {
    id: 'waiting',
    title: '13. Waiting',
    code: `await page.waitForTimeout(2000);
await page.waitForLoadState('load');
await page.waitForLoadState('networkidle');
await page.waitForSelector('#login');
await page.waitForEvent('popup');
await page.waitForResponse('**/api/users');
await page.waitForRequest('**/api/login');`,
  },
  {
    id: 'dialogs',
    title: '14. Handling alerts',
    code: `page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

page.on('dialog', async dialog => {
  await dialog.dismiss();
});`,
  },
  {
    id: 'popups',
    title: '15. Multiple pages / popups',
    code: `const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('text=Open New Tab')
]);

await newPage.waitForLoadState();`,
  },
  {
    id: 'frames',
    title: '16. Frames / iframe',
    code: `const frame = page.frame({ name: 'frameName' });
await frame?.click('text=Submit');

const frameLocator = page.frameLocator('#my-frame');
await frameLocator.locator('button').click();`,
  },
  {
    id: 'screenshots',
    title: '17. Screenshots and videos',
    code: `await page.screenshot({ path: 'screenshot.png' });
await locator.screenshot({ path: 'element.png' });`,
  },
  {
    id: 'download',
    title: '18. File download',
    code: `const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('text=Download')
]);

await download.saveAs('downloads/report.pdf');`,
  },
  {
    id: 'context',
    title: '19. Browser context',
    code: `const context = await browser.newContext();
const page = await context.newPage();
await context.close();
await context.clearCookies();`,
  },
  {
    id: 'api-request',
    title: '20. API testing syntax',
    code: `const response = await page.request.get('https://api.example.com/users');
const postResponse = await page.request.post('https://api.example.com/login', {
  data: { username: 'admin', password: '1234' }
});

expect(response.ok()).toBeTruthy();
const body = await response.json();`,
  },
  {
    id: 'fixtures',
    title: '21. Fixtures',
    code: `test('fixture example', async ({ page, context, request }) => {
  // use built-in fixtures
});`,
  },
  {
    id: 'variables',
    title: '22. Test data / variables',
    code: `const username = 'admin';
let token: string;`,
  },
  {
    id: 'evaluate',
    title: '23. Evaluate JavaScript in browser',
    code: `await page.evaluate(() => document.title);
await page.evaluate(() => {
  localStorage.setItem('token', '123');
});`,
  },
  {
    id: 'getters',
    title: '24. Getting text and attributes',
    code: `const text = await locator.textContent();
const innerText = await locator.innerText();
const value = await locator.inputValue();
const attr = await locator.getAttribute('href');
const isVisible = await locator.isVisible();
const count = await locator.count();`,
  },
  {
    id: 'config',
    title: '25. Useful configuration syntax',
    code: `import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  retries: 1,
  workers: 2,
});`,
  },
  {
    id: 'cli',
    title: '26. Common CLI syntax',
    code: `npx playwright test
npx playwright test tests/login.spec.ts
npx playwright test --headed
npx playwright test --project=chromium
npx playwright test --grep "login"
npx playwright show-report
npx playwright codegen https://example.com`,
  },
  {
    id: 'full-example',
    title: '27. Example full test',
    code: `import { test, expect } from '@playwright/test';

test('valid login', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByText('Welcome')).toBeVisible();
});`,
  },
];
