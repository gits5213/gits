import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import HeaderText from '../components/header';
import landingImage from '../images/sdlcLogo.png'
import CardList from '../components/cardList';
import {cardDetails}from '../components/cardDetails';
import Footer from '../components/footer';

import classromom from '../images/classroomClass.jpg'
import online from '../images/onlineClass.jpg'

const ZOOM_MEET = 'https://us02web.zoom.us/j/89986207051';

class Landing extends Component {
    render(){
        return(
            <main className='landing-body'> 
                <div>
                    <HeaderText />
                </div>
          
                <div className='ph4 mt4 pt3'> 
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={ZOOM_MEET} target="_blank" rel="noopener noreferrer">
                        ZOOM Classroom
                    </a>
                </div>
                <div className='pt5 tc ph3 mt4'>
                    <img alt='cover' className='img-one' src={landingImage}/>
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
                <section className='landing-t-image tc'>
                    <h2 id='aboutUs-header'> 
                        WHO WE ARE
                        <p>
                            Code4Kids ans Full Stack Quality Assurance Enginnering and Web Developer Training Center. 
                        </p>
                    </h2>
                    <Grid className="border">
                        <Cell className='pl4 tr' col={4}>
                            <div className='border-1'>
                                <h4>- Code4Kids (To Become a Software Engineer)</h4>
                                <h4>
                                    - Full Stack SQAE
                                    Web and API Manual
                                    Web and API Automation
                                </h4>
                                <h4>- Frontend Web Developer (Software Engineer) </h4>
                            </div>
                        </Cell>
                        <Cell className='pl4 tl pt4' col={4}>
                            <div className='border-2'>
                                <p>
                                    We are the leaders in providing quality Training's of Web Development, Full Stack Quality Assurance Engineering and Code4Kids to Corporate and Individuals. This is the best In-person and Online training center at Queens, Hollis-NY. Our main intention is to let our students learn through practice and provide as much detailed information as possible. Our training's are divided in three modules - <strong>Full Stack SQA Engineering Program - Frontend Web Development Program - Code4Kids Program</strong>.
                                </p>
                            </div>
                        </Cell>
                        <Cell className='pl4 border-3 tl' col={4}>
                            <div className='pt4 scrummountain-btn'>
                                <button className='b f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-red' href='#classroomClass'>
                                    In-Person Training
                                </button>
                            </div>
                            <div className='pt4 scrummountain-btn'>
                                <button className='b f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-red' href='#onlineClass'>
                                    Online Training
                                </button>
                            </div>
                            <div className='pt4 scrummountain-btn'>
                                <button className='b f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-red'>
                                    Corporate Training
                                </button>
                            </div>
                            <div className='pt4 scrummountain-btn'>
                                <button className='b f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-red'>
                                    Project Support
                                </button>
                            </div>
                        </Cell>
                    </Grid>
                </section>
                <section>
                    {/* pt5 tc ph3 mt4 */}
                    <div className='classroom-img' id='classroomClass'>
                        <img alt='cover' className='img-one' src={classromom}/>
                    </div>
                    <div className='classroom-img_' id='onlineClass'>
                        <img alt='cover' className='img-two' src={online}/>
                    </div>
                </section>
                <section className='pt4'>
                    <Footer />
                </section>
            </main>
        )
    } 
}
export default Landing;
