import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class Checkboxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox1: false,
            checkbox2: true
        };
    }

    handleChange = (checkbox) => {
        this.setState(prevState => ({
            [checkbox]: !prevState[checkbox]
        }));
    }

    render() {
        return (
            <main 
                id="checkboxes-main"
                data-testid="checkboxes-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="checkboxes-container"
                    data-testid="checkboxes-container"
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
                        id="checkboxes-title"
                        data-testid="checkboxes-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Checkboxes
                    </h1>
                    <p 
                        id="checkboxes-description"
                        data-testid="checkboxes-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Practice interacting with checkboxes. Some are checked by default, others are not.
                    </p>
                    
                    <div 
                        id="checkboxes-list"
                        data-testid="checkboxes-list"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            marginBottom: '30px'
                        }}
                    >
                        <label 
                            id="checkboxes-checkbox1-label"
                            data-testid="checkboxes-checkbox1-label"
                            htmlFor="checkboxes-checkbox1"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                padding: '15px',
                                backgroundColor: this.state.checkbox1 ? '#e7f3ff' : '#f8f9fa',
                                borderRadius: '6px',
                                border: '2px solid',
                                borderColor: this.state.checkbox1 ? '#00416A' : '#ddd',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <input
                                id="checkboxes-checkbox1"
                                data-testid="checkboxes-checkbox1"
                                type="checkbox"
                                checked={this.state.checkbox1}
                                onChange={() => this.handleChange('checkbox1')}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    cursor: 'pointer'
                                }}
                            />
                            <span style={{ color: '#333' }}>checkbox 1</span>
                        </label>

                        <label 
                            id="checkboxes-checkbox2-label"
                            data-testid="checkboxes-checkbox2-label"
                            htmlFor="checkboxes-checkbox2"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                padding: '15px',
                                backgroundColor: this.state.checkbox2 ? '#e7f3ff' : '#f8f9fa',
                                borderRadius: '6px',
                                border: '2px solid',
                                borderColor: this.state.checkbox2 ? '#00416A' : '#ddd',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <input
                                id="checkboxes-checkbox2"
                                data-testid="checkboxes-checkbox2"
                                type="checkbox"
                                checked={this.state.checkbox2}
                                onChange={() => this.handleChange('checkbox2')}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    cursor: 'pointer'
                                }}
                            />
                            <span style={{ color: '#333' }}>checkbox 2</span>
                        </label>
                    </div>

                    <div 
                        id="checkboxes-status"
                        data-testid="checkboxes-status"
                        style={{
                            backgroundColor: '#d1ecf1',
                            padding: '15px',
                            borderRadius: '6px',
                            marginBottom: '20px'
                        }}
                    >
                        <p 
                            id="checkboxes-status-text"
                            data-testid="checkboxes-status-text"
                            style={{ margin: 0, color: '#0c5460' }}
                        >
                            <strong>Status:</strong> Checkbox 1 is {this.state.checkbox1 ? 'checked' : 'unchecked'}, 
                            Checkbox 2 is {this.state.checkbox2 ? 'checked' : 'unchecked'}
                        </p>
                    </div>

                    <div 
                        id="checkboxes-back-link-container"
                        data-testid="checkboxes-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="checkboxes-back-link"
                            data-testid="checkboxes-back-link"
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
                    id="checkboxes-footer-section"
                    data-testid="checkboxes-footer-section"
                    className='pt4'
                >
                    <Footer />
                </section>
            </main>
        );
    }
}

export default Checkboxes;
