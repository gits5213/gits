import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import HeaderText from '../components/header';
// import codingImage from '../images/codingImage.png'
import landingImage from '../images/sdlcLogo.png'
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
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={GOOGLE_MEET} target="_blank" rel="noopener noreferrer">
                        GO Classroom
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={ZOOM_MEET} target="_blank" rel="noopener noreferrer">
                        Zoom Classroom
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={GOTO_MEET} target="_blank" rel="noopener noreferrer">
                        GOTO Classroom
                    </a>
                </div>
                <div className='container ph3 mt4'>
                    <img alt='cover' className="cover-img" src={landingImage}/>
                </div>
                <div className='seImage landing-s-image'>
                    <h1>Nothing to Lose By Learing New Skills!</h1>
                    <h1 className='sub-header'>Give us 2 Days Will Give You The World!</h1>
                </div>
                <section>
                    <div>
                        <h2 id='program-heading'>
                            Training Programs <br />
                            <p className='tc'>
                                Own your future by learning new skills!
                            </p>
                        </h2>
                        <hr />
                    </div>
                    <CardList cardDetails= {cardDetails} />
                </section>
                <div className='landing-t-image tc'>
                    <h2 id='aboutUs-header'> 
                        Who we are
                        <p>
                            Code4Kids & Full Stack Quality Assurance Enginnering & Web Developer Training Center. 
                        </p>
                    </h2>
                    <Grid className="border">
                        <Cell className='pl4 border-1 tl' col={6}>
                            <div>
                                <h2>- Code4Kids - SE</h2>
                                <h2>- Full Stack SQAE</h2>
                                <h2>- Frontend Web Developer </h2>
                            </div>
                        </Cell>
                        <Cell className='border-2 tl' col={6}>
                            <div>
                                <h2>- In-Person Training</h2>
                                <h2>- Oneline Training</h2>
                                <h2>- Corporate Training</h2>
                                <h2>- Project Support</h2>
                            </div>
                        </Cell>
                        
                    </Grid>
                </div>
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
