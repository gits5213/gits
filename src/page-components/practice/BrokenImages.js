import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class BrokenImages extends Component {
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
                        Broken Images
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page contains broken images. Some images may not load properly, which is useful for testing error handling.
                    </p>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '30px'
                    }}>
                        <div>
                            <img
                                src="https://invalid-url-that-does-not-exist.com/image1.jpg"
                                alt="Broken 1"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    border: '2px solid #ddd',
                                    borderRadius: '6px',
                                    backgroundColor: '#f0f0f0'
                                }}
                                onError={(e) => {
                                    e.target.style.borderColor = '#dc3545';
                                }}
                            />
                            <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>Broken Image 1</p>
                        </div>
                        <div>
                            <img
                                src="https://invalid-url-that-does-not-exist.com/image2.jpg"
                                alt="Broken 2"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    border: '2px solid #ddd',
                                    borderRadius: '6px',
                                    backgroundColor: '#f0f0f0'
                                }}
                                onError={(e) => {
                                    e.target.style.borderColor = '#dc3545';
                                }}
                            />
                            <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>Broken Image 2</p>
                        </div>
                        <div>
                            <img
                                src="https://invalid-url-that-does-not-exist.com/image3.jpg"
                                alt="Broken 3"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    border: '2px solid #ddd',
                                    borderRadius: '6px',
                                    backgroundColor: '#f0f0f0'
                                }}
                                onError={(e) => {
                                    e.target.style.borderColor = '#dc3545';
                                }}
                            />
                            <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>Broken Image 3</p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        border: '1px solid #ffc107',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> These images are intentionally broken to demonstrate error handling in automated testing.
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

export default BrokenImages;
