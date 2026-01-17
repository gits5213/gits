import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class Typos extends Component {
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
                        Typos
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page contains intentional typos. Can you spot them?
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        border: '1px solid #00416A'
                    }}>
                        <p style={{
                            color: '#333',
                            fontSize: '16px',
                            lineHeight: '1.8',
                            marginBottom: '15px'
                        }}>
                            Sometimes you'll see a typo, other times you won't.
                        </p>
                        <p style={{
                            color: '#333',
                            fontSize: '16px',
                            lineHeight: '1.8'
                        }}>
                            This page intentionally contains typos to test how automated tests handle text matching.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> This page is useful for testing text matching strategies that handle typos and variations.
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
                    <Footer />
                </section>
            </main>
        );
    }
}

export default Typos;
