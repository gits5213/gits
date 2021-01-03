import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import SQL_LOGO from '../../../images/tabs/sqlLogo.png';

const SQL_HISTORY = 'https://en.wikipedia.org/wiki/SQL';
const SQL_W3SCHOOL = 'https://www.w3schools.com/sql/default.asp';
const POSTGRESAPP = 'https://postgresapp.com/downloads.html';
const PGADMIN = 'https://www.pgadmin.org/';
const DVDRENTAL = 'https://github.com/robconery/dvdrental'; 
const SQL_CODEACADEMEY_COMMANDS = 'https://www.codecademy.com/articles/sql-commands';
const SQL_W3SHCOOL = 'https://www.w3schools.com/sql/sql_syntax.asp'; 

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
                <p>History of <a href={SQL_HISTORY} target="_blank" rel="noopener noreferrer">SQL</a></p>
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
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={SQL_W3SCHOOL} target="_blank" rel="noopener noreferrer">
                    Learn more...
                </a>
            </div>
            <hr />
            <div>
                <h3> Postgres App</h3>
                <ul>
                    <li>Navigate to the <a href={POSTGRESAPP} target="_blank" rel="noopener noreferrer">URL</a></li>
                    <li>Click on the <strong>Download</strong> Tab and download Latest Release </li>
                    <li>Clik on the <strong>Introduction</strong> Tab and follow the Instruction</li>
                </ul>
            </div>
            <div>
                <h3> pgAdmin</h3>
                <ul>
                    <li>Navigate to the <a href={PGADMIN} target="_blank" rel="noopener noreferrer">URL</a></li>
                    <li>Click on the <strong>Download</strong> and Select your Operating System </li>
                    <li>Download <strong>pgAdmin 4</strong></li>
                </ul>
            </div>
            <div>
                <h3>DVDRental Postgres Sample DB Download</h3>
                <ul>
                    <li>Navigate to the <a href={DVDRENTAL} target="_blank" rel="noopener noreferrer">URL</a></li>
                    <li>Click on the <strong>dvdrental.tar</strong> file </li>
                    <li>Click on the <strong>Download</strong></li>
                </ul>
            </div>
            <div>
                <h3> DVDRental add into pgAdmin 4 </h3>
                <ul>
                    <li>Open up pgAdmin 4 and Connected with your password</li>
                    <li>Right click on <strong>Databases</strong></li>
                    <li>Click on <strong>Create</strong>  and then click on <strong>Databases</strong></li>
                    <li>Enter Database name: <strong>DVDRental</strong> and click on <strong>Save</strong></li>
                    <li>Rright click on DVDRental and click on <strong>Restore</strong> add <strong>dvdrental path</strong> and then click on <strong>Restore</strong></li>
                    <li>Right click on DVDRental and click on <strong>Refresh</strong>and Validate Under Schemas there is a 15 tables</li>
                    <li>Click on the Query Tools Icon (on the same panel top database icon)</li>
                    <li>Start writing query <code className='tag-Color'>Select * FROM actor</code>; and click on run button</li>
                </ul>
            </div>
            <hr />
            <div className='pt4 sql-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={SQL_CODEACADEMEY_COMMANDS} target="_blank" rel="noopener noreferrer">
                    SQL Commands CodeCademy
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={SQL_W3SHCOOL} target="_blank" rel="noopener noreferrer">
                    SQL Commands W3Schools
                </a>
            </div>

            
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resSql;