import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import frisByLogo from '../../../images/tabs/frisbyLogo.png'; 

const resFrisby = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>FrisBy Framework</h3>
            </div>
            <div className='tc'>
                <img className='frisby-logo' src={frisByLogo} alt='frisby Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.FRISBY_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    FrisBy on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.FRISBY_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    FrisBy Org                 
                </a>
            </div>
            
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resFrisby;