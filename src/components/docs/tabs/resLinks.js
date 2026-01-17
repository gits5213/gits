import React from 'react';
import link from '../../../utilities/links.json';
import { Grid, Cell } from 'react-mdl';
import linklogo from '../../../images/tabs/linkLogo.png';
import Footer from '../../../components/footer';

const resLinks = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>TechStack</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 react-logo' src={linklogo} alt='react Logo' height='192' width='575'/>
            </div>
            <div>
                <h3>TechStack GitHub</h3>
            </div>
            <hr />
            <div>
                <Grid className="border">
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.JAVA_TOPICS} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Java Topics                
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.JAVA_CODE_STYLEGUIDE} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Java Style Guide                
                            </a>
                        </div>
                        <div className='pt4 link'>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-mid-gray' href={link.PY_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Python                
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.PY_STYLE_GUIDE} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Python Style Guide                
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.LINUX_} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Linux               
                            </a>
                        </div>
                        <div className='pt4'>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.JAVASCRIPT_TOPICS} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Javascript Topics               
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.JAVASCRIPT_STYLEGUIDE} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Javascript Style Guide              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.REACT_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                React             
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.REACT_MDL} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                React MDL             
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SELENIUM_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Selenium              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.CYPRESS_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Cypress              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.PROTRACTOR_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Protractor              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.WEBDRIVERIO_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                WebDriverIO              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.APPIUM_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Appium              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.RESTASSURED_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                RestAssured              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.FRISBY_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                FrisBy              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SUPERTEST_GITHUB} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                SuperTest              
                            </a>
                            
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.git} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Git            
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.gitHub} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                Github              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.gitHubCli} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                GitHub CLI           
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SSHKYGEN} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                SSHKeyGen              
                            </a>
                            <a class='f5 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.DVDRENTAL} target="_blank" rel="noopener noreferrer">
                                <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                                DVD-Rental              
                            </a> 
                        </div>
                    </Cell>
                </Grid>
            </div>
            <hr />
            <div>
                <p>Technology Stack Releated Website References Announcement and News</p>
            </div>
            <div>
                <h3>TechStack Website</h3>
            </div>
            <hr />
            <div>
                <Grid className="border">
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href={link.JIRA_CLOUD} target="_blank" rel="noopener noreferrer">
                                Jira Cloud               
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
            <hr />
            <div>
                <p>Technology Stack Releated Download References Announcement and News</p>
            </div>
            <div>
                <h3>TechStack Download</h3>
            </div>
            <hr />
            <div>
                <Grid className="border">
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
            <hr />
            <div>
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </div>
    )
}
export default resLinks;