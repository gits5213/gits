import React, {Component} from 'react';
import HeaderText from '../components/header';
import { Grid, Cell, Button } from 'react-mdl';
import GoogleAd from '../components/GoogleAd';

class Contact extends Component {
    
    render(){
        return(
            <div className='page-tab-body'>
                <Grid className='page-tab-grid'>
                    <Cell className='page-tab-first-col' col={12}>
                        <div className='contact-'>
                            <HeaderText />
                            <div className='contact-section-1'>
                                <h3>Contact us</h3>
                                <p>
                                    Do you have any question? Please do not hesitate to contact us directly. 
                                    Our team will come back to you within a matter of hours to help you.
                                </p>
                                <p id='contact-interested'>
                                    <strong>Interested in learing at IT Training & Consultant Inc.?</strong>
                                    <br />
                                    <a href='https://www.onetechi.com'>
                                        Visit our program site for more information
                                    </a>
                                </p>
                            </div>
                            <div className='contact-btn'>
                                <Button raised>
                                    <a href='https://msz5213.github.io/student-subscription/'>
                                        Get in Touch With Us
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <GoogleAd slot="1541085932" classNames="page-right-side" />
                    </Cell>
                    {/* <Cell className='page-tab-second-col' col={2}>
                        
                    </Cell> */}
            </Grid>
            </div>
        );
    }
}
export default Contact;
