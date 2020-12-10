import React, {Component} from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link } from 'react-router-dom';

const COURSES = '/courses';
const CODE4KIDS = '/code4Kids';
const RESOURCES = '/resources';
const PRACTICE = '/practice';
const ABOUT = '/about';
const CONTACT = '/contact';


class App extends Component {
  render(){
    return (
      <div>
        <Layout fixedHeader>
          <Header className='header-color sticky' title={<h2><strong>ITTCI</strong></h2>} scroll>
            <Navigation className='top-link'>
              <Link to='/'>Home</Link>
              <Link to={COURSES}>Courses</Link>
              <Link to={CODE4KIDS}>Code4Kids</Link>
              <Link to={RESOURCES}>Resources</Link>
              <Link to={PRACTICE}>Practice</Link>
            </Navigation>
          </Header>
          <Drawer className='side-header-color' title= {<h2><strong>ITTCI</strong></h2>} >
            <Navigation className='side-link'>
              <Link to='/'>Home</Link>
              <Link to={COURSES}>Courses</Link>
              <Link to={CODE4KIDS}>Code4Kids</Link>
              <Link to={RESOURCES}>Resources</Link>
              <Link to={PRACTICE}>Practice</Link>
              <Link to={ABOUT}>About</Link>
              <Link to={CONTACT}>Contact</Link> 
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
