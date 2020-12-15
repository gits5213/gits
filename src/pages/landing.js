import React, {Component} from 'react';
import HeaderText from '../components/header';
import '../style/landing.css';
import codingImage from '../images/codingImage.png'
import CardList from '../components/cardList';
import {cardDetails}from '../components/cardDetails';
import Footer from '../components/footer';

const GOTO_MEET = 'https://global.gotomeeting.com/join/115264677';
const GOOGLE_MEET = 'https://meet.google.com/wco-zfnf-swy';
const ZOOM_MEET = 'https://us04web.zoom.us/j/76185361138?pwd=QnJybGczamROdVpTVS9rVU9hMDQ2Zz09';
// const studentSubscription = 'https://msz5213.github.io/student-subscription/';
// const code4KidsSignUp = 'https://mailchi.mp/93b0b3a7293e/code4kids';
// const bdSignUp = 'https://docs.google.com/forms/d/e/1FAIpQLScBX0mnlaMNJFhOGnfHcHV9TLvSK3L3aQTlYZO9LNVKidcY6w/viewform?usp=sf_link';

class Landing extends Component {
    render(){
        return(
            <div className='tc'>
                <div className='landing-body'> 
                    <HeaderText />
                    <h3>
                        Welcome to Tech Training Programs Center!
                    </h3>
                </div>
                <div>
                    <div>
                        <p>New batch starting every after week. Code4Kids | Web Developement and SQA Training Program | <strong> Get in Touch with +1.917.561.6554</strong></p>
                    </div>
                    <div className='goLink container ph3 mt4'>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={GOOGLE_MEET} target="_blank" rel="noopener noreferrer">
                            GO Classroom
                        </a>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={ZOOM_MEET} target="_blank" rel="noopener noreferrer">
                            Zoom Classroom
                        </a>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={GOTO_MEET} target="_blank" rel="noopener noreferrer">
                            GOTO Classroom
                        </a>
                        
                        <img alt='cover' className="cover-img" src={codingImage}/>

                        {/* <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={studentSubscription} target="_blank" rel="noopener noreferrer">
                            SignUp Now
                        </a>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={bdSignUp} target="_blank" rel="noopener noreferrer">
                            BD SignUp
                        </a>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={code4KidsSignUp} target="_blank" rel="noopener noreferrer">
                            Code4Kids SignUp
                        </a> */}
                    </div>
                    <div>
                        <h3 id='program-heading'>Training Programs</h3>
                        <hr />
                    </div>
                    <CardList cardDetails= {cardDetails}/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        )
    } 
}
export default Landing;
