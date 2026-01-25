import React from 'react';

/**
 * Reusable Module Component for Course Pages
 * @param {string} moduleNumber - Module number (e.g., "Module 1")
 * @param {string} moduleTitle - Module title
 * @param {Array<string|JSX>} topics - Array of topic items
 * @param {Array<string>} learningOutcomes - Array of learning outcomes
 * @param {Array<Object>} aiTopics - Array of AI topics with label and description
 * @param {Array<Object>} earningOpportunities - Array of earning opportunities with label and description
 */
const CourseModule = ({ 
    moduleNumber, 
    moduleTitle, 
    topics, 
    learningOutcomes = [], 
    aiTopics = [], 
    earningOpportunities = [] 
}) => {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid #e0e0e0'
        }}>
            <h3 style={{
                color: '#00416A',
                fontSize: '24px',
                marginBottom: '20px',
                fontWeight: 'bold'
            }}>
                {moduleNumber}: {moduleTitle}
            </h3>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {topics.map((topic, index) => (
                    <li key={index} style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                        {typeof topic === 'string' ? <strong>{topic.split(':')[0]}:</strong> : null}
                        {typeof topic === 'string' ? topic.split(':').slice(1).join(':') : topic}
                    </li>
                ))}
            </ul>

            {learningOutcomes.length > 0 && (
                <div style={{
                    marginTop: '25px',
                    padding: '20px',
                    backgroundColor: '#e8f4f8',
                    borderRadius: '6px',
                    borderLeft: '4px solid #00416A'
                }}>
                    <h4 style={{
                        color: '#00416A',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        marginBottom: '12px'
                    }}>
                        Learning Outcomes:
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        fontSize: '15px',
                        color: '#333',
                        lineHeight: '1.8'
                    }}>
                        {learningOutcomes.map((outcome, index) => (
                            <li key={index} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                {outcome}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {aiTopics.length > 0 && (
                <div style={{
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: '#e6f3ff',
                    borderRadius: '6px',
                    borderLeft: '4px solid #0066cc'
                }}>
                    <h4 style={{
                        color: '#0066cc',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        marginBottom: '12px'
                    }}>
                        🤖 AI Topics Covered:
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        fontSize: '15px',
                        color: '#333',
                        lineHeight: '1.8'
                    }}>
                        {aiTopics.map((aiTopic, index) => (
                            <li key={index} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                <strong>{aiTopic.label}:</strong> {aiTopic.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {earningOpportunities.length > 0 && (
                <div style={{
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: '#fff4e6',
                    borderRadius: '6px',
                    borderLeft: '4px solid #ff9800'
                }}>
                    <h4 style={{
                        color: '#ff9800',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        marginBottom: '12px'
                    }}>
                        💰 Earning Opportunities:
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        fontSize: '15px',
                        color: '#333',
                        lineHeight: '1.8'
                    }}>
                        {earningOpportunities.map((opportunity, index) => (
                            <li key={index} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                <strong>{opportunity.label}:</strong> {opportunity.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseModule;
