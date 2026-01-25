/**
 * Shared utilities and constants for API pages
 * Provides common functions and data structures used across API pages
 */

/**
 * Framework configuration constants
 */
export const FRAMEWORK_CONFIGS = {
  playwright: {
    name: 'Playwright',
    gradientStart: '#667eea',
    gradientEnd: '#764ba2',
    githubUrl: 'https://github.com/microsoft/playwright',
    docsUrl: 'https://playwright.dev'
  },
  cypress: {
    name: 'CypressIO',
    gradientStart: '#17202A',
    gradientEnd: '#2C3E50',
    githubUrl: 'https://github.com/cypress-io/cypress',
    docsUrl: 'https://www.cypress.io/'
  },
  selenium: {
    name: 'Selenium',
    gradientStart: '#43B02A',
    gradientEnd: '#2D7D32',
    githubUrl: 'https://github.com/SeleniumHQ',
    docsUrl: 'https://www.selenium.dev/'
  },
  webdriverio: {
    name: 'WebDriverIO',
    gradientStart: '#EA5906',
    gradientEnd: '#FF6B35',
    githubUrl: 'https://github.com/webdriverio/webdriverio',
    docsUrl: 'https://webdriver.io/'
  }
};

/**
 * Common code block templates
 */
export const CODE_TEMPLATES = {
  installation: {
    npm: 'npm install {package} --save-dev',
    yarn: 'yarn add {package} --dev',
    pnpm: 'pnpm add {package} --dev'
  },
  testStructure: {
    describe: `describe('Feature Name', () => {
  it('should do something', () => {
    // test code
  });
});`
  }
};

/**
 * Helper function to generate installation commands
 */
export const getInstallationCommands = (packageName) => ({
  npm: `npm install ${packageName} --save-dev`,
  yarn: `yarn add ${packageName} --dev`,
  pnpm: `pnpm add ${packageName} --dev`
});

/**
 * Helper function to sanitize framework name for IDs/classes
 */
export const sanitizeFrameworkName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

/**
 * Common checklist sections structure
 */
export const CHECKLIST_SECTIONS = {
  structure: {
    id: 'checklist-structure',
    title: 'A) Test Structure & Organization',
    items: [
      'Use `describe()` to group tests by feature/module',
      'Use consistent naming: **Feature → Scenario → Expected Result**',
      'Keep tests **independent** (no hidden dependency on previous test)',
      'Use tags/annotations when needed (`@smoke`, `@regression`) *(optional)*'
    ]
  },
  hooks: {
    id: 'checklist-hooks',
    title: 'B) Hooks & Lifecycle',
    items: [
      'Use `before()` for **one-time setup**',
      'Use `after()` for **one-time cleanup**',
      'Use `beforeEach()` to prepare state **per test**',
      'Use `afterEach()` to capture **evidence** on failure'
    ]
  },
  quality: {
    id: 'checklist-quality',
    title: 'D) Quality & Stability',
    items: [
      'Prefer stable locators (data-cy, getByRole, etc.)',
      'Avoid arbitrary waits',
      'Ensure every test has at least **one meaningful assertion**',
      'Keep UI tests fast—use API setup when possible'
    ]
  }
};

/**
 * Default PDF download structure
 */
export const createPDFDownload = (frameworkName, pdfs) => {
  return pdfs.map(pdf => ({
    title: `${frameworkName} ${pdf.title}`,
    description: `Download the complete ${frameworkName} ${pdf.description}`,
    pdfPath: pdf.path,
    downloadFileName: pdf.filename || pdf.path
  }));
};

export default {
  FRAMEWORK_CONFIGS,
  CODE_TEMPLATES,
  getInstallationCommands,
  sanitizeFrameworkName,
  CHECKLIST_SECTIONS,
  createPDFDownload
};
