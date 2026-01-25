import React from 'react';

/**
 * Reusable "What You'll Learn" Section Component
 * @param {string} title - Section title (default: "What You'll Learn")
 * @param {Array<Object>} categories - Array of category objects with {title, items}
 */
const WhatYoullLearn = ({ 
    title = "What You'll Learn",
    categories 
}) => {
    return (
        <section style={{
            marginBottom: '60px'
        }}>
            <div style={{
                backgroundColor: '#e8f4f8',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    {title}
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    {categories.map((category, categoryIndex) => (
                        <div key={categoryIndex} style={{
                            backgroundColor: '#ffffff',
                            padding: '25px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '20px',
                                marginBottom: '15px',
                                fontWeight: 'bold'
                            }}>
                                {category.title}
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                lineHeight: '1.8'
                            }}>
                                {category.items.map((item, itemIndex) => (
                                    <li 
                                        key={itemIndex}
                                        style={{ 
                                            paddingLeft: '20px', 
                                            position: 'relative', 
                                            marginBottom: itemIndex < category.items.length - 1 ? '10px' : 0
                                        }}
                                    >
                                        <span style={{ 
                                            position: 'absolute', 
                                            left: 0, 
                                            color: '#00416A', 
                                            fontWeight: 'bold' 
                                        }}>•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYoullLearn;
