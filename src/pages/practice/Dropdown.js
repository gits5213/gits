import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        };
    }

    handleChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    }

    render() {
        return (
            <main 
                id="dropdown-main"
                data-testid="dropdown-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="dropdown-container"
                    data-testid="dropdown-container"
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
                        id="dropdown-title"
                        data-testid="dropdown-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Dropdown
                    </h1>
                    <p 
                        id="dropdown-description"
                        data-testid="dropdown-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Select an option from the dropdown menu below.
                    </p>
                    
                    <div 
                        id="dropdown-select-container"
                        data-testid="dropdown-select-container"
                        style={{ marginBottom: '30px' }}
                    >
                        <label 
                            id="dropdown-select-label"
                            data-testid="dropdown-select-label"
                            htmlFor="dropdown-select"
                            style={{
                                display: 'block',
                                marginBottom: '10px',
                                color: '#333',
                                fontWeight: '600',
                                fontSize: '18px'
                            }}
                        >
                            Please select an option:
                        </label>
                        <select
                            id="dropdown-select"
                            data-testid="dropdown-select"
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '2px solid #00416A',
                                borderRadius: '6px',
                                fontSize: '16px',
                                backgroundColor: '#ffffff',
                                color: '#333',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="" data-testid="dropdown-option-empty">Please select an option</option>
                            <option value="option1" data-testid="dropdown-option-1">Option 1</option>
                            <option value="option2" data-testid="dropdown-option-2">Option 2</option>
                        </select>
                    </div>

                    {this.state.selectedOption && (
                        <div 
                            id="dropdown-result"
                            data-testid="dropdown-result"
                            style={{
                                backgroundColor: '#d1ecf1',
                                padding: '15px',
                                borderRadius: '6px',
                                marginBottom: '20px'
                            }}
                        >
                            <p 
                                id="dropdown-result-text"
                                data-testid="dropdown-result-text"
                                style={{ margin: 0, color: '#0c5460' }}
                            >
                                <strong>Selected:</strong> {this.state.selectedOption}
                            </p>
                        </div>
                    )}

                    <div 
                        id="dropdown-back-link-container"
                        data-testid="dropdown-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="dropdown-back-link"
                            data-testid="dropdown-back-link"
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
                    id="dropdown-footer-section"
                    data-testid="dropdown-footer-section"
                    className='pt4'
                >
                    <Footer />
                </section>
            </main>
        );
    }
}

export default Dropdown;
