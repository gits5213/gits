import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';

import Selenium from '../components/api/tabs/selenium';
import Cypress from '../components/api/tabs/cypress';
import Protractor from '../components/api/tabs/protractor';
import WebDriverIO from '../components/api/tabs/webDriverIo';
import Appium from '../components/api/tabs/appium';
import RestAssured from '../components/api/tabs/restassured';
import Frisby from '../components/api/tabs/frisby';
import SuperTest from '../components/api/tabs/superTest';
import Playwright from '../components/api/tabs/playwright';

class apis extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Selenium />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <Cypress />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <Protractor />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <WebDriverIO />
            )
        }
        else if(this.state.activeTab === 4) {
            return(
                <Appium />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <RestAssured />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <SuperTest />
            )
        }
        else if(this.state.activeTab === 7) {
            return(
                <Frisby />
            )
        }
        else if(this.state.activeTab === 8) {
            return(
                <Playwright />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Selenium</Tab>
                    <Tab>CypressIO</Tab>
                    <Tab>Protractor</Tab>
                    <Tab>WebDriverIO</Tab>
                    <Tab>Appium</Tab>
                    <Tab>RestAssured</Tab>
                    <Tab>SuperTest</Tab>
                    <Tab>FrisBy</Tab>
                    <Tab>Playwright</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default apis;
