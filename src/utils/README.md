# Reusable Components, Styles, and Utilities

This directory contains shared, reusable resources used across the entire website to maintain consistency and reduce code duplication.

## 📁 Structure

```
src/
├── utils/
│   ├── globalStyles.js      # Shared style objects and constants
│   ├── scrollHelpers.js     # Scroll utility functions
│   └── README.md            # This file
├── components/
│   └── shared/
│       ├── PdfDownload.js   # Reusable PDF download component
│       └── CodeBlock.js     # Reusable code block component
```

## 🎨 Shared Styles (`globalStyles.js`)

### Colors
```javascript
import { colors } from '../utils/globalStyles';
// colors.primary, colors.primaryDark, colors.textWhite, etc.
```

### Card Styles
```javascript
import { modernCardStyles } from '../utils/globalStyles';
// modernCardStyles.base, modernCardStyles.expandable, modernCardStyles.grid
```

### Code Block Styles
```javascript
import { codeBlockStyles } from '../utils/globalStyles';
// codeBlockStyles.dark, codeBlockStyles.light
```

### Checklist Grid Styles
```javascript
import { checklistGridStyles } from '../utils/globalStyles';
// checklistGridStyles.modern, checklistGridStyles.compact
```

### Checklist Link Styles
```javascript
import { checklistLinkStyles } from '../utils/globalStyles';
// checklistLinkStyles.base, checklistLinkStyles.hover
```

### Page Container Styles
```javascript
import { pageContainerStyles } from '../utils/globalStyles';
// pageContainerStyles.modern, pageContainerStyles.standard
```

### Hero Section Styles
```javascript
import { modernHeroStyles } from '../utils/globalStyles';
// modernHeroStyles.base, modernHeroStyles.title, modernHeroStyles.subtitle
```

## 🔧 Utility Functions (`scrollHelpers.js`)

### Scroll to Element
```javascript
import { scrollToElement } from '../utils/scrollHelpers';

scrollToElement('element-id', {
    highlightColor: '#fef3c7',
    highlightDuration: 2000,
    block: 'start'
});
```

### Scroll to Item (Numbered)
```javascript
import { scrollToItem } from '../utils/scrollHelpers';

scrollToItem(1, 'item'); // Scrolls to element with id="item-1"
```

### TypeScript-Specific Scroll
```javascript
import { scrollToTypeScriptItem } from '../utils/scrollHelpers';

scrollToTypeScriptItem(1); // Scrolls to element with id="ts-item-1"
```

### Git Command Scroll
```javascript
import { scrollToGitCommand } from '../utils/scrollHelpers';

scrollToGitCommand('git-1'); // Scrolls to element with id="git-1"
```

### Intro Section Scroll
```javascript
import { scrollToIntroSection } from '../utils/scrollHelpers';

scrollToIntroSection('intro-what-is'); // Scrolls to element with id="intro-what-is"
```

## 🧩 Reusable Components

### Footer Component - Reusable Template
```javascript
import Footer from '../components/footer';

// Use anywhere in your page
<Footer />
```

**Features:**
- ✅ Full-width footer that spans entire viewport
- ✅ Responsive grid layout (4 columns)
- ✅ Four main sections: Features, Courses, Resources, Legal
- ✅ Social media icons integration
- ✅ Copyright information with dynamic year
- ✅ Modern dark theme design (#0f172a)
- ✅ Automatically breaks out of container constraints
- ✅ All styles and handlers from reusable `footerStyles` template
- ✅ Consistent hover effects and animations

**Reusable Styles Template:**
All footer styles are available in `globalStyles.js` as `footerStyles`:
```javascript
import { footerStyles, footerHoverHandlers } from '../utils/globalStyles';

// Available styles:
// footerStyles.base, footerStyles.container, footerStyles.grid
// footerStyles.section, footerStyles.heading, footerStyles.headingUnderline
// footerStyles.list, footerStyles.link, footerStyles.divider
// footerStyles.bottomSection, footerStyles.copyright, footerStyles.copyrightLink

// Available handlers:
// footerHoverHandlers.linkHover, footerHoverHandlers.linkLeave
// footerHoverHandlers.copyrightLinkHover, footerHoverHandlers.copyrightLinkLeave
```

**Usage:**
The Footer component is already used globally across all pages. Simply import and use:
```javascript
import Footer from '../components/footer';

function MyPage() {
    return (
        <div>
            {/* Your page content */}
            <Footer />
        </div>
    );
}
```

**Component Structure:**
- All styles imported from `footerStyles` template in `globalStyles.js`
- All hover handlers imported from `footerHoverHandlers` in `globalStyles.js`
- Fully reusable - no inline styles
- Consistent design across entire website
- Easy to maintain - update styles in one place

### PdfDownload Component
```javascript
import PdfDownload from '../../components/shared/PdfDownload';

<PdfDownload
    pdfPath="filename.pdf"
    title="📥 Download PDF Handout"
    description="Download the complete handout"
    downloadFileName="custom-name.pdf" // Optional
/>
```

**Props:**
- `pdfPath` (required): Path to PDF file in `public/resources/` folder
- `title` (optional): Title text (default: "📥 Download PDF Handout")
- `description` (optional): Description text (default: "Download the complete handout")
- `downloadFileName` (optional): Custom download filename (defaults to pdfPath)

### CodeBlock Component
```javascript
import CodeBlock from '../../components/shared/CodeBlock';

<CodeBlock
    code={`const example = "code here";`}
    language="javascript" // Optional, for future syntax highlighting
    customStyle={{}} // Optional, override default styles
/>
```

## 📝 Usage Examples

### Example 1: Using PDF Download Component
```javascript
import PdfDownload from '../../components/shared/PdfDownload';

function MyPage() {
    return (
        <div>
            <PdfDownload
                pdfPath="My_Handout.pdf"
                title="📥 Download My Handout"
                description="Get the complete guide"
            />
        </div>
    );
}
```

### Example 2: Using Scroll Helpers
```javascript
import { scrollToItem } from '../../../utils/scrollHelpers';

function MyChecklist() {
    const handleClick = (itemNum) => {
        scrollToItem(itemNum, 'my-item');
    };

    return (
        <a onClick={() => handleClick(1)}>
            Go to Item 1
        </a>
    );
}
```

### Example 3: Using Shared Styles
```javascript
import { 
    modernCardStyles, 
    checklistGridStyles, 
    checklistLinkStyles 
} from '../../../utils/globalStyles';

function MyChecklist() {
    return (
        <div style={modernCardStyles.base}>
            <div style={checklistGridStyles.modern}>
                {/* Checklist items */}
            </div>
        </div>
    );
}
```

## ✅ Benefits

1. **Consistency**: All pages use the same styling patterns
2. **Maintainability**: Update styles in one place, affects entire site
3. **Reduced Code**: Eliminated duplicate code across multiple files
4. **Type Safety**: Centralized style objects reduce typos
5. **Reusability**: Components can be easily added to new pages

## 🔄 Refactored Files

The following files have been refactored to use shared resources:

- `src/components/api/tabs/playwright.js`
- `src/components/docs/tabs/resTypeScript.js`
- `src/components/docs/tabs/resGit.js`

## 🚀 Adding New Shared Resources

When adding new shared styles or components:

1. Add styles to `globalStyles.js` or create new component in `components/shared/`
2. Export the new resource
3. Update this README with usage examples
4. Refactor existing files to use the new resource

