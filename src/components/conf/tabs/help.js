import React from 'react';
import GoogleAd from '../../GoogleAd';
import helpLogo from '../../../images/tabs/helpLogo.png';
import link from '../../../utilities/links.json';
import Footer from '../../../components/footer';

const help = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Help</h3>
            </div>
            <div className='tc'>
                <img className='help-logo' src={helpLogo} alt='help Logo'/>
            </div>
            <section>
                <div>
                    <ul>
                        <li>
                            <a href={link.chatGPT} target="_blank" rel="noopener noreferrer">
                                OpenAI - ChatGPT              
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </div>
    )
}
export default help;