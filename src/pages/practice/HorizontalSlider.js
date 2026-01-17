import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class HorizontalSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleChange = (e) => {
        this.setState({ value: parseInt(e.target.value) });
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
                        Horizontal Slider
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Move the slider to set the value. The range is 0 to 5.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        padding: '30px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        border: '1px solid #00416A'
                    }}>
                        <div style={{
                            marginBottom: '20px'
                        }}>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                step="0.5"
                                value={this.state.value}
                                onChange={this.handleChange}
                                style={{
                                    width: '100%',
                                    height: '8px',
                                    borderRadius: '4px',
                                    backgroundColor: '#ddd',
                                    outline: 'none',
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                        <div style={{
                            textAlign: 'center',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#00416A',
                            padding: '15px',
                            backgroundColor: '#ffffff',
                            borderRadius: '6px',
                            border: '2px solid #00416A'
                        }}>
                            {this.state.value}
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#d1ecf1',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#0c5460' }}>
                            <strong>Current Value:</strong> {this.state.value}
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

export default HorizontalSlider;
