import React from 'react';
import { Link } from 'react-router-dom';
import link from '../../../utilities/links.json';

const frontend = () => {
    return(
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            marginBottom: '40px'
        }}>
            <h2 style={{
                color: '#00416A',
                fontSize: '32px',
                marginBottom: '30px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Why Front-end Web Development is a Good Career Choice?
            </h2>
            
            <div style={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
                border: '2px solid #00416A',
                lineHeight: '1.8'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            High Demand
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: 0
                        }}>
                            Front-end web developers are in high demand across industries. Companies constantly need skilled developers to create engaging user interfaces and improve user experiences.
                        </p>
                    </div>
                    
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Lucrative Career
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: 0
                        }}>
                            Front-end web development pays well. With the right skills and experience, you can earn a competitive salary and enjoy excellent career growth opportunities.
                        </p>
                    </div>
                    
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Flexibility
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: 0
                        }}>
                            As a front-end developer, you can work from anywhere, including home. Many companies offer remote work options, giving you the freedom to work in a way that suits your lifestyle.
                        </p>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Creativity
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: 0
                        }}>
                            Front-end web development is all about creativity and creative problem-solving. You get to bring designs to life and create beautiful, functional user interfaces.
                        </p>
                    </div>
                    
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Many Career Options
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: 0
                        }}>
                            Front-end development opens doors to various career paths including UI/UX design, full-stack development, mobile app development, and more.
                        </p>
                    </div>
                    
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Constantly Evolving
            </h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#333',
                            margin: 0
                        }}>
                            Front-end web development is an exciting career because it's always evolving and constantly changing, providing continuous learning opportunities.
                        </p>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#00416A',
                    color: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    marginTop: '30px'
                }}>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        margin: 0,
                        marginBottom: '20px'
                    }}>
                Front-end web development is an exciting career because it's always evolving and constantly changing. This means you'll always have the opportunity to interact with new tools and learn new skills, keeping you engaged in your career. It's a field that provides many opportunities for hands-on learning.
            </p>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        margin: 0,
                        fontWeight: 'bold'
                    }}>
                If you love technology, enjoy creating a great user experience and are looking for an exciting career with a lot of growth potential, front-end web development might be just the career for you.
            </p>
                </div>
            </div>
        </div>
    );
}
export default frontend;
