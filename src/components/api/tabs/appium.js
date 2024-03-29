import React from 'react';
import GoogleAd from '../../GoogleAd';
import link from '../../../utilities/links.json';
import appiumLogo from '../../../images/tabs/appiumLogo.png'; 
import Footer from '../../../components/footer';

const resAppium = ({path}) => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Appium Framework</h3>
            </div>
            <div className='tc'>
                <img className='appium-logo' src={appiumLogo} alt='appium Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.APPIUM_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    Appium on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.APPIUM_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    Appium Org                 
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
export default resAppium;