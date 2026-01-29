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
import CoursesApiAutomation from '../components/courses/tabs/coursesApiAutomation';
import CoursesDevOps from '../components/courses/tabs/coursesDevOps';
import CoursesAiForQa from '../components/courses/tabs/coursesAiForQa';
import CoursesDigitalMarketing from '../components/courses/tabs/coursesDigitalMarketing';
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
        if (path.includes('/selenium-webdriver')) return 11;
        if (path.includes('/code4kids')) return 0;
        if (path.includes('/webdevelopment')) return 1;
        // Check automation before api-automation to avoid conflicts
        if (path.includes('/automation') && !path.includes('/api-automation') && !path.includes('/selenium-webdriver')) return 2;
        // Check api-automation after automation to avoid conflicts
        if (path.includes('/api-automation')) return 3;
        if (path.includes('/manual')) return 4;
        if (path.includes('/accessibility')) return 5;
        if (path.includes('/sdet-roadmap')) return 6;
        if (path.includes('/ai-for-qa')) return 7;
        if (path.includes('/performance')) return 8;
        if (path.includes('/security')) return 9;
        if (path.includes('/devops-pipeline')) return 10;
        if (path.includes('/digital-marketing')) return 12;
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
            '/courses/api-automation',
            '/courses/manual',
            '/courses/accessibility',
            '/courses/sdet-roadmap',
            '/courses/ai-for-qa',
            '/courses/performance',
            '/courses/security',
            '/courses/devops-pipeline',
            '/courses/selenium-webdriver',
            '/courses/digital-marketing'
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
                <CoursesApiAutomation />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <CoursesManual />
            )
        }
        else if(this.state.activeTab === 5) {
            return(
                <Accessibility />
            )
        }
        else if(this.state.activeTab === 6) {
            return(
                <SdetRoadmap />
            )
        }
        else if(this.state.activeTab === 7) {
            return(
                <CoursesAiForQa />
            )
        }
        else if(this.state.activeTab === 8) {
            return(
                <CoursesPerformance />
            )
        }
        else if(this.state.activeTab === 9) {
            return(
                <CoursesSecurity />
            )
        }
        else if(this.state.activeTab === 10) {
            return(
                <CoursesDevOps />
            )
        }
        else if(this.state.activeTab === 11) {
            return(
                <SeleniumWebDriver />
            )
        }
        else if(this.state.activeTab === 12) {
            return(
                <CoursesDigitalMarketing />
            )
        }
    }

    render() {
        // Tabs sorted alphabetically by label
        const tabs = [
            { label: 'Accessibility', id: 5 },
            { label: 'AI for QA', id: 7 },
            { label: 'API Automation', id: 3 },
            { label: 'Automation', id: 2 },
            { label: 'Code4Kids', id: 0 },
            { label: 'DevOps Pipeline', id: 10 },
            { label: 'Digital Marketing', id: 12 },
            { label: 'Manual', id: 4 },
            { label: 'Performance', id: 8 },
            { label: 'SDET ROADMAP', id: 6 },
            { label: 'Security', id: 9 },
            { label: 'Selenium WebDriver', id: 11 },
            { label: 'WebDevelopment', id: 1 }
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
