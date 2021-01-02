import React from 'react';
import GoogleAd from '../../GoogleAd';
import appiumLogo from '../../../images/tabs/appiumLogo.png'; 

const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const APPIUM_GITHUB = 'https://github.com/appium/appium';
const APPIUM_WEBSITE = 'http://appium.io/';

const resAppium = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>SAT Framework</h3>
            </div>
            <div className='tc'>
                <img className='appium-logo' src={appiumLogo} alt='appium Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={APPIUM_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    Appium on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={APPIUM_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    Appium Org                 
                </a>
            </div>


            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resAppium;