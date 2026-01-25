/**
 * Button Component - Reusable button with multiple variants
 * Follows modern university design system
 */

import React from 'react'
import { buttonStyles, colors, transitions, borderRadius, spacing, typography } from '../../utils/universityDesignSystem'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  href,
  target,
  rel,
  className = '',
  style = {},
  ...props
}) => {
  const baseStyle = {
    fontFamily: typography.fontPrimary,
    fontWeight: typography.fontWeight.semibold,
    borderRadius: borderRadius.md,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: transitions.base,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    textDecoration: 'none',
    outline: 'none',
    ...style
  }

  // Size variants
  const sizeStyles = {
    sm: {
      padding: `${spacing[2]} ${spacing[4]}`,
      fontSize: typography.fontSize.sm,
    },
    md: {
      padding: `${spacing[3]} ${spacing[6]}`,
      fontSize: typography.fontSize.base,
    },
    lg: {
      padding: `${spacing[4]} ${spacing[8]}`,
      fontSize: typography.fontSize.lg,
    },
  }

  // Variant styles
  const variantStyles = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.white,
      boxShadow: buttonStyles.primary.boxShadow || '0 2px 4px rgba(0,0,0,0.1)',
      '&:hover:not(:disabled)': {
        backgroundColor: colors.primaryDark,
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
      },
      '&:active:not(:disabled)': {
        transform: 'translateY(0)',
      },
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.white,
      '&:hover:not(:disabled)': {
        backgroundColor: colors.secondaryDark,
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary,
      border: `2px solid ${colors.primary}`,
      '&:hover:not(:disabled)': {
        backgroundColor: colors.primary,
        color: colors.white,
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.primary,
      '&:hover:not(:disabled)': {
        backgroundColor: colors.gray50,
      },
    },
    danger: {
      backgroundColor: colors.error,
      color: colors.white,
      '&:hover:not(:disabled)': {
        backgroundColor: '#c1121f',
      },
    },
  }

  const combinedStyle = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...(fullWidth && { width: '100%' }),
    ...(disabled && {
      opacity: 0.6,
      cursor: 'not-allowed',
    }),
  }

  // Remove hover styles from inline (handled by CSS or onMouse handlers)
  const { '&:hover:not(:disabled)': hoverStyle, '&:active:not(:disabled)': activeStyle, ...finalStyle } = combinedStyle

  const handleMouseEnter = (e) => {
    if (!disabled && hoverStyle) {
      Object.assign(e.currentTarget.style, hoverStyle)
    }
  }

  const handleMouseLeave = (e) => {
    if (!disabled && hoverStyle) {
      e.currentTarget.style.removeProperty('background-color')
      e.currentTarget.style.removeProperty('color')
      e.currentTarget.style.removeProperty('transform')
      e.currentTarget.style.removeProperty('box-shadow')
      e.currentTarget.style.removeProperty('border-color')
    }
  }

  const handleMouseDown = (e) => {
    if (!disabled && activeStyle) {
      Object.assign(e.currentTarget.style, activeStyle)
    }
  }

  const handleMouseUp = (e) => {
    if (!disabled) {
      e.currentTarget.style.removeProperty('transform')
    }
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={finalStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={finalStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
