import React from 'react';
import GoogleAd from '../../GoogleAd';
import helpLogo from '../../../images/tabs/helpLogo.png';
import link from '../../../utilities/links.json';
import Footer from '../../../components/footer';

const help = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Help</h3>
            </div>
            <div className='tc'>
                <img className='help-logo' src={helpLogo} alt='help Logo'/>
            </div>
            <section>
                <div>
                    <ul>
                        <li>
                            <a href={link.chatGPT} target="_blank" rel="noopener noreferrer">
                                OpenAI - ChatGPT              
                            </a>
                        </li>
                        <li>
                            <a href={link.roadmap} target="_blank" rel="noopener noreferrer">
                                Development Roadmap             
                            </a>
                        </li>
                        <li>
                            <a href={link.htmlCompiler} target="_blank" rel="noopener noreferrer">
                                HTML Playground          
                            </a>
                        </li>
                        <li>
                            <a href={link.codePedHtmlCssJs} target="_blank" rel="noopener noreferrer">
                                HTML CSS Javascript Playground           
                            </a>
                        </li>
                        <li>
                            <a href={link.codePenHtmlCssJS} target="_blank" rel="noopener noreferrer">
                                HTML CSS Javascript Playground           
                            </a>
                        </li>
                        <li>
                            <a href={link.javaCompiler} target="_blank" rel="noopener noreferrer">
                                JAVAV Playground          
                            </a>
                        </li>
                        <li>
                            <a href={link.cSharpCompiler} target="_blank" rel="noopener noreferrer">
                                C# Playground          
                            </a>
                        </li>
                        <li>
                            <a href={link.pythonCompiler} target="_blank" rel="noopener noreferrer">
                                Python Playground          
                            </a>
                        </li>
                        <li>
                            <a href={link.javascriptCompiler} target="_blank" rel="noopener noreferrer">
                                Javascript Playground          
                            </a>
                        </li>
                    </ul>
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
export default help;