import React from 'react';
import GoogleAd from '../../GoogleAd';
import gkLogo from '../../../images/tabs/gkLogo.png';

const gk = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>General Knowledge</h3>
            </div>
            <div className='tc'>
                <img className='gk-logo' src={gkLogo} alt='gk Logo' />
            </div>
           
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default gk;