import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import linklogo from '../../../images/tabs/linkLogo.png';

const SWAGGER = 'https://swagger.io/';

const resLinks = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>TechStack</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 react-logo' src={linklogo} alt='react Logo' height='192' width='575'/>
            </div>
            <div className='pt4'>
                <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href={SWAGGER} target="_blank" rel="noopener noreferrer">
                    Swagger Docs                
                </a>
            </div>
            <hr />
            
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resLinks;