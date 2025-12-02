import React, {Component} from 'react';
import HeaderText from '../components/header';
import GoogleAd from '../components/GoogleAd';
import Footer from '../components/footer';

class HowItWorks extends Component {
    render(){
        return(
            <div className='page-tab-body'>
                <HeaderText />
                <div>
                    <h1 className='tc pt4' style={{ color: '#00416A', marginBottom: '40px' }}>How It Works</h1>
                </div>
                
                <div style={{ 
                    maxWidth: '1200px', 
                    margin: '0 auto', 
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    {/* Workflow Diagram */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '60px',
                        alignItems: 'stretch'
                    }}>
                        {/* Step 1 */}
                        <div style={{
                            flex: '1',
                            minWidth: '250px',
                            maxWidth: '280px',
                            padding: '30px 20px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            border: '2px solid #00416A'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                DISCOVER & ANALYZE
                            </div>
                            <ul style={{
                                textAlign: 'left',
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Requirements review
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Risk analysis
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Test strategy
                                </li>
                            </ul>
                        </div>

                        {/* Arrow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '40px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            margin: '0 10px'
                        }}>
                            →
                        </div>

                        {/* Step 2 */}
                        <div style={{
                            flex: '1',
                            minWidth: '250px',
                            maxWidth: '280px',
                            padding: '30px 20px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            border: '2px solid #00416A'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                DESIGN QA & AUTOMATION
                            </div>
                            <ul style={{
                                textAlign: 'left',
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Framework setup
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Tool selection
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    AI-enabled automation
                                </li>
                            </ul>
                        </div>

                        {/* Arrow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '40px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            margin: '0 10px'
                        }}>
                            →
                        </div>

                        {/* Step 3 */}
                        <div style={{
                            flex: '1',
                            minWidth: '250px',
                            maxWidth: '280px',
                            padding: '30px 20px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            border: '2px solid #00416A'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                EXECUTE & VALIDATE QUALITY
                            </div>
                            <ul style={{
                                textAlign: 'left',
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Manual + automation
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Security & API tests
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Continuous execution
                                </li>
                            </ul>
                        </div>

                        {/* Arrow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '40px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            margin: '0 10px'
                        }}>
                            →
                        </div>

                        {/* Step 4 */}
                        <div style={{
                            flex: '1',
                            minWidth: '250px',
                            maxWidth: '280px',
                            padding: '30px 20px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            border: '2px solid #00416A'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                REPORT & OPTIMIZE
                            </div>
                            <ul style={{
                                textAlign: 'left',
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Dashboards
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Defect insights
                                </li>
                                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    Release confidence
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </div>
                <section className='pt4'>
                    <Footer />
                </section>
            </div> 
        );
    }
}
export default HowItWorks;

