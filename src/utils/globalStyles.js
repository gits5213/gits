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

// Inline code styles (for <code> elements)
export const inlineCodeStyles = {
  base: {
    fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    fontSize: '0.9em',
    padding: '2px 6px',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: '#667eea',
    fontWeight: '500',
    display: 'inline',
    lineHeight: '1.5',
  },
};

// Code block styles (for <pre> elements)
export const codeBlockStyles = {
  dark: {
    backgroundColor: '#f8fafc',
    color: '#334155',
    padding: '20px',
    borderRadius: '12px',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    lineHeight: '1.7',
    border: '1px solid #e2e8f0',
    marginTop: '16px',
    marginBottom: '16px',
    textAlign: 'left',
    boxShadow: 'none',
    display: 'block',
    whiteSpace: 'pre',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  },
  light: {
    backgroundColor: '#f8fafc',
    color: '#334155',
    padding: '15px',
    borderRadius: '5px',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    lineHeight: '1.6',
    border: '1px solid #e2e8f0',
    marginTop: '12px',
    marginBottom: '12px',
    textAlign: 'left',
    display: 'block',
    whiteSpace: 'pre',
  },
};

// Modern card styles (for checklist pages)
export const modernCardStyles = {
  base: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '28px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'left',
    position: 'relative',
    overflow: 'hidden',
  },
  expandable: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '28px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
  },
  grid: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'left',
    cursor: 'pointer',
  },
};

