import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import { withRouter } from 'react-router-dom';
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
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        if (path.includes('/window')) return 0;
        if (path.includes('/mac')) return 1;
        if (path.includes('/basic')) return 2;
        if (path.includes('/gk')) return 3;
        if (path.includes('/help')) return 4;
        if (path.includes('/frontend')) return 5;
        if (path.includes('/codesnippet')) return 6;
        // Default to window if just /aid
        return 0;
    }

    componentDidMount() {
        // Redirect /aid to /aid/window if no specific tab
        if (this.props.location.pathname === '/aid') {
            this.props.history.replace('/aid/window');
        }
    }

    componentDidUpdate(prevProps) {
        // Update active tab when URL changes
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ activeTab: this.getActiveTabFromPath() });
        }
    }

    handleTabChange = (tabId) => {
        const tabRoutes = [
            '/aid/window',
            '/aid/mac',
            '/aid/basic',
            '/aid/gk',
            '/aid/help',
            '/aid/frontend',
            '/aid/codesnippet'
        ];
        this.props.history.push(tabRoutes[tabId]);
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
                <Tabs activeTab={this.state.activeTab} onChange={this.handleTabChange} ripple>
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
export default withRouter(links);
