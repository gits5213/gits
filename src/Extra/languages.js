import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import '../style/courses.css';
import HeaderText from '../components/header';


class Languages extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is Code4Kids Tab</h1></div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Web Development Tab</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is Automation Tab</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is Manual Tab</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Java</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>SQL</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default Languages;
