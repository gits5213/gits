import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class ShiftingContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shiftAmount: 0
        };
    }

    componentDidMount() {
        // Randomly shift content
        this.interval = setInterval(() => {
            this.setState({
                shiftAmount: Math.random() * 50 - 25
            });
        }, 2000);
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
                        Shifting Content
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page demonstrates content that shifts position, which can be challenging for automated tests.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        border: '1px solid #00416A',
                        transform: `translateX(${this.state.shiftAmount}px)`,
                        transition: 'transform 0.5s ease'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px'
                        }}>
                            Shifting Element
                        </h2>
                        <p style={{
                            color: '#333',
                            margin: 0
                        }}>
                            This content shifts position every few seconds. Watch how it moves!
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> Shifting content can cause element location issues in automated tests.
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

export default ShiftingContent;
