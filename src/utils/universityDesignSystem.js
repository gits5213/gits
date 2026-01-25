/**
 * Modern University Design System
 * A comprehensive design system inspired by leading student university portals
 * Features: Clean, professional, accessible, and modern design patterns
 * 
 * This design system is:
 * - Reusable: Components can be used across the entire application
 * - Scalable: Easy to extend with new components and styles
 * - Maintainable: Centralized design tokens and consistent patterns
 */

import designTokens from './designTokens'

// ============= COLOR PALETTE =============
export const universityColors = {
  // Primary Brand Colors
  primary: '#1a365d', // Deep university blue
  primaryDark: '#153450',
  primaryLight: '#2d4a6b',
  
  // Secondary Colors
  secondary: '#3b82f6', // Modern vibrant blue - student-friendly and professional
  secondaryLight: '#93c5fd',
  secondaryDark: '#2563eb',
  
  // Accent Colors
  accent: '#f77f00', // Orange/gold accent
  accentLight: '#ffb84d',
  accentDark: '#cc6600',
  
  // Success/Info Colors
  success: '#10b981',
  info: '#3b82f6',
  warning: '#f59e0b',
  error: '#f59e0b', // Use orange for errors (non-dangerous, student-friendly)
  
  // Neutral Colors
  white: '#ffffff',
  gray50: '#f8f9fa',
  gray100: '#e9ecef',
  gray200: '#dee2e6',
  gray300: '#ced4da',
  gray400: '#adb5bd',
  gray500: '#6c757d',
  gray600: '#495057',
  gray700: '#343a40',
  gray800: '#212529',
  gray900: '#0d1117',
  
  // Text Colors
  textPrimary: '#212529',
  textSecondary: '#495057',
  textTertiary: '#6c757d',
  textInverse: '#ffffff',
  
  // Background Colors
  bgPrimary: '#ffffff',
  bgSecondary: '#f8f9fa',
  bgTertiary: '#e9ecef',
  bgDark: '#1a365d',
  
  // Border Colors
  borderLight: '#e9ecef',
  borderMedium: '#dee2e6',
  borderDark: '#ced4da',
  
  // Social Media Colors
  linkedin: '#0077b5',
  facebook: '#1877f2',
  twitter: '#1da1f2',
  instagram: '#e4405f',
  youtube: '#3b82f6', // Modern blue instead of red (student-friendly)
  github: '#24292e',
}

// Export colors as 'colors' for backward compatibility
export const colors = universityColors

// ============= TYPOGRAPHY =============
// Using design tokens for consistency
export const typography = {
  // Font Families
  fontPrimary: designTokens.typography.fontFamily.primary,
  fontSecondary: designTokens.typography.fontFamily.secondary,
  fontMono: designTokens.typography.fontFamily.mono,
  
  // Font Sizes (from design tokens)
  fontSize: designTokens.typography.fontSize,
  
  // Font Weights (from design tokens)
  fontWeight: designTokens.typography.fontWeight,
  
  // Line Heights (from design tokens)
  lineHeight: designTokens.typography.lineHeight,
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
}

// ============= SPACING SYSTEM =============
// Using design tokens for consistency
export const spacing = designTokens.spacing

// ============= SHADOWS =============
// Using design tokens for consistency
export const shadows = designTokens.shadows

// ============= BORDER RADIUS =============
// Using design tokens for consistency
export const borderRadius = designTokens.borderRadius

// ============= BREAKPOINTS =============
// Using design tokens for consistency
export const breakpoints = designTokens.breakpoints

// ============= TRANSITIONS =============
// Using design tokens for consistency
export const transitions = designTokens.transitions

// ============= Z-INDEX SCALE =============
// Using design tokens for consistency
export const zIndex = designTokens.zIndex

// ============= COMPONENT STYLES =============

