import React, {Component} from 'react';
import './App.css';
import Main from './components/main';
import {Link, withRouter} from 'react-router-dom';
import websiteLogo from './images/websiteLogo.png';

const COURSES = '/courses';
const AID = '/aid';
const DOCS = '/docs';
const APIS = '/apis';
const ABOUT = '/about';
const CONTACT = '/contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false
    };
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      mobileMenuOpen: !prevState.mobileMenuOpen
    }));
  };

  closeMobileMenu = () => {
    this.setState({ mobileMenuOpen: false });
  };

  componentDidUpdate(prevProps) {
    // Close mobile menu when route changes
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.closeMobileMenu();
    }
  }

  render(){
    const { mobileMenuOpen } = this.state;
    const currentPath = this.props.location.pathname;

    return (
      <div>
        {/* Header */}
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'linear-gradient(to right, #FFE000, #799F0C, #00416A)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px'
          }}>
            {/* Logo and Brand */}
            <Link 
              to="/" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: '#ffffff'
              }}
              onClick={this.closeMobileMenu}
            >
              <img 
                src={websiteLogo} 
                alt="GITS Logo" 
                style={{ 
                  height: '40px', 
                  width: 'auto',
                  objectFit: 'contain'
                }} 
              />
              <h2 style={{ 
                margin: 0, 
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#ffffff'
              }}>
                GITS
              </h2>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}>
              <Link 
                to='/' 
                style={{
                  padding: '10px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath === '/' ? '600' : '400',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentPath === '/' ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (currentPath !== '/') {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPath !== '/') {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Home
              </Link>
              <Link 
                to={COURSES}
                style={{
                  padding: '10px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(COURSES) ? '600' : '400',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentPath.startsWith(COURSES) ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(COURSES)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(COURSES)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Courses
              </Link>
              <Link 
                to={DOCS}
                style={{
                  padding: '10px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(DOCS) ? '600' : '400',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentPath.startsWith(DOCS) ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(DOCS)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(DOCS)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Docs
              </Link>
              <Link 
                to={APIS}
                style={{
                  padding: '10px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(APIS) ? '600' : '400',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentPath.startsWith(APIS) ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(APIS)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(APIS)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                API
              </Link>
              <Link 
                to={AID}
                style={{
                  padding: '10px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(AID) ? '600' : '400',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentPath.startsWith(AID) ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(AID)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(AID)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                AID
              </Link>
            </nav>

            {/* Hamburger Menu Button */}
            <button
              onClick={this.toggleMobileMenu}
              className="mobile-menu-button"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                width: '24px',
                height: '3px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
              }}></span>
              <span style={{
                width: '24px',
                height: '3px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: mobileMenuOpen ? 0 : 1
              }}></span>
              <span style={{
                width: '24px',
                height: '3px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
              }}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div style={{
            display: mobileMenuOpen ? 'block' : 'none',
            backgroundColor: '#00416A',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            maxHeight: mobileMenuOpen ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease'
          }}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '10px 20px',
              gap: '4px'
            }}>
              <Link 
                to='/' 
                onClick={this.closeMobileMenu}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath === '/' ? '600' : '400',
                  borderRadius: '6px',
                  backgroundColor: currentPath === '/' ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentPath !== '/') {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPath !== '/') {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Home
              </Link>
              <Link 
                to={COURSES}
                onClick={this.closeMobileMenu}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(COURSES) ? '600' : '400',
                  borderRadius: '6px',
                  backgroundColor: currentPath.startsWith(COURSES) ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(COURSES)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(COURSES)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Courses
              </Link>
              <Link 
                to={DOCS}
                onClick={this.closeMobileMenu}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(DOCS) ? '600' : '400',
                  borderRadius: '6px',
                  backgroundColor: currentPath.startsWith(DOCS) ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(DOCS)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(DOCS)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Docs
              </Link>
              <Link 
                to={APIS}
                onClick={this.closeMobileMenu}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(APIS) ? '600' : '400',
                  borderRadius: '6px',
                  backgroundColor: currentPath.startsWith(APIS) ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(APIS)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(APIS)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                API
              </Link>
              <Link 
                to={AID}
                onClick={this.closeMobileMenu}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath.startsWith(AID) ? '600' : '400',
                  borderRadius: '6px',
                  backgroundColor: currentPath.startsWith(AID) ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!currentPath.startsWith(AID)) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!currentPath.startsWith(AID)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                AID
              </Link>
              <Link 
                to={ABOUT}
                onClick={this.closeMobileMenu}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath === ABOUT ? '600' : '400',
                  borderRadius: '6px',
                  backgroundColor: currentPath === ABOUT ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentPath !== ABOUT) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPath !== ABOUT) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                About
              </Link>
              <Link 
                to={CONTACT}
                onClick={this.closeMobileMenu}
                style={{
                  padding: '12px 16px',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontWeight: currentPath === CONTACT ? '600' : '400',
                  borderRadius: '6px',
                  backgroundColor: currentPath === CONTACT ? 'rgba(255,255,255,0.2)' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentPath !== CONTACT) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPath !== CONTACT) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main style={{
          marginTop: '64px',
          minHeight: 'calc(100vh - 64px)'
        }}>
          <Main />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