// Section header styles
export const sectionHeaderStyles = {
  primary: {
    color: '#1e293b',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '20px',
    marginTop: '8px',
    paddingBottom: '16px',
    borderBottom: '3px solid #667eea',
    textAlign: 'left',
    letterSpacing: '-0.02em',
    lineHeight: '1.3',
  },
  large: {
    color: '#1e293b',
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '28px',
    textAlign: 'left',
    letterSpacing: '-0.02em',
    lineHeight: '1.3',
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
    padding: '40px 24px',
    backgroundColor: '#f1f5f9',
    textAlign: 'left',
    minHeight: '100vh',
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
    marginTop: 'auto',
    width: '100%',
    position: 'relative',
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

// Test Cases Page Styles
export const testCaseStyles = {
  // Main container
  mainContainer: {
    minHeight: '100vh',
    backgroundColor: colors.bgLight,
    padding: '40px 20px',
  },
  contentContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  // Header section
  headerSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  headerTitle: {
    fontSize: '42px',
    color: colors.primary,
    marginBottom: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: '18px',
    color: colors.textLight,
    margin: 0,
    textAlign: 'center',
  },
  // Test case card
  testCaseCard: {
    backgroundColor: colors.textWhite,
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    border: '2px solid',
    borderColor: '#e9ecef',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  testCaseCardHover: {
    borderColor: '#667eea',
    boxShadow: '0 12px 24px rgba(102, 126, 234, 0.2)',
    transform: 'translateY(-4px)',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
  },
  // Test case header
  testCaseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px',
  },
  testCaseHeaderContent: {
    flex: 1,
  },
  // Badge styles
  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '10px',
    flexWrap: 'wrap',
  },
  badgeId: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: colors.textWhite,
    padding: '8px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 4px 8px rgba(102, 126, 234, 0.3)',
  },
  badgePriority: (priority) => ({
    backgroundColor: priority === 'High' ? '#dc3545' : priority === 'Medium' ? '#ffc107' : '#28a745',
    color: colors.textWhite,
    padding: '8px 16px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  }),
  badgeType: {
    background: 'linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%)',
    color: '#667eea',
    padding: '8px 16px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid #e0d5ff',
  },
  // Test case title
  testCaseTitle: {
    color: colors.primary,
    fontSize: '20px',
    marginBottom: '8px',
    fontWeight: '600',
    textAlign: 'left',
  },
  testCaseMeta: {
    color: colors.textLight,
    fontSize: '14px',
    margin: 0,
    lineHeight: '1.5',
    textAlign: 'left',
  },
  // Expand icon
  expandIcon: (isExpanded) => ({
    fontSize: '24px',
    color: colors.primary,
    fontWeight: 'bold',
    transition: 'transform 0.3s ease',
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  // Expanded content
  expandedContent: {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '2px solid',
    borderColor: colors.borderColor,
    animation: 'fadeIn 0.3s ease',
  },
  // Story Acceptance Criteria section
  acceptanceCriteriaSection: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: colors.textDark,
    textAlign: 'left',
  },
  acceptanceCriteriaTitle: {
    color: colors.primary,
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600',
    textAlign: 'left',
  },
  userStoryBox: {
    fontStyle: 'italic',
    backgroundColor: '#f0f8ff',
    padding: '12px',
    borderRadius: '6px',
    borderLeft: '4px solid',
    borderLeftColor: colors.primary,
    marginBottom: '15px',
    textAlign: 'left',
  },
  gherkinBox: {
    backgroundColor: '#fff3cd',
    padding: '12px',
    borderRadius: '6px',
    borderLeft: '4px solid',
    borderLeftColor: '#ffc107',
    marginBottom: '10px',
    textAlign: 'left',
  },
  gherkinLine: {
    margin: '5px 0',
    fontWeight: '600',
    color: '#856404',
    textAlign: 'left',
  },
  severityText: {
    marginTop: '10px',
    textAlign: 'left',
  },
  // Objective section
  objectiveSection: {
    textAlign: 'left',
  },
  objectiveTitle: {
    color: colors.primary,
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600',
    textAlign: 'left',
  },
  objectiveText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: colors.textDark,
    textAlign: 'left',
  },
  // Preconditions section
  preconditionsSection: {
    marginBottom: '25px',
    textAlign: 'left',
  },
  preconditionsTitle: {
    color: colors.primary,
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600',
    textAlign: 'left',
  },
  preconditionsList: {
    margin: 0,
    paddingLeft: '20px',
    fontSize: '14px',
    lineHeight: '1.8',
    color: colors.textDark,
    textAlign: 'left',
  },
  preconditionsItem: {
    textAlign: 'left',
  },
  // Test Data section
  testDataSection: {
    marginBottom: '25px',
    backgroundColor: '#f0f8ff',
    padding: '15px',
    borderRadius: '6px',
    textAlign: 'left',
  },
  testDataTitle: {
    color: colors.primary,
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600',
    textAlign: 'left',
  },
  testDataGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    fontSize: '14px',
    color: colors.textDark,
    textAlign: 'left',
  },
  testDataItem: {
    textAlign: 'left',
  },
  // Test Steps section
  testStepsSection: {
    marginBottom: '25px',
    textAlign: 'left',
  },
  testStepsTitle: {
    color: colors.primary,
    fontSize: '16px',
    marginBottom: '15px',
    fontWeight: '600',
    textAlign: 'left',
  },
  testStepsTable: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },
  testStepsTableHeader: {
    backgroundColor: colors.primary,
    color: colors.textWhite,
  },
  testStepsTableHeaderCell: {
    padding: '12px',
    textAlign: 'left',
    border: '1px solid',
    borderColor: colors.borderColor,
  },
  testStepsTableRow: (index) => ({
    backgroundColor: index % 2 === 0 ? colors.textWhite : colors.bgLight,
  }),
  testStepsTableCell: {
    padding: '12px',
    border: '1px solid',
    borderColor: colors.borderColor,
    textAlign: 'left',
  },
  testStepsTableCellBold: {
    padding: '12px',
    border: '1px solid',
    borderColor: colors.borderColor,
    fontWeight: '600',
    textAlign: 'left',
  },
  testStepsTableCellItalic: {
    padding: '12px',
    border: '1px solid',
    borderColor: colors.borderColor,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  // Postconditions section
  postconditionsSection: {
    marginBottom: '25px',
    textAlign: 'left',
  },
  postconditionsTitle: {
    color: colors.primary,
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600',
    textAlign: 'left',
  },
  postconditionsList: {
    margin: 0,
    paddingLeft: '20px',
    fontSize: '14px',
    lineHeight: '1.8',
    color: colors.textDark,
    textAlign: 'left',
  },
  postconditionsItem: {
    textAlign: 'left',
  },
  // Environment section
  environmentSection: {
    backgroundColor: '#fff3cd',
    padding: '15px',
    borderRadius: '6px',
    textAlign: 'left',
  },
  environmentTitle: {
    color: colors.primary,
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600',
    textAlign: 'left',
  },
  environmentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    fontSize: '14px',
    color: colors.textDark,
    textAlign: 'left',
  },
  environmentItem: {
    textAlign: 'left',
  },
  // Grid layout for test case details
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '25px',
  },
  // Test cases list container
  testCasesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '40px',
  },
};

