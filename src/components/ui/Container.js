/**
 * Container Component - Responsive container with consistent max-widths
 * Follows modern university design system
 */

import React from 'react'
import { layoutStyles, spacing } from '../../utils/universityDesignSystem'

const Container = ({
  children,
  size = 'main',
  className = '',
  style = {},
  ...props
}) => {
  const sizeStyles = {
    main: layoutStyles.container,
    medium: layoutStyles.containerMedium,
    small: layoutStyles.containerSmall,
    full: {
      width: '100%',
      padding: `0 ${spacing[5]}`,
    },
  }

  const combinedStyle = {
    ...sizeStyles[size],
    ...style,
  }

  return (
    <div className={className} style={combinedStyle} {...props}>
      {children}
    </div>
  )
}

export default Container
