import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import '../style/courses.css';
import HeaderText from '../components/header';

class Courses_wd extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is HTML Tab1</h1></div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is CSS Tab2</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is Javascript Tab3</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>This is ReactJS Tab4</h1></div>
            )
        }
    }
    // render(){
    //     return(
    //         <div className='category-tabs'>
    //             <Tabs activeTab={this.state.activeTab} onchange={(tabId) => this.setState({activeTab: tabId})} ripple>
    //                 <Tab>HTML</Tab>
    //                 <Tab>CSS</Tab>
    //                 <Tab>Javascript</Tab>
    //                 <Tab>ReactJS</Tab>
    //             </Tabs>
    //             <HeaderText />
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>ReactJS</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default Courses_wd;