import React from 'react';
import Top from '../../top';
import GoogleAd from '../../../components/GoogleAd';
import java_logo from '../../../images/tabs/javaLogo.png';

const ORACLE = 'https://www.oracle.com/java/technologies/java-se-glance.html';
const STEP_2 = 'https://www.w3schools.com/java/system1.png';
const STEP_3 = 'https://www.w3schools.com/java/path2.png';
const STEP_4 = 'https://www.w3schools.com/java/path3.png';
const WINDOW_SETUP = 'https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-microsoft-windows-platforms.htm#JSJIG-GUID-A7E27B90-A28D-4237-9383-A58B416071CA';
const MAC_SETUP = 'https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm#JSJIG-GUID-2432241F-9517-4C0B-9CBB-489E6419C9C9';

const resJava = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3 id='top'>JAVA</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 js-logo' src={java_logo} alt='js Logo' height='300' width='800'/>
            </div>
            <div>
                <h3>What is Java?</h3>
                <p>
                    Java is a popular programming language, created in 1995. <br />
                    It is owned by Oracle, and more than 3 billion devices run Java.
                </p>
                <p>It is used for:</p>
                <ul>
                    <li>Mobile applications (specially Android apps)</li>
                    <li>Desktop applications</li>
                    <li>Web applications</li>
                    <li>Web servers and application servers</li>
                    <li>Games</li>
                    <li>Database connection</li>
                    <li>And much, much more!</li>
                </ul>
            </div>
            <div>
                <h3>Why Use Java?</h3>
                <ul>
                    <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
                    <li>It is one of the most popular programming language in the world</li>
                    <li>It is easy to learn and simple to use</li>
                    <li>It is open-source and free</li>
                    <li>It is secure, fast and powerful</li>
                    <li>It has a huge community support (tens of millions of developers)</li>
                    <li>Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</li>
                    <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa</li>
                </ul>
            </div>
            <div>
                <h3>Java Getting Started</h3>
            </div>
            <div>
                <h5>Java Install</h5>
                <p>
                    Some PCs might have Java already installed.
                </p>
                <p>
                    To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):
                </p>
                <code className='tag-Color pl4'>C:\Users\Your Name{'>'}java -version</code>
            </div>
            <div className='pt3'>
                <p>
                    If Java is installed, you will see something like this (depending on version): 
                </p>
                <code className='tag-Color'>
                    java version "11.0.1" 2018-10-16 LTS <br />
                    Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS) <br />
                    Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)
                </code>
            </div>
            <div className='pt3'>
                <p>
                    If you do not have Java installed on your computer, you can download it for free at <a href={ORACLE} target="_blank" rel="noopener noreferrer"> oracle.com</a>.
                </p>
                <p>
                    <strong>Note:</strong> In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.
                </p>
            </div>
            <div>
                <h5>Setup for Windows</h5>
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
                    <img className='pr4 pt4 pb4 js-logo' src={STEP_2} alt='js Logo'/>
                </div>
            </div>
            <div>
                <h5>Step 3:</h5>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 js-logo' src={STEP_3} alt='js Logo'/>
                </div>
            </div>
            <div>
                <h5>Step 4:</h5>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 js-logo' src={STEP_4} alt='js Logo'/>
                </div>
            </div>
            <div>
                <h5>Step 5:</h5>
                <p>
                    Write the following in the command line (cmd.exe):  
                </p>
                <code className='tag-Color pl4'>
                    C:\Users\Your Name{'>'}java -version
                </code>
            </div>
            <div className='pt3'>
                <p>
                    If Java was successfully installed, you will see something like this (depending on version):  
                </p>
                <code className='tag-Color'>
                    java version "11.0.1" 2018-10-16 LTS <br />
                    Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS) <br />
                    Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)
                </code>
            </div>
            <div className='pt4'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={WINDOW_SETUP} target="_blank" rel="noopener noreferrer">
                    Windows Setup More Info
                </a>
            </div>
            <hr />
            <Top />
            <div>
                <h5>Setup for MAC</h5>
                <p>To install Java on MAC:</p>
            </div>


            <div className='pt4'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={MAC_SETUP} target="_blank" rel="noopener noreferrer">
                    MAC Setup More Info
                </a>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resJava;