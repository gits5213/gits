import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import '../style/courseTab.css';
import HeaderText from '../components/header';
import CoursesCode4Kids from '../components/courses/tabs/coursesCode4Kids';
import CoursesWebDev from '../components/courses/tabs/coursesWebDev';
import CoursesAutomation from '../components/courses/tabs/coursesAutomation';
import CoursesManual from '../components/courses/tabs/coursesManual';

class Courses extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
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
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Code4Kids</Tab>
                    <Tab>WebDevelopment</Tab>
                    <Tab>Automation</Tab>
                    <Tab>Manual</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default Courses;
