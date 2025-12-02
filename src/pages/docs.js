import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';
import { withRouter } from 'react-router-dom';
import HeaderText from '../components/header';
import ResManual from '../components/docs/tabs/resManual';
import ResLinux from '../components/docs/tabs/resLinux';
import ResGit from '../components/docs/tabs/resGit';
import ResSql from '../components/docs/tabs/resSql';
import ResNetwork from '../components/docs/tabs/resNetwork';
import ResHtml from '../components/docs/tabs/resHtml';
import ResCss from '../components/docs/tabs/resCss';
import ResJavascript from '../components/docs/tabs/resJavascript';
import ResReact from '../components/docs/tabs/resReact';
import ResJava from '../components/docs/tabs/resJava';
import ResPython from '../components/docs/tabs/resPython';
import Agile from '../components/docs/tabs/agile';
import Scrum from '../components/docs/tabs/scrum';
import Links from '../components/docs/tabs/resLinks';

class docs extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: this.getActiveTabFromPath() };
    }

    getActiveTabFromPath() {
        const path = this.props.location.pathname;
        if (path.includes('/agile')) return 0;
        if (path.includes('/scrum')) return 1;
        if (path.includes('/network')) return 2;
        if (path.includes('/sql')) return 3;
        if (path.includes('/manual') && !path.includes('/courses')) return 4;
        if (path.includes('/linux')) return 5;
        if (path.includes('/git')) return 6;
        if (path.includes('/html')) return 7;
        if (path.includes('/css')) return 8;
        if (path.includes('/java')) return 9;
        if (path.includes('/python')) return 10;
        if (path.includes('/javascript')) return 11;
        if (path.includes('/reactjs')) return 12;
        if (path.includes('/links')) return 13;
        // Default to agile if just /docs
        return 0;
    }

    componentDidMount() {
        // Redirect /docs to /docs/agile if no specific tab
        if (this.props.location.pathname === '/docs') {
            this.props.history.replace('/docs/agile');
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
            '/docs/agile',
            '/docs/scrum',
            '/docs/network',
            '/docs/sql',
            '/docs/manual',
            '/docs/linux',
            '/docs/git',
            '/docs/html',
            '/docs/css',
            '/docs/java',
            '/docs/python',
            '/docs/javascript',
            '/docs/reactjs',
            '/docs/links'
        ];
        this.props.history.push(tabRoutes[tabId]);
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <Agile />
            )
        }else if(this.state.activeTab === 1) {
            return(
                <Scrum />
            )
        }else if(this.state.activeTab === 2) {
            return(
                <ResNetwork />
            )
        } else if(this.state.activeTab === 3) {
            return(
                <ResSql />
            )
        } else if(this.state.activeTab === 4) {
            return(
                <ResManual />
            )
        } else if(this.state.activeTab === 5) {
            return(
                <ResLinux />
            )
        }else if(this.state.activeTab === 6) {
            return(
                <ResGit />
            )
        } else if(this.state.activeTab === 7) {
            return(
                <ResHtml />
            )
        } else if(this.state.activeTab === 8) {
            return(
                <ResCss />
            )
        } else if(this.state.activeTab === 9) {
            return(
                <ResJava />
            )
        }else if(this.state.activeTab === 10) {
            return(
                <ResPython />
            )
        } else if(this.state.activeTab === 11) {
            return(
                <ResJavascript />
            )
        } else if(this.state.activeTab === 12) {
            return(
                <ResReact />
            )
        }else if(this.state.activeTab === 13) {
            return(
                <Links />
            )
        }
        
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={this.handleTabChange} ripple>
                    <Tab>Agile</Tab>
                    <Tab>Scrum</Tab>
                    <Tab>Net</Tab>
                    <Tab>SQL</Tab>
                    <Tab>Manual</Tab>
                    <Tab>Linux</Tab>
                    <Tab>Git</Tab>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>Java</Tab>
                    <Tab>PY</Tab>
                    <Tab>JS</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>Links</Tab>
                </Tabs>
                <HeaderText /> 
                <section>
                    <div className="content">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default withRouter(docs);
