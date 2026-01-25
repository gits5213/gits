import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class ABTesting extends Component {
    render() {
        return (
            <main style={{
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                padding: '40px 20px'
            }}>
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
                        A/B Testing
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text or functionality works best towards a desired outcome (e.g. a user action such as a click-through).
                    </p>
                    <div style={{
                        backgroundColor: '#f0f8ff',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '30px',
                        border: '1px solid #00416A'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '24px',
                            marginBottom: '15px'
                        }}>
                            A/B Test Variation 1
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            This is the control version. It's the original version of the page.
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
                            ← Back to Practice Examples
                        </Link>
                    </div>
                </div>
                <section className='pt4'>
                    </section>
            </main>
        );
    }
}

export default ABTesting;
