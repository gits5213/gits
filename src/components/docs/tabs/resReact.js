import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import reactLogo from '../../../images/tabs/reactLogo.png';
import Footer from '../../../components/footer';


const resReact = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>ReactJS</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 react-logo' src={reactLogo} alt='react Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.REACT_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    ReactJS on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.REACT_ORG} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    ReactJS Org                 
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
export default resReact;