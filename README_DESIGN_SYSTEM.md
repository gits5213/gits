# Modern University Design System

## Overview

This design system provides a comprehensive, reusable, scalable, and maintainable foundation for the GITS University student portal. It follows Next.js best practices and modern university portal design patterns.

## Architecture

### Design Tokens (`src/utils/designTokens.js`)
Centralized design values including:
- Spacing scale (4px grid system)
- Typography scale
- Color palette
- Border radius
- Shadows
- Transitions
- Breakpoints
- Z-index scale

### Design System (`src/utils/universityDesignSystem.js`)
High-level design system that uses design tokens and provides:
- Color constants
- Typography system
- Component styles (buttons, cards, inputs, layouts)
- Header and footer styles

### UI Components (`src/components/ui/`)
Reusable, composable components:
- **Button**: Multiple variants (primary, secondary, outline, ghost, danger)
- **Card**: Base card component with variants
- **Container**: Responsive containers with consistent max-widths
- **Section**: Consistent section spacing and layout
- **PageHeader**: Page headers with title, subtitle, breadcrumbs, actions
- **Grid**: Responsive grid layouts
- **CourseCard**: Specialized card for course listings

### Layout Components (`src/components/layout/`)
Layout-specific components:
- **FooterSection**: Individual footer sections

## Usage Examples

### Using UI Components

```jsx
import { Button, Card, Container, Section, PageHeader, Grid, CourseCard } from '@/src/components/ui'

// Button
<Button variant="primary" size="lg">Get Started</Button>

// Card
<Card variant="elevated" hoverable>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>

// Container
<Container size="main">
  <h1>Page Content</h1>
</Container>

// Section
<Section variant="default" backgroundColor="#f8f9fa">
  <h2>Section Title</h2>
</Section>

// PageHeader
<PageHeader
  title="Page Title"
  subtitle="Page subtitle"
  variant="hero"
/>

// Grid
<Grid cols={{ default: 1, sm: 2, md: 3 }} gap="2rem">
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</Grid>

// CourseCard
<CourseCard
  courseName="Web Development"
  techStack="HTML, CSS, JavaScript, React"
  image={webDevImage}
  link="/courses/webdevelopment"
  category="Development"
/>
```

### Using Design System

```jsx
import { colors, spacing, typography, shadows, borderRadius } from '@/src/utils/universityDesignSystem'

const customStyle = {
  color: colors.primary,
  padding: spacing[6],
  fontSize: typography.fontSize.xl,
  boxShadow: shadows.md,
  borderRadius: borderRadius.lg,
}
```

## Benefits

### Reusability
- Components can be used across the entire application
- Consistent styling and behavior
- Easy to import and use

### Scalability
- Easy to extend with new components
- Design tokens make global changes simple
- Component-based architecture supports growth

### Maintainability
- Centralized design values
- Single source of truth for styles
- Consistent patterns throughout
- Easy to update and refactor

## Component Guidelines

### Creating New Components

1. Use design tokens from `designTokens.js`
2. Follow existing component patterns
3. Make components composable and flexible
4. Export from `src/components/ui/index.js`
5. Add TypeScript types if needed
6. Document usage examples

### Styling Guidelines

1. Use design system values (colors, spacing, typography)
2. Prefer composition over customization
3. Use inline styles for dynamic values
4. Keep components focused and single-purpose
5. Make components responsive by default

## File Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Container.js
│   │   ├── Section.js
│   │   ├── PageHeader.js
│   │   ├── Grid.js
│   │   ├── CourseCard.js
│   │   └── index.js
│   └── layout/          # Layout components
│       ├── FooterSection.js
│       └── index.js
├── utils/
│   ├── designTokens.js          # Design tokens
│   └── universityDesignSystem.js # Design system
```

## Best Practices

1. **Always use design tokens** - Don't hardcode values
2. **Compose components** - Build complex UIs from simple components
3. **Keep components focused** - One responsibility per component
4. **Make it accessible** - Include proper ARIA labels and keyboard navigation
5. **Test responsiveness** - Ensure components work on all screen sizes
6. **Document usage** - Add JSDoc comments and examples

## Future Enhancements

- [ ] Add TypeScript types
- [ ] Create Storybook documentation
- [ ] Add unit tests for components
- [ ] Create more specialized components (FormInput, Modal, etc.)
- [ ] Add dark mode support
- [ ] Create component variants generator
