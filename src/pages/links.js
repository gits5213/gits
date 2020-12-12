import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import BasicLinks from '../components/links/tabs/basicLinks';
import FullStackTest from '../components/links/tabs/fullStackTest';
import FullStackDev from '../components/links/tabs/fullStackDev';
import ProgLang from '../components/links/tabs/progLang'


class Code4Kids extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <BasicLinks />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <FullStackTest />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <FullStackDev />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <ProgLang />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Basic-Links</Tab>
                    <Tab>Test-Links</Tab>
                    <Tab>WebDev-Links</Tab>
                    <Tab>ProgLang-Links</Tab>
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