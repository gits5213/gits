import React from 'react';
import GoogleAd from '../../GoogleAd';
import ProtractorLog from '../../../images/tabs/protractorLog.png';
const PROTRACTOR_GITHUB = 'https://github.com/angular/protractor';
const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const PROTRACTOR_WEBSITE = 'http://www.protractortest.org/#/';

const resProtractor = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>SAT Framework</h3>
            </div>
            <div className='tc'>
                <img className='protractor-logo' src={ProtractorLog} alt='protractor Logo' />
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={PROTRACTOR_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    Protractor on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={PROTRACTOR_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    Protractor Org                 
                </a>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resProtractor;