import React from 'react';
import '../../../App.css';
import { Grid, Cell } from 'react-mdl';
import architecData from '../../../utilities/data/architectureData.json';
import selenium4Logo from '../../../images/architecture/selenium-4-Architecture.png'; 
import cypressLogo from '../../../images/architecture/cypressArchitecture.png'; 
import palywrightLogo from '../../../images/architecture/playwrightArchitecture.jpeg'; 
import webDriverIOLogo from '../../../images/architecture/webdriverIO-Architecture.png'; 
import Footer from '../../../components/footer';
import GoogleAd from '../../GoogleAd';

const Architecture = () => {
    return(
        <section className='page-tab-body'>
            <div>
                <h3>{architecData.componentName.frameworkArchitecture}</h3>
            </div>
            
            <Grid className="border">
                <Cell className='pl4' col={3}>
                    <div>
                        <h3>{architecData.componentName.selenium4}</h3>
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
                        <a href={architecData.links.seleniumArchDiagram_2}>{architecData.componentName.testProject}</a>
                        <a href={architecData.componentName.seleniumArchDiagram_2}> | {architecData.componentName.selenium}</a>
                    </div>
                </Cell>
                <Cell className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>{architecData.componentName.cypressIO}</h3>
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
                            <a href={architecData.links.cypressArchDiagram_1}>{architecData.componentName.cypressIOArchitecture}</a>
                            <a href={architecData.links.cypressArchDiagram_2}> | {architecData.componentName.tutorialsPoint}</a>
                    </div>
                </Cell>
                <Cell className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>{architecData.componentName.playWright}</h3>
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
                        <a href={architecData.links.playwrightArchDiagram_1}>{architecData.componentName.playWrightArchitecture}</a>
                        <a href={architecData.links.playwrightArchDiagram_2}> | {architecData.componentName.programsBuzz}</a>
                    </div>
                </Cell>
                <Cell className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>{architecData.componentName.webDriverIO}</h3>
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
                            <a href={architecData.links.webDriverIOArchDiagram_1}>{architecData.componentName.webDriverArchitecture}</a>
                            <a href={architecData.links.webDriverIOArchDiagram_2}> | {architecData.componentName.tutorialsPoint}</a>
                    </div>
                </Cell>
            </Grid>
            <hr/>
            <div>
                <p>More info coming soon!</p>

            </div>
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </section>
    )
}
export default Architecture;