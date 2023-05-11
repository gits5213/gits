import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import HeaderText from '../components/header';
import Window from '../components/aid/tabs/window';
import Mac from '../components/aid/tabs/mac';
import Basic from '../components/aid/tabs/basic';
import Gk from '../components/aid/tabs/gk';
import Help from '../components/aid/tabs/help';
import Frontend from '../components/aid/tabs/frontend';
import CodeSnippet from '../components/aid/tabs/code-snippet';



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
        }else if(this.state.activeTab === 6) {
            return(
                <CodeSnippet />
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
                    <Tab>CodeSnippet</Tab>
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
