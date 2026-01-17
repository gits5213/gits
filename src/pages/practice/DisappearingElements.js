import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class DisappearingElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGallery: true,
            showMenu: true
        };
    }

    componentDidMount() {
        // Randomly hide elements to simulate disappearing elements
        this.interval = setInterval(() => {
            if (Math.random() > 0.5) {
                this.setState(prevState => ({
                    showGallery: !prevState.showGallery
                }));
            }
        }, 3000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
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
                        Disappearing Elements
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page contains elements that may disappear and reappear. This is useful for testing dynamic content.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '24px',
                            marginBottom: '15px'
                        }}>
                            Navigation Menu
                        </h2>
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            flexWrap: 'wrap'
                        }}>
                            <a href="#home" style={{
                                padding: '10px 20px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '6px'
                            }}>Home</a>
                            <a href="#about" style={{
                                padding: '10px 20px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '6px'
                            }}>About</a>
                            {this.state.showMenu && (
                                <a href="#portfolio" style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#00416A',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    borderRadius: '6px'
                                }}>Portfolio</a>
                            )}
                            <a href="#gallery" style={{
                                padding: '10px 20px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '6px'
                            }}>Gallery</a>
                        </div>
                    </div>

                    {this.state.showGallery && (
                        <div style={{
                            backgroundColor: '#f0f8ff',
                            padding: '20px',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            border: '1px solid #00416A'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '15px'
                            }}>
                                Gallery Section
                            </h2>
                            <p style={{ color: '#333', margin: 0 }}>
                                This gallery section may disappear and reappear randomly.
                            </p>
                        </div>
                    )}

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> Elements on this page may disappear and reappear, making it challenging for automated tests.
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

export default DisappearingElements;
