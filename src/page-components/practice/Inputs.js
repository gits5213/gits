import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <main 
                id="inputs-main"
                data-testid="inputs-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="inputs-container"
                    data-testid="inputs-container"
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <h1 
                        id="inputs-title"
                        data-testid="inputs-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Inputs
                    </h1>
                    <p 
                        id="inputs-description"
                        data-testid="inputs-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Practice typing into the input field below.
                    </p>
                    
                    <div 
                        id="inputs-input-container"
                        data-testid="inputs-input-container"
                        style={{
                            marginBottom: '30px',
                            padding: '20px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '6px',
                            border: '1px solid #00416A'
                        }}
                    >
                        <label 
                            id="inputs-input-label"
                            data-testid="inputs-input-label"
                            htmlFor="inputs-input-field"
                            style={{
                                display: 'block',
                                marginBottom: '10px',
                                color: '#333',
                                fontWeight: '600',
                                fontSize: '16px'
                            }}
                        >
                            Input:
                        </label>
                        <input
                            id="inputs-input-field"
                            data-testid="inputs-input-field"
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                            placeholder="Enter some text..."
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '2px solid #00416A',
                                borderRadius: '6px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {this.state.inputValue && (
                        <div 
                            id="inputs-result"
                            data-testid="inputs-result"
                            style={{
                                backgroundColor: '#d1ecf1',
                                padding: '15px',
                                borderRadius: '6px',
                                marginBottom: '20px'
                            }}
                        >
                            <p 
                                id="inputs-result-text"
                                data-testid="inputs-result-text"
                                style={{ margin: 0, color: '#0c5460' }}
                            >
                                <strong>You typed:</strong> {this.state.inputValue}
                            </p>
                        </div>
                    )}

                    <div 
                        id="inputs-back-link-container"
                        data-testid="inputs-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="inputs-back-link"
                            data-testid="inputs-back-link"
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
                <section 
                    id="inputs-footer-section"
                    data-testid="inputs-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default Inputs;
