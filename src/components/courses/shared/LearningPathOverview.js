import React from 'react';

/**
 * Reusable Learning Path Overview Component
 * @param {Array<Object>} modules - Array of module objects with {number, title, isHighlighted}
 * @param {Array<Object>} aiIntegration - Array of AI integration objects with {modules, title}
 * @param {Array<Object>} roiBenefits - Array of ROI benefit objects with {icon, title, description}
 * @param {string} legendText - Legend text explaining the learning path
 */
const LearningPathOverview = ({ modules, aiIntegration = [], roiBenefits = [], legendText }) => {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '8px',
            marginBottom: '40px',
            border: '2px solid #00416A'
        }}>
            <h3 style={{
                color: '#00416A',
                fontSize: '24px',
                marginBottom: '30px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Learning Path Overview
            </h3>
            
            {/* Diagram Container */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative'
            }}>
                {/* Module Path */}
                {modules.map((moduleGroup, groupIndex) => (
                    <div key={groupIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: groupIndex > 0 ? '10px' : 0
                    }}>
                        {moduleGroup.map((module, moduleIndex) => (
                            <React.Fragment key={moduleIndex}>
                                {moduleIndex > 0 && (
                                    <div style={{
                                        fontSize: '24px',
                                        color: '#00416A',
                                        fontWeight: 'bold'
                                    }}>→</div>
                                )}
                                <div style={{
                                    backgroundColor: module.isHighlighted ? '#00416A' : '#e8f4f8',
                                    padding: '20px 30px',
                                    borderRadius: '8px',
                                    border: '2px solid #00416A',
                                    textAlign: 'center',
                                    minWidth: '200px',
                                    flex: '1',
                                    maxWidth: '250px',
                                    color: module.isHighlighted ? '#ffffff' : 'inherit'
                                }}>
                                    <div style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: module.isHighlighted ? '#ffffff' : '#00416A',
                                        marginBottom: '8px'
                                    }}>{module.number}</div>
                                    <div style={{
                                        fontSize: '16px',
                                        color: module.isHighlighted ? 'rgba(255,255,255,0.95)' : '#666'
                                    }}>{module.title}</div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                ))}

                {/* AI Integration Path */}
                {aiIntegration.length > 0 && (
                    <div style={{
                        marginTop: '30px',
                        padding: '20px',
                        backgroundColor: '#fff9e6',
                        borderRadius: '8px',
                        border: '2px solid #ff9800'
                    }}>
                        <h4 style={{
                            color: '#ff9800',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginBottom: '15px',
                            textAlign: 'center'
                        }}>
                            🤖 AI Integration Throughout Learning Journey
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '15px',
                            marginTop: '15px'
                        }}>
                            {aiIntegration.map((ai, index) => (
                                <div key={index} style={{
                                    backgroundColor: '#ffffff',
                                    padding: '15px',
                                    borderRadius: '6px',
                                    border: '1px solid #ff9800',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: '#ff9800',
                                        marginBottom: '5px'
                                    }}>{ai.modules}</div>
                                    <div style={{
                                        fontSize: '14px',
                                        color: '#666'
                                    }}>{ai.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ROI and Real-World Benefits Section */}
                {roiBenefits.length > 0 && (
                    <div style={{
                        marginTop: '30px',
                        padding: '25px',
                        backgroundColor: '#00416A',
                        borderRadius: '8px',
                        color: '#ffffff'
                    }}>
                        <h4 style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            Real-World Benefits & ROI
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '15px',
                            marginTop: '20px'
                        }}>
                            {roiBenefits.map((benefit, index) => (
                                <div key={index} style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '6px'
                                }}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                                        {benefit.icon} {benefit.title}
                                    </div>
                                    <div style={{ fontSize: '14px', opacity: '0.9' }}>
                                        {benefit.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Legend */}
                {legendText && (
                    <div style={{
                        marginTop: '20px',
                        padding: '20px',
                        backgroundColor: '#f0f7fa',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            fontSize: '14px',
                            color: '#666',
                            lineHeight: '1.8'
                        }}>
                            <strong style={{ color: '#00416A' }}>Progressive Learning:</strong> {legendText}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LearningPathOverview;
