import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import webDriverIOLogo from '../../../images/tabs/playwrightLogo.png'; 

const resPlaywright = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>PlayWright Framework</h3>
            </div>
            <div className='tc'>
                <img className='playwright-logo' src={webDriverIOLogo} alt='playwright Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.PLAYWRIGHT_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    PlayWright on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.PLAYWRIGHT_DOCS} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    PlayWright API                 
                </a>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resPlaywright;