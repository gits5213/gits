import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class JavaScriptError extends Component {
    componentDidMount() {
        // Intentionally trigger a JavaScript error
        setTimeout(() => {
            throw new Error('This is a test JavaScript error');
        }, 100);
    }

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
                        JavaScript onload event error
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page intentionally triggers a JavaScript error on load. Check the browser console to see the error.
                    </p>
                    
                    <div style={{
                        backgroundColor: '#f8d7da',
                        padding: '20px',
                        borderRadius: '6px',
                        marginBottom: '20px',
                        border: '1px solid #dc3545'
                    }}>
                        <p style={{
                            margin: 0,
                            color: '#721c24',
                            fontWeight: '600'
                        }}>
                            ⚠️ A JavaScript error has been triggered on this page.
                        </p>
                        <p style={{
                            margin: '10px 0 0 0',
                            color: '#721c24',
                            fontSize: '14px'
                        }}>
                            Open your browser's developer console (F12) to see the error details.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> This page is useful for testing error handling and logging in automated tests.
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

export default JavaScriptError;
