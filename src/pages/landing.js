import React, {Component} from 'react';
import HeaderText from '../components/header';
import codingImage from '../images/codingImage.png'
import CardList from '../components/cardList';
import {cardDetails}from '../components/cardDetails';
import Footer from '../components/footer';

const GOTO_MEET = 'https://global.gotomeeting.com/join/115264677';
const GOOGLE_MEET = 'https://meet.google.com/wco-zfnf-swy';
const ZOOM_MEET = 'https://us04web.zoom.us/j/76185361138?pwd=QnJybGczamROdVpTVS9rVU9hMDQ2Zz09';


class Landing extends Component {
    render(){
        return(
            <div className='landing-body'> 
                <div className='goLink ph5 mt4'>
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
                <div>
                    <HeaderText />
                </div>
                <div>
                    <div className='qa-talks'>
                        <h3>
                            Return on Investment (ROI) for KIDS
                        </h3>
                        <p>
                            I am paying my KIDS $20-30/hour to CODE and some people are thinking this is a STUPID & DUMB IDEA! but, I would like to say this a GENIUS IDEA because here is MATH & REALITY! 
                            I am not buying a car for my KIDS at the age of 16 including insurance, on average the age of 16th the first CAR is about $15K & Insurance for $6K Total is $21K.
                            Compare to over a period of 5 years, I will end up paying one kid $10K to CODE.
                            I'm not "BUYING THE CAR" but they are EARNING the CAR with the SKILL set. I don't make them do this. If they want to earn it, they can. If they don't, they don't still, they can continue education to the next level & get a faster way to complete graduation!
                        </p>
                    </div>
                    {/* <div className='goLink container ph3 mt4'>
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
                    </div> */}
                    <div className='container ph3 mt4'>
                        <img alt='cover' className="cover-img" src={codingImage}/>
                    </div>
                    <div className='qa-talks'>
                        <h3>
                            Why Software QA Is a Good Career Choice?
                        </h3>
                        <p>
                            A rise in tech companies often brings a rise of software engineers, including engineers that specialize in software quality assurance (SQA or QA). While every company works differently with quality control QA engineers (ex. some have an independent QA team, some have one or two people within the company, and some embed QA personnel with every development team), it's safe to say there is need for these kind of software specialists.
                        </p>
                        <h3>Tech Companies Need QA Engineers</h3>
                        <p>
                            In a nutshell, software QA is getting paid to break software
                        </p>
                        <p>
                            A QA engineer's job is to prevent bad software from being seen by customers. How customers interact with software determines their relationship with whatever product is being sold. That means QA engineers need to find every possible way to break software, and then report where the software testing failed to developers for a fix. Without QA engineers, there are clunkier workflows and broken processes. Being in the tech driven world we live in today, tech companies that want to remain in business really can't afford the absence of QA engineers.
                        </p>
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
