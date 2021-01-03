import React from 'react';
import GoogleAd from '../../GoogleAd';
import windowsLogo from '../../../images/tabs/winLogo.png';

const window = () => {
    return(
        <div className='page-tab-body'>
             <div>
                <h3>Windows</h3>
            </div>
            <div className='tc'>
                <img className='win-logo' src={windowsLogo} alt='win Logo' height='162' width='562' />
            </div>
           
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default window;