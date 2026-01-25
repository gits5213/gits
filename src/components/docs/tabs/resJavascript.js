import React from 'react';
import link from '../../../utilities/links.json';
import javascript_logo from '../../../images/tabs/javascriptLogo.png';
import { getImageSrc } from '../../../utils/getImageSrc';
const resJavascript = () => {
    return(
        <div className='page-tab-body' style={{ height: 'auto', minHeight: 'auto', paddingBottom: '100px', marginBottom: '40px' }}>
            <div>
                <h3>JavaScript</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 js-logo' src={getImageSrc(javascript_logo)} alt='js Logo'/>
            </div>
            <div className='tc pt3'>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.JAVASCRIPT_TOPICS} target="_blank" rel="noopener noreferrer">
                  <img className='pr2' src={getImageSrc(link.GITHUB_ICON)} alt='github log' /> 
                  JavaScript Topics on GitHub                 
              </a>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.JAVASCRIPT_STYLEGUIDE} target="_blank" rel="noopener noreferrer">
                  <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                   Airbnb JavaScript Style Guide                
              </a>
          </div>
            <div>
                <h3>What is Javascript?</h3>
                <p>
                    JavaScript is the world's most popular programming language. <br />
                    JavaScript is the programming language of the Web.
                </p>
            </div>
            <div>
                <h3>Why Study JavaScript?</h3>
                <ol>
                    <li><a href={link.HTML} target="_blank" rel="noopener noreferrer">HTML</a> to define the content of web pages</li>
                    <li><a href={link.CSS} target="_blank" rel="noopener noreferrer">CSS</a> to specify the layout of web pages</li>
                    <li><strong>JavaScript</strong> to program the behavior of web pages</li>
                </ol>
            </div>
            <div>
                <h3>Commonly Asked Questions</h3>
                <ul>
                    <li><strong>How do I get JavaScript?</strong></li>
                    <li><strong>Where can I download JavaScript?</strong></li>
                    <li><strong>Is JavaScript Free?</strong></li>
                </ul>
                <p>
                    <strong>Answer: </strong> <br />
                    - You don't have to get or download JavaScript. <br />
                    - JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone. <br />
                    - JavaScript is free to use for everyone.
                </p>
            </div>
            <div>
                <h3>JavaScript Can Change HTML Content</h3>
                <p>
                    One of many JavaScript HTML methods is <code className='tag-Color'>getElementById()</code>.
                </p>
                <p>
                    The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":
                </p>
                <h5>Example</h5>
                <code className='pl4'>document.getElementById("demo").innerHTML = "Hello JavaScript";</code>
            </div>
            <div>
                <h3>JavaScript Can Change HTML Attribute Values</h3>
                <p>
                    In this example JavaScript changes the value of the <code className='tag-Color'> src</code> (source) attribute of an <code className='tag-Color'>{'<'}img{'>'}</code> tag:
                </p>
            </div>
            <div>
                <h3>JavaScript Can Change HTML Styles (CSS)</h3>
                <p>
                    Changing the style of an HTML element, is a variant of changing an HTML attribute:
                </p>
                <code className='tag-Color pl4'>document.getElementById("demo").style.fontSize = "35px";</code>
            </div>
            <div>
               <h3>JavaScript Can Hide HTML Elements</h3>
               <p>Hiding HTML elements can be done by changing the <code className='tag-Color'>display</code> style:</p>
               < code className='tag-Color pl4'>document.getElementById("demo").style.display = "none";</code> 
            </div>
            <div>
                <h3>JavaScript Can Show HTML Elements</h3>
                <p>Hiding HTML elements can be done by changing the <code className='tag-Color'>display</code> style:</p>
                < code className='tag-Color pl4'>document.getElementById("demo").style.display = "block";</code> 
            </div>
            <div>
                <h5>Did You Know?</h5>
                <p>
                    - JavaScript and <a href={link.JAVA_W3} target="_blank" rel="noopener noreferrer">JAVA</a> are completely different languages, both in concept and design. <br />
                    - JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.<br />
                    - ECMA-262 is the official name of the standard. ECMAScript is the official name of the language. 
                </p>
            </div>
            <div>
                <p><a href={link.WHERETO} target="_blank" rel="noopener noreferrer">JavaScript Where To</a></p>
            </div>
            <hr />
            <div>
                <h3>References</h3>
            </div>
            <section>
                <div className='pt4 JS-btn'>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.WHERETO} target="_blank" rel="noopener noreferrer">
                        JS Where to
                    </a>

                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_VERSION} target="_blank" rel="noopener noreferrer">
                        JS Version
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_2009_ES5} target="_blank" rel="noopener noreferrer">
                        JS 2009 (ES5)
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_2015_ES6} target="_blank" rel="noopener noreferrer">
                        JS 2015 (ES6)
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_2016_ES6} target="_blank" rel="noopener noreferrer">
                        JS 2016 (ES6)
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_2017_ES6} target="_blank" rel="noopener noreferrer">
                        JS 2017 (ES6)
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_JSON} target="_blank" rel="noopener noreferrer">
                        JS JSON
                    </a>
                </div>
                <div className='pt4 JS-btn'>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_FORM} target="_blank" rel="noopener noreferrer">
                        JS Form
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_OBJECTS} target="_blank" rel="noopener noreferrer">
                        JS Objects
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_FUNCTION} target="_blank" rel="noopener noreferrer">
                        JS Function
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_CLASSES} target="_blank" rel="noopener noreferrer">
                        JS Classes
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_ASYNC} target="_blank" rel="noopener noreferrer">
                        JS Async
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_HTML_DOM} target="_blank" rel="noopener noreferrer">
                        JS HTML DOM
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_BROWSER_DOM} target="_blank" rel="noopener noreferrer">
                        JS Browser DOM
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_AJAX} target="_blank" rel="noopener noreferrer">
                        JS AJAX
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_JSON} target="_blank" rel="noopener noreferrer">
                        JS JSON
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_WEBAPI} target="_blank" rel="noopener noreferrer">
                        JS WEB API
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_JQUERY} target="_blank" rel="noopener noreferrer">
                        JS vs jQuery
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_EXAMPLE} target="_blank" rel="noopener noreferrer">
                        JS Example
                    </a>
                </div>
                <div className='pt4 JS-btn'>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_ChEAT_SHEET} target="_blank" rel="noopener noreferrer">
                        JavaScript Cheat Sheet
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JS_QUIZE} target="_blank" rel="noopener noreferrer">
                        JS Quiz
                    </a>
                </div>
            </section>
            <hr />
            <section>
                <div>
                    <div>
                        <h3>Front-end frameworks</h3>
                    </div>
                    <p>
                        Front-end frameworks are growing in popularity as they allow individuals and companies alike to build complex applications in reduced time. These technologies continue to evolve and have revolutionized the world of web development.
                    </p>
                    <p>
                        Today, we will compare three popular front-end technologies: React, Angular, and Vue. 
                    </p>
                    <h3>REACT | ANGULAR | VUE</h3>
                    <h4>REACT</h4>
                    <p>
                        React is an open-source JavaScript library built by Facebook in 2013, which uses React internally. React is used by large companies like Facebook, Twitter, Whatsapp, Instagram, Microsoft, Slack, Asana, Airbnb, and more.
                    </p>
                    <h4>ANGULAR</h4>
                    <p>
                        Angular was developed by Google in 2010. It’s important to note that Angular is a TypeScript-based JavaScript framework. If you want to read more about TypeScript and how it’s different from JavaScript, check out our TypeScript Tutorial article. In 2016, Google released Angular2, which offered a substantial shift. Angular is used by organizations like The Guardian and Weather.com.
                    </p>
                    <h4>VUE</h4>
                    <p>
                        Also also known as Vue.js, Vue is the youngest out of the three. It was developed by ex-Google employee Evan You in 2014 and has increased in popularity over the past few years. Though not as popular as React, it’s still used by large companies like 9Gag, Alibaba, and Gitlab.
                    </p>
                </div>
                <div>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.R_A_V} target="_blank" rel="noopener noreferrer">
                        Learn More About Comparison
                    </a>
                </div>
                <div>
                    <h3>REACT</h3>
                    <h5>What is react?</h5>
                    <p>
                        <a href={link.REACT} target="_blank" rel="noopener noreferrer">React</a> is a JavaScript library for building user interfaces.
                    </p>
                    <ul>
                        <li><strong>Declarative: </strong>
                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <br />
                            Declarative views make your code more predictable and easier to debug.
                        </li>
                        <li><strong>Component-Based: </strong>
                            Build encapsulated components that manage their own state, then compose them to make complex UIs.<br />
                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                        </li>
                        <li><strong>Learn Once, Write Anywhere: </strong>
                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.<br />
                            React can also render on the server using Node and power mobile apps using 
                            <a href={link.REACT_NATIVE} target="_blank" rel="noopener noreferrer"> React Native</a>.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>References</h3>
                </div>
                <div>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.REACT} target="_blank" rel="noopener noreferrer">
                        ReactJS.org
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.REACT_NATIVE} target="_blank" rel="noopener noreferrer">
                        ReactNative.dev
                    </a>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.REACT_MDL} target="_blank" rel="noopener noreferrer">
                        ReactMDL
                    </a>
                </div>
            </section>
            <section>
                <div>
                    <iframe src="https://drive.google.com/file/d/10vq1bR8_GeI38zC1kZ48d9n8gzzox_Do/preview" width="640" height="800" title='js-cheat-sheet'></iframe>
                </div>
            </section>
            <div className='pt4'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-red' href={link.JS_ChEAT_SHEET} target="_blank" rel="noopener noreferrer">
                    JavaScript Cheat Sheet
                </a>
            </div>
            <div>
            </div>
            <section className='pt4'>
                </section>
        </div>
    )
}
export default resJavascript;