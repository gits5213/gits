import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const PerformanceTest = () => {
    const [gettingStartedOpen, setGettingStartedOpen] = useState(false);
    const [apiTestPlanOpen, setApiTestPlanOpen] = useState(false);
    const [macOSUITestPlanOpen, setMacOSUITestPlanOpen] = useState(false);
    const [macOSAPITestPlanOpen, setMacOSAPITestPlanOpen] = useState(false);
    // Recording section starts collapsed by default
    const [recordingTestPlanOpen, setRecordingTestPlanOpen] = useState(false);
    // Authentication setup section (cookie / token) for beginners
    const [authSetupOpen, setAuthSetupOpen] = useState(false);
    // Data-driven setup section (CSV data, multiple users) for beginners
    const [dataDrivenOpen, setDataDrivenOpen] = useState(false);

    const sectionHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 24px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        border: '1px solid #e8e8e8',
        marginBottom: '4px',
        userSelect: 'none'
    };

    const sectionBodyStyle = {
        backgroundColor: '#ffffff',
        padding: '0 30px 30px 30px',
        borderRadius: '0 0 12px 12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        border: '1px solid #e8e8e8',
        borderTop: 'none',
        marginBottom: '40px'
    };

    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Introduction to Performance Testing - First item */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Introduction to Performance Testing
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Performance testing is the practice of checking how well an application works when many people use it at the same time. It helps ensure your website or app stays <strong>fast</strong>, <strong>stable</strong>, and <strong>reliable</strong> under real-world conditions—before users experience slow loading, errors, or crashes.
                </p>
                <p style={leftAlignStyles.paragraph}>
                    Performance testing answers questions like:
                </p>
                <ul style={leftAlignStyles.list}>
                    <li>How quickly do pages load and APIs respond?</li>
                    <li>How many users can the system handle smoothly?</li>
                    <li>What happens during peak traffic or sudden spikes?</li>
                    <li>Will the system stay stable over long periods of use?</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Why Performance Testing Matters
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    A slow or unstable system can lead to frustrated users, lost trust, and missed business goals. Performance testing helps you:
                </p>
                <ul style={leftAlignStyles.list}>
                    <li>Prevent slowdowns during high traffic</li>
                    <li>Reduce timeouts and server errors</li>
                    <li>Find bottlenecks in APIs, databases, or infrastructure</li>
                    <li>Plan scaling with confidence (based on data, not guesses)</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Common Types of Performance Tests
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Load Testing:</strong> performance under expected normal traffic</li>
                    <li><strong>Stress Testing:</strong> behavior beyond limits to find the breaking point</li>
                    <li><strong>Spike Testing:</strong> response to sudden traffic bursts</li>
                    <li><strong>Endurance (Soak) Testing:</strong> stability over long usage periods</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    The Result
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Instead of guessing, you get clear metrics—<strong>response time, throughput, error rate, and resource usage</strong>—so you can improve performance and deliver a smooth experience for every user.
                </p>
            </div>

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
                        Apache JMeter
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Performance Testing and Load Testing Tool
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Introduction to Apache JMeter
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Apache JMeter is an open-source Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is JMeter?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>JMeter is an open-source performance testing tool</li>
                    <li>JMeter can test performance on static and dynamic resources</li>
                    <li>JMeter supports multiple protocols: HTTP, HTTPS, SOAP, REST, FTP, JDBC, LDAP, TCP, etc.</li>
                    <li>JMeter can simulate heavy load on servers, networks, or objects</li>
                    <li>JMeter provides comprehensive reporting and analysis capabilities</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What Can JMeter Do?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Load and performance testing for web applications</li>
                    <li>REST and SOAP API testing</li>
                    <li>Database performance testing (JDBC)</li>
                    <li>FTP, LDAP, and other protocol testing</li>
                    <li>Distributed testing across multiple servers</li>
                    <li>Command-line execution for CI/CD integration</li>
                    <li>Generate comprehensive HTML reports</li>
                    <li>Extensible through plugins and custom functions</li>
                    <li>Record and playback test scenarios</li>
                    <li>Parameterize tests with CSV data sets</li>
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
                        JMeter Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Verify Java Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Check Java version: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                            <li>Verify JAVA_HOME: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>echo $JAVA_HOME</code></li>
                            <li>If Java is not installed, refer to "Java Install for Mac" in Installation tab</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://jmeter.apache.org/download_jmeter.cgi</a></li>
                            <li>Download the binary distribution: <strong>apache-jmeter-x.x.x.tgz</strong></li>
                            <li>The file will download to your Downloads folder</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Extract JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Finder and navigate to Downloads folder</li>
                            <li>Double-click <strong>apache-jmeter-x.x.x.tgz</strong> to extract</li>
                            <li>A folder named "apache-jmeter-x.x.x" will appear</li>
                            <li>Move it to a location like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/Applications</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>~/Applications</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Set Environment Variables
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Edit your shell profile: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>nano ~/.zshrc</code> (for zsh) or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>nano ~/.bash_profile</code> (for bash)</li>
                            <li>Add: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>export JMETER_HOME=/Applications/apache-jmeter-x.x.x</code></li>
                            <li>Add: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>export PATH=$PATH:$JMETER_HOME/bin</code></li>
                            <li>Save and exit (Ctrl+X, then Y, then Enter)</li>
                            <li>Reload: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>source ~/.zshrc</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Launch JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Navigate to: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cd /Applications/apache-jmeter-x.x.x/bin</code></li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>./jmeter</code></li>
                            <li>Or if PATH is set: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter</code></li>
                            <li>JMeter GUI will launch</li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 6: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter --version</code></li>
                            <li>Should display JMeter version information</li>
                            <li>Launch JMeter GUI to verify it opens correctly</li>
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
                        JMeter Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Verify Java Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt or PowerShell</li>
                            <li>Check Java version: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                            <li>Verify JAVA_HOME: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>echo %JAVA_HOME%</code></li>
                            <li>If Java is not installed, refer to "Java Install for Windows" in Installation tab</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://jmeter.apache.org/download_jmeter.cgi</a></li>
                            <li>Download the binary distribution: <strong>apache-jmeter-x.x.x.zip</strong></li>
                            <li>Save the file to a location like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Extract JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to the downloaded ZIP file</li>
                            <li>Right-click on <strong>apache-jmeter-x.x.x.zip</strong></li>
                            <li>Select <strong>"Extract All..."</strong></li>
                            <li>Choose extraction location (e.g., <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\</code>)</li>
                            <li>Click <strong>"Extract"</strong></li>
                            <li>A folder named "apache-jmeter-x.x.x" will be created</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Set Environment Variables
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Right-click <strong>"This PC"</strong> or <strong>"My Computer"</strong></li>
                            <li>Select <strong>"Properties"</strong></li>
                            <li>Click <strong>"Advanced system settings"</strong></li>
                            <li>Click <strong>"Environment Variables"</strong></li>
                            <li>Under "System variables", click <strong>"New"</strong>:
                                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    <li>Variable name: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>JMETER_HOME</code></li>
                                    <li>Variable value: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\apache-jmeter-x.x.x</code></li>
                                </ul>
                            </li>
                            <li>Edit PATH variable:
                                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    <li>Select <strong>"Path"</strong> and click <strong>"Edit"</strong></li>
                                    <li>Click <strong>"New"</strong></li>
                                    <li>Add: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>%JMETER_HOME%\bin</code></li>
                                    <li>Click <strong>"OK"</strong> on all dialogs</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Launch JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\apache-jmeter-x.x.x\bin</code></li>
                            <li>Double-click <strong>jmeter.bat</strong></li>
                            <li>Or if PATH is set, open Command Prompt and type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter</code></li>
                            <li>JMeter GUI will launch</li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 6: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter --version</code></li>
                            <li>Should display JMeter version information</li>
                            <li>Launch JMeter GUI to verify it opens correctly</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Prerequisites Before You Start Performance Testing */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Prerequisites Before You Start Performance Testing
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Installing JMeter is only the first step. Before you run any serious performance tests, it&apos;s best
                    practice to make sure a few <strong>foundations</strong> are in place so your results are useful and safe.
                </p>
                <ul style={leftAlignStyles.list}>
                    <li>
                        <strong>1. Stable test environment</strong> — Use a dedicated test / staging environment, not your live
                        production site. The environment should be as close as possible to production (same app version,
                        similar hardware, similar network).
                    </li>
                    <li>
                        <strong>2. Clear goals and success criteria</strong> — Agree on what you are trying to learn:
                        acceptable response times (SLA), maximum concurrent users, target throughput, and which pages / APIs
                        are most critical.
                    </li>
                    <li>
                        <strong>3. Realistic test data</strong> — Prepare safe, non‑production data (user accounts, IDs,
                        products, etc.) that looks like real usage so the system behaves realistically (no &quot;happy path only&quot;).
                    </li>
                    <li>
                        <strong>4. Workload model</strong> — Decide how users behave: which pages they hit, how often, and
                        in what order (login → search → view details → logout). This &quot;user journey&quot; should match real‑world usage.
                    </li>
                    <li>
                        <strong>5. Monitoring and observability</strong> — Ensure you can see server metrics (CPU, memory,
                        disk, database, error logs, etc.) during the test so you can explain slowdowns and find bottlenecks.
                    </li>
                    <li>
                        <strong>6. Access and approvals</strong> — Confirm you have permission from your company / client to
                        run load tests against this environment, and that network/security teams know when the test will run.
                    </li>
                    <li>
                        <strong>7. Version control and repeatability</strong> — Save your JMeter <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.jmx</code> test plan(s)
                        and any CSV files in a shared location (or Git) so the same test can be rerun after code or
                        infrastructure changes.
                    </li>
                    <li>
                        <strong>8. Start small</strong> — As a best practice, always begin with a very small load (1–5 users),
                        confirm that scenarios and data work correctly, then slowly increase users and loops as you gain confidence.
                    </li>
                    <li>
                        <strong>9. Adequate load generator machine(s)</strong> — Your JMeter client (or JMeter server nodes) should
                        have enough <strong>CPU, RAM, and network bandwidth</strong> to generate the planned number of virtual users
                        without itself becoming the bottleneck. For higher loads, use dedicated load‑generator servers instead of
                        a single low‑spec laptop.
                    </li>
                    <li>
                        <strong>10. Documented concurrency requirements</strong> — From a performance tester&apos;s standpoint, you should
                        have a clear written target for <strong>concurrent users</strong>, ramp‑up pattern (how fast users arrive), and test
                        duration (e.g., &quot;500 users, ramp‑up 10 minutes, steady for 30 minutes&quot;). This helps design realistic Thread
                        Group settings in JMeter.
                    </li>
                    <li>
                        <strong>11. Test accounts and roles</strong> — Maintain a simple list or CSV of <strong>test user accounts</strong>, roles
                        (admin, standard user, etc.), and credentials that are safe to use in JMeter. This avoids using real
                        customer data and makes it easy to build data‑driven and authentication scenarios.
                    </li>
                </ul>
            </div>

            {/* Getting Started Section (collapsible) */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: gettingStartedOpen ? '4px' : '16px' }}
                    onClick={() => setGettingStartedOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={gettingStartedOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Getting Started: Create Your First <strong>JMeter UI Test Plan</strong> (Windows) — Baby Steps
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{gettingStartedOpen ? '▼' : '▶'}</span>
                </div>
                {gettingStartedOpen && (
                <div style={sectionBodyStyle}>
                <p style={leftAlignStyles.paragraph}>
                    This guide is written for <strong>non-technical beginners</strong>. You'll build a simple JMeter test plan that opens a website page and shows results.
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>What you need (quick checklist)</h4>
                <ul style={leftAlignStyles.list}>
                    <li>✅ A Windows computer</li>
                    <li>✅ Internet connection</li>
                    <li>✅ A website URL you're allowed to test (your own site or a test site)</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>JMeter is usually built in <strong>GUI mode</strong> to create and debug a Test Plan. (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1: Download and open JMeter (Windows)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Download <strong>Apache JMeter</strong> from the official Apache JMeter website (download page).</li>
                    <li>Unzip the downloaded file (extract it like a folder).</li>
                    <li>Open the extracted folder → open <strong>bin</strong></li>
                    <li>Double-click: <strong>jmeter.bat</strong> (this launches JMeter on Windows)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ JMeter should open and you'll see a left-side tree that starts with <strong>Test Plan</strong>.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2: Create your first "Users" group (Thread Group)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>A <strong>Thread Group</strong> is where you define how many users JMeter simulates and how many times the test repeats. (<a href="https://jmeter.apache.org/usermanual/test_plan.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>In the left tree, click <strong>Test Plan</strong></li>
                    <li>Right-click <strong>Test Plan</strong> → <strong>Add</strong> → <strong>Threads (Users)</strong> → <strong>Thread Group</strong></li>
                    <li>Click <strong>Thread Group</strong> and set: <strong>Number of Threads (users):</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code> (start simple), <strong>Ramp-up period:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code>, <strong>Loop Count:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Now you have "1 user running 1 time."</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3: Add a website address (HTTP Request Defaults)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>This step sets the main website once, so you don't need to repeat it in every request. (<a href="https://jmeter.apache.org/usermanual/test_plan.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click your <strong>Thread Group</strong></li>
                    <li>Right-click <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Config Element</strong> → <strong>HTTP Request Defaults</strong></li>
                    <li>In <strong>Server Name or IP</strong>, type your website domain only (example: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>example.com</code>) — Do <strong>not</strong> type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https://</code> here</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Now JMeter knows which site you will test.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4: Add your first request (HTTP Request)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>This is the actual "open this page" step. (<a href="https://jmeter.apache.org/usermanual/test_plan.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click <strong>Thread Group</strong></li>
                    <li>Right-click <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Sampler</strong> → <strong>HTTP Request</strong></li>
                    <li>Set: <strong>Name:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Home Page</code>, <strong>Path:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/</code> (this means the homepage)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ You just created your first web request.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5: Add a results viewer (Listener)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>A <strong>Listener</strong> shows you what happened (pass/fail, response, timing). (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click <strong>Thread Group</strong></li>
                    <li>Right-click <strong>Thread Group</strong> → <strong>Add</strong> → <strong>Listener</strong> → <strong>View Results Tree</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ This will help you see the response and debug issues.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6: Run the test</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click the green <strong>Start ▶</strong> button (top toolbar) OR go to <strong>Run → Start</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ You should see results appear in <strong>View Results Tree</strong>. (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 7: Save your Test Plan</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Go to <strong>File → Save Test Plan As…</strong></li>
                    <li>Save it as something like: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>first-test-plan.jmx</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>A JMeter test plan is saved as a <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.jmx</code> file. (<a href="https://jmeter.apache.org/usermanual/test_plan.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Beginner tips (keep it easy)</h4>
                <ul style={leftAlignStyles.list}>
                    <li>Start with <strong>1 user, 1 loop</strong> until you confirm it works.</li>
                    <li>Only test websites you have permission to test.</li>
                    <li>Use <strong>View Results Tree</strong> for debugging; later you can switch to summary/graphs for load testing. (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</li>
                </ul>
                </div>
                )}
            </div>

            {/* Getting Started: API Test Plan (collapsible) */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: apiTestPlanOpen ? '4px' : '16px' }}
                    onClick={() => setApiTestPlanOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={apiTestPlanOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Getting Started: Create Your First JMeter API Test Plan (Windows) — Baby Steps
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{apiTestPlanOpen ? '▼' : '▶'}</span>
                </div>
                {apiTestPlanOpen && (
                <div style={sectionBodyStyle}>
                <p style={leftAlignStyles.paragraph}>
                    This section walks a <strong>non-technical beginner</strong> through creating and running a <strong>simple API test</strong> in JMeter on a <strong>Windows machine</strong>.
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>What you will accomplish</h4>
                <ul style={leftAlignStyles.list}>
                    <li>✅ Create a JMeter "Test Plan"</li>
                    <li>✅ Send an API request (GET)</li>
                    <li>✅ View the response (status code + response body)</li>
                    <li>✅ Save your work</li>
                </ul>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1: Install Java (required)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>JMeter needs Java to run.</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Install <strong>Java (JDK 17 or 11)</strong> on Windows</li>
                    <li>Open <strong>Command Prompt</strong></li>
                    <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ If you see a version number, Java is installed correctly.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2: Download and open JMeter</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Download <strong>Apache JMeter (ZIP)</strong> from the official Apache website</li>
                    <li>Extract the ZIP (example: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Tools\apache-jmeter-5.x</code>)</li>
                    <li>Open the folder: <strong>bin</strong></li>
                    <li>Double-click: <strong>jmeter.bat</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ JMeter will open.</p>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>Tip: If it opens slowly the first time, that's normal.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3: Create your first Test Plan (simple structure)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>In JMeter (left panel), you will see <strong>Test Plan</strong> already created. Now add 3 things:</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li><strong>Thread Group</strong> (users)</li>
                    <li><strong>HTTP Request</strong> (your API call)</li>
                    <li><strong>Listener</strong> (to see results)</li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4: Add a Thread Group (how many users / loops)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Test Plan</strong></li>
                    <li>Click: <strong>Add → Threads (Users) → Thread Group</strong></li>
                    <li>Set: <strong>Number of Threads (users):</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code>, <strong>Ramp-up period (seconds):</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code>, <strong>Loop Count:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ This means: "Run 1 user, 1 time."</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5: Add an HTTP Request (the API call)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Thread Group</strong></li>
                    <li>Click: <strong>Add → Sampler → HTTP Request</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Now fill in these fields:</p>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Example API (safe public test API)</h5>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Use this example so anyone can try:</p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Protocol:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https</code></li>
                    <li><strong>Server Name or IP:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jsonplaceholder.typicode.com</code></li>
                    <li><strong>Method:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>GET</code></li>
                    <li><strong>Path:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/posts/1</code></li>
                </ul>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ This calls a public sample API and returns a JSON response.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6: Add a Results Listener (to see the response)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Thread Group</strong></li>
                    <li>Click: <strong>Add → Listener → View Results Tree</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ This is where you'll see: Success/Failure, Response code (like 200), Response body (JSON).</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 7: Run the test</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click the green <strong>Start ▶</strong> button (top toolbar)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ In <strong>View Results Tree</strong>, click your request: <strong>Response code</strong> should show <strong>200</strong>; <strong>Response Data</strong> tab should show JSON.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 8: Save your Test Plan</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click <strong>File → Save Test Plan As…</strong></li>
                    <li>Save as: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>MyFirstAPITestPlan.jmx</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ JMX is the JMeter test plan file format.</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>(Optional) Baby Step: Add Headers (when APIs require JSON)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Some APIs need headers like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Content-Type</code>.</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>HTTP Request</strong></li>
                    <li>Click: <strong>Add → Config Element → HTTP Header Manager</strong></li>
                    <li>Click <strong>Add</strong></li>
                    <li>Enter: <strong>Name:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Content-Type</code>, <strong>Value:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>application/json</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Now your requests can send JSON properly.</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>(Optional) Your first POST request (simple)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>If you want to try a POST:</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Change <strong>Method</strong> to <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>POST</code></li>
                    <li>Add: Right-click <strong>HTTP Request → Add → Config Element → HTTP Header Manager</strong> — <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Content-Type: application/json</code></li>
                    <li>Add body: In HTTP Request <strong>Body Data</strong> (paste JSON):</li>
                </ol>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`{
  "title": "hello",
  "body": "from jmeter",
  "userId": 1
}`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Now JMeter will send JSON in the request body.</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Common beginner problems (quick fixes)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>JMeter doesn't open</strong> — Java may not be installed correctly → re-check <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>"SSL" / HTTPS errors</strong> — Make sure <strong>Protocol</strong> is <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https</code> (not http)</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>You ran the test but see no results</strong> — Confirm you added <strong>View Results Tree</strong>; confirm you clicked <strong>Start ▶</strong></p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Quick summary for your website</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>To create your first API test plan in JMeter on Windows: install Java, open <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter.bat</code>, create a Thread Group, add an HTTP Request, add "View Results Tree," click Start, and review the status code + response body.</p>
                </div>
                )}
            </div>

            {/* Getting Started: JMeter UI Test Plan (macOS) — collapsible */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: macOSUITestPlanOpen ? '4px' : '16px' }}
                    onClick={() => setMacOSUITestPlanOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={macOSUITestPlanOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Getting Started: Create Your First JMeter UI Test Plan (macOS) — Baby Steps
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{macOSUITestPlanOpen ? '▼' : '▶'}</span>
                </div>
                {macOSUITestPlanOpen && (
                <div style={sectionBodyStyle}>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginBottom: '16px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #00416A' }}>
                    In JMeter, a "UI test plan" usually means <strong>building your test in the JMeter GUI</strong> (the app window). Most beginners start with a simple <strong>website (HTTP) test</strong>. JMeter's minimum test plan is: <strong>Test Plan → Thread Group → Sampler</strong>. (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>1) Install JMeter on your Mac (easy way)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Terminal</strong> (Applications → Utilities → Terminal)</li>
                    <li>Install JMeter using Homebrew: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>brew install jmeter</code> (<a href="https://formulae.brew.sh/formula/jmeter" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Homebrew Formulae</a>)</li>
                    <li>Check it installed: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter -v</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>JMeter needs Java, and Homebrew typically installs the required OpenJDK dependency automatically for JMeter. (<a href="https://formulae.brew.sh/formula/jmeter" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Homebrew Formulae</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>2) Open JMeter (GUI Mode)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>In Terminal, type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter</code></li>
                    <li>JMeter will open a window (the GUI).</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ You're now ready to build your first test plan in the interface.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>3) Create your first test plan (simple website check)</h4>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Step A — Create a new Test Plan</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>In the left tree, click <strong>Test Plan</strong></li>
                    <li>(Optional) Rename it to something like: <strong>My First Web Test</strong></li>
                </ol>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Step B — Add "Users" (Thread Group)</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Test Plan</strong></li>
                    <li>Click: <strong>Add → Threads (Users) → Thread Group</strong></li>
                    <li>Set: <strong>Number of Threads (users):</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code>, <strong>Ramp-up period:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code>, <strong>Loop Count:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Thread Group controls how many "virtual users" run your test. (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Step C — Add a web request (HTTP Request)</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Thread Group</strong></li>
                    <li>Click: <strong>Add → Sampler → HTTP Request</strong></li>
                    <li>Fill in: <strong>Protocol:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https</code>, <strong>Server Name or IP:</strong> example <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>example.com</code>, <strong>Path:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>This "HTTP Request" is the action the user performs (like visiting a page). (<a href="https://jmeter.apache.org/usermanual/component_reference.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Step D — Add results viewer (so you can see pass/fail)</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Thread Group</strong></li>
                    <li>Click: <strong>Add → Listener → View Results Tree</strong></li>
                    <li>(Optional) Add another: <strong>Add → Listener → Summary Report</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Listeners show results; "View Results Tree" is best for beginners. (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>4) Run your test</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click the green <strong>Start ▶</strong> button (top toolbar)</li>
                    <li>Click <strong>View Results Tree</strong></li>
                    <li>Click a result line to see: Request details, Response code (200 is usually OK), Response body (what the server returned)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ If you see successful responses, your first test plan works.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>5) Save your test plan (so you can reuse it)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click <strong>File → Save Test Plan As</strong></li>
                    <li>Save the file as: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>MyFirstTest.jmx</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>JMeter test plans are saved as <strong>.jmx</strong> files. (<a href="https://jmeter.apache.org/usermanual/test_plan.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Important note (beginner-friendly)</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>JMeter's official guidance: <strong>don't run real load tests in GUI mode</strong>. GUI is for building/debugging; serious load runs should be in command-line mode. (<a href="https://jmeter.apache.org/usermanual/test_plan.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                </div>
                )}
            </div>

            {/* Getting Started: JMeter API Test Plan (macOS) — collapsible */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: macOSAPITestPlanOpen ? '4px' : '16px' }}
                    onClick={() => setMacOSAPITestPlanOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={macOSAPITestPlanOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Getting Started: Create Your First JMeter API Test Plan (macOS) — Baby Steps
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{macOSAPITestPlanOpen ? '▼' : '▶'}</span>
                </div>
                {macOSAPITestPlanOpen && (
                <div style={sectionBodyStyle}>
                <p style={leftAlignStyles.paragraph}>
                    This walkthrough is written for <strong>non-technical beginners</strong>. You'll build a simple JMeter test that calls an API and shows the response.
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>What you need</h4>
                <ul style={leftAlignStyles.list}>
                    <li>✅ A Mac computer</li>
                    <li>✅ Internet connection</li>
                    <li>✅ Java installed (JMeter requires Java 8+) (<a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>downloads.apache.org</a>)</li>
                    <li>✅ Apache JMeter downloaded from the official Apache site (<a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</li>
                </ul>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1: Install Java (one-time)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Terminal</strong> (Applications → Utilities → Terminal)</li>
                    <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                    <li>If you see a Java version number, you're good.</li>
                    <li>If Java is missing, install Java (Java 8+ is required for modern JMeter releases). (<a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>downloads.apache.org</a>)</li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2: Download and open JMeter (one-time)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Download <strong>Apache JMeter</strong> from the official download page (choose the <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.tgz</code> file for macOS). (<a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</li>
                    <li>Open the downloaded <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.tgz</code> file (macOS will extract it into a folder)</li>
                    <li>Open the extracted folder → go into: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>bin</code></li>
                    <li>Double-click: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter</code> (or run it from Terminal)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>JMeter is a <strong>protocol-level tool</strong> (it sends HTTP requests; it's not a browser). (<a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3: Create a new Test Plan</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open JMeter</li>
                    <li>You will see a left panel tree called <strong>Test Plan</strong></li>
                    <li>Click <strong>File → Save</strong> and name it: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>MyFirstAPITest.jmx</code></li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4: Add users (Thread Group)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Test Plan</strong></li>
                    <li>Choose: <strong>Add → Threads (Users) → Thread Group</strong></li>
                    <li>Set: <strong>Number of Threads (users):</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code>, <strong>Loop Count:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>1</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>(1 user will call your API 1 time.)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5: Add the API request (HTTP Request)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Thread Group</strong></li>
                    <li>Choose: <strong>Add → Sampler → HTTP Request</strong></li>
                    <li>Fill in the API details: <strong>Protocol:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https</code> (or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>http</code>), <strong>Server Name or IP:</strong> example <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>api.yoursite.com</code>, <strong>Path:</strong> example <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/v1/users</code>, <strong>Method:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>GET</code> (or POST/PUT)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>JMeter uses the <strong>HTTP Request sampler</strong> for REST/SOAP/API calls. (<a href="https://jmeter.apache.org/usermanual/component_reference.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6: Add a "Results" screen so you can see output</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click <strong>Thread Group</strong></li>
                    <li>Choose: <strong>Add → Listener → View Results Tree</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Listeners show results so you can view responses and debug issues. (<a href="https://jmeter.apache.org/usermanual/component_reference.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 7: Run your first API test</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click the <strong>green Start ▶ button</strong></li>
                    <li>Click <strong>View Results Tree</strong></li>
                    <li>Click your request name</li>
                    <li>You can view: <strong>Response code</strong> (200, 401, 500, etc.), <strong>Response body</strong> (JSON/text), <strong>Headers</strong> and timing</li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 8: Add a simple pass/fail check (Assertion)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Right-click your <strong>HTTP Request</strong></li>
                    <li>Choose: <strong>Add → Assertions → Response Assertion</strong></li>
                    <li>Example (easy check): Assert the response contains text like: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>success</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>"id"</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Assertions let JMeter validate that the response is correct, not just "200 OK." (<a href="https://jmeter.apache.org/usermanual/component_reference.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 9: Save your work</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click <strong>File → Save</strong></li>
                    <li>Keep your <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.jmx</code> file — that's your reusable JMeter test plan.</li>
                </ol>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Quick Summary</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>You just created a basic JMeter API test plan: <strong>Test Plan → Thread Group → HTTP Request → Listener → Assertion</strong> (<a href="https://jmeter.apache.org/usermanual/component_reference.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>jmeter.apache.org</a>)</p>
                </div>
                )}
            </div>

            {/* Getting Started: Multi-step UI Test with Recording (americanfidelity.com) — collapsible */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: recordingTestPlanOpen ? '4px' : '16px' }}
                    onClick={() => setRecordingTestPlanOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={recordingTestPlanOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Create Multi‑Step UI Test with Recording (using americanfidelity.com)
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{recordingTestPlanOpen ? '▼' : '▶'}</span>
                </div>
                {recordingTestPlanOpen && (
                <div style={sectionBodyStyle}>
                    <p style={leftAlignStyles.paragraph}>
                        This mini‑lab is written for <strong>non‑technical beginners</strong>. You will:
                    </p>
                    <ul style={leftAlignStyles.list}>
                        <li>Open JMeter&apos;s <strong>HTTP(S) Test Script Recorder</strong>.</li>
                        <li>Point your browser through JMeter.</li>
                        <li>Click around{' '}
                            <a href="https://americanfidelity.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>
                                americanfidelity.com
                            </a>{' '}
                            (a real website).
                        </li>
                        <li>See the steps appear automatically in your JMeter Test Plan and run them like a script.</li>
                    </ul>

                    <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>
                        Use this only for <strong>lightweight practice</strong> (few clicks, very low load) and always respect the site&apos;s
                        terms of use and robots policies.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>
                        Step 0: Quick safety checklist
                    </h4>
                    <ul style={leftAlignStyles.list}>
                        <li>✅ JMeter and Java are already installed (see sections above for Mac/Windows install).</li>
                        <li>✅ You have <strong>only one</strong> browser you will use for recording (Chrome is recommended).</li>
                        <li>✅ You are NOT running any other heavy traffic tools at the same time.</li>
                    </ul>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 1: Get JMeter and your browser ready
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Close all open browser windows (Chrome/Edge/Firefox) so background tabs don&apos;t get recorded.</li>
                        <li>Open JMeter (GUI mode) the same way you did earlier:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><strong>Windows:</strong> double‑click <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter.bat</code>.</li>
                                <li><strong>Mac:</strong> run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter</code> from Terminal or double‑click the JMeter app inside <strong>bin</strong>.</li>
                            </ul>
                        </li>
                        <li>In the left tree, make sure you have a <strong>Thread Group</strong> inside your <strong>Test Plan</strong>.
                            If not:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Right‑click <strong>Test Plan → Add → Threads (Users) → Thread Group</strong>.</li>
                                <li>For now: <strong>Number of Threads:</strong> 1, <strong>Loop Count:</strong> 1.</li>
                            </ul>
                        </li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 2: Add the HTTP(S) Test Script Recorder (the &quot;record&quot; button)
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>In the left JMeter tree, right‑click <strong>Test Plan</strong>.</li>
                        <li>Click: <strong>Add → Non‑Test Elements → HTTP(S) Test Script Recorder</strong>.</li>
                        <li>Click the new <strong>HTTP(S) Test Script Recorder</strong> node so you see its settings on the right.</li>
                        <li>Find the <strong>Port</strong> field:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Default is usually <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>8888</code>. Leave this as is unless you already use that port.</li>
                            </ul>
                        </li>
                        <li>Find <strong>Target Controller</strong> and choose where new steps should go:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Pick your existing <strong>Thread Group</strong> (so all recorded steps appear under it).</li>
                            </ul>
                        </li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 3: Let JMeter create its certificate (first time only)
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>On the HTTP(S) Test Script Recorder screen, click the <strong>Start</strong> button once.
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>JMeter will create a file named
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A', marginLeft: '4px' }}>
                                        ApacheJMeterTemporaryRootCA.crt
                                    </code>{' '}
                                    in the JMeter <strong>bin</strong> folder.
                                </li>
                            </ul>
                        </li>
                        <li>Open your file explorer:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><strong>Windows:</strong> open the JMeter <strong>bin</strong> folder in File Explorer.</li>
                                <li><strong>Mac:</strong> open the JMeter <strong>bin</strong> folder in Finder.</li>
                            </ul>
                        </li>
                        <li>Double‑click the <strong>ApacheJMeterTemporaryRootCA.crt</strong> file:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Follow the prompts to <strong>install/import</strong> the certificate as a trusted root certificate. This is only for learning on your machine so JMeter can &quot;see&quot; HTTPS traffic while recording.</li>
                            </ul>
                        </li>
                        <li>Close and re‑open your browser so it picks up the new certificate.</li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 4: Point your browser to JMeter (proxy settings)
                    </h4>
                    <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>
                        We&apos;re telling the browser: &quot;send all web traffic through JMeter first.&quot;
                    </p>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Open your recording browser (for example, Chrome).</li>
                        <li>Open its system proxy settings:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><strong>Chrome:</strong> Settings → System → <strong>Open your computer&apos;s proxy settings</strong>.</li>
                            </ul>
                        </li>
                        <li>In the OS proxy settings, set:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><strong>HTTP / HTTPS proxy host:</strong>{' '}
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>localhost</code>
                                </li>
                                <li><strong>Port:</strong>{' '}
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>8888</code>{' '}
                                    (or the port shown in the JMeter recorder).
                                </li>
                            </ul>
                        </li>
                        <li>Apply/Save the proxy settings, then keep this browser open — all its traffic will now go through JMeter.</li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 5: Record a simple journey on americanfidelity.com
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Return to JMeter:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>On the HTTP(S) Test Script Recorder, click <strong>Start</strong> if it is not already running. Status should say something like &quot;Running&quot; or similar.</li>
                            </ul>
                        </li>
                        <li>Switch to your proxy‑configured browser and, in the address bar, type:
                            <a href="https://americanfidelity.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline', marginLeft: '4px' }}>
                                https://americanfidelity.com/
                            </a>
                        </li>
                        <li>After the home page loads, perform just a few clear steps, for example:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>On the home page, click one top‑level menu item (for example, a &quot;Products&quot; or &quot;Resources&quot; link).</li>
                                <li>On the next page, scroll a little and click one more link that goes to a detail or information page.</li>
                            </ul>
                        </li>
                        <li>Stop recording:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Go back to JMeter and click <strong>Stop</strong> on the HTTP(S) Test Script Recorder.</li>
                            </ul>
                        </li>
                    </ol>

                    <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>
                        ✅ In the left JMeter tree, expand your <strong>Thread Group</strong>. You should now see several new
                        <strong> HTTP Request</strong> samplers — each one represents a page or call that was recorded.
                    </p>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 6: Clean up and give friendly names
                    </h4>
                    <ul style={leftAlignStyles.list}>
                        <li>Click each recorded <strong>HTTP Request</strong> and rename it in the <strong>Name</strong> field to something simple:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><strong>01 – Home Page</strong></li>
                                <li><strong>02 – Top Menu Page</strong></li>
                                <li><strong>03 – Detail Page</strong></li>
                            </ul>
                        </li>
                        <li>Delete obvious noise you don&apos;t care about (for example, ad or analytics calls) so your plan only keeps the 2–3 main pages.</li>
                        <li>If you don&apos;t already have a results viewer:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Right‑click <strong>Thread Group → Add → Listener → View Results Tree</strong>.</li>
                            </ul>
                        </li>
                    </ul>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 7: Turn proxy OFF and run your recorded script
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>In your OS proxy settings, remove the proxy values you added earlier (so everyday browsing no longer goes through JMeter).</li>
                        <li>Back in JMeter, make sure the HTTP(S) Test Script Recorder is <strong>stopped</strong>.</li>
                        <li>At the top toolbar, click the green <strong>Start ▶</strong> button.</li>
                        <li>Click <strong>View Results Tree</strong> and watch:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Each of your friendly‑named HTTP Requests should execute.</li>
                                <li>Look for <strong>Response code 200</strong> and response times for each step.</li>
                            </ul>
                        </li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 8: Save your multi‑step test plan
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Click <strong>File → Save Test Plan As…</strong>.</li>
                        <li>Give it a clear name, for example:
                            <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A', marginLeft: '4px' }}>
                                americanfidelity-multistep.jmx
                            </code>
                        </li>
                    </ol>

                    <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>
                        You now have a reusable, <strong>multi‑step UI test plan</strong> recorded from real browser actions against
                        <a href="https://americanfidelity.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline', marginLeft: '4px' }}>
                            americanfidelity.com
                        </a>
                        . Later, you can increase the number of users, add assertions, and run this plan in non‑GUI mode for proper load testing.
                    </p>
                </div>
                )}
            </div>

            {/* Authentication Setup for Your Tests — collapsible */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: authSetupOpen ? '4px' : '16px' }}
                    onClick={() => setAuthSetupOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={authSetupOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Setting Up Authentication in JMeter (Beginner‑Friendly)
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{authSetupOpen ? '▼' : '▶'}</span>
                </div>
                {authSetupOpen && (
                <div style={sectionBodyStyle}>
                    <p style={leftAlignStyles.paragraph}>
                        Many real websites and APIs require you to <strong>log in</strong> before you can see real pages or data.
                        This section explains, in simple steps, how a beginner can handle <strong>authentication</strong> in JMeter.
                    </p>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>
                        Step 0: Safety — always use a test account
                    </h4>
                    <ul style={leftAlignStyles.list}>
                        <li>✅ Never use your personal / production username and password in JMeter scripts.</li>
                        <li>✅ Ask your developer or admin for a dedicated <strong>test account</strong> (for example: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>test.user@example.com</code>).</li>
                        <li>✅ Only test environments you are allowed to test.</li>
                    </ul>

                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '4px', fontWeight: '600' }}>
                        Part A: Simple “website login” using cookies (record and replay)
                    </h4>
                    <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>
                        This is for normal websites where you log in with a form (email + password) and then browse pages.
                        JMeter will reuse the <strong>cookies</strong> from your login step.
                    </p>

                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>First, add a <strong>HTTP Cookie Manager</strong>:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Right‑click your <strong>Thread Group → Add → Config Element → HTTP Cookie Manager</strong>.</li>
                                <li>Leave all default settings. This tells JMeter to store and send cookies (like a browser).</li>
                            </ul>
                        </li>
                        <li>Use the <strong>HTTP(S) Test Script Recorder</strong> (from the previous section) or manually create steps to:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Open the <strong>Login Page</strong> (first HTTP Request).</li>
                                <li>Submit the <strong>Login Form</strong> (second HTTP Request) with your test username/password.</li>
                                <li>Then navigate to one or two pages that require being logged in.</li>
                            </ul>
                        </li>
                        <li>Order matters:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>In the Thread Group tree, make sure:
                                    <ol style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                        <li><strong>01 – Login Page</strong></li>
                                        <li><strong>02 – Login Submit</strong></li>
                                        <li><strong>03 – Page After Login</strong></li>
                                        <li><strong>04 – Second Protected Page</strong> (optional)</li>
                                    </ol>
                                </li>
                            </ul>
                        </li>
                        <li>Run the test with just <strong>1 user</strong> and verify:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>In <strong>View Results Tree</strong>, the protected pages (03/04) return status <strong>200</strong> (OK) and not a &quot;login page&quot; again.</li>
                            </ul>
                        </li>
                    </ol>

                    <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>
                        If you see the login page again when loading a protected page, your login request or cookie handling is wrong — fix that first before increasing users.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '4px', fontWeight: '600' }}>
                        Part B: Token‑based API auth (copy token from Postman, use in JMeter)
                    </h4>
                    <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>
                        Many APIs use a <strong>Bearer token</strong> or similar, passed in an <strong>Authorization</strong> header.
                        A very beginner‑friendly approach is:
                    </p>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Use a tool like <strong>Postman</strong> to get a working token once:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Log in or call the auth endpoint in Postman (ask your developer for details).</li>
                                <li>Copy the full token text (it often looks like a long string of letters and numbers).</li>
                            </ul>
                        </li>
                        <li>In JMeter, on your API Thread Group:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Right‑click <strong>Thread Group → Add → Config Element → HTTP Header Manager</strong>.</li>
                            </ul>
                        </li>
                        <li>In <strong>HTTP Header Manager</strong>, click <strong>Add</strong> and fill:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><strong>Name:</strong>{' '}
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Authorization</code>
                                </li>
                                <li><strong>Value:</strong>{' '}
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>
                                        Bearer YOUR_TOKEN_HERE
                                    </code>{' '}
                                    (replace <em>YOUR_TOKEN_HERE</em> with the actual token string you copied).
                                </li>
                            </ul>
                        </li>
                        <li>Run your existing API test (for example, a simple <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>GET /v1/users</code>):
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>If the Authorization header is correct, you should now see <strong>200 OK</strong> instead of &quot;401 Unauthorized&quot; or &quot;403 Forbidden&quot;.</li>
                            </ul>
                        </li>
                    </ol>

                    <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>
                        This &quot;paste the token&quot; method is simple but manual. Once you are comfortable, developers can help you
                        build a <strong>login request</strong> in JMeter that grabs the token automatically and stores it in a variable.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '4px', fontWeight: '600' }}>
                        Quick recap for non‑technical testers
                    </h4>
                    <ul style={leftAlignStyles.list}>
                        <li>For <strong>web UI</strong> tests: record the login step first, keep <strong>HTTP Cookie Manager</strong> enabled, and then record the pages you care about.</li>
                        <li>For <strong>APIs with tokens</strong>: get a working token in Postman, put it in an <strong>Authorization: Bearer ...</strong> header using <strong>HTTP Header Manager</strong>, and run your API samplers.</li>
                        <li>Always test with a <strong>single user</strong> and check responses before turning this into a full load test.</li>
                    </ul>
                </div>
                )}
            </div>

            {/* Data-Driven Test Setup (CSV / multiple users) — collapsible */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: dataDrivenOpen ? '4px' : '16px' }}
                    onClick={() => setDataDrivenOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={dataDrivenOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Data‑Driven Tests in JMeter (CSV) — Beginner‑Friendly
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{dataDrivenOpen ? '▼' : '▶'}</span>
                </div>
                {dataDrivenOpen && (
                <div style={sectionBodyStyle}>
                    <p style={leftAlignStyles.paragraph}>
                        Data‑driven testing means: instead of hard‑coding one username or ID, you put many rows in a
                        small <strong>CSV file</strong>, and JMeter runs the same test once for each row.
                    </p>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>
                        Step 0: What you will build (simple picture)
                    </h4>
                    <ul style={leftAlignStyles.list}>
                        <li>A <strong>CSV file</strong> on your computer, for example:
                            <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginTop: '6px', maxWidth: '420px' }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`username,password
testuser1@example.com,Pass123!
testuser2@example.com,Pass456!`}</pre>
                            </div>
                        </li>
                        <li>JMeter will read each line and plug the values into your HTTP Request or API Request.</li>
                        <li>You only build the test once; the <strong>data</strong> (username / ID / city) can change in the CSV.</li>
                    </ul>

                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '4px', fontWeight: '600' }}>
                        Step 1: Create a CSV file (outside JMeter)
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Open a simple editor:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Windows: Notepad or Excel.</li>
                                <li>Mac: TextEdit (plain text mode) or Numbers.</li>
                            </ul>
                        </li>
                        <li>On the <strong>first line</strong>, type the column names (these will be your variable names in JMeter), for example:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>username,password</code></li>
                            </ul>
                        </li>
                        <li>On the next lines, type your test data, one user per line:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>testuser1@example.com,Pass123!</code></li>
                                <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>testuser2@example.com,Pass456!</code></li>
                            </ul>
                        </li>
                        <li>Save the file as something like:
                            <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A', marginLeft: '4px' }}>
                                jmeter-users.csv
                            </code>{' '}
                            in a simple path (for example, a folder on your Desktop).
                        </li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 2: Add the CSV Data Set Config in JMeter
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Open your JMeter test plan (for example, a login test you already created).</li>
                        <li>In the left tree, right‑click your <strong>Thread Group</strong>.</li>
                        <li>Click: <strong>Add → Config Element → CSV Data Set Config</strong>.</li>
                        <li>Click the new <strong>CSV Data Set Config</strong> node and fill in:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li><strong>Filename:</strong> the full path to your CSV file (example on Windows:
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A', marginLeft: '4px' }}>
                                        C:\Users\You\Desktop\jmeter-users.csv
                                    </code>
                                </li>
                                <li><strong>File Encoding:</strong> leave blank unless your team says otherwise.</li>
                                <li><strong>Variable Names:</strong> leave empty if the <em>first line</em> of your CSV already has names
                                    (<code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>username,password</code>).</li>
                                <li><strong>Delimiter:</strong>{' '}
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>,</code>{' '}
                                    (comma).
                                </li>
                                <li><strong>Recycle on EOF:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>False</code> (so each row is used only once).</li>
                                <li><strong>Stop thread on EOF:</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>True</code> (so the user stops when out of data).</li>
                            </ul>
                        </li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 3: Use the CSV values inside your HTTP Request
                    </h4>
                    <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>
                        JMeter will now provide 2 variables for each row: <strong>{'${username}'}</strong> and <strong>{'${password}'}</strong>.
                        You&apos;ll plug them into your existing request.
                    </p>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Click on your <strong>login HTTP Request</strong> (or API Request) in the left tree.</li>
                        <li>If it sends a form (web login):
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>In the <strong>Parameters</strong> section, find the username field row.</li>
                                <li>Replace the hard‑coded value with:
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A', marginLeft: '4px' }}>
                                        ${'{username}'}
                                    </code>
                                </li>
                                <li>For the password field, use:
                                    <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A', marginLeft: '4px' }}>
                                        ${'{password}'}
                                    </code>
                                </li>
                            </ul>
                        </li>
                        <li>If it sends JSON (API login):
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>Switch to the <strong>Body Data</strong> tab and change the JSON to something like:</li>
                            </ul>
                            <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginTop: '6px', maxWidth: '440px' }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`{
  "username": "${'{username}'}",
  "password": "${'{password}'}"
}`}</pre>
                            </div>
                        </li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 4: Match number of users to number of rows
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Click your <strong>Thread Group</strong>.</li>
                        <li>Set <strong>Number of Threads (users)</strong> equal to the number of data rows (not counting the header).
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>In our small example with 2 data rows → set Threads to <strong>2</strong>.</li>
                            </ul>
                        </li>
                        <li>Set <strong>Loop Count</strong> to <strong>1</strong> so each user runs exactly once.</li>
                    </ol>

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '20px', fontWeight: '600' }}>
                        Step 5: Run and verify
                    </h4>
                    <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                        <li>Make sure you have <strong>View Results Tree</strong> (or <strong>Summary Report</strong>) under the Thread Group.</li>
                        <li>Click the green <strong>Start ▶</strong> button to run.</li>
                        <li>In the results:
                            <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                                <li>You should see requests for user 1 and user 2.</li>
                                <li>Check that both return the expected status (for example, <strong>200 OK</strong> on login or API call).</li>
                            </ul>
                        </li>
                    </ol>

                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '8px', marginTop: '4px', fontWeight: '600' }}>
                        Quick recap (data‑driven in plain language)
                    </h4>
                    <ul style={leftAlignStyles.list}>
                        <li>Put your different inputs (e.g., usernames, IDs) in a <strong>CSV file</strong>, one row per test case.</li>
                        <li>Use <strong>CSV Data Set Config</strong> in JMeter to read that file.</li>
                        <li>Use the column names as variables like <strong>{'${username}'}</strong> inside your requests.</li>
                        <li>Match the number of <strong>threads</strong> (users) to the number of <strong>rows</strong>, and run the test.</li>
                    </ul>
                </div>
                )}
            </div>

            {/* Running Commands Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Running JMeter Tests
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Basic Command-Line Execution
                    </h3>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Windows
jmeter.bat -n -t test-plan.jmx -l results.jtl

# Mac/Linux
jmeter -n -t test-plan.jmx -l results.jtl

# Parameters:
# -n: non-GUI mode (required for load testing)
# -t: test plan file (.jmx)
# -l: results file (.jtl)`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Running with HTML Report
                    </h3>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Run test and generate HTML report
jmeter -n -t test-plan.jmx -l results.jtl -e -o reports/html-report

# Parameters:
# -e: generate HTML report
# -o: output directory for HTML report`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Common Command-Line Options
                    </h3>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`-n, --nongui          Run in non-GUI mode
-t, --testfile        Test plan file (.jmx)
-l, --logfile         Results file (.jtl or .csv)
-e, --reportatendofloadtests  Generate HTML report
-o, --reportoutputfolder      Output folder for HTML report
-j, --jmeterlogfile    JMeter log file
-q, --propfile         Additional properties file
-J, --jmeterproperty   Set JMeter property (key=value)
-r, --runremote        Start remote servers
-R, --remotestart      Start specific remote servers
-H, --proxyHost        Proxy server hostname
-P, --proxyPort        Proxy server port`}</pre>
                    </div>
                </div>
            </div>

            {/* Reporting Commands Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Generating Reports
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Generate HTML Report During Test Run
                    </h3>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Generate HTML report at end of test
jmeter -n -t test-plan.jmx -l results.jtl -e -o reports/html-report`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Generate HTML Report from Existing Results
                    </h3>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Generate HTML report from existing .jtl file
jmeter -g results.jtl -o reports/html-report

# View report:
# Windows: start reports\\html-report\\index.html
# Mac: open reports/html-report/index.html
# Linux: xdg-open reports/html-report/index.html`}</pre>
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
                    href="https://jmeter.apache.org/" 
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
                    JMeter Official Website
                </a>
                <a 
                    href="https://jmeter.apache.org/usermanual/get-started.html" 
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
                    JMeter User Manual
                </a>
                <a 
                    href="https://jmeter.apache.org/usermanual/test_plan.html" 
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
                    Test Plan Documentation
                </a>
                <a 
                    href="https://jmeter.apache.org/usermanual/generating-dashboard.html" 
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
                    Dashboard Reporting Guide
                </a>
            </div>

            <section style={{ marginTop: '40px' }}>
            </section>
        </div>
    )
}

export default PerformanceTest;
