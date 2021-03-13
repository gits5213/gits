import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import ResManual from '../components/docs/tabs/resManual';
import ResLinux from '../components/docs/tabs/resLinux';
import ResGit from '../components/docs/tabs/resGit';
import ResSql from '../components/docs/tabs/resSql';
import ResNetwork from '../components/docs/tabs/resNetwork';
import ResHtml from '../components/docs/tabs/resHtml';
import ResCss from '../components/docs/tabs/resCss';
import ResJavascript from '../components/docs/tabs/resJavascript';
import ResReact from '../components/docs/tabs/resReact';
import ResJava from '../components/docs/tabs/resJava';
import ResPython from '../components/docs/tabs/resPython';
import Agile from '../components/docs/tabs/agile';
import Scrum from '../components/docs/tabs/scrum';
import Links from '../components/docs/tabs/resLinks';

class docs extends Component {
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
        }else if(this.state.activeTab === 6) {
            return(
                <ResGit />
            )
        } else if(this.state.activeTab === 7) {
            return(
                <ResHtml />
            )
        } else if(this.state.activeTab === 8) {
            return(
                <ResCss />
            )
        } else if(this.state.activeTab === 9) {
            return(
                <ResJava />
            )
        }else if(this.state.activeTab === 10) {
            return(
                <ResPython />
            )
        } else if(this.state.activeTab === 11) {
            return(
                <ResJavascript />
            )
        } else if(this.state.activeTab === 12) {
            return(
                <ResReact />
            )
        }else if(this.state.activeTab === 13) {
            return(
                <Links />
            )
        }
        
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Agile</Tab>
                    <Tab>Scrum</Tab>
                    <Tab>Net</Tab>
                    <Tab>SQL</Tab>
                    <Tab>Manual</Tab>
                    <Tab>Linux</Tab>
                    <Tab>Git</Tab>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>Java</Tab>
                    <Tab>PY</Tab>
                    <Tab>JS</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>Links</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default docs;
