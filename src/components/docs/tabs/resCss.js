import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import css_logo from '../../../images/tabs/cssLogo.png';
import css_image from '../../../images/tabs/cssImage.jpeg';
import Footer from '../../../components/footer';

const resCss = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>CSS</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 css-logo' src={css_logo} alt='css Logo'/>
            </div>
            <div className='tc pt3'>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.CSS_FRAMEWORK_TOPICS} target="_blank" rel="noopener noreferrer">
                  <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                  CSS FW Topics on GitHub                 
              </a>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.REACT_CSS_FRAMEWORK_TOPICS} target="_blank" rel="noopener noreferrer">
                  <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                  React CSS FW Topics on GitHub                 
              </a>
            </div>
            <div>
                <h3>What is CSS?</h3>
                <ul>
                    <li><strong>CSS</strong> stands for <strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets</li>
                    <li>CSS describes <strong> how HTML elements are to be displayed on screen, paper, or in other media</strong> </li>
                    <li>CSS <strong>saves a lot of work</strong>. It can control the layout of multiple web pages all at once</li>
                    <li>External stylesheets are stored in <strong>CSS files</strong></li>
                </ul>
            </div>
            <div>
                <h3>Why Use CSS?</h3>
                <p>
                    CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
                </p>
            </div>
            <div>
                <h3>CSS Solved a Big Problem</h3>
                <p>
                    HTML was NEVER intended to contain tags for formatting a web page!
                </p>
                <p>
                    HTML was created to <strong>describe the content</strong> of a web page, like:
                </p>
                <p>
                    <code>{'<'}h1{'>'}</code>This is a heading<code>{'</'}h1{'>'}</code>
                    <code>{'<'}p{'>'}</code>This is a paragraph.<code>{'</'}p{'>'}</code>
                </p>
                <p>
                    When tags like<code>{'<'}font{'>'}</code>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.
                </p>
                <p>
                    To solve this problem, the World Wide Web Consortium (W3C) created CSS.
                </p>
                <p>CSS removed the style formatting from the HTML page!</p>
            </div>
            <div>
                <p>
                    CSS Saves a Lot of Work!
                </p>
                <p>
                    With an external stylesheet file, you can change the look of an entire website by changing just one file!
                </p>
            </div>
            <hr />
            <div className='tc'>
                <img className='pr4 pb4 html-tag' src={css_image} alt='css_image'/>
            </div>
            <hr />
            <div>
                <h3>References</h3>
            </div>
            <div>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.W3_CSS} target="_blank" rel="noopener noreferrer">
                    Learn More CSS
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.W3_CSS_HOWTO} target="_blank" rel="noopener noreferrer">
                    CSS - How To
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.CSS_TRICKS} target="_blank" rel="noopener noreferrer">
                    CSS-TRICKS
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.W3_CSS_F} target="_blank" rel="noopener noreferrer">
                    CSS - W3CSS Framework
                </a>
            </div>
            <hr />
            <div>
                <h3>CSS Framework</h3>
            </div>
            <div>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.BOOTSTRAP} target="_blank" rel="noopener noreferrer">
                    BOOTSTRAP FW
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.MATERIAL} target="_blank" rel="noopener noreferrer">
                    MATERIAL FW
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.FONT_AWESOME} target="_blank" rel="noopener noreferrer">
                    Font Awesome ICONIC CSS TOOLKID
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.FONT_AWESOME_CHEATSHEET} target="_blank" rel="noopener noreferrer">
                    F.A ICONIC CSS Cheatsheet
                </a>
            </div>
            <hr />
            <div>
                <h3>React CSS Framework</h3>
            </div>
            <div>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.TACHYONS} target="_blank" rel="noopener noreferrer">
                    TECHYONS FW
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.METERIAL_UI_F} target="_blank" rel="noopener noreferrer">
                    METERIAL UI FW
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.REACT_BOOTSTRAP} target="_blank" rel="noopener noreferrer">
                    REACT BOOTSTRAP FW
                </a>
            </div>
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </div>
    )
}
export default resCss;