// Button Styles
export const buttonStyles = {
  primary: {
    backgroundColor: universityColors.primary,
    color: universityColors.white,
    padding: `${spacing[3]} ${spacing[6]}`,
    borderRadius: borderRadius.md,
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.base,
    border: 'none',
    cursor: 'pointer',
    transition: transitions.base,
    boxShadow: shadows.sm,
    '&:hover': {
      backgroundColor: universityColors.primaryDark,
      boxShadow: shadows.md,
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
  secondary: {
    backgroundColor: universityColors.secondary,
    color: universityColors.white,
    padding: `${spacing[3]} ${spacing[6]}`,
    borderRadius: borderRadius.md,
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.base,
    border: 'none',
    cursor: 'pointer',
    transition: transitions.base,
    '&:hover': {
      backgroundColor: universityColors.secondaryDark,
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: universityColors.primary,
    padding: `${spacing[3]} ${spacing[6]}`,
    borderRadius: borderRadius.md,
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.base,
    border: `2px solid ${universityColors.primary}`,
    cursor: 'pointer',
    transition: transitions.base,
    '&:hover': {
      backgroundColor: universityColors.primary,
      color: universityColors.white,
    },
  },
}

// Card Styles
export const cardStyles = {
  base: {
    backgroundColor: universityColors.white,
    borderRadius: borderRadius.xl,
    padding: spacing[6],
    boxShadow: shadows.md,
    border: `1px solid ${universityColors.borderLight}`,
    transition: transitions.base,
    '&:hover': {
      boxShadow: shadows.lg,
      transform: 'translateY(-2px)',
    },
  },
  elevated: {
    backgroundColor: universityColors.white,
    borderRadius: borderRadius.xl,
    padding: spacing[8],
    boxShadow: shadows.xl,
    border: `1px solid ${universityColors.borderLight}`,
  },
  outlined: {
    backgroundColor: universityColors.white,
    borderRadius: borderRadius.xl,
    padding: spacing[6],
    border: `2px solid ${universityColors.borderMedium}`,
    boxShadow: shadows.sm,
  },
}

// Input Styles
export const inputStyles = {
  base: {
    width: '100%',
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    color: universityColors.textPrimary,
    backgroundColor: universityColors.white,
    border: `1px solid ${universityColors.borderMedium}`,
    borderRadius: borderRadius.md,
    transition: transitions.base,
    '&:focus': {
      outline: 'none',
      borderColor: universityColors.primary,
      boxShadow: `0 0 0 3px ${universityColors.primary}20`,
    },
  },
}

// ============= LAYOUT STYLES =============
export const layoutStyles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: `0 ${spacing[5]}`,
  },
  containerMedium: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${spacing[5]}`,
  },
  containerSmall: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: `0 ${spacing[5]}`,
  },
  section: {
    padding: `${spacing[16]} 0`,
  },
  sectionSmall: {
    padding: `${spacing[12]} 0`,
  },
}

// ============= HEADER STYLES =============
export const headerStyles = {
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: zIndex.fixed,
    backgroundColor: universityColors.white,
    boxShadow: shadows.sm,
    borderBottom: `1px solid ${universityColors.borderLight}`,
  },
  navLink: {
    color: universityColors.textPrimary,
    textDecoration: 'none',
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.fontSize.base,
    padding: `${spacing[2]} ${spacing[4]}`,
    borderRadius: borderRadius.md,
    transition: transitions.base,
    '&:hover': {
      color: universityColors.primary,
      backgroundColor: universityColors.gray50,
    },
  },
  navLinkActive: {
    color: universityColors.primary,
    fontWeight: typography.fontWeight.semibold,
    backgroundColor: `${universityColors.primary}10`,
  },
}

// ============= FOOTER STYLES =============
export const footerStyles = {
  base: {
    backgroundColor: universityColors.gray900,
    color: universityColors.gray300,
    padding: `${spacing[16]} 0 ${spacing[8]} 0`,
    marginTop: spacing[20],
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: `0 ${spacing[5]}`,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: spacing[8],
    marginBottom: spacing[12],
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    color: universityColors.white,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing[4],
    paddingBottom: spacing[2],
    borderBottom: `2px solid ${universityColors.primary}`,
  },
  link: {
    color: universityColors.gray300,
    textDecoration: 'none',
    fontSize: typography.fontSize.sm,
    padding: `${spacing[1]} 0`,
    transition: transitions.base,
    display: 'inline-block',
    '&:hover': {
      color: universityColors.white,
      paddingLeft: spacing[2],
    },
  },
  divider: {
    borderTop: `1px solid ${universityColors.gray700}`,
    paddingTop: spacing[8],
    marginTop: spacing[8],
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing[4],
  },
  copyright: {
    fontSize: typography.fontSize.sm,
    color: universityColors.gray400,
    margin: 0,
  },
  socialLinks: {
    display: 'flex',
    gap: spacing[3],
  },
}

// Export all styles as a single object for convenience
export default {
  colors: universityColors,
  typography,
  spacing,
  shadows,
  borderRadius,
  breakpoints,
  transitions,
  zIndex,
  buttonStyles,
  cardStyles,
  inputStyles,
  layoutStyles,
  headerStyles,
  footerStyles,
}
