import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import HTML_LOGO from '../../../images/tabs/htmlLogo.png';
import HTML_TAG from '../../../images/tabs/htmlTags.jpeg';

const VSCODE = 'https://code.visualstudio.com/download';
const HTML_TAGS = 'https://www.w3schools.com/tags/ref_attributes.asp';
const HTML_FROMS = 'https://www.w3schools.com/html/html_forms.asp';
const HTML_MEDIA = 'https://www.w3schools.com/html/html_forms.asp';
const HTML_QUIZ = 'https://www.w3schools.com/html/html_forms.asp';
const HTML_REFERENCES = 'https://www.w3schools.com/html/html_forms.asp';
const MATERIAL_UI = 'https://material-ui.com/';
const GOOGLE_FONTS = 'https://fonts.google.com/';

const resHtml = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>HTML</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 html-logo' src={HTML_LOGO} alt='html Logo'/>
            </div>
            <div>
                <p>
                    HTML is the standard markup language for creating Web pages.
                </p>
                <h3>What is HTML?</h3>
                <ul>
                    <li>HTML stands for Hyper Text Markup Language</li>
                    <li>HTML is the standard markup language for creating Web pages</li>
                    <li>HTML describes the structure of a Web page</li>
                    <li>HTML consists of a series of elements</li>
                    <li>HTML elements tell the browser how to display the content</li>
                    <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                </ul>
            </div>
            <h3>Example</h3>
            <div>
                <pre className='pre-code'>
                    <code>
                        {'<'}!DOCTYPE html{'>'} <br />
                        {'<'}html{'>'} <br />
                        |   {'<'}head{'>'} <br />
                        |    |   {'<'}titile{'>'} Page Title {'<'}titile/{'>'} <br />
                        |   {'<'}head/{'>'} <br />
                        |   {'<'}body{'>'} <br />
                        |    |  {'<'}h1{'>'} My First Heading {'<'}h1/{'>'} <br />
                        |    |  {'<'}p{'>'}My First Paragraph. {'<'}p/{'>'} <br />
                        |   {'<'}body/{'>'} <br />
                        {'<'}html/{'>'}
                    </code>
                </pre>
            </div>
            <div>
                <h3>Example Explained</h3>
                <ul>
                    <li>The <code className='tag-Color'>{'<'}!DOCTYPE html{'>'}</code>declaration defines that this document is an HTML5 document</li>
                    <li>The <code className='tag-Color'>{'<'}html{'>'}</code> element is the root element of an HTML page</li>
                    <li>The <code className='tag-Color'>{'<'}head{'>'}</code> element contains meta information about the HTML page</li>
                    <li>The <code className='tag-Color'>{'<'}title{'>'}</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
                    <li>The <code className='tag-Color'>{'<'}body{'>'}</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
                    <li>The <code className='tag-Color'>{'<'}h1{'>'}</code> element defines a large heading</li>
                    <li>The <code className='tag-Color'>{'<'}p{'>'}</code>  element defines a paragraph</li>
                </ul>
            </div>
            <div>
                <h3>What is an HTML Element?</h3>
                <p>
                    An HTML element is defined by a start tag, some content, and an end tag:
                </p>
                <p>
                    <code className='tag-Color'>{'<'}tagname{'>'}</code>Content goes here...<code className='tag-Color'>{'</'}tagname{'>'}</code>
                    </p>
                <p>
                    The HTML element is everything from the start tag to the end tag:
                </p>
                <p>
                    <code className='tag-Color'>{'<'}h1{'>'}</code>My First Heading<code className='tag-Color'>{'</'}h1{'>'}</code>
                </p>
                <p>
                    <code className='tag-Color'>{'<'}p{'>'}</code>My First paragraph<code className='tag-Color'>{'</'}p{'>'}</code>
                </p>
            </div>
            <hr />
            <div>
                <h3>HTML Editors</h3>
                <p>
                    A simple text editor is all you need to learn HTML.
                </p>
                <p>
                    Learn HTML Using VS Code
                </p>
                <p>
                    Web pages can be created and modified by using professional HTML editors.
                </p>
                <p>
                    However, for learning HTML we recommend a simple text editor like VS Code (PC) or (Mac).
                </p>
                <p>
                    We believe in that using a simple text editor is a good way to learn HTML.
                </p>
                <p>
                    Follow the steps below to create your first web page with VS Code.
                </p>
            </div>
            <div>
                <h5>Step 1: Download and Install VS Code (PC/MAC)</h5>
                <ul>
                    <li>Navigat to the <a href={VSCODE} target="_blank" rel="noopener noreferrer"><strong>URL</strong></a></li>
                    <li>Click on the <strong>Download Button</strong> according to your Operating System</li>
                    <li>Extract the Folder</li>
                    <li>Doubble click on the <strong>Visual Studio Code Icon</strong></li>
                </ul>
            </div>
            <div>
                <h5>Step 2: Create a <strong>Folder</strong> on the Desktop</h5>
                <ul>
                    <li>Right click on the Desktop</li>
                    <li>Create New Folder</li>
                    <li>Rename the Folder Name to <strong>website</strong></li>
                    <li>Drag and Drop<strong>website</strong>Folder to VS Code</li>
                </ul>
            </div>
            <div>
                <h5>Step 3: Create Some Files inside the <strong>website</strong>Folder</h5>
                <ul>
                    <li>Mouse hover on the <strong>Folder called website</strong> on the VS Code</li>
                    <li>Click on <strong>File with Plus Icon</strong></li>
                    <li>Enter your file name <strong>sample.html</strong></li>
                    <li>Open <strong>sample.html</strong> file and enter some html code</li>
                    <li>Enter <strong>!</strong>and hit <strong>tab</strong> from the keyboad</li>
                </ul>
            </div>
            <h3>HTML Tags Cheat Sheet</h3>
            <div className='tc'>
                <img className='pr4 pb4 html-tag' src={HTML_TAG} alt='html tag'/>
            </div>
            <hr />
            <div>
                <h3>References</h3>
            </div>
            <div className='pt4 html-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={HTML_TAGS} target="_blank" rel="noopener noreferrer">
                    HTML tags
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={HTML_FROMS} target="_blank" rel="noopener noreferrer">
                    HTML Forms
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={HTML_MEDIA} target="_blank" rel="noopener noreferrer">
                    HTML Media
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={HTML_QUIZ} target="_blank" rel="noopener noreferrer">
                    HTML Quiz
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={HTML_REFERENCES} target="_blank" rel="noopener noreferrer">
                    HTML References
                </a>
            </div>
            <hr />
            <div>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={MATERIAL_UI} target="_blank" rel="noopener noreferrer">
                    ICONS - Material UI
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={GOOGLE_FONTS} target="_blank" rel="noopener noreferrer">
                    Google Fonts
                </a>
            </div>
           <GoogleAd slot="1541085932" classNames="page-right-side" /> 
        </div>
    )
}
export default resHtml;