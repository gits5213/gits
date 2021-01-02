import React from 'react';
import GoogleAd from '../../GoogleAd';
import frisByLogo from '../../../images/tabs/frisbyLogo.png'; 

const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const FRISBY_GITHUB = 'https://github.com/vlucas/frisby';
const FRISBY_WEBSITE = 'https://docs.frisbyjs.com/';

const resFrisby = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>SAT Framework</h3>
            </div>
            <div className='tc'>
                <img className='frisby-logo' src={frisByLogo} alt='frisby Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={FRISBY_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    FrisBy on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={FRISBY_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    FrisBy Org                 
                </a>
            </div>
            
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resFrisby;