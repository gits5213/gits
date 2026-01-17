import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class SortableDataTables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortColumn: null,
            sortDirection: 'asc',
            data: [
                { lastName: 'Smith', firstName: 'John', email: 'jsmith@gmail.com', due: '$50.00', website: 'http://www.john.com', action: 'edit delete' },
                { lastName: 'Bach', firstName: 'Frank', email: 'fbach@yahoo.com', due: '$51.00', website: 'http://www.frank.com', action: 'edit delete' },
                { lastName: 'Doe', firstName: 'Jason', email: 'jdoe@hotmail.com', due: '$100.00', website: 'http://www.jason.com', action: 'edit delete' },
                { lastName: 'Conway', firstName: 'Tim', email: 'tconway@earthlink.net', due: '$50.00', website: 'http://www.tim.com', action: 'edit delete' }
            ]
        };
    }

    handleSort = (column) => {
        const direction = this.state.sortColumn === column && this.state.sortDirection === 'asc' ? 'desc' : 'asc';
        const sortedData = [...this.state.data].sort((a, b) => {
            if (direction === 'asc') {
                return a[column] > b[column] ? 1 : -1;
            } else {
                return a[column] < b[column] ? 1 : -1;
            }
        });
        this.setState({
            sortColumn: column,
            sortDirection: direction,
            data: sortedData
        });
    }

    render() {
        return (
            <main style={{
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                padding: '40px 20px'
            }}>
                <div style={{
                    maxWidth: '1000px',
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
                        Sortable Data Tables
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Click on column headers to sort the table data.
                    </p>
                    
                    <div style={{
                        overflowX: 'auto',
                        marginBottom: '30px'
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse'
                        }}>
                            <thead>
                                <tr style={{ backgroundColor: '#00416A', color: '#ffffff' }}>
                                    <th
                                        onClick={() => this.handleSort('lastName')}
                                        style={{
                                            padding: '12px',
                                            textAlign: 'left',
                                            border: '1px solid #ddd',
                                            cursor: 'pointer',
                                            userSelect: 'none'
                                        }}
                                    >
                                        Last Name {this.state.sortColumn === 'lastName' && (this.state.sortDirection === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        onClick={() => this.handleSort('firstName')}
                                        style={{
                                            padding: '12px',
                                            textAlign: 'left',
                                            border: '1px solid #ddd',
                                            cursor: 'pointer',
                                            userSelect: 'none'
                                        }}
                                    >
                                        First Name {this.state.sortColumn === 'firstName' && (this.state.sortDirection === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        onClick={() => this.handleSort('email')}
                                        style={{
                                            padding: '12px',
                                            textAlign: 'left',
                                            border: '1px solid #ddd',
                                            cursor: 'pointer',
                                            userSelect: 'none'
                                        }}
                                    >
                                        Email {this.state.sortColumn === 'email' && (this.state.sortDirection === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        onClick={() => this.handleSort('due')}
                                        style={{
                                            padding: '12px',
                                            textAlign: 'left',
                                            border: '1px solid #ddd',
                                            cursor: 'pointer',
                                            userSelect: 'none'
                                        }}
                                    >
                                        Due {this.state.sortColumn === 'due' && (this.state.sortDirection === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        onClick={() => this.handleSort('website')}
                                        style={{
                                            padding: '12px',
                                            textAlign: 'left',
                                            border: '1px solid #ddd',
                                            cursor: 'pointer',
                                            userSelect: 'none'
                                        }}
                                    >
                                        Web Site {this.state.sortColumn === 'website' && (this.state.sortDirection === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th style={{
                                        padding: '12px',
                                        textAlign: 'left',
                                        border: '1px solid #ddd'
                                    }}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((row, index) => (
                                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa' }}>
                                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.lastName}</td>
                                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.firstName}</td>
                                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.email}</td>
                                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.due}</td>
                                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.website}</td>
                                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{row.action}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default SortableDataTables;
