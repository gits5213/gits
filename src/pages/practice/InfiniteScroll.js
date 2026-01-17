import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class InfiniteScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`),
            loading: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100) {
            if (!this.state.loading) {
                this.loadMore();
            }
        }
    }

    loadMore = () => {
        this.setState({ loading: true });
        
        setTimeout(() => {
            const newItems = Array.from(
                { length: 10 },
                (_, i) => `Item ${this.state.items.length + i + 1}`
            );
            this.setState(prevState => ({
                items: [...prevState.items, ...newItems],
                loading: false
            }));
        }, 1000);
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
                        Infinite Scroll
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Scroll down to load more content automatically.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        marginBottom: '30px'
                    }}>
                        {this.state.items.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '20px',
                                    backgroundColor: '#f0f8ff',
                                    borderRadius: '6px',
                                    border: '1px solid #00416A'
                                }}
                            >
                                <p style={{
                                    margin: 0,
                                    color: '#333',
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {this.state.loading && (
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                            backgroundColor: '#fff3cd',
                            borderRadius: '6px',
                            marginBottom: '20px'
                        }}>
                            <p style={{ margin: 0, color: '#856404', fontWeight: '600' }}>
                                Loading more content...
                            </p>
                        </div>
                    )}

                    <div style={{
                        backgroundColor: '#d1ecf1',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#0c5460' }}>
                            <strong>Total Items:</strong> {this.state.items.length}
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

export default InfiniteScroll;
