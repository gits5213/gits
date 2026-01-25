import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class MultipleWindows extends Component {
    openNewWindow = () => {
        const newWindow = window.open('/practice/multiple-windows', '_blank', 'width=600,height=400');
        if (newWindow) {
            newWindow.document.write(`
                <html>
                    <head>
                        <title>New Window</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; }
                            h1 { color: #00416A; }
                            p { color: #666; }
                        </style>
                    </head>
                    <body>
                        <h1>New Window</h1>
                        <p>This is a new window opened from the Multiple Windows page.</p>
                        <p>You can close this window to return to the original page.</p>
                    </body>
                </html>
            `);
        }
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
                        Multiple Windows
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Click the button below to open a new window. This is useful for testing window handling in automated tests.
                    </p>
                    
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}>
                        <button
                            onClick={this.openNewWindow}
                            style={{
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                            }}
                        >
                            Click Here
                        </button>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> Your browser may block pop-up windows. Make sure to allow pop-ups for this site if needed.
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

export default MultipleWindows;
