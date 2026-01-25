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
        if (path.includes('/linux')) return 3;
        if (path.includes('/git')) return 4;
        if (path.includes('/html')) return 5;
        if (path.includes('/css')) return 6;
        if (path.includes('/javascript')) return 7;
        if (path.includes('/typescript')) return 8;
        if (path.includes('/reactjs')) return 9;
        if (path.includes('/nextjs')) return 10;
        if (path.includes('/sql')) return 11;
        if (path.includes('/java')) return 12;
        if (path.includes('/python')) return 13;
        if (path.includes('/network')) return 14;
        if (path.includes('/links')) return 15;
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
                <ResLinux />
            )
        }else if(this.state.activeTab === 4) {
            return(
                <ResGit />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <ResHtml />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <ResCss />
            )
        } else if(this.state.activeTab === 7) {
            return(
                <ResJavascript />
            )
        } else if(this.state.activeTab === 8) {
            return(
                <ResTypeScript />
            )
        } else if(this.state.activeTab === 9) {
            return(
                <ResReact />
            )
        } else if(this.state.activeTab === 10) {
            return(
                <ResNextJS />
            )
        } else if(this.state.activeTab === 11) {
            return(
                <ResSql />
            )
        } else if(this.state.activeTab === 12) {
            return(
                <ResJava />
            )
        }else if(this.state.activeTab === 13) {
            return(
                <ResPython />
            )
        } else if(this.state.activeTab === 14) {
            return(
                <ResNetwork />
            )
        }else if(this.state.activeTab === 15) {
            return(
                <Links />
            )
        }
        
    }

    render() {
        const tabs = [
            { label: 'Agile', id: 0 },
            { label: 'Scrum', id: 1 },
            { label: 'Manual', id: 2 },
            { label: 'Linux', id: 3 },
            { label: 'Git', id: 4 },
            { label: 'HTML', id: 5 },
            { label: 'CSS', id: 6 },
            { label: 'JS', id: 7 },
            { label: 'TS', id: 8 },
            { label: 'ReactJS', id: 9 },
            { label: 'NextJS', id: 10 },
            { label: 'SQL', id: 11 },
            { label: 'JAVA', id: 12 },
            { label: 'PY', id: 13 },
            { label: 'NET', id: 14 },
            { label: 'Links', id: 15 }
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
