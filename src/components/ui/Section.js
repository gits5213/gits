/**
 * Section Component - Consistent section spacing and layout
 * Follows modern university design system
 */

import React from 'react'
import Container from './Container'
import { spacing, colors } from '../../utils/universityDesignSystem'

const Section = ({
  children,
  variant = 'default',
  containerSize = 'main',
  backgroundColor,
  className = '',
  style = {},
  ...props
}) => {
  const variantStyles = {
    default: {
      padding: `${spacing[16]} 0`,
    },
    small: {
      padding: `${spacing[12]} 0`,
    },
    large: {
      padding: `${spacing[20]} 0`,
    },
    none: {
      padding: 0,
    },
  }

  const combinedStyle = {
    ...variantStyles[variant],
    ...(backgroundColor && { backgroundColor }),
    ...style,
  }

  return (
    <section className={className} style={combinedStyle} {...props}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

export default Section
