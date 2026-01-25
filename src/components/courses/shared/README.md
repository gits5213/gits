# Course Page Shared Components

This directory contains reusable, scalable, and maintainable components for course pages. These components follow a consistent design pattern and can be easily customized for different courses.

## Components

### 1. CourseHero
Hero section component for course pages.

**Props:**
- `title` (string, required): Main course title
- `subtitle` (string, required): Course subtitle/description

**Example:**
```jsx
<CourseHero 
    title="Security Testing & Penetration Testing Course Outline"
    subtitle="Master security testing methodologies and penetration testing techniques"
/>
```

### 2. CourseIntroduction
Introduction section component.

**Props:**
- `programTitle` (string, required): Program title
- `paragraphs` (Array<string|JSX>, required): Array of paragraph content

**Example:**
```jsx
<CourseIntroduction 
    programTitle="Security Testing & Penetration Testing Program"
    paragraphs={[
        "Our comprehensive program...",
        <p>You'll master <strong>tools</strong>...</p>
    ]}
/>
```

### 3. CourseROI
ROI section component.

**Props:**
- `title` (string, required): ROI section title
- `paragraphs` (Array<string|JSX>, required): Array of paragraph content

**Example:**
```jsx
<CourseROI 
    title="Return on Investment (ROI) for Security Testing"
    paragraphs={[
        "Security testing is critical...",
        "Graduates typically see a 300-500% ROI..."
    ]}
/>
```

### 4. LearningPathOverview
Learning path visual diagram component.

**Props:**
- `modules` (Array<Array<Object>>, required): Array of module groups, each containing module objects with:
  - `number` (string): Module number (e.g., "Module 1")
  - `title` (string): Module title
  - `isHighlighted` (boolean, optional): Whether to highlight this module
- `aiIntegration` (Array<Object>, optional): AI integration items with:
  - `modules` (string): Module range (e.g., "Modules 1-2")
  - `title` (string): AI integration title
- `roiBenefits` (Array<Object>, optional): ROI benefit items with:
  - `icon` (string): Emoji icon
  - `title` (string): Benefit title
  - `description` (string): Benefit description
- `legendText` (string, optional): Legend text

**Example:**
```jsx
<LearningPathOverview 
    modules={[
        [
            { number: "Module 1", title: "Security Fundamentals" },
            { number: "Module 2", title: "OWASP ZAP & Burp Suite" }
        ],
        [
            { number: "Module 3", title: "Network Security", isHighlighted: true }
        ]
    ]}
    aiIntegration={[
        { modules: "Modules 1-2", title: "AI-Assisted Security Analysis" }
    ]}
    roiBenefits={[
        { icon: "💰", title: "Entry-Level", description: "Earn $70K-95K" }
    ]}
    legendText="Build from fundamentals to advanced topics"
/>
```

### 5. CourseModule
Individual module component with learning outcomes, AI topics, and earning opportunities.

**Props:**
- `moduleNumber` (string, required): Module number (e.g., "Module 1")
- `moduleTitle` (string, required): Module title
- `topics` (Array<string|JSX>, required): Array of topic items
- `learningOutcomes` (Array<string>, optional): Array of learning outcomes
- `aiTopics` (Array<Object>, optional): AI topics with:
  - `label` (string): Topic label
  - `description` (string): Topic description
- `earningOpportunities` (Array<Object>, optional): Earning opportunities with:
  - `label` (string): Opportunity label
  - `description` (string): Opportunity description

**Example:**
```jsx
<CourseModule 
    moduleNumber="Module 1"
    moduleTitle="Security Testing Fundamentals"
    topics={[
        "Introduction to Security Testing: Security testing vs. functional testing",
        "Security Testing Types: Vulnerability scanning, penetration testing"
    ]}
    learningOutcomes={[
        "Understand security testing fundamentals",
        "Master OWASP Top 10"
    ]}
    aiTopics={[
        { label: "AI Security Planning", description: "Using GPT, Claude, and Copilot" }
    ]}
    earningOpportunities={[
        { label: "Junior Security Tester", description: "Entry-level positions ($70-85K annually)" }
    ]}
/>
```

### 6. WhatYoullLearn
"What You'll Learn" section component.

**Props:**
- `title` (string, optional): Section title (default: "What You'll Learn")
- `categories` (Array<Object>, required): Array of category objects with:
  - `title` (string): Category title
  - `items` (Array<string>): Array of items

**Example:**
```jsx
<WhatYoullLearn 
    categories={[
        {
            title: "Security Fundamentals",
            items: [
                "OWASP Top 10 & Security Risks",
                "Security Testing Methodologies"
            ]
        },
        {
            title: "Tools & Techniques",
            items: [
                "OWASP ZAP & Burp Suite",
                "Nmap & Wireshark"
            ]
        }
    ]}
/>
```

### 7. CourseCallToAction
Call to action section component.

**Props:**
- `title` (string, required): CTA title
- `description` (string, required): CTA description
- `buttonText` (string, optional): Button text (default: "Enroll Now")
- `enrollUrl` (string, optional): Enrollment URL (default: "https://gitsics.com/enroll/")

**Example:**
```jsx
<CourseCallToAction 
    title="Ready to Start Your Security Testing Journey?"
    description="Join our comprehensive program..."
    buttonText="Enroll Now"
/>
```

### 8. CoursePageLayout
Complete course page layout component that combines all components.

**Props:**
- `courseData` (Object, required): Course data object containing:
  - `hero`: Hero section data
  - `introduction`: Introduction section data
  - `roi`: ROI section data
  - `learningPath`: Learning path data
  - `modules`: Array of module data
  - `whatYoullLearn`: What you'll learn data
  - `callToAction`: Call to action data

## Usage Example

### Option 1: Using Individual Components
```jsx
import React from 'react';
import { 
    CourseHero, 
    CourseIntroduction, 
    CourseROI,
    LearningPathOverview,
    CourseModule,
    WhatYoullLearn,
    CourseCallToAction
} from '../shared';

const MyCourse = () => {
    return (
        <div className='page-tab-body' style={{ paddingBottom: '100px' }}>
            <CourseHero 
                title="My Course Title"
                subtitle="Course description"
            />
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <CourseIntroduction 
                    programTitle="My Program"
                    paragraphs={["Paragraph 1", "Paragraph 2"]}
                />
                {/* ... other components ... */}
            </div>
        </div>
    );
};
```

### Option 2: Using CoursePageLayout (Recommended)
```jsx
import React from 'react';
import { CoursePageLayout } from '../shared';

const MyCourse = () => {
    const courseData = {
        hero: {
            title: "My Course Title",
            subtitle: "Course description"
        },
        introduction: {
            programTitle: "My Program",
            paragraphs: ["Paragraph 1", "Paragraph 2"]
        },
        // ... other data
    };

    return <CoursePageLayout courseData={courseData} />;
};
```

## Benefits

1. **Consistency**: All course pages follow the same structure and styling
2. **Maintainability**: Changes to design/structure only need to be made in one place
3. **Scalability**: Easy to add new course pages by providing data
4. **Reusability**: Components can be used individually or together
5. **Type Safety**: Clear prop definitions make it easy to understand what data is needed

## Migration Guide

To migrate an existing course page:

1. Extract course-specific data into a data object
2. Replace hardcoded JSX with component imports
3. Map data to component props
4. Test the page to ensure it renders correctly

See the example refactored course page for reference.
