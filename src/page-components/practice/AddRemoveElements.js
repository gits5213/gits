import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class AddRemoveElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: []
        };
    }

    addElement = () => {
        this.setState(prevState => ({
            elements: [...prevState.elements, { id: Date.now() }]
        }));
    }

    removeElement = (id) => {
        this.setState(prevState => ({
            elements: prevState.elements.filter(el => el.id !== id)
        }));
    }

    render() {
        return (
            <main 
                id="add-remove-elements-main"
                data-testid="add-remove-elements-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="add-remove-elements-container"
                    data-testid="add-remove-elements-container"
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
                        id="add-remove-elements-title"
                        data-testid="add-remove-elements-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Add/Remove Elements
                    </h1>
                    <p 
                        id="add-remove-elements-description"
                        data-testid="add-remove-elements-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        This example demonstrates adding and removing elements from the DOM.
                    </p>
                    
                    <button
                        id="add-remove-elements-add-button"
                        data-testid="add-remove-elements-add-button"
                        onClick={this.addElement}
                        style={{
                            backgroundColor: '#00416A',
                            color: '#ffffff',
                            padding: '12px 24px',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginBottom: '30px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Add Element
                    </button>

                    <div 
                        id="add-remove-elements-list"
                        data-testid="add-remove-elements-list"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        {this.state.elements.map((element) => (
                            <div
                                key={element.id}
                                id={`add-remove-elements-element-${element.id}`}
                                data-testid={`add-remove-elements-element-${element.id}`}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '15px',
                                    backgroundColor: '#f0f8ff',
                                    borderRadius: '6px',
                                    border: '1px solid #00416A'
                                }}
                            >
                                <span 
                                    id={`add-remove-elements-element-${element.id}-label`}
                                    data-testid={`add-remove-elements-element-${element.id}-label`}
                                    style={{
                                        color: '#00416A',
                                        fontWeight: '500'
                                    }}
                                >
                                    Element {element.id}
                                </span>
                                <button
                                    id={`add-remove-elements-element-${element.id}-delete-button`}
                                    data-testid={`add-remove-elements-element-${element.id}-delete-button`}
                                    onClick={() => this.removeElement(element.id)}
                                    style={{
                                        backgroundColor: '#dc3545',
                                        color: '#ffffff',
                                        padding: '8px 16px',
                                        border: 'none',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#c82333';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#dc3545';
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    {this.state.elements.length === 0 && (
                        <p 
                            id="add-remove-elements-empty-message"
                            data-testid="add-remove-elements-empty-message"
                            style={{
                                color: '#999',
                                fontStyle: 'italic',
                                marginTop: '20px'
                            }}
                        >
                            No elements added yet. Click "Add Element" to add one.
                        </p>
                    )}

                    <div 
                        id="add-remove-elements-back-link-container"
                        data-testid="add-remove-elements-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="add-remove-elements-back-link"
                            data-testid="add-remove-elements-back-link"
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
                    id="add-remove-elements-footer-section"
                    data-testid="add-remove-elements-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default AddRemoveElements;
