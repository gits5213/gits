import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import HeaderText from '../components/header';
import PracticeExamples from '../components/practice/tabs/PracticeExamples';
import TestCases from '../components/practice/tabs/TestCases';
import Quiz from '../components/practice/tabs/Quiz';
import '../styles/base.css';

class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        if (path.includes('/testcases')) return 1;
        if (path.includes('/quiz')) return 2;
        // Default to practice examples if just /practice
        return 0;
    }

    componentDidMount() {
        // Redirect /practice to /practice/examples if no specific tab
        const path = this.props.location.pathname;
        if (path === '/practice') {
            this.props.history.replace('/practice/examples');
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
            '/practice/examples',
            '/practice/testcases',
            '/practice/quiz'
        ];
        this.props.history.push(tabRoutes[tabId]);
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <PracticeExamples />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <TestCases />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <Quiz />
            )
        }
    }

    render() {
        const tabs = [
            { label: 'Practice Examples', id: 0 },
            { label: 'Test Cases', id: 1 },
            { label: 'Quiz', id: 2 }
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

export default withRouter(Practice);
