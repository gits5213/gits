import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import ProtractorLog from '../../../images/tabs/protractorLog.png';

const resProtractor = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Protractor Framework</h3>
            </div>
            <div className='tc'>
                <img className='protractor-logo' src={ProtractorLog} alt='protractor Logo' />
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.PROTRACTOR_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    Protractor on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.PROTRACTOR_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    Protractor Org                 
                </a>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resProtractor;