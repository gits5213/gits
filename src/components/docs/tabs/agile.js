import React from 'react';
import GoogleAd from '../../../components/GoogleAd';

import AgilelLogo from '../../../images/tabs/agileLogo.png'; 
const AGILE_MENUFESTO = 'https://www.mountaingoatsoftware.com/agile/new-to-agile-or-scrum';
const AGILE_TOOLS_TECHN = ' https://projectresources.cdt.ca.gov/agile/agile-tools-and-techniques/';

const agile = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>The Agile Manifesto</h3>
            </div>
            <div className='tc'>
                <img className='pt4 pb4 agile-logo' src={AgilelLogo} alt='Manual Logo' height='540' width='801'/>
            </div>
            <div>
                <h2>The key values and principles of agile</h2>
            </div>
            <div>
                <p>Nearly 20 years ago, 17 software developers came together in Snowbird, Utah to propose a new way of developing software “by doing it and helping others do it.” Through this work, the signers of the Manifesto understood how much of an impact these principles would help them in the field of software development—but they had no idea how quickly their ideas would spread beyond their industry. Values the Manifesto creators cited as paramount were:</p>
            </div>
            <div>
                <ul>
                    <li>Individuals and interactions over processes and tools</li>
                    <li>Working software over comprehensive documentation</li>
                    <li>Customer collaboration over contract negotiation</li>
                    <li>Responding to change over following a plan</li>
                </ul>
            </div>
            <div>
                <p>Since that time, the original document has been used by groups as disparate as coders to Boy Scout Troops, from marketing departments to restaurants. Its universality is derived from a group of principles that can be broadly applied, easily learned, and rarely mastered completely. Before spreading to all corners of the globe, here are the key principles for incremental development that have made Agile what it is today:</p>
            </div>
            <div>
                <ol>
                    <li>Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li>
                    <li>Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</li>
                    <li>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</li>
                    <li>Business people and developers must work together daily throughout the project.</li>
                    <li>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</li>
                    <li>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</li>
                    <li>Working software is the primary measure of progress.</li>
                    <li>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</li>
                    <li>Continuous attention to technical excellence and good design enhances agility.</li>
                    <li>Simplicity--the art of maximizing the amount of work not done--is essential.</li>
                    <li>The best architectures, requirements, and designs emerge from self-organizing teams.</li>
                    <li>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li>
                </ol>
            </div>
            <div className='pt4 agile-btn'>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={AGILE_MENUFESTO} target="_blank" rel="noopener noreferrer">
                    New to Agile and Scrum
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={AGILE_TOOLS_TECHN} target="_blank" rel="noopener noreferrer">
                    Agile Tools & techniques
                </a>
            </div>

            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default agile;