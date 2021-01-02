import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import BasicLinks from '../components/links/tabs/basicLinks';
import FullStackTest from '../components/links/tabs/fullStackTest';
import FullStackDev from '../components/links/tabs/fullStackDev';
import ProgLang from '../components/links/tabs/progLang'
import Window from '../components/links/tabs/window'
import Mac from '../components/links/tabs/mac'


class links extends Component {
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
        else if(this.state.activeTab === 3) {
            return(
                <Window />
            )
        }
        else if(this.state.activeTab === 3) {
            return(
                <Mac />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Basic</Tab>
                    <Tab>SQA</Tab>
                    <Tab>WebDev</Tab>
                    <Tab>Prog-Lang</Tab>
                    <Tab>Window</Tab>
                    <Tab>MAC</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default links;
