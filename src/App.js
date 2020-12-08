import React, {Component} from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link } from 'react-router-dom';

const COURSES = '/courses/';
const CODE4KIDS = '/code4Kids/';
const RESOURCES = '/resources/';
const PRACTICE = '/practice/';
const ABOUT = '/about/';
const CONTACT = '/contact/';


class App extends Component {
  render(){
    return (
      <div>
        <Layout fixedHeader>
          <Header className='header-color sticky' title={<h2><strong>ITTCI</strong></h2>} scroll>
            <Navigation className='top-link'>
              {/* <Link to='/'>Home</Link>
              <Link to='/courses'>Courses</Link>
              <Link to='/code4Kids'>Code4Kids</Link>
              <Link to='/resources'>Resources</Link>
              <Link to='/practice'>Practice</Link> */}

              <Link to='/'>Home</Link>
              <a href={COURSES} target="_blank" rel="noopener noreferrer">Courses</a>
              <a href={CODE4KIDS} target="_blank" rel="noopener noreferrer">Code4Kids</a>
              <a href={RESOURCES} target="_blank" rel="noopener noreferrer">Resources</a>
              <a href={PRACTICE} target="_blank" rel="noopener noreferrer">Practice</a> 
            </Navigation>
          </Header>
          <Drawer className='side-header-color' title= {<h2><strong>ITTCI</strong></h2>} >
            <Navigation className='side-link'>
              {/* <Link to='/'>Home</Link>
              <Link to='/courses'>Courses</Link>
              <Link to='/code4Kids'>Code4Kids</Link>
              <Link to='/resources'>Resources</Link>
              <Link to='/practice'>Practice</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>  */}

              <Link to='/'>Home</Link>
              <a href={COURSES} target="_blank" rel="noopener noreferrer">Courses</a>
              <a href={CODE4KIDS} target="_blank" rel="noopener noreferrer">Code4Kids</a>
              <a href={RESOURCES} target="_blank" rel="noopener noreferrer">Resources</a>
              <a href={PRACTICE} target="_blank" rel="noopener noreferrer">Practice</a> 
              <a href={ABOUT} target="_blank" rel="noopener noreferrer">About</a>
              <a href={CONTACT} target="_blank" rel="noopener noreferrer">Contact</a>
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
