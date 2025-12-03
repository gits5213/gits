import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import HeaderText from '../components/header';
import Window from '../components/aid/tabs/window';
import Mac from '../components/aid/tabs/mac';
import Basic from '../components/aid/tabs/basic';
import Gk from '../components/aid/tabs/gk';
import Help from '../components/aid/tabs/help';
import Frontend from '../components/aid/tabs/frontend';
import CodeSnippet from '../components/aid/tabs/code-snippet';

class links extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        if (path.includes('/window')) return 0;
        if (path.includes('/mac')) return 1;
        if (path.includes('/basic')) return 2;
        if (path.includes('/gk')) return 3;
        if (path.includes('/help')) return 4;
        if (path.includes('/frontend')) return 5;
        if (path.includes('/codesnippet')) return 6;
        // Default to window if just /aid
        return 0;
    }

    componentDidMount() {
        // Redirect /aid to /aid/window if no specific tab
        if (this.props.location.pathname === '/aid') {
            this.props.history.replace('/aid/window');
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
            '/aid/window',
            '/aid/mac',
            '/aid/basic',
            '/aid/gk',
            '/aid/help',
            '/aid/frontend',
            '/aid/codesnippet'
        ];
        this.props.history.push(tabRoutes[tabId]);
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Window />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <Mac />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <Basic />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <Gk />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <Help />
            )
        }else if(this.state.activeTab === 5) {
            return(
                <Frontend />
            )
        }else if(this.state.activeTab === 6) {
            return(
                <CodeSnippet />
            )
        }
    }

    render() {
        const tabs = [
            { label: 'Window', id: 0 },
            { label: 'MAC', id: 1 },
            { label: 'Basic', id: 2 },
            { label: 'G.K', id: 3 },
            { label: 'Help', id: 4 },
            { label: 'Frontend', id: 5 },
            { label: 'CodeSnippet', id: 6 }
        ];

        return (
            <div className="category-tabs">
                <HeaderText />
                
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
export default withRouter(links);
