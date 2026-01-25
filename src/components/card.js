import React from 'react';
import Link from 'next/link';
import { getImageSrc } from '../utils/getImageSrc';
import { cardStyles, colors, shadows, spacing, borderRadius, transitions, typography } from '../utils/universityDesignSystem';

const card = ({img, courseName, techStack, link, category}) => {
    // If img is a Link component, extract the image from it
    let imageElement = img;
    let cardLink = link || '#';
    
    // Ensure cardLink is always a string
    if (typeof cardLink === 'object' && cardLink !== null) {
        cardLink = cardLink.pathname || cardLink.href || '#'
    }
    cardLink = String(cardLink || '#')
    
    // Handle case where img might be a Link component
    if (React.isValidElement(img) && img.type === Link) {
        imageElement = img.props.children;
        const extractedLink = img.props.to || cardLink
        // Ensure extracted link is a string
        if (typeof extractedLink === 'object' && extractedLink !== null) {
            cardLink = extractedLink.pathname || extractedLink.href || cardLink
        } else {
            cardLink = String(extractedLink || cardLink)
        }
    }
    
    // Final safety check - ensure cardLink is never '[object Object]'
    if (cardLink === '[object Object]' || cardLink.startsWith('[object')) {
        cardLink = '#'
    }

    return(
        <Link 
            href={cardLink}
            style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}
        >
            <div style={{
                ...cardStyles.base,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = shadows.xl;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = shadows.md;
            }}
            >
                {/* Category Badge - Optional */}
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
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {React.isValidElement(imageElement) ? (
                            React.cloneElement(imageElement, {
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    transition: transitions.slow,
                                    ...imageElement.props.style
                                },
                                onMouseEnter: (e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                    if (imageElement.props.onMouseEnter) {
                                        imageElement.props.onMouseEnter(e);
                                    }
                                },
                                onMouseLeave: (e) => {
                                    e.target.style.transform = 'scale(1)';
                                    if (imageElement.props.onMouseLeave) {
                                        imageElement.props.onMouseLeave(e);
                                    }
                                }
                            })
                        ) : (
                            <img 
                                src={getImageSrc(imageElement)}
                                alt={courseName}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    transition: transitions.slow
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                        )}
                    </div>
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
        </Link>
    );
  }   
export default card;
