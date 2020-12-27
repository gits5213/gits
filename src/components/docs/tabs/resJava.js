import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import java_logo from '../../../images/tabs/javaLogo.png';

const resJava = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>JAVA</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 js-logo' src={java_logo} alt='js Logo' height='300' width='800'/>
            </div>
            
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resJava;