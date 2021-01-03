import React from 'react';
import GoogleAd from '../../GoogleAd';
import webDriverIOLogo from '../../../images/tabs/webDriverIOLogo.png'; 

const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const WEBDRIVERIO_GITHUB = 'https://github.com/webdriverio/webdriverio';
const WEBDRIVERIO_WEBSITE = 'https://webdriver.io/';

const resWebIo = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>SAT Framework</h3>
            </div>
            <div className='tc'>
                <img className='webd-logo' src={webDriverIOLogo} alt='webd Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={WEBDRIVERIO_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    WebDriverIO on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={WEBDRIVERIO_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    WebDriverIO Org                 
                </a>
            </div>





            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resWebIo;