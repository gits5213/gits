import React from 'react';
import { Link } from 'react-router-dom';
import link from '../utilities/links.json';
// eslint-disable-next-line no-unused-vars
import SocialIcon from '../components/socialIcon';
import { footerStyles, footerHoverHandlers } from '../utils/globalStyles';

/**
 * Footer Component - Reusable Footer Template
 * 
 * A fully reusable footer component with modern design, responsive layout,
 * and consistent styling. Used across all pages of the website.
 * 
 * Features:
 * - Full-width design that breaks out of container constraints
 * - Responsive grid layout with 4 main sections
 * - Modern dark theme with hover effects
 * - Social media integration
 * - Copyright information
 * 
 * Usage:
 * ```javascript
 * import Footer from '../components/footer';
 * 
 * <Footer />
 * ```
 * 
 * @component
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
    // All styles are now imported from globalStyles.js footerStyles template
    const {
        base: footerStyle,
        container: containerStyle,
        grid: gridStyle,
        section: sectionStyle,
        heading: headingStyle,
        headingUnderline,
        list: listStyle,
        link: linkStyle,
        divider: dividerStyle,
        bottomSection: bottomSectionStyle,
        copyright: copyrightStyle,
        copyrightLink: copyrightLinkStyle
    } = footerStyles;

    // All hover handlers are imported from globalStyles.js
    const {
        linkHover: handleLinkHover,
        linkLeave: handleLinkLeave,
        copyrightLinkHover: handleCopyrightLinkHover,
        copyrightLinkLeave: handleCopyrightLinkLeave
    } = footerHoverHandlers;

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                {/* Main Footer Content */}
                <div style={gridStyle}>
                    {/* Features Section */}
                    <div style={sectionStyle}>
                        <h3 style={headingStyle}>
                            Features
                            <span style={headingUnderline}></span>
                        </h3>
                        <ul style={listStyle}>
                            <li>
                                <a 
                                    href="https://gitsics.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Global iTech Solutions
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={link.ITNYCUSA} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Educational Website
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={link.HEROKUAPP} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Internet Website
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={link.REQRES_WEBSITE} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    ReqRes Website
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={link.ZAMAN_PORTFOLIO} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Md Shahnewaz Zaman | Portfolio
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={link.JSON_API_WEBSITE} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    JL Website
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="http://visiblehomeinspections.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Visible Home Inspections LLC
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Courses Section */}
                    <div style={sectionStyle}>
                        <h3 style={headingStyle}>
                            Courses
                            <span style={headingUnderline}></span>
                        </h3>
                        <ul style={listStyle}>
                            <li>
                                <Link 
                                    to="/courses/sdet-roadmap"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    SDET Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/courses/webdevelopment"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/courses/code4kids"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Code4Kids
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/courses/automation"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    UI Automation
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/courses/automation"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    API Automation
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/courses/manual"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    UI Manual Testing
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/courses/manual"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    API Manual Testing
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/courses/accessibility"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    508 Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div style={sectionStyle}>
                        <h3 style={headingStyle}>
                            Resources
                            <span style={headingUnderline}></span>
                        </h3>
                        <ul style={listStyle}>
                            <li>
                                <Link 
                                    to="/how-it-works"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="https://gitsics.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <Link 
                                    to="/about"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/contact"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href={link.QUESTIONS} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Questions
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={link.ANSWERE} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Answers
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://jobright.ai/jobs/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Career Pathways
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://us06web.zoom.us/j/9803798160" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Zoom Meeting
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div style={sectionStyle}>
                        <h3 style={headingStyle}>
                            Legal
                            <span style={headingUnderline}></span>
                        </h3>
                        <ul style={listStyle}>
                            <li>
                                <Link 
                                    to="/terms-of-use"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/privacy-policy"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/copyright-notice"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Copyright Notice
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/website-disclaimer"
                                    style={linkStyle}
                                    onMouseEnter={handleLinkHover}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    Website Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section - Social Icons & Copyright */}
                <div style={dividerStyle}>
                    <div style={bottomSectionStyle}>
                        <div>
                            <SocialIcon />
                        </div>
                        <p style={copyrightStyle}>
                            Copyright &copy; {new Date().getFullYear()}{' '}
                            <a 
                                href={link.ITNYCUSA} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={copyrightLinkStyle}
                                onMouseEnter={handleCopyrightLinkHover}
                                onMouseLeave={handleCopyrightLinkLeave}
                            >
                                Global iTech & Solutions Inc.
                            </a>
                            {' '}All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
