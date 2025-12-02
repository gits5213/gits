import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import { withRouter } from 'react-router-dom';
import HeaderText from '../components/header';
import CoursesCode4Kids from '../components/courses/tabs/coursesCode4Kids';
import CoursesWebDev from '../components/courses/tabs/coursesWebDev';
import CoursesAutomation from '../components/courses/tabs/coursesAutomation';
import CoursesManual from '../components/courses/tabs/coursesManual';
import Accessibility from '../components/courses/tabs/accessibility';
import SdetRoadmap from '../components/courses/tabs/sdetRoadmap';

class Courses extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        if (path.includes('/code4kids')) return 0;
        if (path.includes('/webdevelopment')) return 1;
        if (path.includes('/automation')) return 2;
        if (path.includes('/manual')) return 3;
        if (path.includes('/accessibility')) return 4;
        if (path.includes('/sdet-roadmap')) return 5;
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
            '/courses/sdet-roadmap'
        ];
        this.props.history.push(tabRoutes[tabId]);
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
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={this.handleTabChange} ripple>
                    <Tab>Code4Kids</Tab>
                    <Tab>WebDevelopment</Tab>
                    <Tab>Automation</Tab>
                    <Tab>Manual</Tab>
                    <Tab>Accessibility</Tab>
                    <Tab>SDET ROADMAP</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default withRouter(Courses);
