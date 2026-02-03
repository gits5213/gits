import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import PracticeExamples from '../components/practice/tabs/PracticeExamples';
import TestCases from '../components/practice/tabs/TestCases';
import Quiz from '../components/practice/tabs/Quiz';
import Scorecard from '../components/practice/tabs/Scorecard';
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
        if (path.includes('/scorecard')) return 3;
        // Default to practice examples if just /practice
        return 0;
    }

    componentDidMount() {
        // Redirect /practice to /practice/examples if no specific tab (handled by app/practice/page.js for select)
        const path = this.props.location.pathname;
        if (path === '/practice' || path === '/practice/') {
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
            '/practice/quiz',
            '/practice/scorecard'
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
        } else if(this.state.activeTab === 3) {
            return(
                <Scorecard key="scorecard" />
            )
        }
    }

    render() {
        const tabs = [
            { 
                label: 'UI Practice Examples', 
                id: 0,
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            },
            { 
                label: 'UI Test Cases', 
                id: 1,
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            },
            { 
                label: 'Quiz', 
                id: 2,
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 9H15C14.4477 9 14 8.55228 14 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            },
            { 
                label: 'Scorecard', 
                id: 3,
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17V7M13 17V7M17 17V7M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            }
        ];

        const practiceTypeOptions = [
            { value: '/practice/examples', label: 'UI Practice Examples' },
            { value: '/practice/api-examples', label: 'API Practice Examples' },
            { value: '/practice/performance-examples', label: 'Performance Practice Example' },
            { value: '/practice/appium-ios-emulator', label: 'Appium iOS (Emulator) Practice Example' },
            { value: '/practice/appium-android-emulator', label: 'Appium Android (Emulator) Practice Example' },
            { value: '/practice/appium-ios-device', label: 'Appium iOS (Real Device) Practice Example' },
            { value: '/practice/appium-android-device', label: 'Appium Android (Device) Practice Example' }
        ];
        const currentPath = (this.props.location.pathname || '').replace(/\/$/, '') || '/practice/examples';
        const currentPracticeType = practiceTypeOptions.find((opt) => (opt.value.replace(/\/$/, '') === currentPath)) || practiceTypeOptions[0];

        return (
            <div className="category-tabs">
                {/* Practice Type Dropdown - visible on practice page */}
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto 20px',
                    padding: '16px 20px',
                    background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 65, 106, 0.25)'
                }}>
                    <label htmlFor="practice-type-dropdown" style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.95)', marginBottom: '8px' }}>
                        Practice type
                    </label>
                    <select
                        id="practice-type-dropdown"
                        value={currentPracticeType.value}
                        onChange={(e) => {
                            const path = e.target.value;
                            if (path && this.props.history && typeof this.props.history.push === 'function') {
                                this.props.history.push(path);
                            }
                        }}
                        style={{
                            width: '100%',
                            maxWidth: '480px',
                            padding: '12px 16px',
                            fontSize: '16px',
                            color: '#1e293b',
                            backgroundColor: '#ffffff',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            outline: 'none',
                            fontFamily: 'inherit'
                        }}
                    >
                        {practiceTypeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                {/* Modern Tab Navigation */}
                <div style={{
                    background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
                    borderBottom: '1px solid #e9ecef',
                    marginBottom: '30px',
                    position: 'sticky',
                    top: '64px',
                    zIndex: 100,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '20px',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'thin'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: 'min-content'
                        }}>
                            {tabs.map((tab) => {
                                const isActive = this.state.activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => this.handleTabChange(tab.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '14px 28px',
                                            fontSize: '16px',
                                            fontWeight: isActive ? '600' : '500',
                                            color: isActive ? '#ffffff' : '#495057',
                                            backgroundColor: isActive 
                                                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                                                : '#ffffff',
                                            background: isActive 
                                                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                                                : '#ffffff',
                                            border: isActive ? 'none' : '2px solid #e9ecef',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            whiteSpace: 'nowrap',
                                            fontFamily: 'inherit',
                                            outline: 'none',
                                            boxShadow: isActive 
                                                ? '0 8px 16px rgba(102, 126, 234, 0.3)' 
                                                : '0 2px 4px rgba(0,0,0,0.05)',
                                            transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%)';
                                                e.currentTarget.style.borderColor = '#667eea';
                                                e.currentTarget.style.color = '#667eea';
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.15)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = '#ffffff';
                                                e.currentTarget.style.borderColor = '#e9ecef';
                                                e.currentTarget.style.color = '#495057';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                                            }
                                        }}
                                    >
                                        {/* Active tab shimmer effect */}
                                        {isActive && (
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                                animation: 'shimmer 2s infinite'
                                            }}></div>
                                        )}
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>
                                            {tab.icon}
                                        </span>
                                        <span style={{
                                            position: 'relative',
                                            zIndex: 1
                                        }}>
                                            {tab.label}
                                        </span>
                                        <style>{`
                                            @keyframes shimmer {
                                                0% { left: -100%; }
                                                100% { left: 100%; }
                                            }
                                        `}</style>
                                    </button>
                                );
                            })}
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
