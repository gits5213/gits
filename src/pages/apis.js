import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';

import Selenium from '../components/api/tabs/selenium';
import Protractor from '../components/api/tabs/protractor';
import WebDriverIO from '../components/api/tabs/webDriverIo';
import Appium from '../components/api/tabs/appium';
import RestAssured from '../components/api/tabs/restassured';
import Frisby from '../components/api/tabs/frisby';
import SuperTest from '../components/api/tabs/superTest';

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
                <Protractor />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <WebDriverIO />
            )
        }
        else if(this.state.activeTab === 3) {
            return(
                <Appium />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <RestAssured />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <WebDriverIO />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <Frisby />
            )
        }
        else if(this.state.activeTab === 7) {
            return(
                <SuperTest />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Selenium</Tab>
                    <Tab>Protractor</Tab>
                    <Tab>WebDriverIO</Tab>
                    <Tab>Appium</Tab>
                    <Tab>RestAssured</Tab>
                    <Tab>SuperTest</Tab>
                    <Tab>FrisBy</Tab>
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
