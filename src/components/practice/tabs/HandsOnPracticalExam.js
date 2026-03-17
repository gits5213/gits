import React, { useState } from 'react';
import '../../../styles/base.css';

const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: 700,
    color: '#00416A',
    marginBottom: '12px',
    textAlign: 'left',
};

const subTitleStyle = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#00416A',
    marginTop: '20px',
    marginBottom: '8px',
    textAlign: 'left',
};

const paragraphStyle = {
    fontSize: '14px',
    lineHeight: 1.8,
    color: '#333',
    marginBottom: '8px',
    textAlign: 'left',
};

const listStyle = {
    fontSize: '14px',
    lineHeight: 1.8,
    color: '#333',
    paddingLeft: '20px',
    marginBottom: '8px',
    textAlign: 'left',
};

const HandsOnPracticalExam = () => {
    const [selectedSet, setSelectedSet] = useState('1');

    return (
        <main
            id="hands-on-practical-exam-main"
            data-testid="hands-on-practical-exam-main"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
            }}
        >
            <div
                id="hands-on-practical-exam-container"
                data-testid="hands-on-practical-exam-container"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '40px 20px',
                }}
            >
                {/* Header */}
                <section
                    id="hands-on-practical-exam-header"
                    data-testid="hands-on-practical-exam-header"
                    style={{
                        textAlign: 'left',
                        marginBottom: '32px',
                    }}
                >
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                            borderRadius: '20px',
                            padding: '32px 24px',
                            boxShadow: '0 10px 30px rgba(0, 65, 106, 0.25)',
                            color: '#ffffff',
                        }}
                    >
                        <h1
                            id="hands-on-practical-exam-title"
                            data-testid="hands-on-practical-exam-title"
                            style={{
                                fontSize: '32px',
                                fontWeight: 'bold',
                                marginBottom: '8px',
                            }}
                        >
                            Hands-On Practical Exam
                        </h1>
                        <p
                            id="hands-on-practical-exam-subtitle"
                            data-testid="hands-on-practical-exam-subtitle"
                            style={{
                                fontSize: '16px',
                                margin: 0,
                                opacity: 0.95,
                            }}
                        >
                            10 students • 10 unique sets • UI Automation, API Testing, Mobile Automation, Performance Testing
                        </p>
                    </div>
                </section>

                {/* Exam Overview */}
                <section
                    id="hands-on-practical-exam-overview"
                    data-testid="hands-on-practical-exam-overview"
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px 20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        marginBottom: '24px',
                        border: '1px solid #e9ecef',
                    }}
                >
                    <h2 style={sectionTitleStyle}>Exam Instructions</h2>
                    <p style={paragraphStyle}>
                        <strong>Exam Duration:</strong> 3 Hours
                    </p>
                    <p style={paragraphStyle}>
                        This practical exam evaluates your hands-on skills across{' '}
                        <strong>UI Automation</strong>, <strong>API Testing</strong>,{' '}
                        <strong>Mobile Android Automation</strong>, <strong>Performance Testing</strong>,{' '}
                        and <strong>SQL</strong>. Each student receives one unique exam set
                        containing 4 tasks (one from the automation/performance areas) plus a shared SQL
                        task, and must complete all required tasks from the assigned set. This is an{' '}
                        <strong>open book exam</strong>: you may use your own notes, prior project code,
                        official documentation, and online resources, but your submitted work must be
                        your own.
                    </p>

                    <h3 style={subTitleStyle}>Tools & Technologies</h3>
                    <ul style={listStyle}>
                        <li>
                            <strong>UI Automation:</strong> Playwright with TypeScript
                        </li>
                        <li>
                            <strong>API Testing:</strong> Postman and Newman
                        </li>
                        <li>
                            <strong>Mobile Android Automation:</strong> Appium, Android Emulator,
                            WebdriverIO, TypeScript, UIAutomator2
                        </li>
                        <li>
                            <strong>Performance Testing:</strong> Apache JMeter
                        </li>
                        <li>
                            <strong>SQL:</strong> Any relational database (e.g., SQL Server, PostgreSQL,
                            MySQL) and a query tool of your choice
                        </li>
                    </ul>

                    <h3 style={subTitleStyle}>General Instructions</h3>
                    <ul style={listStyle}>
                        <li>Use your Windows machine.</li>
                        <li>Use VS Code as your development environment.</li>
                        <li>Follow clean coding and folder structure best practices.</li>
                        <li>Add comments where they help clarify intent.</li>
                        <li>Ensure all scripts are executable and working.</li>
                        <li>
                            Capture evidence where needed (screenshots, console output, Newman
                            report, JMeter results).
                        </li>
                    </ul>
                </section>

                {/* Submission & Evaluation */}
                <section
                    id="hands-on-practical-exam-submission"
                    data-testid="hands-on-practical-exam-submission"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '20px',
                        marginBottom: '24px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            padding: '20px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                            border: '1px solid #e9ecef',
                        }}
                    >
                        <h3 style={subTitleStyle}>Mandatory Submission Steps</h3>
                        <ol style={listStyle}>
                            <li>
                                Create a Git branch using the naming convention:{' '}
                                <code>practicalLabYourLastName</code> (example:{' '}
                                <code>practicalLabRahman</code>).
                            </li>
                            <li>Push your code to Azure DevOps (ADO).</li>
                            <li>Create a Pull Request (PR).</li>
                            <li>Do not merge any code into the <code>main</code> branch.</li>
                            <li>Send your PR link to the instructor via Microsoft Chat.</li>
                        </ol>
                    </div>

                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            padding: '20px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                            border: '1px solid #e9ecef',
                        }}
                    >
                        <h3 style={subTitleStyle}>Expected Deliverables</h3>
                        <ul style={listStyle}>
                            <li>UI automation scripts.</li>
                            <li>Postman collection and environment (if needed).</li>
                            <li>Newman execution command or report.</li>
                            <li>Mobile automation scripts.</li>
                            <li>JMeter test plan (<code>.jmx</code>).</li>
                            <li>SQL file with required exam queries (for example, <code>exam-sql-queries.sql</code>).</li>
                            <li>README or execution notes.</li>
                            <li>Screenshots / logs / reports as supporting evidence.</li>
                        </ul>
                    </div>

                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            padding: '20px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                            border: '1px solid #e9ecef',
                        }}
                    >
                        <h3 style={subTitleStyle}>Evaluation Criteria</h3>
                        <ul style={listStyle}>
                            <li>Correctness of implementation.</li>
                            <li>Code quality and structure.</li>
                            <li>Successful execution.</li>
                            <li>Assertion and validation coverage.</li>
                            <li>Proper use of tools and frameworks.</li>
                            <li>Git branching, push, and PR creation.</li>
                            <li>Submission completeness.</li>
                        </ul>
                    </div>
                </section>

                {/* Student Sets */}
                <section
                    id="hands-on-practical-exam-sets"
                    data-testid="hands-on-practical-exam-sets"
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        border: '1px solid #e9ecef',
                        marginBottom: '24px',
                    }}
                >
                    <h2 style={sectionTitleStyle}>Student Practical Exam Sets (10 Unique Exam Sets)</h2>
                    <p style={paragraphStyle}>
                        Each student is assigned <strong>one exam set</strong>. Do not swap sets with
                        other students. Complete all four tasks (UI, API, Mobile, Performance) from
                        your assigned exam set, plus the shared SQL task.
                    </p>

                    {/* Set selector */}
                    <div
                        style={{
                            marginTop: '12px',
                            marginBottom: '16px',
                        }}
                    >
                        <label
                            htmlFor="hands-on-set-selector"
                            style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#00416A',
                                marginRight: '8px',
                            }}
                        >
                            Select your assigned set:
                        </label>
                        <select
                            id="hands-on-set-selector"
                            data-testid="hands-on-set-selector"
                            value={selectedSet}
                            onChange={(e) => setSelectedSet(e.target.value)}
                            style={{
                                padding: '6px 10px',
                                borderRadius: '6px',
                                border: '1px solid #ced4da',
                                fontSize: '14px',
                                minWidth: '160px',
                            }}
                        >
                            <option value="1">Exam Set 1</option>
                            <option value="2">Exam Set 2</option>
                            <option value="3">Exam Set 3</option>
                            <option value="4">Exam Set 4</option>
                            <option value="5">Exam Set 5</option>
                            <option value="6">Exam Set 6</option>
                            <option value="7">Exam Set 7</option>
                            <option value="8">Exam Set 8</option>
                            <option value="9">Exam Set 9</option>
                            <option value="10">Exam Set 10</option>
                        </select>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '16px',
                            marginTop: '16px',
                        }}
                    >
                        {/* Set 1 */}
                        {selectedSet === '1' && (
                        <div
                            id="hands-on-set-1"
                            data-testid="hands-on-set-1"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 1</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to https://www.amazon.com/</li>
                                <li>Validate the page title contains “Amazon”.</li>
                                <li>Search for “laptop”.</li>
                                <li>Verify the search result page is displayed.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Use https://restcountries.com/.</li>
                                <li>Validate the endpoint for United States.</li>
                                <li>Verify response status is 200.</li>
                                <li>Validate country name, capital, and region.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/united states</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Use SauceLab Demo App.</li>
                                <li>Launch the app.</li>
                                <li>Log in with valid credentials.</li>
                                <li>Verify successful login to products screen.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Create a JMeter test plan to navigate to https://www.amazon.com/.</li>
                                <li>Execute with 5 users.</li>
                                <li>Run for a short duration or single iteration.</li>
                                <li>Capture summary results.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 2 */}
                        {selectedSet === '2' && (
                        <div
                            id="hands-on-set-2"
                            data-testid="hands-on-set-2"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 2</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “headphones”.</li>
                                <li>Verify at least one result is displayed.</li>
                                <li>Capture screenshot of results page.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Canada.</li>
                                <li>Validate status code is 200.</li>
                                <li>Verify country name, capital, and subregion.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/canada</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Verify login screen elements:</li>
                                <li>Username field, Password field, Login button.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Create test plan for Amazon homepage navigation.</li>
                                <li>Run with 10 users.</li>
                                <li>View results in Summary Report.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 3 */}
                        {selectedSet === '3' && (
                        <div
                            id="hands-on-set-3"
                            data-testid="hands-on-set-3"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 3</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “mouse”.</li>
                                <li>Verify search textbox is visible before search.</li>
                                <li>Verify results page URL contains search-related value.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Bangladesh.</li>
                                <li>Verify status code is 200.</li>
                                <li>Validate name, capital, and population exists.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/bangladesh</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Attempt login using invalid credentials.</li>
                                <li>Verify error message is displayed.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon homepage.</li>
                                <li>Run with 3 users.</li>
                                <li>Add View Results Tree and Summary Report.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 4 */}
                        {selectedSet === '4' && (
                        <div
                            id="hands-on-set-4"
                            data-testid="hands-on-set-4"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 4</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “keyboard”.</li>
                                <li>Verify search results page loads successfully.</li>
                                <li>
                                    Validate the search term appears in the search input after
                                    search.
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for India.</li>
                                <li>Validate status code 200.</li>
                                <li>Verify name, capital, and independent field.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/india</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Log in with valid user.</li>
                                <li>Add one product to cart.</li>
                                <li>Verify cart badge updates.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Create Amazon homepage navigation test.</li>
                                <li>Run with 8 users.</li>
                                <li>Capture aggregate or summary result.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 5 */}
                        {selectedSet === '5' && (
                        <div
                            id="hands-on-set-5"
                            data-testid="hands-on-set-5"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 5</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “monitor”.</li>
                                <li>
                                    Verify result page title contains the searched keyword or
                                    “Amazon”.
                                </li>
                                <li>Take screenshot after search.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Saudi Arabia.</li>
                                <li>Verify status code 200.</li>
                                <li>Validate name, capital, and region.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/saudi arabia</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Scroll products list.</li>
                                <li>Verify a specific product name is visible after scroll.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Amazon homepage navigation.</li>
                                <li>Run with 6 users.</li>
                                <li>Use HTTP Request Defaults if applicable.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 6 */}
                        {selectedSet === '6' && (
                        <div
                            id="hands-on-set-6"
                            data-testid="hands-on-set-6"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 6</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “tablet”.</li>
                                <li>Verify search results are shown.</li>
                                <li>Validate current URL contains a search query parameter.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Germany.</li>
                                <li>Verify status code 200.</li>
                                <li>Validate country name, capital, and timezone exists.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/germany</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Log in successfully.</li>
                                <li>Open product details for one item.</li>
                                <li>Verify product detail page is displayed.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon homepage.</li>
                                <li>Run with 12 users.</li>
                                <li>Generate summary result.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 7 */}
                        {selectedSet === '7' && (
                        <div
                            id="hands-on-set-7"
                            data-testid="hands-on-set-7"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 7</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “printer”.</li>
                                <li>Verify search button interaction works.</li>
                                <li>Validate results page is not empty.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Japan.</li>
                                <li>Verify status code 200.</li>
                                <li>Validate name, capital, and languages exists.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/japan</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Verify app opens successfully.</li>
                                <li>
                                    Verify products page or login page is displayed properly (based
                                    on app state).
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon homepage.</li>
                                <li>Run with 4 users.</li>
                                <li>Record response success rate.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 8 */}
                        {selectedSet === '8' && (
                        <div
                            id="hands-on-set-8"
                            data-testid="hands-on-set-8"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 8</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “usb cable”.</li>
                                <li>Verify results page appears.</li>
                                <li>Validate search term remains displayed in the search field.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Brazil.</li>
                                <li>Verify status code 200.</li>
                                <li>Validate country name, capital, and continents field.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/brazil</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Log in successfully.</li>
                                <li>Open cart without adding product.</li>
                                <li>Verify cart page opens.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Amazon homepage navigation.</li>
                                <li>Run with 7 users.</li>
                                <li>Attach Summary Report listener.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 9 */}
                        {selectedSet === '9' && (
                        <div
                            id="hands-on-set-9"
                            data-testid="hands-on-set-9"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 9</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “webcam”.</li>
                                <li>Verify first page of results loads.</li>
                                <li>Take screenshot as evidence.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Australia.</li>
                                <li>Verify status code 200.</li>
                                <li>Validate name, capital, and area exists.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/australia</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Login with valid credentials.</li>
                                <li>
                                    Logout if supported, or navigate back and verify screen
                                    behavior.
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon homepage.</li>
                                <li>Run with 9 users.</li>
                                <li>Validate all requests are successful.</li>
                            </ul>
                        </div>
                        )}

                        {/* Set 10 */}
                        {selectedSet === '10' && (
                        <div
                            id="hands-on-set-10"
                            data-testid="hands-on-set-10"
                            style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                padding: '16px',
                                backgroundColor: '#fdfdff',
                            }}
                        >
                            <h3 style={subTitleStyle}>Exam Set 10</h3>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                1. UI Automation – Playwright TS
                            </h4>
                            <ul style={listStyle}>
                                <li>Navigate to Amazon.</li>
                                <li>Search for “book”.</li>
                                <li>Verify search results page is displayed.</li>
                                <li>Validate page title and URL after search.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                2. API Testing – Postman/Newman
                            </h4>
                            <ul style={listStyle}>
                                <li>Test country data for Oman.</li>
                                <li>Verify status code 200.</li>
                                <li>Validate name, capital, and region/subregion.</li>
                                <li>
                                    Suggested endpoint:{' '}
                                    <code>https://restcountries.com/v3.1/name/oman</code>
                                </li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                3. Mobile Automation – Appium
                            </h4>
                            <ul style={listStyle}>
                                <li>Launch SauceLab Demo App.</li>
                                <li>Verify login page loads.</li>
                                <li>Perform successful login.</li>
                                <li>Add one item to cart and verify cart badge.</li>
                            </ul>
                            <h4 style={{ ...subTitleStyle, fontSize: '16px' }}>
                                4. Performance Testing – JMeter
                            </h4>
                            <ul style={listStyle}>
                                <li>Amazon homepage navigation.</li>
                                <li>Run with 15 users.</li>
                                <li>Capture summary metrics and save results.</li>
                            </ul>
                        </div>
                        )}
                    </div>
                </section>

                {/* Common Technical Expectations */}
                <section
                    id="hands-on-practical-exam-expectations"
                    data-testid="hands-on-practical-exam-expectations"
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        border: '1px solid #e9ecef',
                        marginBottom: '24px',
                    }}
                >
                    <h2 style={sectionTitleStyle}>Common Technical Expectations</h2>

                    <h3 style={subTitleStyle}>UI Automation (Playwright + TypeScript)</h3>
                    <ul style={listStyle}>
                        <li>Use proper test structure and assertions.</li>
                        <li>Use reusable selectors where reasonable.</li>
                        <li>Capture screenshot or trace if needed.</li>
                    </ul>

                    <h3 style={subTitleStyle}>API Testing (Postman/Newman)</h3>
                    <ul style={listStyle}>
                        <li>Provide a Postman collection (and environment if needed).</li>
                        <li>Add test scripts for response validation.</li>
                        <li>
                            Provide Newman execution proof (command or generated report), for
                            example:{' '}
                            <code>newman run YourCollection.json</code>.
                        </li>
                    </ul>

                    <h3 style={subTitleStyle}>Mobile Automation (Appium + WebdriverIO + TS)</h3>
                    <ul style={listStyle}>
                        <li>Include desired capabilities / configuration.</li>
                        <li>Use stable locators and clear validation checkpoints.</li>
                        <li>Organize tests using proper TypeScript / WebdriverIO structure.</li>
                    </ul>

                    <h3 style={subTitleStyle}>Performance Testing (JMeter)</h3>
                    <ul style={listStyle}>
                        <li>Include Thread Group and HTTP Request sampler.</li>
                        <li>Add at least one listener (Summary / Aggregate / View Results Tree).</li>
                        <li>Validate successful request execution.</li>
                    </ul>

                    <h3 style={subTitleStyle}>SQL</h3>
                    <ul style={listStyle}>
                        <li>Write clear, readable SQL queries with proper formatting.</li>
                        <li>Use appropriate filtering (<code>WHERE</code>), sorting (<code>ORDER BY</code>), and limiting (<code>TOP</code>/<code>LIMIT</code>).</li>
                        <li>Include at least one aggregation query using <code>GROUP BY</code> where applicable.</li>
                        <li>Save your queries in a dedicated SQL file (for example, <code>exam-sql-set-&lt;n&gt;.sql</code>).</li>
                        <li>Capture either query results or screenshots as evidence.</li>
                    </ul>
                </section>

                {/* Shared SQL Task (applies to all exam sets) */}
                <section
                    id="hands-on-practical-exam-sql-task"
                    data-testid="hands-on-practical-exam-sql-task"
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                        border: '1px solid #e9ecef',
                        marginBottom: '24px',
                    }}
                >
                    <h2 style={sectionTitleStyle}>Shared SQL Task (All Exam Sets)</h2>
                    <p style={paragraphStyle}>
                        In addition to your exam set, complete the following <strong>SQL task</strong>.
                        This task is the same for all students and must be submitted along with your
                        automation and performance work.
                    </p>
                    <h3 style={subTitleStyle}>SQL Scenario</h3>
                    <p style={paragraphStyle}>
                        Assume you have a table named <code>Orders</code> with at least the following
                        columns:
                    </p>
                    <ul style={listStyle}>
                        <li><code>OrderId</code> (primary key)</li>
                        <li><code>CustomerName</code></li>
                        <li><code>Country</code></li>
                        <li><code>OrderDate</code></li>
                        <li><code>TotalAmount</code></li>
                    </ul>
                    <h3 style={subTitleStyle}>Required Queries</h3>
                    <ul style={listStyle}>
                        <li>
                            Write a query to return all orders from the last 30 days, ordered by{' '}
                            <code>OrderDate</code> (newest first).
                        </li>
                        <li>
                            Write a query to return the total number of orders and total revenue{' '}
                            (<code>SUM(TotalAmount)</code>) for each <code>Country</code>.
                        </li>
                        <li>
                            Write a query to find the top 5 customers by total spend (based on{' '}
                            <code>TotalAmount</code>).
                        </li>
                    </ul>
                    <p style={paragraphStyle}>
                        Save all SQL statements in a single file (for example,{' '}
                        <code>exam-sql-queries.sql</code>) and include it in your exam submission,
                        along with screenshots or exported results if possible.
                    </p>
                </section>

                {/* Final Reminder */}
                <section
                    id="hands-on-practical-exam-final-reminder"
                    data-testid="hands-on-practical-exam-final-reminder"
                    style={{
                        backgroundColor: '#fff3cd',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        border: '1px solid #ffeeba',
                        color: '#856404',
                    }}
                >
                    <h3
                        style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            marginBottom: '8px',
                        }}
                    >
                        Final Submission Reminder
                    </h3>
                    <ul style={listStyle}>
                        <li>Complete your assigned practical set (all four tasks).</li>
                        <li>Verify all scripts run successfully.</li>
                        <li>Create branch: <code>practicalLabYourLastName</code>.</li>
                        <li>Push code to ADO and create Pull Request.</li>
                        <li>Send PR link through Microsoft Chat.</li>
                        <li>Do not merge anything into the <code>main</code> branch.</li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default HandsOnPracticalExam;

