import React from 'react';
import GoogleAd from '../../GoogleAd';
import ProtractorLog from '../../../images/tabs/protractorLog.png';
const PROTRACTOR_GITHUB = 'https://github.com/angular/protractor';
const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const resProtractor = () => {
    return(
        <div className='page-tab-body'>
            <div className='tc'>
                <h3>Software Automation Testing Framework</h3>
                <img className='protractor-logo' src={ProtractorLog} alt='protractor Logo' />
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={PROTRACTOR_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    View on GitHub                 
                </a>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resProtractor;