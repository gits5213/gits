import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class Hovers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredElement: null
        };
    }

    render() {
        const users = [
            { id: 1, name: 'name: user1', view: 'View profile' },
            { id: 2, name: 'name: user2', view: 'View profile' },
            { id: 3, name: 'name: user3', view: 'View profile' }
        ];

        return (
            <main 
                id="hovers-main"
                data-testid="hovers-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="hovers-container"
                    data-testid="hovers-container"
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
                        id="hovers-title"
                        data-testid="hovers-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Hovers
                    </h1>
                    <p 
                        id="hovers-description"
                        data-testid="hovers-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Hover over the images below to see additional information and actions.
                    </p>
                    
                    <div 
                        id="hovers-users-grid"
                        data-testid="hovers-users-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '30px',
                            marginBottom: '30px'
                        }}
                    >
                        {users.map((user) => (
                            <div
                                key={user.id}
                                id={`hovers-user-${user.id}`}
                                data-testid={`hovers-user-${user.id}`}
                                style={{
                                    position: 'relative',
                                    padding: '20px',
                                    backgroundColor: '#f0f8ff',
                                    borderRadius: '8px',
                                    border: '2px solid #00416A',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => this.setState({ hoveredElement: user.id })}
                                onMouseLeave={() => this.setState({ hoveredElement: null })}
                            >
                                <div 
                                    id={`hovers-user-${user.id}-avatar`}
                                    data-testid={`hovers-user-${user.id}-avatar`}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: '#00416A',
                                        borderRadius: '50%',
                                        margin: '0 auto 15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {user.id}
                                </div>
                                <p 
                                    id={`hovers-user-${user.id}-name`}
                                    data-testid={`hovers-user-${user.id}-name`}
                                    style={{
                                        textAlign: 'center',
                                        color: '#333',
                                        marginBottom: '10px',
                                        fontWeight: '600'
                                    }}
                                >
                                    {user.name}
                                </p>
                                {this.state.hoveredElement === user.id && (
                                    <div 
                                        id={`hovers-user-${user.id}-hover-info`}
                                        data-testid={`hovers-user-${user.id}-hover-info`}
                                        style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: '#00416A',
                                            color: '#ffffff',
                                            padding: '8px 16px',
                                            borderRadius: '4px',
                                            fontSize: '14px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {user.view}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div 
                        id="hovers-note"
                        data-testid="hovers-note"
                        style={{
                            backgroundColor: '#fff3cd',
                            padding: '15px',
                            borderRadius: '6px',
                            marginBottom: '20px'
                        }}
                    >
                        <p 
                            id="hovers-note-text"
                            data-testid="hovers-note-text"
                            style={{ margin: 0, color: '#856404' }}
                        >
                            <strong>Note:</strong> Hover over the user avatars above to see additional information appear.
                        </p>
                    </div>

                    <div 
                        id="hovers-back-link-container"
                        data-testid="hovers-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="hovers-back-link"
                            data-testid="hovers-back-link"
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
                    id="hovers-footer-section"
                    data-testid="hovers-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default Hovers;
