import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CoursesCode4Kids from '../components/courses/tabs/coursesCode4Kids';
import CoursesWebDev from '../components/courses/tabs/coursesWebDev';
import CoursesAutomation from '../components/courses/tabs/coursesAutomation';
import CoursesManual from '../components/courses/tabs/coursesManual';
import Accessibility from '../components/courses/tabs/accessibility';
import SdetRoadmap from '../components/courses/tabs/sdetRoadmap';
import CoursesPerformance from '../components/courses/tabs/coursesPerformance';
import CoursesSecurity from '../components/courses/tabs/coursesSecurity';
import SeleniumWebDriver from '../components/courses/tabs/seleniumWebDriver';
import '../styles/base.css';
import '../styles/courses.css';

class Courses extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        // Check for selenium-webdriver first (before automation check)
        if (path.includes('/selenium-webdriver')) return 8;
        if (path.includes('/code4kids')) return 0;
        if (path.includes('/webdevelopment')) return 1;
        // Check automation after selenium-webdriver to avoid conflicts
        if (path.includes('/automation') && !path.includes('/selenium-webdriver')) return 2;
        if (path.includes('/manual')) return 3;
        if (path.includes('/accessibility')) return 4;
        if (path.includes('/sdet-roadmap')) return 5;
        if (path.includes('/performance')) return 6;
        if (path.includes('/security')) return 7;
        // Default to code4kids if just /courses
        return 0;
    }

    componentDidMount() {
        // Redirect /courses to /courses/code4kids if no specific tab
        if (this.props.location.pathname === '/courses') {
            this.props.history.replace('/courses/code4kids');
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
            '/courses/code4kids',
            '/courses/webdevelopment',
            '/courses/automation',
            '/courses/manual',
            '/courses/accessibility',
            '/courses/sdet-roadmap',
            '/courses/performance',
            '/courses/security'
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
                <CoursesCode4Kids />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <CoursesWebDev />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <CoursesAutomation />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <CoursesManual />
            )
        }
        else if(this.state.activeTab === 4) {
            return(
                <Accessibility />
            )
        }
        else if(this.state.activeTab === 5) {
            return(
                <SdetRoadmap />
            )
        }
        else if(this.state.activeTab === 6) {
            return(
                <CoursesPerformance />
            )
        }
        else if(this.state.activeTab === 7) {
            return(
                <CoursesSecurity />
            )
        }
        else if(this.state.activeTab === 8) {
            return(
                <SeleniumWebDriver />
            )
        }
    }

    render() {
        const tabs = [
            { label: 'Code4Kids', id: 0 },
            { label: 'WebDevelopment', id: 1 },
            { label: 'Automation', id: 2 },
            { label: 'Manual', id: 3 },
            { label: 'Accessibility', id: 4 },
            { label: 'SDET ROADMAP', id: 5 },
            { label: 'Performance', id: 6 },
            { label: 'Security', id: 7 }
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
export default withRouter(Courses);
