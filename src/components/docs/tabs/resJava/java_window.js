import React from 'react';
import link from '../../../../utilities/links.json';

const java_window = () => {
    return(
        <div>
            <div>
                <h3>Setup for Windows</h3>
                <p>To install Java on Windows:</p>
                <ol>
                <li>Go to <strong>System Properties</strong> (Can be found on Control Panel {'>'} System and Security {'>'} System {'>'} Advanced System Settings)</li>
                    <li>Click on the <strong>Environment variables</strong> button under the <strong>Advanced</strong> tab</li>
                    <li>Then, select the <strong>Path</strong> variable in System variables and click on the <strong>Edit</strong> button</li>
                    <li>Click on the <strong>New</strong> button and add the path where Java is installed, followed by <code className='tag-Color'>\bin</code>. By default, Java is installed in <code className='tag-Color'>C:\Program Files\Java\jdk-11.0.1</code> (If nothing else was specified when you installed it). In that case, You will have to add a new path with: <code className='tag-Color'>C:\Program Files\Java\jdk-11.0.1\bin</code>
                        Then, click <strong>OK</strong>, and save the settings</li>
                    <li>At last, open Command Prompt (<code className='tag-Color'>cmd.exe</code>) and type <code className='tag-Color'>java -version</code> to see if Java is running on your machine</li>
                </ol>
            </div>
            <div>
                <h5>Step 2:</h5>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 js-logo' src={link.STEP_2} alt='js Logo'/>
                </div>
            </div>
            <div>
                <h5>Step 3:</h5>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 js-logo' src={link.STEP_3} alt='js Logo'/>
                </div>
            </div>
            <div>
                <h5>Step 4:</h5>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 js-logo' src={link.STEP_4} alt='js Logo'/>
                </div>
            </div>
            <div>
                <h5>Step 5:</h5>
                <p>
                    Write the following in the command line (cmd.exe):  
                </p>
                <pre className='pre-code'>
                    <code>
                        C:\Users\Your Name{'>'}java -version
                    </code>
                </pre>
            </div>
            <div className='pt3'>
                <p>
                    If Java was successfully installed, you will see something like this (depending on version):  
                </p>
                <pre className='pre-code'>
                    <code>
                        java version "11.0.1" 2018-10-16 LTS <br />
                        Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS) <br />
                        Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)
                    </code>
                </pre>
            </div>
            <div className='pt4'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.WINDOW_SETUP} target="_blank" rel="noopener noreferrer">
                    Windows Setup More Info
                </a>
            </div>
        </div>
    );
  }   
export default java_window;
