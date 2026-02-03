import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class FloatingMenu extends Component {
    render() {
        return (
            <main style={{
                minHeight: '200vh',
                backgroundColor: '#f8f9fa',
                padding: '40px 20px',
                position: 'relative'
            }}>
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#00416A',
                    borderRadius: '8px',
                    padding: '15px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    zIndex: 1000
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <a href="#home" style={{
                            color: '#ffffff',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                        }}
                        >Home</a>
                        <a href="#news" style={{
                            color: '#ffffff',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                        }}
                        >News</a>
                        <a href="#contact" style={{
                            color: '#ffffff',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                        }}
                        >Contact</a>
                        <a href="#about" style={{
                            color: '#ffffff',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                        }}
                        >About</a>
                    </div>
                </div>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h1 style={{
                        color: '#00416A',
                        fontSize: '32px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Floating Menu
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page demonstrates a floating menu that stays visible while scrolling. Scroll down to see it in action.
                    </p>
                    
                    <div style={{
                        height: '1500px',
                        padding: '20px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '24px',
                            marginBottom: '15px'
                        }}>
                            Scroll Content
                        </h2>
                        <p style={{
                            color: '#333',
                            lineHeight: '1.8',
                            marginBottom: '20px'
                        }}>
                            This is a long section of content. As you scroll down, notice that the floating menu in the bottom-right corner remains visible. This is useful for providing quick access to navigation or important actions.
                        </p>
                        <p style={{
                            color: '#333',
                            lineHeight: '1.8',
                            marginBottom: '20px'
                        }}>
                            Floating menus are commonly used in modern web applications to improve user experience and provide persistent navigation options.
                        </p>
                        <p style={{
                            color: '#333',
                            lineHeight: '1.8'
                        }}>
                            Continue scrolling to see how the menu behaves...
                        </p>
                    </div>

                    <div style={{
                        marginTop: '30px',
                        paddingTop: '20px',
                        borderTop: '1px solid #e0e0e0'
                    }}>
                        <Link 
                            to="/practice"
                            style={{
                                color: '#00416A',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            ← Back to UI Practice Examples
                        </Link>
                    </div>
                </div>
                <section className='pt4'>
                    </section>
            </main>
        );
    }
}

export default FloatingMenu;
