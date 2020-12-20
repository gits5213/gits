import React, {Component} from 'react';
import HeaderText from '../components/header';
import { Grid, Cell} from 'react-mdl';
import GoogleAd from '../components/GoogleAd';
import SocialIcon from '../components/socialIcon';

const Docs = '/docs';
const SQA_SIGN_UP = 'https://msz5213.github.io/student-subscription/';

class Contact extends Component {
    
    render(){
        return(
            <div className='page-tab-body'>
                <Grid className='page-tab-grid'>
                    <Cell className='page-tab-first-col' col={12}>
                        <div className='contact-'>
                            <HeaderText />
                            <div className='contact-section-1'>
                                <div className='tc pt4'>
                                    <h2>Contact us</h2>
                                    <p>
                                        Do you have any question? Please do not hesitate to contact us directly. 
                                        Our team will come back to you within a matter of hours to help you.
                                    </p>
                                </div>
                                
                                <div className='tc'>
                                    <h3>We've got your back </h3>
                                    <p className='tc'> 
                                        Can't find what you need in our 
                                            <a className='doc-' href={Docs}> help docs
                                            </a>
                                        ? Get in touch with our friendly social media list below.
                                    </p>
                                </div>
                                <div className='tc pt3'>
                                    <p>
                                        <strong>Interested in learing at IT Training & Consultant Inc.?</strong>
                                        <br />
                                        <a className='visit-' href='https://msz5213.github.io/ittciwebsite'>
                                            Visit our program site for more information
                                        </a>
                                    </p>
                                </div>
                                
                            </div>
                            <div className='tc sign-up'>
                                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={SQA_SIGN_UP} target="_blank" rel="noopener noreferrer">
                                    Get in Touch With Us
                                </a>
                            </div>
                        </div>
                        <div>
                            <SocialIcon />
                        </div>
                        <GoogleAd slot="1541085932" classNames="page-right-side" />
                    </Cell>
            </Grid>
            </div>
        );
    }
}
export default Contact;
