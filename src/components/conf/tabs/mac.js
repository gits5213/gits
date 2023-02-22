import React from 'react';
import GoogleAd from '../../GoogleAd';
import macLogo from '../../../images/tabs/macLogo.png';
import Footer from '../../../components/footer';

const mac = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Mac</h3>
            </div>
            <div className='tc'>
                <img className='mac-logo' src={macLogo} alt='mac Logo'/>
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
export default mac;