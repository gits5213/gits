import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class WYSIWYGEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Your content goes here.'
        };
    }

    handleChange = (e) => {
        this.setState({ content: e.target.value });
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
                        WYSIWYG Editor
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This is a WYSIWYG (What You See Is What You Get) editor. Type and format your content below.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        border: '1px solid #00416A'
                    }}>
                        <div style={{
                            marginBottom: '10px',
                            padding: '10px',
                            backgroundColor: '#ffffff',
                            borderBottom: '1px solid #ddd'
                        }}>
                            <button style={{
                                padding: '5px 10px',
                                marginRight: '5px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}>B</button>
                            <button style={{
                                padding: '5px 10px',
                                marginRight: '5px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}>I</button>
                            <button style={{
                                padding: '5px 10px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}>U</button>
                        </div>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleChange}
                            style={{
                                width: '100%',
                                minHeight: '200px',
                                padding: '15px',
                                border: '2px solid #00416A',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontFamily: 'Arial, sans-serif',
                                resize: 'vertical',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div style={{
                        backgroundColor: '#d1ecf1',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#0c5460' }}>
                            <strong>Content:</strong> {this.state.content}
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

export default WYSIWYGEditor;
