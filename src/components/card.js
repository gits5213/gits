import React from 'react';
import { Link } from 'react-router-dom';

const card = ({img, courseName, techStack, link, category}) => {
    // If img is a Link component, extract the image from it
    let imageElement = img;
    let cardLink = link || '#';
    
    // Handle case where img might be a Link component
    if (React.isValidElement(img) && img.type === Link) {
        imageElement = img.props.children;
        cardLink = img.props.to || cardLink;
    }

    return(
        <Link 
            to={cardLink}
            style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}
        >
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0,65,106,0.1)',
                position: 'relative'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,65,106,0.25)';
                e.currentTarget.style.borderColor = '#00416A';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(0,65,106,0.1)';
            }}
            >
                {/* Category Badge - Optional */}
                {category && (
                    <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        backgroundColor: '#00416A',
                        color: '#ffffff',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        zIndex: 2,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}>
                        {category}
                    </div>
                )}

                {/* Image Section */}
                <div style={{
                    width: '100%',
                    height: '240px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '25px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,65,106,0) 0%, rgba(0,65,106,0.05) 100%)',
                        pointerEvents: 'none'
                    }} />
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
                                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    ...imageElement.props.style
                                },
                                onMouseEnter: (e) => {
                                    e.target.style.transform = 'scale(1.1)';
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
                                src={imageElement}
                                alt={courseName}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
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
                    padding: '28px',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(to bottom, #ffffff 0%, #fafbfc 100%)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '22px',
                        fontWeight: '700',
                        marginBottom: '14px',
                        lineHeight: '1.4',
                        minHeight: '62px',
                        letterSpacing: '-0.3px',
                        margin: '0 0 14px 0'
                    }}>
                        {courseName}
                    </h3>
                    
                    {techStack && (
                        <div style={{
                            flexGrow: 1,
                            marginBottom: '20px'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px'
                            }}>
                                <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="#00416A" 
                                    strokeWidth="2"
                                    style={{ marginRight: '8px', flexShrink: 0 }}
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                                <span style={{
                                    color: '#666',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Tech Stack
                                </span>
                            </div>
                            <p style={{
                                color: '#555',
                                fontSize: '15px',
                                lineHeight: '1.7',
                                margin: 0,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                paddingLeft: '24px'
                            }}>
                                {techStack}
                            </p>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div style={{
                        paddingTop: '18px',
                        borderTop: '2px solid #e9ecef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span style={{
                            color: '#00416A',
                            fontSize: '15px',
                            fontWeight: '700',
                            display: 'inline-flex',
                            alignItems: 'center',
                            letterSpacing: '0.3px'
                        }}>
                            Explore Course
                        </span>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#00416A',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}>
                            <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#ffffff" 
                                strokeWidth="3"
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
