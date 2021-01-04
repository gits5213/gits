import React from 'react';
import GoogleAd from '../../GoogleAd';
import basicLogo from '../../../images/tabs/basicLogo.png';

const basic = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Bscis</h3>
            </div>
            <div className='tc'>
                <img className='basic-logo' src={basicLogo} alt='basic Logo' />
            </div>
           
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default basic;