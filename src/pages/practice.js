import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import PracCode4Kids from '../components/practice/tabs/pracCode4Kids';
import PracWebDevelopment from '../components/practice/tabs/pracWebDevelopment';
import PracAutomationTest from '../components/practice/tabs/pracAutomationTest';
import PracManualTest from '../components/practice/tabs/pracManualTest';

class practice extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <PracCode4Kids />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <PracWebDevelopment />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <PracAutomationTest />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <PracManualTest />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Code4Kids</Tab>
                    <Tab>WebDevelopment</Tab>
                    <Tab>AutomationTest</Tab>
                    <Tab>ManualTest</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default practice;
