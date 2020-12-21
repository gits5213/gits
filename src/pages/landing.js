import React, {Component} from 'react';
import HeaderText from '../components/header';
import codingImage from '../images/codingImage.png'
import CardList from '../components/cardList';
import {cardDetails}from '../components/cardDetails';
import Footer from '../components/footer';
import Roi from '../components/courses/tabs/roi';
import QaCareer from '../components/courses/tabs/qaCareer';

const GOTO_MEET = 'https://global.gotomeeting.com/join/115264677';
const GOOGLE_MEET = 'https://meet.google.com/wco-zfnf-swy';
const ZOOM_MEET = 'https://us04web.zoom.us/j/76185361138?pwd=QnJybGczamROdVpTVS9rVU9hMDQ2Zz09';


class Landing extends Component {
    render(){
        return(
            <div className='landing-body'> 
                <div>
                    <HeaderText />
                </div>
                <div className='goLink ph5 mt4 pt3'>
                    <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={GOOGLE_MEET} target="_blank" rel="noopener noreferrer">
                        GO Classroom
                    </a>
                    <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={ZOOM_MEET} target="_blank" rel="noopener noreferrer">
                        Zoom Classroom
                    </a>
                    <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={GOTO_MEET} target="_blank" rel="noopener noreferrer">
                        GOTO Classroom
                    </a>
                </div>
                <div className='container ph3 mt4'>
                    <img alt='cover' className="cover-img" src={codingImage}/>
                </div>
                <div>
                    <div>
                        <h3 id='program-heading'>Training Programs</h3>
                        <hr />
                    </div>
                    <CardList cardDetails= {cardDetails}/>
                </div>
                <hr />
                <div>
                    <Roi />
                </div>
                <div>
                    <QaCareer />
                </div>
                
                <div className='pt4'>
                    <Footer />
                </div>
            </div>

        )
    } 
}
export default Landing;
