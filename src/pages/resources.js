import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import ResManual from '../components/resources/tabs/resManual';
import ResLinux from '../components/resources/tabs/resLinux';
import ResSql from '../components/resources/tabs/resSql';
import ResNetwork from '../components/resources/tabs/resNetwork';
import ResHtml from '../components/resources/tabs/resHtml';
import ResCss from '../components/resources/tabs/resCss';
import ResJavascript from '../components/resources/tabs/resJavascript';
import ResJava from '../components/resources/tabs/resJava';
import ResSelenium from '../components/resources/tabs/resSelenium';
import ResProtractor from '../components/resources/tabs/resProtractor';
import ResWebIo from '../components/resources/tabs/resWebIo';
import ResAppium from '../components/resources/tabs/resAppium';
import ResRestassured from '../components/resources/tabs/resRestassured';
import ResSuperTest from '../components/resources/tabs/resSuperTest';
import ResReact from '../components/resources/tabs/resReact';
import ResFrisby from '../components/resources/tabs/resFrisby'


class resources extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <ResManual />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <ResLinux />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <ResSql />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <ResNetwork />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <ResHtml />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <ResCss />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <ResJavascript />
            )
        } else if(this.state.activeTab === 7) {
            return(
                <ResJava />
            )
        } else if(this.state.activeTab === 8) {
            return(
                <ResSelenium />
            )
        } else if(this.state.activeTab === 9) {
            return(
                <ResProtractor />
            )
        } else if(this.state.activeTab === 10) {
            return(
                <ResWebIo />
            )
        } else if(this.state.activeTab === 11) {
            return(
                <ResAppium />
            )
        } else if(this.state.activeTab === 12) {
            return(
                <ResRestassured />
            )
        } else if(this.state.activeTab === 13) {
            return(
                <ResSuperTest />
            )
        } else if(this.state.activeTab === 14) {
            return(
                <ResReact />
            )
        } else if(this.state.activeTab === 15) {
            return(
                <ResFrisby />
            )
        }
        
    }
    
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Manual</Tab>
                <Tab>Linux</Tab>
                <Tab>SQL</Tab>
                <Tab>Networking</Tab>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>Javascript</Tab>
                <Tab>Java</Tab>
                <Tab>Selenium</Tab>
                <Tab>Protractor</Tab>
                <Tab>WebDriverIO</Tab>
                <Tab>Appium</Tab>
                <Tab>RestAssured</Tab>
                {/* <Tab>SuperTest</Tab>
                <Tab>FrisbyJS</Tab>
                <Tab>ReactJS</Tab> */}
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default resources;
