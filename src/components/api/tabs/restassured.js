import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import restassuredLogo from '../../../images/tabs/restassuredLogo.png'; 
import Footer from '../../../components/footer';

const resRestassured = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>RestAssured Framework</h3>
            </div>
            <div className='tc'>
                <img className='appium-logo' src={restassuredLogo} alt='appium Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.RESTASSURED_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    RestAssured on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.RESTASSURED_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    RestAssured Org                 
                </a>
            </div>
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </div>
    )
}
export default resRestassured;