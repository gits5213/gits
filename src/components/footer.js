import React from 'react';
import '../style/footer.css';
import SocialIcon from '../components/socialIcon';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

const footer = () => {
    return(
        <Footer size="mega">
            <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <a href="http://itnycusa.com/">WordPress Website</a>
                        <a href="/about">About</a>
                        <a href="/">Terms</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                    <FooterLinkList>
                        <a href="/">Frontend Manual</a>
                        <a href="/">Backend Manual</a>
                        <a href="/">Frontend Automation</a>
                        <a href="/">Backend Automation</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                    <FooterLinkList>
                        <a href="/">How it works</a>
                        <a href="/">Patterns</a>
                        <a href="/">Services</a>
                        <a href="/">Contracts</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <a href="/">Questions</a>
                        <a href="/">Answers</a>
                        <a href="/contact">Contact Us</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            
                <div className='social-icon mt4'>
                <SocialIcon />
                    <p className='all-right f7 white-70 mt4 tc copyIcon'>
                        Copyright  &copy; {new Date().getFullYear()}
                        <a href="http:www.itnycusa.com"> IT Training & Consultant Inc., </a> 
                        All Rights Reserved
                    </p>
                </div>
        </Footer>
    );
}
export default footer;