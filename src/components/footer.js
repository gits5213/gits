import React from 'react';
import link from '../utilities/links.json';
import SocialIcon from '../components/socialIcon';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

const footer = () => {
    return(
        <Footer size="mega">
            <FooterSection type="middle" className='tc'>
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href="https://gitsics.com/" target="_blank" rel="noopener noreferrer">Global iTech Solutions</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ITNYCUSA} target="_blank" rel="noopener noreferrer">React website</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.HEROKUAPP} target="_blank" rel="noopener noreferrer">Internet Website</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.REQRES_WEBSITE} target="_blank" rel="noopener noreferrer">ReqRes Website</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ZAMAN_PORTFOLIO} target="_blank" rel="noopener noreferrer">Md's Portfolio</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JSON_API_WEBSITE} target="_blank" rel="noopener noreferrer">JL Website</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                    <FooterLinkList>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ITNYCUSA} target="_blank" rel="noopener noreferrer">UI Automation</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ITNYCUSA} target="_blank" rel="noopener noreferrer">API Automation</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ITNYCUSA} target="_blank" rel="noopener noreferrer">UI Manual</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ITNYCUSA} target="_blank" rel="noopener noreferrer">API Manual</a>
                        
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                    <FooterLinkList>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.HOW_IT_WORKS} rel="noopener noreferrer">How it works</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SERVICES} target="_blank" rel="noopener noreferrer">Services</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ABOUT} target="_blank" rel="noopener noreferrer">About</a> 
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.QUESTIONS} target="_blank" rel="noopener noreferrer">Questions</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ANSWERE} target="_blank" rel="noopener noreferrer">Answers</a>
                        <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.CONTACT} target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            
                <div className='social-icon mt4'>
                <SocialIcon />
                    <p className='all-right f7 white-70 mt4 tc copyIcon'>
                        Copyright  &copy; {new Date().getFullYear()}
                        <a href={link.ITNYCUSA} target="_blank" rel="noopener noreferrer"> Global iTech {'&'} Solutions Inc., </a> 
                        All Rights Reserved
                    </p>
                </div>
        </Footer>
    );
}
export default footer;