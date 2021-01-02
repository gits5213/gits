import React from 'react';
import GoogleAd from '../../GoogleAd';
import restassuredLogo from '../../../images/tabs/restassuredLogo.png'; 

const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const RESTASSURED_GITHUB = 'https://rest-assured.io/';
const RESTASSURED_WEBSITE = 'https://github.com/rest-assured/rest-assured';

const resRestassured = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>SAT Framework</h3>
            </div>
            <div className='tc'>
                <img className='appium-logo' src={restassuredLogo} alt='appium Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={RESTASSURED_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    RestAssured on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={RESTASSURED_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    RestAssured Org                 
                </a>
            </div>


            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resRestassured;