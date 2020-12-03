import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import KidSystemconf from '../components/code4kids/tabs/kidSystemconf';
import KidBrowserconf from '../components/code4kids/tabs/kidBrowserconf';
import KidMsoffice from '../components/code4kids/tabs/kidMsoffice';
import KidHtml from '../components/code4kids/tabs/html'
import KidCss from '../components/code4kids/tabs/css'
import KidJavascript from '../components/code4kids/tabs/javascript'
import KidReact from '../components/code4kids/tabs/reactjs'
import KidFrontend from '../components/code4kids/tabs/webdevelopment';


class Code4Kids extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <KidSystemconf />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <KidBrowserconf />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <KidMsoffice />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <KidHtml />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <KidCss />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <KidJavascript />
            )
        } else if(this.state.activeTab === 6) {
            return(
                <KidReact />
            )
        } else if(this.state.activeTab === 7) {
            return(
                <KidFrontend />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>System-conf</Tab>
                    <Tab>Browser-conf</Tab>
                    <Tab>MS-Office</Tab>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>FrontendDevelopment</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default Code4Kids;