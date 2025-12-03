import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import SQL_LOGO from '../../../images/tabs/sqlLogo.png';
import Footer from '../../../components/footer';

const resSql = () => {
    return(
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                color: '#ffffff',
                padding: '60px 20px',
                textAlign: 'center',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
                <h1 style={{
                    fontSize: '48px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    SQL
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    Structured Query Language for Database Management
                </p>
            </div>

            {/* Image Section */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src={SQL_LOGO} 
                    alt='SQL Logo'
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            {/* Main Content */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    Introduction to SQL
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    SQL is a standard language for accessing and manipulating databases.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    What is SQL?
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li>SQL stands for Structured Query Language</li>
                    <li>SQL lets you access and manipulate databases</li>
                    <li>SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987</li>
                </ul>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    History of <a href={link.SQL_HISTORY} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>SQL</a>
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    What Can SQL do?
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px'
                }}>
                    <li>SQL can execute queries against a database</li>
                    <li>SQL can retrieve data from a database</li>
                    <li>SQL can insert records in a database</li>
                    <li>SQL can update records in a database</li>
                    <li>SQL can delete records from a database</li>
                    <li>SQL can create new databases</li>
                    <li>SQL can create new tables in a database</li>
                    <li>SQL can create stored procedures in a database</li>
                    <li>SQL can create views in a database</li>
                    <li>SQL can set permissions on tables, procedures, and views</li>
                </ul>
            </div>

            {/* Installation Guides */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Mac Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postgres App for MAC
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download & Install POSTGRESQL
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to the <a href={link.POSTGRESAPP_MAC} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>URL</a></li>
                            <li>Click on the <strong>Download</strong> Based on the operating system</li>
                            <li>Double click on the <strong>Executable File</strong></li>
                            <li>Warning: is an app downloaded from the internet! Are you sure you want to open it?</li>
                            <li>Solution: Mac {'>'} System Preference {'>'} Privacy {'>'} General {'>'} Allow</li>
                            <li>Click Open</li>
                            <li>Next {'>'} Next {'>'} Select All {'>'} Next {'>'} Default Directory {'>'} Create "password" (all lowercase) {'>'} PORT (remember) {'>'} Next {'>'} By Default {'>'} Next {'>'} Next {'>'} Finish.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download PGADMIN
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to the <a href={link.PGADMIN_MAC} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>URL</a></li>
                            <li>Click on the <strong>Latest Release link</strong></li>
                            <li>Download <strong>.exe file</strong></li>
                            <li>Double click on the Executable File Next {'>'} Accept & Next {'>'} Next {'>'} Next {'>'} Install {'>'} Uncheck box {'>'} Finish</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Download DVDRental Postgres Sample DB
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to the <a href={link.DVDRENTAL} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>URL</a></li>
                            <li>Click on the <strong>dvdrental.tar</strong> file</li>
                            <li>Click on the <strong>Download</strong></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: DVDRental add into pgAdmin 4
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Restart the Computer</li>
                            <li>Search for "pgAdmin app"</li>
                            <li>Open up pgAdmin 4 and set the same password</li>
                            <li>Double click on the PostgreSQL {'>'} Enter your password & Save</li>
                            <li>Right click on <strong>Databases</strong></li>
                            <li>Click on <strong>Create</strong> and then click on <strong>Databases</strong></li>
                            <li>Enter Database name: <strong>DVDRental</strong> and click on <strong>Save</strong></li>
                            <li>Right click on DVDRental and click on <strong>Restore</strong> add <strong>dvdrental path</strong> Select "Restore options" Tab {'>'} Select Pre-data (Yes) Data (Yes) Post-data (Yes) Click on <strong>Restore</strong></li>
                            <li>Right click on DVDRental and click on <strong>Refresh</strong> and Validate Under Schemas there is a 15 tables</li>
                            <li>Click on the Query Tools Icon (on the same panel top database icon)</li>
                            <li>Start writing query <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Select * FROM actor</code>; and click on run button</li>
                        </ul>
                    </div>
                </div>

                {/* Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postgres App for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download & Install POSTGRESQL
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to the <a href={link.POSTGRESAPP_WINDOWS} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>URL</a></li>
                            <li>Click on the <strong>Download</strong> Based on the operating system</li>
                            <li>Double Click <strong>Executable File</strong></li>
                            <li>Next {'>'} Next {'>'} Select All {'>'} Next {'>'} Default Directory {'>'} Create "password" (all lowercase) {'>'} PORT (remember) {'>'} Next {'>'} By Default {'>'} Next {'>'} Next {'>'} Finish.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download PGADMIN
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to the <a href={link.PGADMIN_WINDOWS} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>URL</a></li>
                            <li>Click on the <strong>Latest Release link</strong></li>
                            <li>Download <strong>.exe file</strong></li>
                            <li>Double click on the Executable File Next {'>'} Accept & Next {'>'} Next {'>'} Next {'>'} Install {'>'} Uncheck box {'>'} Finish</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Download DVDRental Postgres Sample DB
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to the <a href={link.DVDRENTAL} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>URL</a></li>
                            <li>Click on the <strong>dvdrental.tar</strong> file</li>
                            <li>Click on the <strong>Download</strong></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: DVDRental add into pgAdmin 4
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Restart the Computer</li>
                            <li>Search for "pgAdmin app"</li>
                            <li>Open up pgAdmin 4 and set the same password</li>
                            <li>Double click on the PostgreSQL {'>'} Enter your password & Save</li>
                            <li>Right click on <strong>Databases</strong></li>
                            <li>Click on <strong>Create</strong> and then click on <strong>Databases</strong></li>
                            <li>Enter Database name: <strong>DVDRental</strong> and click on <strong>Save</strong></li>
                            <li>Right click on DVDRental and click on <strong>Restore</strong> add <strong>dvdrental path</strong> Select "Restore options" Tab {'>'} Select Pre-data (Yes) Data (Yes) Post-data (Yes) Click on <strong>Restore</strong></li>
                            <li>Right click on DVDRental and click on <strong>Refresh</strong> and Validate Under Schemas there is a 15 tables</li>
                            <li>Click on the Query Tools Icon (on the same panel top database icon)</li>
                            <li>Start writing query <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Select * FROM actor</code>; and click on run button</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href={link.SQL_W3SCHOOL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Learn more...
                </a>
                <a 
                    href={link.DBEAVER_INSTALL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    DBeaver Universal Database Tool
                </a>
                <a 
                    href={link.SQL_CODEACADEMEY_COMMANDS} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    SQL Commands CodeCademy
                </a>
                <a 
                    href={link.SQL_W3SHCOOL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    SQL Commands W3Schools
                </a>
            </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resSql;
