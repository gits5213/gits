import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Selenium from '../components/api/tabs/selenium';
import Cypress from '../components/api/tabs/cypress';
import Protractor from '../components/api/tabs/protractor';
import WebDriverIO from '../components/api/tabs/webDriverIo';
import Appium from '../components/api/tabs/appium';
import RESTAssured from '../components/api/tabs/restassured';
import Frisby from '../components/api/tabs/frisby';
import SuperTest from '../components/api/tabs/superTest';
import Playwright from '../components/api/tabs/playwright';
import ReadyAPI from '../components/api/tabs/readyapi';
import PerformaceTest from '../components/api/tabs/performance';
import Architecture from '../components/api/tabs/architecture';
import '../styles/base.css';
import '../styles/apis.css';

class apis extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props?.location?.pathname || '';
        if (path.includes('/selenium')) return 0;
        if (path.includes('/playwright')) return 1;
        if (path.includes('/cypressio')) return 2;
        if (path.includes('/protractor')) return 3;
        if (path.includes('/restassured')) return 4;
        if (path.includes('/readyapi')) return 5;
        if (path.includes('/performance')) return 6;
        if (path.includes('/architecture')) return 7;
        if (path.includes('/appium')) return 8;
        if (path.includes('/webdriverio')) return 9;
        if (path.includes('/supertest')) return 10;
        if (path.includes('/frisby')) return 11;
        // Default to selenium if just /apis
        return 0;
    }

    componentDidMount() {
        // Redirect /apis to /apis/selenium if no specific tab
        if (this.props?.location?.pathname === '/apis') {
            this.props.history?.replace('/apis/selenium');
        }
    }

    componentDidUpdate(prevProps) {
        // Update active tab when URL changes
        if (prevProps?.location?.pathname !== this.props?.location?.pathname) {
            this.setState({ activeTab: this.getActiveTabFromPath() });
        }
    }

    handleTabChange = (tabId) => {
        const tabRoutes = [
            '/apis/selenium',
            '/apis/playwright',
            '/apis/cypressio',
            '/apis/protractor',
            '/apis/restassured',
            '/apis/readyapi',
            '/apis/performance',
            '/apis/architecture',
            '/apis/appium',
            '/apis/webdriverio',
            '/apis/supertest',
            '/apis/frisby'
        ];
        // Ensure tabId is a valid number
        const validTabId = typeof tabId === 'number' ? tabId : parseInt(tabId, 10);
        const route = tabRoutes[validTabId];
        // Only push if route exists and is a string
        if (route && typeof route === 'string') {
            this.props.history?.push(route);
        } else {
            if (process.env.NODE_ENV === 'development') {
                console.warn('Invalid tabId or route:', { tabId, validTabId, route });
            }
        }
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Selenium />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <Playwright />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <Cypress />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <Protractor />
            )
        }
        else if(this.state.activeTab === 4) {
            return(
                <RESTAssured />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <ReadyAPI />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <PerformaceTest />
            )
        }
        else if(this.state.activeTab === 7) {
            return(
                <Architecture />
            )
        }
        else if(this.state.activeTab === 8) {
            return(
                <Appium />
            )
        }
        else if(this.state.activeTab === 9) {
            return(
                <WebDriverIO />
            )
        }
        else if(this.state.activeTab === 10) {
            return(
                <SuperTest />
            )
        }
        else if(this.state.activeTab === 11) {
            return(
                <Frisby />
            )
        }
        // Default fallback to Selenium
        return <Selenium />
    }

    render() {
        // Tabs sorted alphabetically by label
        const tabs = [
            { label: 'Appium', id: 8 },
            { label: 'Architecture', id: 7 },
            { label: 'CypressIO', id: 2 },
            { label: 'FrisBy', id: 11 },
            { label: 'PerformaceTest', id: 6 },
            { label: 'Playwright', id: 1 },
            { label: 'Protractor', id: 3 },
            { label: 'ReadyAPI', id: 5 },
            { label: 'RESTAssured', id: 4 },
            { label: 'Selenium', id: 0 },
            { label: 'SuperTest', id: 10 },
            { label: 'WebDriverIO', id: 9 }
        ];

        return (
            <div className="category-tabs"> 
                
                {/* Custom Tabs */}
                <div style={{
                    backgroundColor: '#ffffff',
                    borderBottom: '2px solid #e0e0e0',
                    marginBottom: '20px',
                    position: 'sticky',
                    top: '64px',
                    zIndex: 100,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '0 20px',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'thin'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '4px',
                            minWidth: 'min-content'
                        }}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => this.handleTabChange(tab.id)}
                                    style={{
                                        padding: '16px 24px',
                                        fontSize: '16px',
                                        fontWeight: this.state.activeTab === tab.id ? '600' : '400',
                                        color: this.state.activeTab === tab.id ? '#00416A' : '#666666',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        borderBottom: this.state.activeTab === tab.id ? '3px solid #00416A' : '3px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'inherit',
                                        outline: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (this.state.activeTab !== tab.id) {
                                            e.target.style.color = '#00416A';
                                            e.target.style.backgroundColor = '#f0f7fa';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (this.state.activeTab !== tab.id) {
                                            e.target.style.color = '#666666';
                                            e.target.style.backgroundColor = 'transparent';
                                        }
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default withRouter(apis);
