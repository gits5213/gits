import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import { withRouter } from 'react-router-dom';
import HeaderText from '../components/header';

import Selenium from '../components/api/tabs/selenium';
import Cypress from '../components/api/tabs/cypress';
import Protractor from '../components/api/tabs/protractor';
import WebDriverIO from '../components/api/tabs/webDriverIo';
import Appium from '../components/api/tabs/appium';
import RESTAssured from '../components/api/tabs/restassured';
import Frisby from '../components/api/tabs/frisby';
import SuperTest from '../components/api/tabs/superTest';
import Playwright from '../components/api/tabs/playwright';
import ReadyAPI from '../components/api/tabs/readyapi';
import PerformaceTest from '../components/api/tabs/performance';
import Architecture from '../components/api/tabs/architecture';

class apis extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        if (path.includes('/selenium')) return 0;
        if (path.includes('/playwright')) return 1;
        if (path.includes('/cypressio')) return 2;
        if (path.includes('/protractor')) return 3;
        if (path.includes('/restassured')) return 4;
        if (path.includes('/readyapi')) return 5;
        if (path.includes('/performance')) return 6;
        if (path.includes('/architecture')) return 7;
        if (path.includes('/appium')) return 8;
        if (path.includes('/webdriverio')) return 9;
        if (path.includes('/supertest')) return 10;
        if (path.includes('/frisby')) return 11;
        // Default to selenium if just /apis
        return 0;
    }

    componentDidMount() {
        // Redirect /apis to /apis/selenium if no specific tab
        if (this.props.location.pathname === '/apis') {
            this.props.history.replace('/apis/selenium');
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
            '/apis/selenium',
            '/apis/playwright',
            '/apis/cypressio',
            '/apis/protractor',
            '/apis/restassured',
            '/apis/readyapi',
            '/apis/performance',
            '/apis/architecture',
            '/apis/appium',
            '/apis/webdriverio',
            '/apis/supertest',
            '/apis/frisby'
        ];
        this.props.history.push(tabRoutes[tabId]);
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Selenium />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <Playwright />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <Cypress />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <Protractor />
            )
        }
        else if(this.state.activeTab === 4) {
            return(
                <RESTAssured />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <ReadyAPI />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <PerformaceTest />
            )
        }
        else if(this.state.activeTab === 7) {
            return(
                <Architecture />
            )
        }
        else if(this.state.activeTab === 8) {
            return(
                <Appium />
            )
        }
        else if(this.state.activeTab === 9) {
            return(
                <WebDriverIO />
            )
        }
        else if(this.state.activeTab === 10) {
            return(
                <SuperTest />
            )
        }
        else if(this.state.activeTab === 11) {
            return(
                <Frisby />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={this.handleTabChange} ripple>
                    <Tab>Selenium</Tab>
                    <Tab>Playwright</Tab>
                    <Tab>CypressIO</Tab>
                    <Tab>Protractor</Tab>
                    <Tab>RESTAssured</Tab>
                    <Tab>ReadyAPI</Tab>
                    <Tab>PerformaceTest</Tab>
                    <Tab>Architecture</Tab>
                    <Tab>Appium</Tab>
                    <Tab>WebDriverIO</Tab>
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
export default withRouter(apis);
