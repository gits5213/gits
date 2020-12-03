import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import '../style/courses.css';
import HeaderText from '../components/header';

class Courses_fsmt extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is APIs Tab1</h1></div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is TC-Managment Tab2</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is POSTMAN Tab3</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is BloomRPC Tab4</h1></div>
            )
        }
    }
    
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>APIs</Tab>
                    <Tab>TC-Managment</Tab>
                    <Tab>POSTMAN</Tab>
                    <Tab>BloomRPC</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default Courses_fsmt;
