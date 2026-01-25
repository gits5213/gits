/**
 * CourseCard Component - Specialized card for course listings
 * Reusable and follows modern university design system
 */

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImageSrc } from '@/src/utils/getImageSrc'
import Card from './Card'
import { colors, spacing, borderRadius, transitions, typography, shadows } from '../../utils/universityDesignSystem'

const CourseCard = ({
  id,
  courseName,
  techStack,
  image,
  link,
  category,
  alt,
  className = '',
  style = {},
  ...props
}) => {
  const cardContent = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Category Badge */}
      {category && (
        <div style={{
          position: 'absolute',
          top: spacing[4],
          right: spacing[4],
          backgroundColor: colors.primary,
          color: colors.white,
          padding: `${spacing[1]} ${spacing[3]}`,
          borderRadius: borderRadius.full,
          fontSize: typography.fontSize.xs,
          fontWeight: typography.fontWeight.semibold,
          textTransform: 'uppercase',
          letterSpacing: typography.letterSpacing.wide,
          zIndex: 2,
          boxShadow: shadows.sm
        }}>
          {category}
        </div>
      )}

      {/* Image Section */}
      <div style={{
        width: '100%',
        height: '240px',
        background: `linear-gradient(135deg, ${colors.gray50} 0%, ${colors.gray100} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing[6],
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img 
          loading="lazy"
          alt={alt || courseName}
          src={getImageSrc(image)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transition: transitions.slow,
            position: 'relative',
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'
          }}
        />
      </div>

      {/* Content Section */}
      <div style={{
        padding: spacing[7],
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.white
      }}>
        <h3 style={{
          color: colors.primary,
          fontSize: typography.fontSize['2xl'],
          fontWeight: typography.fontWeight.bold,
          marginBottom: spacing[3],
          lineHeight: typography.lineHeight.tight,
          minHeight: '64px',
          letterSpacing: typography.letterSpacing.tight,
          margin: `0 0 ${spacing[3]} 0`
        }}>
          {courseName}
        </h3>
        
        {techStack && (
          <div style={{
            flexGrow: 1,
            marginBottom: spacing[5]
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: spacing[2]
            }}>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke={colors.primary} 
                strokeWidth="2"
                style={{ marginRight: spacing[2], flexShrink: 0 }}
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span style={{
                color: colors.textSecondary,
                fontSize: typography.fontSize.xs,
                fontWeight: typography.fontWeight.semibold,
                textTransform: 'uppercase',
                letterSpacing: typography.letterSpacing.wide
              }}>
                Tech Stack
              </span>
            </div>
            <p style={{
              color: colors.textSecondary,
              fontSize: typography.fontSize.base,
              lineHeight: typography.lineHeight.relaxed,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              paddingLeft: spacing[6]
            }}>
              {techStack}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div style={{
          paddingTop: spacing[4],
          borderTop: `1px solid ${colors.borderLight}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{
            color: colors.primary,
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.bold,
            display: 'inline-flex',
            alignItems: 'center',
            letterSpacing: typography.letterSpacing.normal
          }}>
            Explore Course
          </span>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: borderRadius.full,
            backgroundColor: colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: transitions.base,
            boxShadow: shadows.sm
          }}>
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={colors.white} 
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Card
      href={link}
      hoverable
      className={className}
      style={{ position: 'relative', ...style }}
      {...props}
    >
      {cardContent}
    </Card>
  )
}

export default CourseCard
