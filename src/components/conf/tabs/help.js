import React from 'react';
import GoogleAd from '../../GoogleAd';
import helpLogo from '../../../images/tabs/helpLogo.png';

const help = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Windows</h3>
            </div>
            <div className='tc'>
                <img className='help-logo' src={helpLogo} alt='help Logo'/>
            </div>
           
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default help;