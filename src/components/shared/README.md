# Shared Components

Reusable components for code display with copy functionality.

## Components

### `<CodeBlock />`
Display code blocks (pre elements) with copy functionality.

**Props:**
- `code` (string, required) - The code content to display
- `variant` (string, optional) - Style variant: `'dark'` (default) or `'light'`
- `customStyle` (object, optional) - Custom styles to override defaults
- `showCopy` (boolean, optional) - Whether to show copy button (default: `true`)

**Example:**
```jsx
import { CodeBlock } from '../../components/shared';

<CodeBlock code={`const example = 'code';`} />
```

### `<InlineCode />`
Display inline code elements with copy functionality.

**Props:**
- `children` (string, required) - The code text to display
- `customStyle` (object, optional) - Custom styles to override defaults
- `showCopy` (boolean, optional) - Whether to show copy button (default: `true`)

**Example:**
```jsx
import { InlineCode } from '../../components/shared';

<InlineCode>getByRole()</InlineCode>
```

### `<CodeBlockWithCopy />`
Low-level component used by CodeBlock and InlineCode. Use CodeBlock or InlineCode instead for easier usage.

## Usage Examples

### Code Blocks
```jsx
import { CodeBlock } from '../../components/shared';

<CodeBlock code={`const example = 'code';
console.log(example);`} />
```

### Inline Code
```jsx
import { InlineCode } from '../../components/shared';

<p>Use <InlineCode>getByRole()</InlineCode> for better selectors.</p>
```

### Without Copy Functionality
```jsx
<CodeBlock code="example" showCopy={false} />
<InlineCode showCopy={false}>example</InlineCode>
```

### Custom Styles
```jsx
<CodeBlock 
  code="example" 
  variant="light"
  customStyle={{ fontSize: '16px' }}
/>
```

## Features

- ✅ Copy to clipboard functionality
- ✅ Copy icon appears on hover
- ✅ Visual feedback ("Copied!" message)
- ✅ Fallback for older browsers
- ✅ Consistent styling across the application
- ✅ Easy to use and reusable
