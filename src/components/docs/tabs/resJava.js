import React from 'react';
import BackToTop from '../../backToTop';
import JavaMac from './resJava/java_mac';
import JavaWindow from './resJava/java_window';
import Maven from './resJava/maven';
import GoogleAd from '../../../components/GoogleAd';
import java_logo from '../../../images/tabs/javaLogo.png';

const ORACLE = 'https://www.oracle.com/java/technologies/java-se-glance.html';

const resJava = () => {
    return(
        <div className='page-tab-body'>
            <div id='top'>
                <h3>JAVA</h3>
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
                <pre className='pre-code'>
                    <code>
                        C:\Users\Your Name{'>'}java -version
                    </code>
                </pre>
            </div>
            <div className='pt3'>
                <p>
                    If Java is installed, you will see something like this (depending on version): 
                </p>
                <pre className='pre-code'>
                    <code>
                        java version "11.0.1" 2018-10-16 LTS <br />
                        Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS) <br />
                        Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)
                    </code>
                </pre>
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
                <JavaWindow />
            </div>
            <hr />
            <div>
                <BackToTop />
            </div> 
            <div>
                <h3>Setup for MAC</h3>
                <p>To install Java on MAC:</p>
            </div>
            <div>
                <JavaMac />
            </div>
            <hr />
            <div>
                <BackToTop />
            </div> 
            <div>
                <Maven />
            </div>

            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resJava;