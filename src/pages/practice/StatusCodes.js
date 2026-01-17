import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class StatusCodes extends Component {
    render() {
        const statusCodes = [
            { code: 200, description: 'OK' },
            { code: 301, description: 'Moved Permanently' },
            { code: 404, description: 'Not Found' },
            { code: 500, description: 'Internal Server Error' }
        ];

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
                        Status Codes
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Click on the status codes below to see different HTTP response codes.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        marginBottom: '30px'
                    }}>
                        {statusCodes.map((status) => (
                            <div
                                key={status.code}
                                style={{
                                    padding: '20px',
                                    backgroundColor: '#f0f8ff',
                                    borderRadius: '6px',
                                    border: '1px solid #00416A',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <div>
                                    <span style={{
                                        color: '#00416A',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        marginRight: '15px'
                                    }}>
                                        {status.code}
                                    </span>
                                    <span style={{ color: '#333' }}>
                                        {status.description}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        // Simulate status code response
                                        alert(`Status Code: ${status.code}\n${status.description}`);
                                    }}
                                    style={{
                                        backgroundColor: '#00416A',
                                        color: '#ffffff',
                                        padding: '8px 16px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}
                                >
                                    Test
                                </button>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> This page demonstrates different HTTP status codes for testing.
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

export default StatusCodes;
