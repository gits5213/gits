import React, {Component} from 'react';
import HeaderText from '../components/header';
import GoogleAd from '../components/GoogleAd';
import aboutPic from '../images/about-pic.png';
import Footer from '../components/footer';

class About extends Component {
    render(){
        return(
            <div className='page-tab-body'>
                <HeaderText />
                <div>
                    <h3>WHO WE ARE</h3>
                </div>
                <div>
                <h5>
                    In-person & Online <br />
                    Interactive & Innovative Trainig Center for <br />
                    Code4Kids | WebDevelopment | Full Stack Quality Assurance Courses
                </h5>
                <hr/>
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
                            in three modules - Code4Kids program, Web|UI|Frontend Development program and Full Stack Quality Assurance Program.
                        </p>
                        <hr />
                    </div>
                    <div className='about-instructor'>
                        <img className='about-section-img' src={aboutPic} alt='avatar'/>
                    </div>
                    <div className='instructor-details-first'>
                        <p>
                            I’m Md Shahnewaz Zaman(Shanto) and I’m Tech Lead of Software Development at Global iTech Solutions(GITS).
                        </p>
                        <p>
                            I've got 14+ years of diverse industry experience. Practicing Software Development principles, methodologies, mentoring and leading full-stack testing efforts and hands-on coding, leading with the ability to collaborate with software development in all phases of the SDLC and STLC, including planning, coding, testing, troubleshooting, deploying, and ongoing full-stack code maintenance and delivering right product on time.
                        </p>
                        <p>
                            I am Certified in
                            SAFe4Agilist, ASTQB-ISTQB - CTFL & CTAL-TAE, CT-AI, Scrum Master(Scrum.org) and an expert in creating automation 
                            solutions and frameworks for large scale complex digital functions. 
                            Expert in automation across tech stacks (HTML, CSS, Javascript, Java, C#.Net, Python, Selenium, Protractor, 
                            CypressIO, PlayWright, WebDriverIO, Appium, API's) and so on and 
                            different types of application (Web, APIs and Mobile apps).
                        </p>
                    </div>
                    <div className='instructor-details-second'>
                        <p>
                            In my current role, as Tech Lead of Software Dev Engineer, I am responsible to build, 
                            design, implement and maintain the automation framework and integrate it with 
                            CI/CD pipeline. I am also responsible for bringing in the best industry practices 
                            for SQA practices, coding standards, extensible framework design, and low maintenance automation 
                            solutions. I enabled product owners and Agile teams to adopt Best practices & process in their projects 
                            andd establish SQA first approach. I take immense pride in cultivating a culture 
                            of individual & company growth and actively mentor my team to maximize their potential.
                        </p>
                        <p>
                            I am also the Founder of Global iTech Solutions Inc., Over the years I have trained hundreds 
                            of Quality Assurance folks to make a successful transition to Dev and Automation Engineer. I am actively involved in mentoring 
                            entry-level professionals and fresher to make a successful career in Tech Engineering industry.
                        </p>
                        <p>
                            I live in Hollis, Queens-NY, with my wife and lovely son & daughter. 
                            Please connect me through the social media below.
                        </p>
                    </div>
                <div>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </div>
                <section className='pt4'>
                    <Footer />
                </section>
            </div> 
        );
    }
}
export default About;
