import React, {Component} from 'react';
import HeaderText from '../components/header';
import '../style/landing.css';
import codingImage from '../images/codingImage.png'
import CardList from '../components/cardList';
import {cardDetails}from '../components/cardDetails';
import Footer from '../components/footer';
// import LandingSlideShow from '../components/slideShow/LandingSlideShow';

const googleMeet = 'https://meet.google.com/wco-zfnf-swy';
const ZoomMeeting = 'https://us04web.zoom.us/j/4110977526?pwd=TnRkbDNud202Z0U1Z3NKT1RHcmQ4UT09';

const studentSubscription = 'https://msz5213.github.io/student-subscription/';
const code4KidsSignUp = 'https://mailchi.mp/351449e3a71f/sqabdtraining';
const bdSignUp = 'https://mailchi.mp/351449e3a71f/sqabdtraining';

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
                        <p>New batch starting every after week. Code4Kids | Web Developement & SQA Training Courses | Get in Touch with +1.917.561.6554</p>
                    </div>
                    <div className='goLink container ph3 mt4'>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={googleMeet}>
                            ITTCI Classroom
                        </a>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={ZoomMeeting}>
                            Zoom Classroom
                        </a>
                        <img alt='cover' className="cover-img" src={codingImage}/>

                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={studentSubscription}>
                            Sign Up Now
                        </a>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={bdSignUp}>
                            BD Sign Up
                        </a>
                        <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={code4KidsSignUp}>
                            Code4Kids Sign Up
                        </a>
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
