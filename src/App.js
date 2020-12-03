import React, {Component} from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css'
import Main from './components/main'
import {Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';


class App extends Component {
  render(){
    return (
      <div>
        <Helmet>
          <title>ITTCI</title>
          <meta charSet="utf-8" />
          <meta 
            name='description' 
            content='Code4Kids|WebDevelopment|Full Stack SQA Training' />
        </Helmet>
        <Layout fixedHeader>
          <Header className='header-color sticky' title={
              <h2>
                  <strong>
                    ITTCI
                  </strong>
              </h2>} scroll>
            <Navigation className='top-link'>
              <Link to='/'>Home</Link>
              <Link to='/courses'>Courses</Link>
              <Link to='/code4Kids'>Code4Kids</Link>
              <Link to='/resources'>Resources</Link>
              <Link to='/practice'>Practice</Link>
              {/* <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link> */}
            </Navigation>
          </Header>
          <Drawer className='side-header-color' title= {
              <h2>
                <strong>
                ITTCI
                </strong>
              </h2>} >
            <Navigation className='side-link'>
              <Link to='/'>Home</Link>
              <Link to='/courses'>Courses</Link>
              <Link to='/code4Kids'>Code4Kids</Link>
              <Link to='/resources'>Resources</Link>
              <Link to='/practice'>Practice</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link> 
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
