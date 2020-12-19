import React, {Component} from 'react';
import HeaderText from '../components/header';
import { Grid, Cell } from 'react-mdl';
import SocialIcon from '../components/socialIcon';
import GoogleAd from '../components/GoogleAd';
import aboutPic from '../images/about-pic.png';

class About extends Component {
    render(){
        return(
            <div className='page-tab-body'>
                <HeaderText />
                <Grid className='page-tab-grid'>
                    <Cell className='page-tab-first-col'col={12}>
                        <div className='tc pb4 training-title'>
                            <h2>WHO WE ARE</h2>
                            <h4>
                                INPERSON & ONLINE <br />
                                Interactive & Innovative Trainig Center for <br />
                                Code4Kids | WebDevelopment | Full Stack SQA Courses
                            </h4>
                        </div>
                        <div>
                            <p id='training-description'>
                                We are the leaders in providing quality training's of 
                                Code4Kids (5th Grade to 12th Gade) Web|UI|Frontend Development
                                and Full Stack SQA Courses Training to Corporate and Individuals. 
                                This is the best In-person 
                                and Online training center at Hollis, Queens-NY. Our main intention 
                                is to let our students learn through the Interactive process, practice and provide as 
                                much as detailed information as possible. Our training's are divided 
                                in three modules - Code4Kids program, Web|UI|Frontend Development program and Full Stack SQA Program.
                            </p>
                            <hr />
                        </div>
                        <div className='about-instructor'>
                            <img className='about-section-img' src={aboutPic} alt='avatar'/>
                        </div>
                        <div className='instructor-details-first'>
                            <p>
                                I’m Md Shahnewaz Zaman(Shanto) and I’m Head of SQA at Raytheon Technology.
                            </p>
                            <p>
                                I've got 14+ years of diverse industry experience. Practicing Software Quality Assurance principles, methodologies, mentoring and leading full-stack testing efforts and hands-on coding, leading with the ability to collaborate with software development in all phases of the SDLC and STLC, including planning, coding, testing, troubleshooting, deploying, and ongoing SQA full-stack automation code maintenance and delivering right product on time.
                            </p>
                            <p>
                                I am Certified in
                                SAFe4Agilist, ISTQB, Scrum Master(Scrum.org) and an expert in creating automation 
                                solutions and frameworks for large scale complex digital functions. 
                                Expert in automation across tech stacks (HTML, CSS, Javascript, Java, Selenium, Protractor, 
                                WebDriverIO, Appium, API's) and on 
                                different types of application (Web, APIs and Mobile apps).
                            </p>
                        </div>
                        <div className='instructor-details-second'>
                            <p>
                                In my current role, as Head of SQA, I am responsible to build, 
                                design, implement and maintain the automation framework and integrate it with 
                                CI/CD pipeline. I am also responsible for bringing in the best industry practices 
                                for SQA practices, coding standards, extensible framework design, and low maintenance automation 
                                solutions. I enabled product owners and Agile teams to adopt Best practices & process in their projects 
                                andd establish SQA first approach. I take immense pride in cultivating a culture 
                                of individual & company growth and actively mentor my team to maximize their potential.
                            </p>
                            <p>
                                I am also the Founder of IT Training & Consultant Inc., Over the years I have trained hundreds 
                                of SQA folks to make a successful transition to automation. I am actively involved in mentoring 
                                entry-level professionals and fresher to make a successful career in Tech Engineering industry.
                            </p>
                            <p>
                                I live in Hollis, Queens-NY, with my wife and lovely son & daughter. 
                                Please connect me through the social media below.
                            </p>
                            <SocialIcon />
                            <GoogleAd slot="1541085932" classNames="page-right-side" />
                        </div>
                    </Cell>
                    {/* <Cell className='page-tab-second-col' col={2}>
                        <GoogleAd slot="1541085932" classNames="page-right-side" />
                    </Cell> */}
                </Grid>
            </div> 
        );
    }
}
export default About;
