import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import '../style/courses.css';
import HeaderText from '../components/header';

class Courses_fsat extends Component {
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is Selenium Tab1</h1></div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Protractor Tab2</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is WebDriverIO Tab3</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is Appium Tab4</h1></div>
            )
        } else if(this.state.activeTab === 4) {
            return(
                <div><h1>This is RestAssured Tab5</h1></div>
            )
        } else if(this.state.activeTab === 5) {
            return(
                <div><h1>This is SuperTest Tab6</h1></div>
            )
        } else if(this.state.activeTab === 6) {
            return(
                <div><h1>This is FrisbyJS Tab7</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Selenium</Tab>
                    <Tab>Protractor</Tab>
                    <Tab>WebDriverIO</Tab>
                    <Tab>Appium</Tab>
                    <Tab>RestAssured</Tab>
                    <Tab>SuperTest</Tab>
                    <Tab>FrisbyJS</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default Courses_fsat;
                    