// Left-aligned text content styles for docs, API, AID, and Practice tabs
export const leftAlignStyles = {
  // Main page container
  pageContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'left',
  },
  // Hero section
  heroSection: {
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    color: colors.textWhite,
    padding: '60px 20px',
    textAlign: 'left',
    borderRadius: '12px',
    marginBottom: '40px',
    boxShadow: shadows.md,
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  heroSubtitle: {
    fontSize: '20px',
    opacity: '0.95',
    textAlign: 'left',
  },
  // Image section
  imageSection: {
    textAlign: 'left',
    marginBottom: '40px',
    backgroundColor: colors.bgLight,
    padding: '40px',
    borderRadius: '12px',
    boxShadow: shadows.sm,
  },
  // Main content section
  mainContent: {
    backgroundColor: colors.textWhite,
    padding: '40px',
    borderRadius: '12px',
    boxShadow: shadows.sm,
    marginBottom: '40px',
    textAlign: 'left',
  },
  // Section headings
  sectionHeading: {
    color: colors.primary,
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  sectionHeadingWithMargin: {
    color: colors.primary,
    fontSize: '32px',
    marginBottom: '20px',
    marginTop: '40px',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  // Paragraphs
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.textDark,
    marginBottom: '20px',
    textAlign: 'left',
  },
  paragraphNoMargin: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.textDark,
    textAlign: 'left',
  },
  // Lists
  list: {
    fontSize: '16px',
    lineHeight: '2',
    color: colors.textDark,
    paddingLeft: '20px',
    marginBottom: '30px',
    textAlign: 'left',
  },
  // Code blocks
  codeBlock: {
    backgroundColor: colors.bgLight,
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontFamily: 'monospace',
    fontSize: '16px',
    textAlign: 'left',
  },
  // Highlighted box
  highlightedBox: {
    backgroundColor: '#e7f3ff',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid',
    borderLeftColor: colors.primary,
    marginTop: '20px',
    textAlign: 'left',
  },
  highlightedBoxText: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.textDark,
    margin: 0,
    fontWeight: '600',
    textAlign: 'left',
  },
  // Links container
  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'flex-start',
    marginBottom: '40px',
  },
  // Section container
  sectionContainer: {
    marginBottom: '40px',
    textAlign: 'left',
  },
  // Grid links (for reference links, frameworks, etc.)
  gridLinks: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '40px',
  },
  gridLink: {
    display: 'block',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: '600',
    color: colors.textWhite,
    backgroundColor: colors.primary,
    textDecoration: 'none',
    borderRadius: '8px',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
};

// Collapsible Question Styles - Reusable for FAQ, Interview Questions, etc.
export const collapsibleQuestionStyles = {
  // Container for each collapsible question
  questionContainer: {
    marginBottom: '40px',
    padding: '25px',
    backgroundColor: colors.bgLight,
    borderRadius: '8px',
    textAlign: 'left',
  },
  // Alternative container style (e.g., for highlighted questions)
  questionContainerHighlighted: {
    marginBottom: '40px',
    padding: '25px',
    backgroundColor: '#e7f3ff',
    borderRadius: '8px',
    borderLeft: '4px solid',
    borderLeftColor: colors.primary,
    textAlign: 'left',
  },
  // Clickable question header/title
  questionHeader: {
    color: colors.primary,
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
    borderBottom: '2px solid',
    borderBottomColor: colors.primary,
    paddingBottom: '10px',
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none',
    transition: 'color 0.2s ease',
  },
  // Question header without border (for highlighted containers)
  questionHeaderNoBorder: {
    color: colors.primary,
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none',
    transition: 'color 0.2s ease',
  },
  // Question title text wrapper
  questionTitle: {
    flex: 1,
  },
  // Expand/collapse icon
  expandIcon: {
    fontSize: '20px',
    marginLeft: '10px',
    transition: 'transform 0.3s ease',
  },
  // Content wrapper (shown when expanded)
  contentWrapper: {
    animation: 'fadeIn 0.3s ease',
  },
  // Paragraph style within question content
  contentParagraph: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.textDark,
    textAlign: 'left',
    marginBottom: '15px',
  },
  // Paragraph style with no margin
  contentParagraphNoMargin: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.textDark,
    textAlign: 'left',
  },
  // List style within question content
  contentList: {
    fontSize: '16px',
    lineHeight: '2',
    color: colors.textDark,
    paddingLeft: '20px',
    textAlign: 'left',
  },
  // Highlighted text box within content
  contentHighlightedBox: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: colors.textDark,
    padding: '15px',
    backgroundColor: '#e7f3ff',
    borderRadius: '8px',
    borderLeft: '4px solid',
    borderLeftColor: colors.primary,
    textAlign: 'left',
  },
  // Warning/caution text style
  contentWarningText: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: '#dc3545',
    marginTop: '15px',
    fontStyle: 'italic',
    textAlign: 'left',
  },
};
