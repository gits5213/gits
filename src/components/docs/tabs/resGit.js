import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import GIT_LOGO from '../../../images/tabs/gitGitHub.png';
import  GIT_CHEATSHEET from '../../../images/tabs/gitCheatSheet.png';

import { Grid, Cell } from 'react-mdl';

const resSql = () => {
    return(
        <div className='page-tab-body'>
            <section>
                <div>
                    <h3>GIT/GITHUB</h3>
                </div>
            </section>
            <section>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 sql-logo' src={GIT_LOGO} alt='SQL Logo'/>
                </div>
                <div className='tc pt3'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.git} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    GIT on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.gitHubCli} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    GitHub Manual              
                </a>
            </div>
          </section>
          <section>
                <div>
                    <h3>Introduction to GIT & GITHUB</h3>
                    <p>
                        <strong>GIT:</strong> Git is a version control system that lets you manage and keep track of your source code history.
                        <br />
                        <strong>GitHub:</strong> GitHub is a cloud-based hosting service that lets you manage Git repositories. If you have open-source projects that use Git, then GitHub is designed to help you better manage them.
                    </p>
                </div>
            </section>
            <hr />
            <section>
                <Grid className="border">
                    <Cell className='pl4' col={6}>
                        <div>
                            <h3 className=''> GIT for MAC</h3>
                            <h5> Step 1: Download & Install GIT</h5>
                            <ul>
                                <li>Navigate to the <a href={link.gtiDownload} target="_blank" rel="noopener noreferrer">https://git-scm.com/</a></li>
                                <li>Clik on <strong>Download For MAC</strong></li>
                                <li>Follow the Instruction</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h3 className=''> CMDER Install for WINDOWS</h3>
                                <ul>
                                    <li><li>Navigate to the <a href={link.CMDER} target="_blank" rel="noopener noreferrer">https://cmder.net/</a></li></li>
                                    <li>Click on "Download Full"</li>
                                    <li>Double click on the installed software</li>
                                    <li>Click, Click & Done!</li>
                                </ul>
                            </div>
                            <h3 className=''> GIT for WINDOWS</h3>
                            <h5> Step 1: Download & Install GIT</h5>
                            <ul>
                                <li>Navigate to the <a href={link.gtiDownload} target="_blank" rel="noopener noreferrer">https://git-scm.com/</a></li>
                                <li>Clik on <strong>Download For WINDOWS</strong></li>
                                <li>Double Click on the installed software</li>
                                <li>Git For Windows {'>'} Yes</li>
                                <li>
                                    Next {'>'} Next {'>'} Next {'>'} Next {'>'} Next {'>'}<br />
                                    Next {'>'} Next {'>'} Next {'>'} Next {'>'} <br />
                                    Select "Use Windows default console window" {'>'} Next {'>'} <br />
                                    Next {'>'} Next {'>'} Next {'>'} Install {'>'} Finish <br />
                                    Validate: {'>'} Right Click on DeskTop {'>'} Git GUI Here & Git Bash Here <br />
                                    That's mean Git Successfully Installed.
                                </li>
                            </ul>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={6}>
                    <div>
                            <h3 className=''> GITHUB for MAC & WINDOWS</h3>
                            <h5> Step 1: Create a account</h5>
                            <ul>
                                <li>Navigate to the <a href={link.gitHub} target="_blank" rel="noopener noreferrer">https://github.com/</a></li>
                                <li>Clik on <strong>SIGN UP</strong></li>
                                <li>Follow the Instruction</li>
                            </ul>
                        </div>
                        <div>
                            <h5> Step 2: Create a SSH Key</h5>
                            <ul>
                                <li>Navigate to the <a href={link.SSHKYGEN} target="_blank" rel="noopener noreferrer">Create a SSH KEY</a></li>
                                <li>Follow the Instruction</li>
                            </ul>
                        </div>
                        <div>
                            <h5> Step 3: Add SSH Key into GITHUB Account</h5>
                            <ul>
                                <li>Log into the GITHUB account</li>
                                <li>Click on Profile</li>
                                <li>Click on Settings</li>
                                <li>Click on SSH and GPG Keys</li>
                                <li>Click on New SSH Key</li>
                                <li>Past the SSH Key</li>
                                <li>Save</li>
                            </ul>
                        </div>

                    </Cell>
                </Grid>
            </section>
            <hr />
            <section>
                <div className='pt4 sql-btn'>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SQL_CODEACADEMEY_COMMANDS} target="_blank" rel="noopener noreferrer">
                        SQL Commands CodeCademy
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SQL_W3SHCOOL} target="_blank" rel="noopener noreferrer">
                        SQL Commands W3Schools
                    </a>
                </div>
            </section>
            <section>
            <hr />
                <div className='tc'>
                    <img className='pr4 pt4 pb4 linux-logo' src={GIT_CHEATSHEET} alt='Linux Logo'/>
                </div>
            </section>
            <section>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </section>
        </div>
    )
}
export default resSql;