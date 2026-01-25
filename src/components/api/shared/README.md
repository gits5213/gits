# API Pages Shared Components

This directory contains reusable, scalable, and maintainable components for all API framework pages (Playwright, Cypress, Selenium, WebDriverIO, etc.).

## Components

### 1. APIHero
Modern hero section with framework title, subtitle, and logo.

```jsx
import { APIHero } from '../shared';

<APIHero
  title="CypressIO Framework"
  subtitle="Fast, Easy and Reliable Testing for Anything That Runs in a Browser"
  logo={CypressLogo}
  gradientStart="#17202A"
  gradientEnd="#2C3E50"
  logoAlt="Cypress Logo"
/>
```

### 2. APILinks
GitHub and documentation links with consistent styling.

```jsx
import { APILinks } from '../shared';

<APILinks
  githubUrl="https://github.com/cypress-io/cypress"
  docsUrl="https://www.cypress.io/"
  frameworkName="Cypress"
/>
```

### 3. APICollapsibleSection
Collapsible section with expand/collapse functionality.

```jsx
import { APICollapsibleSection, useCollapsible } from '../shared';

const { isExpanded, toggle } = useCollapsible(false);

<APICollapsibleSection
  title="Getting Started"
  isExpanded={isExpanded}
  onToggle={toggle}
  borderColor="#17202A"
>
  {/* Content here */}
</APICollapsibleSection>
```

### 4. APICodeBlock
Code block with consistent styling.

```jsx
import { APICodeBlock } from '../shared';

<APICodeBlock
  code={`npm install cypress --save-dev`}
  variant="dark"
/>
```

### 5. APIChecklistGrid
Checklist items in a modern grid layout.

```jsx
import { APIChecklistGrid } from '../shared';

const sections = [
  {
    id: 'structure',
    title: 'A) Test Structure & Organization',
    items: ['Item 1', 'Item 2']
  }
];

<APIChecklistGrid sections={sections} />
```

### 6. APIPDFDownload
PDF download section with multiple download options.

```jsx
import { APIPDFDownload } from '../shared';

const downloads = [
  {
    title: 'Cypress Commands & Best Practices Handout',
    description: 'Download the complete Cypress JavaScript Commands & Best Practices handout',
    pdfPath: 'Cypress_Commands_Best_Practices_Handout_2026.pdf',
    downloadFileName: 'Cypress_Commands_Best_Practices_Handout_2026.pdf'
  }
];

<APIPDFDownload downloads={downloads} />
```

### 7. APISectionContent
Structured content with subtitle, definition, and code.

```jsx
import { APISectionContent } from '../shared';

<APISectionContent
  subtitle="1.1 Installation"
  definition="Install Cypress using npm, yarn, or pnpm"
  code={`npm install cypress --save-dev`}
/>
```

## Hooks

### useCollapsible
Custom hook for managing collapsible state.

```jsx
import { useCollapsible } from '../shared';

const { isExpanded, toggle, expand, collapse } = useCollapsible(false);
```

## Utilities

### apiPageUtils
Shared utilities and constants.

```jsx
import { 
  FRAMEWORK_CONFIGS, 
  getInstallationCommands,
  CHECKLIST_SECTIONS 
} from '../shared';

// Get framework config
const config = FRAMEWORK_CONFIGS.cypress;

// Get installation commands
const commands = getInstallationCommands('cypress');

// Use checklist sections
const structureSection = CHECKLIST_SECTIONS.structure;
```

## Example: Complete API Page

```jsx
import React from 'react';
import {
  APIHero,
  APILinks,
  APICollapsibleSection,
  APICodeBlock,
  APIPDFDownload,
  APISectionContent,
  useCollapsible,
  FRAMEWORK_CONFIGS
} from '../shared';
import CypressLogo from '../../../images/tabs/CypressLogo.png';

const CypressPage = () => {
  const gettingStarted = useCollapsible(false);
  const checklist = useCollapsible(false);
  const config = FRAMEWORK_CONFIGS.cypress;

  const downloads = [
    {
      title: 'Commands & Best Practices Handout',
      description: 'Complete Cypress JavaScript Commands & Best Practices',
      pdfPath: 'Cypress_Commands_Best_Practices_Handout_2026.pdf',
      downloadFileName: 'Cypress_Commands_Best_Practices_Handout_2026.pdf'
    }
  ];

  return (
    <div>
      <APIHero
        title="CypressIO Framework"
        subtitle="Fast, Easy and Reliable Testing"
        logo={CypressLogo}
        gradientStart={config.gradientStart}
        gradientEnd={config.gradientEnd}
      />

      <APILinks
        githubUrl={config.githubUrl}
        docsUrl={config.docsUrl}
        frameworkName={config.name}
      />

      <APIPDFDownload downloads={downloads} />

      <APICollapsibleSection
        title="Getting Started"
        isExpanded={gettingStarted.isExpanded}
        onToggle={gettingStarted.toggle}
      >
        <APISectionContent
          subtitle="Installation"
          definition="Install Cypress using npm"
          code={`npm install cypress --save-dev`}
        />
      </APICollapsibleSection>
    </div>
  );
};
```

## Benefits

1. **Consistency**: All API pages use the same components and styling
2. **Maintainability**: Update once, apply everywhere
3. **Scalability**: Easy to add new API pages
4. **Reusability**: Components can be used across different pages
5. **Type Safety**: Clear prop interfaces for each component
