import React from 'react';
import link from '../../../utilities/links.json';
import BackToTop from '../../backToTop';
import GoogleAd from '../../../components/GoogleAd';
import python_logo from '../../../images/tabs/python_logo.png';
import python_CHEAT_SHEET from '../../../images/tabs/Python_CheatSheet.jpeg';
import Footer from '../../../components/footer';

const resJava = () => {
    return(
        <div className='page-tab-body'>
            <section>
                <div id='top'>
                    <h3>PYTHON</h3>
                </div>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 js-logo' src={python_logo} alt='js Logo'/>
                </div>
                <div className='tc pt3'>
                    <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.PY_GITHUB} target="_blank" rel="noopener noreferrer">
                        <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                        Python on GitHub                 
                    </a>
                    <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.PY_STYLE_GUIDE} target="_blank" rel="noopener noreferrer">
                        <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                        Google Python Style Guide              
                    </a>
                </div>
            </section>
            <section>
                <div>
                    <h3>What is Python?</h3>
                    <p>
                        Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
                    </p>
                    <p>It is used for:</p>
                    <ul>
                        <li>Web development (server-side)</li>
                        <li>Software development</li>
                        <li>Mathematics</li>
                        <li>System scripting</li>
                    </ul>
                </div>
                <div>
                    <h3>Why Can Python do?</h3>
                    <ul>
                        <li>Python can be used on a server to create web applications.</li>
                        <li>Python can be used alongside software to create workflows.</li>
                        <li>Python can connect to database systems. It can also read and modify files.</li>
                        <li>Python can be used to handle big data and perform complex mathematics.</li>
                        <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
                    </ul>
                </div>
                <div>
                    <h3>Why Python?</h3>
                    <ul>
                        <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
                        <li>Python has a simple syntax similar to the English language.</li>
                        <li>Python has syntax that allows developers to write programs with fewer lines than some other programming languages.</li>
                        <li>Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</li>
                        <li>Python can be treated in a procedural way, an object-oriented way or a functional way.</li>
                    </ul>
                </div>
            </section>
            <section>
                <hr />
                <div className='tc'>
                    <img className='pr4 pt4 pb4 linux-logo' src={python_CHEAT_SHEET} alt='Linux Logo'/>
                </div>
            </section>
            <section>
                <div>
                    <BackToTop />
                </div> 
            </section>
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
            
        </div>
    )
}
export default resJava;