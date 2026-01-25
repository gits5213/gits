/**
 * Card Component - Reusable card with multiple variants
 * Follows modern university design system
 */

import React from 'react'
import Link from 'next/link'
import { cardStyles, colors, shadows, spacing, borderRadius, transitions, typography } from '../../utils/universityDesignSystem'

const Card = ({
  children,
  variant = 'base',
  href,
  onClick,
  className = '',
  style = {},
  hoverable = true,
  ...props
}) => {
  const variantStyles = {
    base: cardStyles.base,
    elevated: cardStyles.elevated,
    outlined: cardStyles.outlined,
  }

  const baseStyle = {
    ...variantStyles[variant],
    ...(hoverable && {
      cursor: href || onClick ? 'pointer' : 'default',
    }),
    ...style,
  }

  const handleMouseEnter = (e) => {
    if (hoverable && (href || onClick)) {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = shadows.lg
    }
  }

  const handleMouseLeave = (e) => {
    if (hoverable && (href || onClick)) {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = variantStyles[variant].boxShadow || shadows.md
    }
  }

  const cardContent = (
    <div
      className={className}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default Card
