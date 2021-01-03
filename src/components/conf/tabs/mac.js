import React from 'react';
import GoogleAd from '../../GoogleAd';
import macLogo from '../../../images/tabs/macLogo.png';

const mac = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Mac</h3>
            </div>
            <div className='tc'>
                <img className='mac-logo' src={macLogo} alt='mac Logo'/>
            </div>
           
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default mac;