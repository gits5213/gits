import React from 'react';
import '../style/footer.css';
import SocialIcon from '../components/socialIcon';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

const ITNYCUSA = 'http://itnycusa.com/';
const HEROKUAPP = 'http://the-internet.herokuapp.com/';
const ZAMAN_PORTFOLIO = 'https://msz5213.github.io/mdzamanportfolio/';
const JSON_API_WEBSITE = 'http://jsonplaceholder.typicode.com/';
const REQRES_WEBSITE = 'https://reqres.in/';
const QUESTIONS = 'https://www.facebook.com/itnycusa/';
const ANSWERE = 'https://www.linkedin.com/company/52147964/';

const ITTCIWEBSITE = '/ittciwebsite';
const HOW_IT_WORKS = '/courses';
const ABOUT = '/about';
const SERVICES = 'https://msz5213.github.io/student-subscription/';
const CONTACT = '/contact';

const footer = () => {
    return(
        <Footer size="mega">
            <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <a href={ITNYCUSA} target="_blank" rel="noopener noreferrer">WordPress Website</a>
                        <a href={HEROKUAPP} target="_blank" rel="noopener noreferrer">Internet Website</a>
                        <a href={REQRES_WEBSITE} target="_blank" rel="noopener noreferrer">ReqRes Website</a>
                        <a href={ZAMAN_PORTFOLIO} target="_blank" rel="noopener noreferrer">Md's Portfolio</a>
                        <a href={JSON_API_WEBSITE} target="_blank" rel="noopener noreferrer">JL Website</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                    <FooterLinkList>
                        <a href={ITTCIWEBSITE} target="_blank" rel="noopener noreferrer">UI Automation</a>
                        <a href={ITTCIWEBSITE} target="_blank" rel="noopener noreferrer">API Automation</a>
                        <a href={ITTCIWEBSITE} target="_blank" rel="noopener noreferrer">UI Manual</a>
                        <a href={ITTCIWEBSITE} target="_blank" rel="noopener noreferrer">API Manual</a>
                        
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                    <FooterLinkList>
                        <a href={HOW_IT_WORKS} target="_blank" rel="noopener noreferrer">How it works</a>
                        <a href={SERVICES} target="_blank" rel="noopener noreferrer">Services</a>
                        <a href={ABOUT} target="_blank" rel="noopener noreferrer">About</a> 
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <a href={QUESTIONS} target="_blank" rel="noopener noreferrer">Questions</a>
                        <a href={ANSWERE} target="_blank" rel="noopener noreferrer">Answers</a>
                        <a href={CONTACT} target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            
                <div className='social-icon mt4'>
                <SocialIcon />
                    <p className='all-right f7 white-70 mt4 tc copyIcon'>
                        Copyright  &copy; {new Date().getFullYear()}
                        <a href={ITNYCUSA} target="_blank" rel="noopener noreferrer"> IT Training & Consultant Inc., </a> 
                        All Rights Reserved
                    </p>
                </div>
        </Footer>
    );
}
export default footer;