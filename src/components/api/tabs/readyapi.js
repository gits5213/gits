import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';
import readyapiLogo from '../../../images/tabs/readyapiLogo.png'; 
import Footer from '../../../components/footer';

const readyapi = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>ReadyAPI Framework</h3>
            </div>
            <div className='tc'>
                <img className='readyapi-logo' src={readyapiLogo} alt='readyapi Logo'/>
            </div>
            <div className='tc pt4'>
                <a className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.READYAPI_DOCS} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.READYAPI_DOCS} alt='github log' /> 
                    ReadyAPI Docs                
                </a>
                <a className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.READYAPI} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.READYAPI} alt='github log' /> 
                    ReadyAPI Org                 
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
export default readyapi;