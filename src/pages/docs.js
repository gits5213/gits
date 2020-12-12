import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import ResManual from '../components/docs/tabs/resManual';
import ResLinux from '../components/docs/tabs/resLinux';
import ResSql from '../components/docs/tabs/resSql';
import ResNetwork from '../components/docs/tabs/resNetwork';
import ResHtml from '../components/docs/tabs/resHtml';
import ResCss from '../components/docs/tabs/resCss';
import ResJavascript from '../components/docs/tabs/resJavascript';
import ResJava from '../components/docs/tabs/resJava';
import ResSelenium from '../components/docs/tabs/resSelenium';
import ResProtractor from '../components/docs/tabs/resProtractor';
import ResWebIo from '../components/docs/tabs/resWebIo';
import ResAppium from '../components/docs/tabs/resAppium';
import ResRestassured from '../components/docs/tabs/resRestassured';
import Agile from '../components/docs/tabs/agile';
import Scrum from '../components/docs/tabs/scrum';
import Links from '../components/docs/tabs/resLinks';

class resources extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <Agile />
            )
        }else if(this.state.activeTab === 1) {
            return(
                <Scrum />
            )
        }else if(this.state.activeTab === 2) {
            return(
                <ResNetwork />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <ResSql />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <ResManual />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <ResLinux />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <ResHtml />
            )
        } else if(this.state.activeTab === 7) {
            return(
                <ResCss />
            )
        } else if(this.state.activeTab === 8) {
            return(
                <ResJavascript />
            )
        } else if(this.state.activeTab === 9) {
            return(
                <ResJava />
            )
        } else if(this.state.activeTab === 10) {
            return(
                <ResSelenium />
            )
        } else if(this.state.activeTab === 11) {
            return(
                <Links />
            )
        } else if(this.state.activeTab === 12) {
            return(
                <ResProtractor />
            )
        } else if(this.state.activeTab === 13) {
            return(
                <ResWebIo />
            )
        } else if(this.state.activeTab === 14) {
            return(
                <ResAppium />
            )
        } else if(this.state.activeTab === 15) {
            return(
                <ResRestassured />
            )
         }
        
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Agile</Tab>
                <Tab>Scrum</Tab>
                <Tab>Networking</Tab>
                <Tab>SQL</Tab>
                <Tab>Manual</Tab>
                <Tab>Linux</Tab>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>Javascript</Tab>
                <Tab>Java</Tab>
                <Tab>Selenium</Tab>
                <Tab>Links</Tab>
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
