import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import SQL_LOGO from '../../../images/tabs/sqlLogo.png';
import { Grid, Cell } from 'react-mdl';
import Footer from '../../../components/footer';

const resSql = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>SQL</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 sql-logo' src={SQL_LOGO} alt='SQL Logo'/>
            </div>
            <div>
                <h3>Introduction to SQL</h3>
                <p>
                    SQL is a standard language for accessing and manipulating databases.
                </p>
            </div>
            <div>
                <h3>What is SQL?</h3>
                <ul>
                    <li>SQL stands for Structured Query Language</li>
                    <li>SQL lets you access and manipulate databases</li>
                    <li>SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987</li>
                </ul>
                <p>History of <a href={link.SQL_HISTORY} target="_blank" rel="noopener noreferrer">SQL</a></p>
            </div>
            <div>
                <h3>What Can SQL do?</h3>
                <ul>
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
            <div className='pt4 sql-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SQL_W3SCHOOL} target="_blank" rel="noopener noreferrer">
                    Learn more...
                </a>
            </div>
            <hr />
            <Grid className="border">
                <Cell className='pl4' col={6}>
                    <div>
                        <h3 className=''> Postgres App for MAC</h3>
                        <h5> Step 1: Download & Install POSTGRESQL</h5>
                        <ul>
                            <li>Navigate to the <a href={link.POSTGRESAPP_MAC} target="_blank" rel="noopener noreferrer">URL</a></li>
                            <li>Click on the <strong>Download</strong> Based on the operating system</li>
                            <li>Double clik on the <strong>Executable File</strong></li>
                            <li>Warning: is an app downloaded from the internet! Are you sure you want to open it?</li>
                            <li>Solution: Mac {'>'} System Preference {'>'} Privacy {'>'} General {'>'} Allow</li>
                            <li>Click Open</li>
                            <li>
                                Next {'>'} Next {'>'} Select All {'>'} Next {'>'} <br />
                                Default Directory {'>'} Create "password" (all lowercase) {'>'} <br />
                                PORT (remember) {'>'} Next {'>'} By Default {'>'} <br />
                                Next {'>'} Next {'>'} Finish.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5> Step 2: Download PGADMIN</h5>
                        <ul>
                            <li>Navigate to the <a href={link.PGADMIN_MAC} target="_blank" rel="noopener noreferrer">URL</a></li>
                            <li>Click on the <strong>Latest Release link</strong></li>
                            <li>Download <strong>.exe file</strong></li>
                            <li>
                                Double click on the Executable File <br />
                                Next {'>'} Accept & Next {'>'} Next {'>'} Next {'>'} <br />
                                Install {'>'} Uncheck box {'>'} Finish <br />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Step 3: Download DVDRental Postgres Sample DB Download</h5>
                        <ul>
                            <li>Navigate to the <a href={link.DVDRENTAL} target="_blank" rel="noopener noreferrer">URL</a></li>
                            <li>Click on the <strong>dvdrental.tar</strong> file </li>
                            <li>Click on the <strong>Download</strong></li>
                        </ul>
                    </div>
                    <div>
                        <h5> Step4: DVDRental add into pgAdmin 4 </h5>
                        <ul>
                            <li>Restart the Computer</li>
                            <li>Search for "pgAdmin app"</li>
                            <li>Open up pgAdmin 4 and set the same password </li>
                            <li>Double click on the PostgreSQL {'>'} Enter your password & Save</li>
                            <li>Right click on <strong>Databases</strong></li>
                            <li>Click on <strong>Create</strong>  and then click on <strong>Databases</strong></li>
                            <li>Enter Database name: <strong>DVDRental</strong> and click on <strong>Save</strong></li>
                            <li>Rright click on DVDRental and click on <strong>Restore</strong> add <strong>dvdrental path</strong> 
                                Select "Restore options" Tab {'>'} Select <br />
                                Pre-data (Yes) <br />
                                Data (Yes) <br />
                                Post-data (Yes) <br />
                                Click on <strong>Restore</strong>
                            </li>
                            <li>Right click on DVDRental and click on <strong>Refresh</strong>and Validate Under Schemas there is a 15 tables</li>
                            <li>Click on the Query Tools Icon (on the same panel top database icon)</li>
                            <li>Start writing query <code className='tag-Color'>Select * FROM actor</code>; and click on run button</li>
                        </ul>
                    </div>
                </Cell>
                <Cell className='pl4' col={6}>
                    <div>
                        <h3 className=''> Postgres App for Windows</h3>
                        <h5> Step 1: Download & Install POSTGRESQL</h5>
                        <ul>
                            <li>Navigate to the <a href={link.POSTGRESAPP_WINDOWS} target="_blank" rel="noopener noreferrer">URL</a></li>
                            <li>Click on the <strong>Download</strong> Based on the operating system </li>
                            <li>Double Click <strong>Executable File</strong></li>
                            <li>
                                Next {'>'} Next {'>'} Select All {'>'} Next {'>'} <br />
                                Default Directory {'>'} Create "password" (all lowercase) {'>'} <br />
                                PORT (remember) {'>'} Next {'>'} By Default {'>'} <br />
                                Next {'>'} Next {'>'} Finish.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5> Step 2: Download PGADMIN</h5>
                        <ul>
                            <li>Navigate to the <a href={link.PGADMIN_WINDOWS} target="_blank" rel="noopener noreferrer">URL</a></li>
                            <li>Click on the <strong>Latest Release link</strong></li>
                            <li>Download <strong>.exe file</strong></li>
                            <li>
                                Double click on the Executable File <br />
                                Next {'>'} Accept & Next {'>'} Next {'>'} Next {'>'} <br />
                                Install {'>'} Uncheck box {'>'} Finish <br />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Step 3: Download DVDRental Postgres Sample DB Download</h5>
                        <ul>
                            <li>Navigate to the <a href={link.DVDRENTAL} target="_blank" rel="noopener noreferrer">URL</a></li>
                            <li>Click on the <strong>dvdrental.tar</strong> file </li>
                            <li>Click on the <strong>Download</strong></li>
                        </ul>
                    </div>
                    <div>
                        <h5> Step4: DVDRental add into pgAdmin 4 </h5>
                        <ul>
                            <li>Restart the Computer</li>
                            <li>Search for "pgAdmin app"</li>
                            <li>Open up pgAdmin 4 and set the same password </li>
                            <li>Double click on the PostgreSQL {'>'} Enter your password & Save</li>
                            <li>Right click on <strong>Databases</strong></li>
                            <li>Click on <strong>Create</strong>  and then click on <strong>Databases</strong></li>
                            <li>Enter Database name: <strong>DVDRental</strong> and click on <strong>Save</strong></li>
                            <li>Rright click on DVDRental and click on <strong>Restore</strong> add <strong>dvdrental path</strong> 
                                Select "Restore options" Tab {'>'} Select <br />
                                Pre-data (Yes) <br />
                                Data (Yes) <br />
                                Post-data (Yes) <br />
                                Click on <strong>Restore</strong>
                            </li>
                            <li>Right click on DVDRental and click on <strong>Refresh</strong>and Validate Under Schemas there is a 15 tables</li>
                            <li>Click on the Query Tools Icon (on the same panel top database icon)</li>
                            <li>Start writing query <code className='tag-Color'>Select * FROM actor</code>; and click on run button</li>
                        </ul>
                    </div>
                </Cell>
            </Grid>
            <hr />
            <div className='pt4 sql-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.DBEAVER_INSTALL} target="_blank" rel="noopener noreferrer">
                    DBeaver Universal Database Tool
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SQL_CODEACADEMEY_COMMANDS} target="_blank" rel="noopener noreferrer">
                    SQL Commands CodeCademy
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SQL_W3SHCOOL} target="_blank" rel="noopener noreferrer">
                    SQL Commands W3Schools
                </a>
            </div>
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </div>
    )
}
export default resSql;