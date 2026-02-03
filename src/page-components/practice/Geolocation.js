import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            error: null,
            loading: false
        };
    }

    getLocation = () => {
        this.setState({ loading: true, error: null });
        
        if (!navigator.geolocation) {
            this.setState({
                error: 'Geolocation is not supported by your browser.',
                loading: false
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    location: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    },
                    loading: false
                });
            },
            (error) => {
                this.setState({
                    error: `Error: ${error.message}`,
                    loading: false
                });
            }
        );
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
                        Geolocation
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Click the button below to get your current location.
                    </p>
                    
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}>
                        <button
                            onClick={this.getLocation}
                            disabled={this.state.loading}
                            style={{
                                backgroundColor: this.state.loading ? '#ccc' : '#00416A',
                                color: '#ffffff',
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: this.state.loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {this.state.loading ? 'Getting location...' : 'Where am I?'}
                        </button>
                    </div>

                    {this.state.location && (
                        <div style={{
                            backgroundColor: '#d1ecf1',
                            padding: '20px',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            border: '1px solid #00416A'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '20px',
                                marginBottom: '15px'
                            }}>
                                Your Location:
                            </h2>
                            <p style={{ margin: '5px 0', color: '#0c5460' }}>
                                <strong>Latitude:</strong> {this.state.location.latitude.toFixed(6)}
                            </p>
                            <p style={{ margin: '5px 0', color: '#0c5460' }}>
                                <strong>Longitude:</strong> {this.state.location.longitude.toFixed(6)}
                            </p>
                            <p style={{ margin: '5px 0', color: '#0c5460' }}>
                                <strong>Accuracy:</strong> {this.state.location.accuracy.toFixed(2)} meters
                            </p>
                        </div>
                    )}

                    {this.state.error && (
                        <div style={{
                            backgroundColor: '#f8d7da',
                            padding: '15px',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            border: '1px solid #dc3545'
                        }}>
                            <p style={{ margin: 0, color: '#721c24' }}>
                                {this.state.error}
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
                            <strong>Note:</strong> Your browser will ask for permission to access your location.
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

export default Geolocation;
