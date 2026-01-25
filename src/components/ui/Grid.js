/**
 * Grid Component - Responsive grid layout
 * Follows modern university design system
 */

import React from 'react'
import { spacing } from '../../utils/universityDesignSystem'

const Grid = ({
  children,
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = spacing[6],
  className = '',
  style = {},
  ...props
}) => {
  // Calculate min column width based on responsive breakpoints
  const getMinColumnWidth = () => {
    if (typeof cols === 'number') {
      return `minmax(280px, 1fr)`
    }
    if (typeof cols === 'object') {
      // Use auto-fit with minmax for responsive behavior
      const minWidth = cols.default === 1 ? '280px' : '300px'
      return `minmax(${minWidth}, 1fr)`
    }
    return 'minmax(300px, 1fr)'
  }

  // Generate CSS custom properties for responsive breakpoints
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, ${getMinColumnWidth()})`,
    gap,
    width: '100%',
    ...style,
  }

  // Generate unique ID for this grid instance
  const gridId = React.useMemo(() => `grid-${Math.random().toString(36).substr(2, 9)}`, [])
  
  // Generate CSS for responsive breakpoints
  const responsiveCSS = React.useMemo(() => {
    if (typeof cols !== 'object') return null
    
    const defaultCols = cols.default || 1
    const smCols = cols.sm || defaultCols
    const mdCols = cols.md || smCols
    const lgCols = cols.lg || mdCols

    return `
      .${gridId} {
        grid-template-columns: repeat(${defaultCols}, 1fr) !important;
      }
      @media (min-width: 640px) {
        .${gridId} {
          grid-template-columns: repeat(${smCols}, 1fr) !important;
        }
      }
      @media (min-width: 768px) {
        .${gridId} {
          grid-template-columns: repeat(${mdCols}, 1fr) !important;
        }
      }
      @media (min-width: 1024px) {
        .${gridId} {
          grid-template-columns: repeat(${lgCols}, 1fr) !important;
        }
      }
    `
  }, [cols, gridId])

  return (
    <>
      {responsiveCSS && (
        <style dangerouslySetInnerHTML={{ __html: responsiveCSS }} />
      )}
      <div 
        className={`${gridId} ${className}`}
        style={gridStyle}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

export default Grid
