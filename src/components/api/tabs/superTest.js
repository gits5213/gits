import React from 'react';
import GoogleAd from '../../GoogleAd';
import superTestLogo from '../../../images/tabs/supertestLogo.png'; 

const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const SUPERTEST_GITHUB = 'https://github.com/visionmedia/supertest';
const SUPERTEST_WEBSITE = 'https://www.npmjs.com/package/supertest';

const resSuperTest = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>SAT Framework</h3>
            </div>
            <div className='tc'>
                <img className='supertest-logo' src={superTestLogo} alt='supertest Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={SUPERTEST_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    SuperTest on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={SUPERTEST_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                     SuperTest Org                 
                </a>
            </div>

            
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resSuperTest;