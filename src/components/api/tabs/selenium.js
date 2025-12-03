import React from 'react';
import identifier from '../../../utilities/elRef';
import link from '../../../utilities/links.json';
import Footer from '../../../components/footer';
import GoogleAd from '../../GoogleAd';

const selenium = () => {
    const codeBlockStyle = {
        backgroundColor: '#2d2d2d',
        color: '#f8f8f2',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        overflowX: 'auto',
        fontFamily: 'monospace',
        fontSize: '14px',
        lineHeight: '1.6'
    };

    return(
        <div style={{
            maxWidth: '1400px',
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
                    Selenium automates browsers. That's it!
                </h1>
                <h2 style={{
                    fontSize: '28px',
                    marginBottom: '20px',
                    fontWeight: '400',
                    opacity: '0.95'
                }}>
                    What you do with that power is entirely up to you.
                </h2>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '18px',
                    lineHeight: '1.8'
                }}>
                    <p style={{ marginBottom: '15px' }}>
                  Primarily it is for automating web applications for testing purposes,
                  but is certainly not limited to just that.
                </p>
                    <p>
                  Boring web-based administration tasks can (and should) also be automated as well.
                </p>
              </div>
            </div>

            {/* GitHub Links */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href={link.SELENIUM_GITHUB} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#dc3545',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#c82333';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#dc3545';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                  SeleniumHQ on GitHub                 
              </a>
                <a 
                    href={link.SELENIUM_WEBSITE} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#28a745',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#218838';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#28a745';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                    SeleniumHQ Org                 
                </a>
          </div>

            {/* Main Content Container */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Selenium WebDriver Commands
                </h2>
          
                {/* Browser Commands */}
                <div style={{
                    marginBottom: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        Browser Commands
                    </h3>
                    <ol style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>get(String arg0): void</strong> – This method Load a new web page in the current browser window.</li>
                        <li><strong>getTitle(): String</strong> – This method fetches the Title of the current page.</li>
                        <li><strong>getCurrentUrl(): String</strong> – This method fetches the string representing the Current URL which is opened in the browser.</li>
                        <li><strong>getPageSource(): String</strong> – This method returns the Source Code of the page.</li>
                        <li><strong>close(): void</strong> – This method Close only the current window the WebDriver is currently controlling.</li>
                        <li><strong>quit(): void</strong> – This method Closes all windows opened by the WebDriver.</li>
            </ol>
                </div>

                {/* Navigation Commands */}
                <div style={{
                    marginBottom: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        Selenium Navigation Commands
                    </h3>
                    <ol style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>navigate().to(String arg0): void</strong> – This method Loads a new web page in the current browser window.</li>
                        <li><strong>navigate().forward() : void</strong> – This method does the same operation as clicking on the Forward Button of any browser.</li>
                        <li><strong>navigate().back() : void</strong> – This method does the same operation as clicking on the Back Button of any browser.</li>
                        <li><strong>navigate().refresh() : void</strong> – This method Refresh the current page. It neither accepts nor returns anything.</li>
            </ol>
                </div>

                {/* WebElement Commands */}
                <div style={{
                    marginBottom: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        Selenium WebElement Commands
                    </h3>
                    <ol style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>clear( ) : void</strong> – If this element is a text entry element, this will clear the value.</li>
                        <li><strong>sendKeys(CharSequence… keysToSend ) : void</strong> – This simulates typing into an element, which may set its value.</li>
                        <li><strong>click( ) : void</strong> – This simulates the clicking of any element. Accepts nothing as a parameter and returns nothing.</li>
                        <li><strong>isDisplayed( ) : boolean</strong> – This method determines if an element is currently being displayed or not.</li>
                        <li><strong>isEnabled( ) : boolean</strong> – This determines if the element currently is Enabled or not?</li>
                        <li><strong>isSelected( ) : boolean</strong> – Determine whether or not this element is selected or not?</li>
                        <li><strong>submit( ) : void</strong>– This method works well/better than the click() if the current element is a form, or an element within a form.</li>
                        <li><strong>getText( ) : String</strong> – This method will fetch the visible (i.e. not hidden by CSS) innerText of the element.</li>
                        <li><strong>getTagName( ) : String</strong> – This method gets the tag name of this element.</li>
                        <li><strong>getCssvalue( ) : String</strong> – This method Fetch CSS property value of the give element.</li>
                        <li><strong>getAttribute(String Name) : String</strong> – This method gets the value of the given attribute of the element.</li>
                        <li><strong>getSize( ) : Dimension</strong> – This method fetch the width and height of the rendered element.</li>
                        <li><strong>getLocation( ) : Point</strong> – This method locate the location of the element on the page.</li>
            </ol>
                </div>

                {/* Finding Elements */}
                <div style={{
                    marginBottom: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        How to Find Element in Selenium?
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        Finding elements in Selenium WebDriver is done by using the findElement(By.locator()) method
                    </p>
                    <ol style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>id(String id): By</strong> – This is the most efficient and preferred way to find an element in Selenium, as most of the time IDs are unique.</li>
                        <li><strong>name(String name): By</strong>– This is also an efficient way to locate an element but again the problem is same as with ID that UI developer makes it having non-unique names on a page or auto-generating the names.</li>
                        <li><strong>className(String className): By</strong> – This finds elements based on the value of the CLASS attribute.</li>
                        <li><strong>tagName(String name): By</strong> – With this, you can find elements by their TAGNAMES.</li>
                        <li><strong>linkText(String linkText) : By</strong> – With this you can find elements of "a" tags(Link) with the link names.</li>
                        <li><strong>partialLinkText(String linkText) : By</strong> – With this you can find elements of "a" tags(Link) with the partial link names.</li>
                        <li><strong>xpath(String xpathexpression) : By</strong> – It is the most popular and majorly used locating element technique or the easiest way to locate an element in WebDriver.</li>
                        <li><strong>cssSelector(String cssexpression) : By</strong> - Locates elements matching a CSS selector.</li>
            </ol>
                </div>

                {/* CheckBox & Radio Button */}
                <div style={{
                    marginBottom: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        CheckBox & Radio Button Operations
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>By ID</strong></li>
                        <li><strong>With IsSelected</strong></li>
                        <li><strong>With Value</strong></li>
                        <li><strong>By CssSelector</strong></li>
                    </ul>
                </div>

                {/* DropDown Operations */}
                <div style={{
                    marginBottom: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        DropDown & Multiple Select Operations
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        You can choose it by ID, Name, CSS & Xpath, etc.
                    </p>
                    <ol style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>org.openqa.selenium.support.ui.Select</strong> package and to use it we need to create a new Select Object of class Select.</li>
                        <li><strong>Select oSelect = new Select());</strong></li>
                        <li><strong>selectByVisibleText(String arg0) : void</strong> – It is very easy to choose or select an option given under any dropdowns and multiple selection boxes with selectByVisibleText method.</li>
                        <li><strong>selectByIndex(int arg0) : void</strong> – It is almost the same as selectByVisibleText but the only difference here is that we provide the index number of the option here rather the option text.</li>
                        <li><strong>selectByValue(String arg0) : void</strong> – It is again the same as what we have discussed earlier, the only difference in this is that it asks for the value of the option rather than the option text or index.</li>
                        <li><strong>getOptions( ) : List(WebElement)</strong> – This gets the all options belonging to the Select tag.</li>
                        <li><strong>deselectAll( ) : void</strong> – Clear all selected entries. This is only valid when the SELECT supports multiple selections.</li>
                        <li><strong>deselectByIndex(int arg0) : void</strong> – Deselect the option at the given index.</li>
                        <li><strong>deselectByValue(String arg0) : void</strong> – Deselect all options that have a value matching the argument.</li>
                        <li><strong>deselectByVisibleText(String arg0) : void</strong> – Deselect all options that display text matching the argument.</li>
                        <li><strong>isMultiple( ) : boolean</strong> – This tells whether the SELECT element support multiple selecting options at the same time or not.</li>
            </ol>
                </div>

                {/* Handling Web Tables, Frames, And Dynamic Elements */}
                <div style={{
                    marginBottom: '40px',
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        Handling Web Tables, Frames, And Dynamic Elements
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        This tutorial consists of 3 different topics and their handling mechanisms in selenium script.
                    </p>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px',
                        marginBottom: '20px'
                    }}>
                        <li><strong>Web Tables/HTML tables</strong></li>
                        <li><strong>Frames</strong></li>
                        <li><strong>Dynamic elements</strong></li>
                    </ul>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>Approach #1:</h4>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Below is the xpath of one of the cell in html table.</p>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.basic_xpath_5}<br />
                    {identifier.basic_xpath_6}
                  </code>
            </div>        
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>Approach #2:</h4>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>The first approach is best suitable for the table which doesn't change its dimensions and always remains the same. Above approach will not be a perfect solution for dynamically changing web tables.</p>
                        <div style={codeBlockStyle}>
                <code>
                                {identifier.contains}<br />
                                {identifier.contains_1}<br />
                                {identifier.contains_2}<br />
                                {identifier.contains_3}<br />
                  {identifier.contains_4}
                </code>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>Approach #3:</h4>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
              In this section we will learn different ways to handle dynamic element and construct generic Xpath.
                            In few scenarios, element attributes change dynamically. It can be 'id', 'name' etc.
            </p>
                        <div style={codeBlockStyle}>
                <code>
                                {identifier.basic_xpath_1}<br />
                                {identifier.basic_xpath_3}<br />
                  {identifier.basic_xpath_4}
                </code>
            </div>
            </div>
                </div>
            </div>

            {/* XPath Reference Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    List of XPath Locators
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>Basic XPath</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.basic_xpath_1}<br />
                                {identifier.basic_xpath_2}<br />
                                {identifier.basic_xpath_3}<br />
                    {identifier.basic_xpath_4}
                  </code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath for Tables</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.basic_xpath_5}<br />
                    {identifier.basic_xpath_6}
                  </code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Text</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.text}<br />
                    {identifier.text_1}
                  </code>
            </div> 
            </div> 

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Index</h4>
                        <div style={codeBlockStyle}>
                            <code>{identifier.index}</code>
                        </div>
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using AND/OR operator</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.xpath_and_1}<br />
                                {identifier.xpath_and_2}<br />
                                {identifier.xpath_or_1}<br />
                    {identifier.xpath_or_2}
                  </code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Contains Keyword</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.contains}<br />
                                {identifier.contains_1}<br />
                                {identifier.contains_2}<br />
                                {identifier.contains_3}<br />
                    {identifier.contains_4}
                  </code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Start-with Keyword</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.start_with}<br />
                                {identifier.start_with_1}<br />
                    {identifier.start_with_2}
                  </code>
            </div> 
            </div> 

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Parent-Child</h4>
                        <div style={codeBlockStyle}>
                            <code>{identifier.paret_child}</code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Following Siblings</h4>
                        <div style={codeBlockStyle}>
                            <code>{identifier.following_siblings}</code>
                        </div>
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using ANCESTOR</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.xpath_ancestor_parent}<br />
                                {identifier.xpath_ancestor_parentNode}<br />
                                {identifier.xpath_ancestor_child}<br />
                                {identifier.xpath_ancestor_childNode}<br />
                                {identifier.xpath_descendant_axis}<br />
                                {identifier.xpath_descendant_path}<br />
                    {identifier.ancestor}
                  </code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Parent Axis</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.xpath_parent_axis}<br />
                    {identifier.xpath_parent_path}
                  </code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Following Axis</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.xpath_following_axis}<br />
                    {identifier.xpath_following_path}
                  </code>
            </div> 
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Following sibling Axis</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.xpath_following_sibling_axis}<br />
                    {identifier.xpath_following_sibling_path}
                  </code>
            </div>
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>XPath using Preceding Axis</h4>
                        <div style={codeBlockStyle}>
                  <code>
                                {identifier.xpath_precending_axis}<br />
                    {identifier.xpath_precending_path}
                  </code>
            </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    justifyContent: 'center',
                    marginTop: '30px'
                }}>
                    <a 
                        href={link.XPATH_LOCATOR_1} 
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
                  Locator Strategy 1
                </a>
                    <a 
                        href={link.XPATH_LOCATOR_2} 
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
                  Locator Strategy 2
                </a>
            </div>
            </div>

            {/* Actions Class Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Class Actions
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '20px'
                }}>
                    <a 
                        href={link.ACTION_1}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#00416A',
                            fontWeight: '600',
                            border: '1px solid #e0e0e0',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#e7f3ff';
                            e.currentTarget.style.borderColor = '#00416A';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.borderColor = '#e0e0e0';
                        }}
                    >
                        <strong>Actions(Keyboard keyboard)</strong>
                    </a>
                    <a 
                        href={link.ACTION_2}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#00416A',
                            fontWeight: '600',
                            border: '1px solid #e0e0e0',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#e7f3ff';
                            e.currentTarget.style.borderColor = '#00416A';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.borderColor = '#e0e0e0';
                        }}
                    >
                        <strong>Actions(Keyboard keyboard, Mouse mouse)</strong>
                    </a>
                    <a 
                        href={link.ACTION_3}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#00416A',
                            fontWeight: '600',
                            border: '1px solid #e0e0e0',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#e7f3ff';
                            e.currentTarget.style.borderColor = '#00416A';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.borderColor = '#e0e0e0';
                        }}
                    >
                        <strong>Actions(WebDriver driver)</strong>
                    </a>
                </div>
                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    marginTop: '20px'
                }}>
                    <h4 style={{ color: '#00416A', fontSize: '20px', marginBottom: '15px', fontWeight: '600' }}>Common Actions Methods:</h4>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px',
                        columns: '2',
                        columnGap: '30px'
                    }}>
                        <li><strong>build() : Action</strong> - Generates a composite action containing all actions so far, ready to be performed</li>
                        <li><strong>click() : Action</strong> – Clicks at the current mouse location</li>
                        <li><strong>click(WebElement target) : Action</strong> – Clicks in the middle of the given element</li>
                        <li><strong>clickAndHold() : Action</strong> – Clicks (without releasing) at the current mouse location</li>
                        <li><strong>clickAndHold(WebElement target) : Action</strong> – Clicks (without releasing) in the middle of the given element</li>
                        <li><strong>contextClick() : Action</strong> – Performs a context-click at the current mouse location</li>
                        <li><strong>contextClick(WebElement target) : Action</strong> – Performs a context-click at middle of the given element</li>
                        <li><strong>doubleClick() : Action</strong> – Performs a double-click at the current mouse location</li>
                        <li><strong>doubleClick(WebElement target) : Action</strong> – Performs a double-click at middle of the given element</li>
                        <li><strong>dragAndDrop(WebElement source, WebElement target) : Action</strong> – A convenience method that performs click-and-hold at the location of the source element, moves to the location of the target element, then releases the mouse</li>
                        <li><strong>dragAndDropBy(WebElement source, int xOffset, int yOffset) : Action</strong> – A convenience method that performs click-and-hold at the location of the source element, moves by a given offset, then releases the mouse</li>
                        <li><strong>keyDown(java.lang.CharSequence key) : Action</strong> – Performs a modifier key press</li>
                        <li><strong>keyDown(WebElement target, java.lang.CharSequence key) : Action</strong> – Performs a modifier key press after focusing on an element</li>
                        <li><strong>keyUp(java.lang.CharSequence key) : Action</strong> – Performs a modifier key release</li>
                        <li><strong>keyUp(WebElement target, java.lang.CharSequence key) : Action</strong> – Performs a modifier key release after focusing on an element</li>
                        <li><strong>moveByOffset(int xOffset, int yOffset) : Action</strong> – Moves the mouse from its current position (or 0,0) by the given offset</li>
                        <li><strong>moveToElement(WebElement target) : Action</strong> – Moves the mouse to the middle of the element</li>
                        <li><strong>moveToElement(WebElement target, int xOffset, int yOffset) : Action</strong> – Moves the mouse to an offset from the top-left corner of the element</li>
                        <li><strong>pause(java.time.Duration duration) : Action</strong></li>
                        <li><strong>pause(long pause) : Action</strong> – Performs a pause</li>
                        <li><strong>perform() : Action</strong> – A convenience method for performing the actions without calling build() first</li>
                        <li><strong>release() : Action</strong> – Releases the depressed left mouse button at the current mouse location</li>
                        <li><strong>release(WebElement target) : Action</strong> – Releases the depressed left mouse button, in the middle of the given element</li>
                        <li><strong>sendKeys(java.lang.CharSequence... keys) : Action</strong> – Sends keys to the active element</li>
                        <li><strong>sendKeys(WebElement target, java.lang.CharSequence... keys) : Action</strong> – Equivalent to calling: Actions.click(element).sendKeys(keysToSend)</li>
                        <li><strong>tick(Action action) : Action</strong></li>
                        <li><strong>tick(Interaction... actions) : Action</strong></li>
                    </ul>
                </div>
            </div>

            {/* CSS Selectors Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    List of CSS Selectors
                </h2>
                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h4 style={{ color: '#00416A', fontSize: '20px', marginBottom: '15px', fontWeight: '600' }}>Basic CSS</h4>
                    <div style={codeBlockStyle}>
                  <code>
                            {identifier.basic_css_1}<br />
                            {identifier.basic_css_2}<br />
                            {identifier.basic_css_3}<br />
                            {identifier.basic_css_4}<br />
                            {identifier.basic_css_5}<br />
                    {identifier.basic_css_6}
                  </code>
            </div>
                </div>
            </div>

            {/* Wait Commands Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Wait Commands in Selenium
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#333',
                    marginBottom: '30px',
                    textAlign: 'center'
                }}>
                    There are 3 types of Synchronization or Wait statement in selenium WebDriver:
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px',
                    marginBottom: '40px'
                }}>
                    {/* Implicit Wait */}
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '2px solid #00416A'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Implicit Wait
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Sets internally a timeout that will be used for all consecutive Web Element searches. It will try look up the element repeatedly for the specified amount of time before throwing a NoSuchElementException if the element could not have been found.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                    Implicit Wait directs the Selenium WebDriver to wait for a certain measure of time before throwing an exception. Once this time is set, WebDriver will wait for the element before the exception occurs.
                  </p>
                        <div style={codeBlockStyle}>
                            <code>driver.manage().timeouts().implicitlywait(20L,Timeunit.sec);</code>
                  </div>
                    </div>

                    {/* Explicit Wait */}
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '2px solid #00416A'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Explicit Wait
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Just Wait is a one-timer used for a particular search. I can set it up wait, for any condition I might like. Usually, I can use some of the prebuilt Expected Conditions to wait for elements to become clickable, visible, invisible, etc.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                    By using Explicit Wait command, the WebDriver is directed to wait until a certain condition occurs before proceeding with executing the code.
                  </p>
                        <div style={{ marginBottom: '15px' }}>
                            <strong style={{ color: '#00416A' }}>Expected Conditions:</strong>
                            <ul style={{
                                fontSize: '14px',
                                lineHeight: '1.8',
                                color: '#333',
                                paddingLeft: '20px',
                                marginTop: '10px'
                            }}>
                    <li>alertIsPresent()</li>
                    <li>elementToBeClickable()</li>
                    <li>presenceOfElementLocated()</li>
                                <li>visibilityOfElementLocated()</li>
                    <li>textToBePresentInElement()</li>
                    <li>titleIs()</li>
                                <li>And more...</li>
                  </ul>
                        </div>
                        <div style={codeBlockStyle}>
                      <code>
                          WebDriverWait wait = new WebDriverWait(driver,30);<br />
                          wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(text(),'COMPOSE')]")));
                      </code>
                  </div>
                    </div>

                    {/* Fluent Wait */}
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '2px solid #00416A'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Fluent Wait
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Let's say I have an element which sometimes appears in just 1 second and some time it takes minutes to appear. In that case, I have been using fluent wait, as this will try to find element again and again until it finds it or until the final timer runs out.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            The Fluent Wait command defines the maximum amount of time for Selenium WebDriver to wait for a certain condition to appear. It also defines the frequency with which WebDriver will check if the condition appears.
                  </p>
                        <div style={codeBlockStyle}>
                      <code>
                                Wait wait = new FluentWait (WebDriver)(driver)<br />
                                .withTimeout(50, TimeUnit.SECONDS)<br />
                                .pollingevery(3, TimeUnit.SECONDS)<br />
                        .ignoring(NoSuchElementException.class); 
                      </code>
                  </div>
                    </div>
                </div>
            </div>

            {/* Exception Handling Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Exception Handling in Selenium
                </h2>

                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    marginBottom: '30px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '15px',
                        fontWeight: 'bold'
                    }}>
                What is an Exception?
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '15px'
                    }}>
                        "Exception" is a standard term used by software programmers regardless of any programming language that is used to write the code. "Exception" as the name suggests is an unusual event or an uncommon case that disrupts the normal flow of program execution.
              </p>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '15px'
                    }}>
                        The Exceptions are classified mainly into two types:
                    </p>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>Checked Exceptions:</strong> These exceptions are handled while writing the code itself before the compilation of the code, and hence they are examined at the compile time.</li>
                        <li><strong>Unchecked Exceptions:</strong> These exceptions get thrown at run time and are more catastrophic as compared to Checked Exception.</li>
                    </ul>
                </div>

                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    marginBottom: '30px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '15px',
                        fontWeight: 'bold'
                    }}>
                  10 Common Exceptions in Selenium WebDriver
                    </h3>
                    <ol style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>ElementNotVisibleException:</strong> In spite of the element being present in the DOM, it is not visible (can not be interactive).</li>
                        <li><strong>ElementNotSelectableException:</strong> An element is disabled (can not be clicked/selected) in spite of being present in the DOM</li>
                        <li><strong>NoSuchElementException:</strong> Webdriver is not able to determine the elements during runtime</li>
                        <li><strong>NoSuchFrameException:</strong> Webdriver attempts to switch to an invalid frame, which is unavailable</li>
                        <li><strong>NoAlertPresentException:</strong> Webdriver is trying to switch to an invalid alert, which is unavailable</li>
                        <li><strong>NoSuchWindowException:</strong> Webdriver is trying to switch to an invalid window, which is unavailable</li>
                        <li><strong>StaleElementReferenceException:</strong> The referenced element is no longer present on the DOM page</li>
                        <li><strong>SessionNotFoundException:</strong> Webdriver is acting immediately after 'quitting' the browser</li>
                        <li><strong>TimeoutException:</strong> The command did not complete in the specified time</li>
                        <li><strong>WebDriverException:</strong> Webdriver is acting immediately after 'closing' the browser</li>
                </ol>
                </div>

                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    marginBottom: '30px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '15px',
                        fontWeight: 'bold'
                    }}>
                  Handling Exceptions In Selenium WebDriver
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                  Following are a few standard ways using which one can handle Exceptions in Selenium WebDriver:
                </p>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>Try-catch:</h4>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
                            This method can catch Exceptions by using a combination of the try and catch keywords.
                        </p>
                        <div style={codeBlockStyle}>
                      <code>
                                try {'{'}<br />
                                &nbsp;&nbsp;//Some code -<br />
                                {'}'}<br />
                                catch(Exception e) {'{'}<br />
                                &nbsp;&nbsp;//Code for Handling the exception -<br />
                            {'}'}
                      </code>
                  </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>Multiple catch blocks:</h4>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
                            There are various types of Exceptions, and one can expect more than one exception from a single block of code.
                        </p>
                        <div style={codeBlockStyle}>
                      <code>
                                try {'{'}<br />
                                &nbsp;&nbsp;//Some code -<br />
                                {'}'}<br />
                                catch(ExceptionType1 e1) {'{'}<br />
                                &nbsp;&nbsp;//Code for Handling the Exception 1 -<br />
                                {'}'}<br />
                                catch(ExceptionType2 e2) {'{'}<br />
                                &nbsp;&nbsp;//Code for Handling the Exception 2 -<br />
                        {'}'}
                      </code>
                  </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>Throw/Throws:</h4>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
                            When a programmer wants to generate an Exception explicitly, the Throw keyword is used.
                        </p>
                        <div style={codeBlockStyle}>
                    <code>
                                public static void anyFunction() throws Exception {'{'}<br />
                                &nbsp;&nbsp;//try {'{'} write your code here<br />
                                {'}'}<br />
                                &nbsp;&nbsp;catch(Exception e) {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;//Do whatever you wish to do here<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;//Now throw the exception back to the system<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;//throw(e);<br />
                                &nbsp;&nbsp;{'}'}<br />
                        {'}'}
                    </code>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>Finally:</h4>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
                            The Final keyword is used to create a block of code under the try block. This final code block always executes irrespective of the occurrence of an exception.
                        </p>
                        <div style={codeBlockStyle}>
                      <code>
                                try {'{'}<br />
                                &nbsp;&nbsp;//Protected code -<br />
                                {'}'}<br />
                                catch(ExceptionType1 e1) {'{'}<br />
                                &nbsp;&nbsp;//Catch block -<br />
                                {'}'}<br />
                                finally {'{'}<br />
                                &nbsp;&nbsp;//The finally block always executes. -<br />
                            {'}'}
                      </code>
                        </div>
                    </div>
                </div>

                <div style={{
                    padding: '25px',
                    backgroundColor: '#e7f3ff',
                    borderRadius: '8px',
                    borderLeft: '4px solid #00416A'
                }}>
                    <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '15px', fontWeight: '600' }}>Methods to display Exception Information:</h4>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>printStackTrace():</strong> It prints the stack trace, name of the exception, and other useful description</li>
                        <li><strong>toString():</strong> It returns a text message describing the exception name and description</li>
                        <li><strong>getMessage():</strong> It displays the description of the exception</li>
              </ul>
            </div>
            </div>

            {/* FAQ Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Frequently Asked Questions
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '25px'
                }}>
                    <div style={{
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>
                            How do you launch IE | Chrome | Firefox (gecko driver) browser?
                        </h4>
                        <div style={codeBlockStyle}>
                    <code>
                                String basPath = System.getProperty("user.dir");<br />
                                String chromePath = basPath + "\\chromedriver.exe";<br />
                                System.setProperty("webdriver.chrome.driver", chromePath);<br />
                      WebDriver driver = new ChromeDriver();
                    </code>
              </div>
              </div>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>
                            Difference between implicitly Wait, Explicit wait & Fluent Wait
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}>
                            <strong>Implicit Wait</strong> - sets internally a timeout that will be used for all consecutive Web Element searches.<br />
                            <strong>Explicit Wait</strong> - or just Wait is a one-timer used for a particular search. I can set it up wait, for any condition I might like.<br />
                            <strong>Fluent Wait</strong> - Let's say I have an element which sometimes appears in just 1 second and some time it takes minutes to appear.
                </p>
              </div>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>
                            What is the difference between find element and find elements?
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}>
                            <strong>find element()</strong> – is used to find the one web element. It returns only one WebElement type.<br />
                            <strong>find elements()</strong> - is used to find more than one web element. It returns List of WebElements.
                </p>
              </div>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>
                            Difference between single and double slash in X-path?
                        </h4>
                        <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}>
                            <strong>Absolute Path: Single slash '/'</strong> - Start selection from the document node, Used to identify the immediate child<br />
                            <strong>Relative Path: Double Slash '//'</strong> - Start selection matching anywhere in the document & search in the entire structure. By writing Relative path can capture the Dynamic Element of the object.
                </p>
                    </div>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>
                            How to find total number of iFrames on a web page | Switch to Frames
                        </h4>
                        <div style={codeBlockStyle}>
                  <code>
                                <strong>Switch between Window</strong><br />
                                Private void handlingMultipleWindows(String windowTitle) {'{'}<br />
                                &nbsp;&nbsp;Set{'<'}String{'>'} windows = driver.getWindowHandles();<br />
                                &nbsp;&nbsp;for (String window : windows) {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().window(window);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;if (driver.getTitle().contains(windowTitle)) {'{'} return; {'}'}<br />
                                &nbsp;&nbsp;{'}'}<br />
                                {'}'}<br />
                    <br />
                                <strong>Switch by frame name</strong><br />
                                driver.switchTo().frame("iframe1");<br />
                    <br />
                                <strong>Switch by frame ID</strong><br />
                    driver.switchTo().frame("IF1");<br />
                    <br />
                                <strong>Switch back to the main window</strong><br />
                                driver.switchTo().defaultContent();
                  </code>
                </div>
              </div>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', fontWeight: '600' }}>
                            How do you simulate scroll down action?
                        </h4>
                        <div style={codeBlockStyle}>
                  <code>
                                JavascriptExecutor jsx = (JavascriptExecutor)driver;<br />
                                jsx.executeScript("window.scrollBy(0,4500)", "");<br />
                                Thread.sleep(3000);<br />
                                jsx.executeScript("window.scrollBy(450,0)", "");
                  </code>
              </div>
              </div>
              </div>
              </div>
              
            {/* Selenium Grid Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Selenium Grid
                </h2>
                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    marginBottom: '20px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '15px',
                        fontWeight: 'bold'
                    }}>
                        What is Selenium Grid?
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333'
                    }}>
                Selenium-Grid allows you to run your tests on different machines against different browsers in parallel. That is, running multiple tests at the same time against different machines, different browsers, and operating systems. Essentially, Selenium-Grid support distributed test execution. It allows for running your tests in a distributed test execution environment.
              </p>
                </div>
                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '15px',
                        fontWeight: 'bold'
                    }}>
                        Configuration of Selenium Grid
                    </h3>
                    <div style={codeBlockStyle}>
                  <code>
                            <strong>Starting a hub</strong><br />
                            java -jar selenium-server-standalone-3.1.2.jar -role hub<br />
                    <br />
                            <strong>Registering a node to the hub</strong><br />
                            java -jar selenium-server-standalone-3.1.2.jar -role webdriver hub<br />
                            http://localhost:4444/grid/register -port 5555<br />
                    <br />
                            <strong>Setting up supported browser names</strong><br />
                            java -jar selenium-server-standalone-3.1.2.jar -role webdriver hub<br />
                            http://localhost:4444/grid/register -port 5555 -browser browserName=firefox -browser<br />
                            browserName=iexplore -browser browserName=chrome<br />
                    <br />
                            <strong>Setting up max instances</strong><br />
                            java -jar selenium-server-standalone-3.1.2.jar -role webdriver r hub<br />
                            http://localhost:4444/grid/register -port 5555<br />
                            -browser browserName=firefox, maxInstances=2<br />
                            -browser browserName=iexplore, maxInstances=2<br />
                            -browser browserName=chrome, maxInstances=2 -maxSession 6<br />
                    <br /> 
                            <strong>Setting up chrome|Firfox|IE driver</strong><br />
                            -Dwebdriver.chrome.driver=Cl\Softwares\chromedriver.exe<br />
                            -Dwebdriver.gecko.driver=Cl\Softwares\geckoDriverServer.exe<br />
                            -Dwebdriver.ie.driver=Cl\Softwares\IEDriverServer.exe<br />
                    <br />
                            <strong>Final Command</strong><br />
                            Java<br />
                            -Dwebdriver.chrome.driver= C:\Softwares\chromedriver.exe<br />
                            -Dwebdriver.gecko.driver=Cl\Softwares\geckoDriverServer.exe<br />
                            -Dwebdriver.ie.driver= C:\Softwares\IEDriverServer.exe<br />
                            -jar selenium-server-standalone-2.32.0.jar -role webdriver<br />
                            -hub http://localhost:4444/grid/register -port 5555 -browser<br />
                            browserName=firefox,maxInstances=2 -browser browserName=iexplore -browser<br />
                            browserName=chrome,maxInstances=3 -maxSession 5
                  </code>
              </div>
              </div>
            </div>

            {/* Java & TestNG Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '36px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    JAVA & TestNG
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '25px'
                }}>
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            TestNG annotations vs JUnit annotations
                        </h3>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
                            <strong>TestNG:</strong> @Test,@Parameters,@Listeners,@BeforeSuite,@AfterSuite,@BeforeTest,@AfterTest, @DataProvider,@BeforeGroups,@AfterGroups,@BeforeClass,@AfterClass, @BeforeMethod, @AfterMethod, @Factory
                        </p>
                        <p style={{ fontSize: '16px', color: '#333' }}>
                            <strong>JUnit:</strong> @Test @Before @After @AfterClass @BeforeClass @Ignore @Runwith
                </p>
              </div>

                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            6 assertions of TestNG
                        </h3>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '2',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>assertEquals</li>
                            <li>assertNotEquals</li>
                            <li>assertTrue</li>
                            <li>assertFalse</li>
                            <li>assertNull</li>
                            <li>assertNotNull</li>
                        </ul>
                    </div>

                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            In TestNG how can you disable a test?
                        </h3>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
                            To disable the test case, you can use the following annotation:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '2',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>@Test(enabled = false)</li>
                            <li>Exclude key word in testNG.xml file inside the method</li>
                        </ul>
              </div>

                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            How do you read data from excel?
                        </h3>
                        <div style={codeBlockStyle}>
                    <code>
                                File f = new File("c://excel.xlsx");<br />
                                FileInputStream fis = new FileInputStream (f);<br />
                                Workbook wb = WorkbookFactory.create(fis);<br />
                                Sheet s = wb.getSheet("sheetName");<br />
                                Row r = s.getRow(0);<br />
                      Cell c = r.getCell(0);
                    </code>
                        </div>
                    </div>
                </div>
              </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    );
  }   
export default selenium;
