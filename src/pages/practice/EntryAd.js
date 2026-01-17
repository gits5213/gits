import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class EntryAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAd: true
        };
    }

    closeAd = () => {
        this.setState({ showAd: false });
    }

    render() {
        return (
            <main style={{
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                padding: '40px 20px'
            }}>
                {this.state.showAd && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000
                    }}>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            maxWidth: '500px',
                            width: '90%',
                            position: 'relative',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                        }}>
                            <button
                                onClick={this.closeAd}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: '#666',
                                    fontWeight: 'bold'
                                }}
                            >
                                ×
                            </button>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '15px',
                                fontWeight: 'bold'
                            }}>
                                Entry Ad
                            </h2>
                            <p style={{
                                color: '#666',
                                fontSize: '16px',
                                marginBottom: '20px',
                                lineHeight: '1.6'
                            }}>
                                This is an entry ad that appears when you first visit the page. Click the × to close it.
                            </p>
                            <button
                                onClick={this.closeAd}
                                style={{
                                    backgroundColor: '#00416A',
                                    color: '#ffffff',
                                    padding: '10px 20px',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

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
                        Entry Ad
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page demonstrates an entry ad modal that appears when you first visit the page.
                    </p>
                    
                    <div style={{
                        backgroundColor: '#f0f8ff',
                        padding: '20px',
                        borderRadius: '6px',
                        marginBottom: '20px',
                        border: '1px solid #00416A'
                    }}>
                        <p style={{ margin: 0, color: '#333' }}>
                            The entry ad should have appeared when you first loaded this page. If you closed it, refresh the page to see it again.
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

export default EntryAd;
