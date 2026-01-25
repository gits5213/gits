/**
 * PageHeader Component - Consistent page header with title and subtitle
 * Follows modern university design system
 */

import React from 'react'
import Container from './Container'
import { colors, spacing, typography, shadows } from '../../utils/universityDesignSystem'

const PageHeader = ({
  title,
  subtitle,
  breadcrumbs,
  actions,
  variant = 'default',
  className = '',
  style = {},
  ...props
}) => {
  const variantStyles = {
    default: {
      backgroundColor: colors.white,
      padding: `${spacing[12]} 0`,
      borderBottom: `1px solid ${colors.borderLight}`,
    },
    hero: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      color: colors.white,
      padding: `${spacing[10]} 0 ${spacing[8]} 0`,
      marginTop: 0,
      marginBottom: 0,
      position: 'relative',
    },
    minimal: {
      backgroundColor: colors.bgSecondary,
      padding: `${spacing[8]} 0`,
    },
  }

  const combinedStyle = {
    ...variantStyles[variant],
    ...style,
  }

  const titleStyle = {
    fontSize: variant === 'hero' ? typography.fontSize['5xl'] : typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: subtitle ? spacing[3] : 0,
    color: variant === 'hero' ? colors.white : colors.primary,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
    margin: subtitle ? `0 0 ${spacing[3]} 0` : 0,
  }

  const subtitleStyle = {
    fontSize: typography.fontSize.xl,
    color: variant === 'hero' ? colors.white : colors.textSecondary,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
    margin: 0,
    maxWidth: '800px',
  }

  return (
    <header className={className} style={{...combinedStyle, width: '100%', margin: 0}} {...props}>
      <Container>
        {breadcrumbs && (
          <nav style={{ marginBottom: spacing[4] }}>
            {breadcrumbs}
          </nav>
        )}
        <div style={{ 
          display: 'flex', 
          flexDirection: variant === 'hero' ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: variant === 'hero' ? 'flex-start' : 'flex-start', 
          gap: spacing[6] 
        }}>
          <div style={{ flex: 1, width: '100%' }}>
            {title && <h1 style={titleStyle}>{title}</h1>}
            {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
          </div>
          {actions && (
            <div style={{ 
              display: 'flex', 
              gap: spacing[4], 
              alignItems: 'center',
              width: variant === 'hero' ? '100%' : 'auto',
              marginTop: variant === 'hero' ? spacing[8] : 0,
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1
            }}>
              {actions}
            </div>
          )}
        </div>
      </Container>
    </header>
  )
}

export default PageHeader
