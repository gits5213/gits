import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HeaderText from '../components/header';
import Footer from '../components/footer';
import { containers, sectionStyles, cardStyles, buttonStyles, listStyles, colors, shadows, hoverHandlers } from '../utils/globalStyles';
import '../styles/base.css';
import '../styles/howItWorks.css';

class HowItWorks extends Component {
    render(){
        return(
            <div className='page-tab-body'>
                <HeaderText />
                <div>
                    <h1 className='tc pt4' style={{ ...sectionStyles.title, marginBottom: '40px' }}>How It Works</h1>
                </div>
                
                <div style={{ 
                    ...containers.medium,
                    textAlign: 'center'
                }}>
                    {/* Workflow Diagram */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        ...sectionStyles.large,
                        alignItems: 'stretch'
                    }}>
                        {/* Step 1 */}
                        <div style={{
                            flex: '1',
                            minWidth: '250px',
                            maxWidth: '280px',
                            padding: '30px 20px',
                            ...cardStyles.base,
                            border: `2px solid ${colors.primary}`
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: colors.primary,
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                DISCOVER & ANALYZE
                            </div>
                            <ul style={listStyles.unstyled}>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Requirements review
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Risk analysis
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Test strategy
                                </li>
                            </ul>
                        </div>

                        {/* Arrow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '40px',
                            color: colors.primary,
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
                            ...cardStyles.base,
                            border: `2px solid ${colors.primary}`
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: colors.primary,
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                DESIGN QA & AUTOMATION
                            </div>
                            <ul style={listStyles.unstyled}>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Framework setup
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Tool selection
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    AI-enabled automation
                                </li>
                            </ul>
                        </div>

                        {/* Arrow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '40px',
                            color: colors.primary,
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
                            ...cardStyles.base,
                            border: `2px solid ${colors.primary}`
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: colors.primary,
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                EXECUTE & VALIDATE QUALITY
                            </div>
                            <ul style={listStyles.unstyled}>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Manual + automation
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Security & API tests
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Continuous execution
                                </li>
                            </ul>
                        </div>

                        {/* Arrow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '40px',
                            color: colors.primary,
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
                            ...cardStyles.base,
                            border: `2px solid ${colors.primary}`
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: colors.primary,
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px'
                            }}>
                                REPORT & OPTIMIZE
                            </div>
                            <ul style={listStyles.unstyled}>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Dashboards
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Defect insights
                                </li>
                                <li style={{ ...listStyles.itemSpaced, ...listStyles.itemWithBullet }}>
                                    <span style={listStyles.bullet}>•</span>
                                    Release confidence
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Us Button */}
                <div style={{
                    textAlign: 'center',
                    margin: '60px 0 40px 0'
                }}>
                    <Link 
                        to="/contact"
                        style={{
                            ...buttonStyles.secondary,
                            padding: '15px 40px',
                            fontSize: '18px',
                            border: `2px solid ${colors.primary}`,
                            boxShadow: shadows.sm
                        }}
                        {...hoverHandlers.buttonSecondary}
                    >
                        Contact Us
                    </Link>
                </div>

                <div>
                </div>
                <section className='pt4'>
                    <Footer />
                </section>
            </div> 
        );
    }
}
export default HowItWorks;

