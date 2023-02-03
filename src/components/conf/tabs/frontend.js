import React from 'react';
import GoogleAd from '../../GoogleAd';
import helpLogo from '../../../images/tabs/helpLogo.png';
import link from '../../../utilities/links.json';

const frontend = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Frontend</h3>
            </div>
            <div className='tc'>
                <img className='help-logo' src={helpLogo} alt='help Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.frontendTools} target="_blank" rel="noopener noreferrer">
                   Frontend engineering tools for Design, UI, Code                
                </a>
            </div>
           
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default frontend;