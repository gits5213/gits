// Global reusable styles for the application
// This file contains common style objects used across multiple pages

// Color constants
export const colors = {
  primary: '#00416A',
  primaryDark: '#005a8a',
  primaryLight: '#006ba8',
  secondary: '#68dca8',
  textDark: '#333333',
  textLight: '#666666',
  textWhite: '#ffffff',
  bgLight: '#f8f9fa',
  bgDark: '#1a1a1a',
  borderColor: '#e0e0e0',
  linkedin: '#0077b5',
  linkedinDark: '#005885',
  facebook: '#1877f2',
  facebookDark: '#1565c0',
  github: '#333',
  githubDark: '#24292e',
  instagram: '#e4405f',
  instagramDark: '#c13584',
  youtube: '#ff0000',
  youtubeDark: '#cc0000',
  slack: '#4a154b',
  slackDark: '#350d36',
};

// Shadow styles
export const shadows = {
  sm: '0 2px 10px rgba(0,0,0,0.1)',
  md: '0 4px 15px rgba(0,0,0,0.2)',
  lg: '0 8px 32px rgba(0,0,0,0.15)',
};

// Container styles
export const containers = {
  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
  },
  medium: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  small: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
  },
};

// Hero section styles
export const heroStyles = {
  base: {
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    color: colors.textWhite,
    padding: '60px 20px',
    textAlign: 'center',
    marginBottom: '40px',
  },
  extended: {
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 50%, ${colors.primaryLight} 100%)`,
    color: colors.textWhite,
    padding: '100px 20px',
    marginBottom: '60px',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: 'clamp(36px, 5vw, 64px)',
    marginBottom: '20px',
    fontWeight: '800',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    textShadow: '0 2px 20px rgba(0,0,0,0.2)',
  },
  titleMedium: {
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 'clamp(20px, 2.5vw, 28px)',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    opacity: '0.95',
  },
};

// Section styles
export const sectionStyles = {
  base: {
    marginBottom: '40px',
  },
  large: {
    marginBottom: '60px',
  },
  title: {
    color: colors.primary,
    fontSize: '36px',
    marginBottom: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleLeft: {
    color: colors.primary,
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: 'bold',
    borderBottom: `2px solid ${colors.primary}`,
    paddingBottom: '10px',
  },
};

// Card styles
export const cardStyles = {
  base: {
    backgroundColor: colors.bgLight,
    padding: '30px',
    borderRadius: '8px',
    boxShadow: shadows.sm,
  },
  large: {
    backgroundColor: colors.bgLight,
    padding: '40px',
    borderRadius: '8px',
    boxShadow: shadows.sm,
  },
  glass: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '24px 32px',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: shadows.lg,
    transition: 'transform 0.3s ease',
  },
  primary: {
    backgroundColor: colors.primary,
    color: colors.textWhite,
    padding: '40px',
    borderRadius: '8px',
    boxShadow: shadows.md,
  },
};

// Button styles
export const buttonStyles = {
  primary: {
    display: 'inline-block',
    padding: '15px 40px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: colors.primary,
    backgroundColor: colors.textWhite,
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    boxShadow: shadows.md,
    border: 'none',
    cursor: 'pointer',
  },
  secondary: {
    display: 'inline-block',
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: '600',
    color: colors.textWhite,
    backgroundColor: colors.primary,
    textDecoration: 'none',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  },
  outline: {
    display: 'inline-block',
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: colors.primary,
    backgroundColor: colors.textWhite,
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    border: `2px solid ${colors.primary}`,
    cursor: 'pointer',
  },
};

// Text styles
export const textStyles = {
  large: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: colors.textDark,
  },
  medium: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.textDark,
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
};

// Link styles
export const linkStyles = {
  primary: {
    color: colors.primary,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontWeight: '500',
  },
  white: {
    color: colors.textWhite,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footer: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
};

// List styles
export const listStyles = {
  unstyled: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  itemSpaced: {
    marginBottom: '12px',
  },
  itemLarge: {
    marginBottom: '20px',
  },
  itemWithBullet: {
    paddingLeft: '20px',
    position: 'relative',
  },
  bullet: {
    position: 'absolute',
    left: 0,
    color: colors.primary,
    fontWeight: 'bold',
  },
};

// Grid styles
export const gridStyles = {
  twoCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    alignItems: 'center',
  },
  threeCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
};

// Social button base style
const socialButtonBase = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '10px 20px',
  color: colors.textWhite,
  textDecoration: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: '500',
  transition: 'all 0.3s ease',
};

// Social button styles
export const socialButtonStyles = {
  linkedin: {
    ...socialButtonBase,
    backgroundColor: colors.linkedin,
  },
  facebook: {
    ...socialButtonBase,
    backgroundColor: colors.facebook,
  },
  github: {
    ...socialButtonBase,
    backgroundColor: colors.github,
  },
  instagram: {
    ...socialButtonBase,
    backgroundColor: colors.instagram,
  },
  youtube: {
    ...socialButtonBase,
    backgroundColor: colors.youtube,
  },
  slack: {
    ...socialButtonBase,
    backgroundColor: colors.slack,
  },
};

// Hover handlers
export const hoverHandlers = {
  buttonPrimary: {
    onMouseEnter: (e) => {
      e.target.style.backgroundColor = '#f0f0f0';
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    },
    onMouseLeave: (e) => {
      e.target.style.backgroundColor = colors.textWhite;
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = shadows.md;
    },
  },
  buttonSecondary: {
    onMouseEnter: (e) => {
      e.target.style.backgroundColor = colors.primaryDark;
      e.target.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: (e) => {
      e.target.style.backgroundColor = colors.primary;
      e.target.style.transform = 'translateY(0)';
    },
  },
  linkFooter: {
    onMouseEnter: (e) => {
      e.target.style.color = colors.primary;
    },
    onMouseLeave: (e) => {
      e.target.style.color = '#cccccc';
    },
  },
  cardGlass: {
    onMouseEnter: (e) => {
      e.target.style.transform = 'translateY(-8px)';
    },
    onMouseLeave: (e) => {
      e.target.style.transform = 'translateY(0)';
    },
  },
};

// Spacing utilities
export const spacing = {
  mbSmall: { marginBottom: '15px' },
  mbMedium: { marginBottom: '30px' },
  mbLarge: { marginBottom: '40px' },
  mbXLarge: { marginBottom: '60px' },
  pSmall: { padding: '20px' },
  pMedium: { padding: '30px' },
  pLarge: { padding: '40px' },
};

// Code block styles
export const codeBlockStyles = {
  dark: {
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    padding: '16px',
    borderRadius: '8px',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: 'Monaco, "Courier New", monospace',
    lineHeight: '1.6',
    border: '1px solid #334155',
    marginTop: '12px',
    marginBottom: '12px',
    textAlign: 'left',
  },
  light: {
    backgroundColor: '#f4f4f4',
    color: '#333333',
    padding: '15px',
    borderRadius: '5px',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: 'Monaco, "Courier New", monospace',
    lineHeight: '1.6',
    border: '1px solid #e0e0e0',
    marginTop: '12px',
    marginBottom: '12px',
    textAlign: 'left',
  },
};

// Modern card styles (for checklist pages)
export const modernCardStyles = {
  base: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease',
    textAlign: 'left',
  },
  expandable: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb',
  },
  grid: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease',
    textAlign: 'left',
    cursor: 'pointer',
  },
};

// Section header styles
export const sectionHeaderStyles = {
  primary: {
    color: colors.primary,
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '2px solid #e5e7eb',
    textAlign: 'left',
  },
  large: {
    color: colors.primary,
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '24px',
    textAlign: 'left',
  },
};

// Item header styles (for code examples)
export const itemHeaderStyles = {
  base: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '8px',
    marginTop: '20px',
    textAlign: 'left',
  },
};

// Page container styles
export const pageContainerStyles = {
  modern: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 20px',
    backgroundColor: '#f8fafc',
    textAlign: 'left',
  },
  standard: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    width: '100%',
    marginLeft: '1em',
    height: '100vh',
    paddingLeft: '40px',
    paddingRight: '40px',
    textAlign: 'left',
    color: 'black',
  },
};

// Hero section styles (modern variant)
export const modernHeroStyles = {
  base: {
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    color: colors.textWhite,
    padding: '48px 32px',
    textAlign: 'center',
    borderRadius: '16px',
    marginBottom: '48px',
    boxShadow: '0 8px 24px rgba(0,65,106,0.3)',
  },
  title: {
    fontSize: '42px',
    marginBottom: '16px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: '18px',
    opacity: '0.95',
    fontWeight: '300',
  },
};

// PDF Download section styles
export const pdfDownloadStyles = {
  container: {
    marginBottom: '40px',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    padding: '32px',
    border: '2px dashed #cbd5e1',
    marginBottom: '24px',
  },
  title: {
    marginBottom: '16px',
    color: '#1e293b',
    fontSize: '24px',
    fontWeight: '600',
  },
  description: {
    marginBottom: '24px',
    color: '#64748b',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  button: {
    display: 'inline-block',
    backgroundColor: colors.primary,
    color: colors.textWhite,
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 65, 106, 0.2)',
    border: 'none',
    cursor: 'pointer',
  },
};

// Grid layout styles for checklists
export const checklistGridStyles = {
  modern: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '24px',
  },
  compact: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    marginTop: '16px',
  },
};

// Link styles for checklist items
export const checklistLinkStyles = {
  base: {
    color: colors.primary,
    textDecoration: 'none',
    borderBottom: '1px dotted',
    borderBottomColor: colors.primary,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  hover: {
    color: colors.primaryDark,
    borderBottomColor: colors.primaryDark,
  },
};

// Footer styles - Reusable footer component styles template
export const footerStyles = {
  base: {
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    padding: '64px 20px 32px',
    marginTop: 0,
    width: '100vw',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    boxSizing: 'border-box',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'block',
  },
  container: {
    ...containers.main,
    width: '100%',
    boxSizing: 'border-box',
  },
  grid: {
    ...gridStyles.threeCol,
    gap: '48px',
    marginBottom: '48px',
    alignItems: 'flex-start',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    textAlign: 'left',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    minWidth: 0,
    textAlign: 'left',
  },
  heading: {
    color: colors.textWhite,
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: spacing.mbMedium.marginBottom,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    position: 'relative',
    paddingBottom: '12px',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    lineHeight: '1.2',
  },
  headingUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '3px',
    backgroundColor: colors.primary,
    borderRadius: '2px',
    display: 'block',
  },
  list: {
    ...listStyles.unstyled,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  link: {
    ...linkStyles.footer,
    fontSize: '15px',
    display: 'inline-block',
    lineHeight: '1.6',
    position: 'relative',
    paddingLeft: '0',
    color: '#cbd5e1',
  },
  divider: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '32px',
    ...spacing.mbMedium,
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0,
    lineHeight: '1.6',
  },
  copyrightLink: {
    ...linkStyles.primary,
    fontSize: '14px',
  },
};

// Footer hover handlers - Reusable hover functions
export const footerHoverHandlers = {
  linkHover: (e) => {
    e.target.style.color = colors.primary;
    e.target.style.transform = 'translateX(4px)';
  },
  linkLeave: (e) => {
    e.target.style.color = '#cbd5e1';
    e.target.style.transform = 'translateX(0)';
  },
  copyrightLinkHover: (e) => {
    e.target.style.color = colors.primaryDark;
  },
  copyrightLinkLeave: (e) => {
    e.target.style.color = colors.primary;
  },
};
