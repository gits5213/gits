import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import Window from '../components/conf/tabs/window';
import Mac from '../components/conf/tabs/mac';
import Basic from '../components/conf/tabs/basic';
import Gk from '../components/conf/tabs/gk';
import Help from '../components/conf/tabs/help';
import Frontend from '../components/conf/tabs/frontend';



class links extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Window />
            )
        } else if(this.state.activeTab === 1) {
            return(
                <Mac />
            )
        } else if(this.state.activeTab === 2) {
            return(
                <Basic />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <Gk />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <Help />
            )
        }else if(this.state.activeTab === 5) {
            return(
                <Frontend />
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Window</Tab>
                    <Tab>MAC</Tab>
                    <Tab>Basic</Tab>
                    <Tab>G.K</Tab>
                    <Tab>Help</Tab>
                    <Tab>Frontend</Tab>
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
