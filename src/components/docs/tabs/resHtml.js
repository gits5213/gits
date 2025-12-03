import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import HTML_LOGO from '../../../images/tabs/htmlLogo.png';
import HTML_TAG from '../../../images/tabs/htmlTags.jpeg';
import Footer from '../../../components/footer';

const resHtml = () => {
    const htmlLinks = [
        { name: 'HTML tags', url: link.HTML_TAGS },
        { name: 'HTML Forms', url: link.HTML_FROMS },
        { name: 'HTML Media', url: link.HTML_MEDIA },
        { name: 'HTML Quiz', url: link.HTML_QUIZ },
        { name: 'HTML References', url: link.HTML_REFERENCES }
    ];

    return(
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                color: '#ffffff',
                padding: '60px 20px',
                textAlign: 'center',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
                <h1 style={{
                    fontSize: '48px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    HTML
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    The Standard Markup Language for Creating Web Pages
                </p>
            </div>

            {/* Image Section */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src={HTML_LOGO} 
                    alt='HTML Logo'
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            {/* Main Content */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px',
                    fontWeight: '500'
                }}>
                    HTML is the standard markup language for creating Web pages.
                </p>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    What is HTML?
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                    <li>HTML stands for Hyper Text Markup Language</li>
                    <li>HTML is the standard markup language for creating Web pages</li>
                    <li>HTML describes the structure of a Web page</li>
                    <li>HTML consists of a series of elements</li>
                    <li>HTML elements tell the browser how to display the content</li>
                    <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Example
                </h2>
                <div style={{
                    backgroundColor: '#2d2d2d',
                    color: '#f8f8f2',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '30px',
                    overflowX: 'auto',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.6'
                }}>
                    <code>
                        {'<'}!DOCTYPE html{'>'} <br />
                        {'<'}html{'>'} <br />
                        &nbsp;&nbsp;{'<'}head{'>'} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<'}title{'>'} Page Title {'</'}title{'>'} <br />
                        &nbsp;&nbsp;{'</'}head{'>'} <br />
                        &nbsp;&nbsp;{'<'}body{'>'} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<'}h1{'>'} My First Heading {'</'}h1{'>'} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<'}p{'>'}My First Paragraph. {'</'}p{'>'} <br />
                        &nbsp;&nbsp;{'</'}body{'>'} <br />
                        {'</'}html{'>'}
                    </code>
                </div>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Example Explained
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                    <li>The <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}!DOCTYPE html{'>'}</code> declaration defines that this document is an HTML5 document</li>
                    <li>The <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}html{'>'}</code> element is the root element of an HTML page</li>
                    <li>The <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}head{'>'}</code> element contains meta information about the HTML page</li>
                    <li>The <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}title{'>'}</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
                    <li>The <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}body{'>'}</code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
                    <li>The <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}h1{'>'}</code> element defines a large heading</li>
                    <li>The <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}p{'>'}</code> element defines a paragraph</li>
                </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    What is an HTML Element?
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    An HTML element is defined by a start tag, some content, and an end tag:
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    fontFamily: 'monospace',
                    fontSize: '16px'
                }}>
                    <code style={{ color: '#00416A' }}>{'<'}tagname{'>'}</code>Content goes here...<code style={{ color: '#00416A' }}>{'</'}tagname{'>'}</code>
                </div>
            </div>

            {/* HTML Editors Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    HTML Editors
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    A simple text editor is all you need to learn HTML. Learn HTML Using VS Code. Web pages can be created and modified by using professional HTML editors. However, for learning HTML we recommend a simple text editor like VS Code (PC) or (Mac). We believe in that using a simple text editor is a good way to learn HTML. Follow the steps below to create your first web page with VS Code.
                </p>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginTop: '20px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600'
                    }}>
                        Step 1: Download and Install VS Code (PC/MAC)
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li>Navigate to the <a href={link.VSCODE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}><strong>URL</strong></a></li>
                        <li>Click on the <strong>Download Button</strong> according to your Operating System</li>
                        <li>Extract the Folder</li>
                        <li>Double click on the <strong>Visual Studio Code Icon</strong></li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginTop: '20px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600'
                    }}>
                        Step 2: Create a Folder on the Desktop
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li>Right click on the Desktop</li>
                        <li>Create New Folder</li>
                        <li>Rename the Folder Name to <strong>website</strong></li>
                        <li>Drag and Drop <strong>website</strong> Folder to VS Code</li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginTop: '20px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600'
                    }}>
                        Step 3: Create Some Files inside the website Folder
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li>Mouse hover on the <strong>Folder called website</strong> on the VS Code</li>
                        <li>Click on <strong>File with Plus Icon</strong></li>
                        <li>Enter your file name <strong>sample.html</strong></li>
                        <li>Open <strong>sample.html</strong> file and enter some html code</li>
                        <li>Enter <strong>!</strong> and hit <strong>tab</strong> from the keyboard</li>
                    </ul>
                </div>
            </div>

            {/* HTML Tags Cheat Sheet */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '30px',
                    fontWeight: 'bold'
                }}>
                    HTML Tags Cheat Sheet
                </h2>
                <img 
                    src={HTML_TAG} 
                    alt='HTML Tags Cheat Sheet'
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
            </div>

            {/* References */}
            <div style={{
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    References
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px',
                    marginBottom: '30px'
                }}>
                    {htmlLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '12px 20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href={link.MATERIAL_UI}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            backgroundColor: '#00416A',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        ICONS - Material UI
                    </a>
                    <a
                        href={link.GOOGLE_FONTS}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            backgroundColor: '#00416A',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#005a8a';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Google Fonts
                    </a>
                </div>
            </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resHtml;
