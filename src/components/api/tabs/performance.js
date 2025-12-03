import React from 'react';
import link from '../../../utilities/links.json';
import Footer from '../../footer';
import GoogleAd from '../../GoogleAd';

const performance = () => {
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
                    Performance Testing
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    Ensuring Speed, Scalability, and Stability of Software Applications
                </p>
            </div>

            {/* Main Content */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    <a href='https://stackify.com/ultimate-guide-performance-testing-and-software-testing/' target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Performance testing</a> is a series of tests conducted to identify issues that inhibit a software's speed, scalability, and stability. This is the ideal way to ensure that the software system is built with the capacity to meet business demand while simultaneously serving all necessary users in a timely and reliable manner.
                </p>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    6 Reasons to Do Performance Testing
                </h2>
                <ol style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                    <li>Identify glitches and eliminate bottlenecks</li>
                    <li>Provide visibility for stakeholders</li>
                    <li>Deliver a higher quality UI and functionality</li>
                    <li>Unlock greater scalability</li>
                    <li>Generate more revenue</li>
                    <li>Create sound benchmarks for future regression testing</li>
                </ol>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    The Most Common Web App Performance Issues
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                    <li>Issues with DNS and network connectivity</li>
                    <li>Poor code</li>
                    <li>Poor load balance</li>
                    <li>Slower servers</li>
                    <li>Spikes in traffic</li>
                    <li>Unoptimized databases</li>
                </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Best Practices for Load or Performance Testing
                </h2>
                <ol style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                    <li>Start recording a new scenario from the web browser's start</li>
                    <li>Clear browser cache and cookies before recording traffic</li>
                    <li>Parameterize scenarios to simulate more realistic load on the server</li>
                    <li>Verify user scenarios</li>
                    <li>Arrange user scenarios in your tests so that critical functionality is tested first. And remember to analyze and report on your results!</li>
                    <li>During test runs, monitor the tested server metrics as well as resource usage on the client computer</li>
                </ol>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Most Common Problems Observed in Performance Testing
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    During performance testing of software, developers are looking for performance symptoms and issues. Speed issues — slow responses and long load times for example — often are observed and addressed. Other performance problems can be observed:
                </p>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '20px'
                }}>
                    <li><strong>Bottlenecking</strong> — This occurs when data flow is interrupted or halted because there is not enough capacity to handle the workload.</li>
                    <li><strong>Poor scalability</strong> — If software cannot handle the desired number of concurrent tasks, results could be delayed, errors could increase, or other unexpected behavior could happen that affects:
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Disk usage</li>
                            <li>CPU usage</li>
                            <li>Memory leaks</li>
                            <li>Operating system limitations</li>
                            <li>Poor network configuration</li>
                        </ul>
                    </li>
                    <li><strong>Software configuration issues</strong> — Often settings are not set at a sufficient level to handle the workload.</li>
                    <li><strong>Insufficient hardware resources</strong> — Performance testing may reveal physical memory constraints or low-performing CPUs.</li>
                </ul>
            </div>

            {/* Resources Section */}
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
                    Performance Testing Resources
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Performance Strategy
                        </h3>
                        <a 
                            href='https://github.com/gits5213/company/tree/master/dx/Standards/Confluence/Performance%20Standards' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                color: '#00416A',
                                textDecoration: 'underline',
                                fontSize: '16px'
                            }}
                        >
                            Template
                        </a>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            JMeter Configuration
                        </h3>
                        <a 
                            href='https://docs.google.com/document/d/1gaVLfRUJtLaSf_HA4ay_7YkadrykT4hfXPoLinj8hfE/edit' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                color: '#00416A',
                                textDecoration: 'underline',
                                fontSize: '16px'
                            }}
                        >
                            Step by step process
                        </a>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href='https://stackify.com/ultimate-guide-performance-testing-and-software-testing/' 
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
                    More Details
                </a>
            </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    );
}
export default performance;
