import React from 'react';
import '../../../App.css';
import { Grid, Cell } from 'react-mdl';
import architecData from '../../../utilities/data/architectureData.json';
import selenium4Logo from '../../../images/architecture/selenium-4-Architecture.png'; 
import cypressLogo from '../../../images/architecture/cypressArchitecture.png'; 
import palywrightLogo from '../../../images/architecture/playwrightArchitecture.jpeg'; 
import webDriverIOLogo from '../../../images/architecture/webdriverIO-Architecture.png'; 

const Architecture = () => {
    return(
        <section className='page-tab-body'>
            <div>
                <h3>Framework Architecture</h3>
            </div>
            
            <Grid className="border">
                <Cell className='pl4' col={3}>
                    <div>
                        <h3>Seelenium</h3>
                        <hr/>
                    </div>
                   <div>
                        {architecData.architecData[0].SeleniumDescription}
                   </div>
                   <div>
                        <ul>
                            <li>{architecData.seleniumDescription.sd1}</li>
                            <li>{architecData.seleniumDescription.sd2}</li>
                            <li>{architecData.seleniumDescription.sd3}</li>
                        </ul>
                   </div>
                    <div className='tc'>
                        <img className='appium-logo' src={selenium4Logo} alt='appium Logo'/>
                    </div>
                    <div>
                        <h6>More info</h6>
                        <a href='https://blog.testproject.io/2021/06/01/selenium-3-vs-selenium-4/'>Test Project</a>
                        <a href='https://www.selenium.dev/documentation/overview/components/'> | Selenium</a>
                    </div>
                </Cell>
                <Cell className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>CypressIO</h3>
                        <hr/>
                    </div>
                   <div>
                        {architecData.architecData[0].SeleniumDescription}
                   </div>
                   <div>
                        <ul>
                            <li>{architecData.cypressIOdescription.cd1}</li>
                            <li>{architecData.cypressIOdescription.cd2}</li>
                            <li>{architecData.cypressIOdescription.cd3}</li>
                            <li>{architecData.cypressIOdescription.cd4}</li>
                            <li>{architecData.cypressIOdescription.cd5}</li>
                        </ul>
                   </div>
                    <div className='tc'>
                        <img className='appium-logo' src={cypressLogo} alt='appium Logo'/>
                    </div>
                    <div>
                        <h6>More info</h6>
                            <a href='https://docs.cypress.io/guides/overview/key-differences'>CypressIO Architecture</a>
                            <a href='https://www.tutorialspoint.com/cypress-architecture-test-automation'> | TutorialsPoint</a>
                    </div>
                </Cell>
                <Cell className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>PlayWright</h3>
                        <hr/>
                    </div>
                   <div>
                        {architecData.architecData[0].playWrightDescription}
                   </div>
                   <div>
                        <ul>
                            <li>{architecData.playWrightDescription.pd1}</li>
                            <li>{architecData.playWrightDescription.pd2}</li>
                            <li>{architecData.playWrightDescription.pd3}</li>
                            <li>{architecData.playWrightDescription.pd4}</li>
                        </ul>
                   </div>
                    <div className='tc'>
                        <img className='appium-logo' src={palywrightLogo} alt='appium Logo'/>
                    </div>
                    <div>
                        <h6>More info</h6>
                        <a href='https://medium.com/version-1/playwright-vs-selenium-which-is-faster-and-more-stable-c41ba1a89c0a'>PlayWright Architecture</a>
                        <a href='https://www.programsbuzz.com/article/playwright-architecture'> | ProgramsBuzz</a>
                    </div>
                </Cell>
                <Cell className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>WebDriverIO</h3>
                        <hr/>
                        
                    </div>
                   <div>
                        {architecData.architecData[0].webDriverIODescription}
                   </div>
                   <div>
                        <ul>
                            <li>{architecData.webDriverIODescription.wd1}</li>
                            <li>{architecData.webDriverIODescription.wd2}</li>
                        </ul>
                   </div>
                    <div className='tc'>
                        <img className='appium-logo' src={webDriverIOLogo} alt='appium Logo'/>
                    </div>
                    <div>
                        <h6>More info</h6>
                            <a href='https://www.browserstack.com/guide/webdriverio-tutorial-for-selenium-automation#:~:text=for%20automation%20testers.-,WebdriverIO%20Architecture%3A%20How%20does%20it%20work%3F,architecture%20to%20conduct%20automation%20testing.'>WebDriver Architecture</a>
                            <a href='https://www.tutorialspoint.com/webdriverio/webdriverio_architecture.htm'> | TutorialsPoint</a>
                    </div>
                </Cell>
            </Grid>
            <hr/>
            <div>
                <p>More info coming soon!</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </section>
    )
}
export default Architecture;