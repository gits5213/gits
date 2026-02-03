import React from 'react';
import link from '../../../utilities/links.json';
import SQL_LOGO from '../../../images/tabs/sqlLogo.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const resSql = () => {
    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                ...leftAlignStyles.heroSection,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={leftAlignStyles.heroTitle}>
                        SQL
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Structured Query Language for Database Management
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={getImageSrc(SQL_LOGO)} 
                        alt='SQL Logo'
                        style={{
                            maxWidth: '300px',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            filter: 'brightness(1.1)'
                        }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Introduction to SQL
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    SQL is a standard language for accessing and manipulating databases.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is SQL?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>SQL stands for Structured Query Language</li>
                    <li>SQL lets you access and manipulate databases</li>
                    <li>SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987</li>
                </ul>
                <p style={leftAlignStyles.paragraph}>
                    History of <a href={link.SQL_HISTORY} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>SQL</a>
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What Can SQL do?
                </h3>
                <ul style={leftAlignStyles.list}>
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

            {/* Getting started SQL Section */}
            <div style={{
                ...leftAlignStyles.mainContent,
                marginTop: '24px',
                marginBottom: '40px',
                padding: '32px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
                <h2 style={{
                    ...leftAlignStyles.sectionHeading,
                    color: '#00416A',
                    marginBottom: '24px',
                    paddingBottom: '12px',
                    borderBottom: '3px solid #00416A'
                }}>
                    Getting started SQL
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Once you have PostgreSQL and pgAdmin set up (or any SQL client), use this section to run your first queries. The examples assume the <strong>dvdrental</strong> sample database and common tables like <code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>actor</code>, <code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>film</code>, and <code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>customer</code>.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Basic query: SELECT
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Use <strong>SELECT</strong> to read data from a table. You specify columns (or <code>*</code> for all columns) and the table name.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- All columns from actor table
SELECT * FROM actor;

-- Specific columns
SELECT actor_id, first_name, last_name FROM actor;

-- Limit number of rows (PostgreSQL)
SELECT * FROM actor LIMIT 10;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Filtering: WHERE
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Use <strong>WHERE</strong> to filter rows by a condition. You can compare columns to values and combine conditions with <code>AND</code>, <code>OR</code>, and <code>NOT</code>.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Actors with first name 'Nick'
SELECT * FROM actor WHERE first_name = 'Nick';

-- Actors whose last name starts with 'B'
SELECT * FROM actor WHERE last_name LIKE 'B%';

-- Combine conditions
SELECT * FROM film WHERE release_year = 2006 AND rental_rate > 2.99;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Sorting: ORDER BY
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Use <strong>ORDER BY</strong> to sort results. Default is ascending (<code>ASC</code>); use <code>DESC</code> for descending.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Actors ordered by last name A–Z
SELECT * FROM actor ORDER BY last_name;

-- Films by rental rate, highest first
SELECT title, rental_rate FROM film ORDER BY rental_rate DESC LIMIT 10;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Aggregation: COUNT, SUM, AVG
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Aggregate functions summarize data. Use with <strong>GROUP BY</strong> when you want totals per group.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>COUNT(*)</strong> — number of rows</li>
                    <li><strong>SUM(column)</strong> — sum of numeric values</li>
                    <li><strong>AVG(column)</strong> — average</li>
                    <li><strong>MIN(column)</strong> / <strong>MAX(column)</strong> — smallest / largest value</li>
                </ul>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Total number of actors
SELECT COUNT(*) FROM actor;

-- Average rental rate of films
SELECT AVG(rental_rate) AS avg_rental FROM film;

-- Number of films per rating (e.g. PG, G, R)
SELECT rating, COUNT(*) AS film_count FROM film GROUP BY rating;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Joining tables: JOIN
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Use <strong>JOIN</strong> to combine rows from two or more tables based on a related column (e.g. a foreign key). <strong>INNER JOIN</strong> returns only rows that match in both tables.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Films with their categories (dvdrental schema)
SELECT f.title, c.name AS category
FROM film f
INNER JOIN film_category fc ON f.film_id = fc.film_id
INNER JOIN category c ON fc.category_id = c.category_id
LIMIT 20;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Next steps
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Practice <strong>SELECT</strong>, <strong>WHERE</strong>, and <strong>ORDER BY</strong> on <code>actor</code> and <code>film</code>.</li>
                    <li>Try <strong>COUNT</strong>, <strong>AVG</strong>, and <strong>GROUP BY</strong> to summarize data.</li>
                    <li>Explore <strong>JOIN</strong>s using the dvdrental schema (e.g. <code>film</code>, <code>film_category</code>, <code>category</code>).</li>
                    <li>Use the links above (W3Schools, Codecademy, DBeaver) for more tutorials and a universal database tool.</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Resources for Practice
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Learn basics:</strong> <a href={link.SQLBOLT} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>SQLBolt</a></li>
                    <li><strong>Drill real exercises:</strong> <a href={link.PGEXERCISES} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>pgexercises</a></li>
                    <li><strong>Experiment / share queries:</strong> <a href={link.DB_FIDDLE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>db&#60;&#62;fiddle</a> or <a href={link.SQL_FIDDLE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>SQL Fiddle</a></li>
                </ul>
            </div>

            {/* Advanced SQL knowledge Section */}
            <div style={{
                ...leftAlignStyles.mainContent,
                marginTop: '24px',
                marginBottom: '40px',
                padding: '32px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
                <h2 style={{
                    ...leftAlignStyles.sectionHeading,
                    color: '#00416A',
                    marginBottom: '24px',
                    paddingBottom: '12px',
                    borderBottom: '3px solid #00416A'
                }}>
                    Advanced SQL knowledge
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    After mastering basics (SELECT, WHERE, JOIN, GROUP BY), these concepts help you write more powerful, maintainable, and performant queries. Examples use the <strong>dvdrental</strong> schema where helpful.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Subqueries
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    A subquery is a query nested inside another query. Use it in <code>WHERE</code>, <code>FROM</code>, or <code>SELECT</code> when you need a result set or single value from an inner query.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Films with rental_rate above average (subquery in WHERE)
SELECT title, rental_rate FROM film
WHERE rental_rate > (SELECT AVG(rental_rate) FROM film);

-- Use subquery as a derived table in FROM
SELECT category_name, cnt
FROM (
  SELECT c.name AS category_name, COUNT(*) AS cnt
  FROM film_category fc
  JOIN category c ON fc.category_id = c.category_id
  GROUP BY c.name
) AS sub
WHERE cnt > 60;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Common Table Expressions (CTEs) — WITH
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    CTEs let you name a subquery and reuse it in the same statement. They improve readability and allow recursive queries (e.g. hierarchies).
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- CTE: top categories by film count, then join to film
WITH category_counts AS (
  SELECT fc.category_id, COUNT(*) AS film_count
  FROM film_category fc
  GROUP BY fc.category_id
)
SELECT c.name, cc.film_count
FROM category c
JOIN category_counts cc ON c.category_id = cc.category_id
ORDER BY cc.film_count DESC
LIMIT 5;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    HAVING — filter after GROUP BY
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>WHERE</strong> filters rows before grouping; <strong>HAVING</strong> filters groups after aggregation. Use HAVING with aggregate expressions.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Ratings that have more than 150 films
SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating
HAVING COUNT(*) > 150;

-- Categories with average rental rate above 3
SELECT c.name, AVG(f.rental_rate) AS avg_rate
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
GROUP BY c.name
HAVING AVG(f.rental_rate) > 3;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Window functions
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Window functions compute a value per row using a “window” of rows (e.g. partition). They do not collapse rows like <code>GROUP BY</code>. Common functions: <code>ROW_NUMBER()</code>, <code>RANK()</code>, <code>DENSE_RANK()</code>, <code>SUM() OVER ()</code>, <code>LAG()</code> / <code>LEAD()</code>.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Rank films by rental_rate within each rating (G, PG, etc.)
SELECT title, rating, rental_rate,
  RANK() OVER (PARTITION BY rating ORDER BY rental_rate DESC) AS rank_in_rating
FROM film
ORDER BY rating, rank_in_rating
LIMIT 15;

-- Running total of replacement_cost by film_id order
SELECT film_id, title, replacement_cost,
  SUM(replacement_cost) OVER (ORDER BY film_id) AS running_total
FROM film
LIMIT 10;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    LEFT, RIGHT, and FULL OUTER JOIN
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>INNER JOIN</strong> keeps only matching rows. <strong>LEFT JOIN</strong> keeps all rows from the left table and matches from the right (NULLs where no match). <strong>RIGHT JOIN</strong> is the opposite. <strong>FULL OUTER JOIN</strong> keeps all rows from both sides.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- All actors; add film titles where they appear (NULL if none)
SELECT a.first_name, a.last_name, f.title
FROM actor a
LEFT JOIN film_actor fa ON a.actor_id = fa.actor_id
LEFT JOIN film f ON fa.film_id = f.film_id
ORDER BY a.last_name
LIMIT 20;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    UNION and UNION ALL
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>UNION</strong> stacks two result sets (same number and compatible types of columns) and removes duplicates. <strong>UNION ALL</strong> keeps duplicates and is usually faster when you know duplicates are allowed.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Example: list of "names" from two different sources
SELECT first_name AS name FROM actor WHERE first_name LIKE 'A%'
UNION
SELECT last_name FROM actor WHERE last_name LIKE 'A%'
ORDER BY name
LIMIT 15;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    EXISTS and NOT EXISTS
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    <strong>EXISTS</strong> returns true if a subquery returns at least one row; <strong>NOT EXISTS</strong> the opposite. Often used for “has at least one related row” or “does not have any” checks, and can be more efficient than <code>IN</code> with large sets.
                </p>
                <pre style={{
                    ...leftAlignStyles.codeBlock,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    overflowX: 'auto',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                }}>
{`-- Customers who have at least one rental
SELECT customer_id, first_name, last_name
FROM customer c
WHERE EXISTS (
  SELECT 1 FROM rental r WHERE r.customer_id = c.customer_id
)
LIMIT 10;`}
                </pre>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Indexes and performance (overview)
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Indexes speed up <code>WHERE</code>, <code>JOIN</code>, and <code>ORDER BY</code> on the indexed columns; they add cost to <code>INSERT</code> / <code>UPDATE</code> / <code>DELETE</code>.</li>
                    <li>Create indexes on columns you filter or join on often (e.g. <code>customer_id</code>, <code>film_id</code>).</li>
                    <li>Use <code>EXPLAIN</code> (or <code>EXPLAIN ANALYZE</code> in PostgreSQL) to see how the database executes a query.</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Next steps for advanced SQL
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Practice subqueries and CTEs on dvdrental; refactor some JOINs into CTEs for clarity.</li>
                    <li>Use window functions for rankings, running totals, and “previous/next row” logic.</li>
                    <li>Try <code>EXISTS</code> / <code>NOT EXISTS</code> instead of <code>IN</code> for large sets and compare readability and performance.</li>
                    <li>Use the practice resources (SQLBolt, pgexercises, db&#60;&#62;fiddle, SQL Fiddle) to drill advanced patterns.</li>
                </ul>
            </div>

            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default resSql;
