import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import ResManual from '../components/docs/tabs/resManual';
import ResLinux from '../components/docs/tabs/resLinux';
import ResGit from '../components/docs/tabs/resGit';
import ResSql from '../components/docs/tabs/resSql';
import ResNetwork from '../components/docs/tabs/resNetwork';
import ResHtml from '../components/docs/tabs/resHtml';
import ResCss from '../components/docs/tabs/resCss';
import ResJavascript from '../components/docs/tabs/resJavascript';
import ResReact from '../components/docs/tabs/resReact';
import ResNextJS from '../components/docs/tabs/resNextJS';
import ResJava from '../components/docs/tabs/resJava';
import ResPython from '../components/docs/tabs/resPython';
import ResTypeScript from '../components/docs/tabs/resTypeScript';
import Agile from '../components/docs/tabs/agile';
import Scrum from '../components/docs/tabs/scrum';
import Bdd from '../components/docs/tabs/bdd';
import Cucumber from '../components/docs/tabs/cucumber';
import Installation from '../components/docs/tabs/installation';
import Postman from '../components/docs/tabs/postman';
import Appium from '../components/docs/tabs/appium';
import JMeter from '../components/docs/tabs/jmeter';
import Links from '../components/docs/tabs/resLinks';
import '../styles/base.css';
import '../styles/docs.css';

class docs extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        if (path.includes('/agile')) return 0;
        if (path.includes('/scrum')) return 1;
        if (path.includes('/manual') && !path.includes('/courses')) return 2;
        if (path.includes('/bdd')) return 3;
        if (path.includes('/cucumber')) return 4;
        if (path.includes('/installation')) return 5;
        if (path.includes('/postman')) return 6;
        if (path.includes('/appium')) return 7;
        if (path.includes('/jmeter')) return 8;
        if (path.includes('/linux')) return 9;
        if (path.includes('/git')) return 10;
        if (path.includes('/html')) return 11;
        if (path.includes('/css')) return 12;
        if (path.includes('/javascript')) return 13;
        if (path.includes('/typescript')) return 14;
        if (path.includes('/reactjs')) return 15;
        if (path.includes('/nextjs')) return 16;
        if (path.includes('/sql')) return 17;
        if (path.includes('/java')) return 18;
        if (path.includes('/python')) return 19;
        if (path.includes('/network')) return 20;
        if (path.includes('/links')) return 21;
        // Default to agile if just /docs
        return 0;
    }

    componentDidMount() {
        // Redirect /docs to /docs/agile if no specific tab
        if (this.props.location.pathname === '/docs') {
            this.props.history.replace('/docs/agile');
        }
    }

    componentDidUpdate(prevProps) {
        // Update active tab when URL changes
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ activeTab: this.getActiveTabFromPath() });
        }
    }

    handleTabChange = (tabId) => {
        const tabRoutes = [
            '/docs/agile',
            '/docs/scrum',
            '/docs/manual',
            '/docs/bdd',
            '/docs/cucumber',
            '/docs/installation',
            '/docs/postman',
            '/docs/appium',
            '/docs/jmeter',
            '/docs/linux',
            '/docs/git',
            '/docs/html',
            '/docs/css',
            '/docs/javascript',
            '/docs/typescript',
            '/docs/reactjs',
            '/docs/nextjs',
            '/docs/sql',
            '/docs/java',
            '/docs/python',
            '/docs/network',
            '/docs/links'
        ];
        // Ensure tabId is a valid number
        const validTabId = typeof tabId === 'number' ? tabId : parseInt(tabId, 10);
        const route = tabRoutes[validTabId];
        // Only push if route exists and is a string
        if (route && typeof route === 'string') {
            this.props.history.push(route);
        } else {
            if (process.env.NODE_ENV === 'development') {
                console.warn('Invalid tabId or route:', { tabId, validTabId, route });
            }
        }
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <Agile />
            )
        }else if(this.state.activeTab === 1) {
            return(
                <Scrum />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <ResManual />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <Bdd />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <Cucumber />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <Installation />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <Postman />
            )
        } else if(this.state.activeTab === 7) {
            return(
                <Appium />
            )
        } else if(this.state.activeTab === 8) {
            return(
                <JMeter />
            )
        } else if(this.state.activeTab === 9) {
            return(
                <ResLinux />
            )
        }else if(this.state.activeTab === 10) {
            return(
                <ResGit />
            )
        } else if(this.state.activeTab === 11) {
            return(
                <ResHtml />
            )
        } else if(this.state.activeTab === 12) {
            return(
                <ResCss />
            )
        } else if(this.state.activeTab === 13) {
            return(
                <ResJavascript />
            )
        } else if(this.state.activeTab === 14) {
            return(
                <ResTypeScript />
            )
        } else if(this.state.activeTab === 15) {
            return(
                <ResReact />
            )
        } else if(this.state.activeTab === 16) {
            return(
                <ResNextJS />
            )
        } else if(this.state.activeTab === 17) {
            return(
                <ResSql />
            )
        } else if(this.state.activeTab === 18) {
            return(
                <ResJava />
            )
        }else if(this.state.activeTab === 19) {
            return(
                <ResPython />
            )
        } else if(this.state.activeTab === 20) {
            return(
                <ResNetwork />
            )
        }else if(this.state.activeTab === 21) {
            return(
                <Links />
            )
        }
        
    }

    render() {
        // Tabs sorted alphabetically by label
        const tabs = [
            { label: 'Agile', id: 0 },
            { label: 'Appium', id: 7 },
            { label: 'BDD', id: 3 },
            { label: 'CSS', id: 12 },
            { label: 'Cucumber', id: 4 },
            { label: 'Git', id: 10 },
            { label: 'HTML', id: 11 },
            { label: 'Installation', id: 5 },
            { label: 'JAVA', id: 18 },
            { label: 'JMeter', id: 8 },
            { label: 'JS', id: 13 },
            { label: 'Links', id: 21 },
            { label: 'Linux', id: 9 },
            { label: 'Manual', id: 2 },
            { label: 'NET', id: 20 },
            { label: 'NextJS', id: 16 },
            { label: 'Postman', id: 6 },
            { label: 'PY', id: 19 },
            { label: 'ReactJS', id: 15 },
            { label: 'Scrum', id: 1 },
            { label: 'SQL', id: 17 },
            { label: 'TS', id: 14 }
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
export default withRouter(docs);
