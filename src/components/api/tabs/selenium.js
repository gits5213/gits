import React from 'react';
import identifier from '../../../utilities/elRef';
import link from '../../../utilities/links.json';
import GoogleAd from '../../GoogleAd';

const selenium = () => {
    return(
        <main className = 'page-tab-body'>
          <h3>Selenium API</h3>
          <section class='hero homepage'>
              <h1>Selenium automates browsers. That's it!</h1>
              <h1 class='sub-header'>What you do with that power is entirely up to you.</h1>
              <div class='header-description'>
                <p class='body-large'>
                  Primarily it is for automating web applications for testing purposes,
                  but is certainly not limited to just that.
                </p>
                <p class='body-large'>
                  Boring web-based administration tasks can (and should) also be automated as well.
                </p>
              </div>
          </section>
          <div className='tc pt3'>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.SELENIUM_GITHUB} target="_blank" rel="noopener noreferrer">
                  <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                  SeleniumHQ on GitHub                 
              </a>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.SELENIUM_WEBSITE} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    SeleniumHQ Org                 
                </a>
          </div>

          <div>
            <h1>Selenium WebDriver Commands</h1>
          
            <ol>
              <h5><u>Browser Commands</u></h5>
              <li>
                <strong> get(String arg0): void </strong> – This method Load a new web page in the current browser window.
              </li>
              <li>
                <strong>getTitle(): String</strong> – This method fetches the Title of the current page.
              </li>
              <li>
                <strong>getCurrentUrl(): String</strong> – This method fetches the string representing the Current URL which is opened in the browser.
              </li>
              <li>
                <strong>getPageSource(): String</strong> – This method returns the Source Code of the page.
              </li>
              <li>
                <strong>close(): void</strong> – This method Close only the current window the WebDriver is currently controlling. 
              </li>
              <li>
                <strong>quit(): void</strong> – This method Closes all windows opened by the WebDriver. 
              </li>
            </ol>
            <ol>
              <h5><u>Selenium Navigation Commands</u></h5>
              <li>
                <strong>navigate().to(String arg0): void</strong> – This method Loads a new web page in the current browser window.
              </li>
              <li>
                <strong>navigate().forward() : void</strong> – This method does the same operation as clicking on the Forward Button of any browser.
              </li>
              <li>
                <strong>navigate().back() : void</strong> – This method does the same operation as clicking on the Back Button of any browser. 
              </li>
              <li>
                <strong>navigate().refresh() : void</strong> – This method Refresh the current page. It neither accepts nor returns anything.
              </li>
            </ol>
            <ol>
              <h5><u>Selenium WebElement Commands</u></h5>
              <li>
                <strong>clear( ) : void </strong> – If this element is a text entry element, this will clear the value. 
              </li>
              <li>
                <strong>sendKeys(CharSequence… keysToSend ) : void</strong> – This simulates typing into an element, which may set its value.
              </li>
              <li>
                <strong>click( ) : void</strong> – This simulates the clicking of any element. Accepts nothing as a parameter and returns nothing.
              </li>
              <li>
                <strong>isDisplayed( ) : boolean</strong> – This method determines if an element is currently being displayed or not.
              </li>
              <li>
                <strong>isEnabled( ) : boolean</strong> – This determines if the element currently is Enabled or not?
              </li>
              <li>
                <strong>isSelected( ) : boolean</strong> – Determine whether or not this element is selected or not?
              </li>
              <li>
                <strong>submit( ) : void</strong>– This method works well/better than the click() if the current element is a form, or an element within a form. 
              </li>
              <li>
                <strong>getText( ) : String</strong> – This method will fetch the visible (i.e. not hidden by CSS) innerText of the element.
              </li>
              <li>
                <strong>getTagName( ) : String</strong> – This method gets the tag name of this element. 
              </li>
              <li>
                <strong>getCssvalue( ) : String</strong> – This method Fetch CSS property value of the give element.
              </li>
              <li>
                <strong>getAttribute(String Name) : String</strong> – This method gets the value of the given attribute of the element.
              </li>
              <li>
                <strong>getSize( ) : Dimension</strong> – This method fetch the width and height of the rendered element. 
              </li>
              <li>
                <strong>getLocation( ) : Point</strong> – This method locate the location of the element on the page.
              </li>
            </ol>
            <h5><u>How to Find Element in Selenium? Finding elements in Selenium WebDriver is done by using the findElement(By.locator()) method</u></h5>
            <ol>
              <li>
                <strong>id(String id): By</strong> – This is the most efficient and preferred way to find an element in Selenium, as most of the time IDs are unique.
              </li>
              <li>
                <strong>name(String name): By </strong>– This is also an efficient way to locate an element but again the problem is same as with ID that UI developer makes it having non-unique names on a page or auto-generating the names. 
              </li>
              <li>
                <strong>className(String className): By</strong> – This finds elements based on the value of the CLASS attribute.
              </li>
              <li>
                <strong>tagName(String name): By</strong> – With this, you can find elements by their TAGNAMES.
              </li>
              <li>
                <strong>linkText(String linkText) : By</strong> – With this you can find elements of “a” tags(Link) with the link names. 
              </li>
              <li>
                <strong>partialLinkText(String linkText) : By</strong> – With this you can find elements of “a” tags(Link) with the partial link names.
              </li>
              <li>
                <strong>xpath(String xpathexpression) : By</strong> – It is the most popular and majorly used locating element technique or the easiest way to locate an element in WebDriver. 
              </li>
              <li>
                <strong>cssSelector(String cssexpression) : By</strong> - Locates elements matching a CSS selector.
              </li>
            </ol>
            <ol>
              <h5><u>CheckBox {'&'} Radio Button Operations</u></h5>
              <li>
                <strong>By ID</strong>
              </li>
              <li>
                <strong>With IsSelected</strong>
              </li>
              <li>
                <strong>With Value</strong>
              </li>
              <li>
                <strong>By CssSelector</strong>
              </li>
            </ol>
            <ol>
              <h5><u>DropDown {'&'} Multiple Select Operations | You can choose it by ID, Name, CSS {'&'} Xpath, etc.</u></h5>
              <li>
                <strong>org.openqa.selenium.support.ui.Select</strong> package and to use it we need to create a new Select Object of class Select.
              </li>
              <li>
                <strong>Select oSelect = new Select());</strong>
              </li>
              <li>
                <strong>selectByVisibleText(String arg0) : void</strong> – It is very easy to choose or select an option given under any dropdowns and multiple selection boxes with selectByVisibleText method. 
              </li>
              <li>
                <strong>selectByIndex(int arg0) : void</strong> – It is almost the same as selectByVisibleText but the only difference here is that we provide the index number of the option here rather the option text.
              </li>
              <li>
                <strong>selectByValue(String arg0) : void</strong> – It is again the same as what we have discussed earlier, the only difference in this is that it asks for the value of the option rather than the option text or index.
              </li>
              <li>
                <strong>getOptions( ) : List(WebElement)</strong> – This gets the all options belonging to the Select tag. 
              </li>
              <li>
                <strong>deselectAll( ) : void</strong> – Clear all selected entries. This is only valid when the SELECT supports multiple selections.
              </li>
              <li>
                <strong>deselectByIndex(int arg0) : void</strong> – Deselect the option at the given index.
              </li>
              <li>
                <strong>deselectByValue(String arg0) : void</strong> – Deselect all options that have a value matching the argument.
              </li>
              <li>
                <strong>deselectByVisibleText(String arg0) : void</strong> – Deselect all options that display text matching the argument.
              </li>
              <li>
                <strong>isMultiple( ) : boolean</strong> – This tells whether the SELECT element support multiple selecting options at the same time or not.
              </li>
            </ol>
            <ol>
              <h5><u>Handling Web Tables, Frames, And Dynamic Elements</u></h5>
              <p>This tutorial consists of 3 different topics and their handling mechanisms in selenium script.</p>
              <li>
                <strong>Web Tables/HTML tables</strong>
              </li>
              <li>
                <strong>Frames</strong>
              </li>
              <li>
                <strong>Dynamic elements</strong>
              </li>
            </ol>
            <p><strong>Approach #1:</strong> Below is the xpath of one of the cell in html table.</p>
            <div>
              <pre className='pre-code'>
                  <code>
                    {identifier.basic_xpath_5} <br />
                    {identifier.basic_xpath_6}
                  </code>
              </pre>
            </div>        
            <p><strong>Approach #2:</strong> The first approach is best suitable for the table which doesn’t change its dimensions and always remains the same. Above approach will not be a perfect solution for dynamically changing web tables.</p>
              <pre className='pre-code'>
                <code>
                  {identifier.contains}
                  {identifier.contains_1}
                  {identifier.contains_2}
                  {identifier.contains_3}
                  {identifier.contains_4}
                </code>
              </pre>
            <p>
              <strong>
                Approach #3:
                </strong> 
              In this section we will learn different ways to handle dynamic element and construct generic Xpath.
              <br />
              In few scenarios, element attributes change dynamically. It can be ‘id’, ’name’ etc.
            </p>
            <div>
              <pre className='pre-code'>
                <code>
                  {identifier.basic_xpath_1} <br />
                  {identifier.basic_xpath_3} <br />
                  {identifier.basic_xpath_4}
                </code>
              </pre>
            </div>
            <hr />
            <div>
              <h3 className='tc'>List of XPath can be use</h3>
            </div>
            <div>
              <h5>Basic XPath</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.basic_xpath_1} <br />
                    {identifier.basic_xpath_2} <br />
                    {identifier.basic_xpath_3} <br />
                    {identifier.basic_xpath_4}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath for Tables</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.basic_xpath_5} <br />
                    {identifier.basic_xpath_6}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Text</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.text} <br />
                    {identifier.text_1}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Index</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.index}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using AND/OR operator</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.xpath_and_1} <br />
                    {identifier.xpath_and_2} <br />
                    {identifier.xpath_or_1} <br />
                    {identifier.xpath_or_2}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Contains Keyword</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.contains} <br />
                    {identifier.contains_1} <br />
                    {identifier.contains_2} <br />
                    {identifier.contains_3} <br />
                    {identifier.contains_4}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Start-with Keyword</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.start_with} <br />
                    {identifier.start_with_1} <br />
                    {identifier.start_with_2}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Parent-Child</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.paret_child}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Following Siblings</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.following_siblings}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using ANCESTOR</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.xpath_ancestor_parent} <br />
                    {identifier.xpath_ancestor_parentNode} <br />
                    {identifier.xpath_ancestor_child} <br />
                    {identifier.xpath_ancestor_childNode} <br />
                    {identifier.xpath_descendant_axis} <br />
                    {identifier.xpath_descendant_path} <br />
                    {identifier.ancestor}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Parent Axis</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.xpath_parent_axis} <br />
                    {identifier.xpath_parent_path}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Following Axis</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.xpath_following_axis} <br />
                    {identifier.xpath_following_path}
                  </code>
              </pre>
            </div> 
            <div>
              <h5>XPath using Following sibling Axis</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.xpath_following_sibling_axis} <br />
                    {identifier.xpath_following_sibling_path}
                  </code>
              </pre>
            </div>
            <div>
              <h5>XPath using Preceding Axis</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.xpath_precending_axis} <br />
                    {identifier.xpath_precending_path}
                  </code>
              </pre>
            </div>
            <div className='pt4 links-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.XPATH_LOCATOR_1} target="_blank" rel="noopener noreferrer">
                  Locator Strategy 1
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.XPATH_LOCATOR_2} target="_blank" rel="noopener noreferrer">
                  Locator Strategy 2
                </a>
            </div>
            <hr />
            <ol>
              <h5><strong><u>Class Actions</u></strong></h5>
              <li>
                <a href={link.ACTION_1}><strong>Actions(Keyboard keyboard)</strong></a>
              </li>
              <li>
              <a href={link.ACTION_2}><strong>Actions(Keyboard keyboard, Mouse mouse)</strong></a>
              </li>
              <li>
              <a href={link.ACTION_3}><strong>Actions(WebDriver driver)</strong></a>
              </li>
              <li>
                <strong>build() : Action</strong> 
                Generates a composite action containing all actions so far, ready to be performed (and resets the internal builder state, so subsequent calls to build() will contain fresh sequences).
              </li>
              <li>
                <strong>click() : Action</strong> – Clicks at the current mouse location.
              </li>
              <li>
                <strong>click(WebElement target) : Action</strong> – Clicks in the middle of the given element.
              </li>
              <li>
                <strong>clickAndHold() : Action</strong> – Clicks (without releasing) at the current mouse location.
              </li>
              <li>
                <strong>clickAndHold(WebElement target) : Action</strong> – Clicks (without releasing) in the middle of the given element.
              </li>
              <li>
                <strong>contextClick() : Action</strong> – Performs a context-click at the current mouse location.
              </li>
              <li>
                <strong>contextClick(WebElement target) : Action</strong> – Performs a context-click at middle of the given element.
              </li>
              <li>
                <strong>doubleClick() : Action</strong> – Performs a double-click at the current mouse location.
              </li>
              <li>
                <strong>doubleClick(WebElement target) : Action</strong> – Performs a double-click at middle of the given element.
              </li>
              <li>
                <strong>dragAndDrop(WebElement source, WebElement target) : Action</strong> – A convenience method that performs click-and-hold at the location of the source element, moves to the location of the target element, then releases the mouse.
              </li>
              <li>
                <strong>dragAndDropBy(WebElement source, int xOffset, int yOffset) : Action</strong> – A convenience method that performs click-and-hold at the location of the source element, moves by a given offset, then releases the mouse.
              </li>
              <li>
                <strong>keyDown(java.lang.CharSequence key) : Action</strong> – Performs a modifier key press.
              </li>
              <li>
                <strong>keyDown(WebElement target, java.lang.CharSequence key) : Action</strong> – Performs a modifier key press after focusing on an element.
              </li>
              <li>
                <strong>keyUp(java.lang.CharSequence key) : Action</strong> – Performs a modifier key release.
              </li>
              <li>
                <strong>keyUp(WebElement target, java.lang.CharSequence key) : Action</strong> – Performs a modifier key release after focusing on an element.
              </li>
              <li>
                <strong>moveByOffset(int xOffset, int yOffset) : Action</strong> – Moves the mouse from its current position (or 0,0) by the given offset.
              </li>
              <li>
                <strong>moveToElement(WebElement target) : Action</strong> – Moves the mouse to the middle of the element.
              </li>
              <li>
                <strong>moveToElement(WebElement target, int xOffset, int yOffset) : Action</strong> – Moves the mouse to an offset from the top-left corner of the element.
              </li>
              <li>
                <strong>pause(java.time.Duration duration) : Action</strong>
              </li>
              <li>
                <strong>pause(long pause) : Action</strong> – Performs a pause.
              </li>
              <li>
                <strong>perform() : Action</strong> – A convenience method for performing the actions without calling build() first.
              </li>
              <li>
                <strong>release() : Action</strong> – Releases the depressed left mouse button at the current mouse location.
              </li>
              <li>
                <strong>release(WebElement target) : Action</strong> – Releases the depressed left mouse button, in the middle of the given element.
              </li>
              <li>
                <strong>sendKeys(java.lang.CharSequence... keys) : Action</strong> – De
              </li>
              <li>
                <strong>deselectByIndex(int arg0) : Action</strong> – Sends keys to the active element.
              </li>
              <li>
                <strong>sendKeys(WebElement target, java.lang.CharSequence... keys) : Action</strong> – Equivalent to calling: Actions.click(element).sendKeys(keysToSend).
              </li>
              <li>
                <strong>tick(Action action) : Action</strong>
              </li>
              <li>
                <strong>tick(Interaction... actions) : Action</strong>
              </li>
            </ol>
            <hr /> 
            <div>
              <h3 className='tc'>List of CSS can be use</h3>
            </div>
            <div>
              <h5>Basic CSS</h5>
              <pre className='pre-code'>
                  <code>
                    {identifier.basic_css_1} <br />
                    {identifier.basic_css_2} <br />
                    {identifier.basic_css_3} <br />
                    {identifier.basic_css_4} <br />
                    {identifier.basic_css_5} <br />
                    {identifier.basic_css_6}
                  </code>
              </pre>
            </div>
            <hr />
              
              <h5>
                What are the list of Wait Command in Selenium? example?
              </h5>
              <p>There are 3 types of Synchronization or Wait statement in selenium WebDriver:</p>
              <ol>
                <li>Implicit Wait</li>
                <li>Explicit Wait </li>
                <li>Fluent Wait</li>
                <br />
              </ol>
              <ol>
                <li>
                  <strong>Implicit Wait in Selenium: </strong>
                  <span>
                    Sets internally a timeout that will be used for all consecutive Web Element searches. It will try look up the element repeatedly for the specified amount of time before throwing a NoSuchElementException if the element could not have been found. It does only this and can't be forced into anything else - it waits for elements to show up.
                  </span>
                  <p className='pt2'>
                    Implicit Wait directs the Selenium WebDriver to wait for a certain measure of time before throwing an exception. Once this time is set, WebDriver will wait for the element before the exception occurs.
                  </p>
                  <p>
                    Once the command is in place, Implicit Wait stays in place for the entire duration for which the browser is open. Its default setting is 0, and the specific wait time needs to be set by the following protocol.
                  </p>
                  <div>
                    <pre className='pre-code'>
                      <code>
                        driver.manage().timeouts().implicitlywait(20L,Timeunit.sec);
                      </code>
                    </pre>
                  </div>
                </li>
                <li>
                  <strong>Explicit Wait in Selenium: </strong>
                  <span>
                    Just Wait is a one-timer used for a particular search. I can set it up wait, for any condition I might like. Usually, I can use some of the prebuilt Expected Conditions to wait for elements to become clickable, visible, invisible, etc., or just write my own condition that suits my code needs. (when a particular element takes more than a minute to load)
                  </span>
                  <p className='pt2'>
                    By using Explicit Wait command, the WebDriver is directed to wait until a certain condition occurs before proceeding with executing the code.
                  </p>
                  <p>
                    Setting Explicit Wait is important in cases where there are certain elements that naturally take more time to load. If one sets an implicit wait command, then the browser will wait for the same time frame before loading every web element. This causes an unnecessary delay in executing the test script.
                  </p>
                  <p>
                    Explicit wait is more intelligent, but can only be applied for specified elements. However, it is an improvement on implicit wait since it allows the program to pause for dynamically loaded Ajax elements.
                  </p>
                  <p>
                    In order to declare explicit wait, one has to use “ExpectedConditions”. The following Expected Conditions can be used in Explicit Wait.
                  </p>
                  <ul>
                    <li>alertIsPresent()</li>
                    <li>elementSelectionStateToBe()</li>
                    <li>elementToBeClickable()</li>
                    <li>elementToBeSelected()</li>
                    <li>frameToBeAvaliableAndSwitchToIt()</li>
                    <li>invisibilityOfTheElementLocated()</li>
                    <li>invisibilityOfElementWithText()</li>
                    <li>presenceOfAllElementsLocatedBy()</li>
                    <li>presenceOfElementLocated()</li>
                    <li>textToBePresentInElement()</li>
                    <li>textToBePresentInElementLocated()</li>
                    <li>textToBePresentInElementValue()</li>
                    <li>titleIs()</li>
                    <li>titleContains()</li>
                    <li>visibilityOf()</li>
                    <li>visibilityOfAllElements()</li>
                    <li>visibilityOfAllElementsLocatedBy()</li>
                    <li>visibilityOfElementLocated()</li>
                  </ul>
                  <p className='pt2'>Initialize A Wait Object using WebDriverWait Class.</p>
                  <div>
                    <pre className='pre-code'>
                      <code>
                          WebDriverWait wait = new WebDriverWait(driver,30);<br />
                          wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(text(),'COMPOSE')]")));
                      </code>
                    </pre>
                  </div>
                </li>
                <li>
                  <strong>Fluent Wait in Selenium: </strong>
                  <span>
                    Let’s say I have an element which sometimes appears in just 1 second and some time it takes minutes to appear. In that case, I have been using fluent wait, as this will try to find element again and again until it finds it or until the final timer runs out.
                  </span>
                  <p className='pt2'>
                    The Fluent Wait command defines the maximum amount of time for Selenium WebDriver to wait for a certain condition to appear. It also defines the frequency with which WebDriver will check if the condition appears before throwing the “ElementNotVisibleException”.
                  </p>
                  <p>
                    To put it simply, Fluent Wait looks for a web element repeatedly at regular intervals until timeout happens or until the object is found.
                  </p>
                  <p> 
                    Fluent Wait commands are most useful when interacting with web elements that can sometimes take more time than usual to load. This is largely something that occurs in Ajax applications.
                  </p>
                  <p>
                    While using Fluent Wait, it is possible to set a default polling period as needed. The user can configure the wait to ignore any exceptions during the polling period.
                  </p>
                  <div>
                    <pre className='pre-code'>
                      <code>
                        Wait wait = new FluentWait (WebDriver)(driver) <br />
                        .withTimeout(50, TimeUnit.SECONDS) <br />
                        .pollingevery(3, TimeUnit.SECONDS) <br />
                        .ignoring(NoSuchElementException.class); 
                      </code>
                    </pre>
                  </div>
                </li>
              </ol>
              <h5>
                What is an Exception?
              </h5>
              <p>
                “Exception” is a standard term used by software programmers regardless of any programming language that is used to write the code. “Exception” as the name suggests is an unusual event or an uncommon case that disrupts the normal flow of program execution.
              </p>
              <p>
                There may be several reasons behind the occurrence of exceptions which indicate the halt in the program flow. An exception object is created when an exception is encountered, which contains debugging information such as the line number, the type of Exception, the method hierarchy. Once the exception object is created and handed over to the runtime environment, this process is called “Throwing the Exception.”
              </p>
              <p>
                The Exceptions are classified mainly into two types: Checked Exception and Unchecked Exception
              </p>
              <ul>
                <li><strong>Checked Exceptions:</strong>
                  These exceptions are handled while writing the code itself before the compilation of the code, and hence they are examined at the compile time.
                </li>
                <li><strong>Unchecked Exceptions:</strong>
                  These exceptions get thrown at run time and are more catastrophic as compared to Checked Exception.
                </li>
                <h5>
                  What is Exception Handling in Selenium?
                </h5>
                <p>
                  Exception handling is a process or a mechanism that detects and resolves runtime exceptions and communication errors in Selenium.
                </p>
                <h5>
                  10 Common Exceptions in Selenium WebDriver
                </h5>
                <p>
                  One can find a complete list of Selenium WebDriver Exceptions in the documentation given by Selenium, but below are a few standard Selenium exceptions faced while running a test :
                </p>
                <ol>
                  <li><strong>ElementNotVisibleException: </strong>
                    In spite of the element being present in the DOM, it is not visible (can not be interactive). For example, elements defined in HTML with type =”hidden”
                  </li>
                  <li><strong>ElementNotSelectableException: </strong>
                    An element is disabled (can not be clicked/selected) in spite of being present in the DOM
                  </li>
                  <li><strong>NoSuchElementException:</strong>
                    Webdriver is not able to determine the elements during runtime, i.e., the FindBy method cannot find a particular component
                  </li>
                  <li><strong>NoSuchFrameException: </strong>
                    Webdriver attempts to switch to an invalid frame, which is unavailable
                  </li>
                  <li><strong>NoAlertPresentException:</strong>
                    Webdriver is trying to switch to an invalid alert, which is unavailable
                  </li>
                  <li><strong>NoSuchWindowException: </strong>
                    Webdriver is trying to switch to an invalid window, which is unavailable
                  </li>
                  <li><strong>StaleElementReferenceException:</strong>
                    The referenced element is no longer present on the DOM page (a reference to a component is now Stale). For example, the item belongs to a different frame than the current one or the user has navigated away to another page
                  </li>
                  <li><strong>SessionNotFoundException:</strong>
                    Webdriver is acting immediately after ‘quitting’ the browser
                  </li>
                  <li><strong>TimeoutException: </strong>
                    The command did not complete in the specified time. For example, the element didn’t display at the specified time. This is especially encountered when working with waits
                  </li>
                  <li><strong>WebDriverException:</strong>
                    Webdriver is acting immediately after ‘closing’ the browser
                  </li>
                </ol>
                <p>
                  Now, as we are aware of the common Exceptions that one can face in Selenium WebDriver, the next step is to understand “How to handle those Exceptions?”
                </p>
                <h5>
                  Handling Exceptions In Selenium WebDriver
                </h5>
                <p>
                  Following are a few standard ways using which one can handle Exceptions in Selenium WebDriver:
                </p>
                <p>
                  <stron>Try-catch:</stron>
                  <span>
                    This method can catch Exceptions by using a combination of the try and catch keywords. Try indicates the start of the block, and Catch is placed at the end of the try block to handle or resolve the Exception. The code that is written within the Try/Catch block is referred to as “protected code.” The following code represents the syntax of Try/Catch block –
                  </span>
                  <div>
                    <pre className='pre-code'>
                      <code>
                        try{'{'} <br />
                          {'//'}Some code - <br />
                            {'}'} <br />
                        catch(Exception e){'{'} <br />
                          {'//'}Code for Handling the exception - <br />
                            {'}'}
                      </code>
                    </pre>
                  </div>
                </p>
                <p>
                  <strong>
                    Multiple catch blocks: 
                  </strong>
                  <span>
                    There are various types of Exceptions, and one can expect more than one exception from a single block of code. Multiple catch blocks are used to handle every kind of Exception separately with a separate block of code. One can use more than two catch blocks, and there is no limitation on the number of catch blocks. The code below represents the syntax of multiple catch blocks –
                  </span>

                  <div>
                    <pre className='pre-code'>
                      <code>
                        try{'{'} <br />
                          {'//'}Some code - <br />
                            {'}'} <br />
                        catch(ExceptionType1 e1){'{'} <br />
                          {'//'}Code for Handling the Exception 1 - <br />
                            {'}'} <br />
                        catch(ExceptionType2 e2){'{'} <br />
                         {'//'}Code for Handling the Exception 2 - <br />
                        {'}'}
                      </code>
                    </pre>
                  </div>
                </p>
                <p>
                  <strong>
                    Throw/Throws:
                  </strong>
                  <span>
                    When a programmer wants to generate an Exception explicitly, the Throw keyword is used to throw Exception to runtime to handle it. When a programmer is throwing an Exception without handling it, then he/she needs to use Throws keyword in the method signature to enable the caller program to understand the exceptions that might be thrown by the method. The syntax for Throws is as follows:
                  </span>
                  <pre className='pre-code'>
                    <code>
                      public static void anyFunction() throws Exception{'{'} <br />
                         {'//'}try{'{'} write your code here <br />
                        {'}'} <br />
                        catch(Exception e){'{'} <br />
                          {'//'}Do whatever you wish to do here <br />
                          {'//'}Now throw the exception back to the system <br />
                          {'//'}throw(e);<br />
                        {'}'}
                    </code>
                  </pre>
                </p>
                <p>
                  <strong>
                    Multiple Exceptions:
                  </strong>
                  <span>
                    One can mention various Exceptions in the throws clause. Refer to the example below:
                  </span>

                  <pre className='pre-code'>
                    <code>
                      public static void anyFunction() throws ExceptionType1, ExceptionType2 {'{'} <br />
                         {'//'}try{'{'} write your code here <br />
                        {'}'} <br />
                        catch(ExceptionType1 e1){'{'} <br />
                          {'//'}Code to handle exception 1 <br />
                        {'}'} <br />
                        catch(ExceptionType2 e2){'{'} <br />
                          {'//'}Code to handle exception 2 
                        {'}'}
                    </code>
                  </pre>
                </p>
                <p>
                  <strong>
                    Finally:
                  </strong>
                  <span>
                    The Final keyword is used to create a block of code under the try block. This final code block always executes irrespective of the occurrence of an exception
                  </span>

                  <pre className='pre-code'>
                      <code>
                        try{'{'} <br />
                          {'//'}Protected code - <br />
                            {'}'} <br />
                        catch(ExceptionType1 e1){'{'} <br />
                          {'//'}Catch block - <br />
                            {'}'} <br />
                        catch(ExceptionType2 e2){'{'} <br />
                          {'//'}Catch block - <br />
                            {'}'}
                        catch(ExceptionType3 e3){'{'} <br />
                          {'//'}Catch block - <br />
                            {'}'}
                        finally {'{'} <br />
                          {'//'}The finally block always executes. - <br />
                            {'}'}
                      </code>
                    </pre>
                  </p>
                <p>
                  One can also use the following methods to display Exception Information:
                </p>
                <p>
                  <strong>
                    printStackTrace(): 
                  </strong>
                  <span>
                    It prints the stack trace, name of the exception, and other useful description
                  </span>
                </p>
                <p>
                  <strong>
                    toString():
                  </strong>
                  <span>
                    It returns a text message describing the exception name and description
                  </span>
                </p>
                <p>
                  <strong>
                    getMessage():
                  </strong>
                  <span>
                    It displays the description of the exception
                  </span>
                </p>
              </ul>
              <h5>
                Conclusion:
              </h5>
              <ul>
                <li>Exception handling is a very crucial part of every Selenium Script</li>
                <li>Exceptions can not be ignored as they disrupt the normal execution of programs</li>
                <li>One can write optimal and robust scripts by handling the Exceptions in unique ways</li>
                <li>Programmers can handle standard exceptions using various techniques like Try/catch, Multiple catch blocks, Finally, and others depending upon the requirement of scripts</li>
                <li>For analyzing the exceptions in detail, one can also use methods like printStackTrace(), toString(), and getMessage()</li>
              </ul>
            </div>
            <section>
              <div>
                <h5>How do you launch IE | Chrome | Firefox (gecko driver) browser?</h5>
                <pre className='pre-code'>
                    <code>
                      String basPath = System.getProperty("user.dir"); <br />
                      String chromePath = basPath + "\\chromedriver.exe"; <br />
                      System.setProperty("webdriver.chrome.driver", chromePath); <br />
                      WebDriver driver = new ChromeDriver();
                    </code>
                </pre>
              </div>
              <div>
                <h5>Difference between implicitly Wait, Explicit wait & Fluent Wait</h5>
                <p>
                  Implicit Wait - sets internally a timeout that will be used for all consecutive Web Element searches. It will try look up the element repeatedly for the specified amount of time before throwing a NoSuchElementException if the element could not have been found. It does only this and can't be forced into anything else - it waits for elements to show up. <br />
                  Explicit Wait - or just Wait is a one-timer used for a particular search. I can set it up wait, for any condition I might like. Usually, I can use some of the prebuilt Expected Conditions to wait for elements to become clickable, visible, invisible, etc., or just write my own condition that suits my code needs. (when a particular element takes more than a minute to load). <br />
                  Fluent Wait - Let’s say I have an element which sometimes appears in just 1 second and some time it takes minutes to appear. In that case, I have been using fluent wait, as this will try to find element again and again until it finds it or until the final timer runs out. <br />
                </p>
              </div>
              <div>
                <h5>What is the difference between find element and find elements?</h5>
                <p>
                  Both methods are an abstract method of WebDriver interface and used to find the WebElement in a web page. <br />

                  find element() – is used to find the one web element. It returns only one WebElement type. <br />
                  find elements()- is used to find more than one web element. It returns List of WebElements. <br />
                </p>
              </div>
              <div>
                <h5>Difference between single and double slash in X-path?</h5>
                <p>
                  <strong>Absolute Path: Single slash ‘/ ’</strong> <br />

                  - Start selection from the document node <br />
                  - Used to identify the immediate child <br />
                  - It allows you to create ‘absolute’ path expressions <br />

                  <strong>Relative Path: Double Slash ‘// ’</strong>
                  - Start selection matching anywhere in the document & search in the entire structure. <br />
                  - It enables to create ‘relative’ path expressions <br />
                  - By writing Relative path can capture the Dynamic Element of the object.
                </p>
              </div>
              <div>
                <h5>Selenium WebDriver Exceptions</h5>
                <p>
                  - NoSuchElementException: FindBy method can’t find the element. <br />
                  - StaleElementReferenceException: This tells that element is no longer appearing on the DOM page. <br />
                  - TimeoutException: This tells that the execution is failed because the command did not complete in enough time. <br />
                  - ElementNotVisibleException: Thrown to indicate that although an element is present on the DOM, it is not visible, and so is not able to be interacted with <br />
                  - ElementNotSelectableException: Thrown to indicate that may be the element is disabled, and so is not able to select. <br />
                  
                  <strong>How to Handle Exception</strong>
                  Try is the start of the block and Catch is at the end of try block to handle the exceptions <br />
                  - Multiple Catch blocks: A try block can be followed by multiple catch blocks. <br />
                  - Throw: Sometimes we want to generate exception explicitly in our code, for example in Selenium Automation Framework most of the time we print self-written logs, once we catch an exception and then we need to throw that exception back to the system so that the test case can be terminated. Throw keyword is used to throw exception to the runtime to handle it. <br />
                  - Throws: When we are throwing any exception in a method and not handling it, then we need to use throws keyword in method signature to let caller program know the exceptions that might be thrown by the method. <br />
                  <strong>The flow of control in try | catch | finally blocks: </strong><br />
                  - If an exception occurs in try block’s body then control immediately transferred(skipping rest of the statements in try block) to the catch block. Once catch block finished execution then finally block and after that rest of the program. <br />
                  - If there is no exception occurred in the code which is present in try block then first, the try block gets executed completely and then control gets transferred to finally block (skipping catch blocks). <br />
                  - If a return statement is encountered either in a try or catch block. In such case also finally runs. Control first goes to finally and then it returned back to return statement. <br />
                </p>
                <pre className='pre-code'>
                  <code>
                    class TestExceptions {'{'} <br />
                    static void myMethod(int testnum) throws Exception {'{'} <br />
                      System.out.println ("start - myMethod"); <br />
                        if (testnum == 12) <br />
                        throw new Exception(); <br />
                        System.out.println("end - myMethod"); <br />
                      return; <br />
                      {'}'} <br />
                    public static void main(String  args[]) {'{'} <br />
                      int testnum = 12; <br />
                        try {'{'} <br />
                          System.out.println("try - first statement"); <br />
                          myMethod(testnum); <br />
                          System.out.println("try - last statement"); <br />
                        {'}'} <br />
                        catch ( Exception ex) {'{'} <br />
                          System.out.println("An Exception"); <br />
                        {'}'} <br />
                        finally {'{'} <br />
                          System. out. println( "finally") ; <br />
                      {'}'} <br />
                        System.out.println("Out of try|catch|finally - statement"); <br />
                      {'}'} <br />
                      {'}'} <br />

                        Output: <br />
                          try - first statement <br />
                          start - myMethod <br />
                          An Exception <br />
                          finally <br />
                      Out of try|catch|finally - statement <br />
                  </code>
                </pre>
                <div>
                <h5>How to find total number of iFrames on a web page | Switch to Frames by Index</h5>
                <pre className='pre-code'>
                  <code>
                    <strong>Switch between Window</strong> <br />
                    Private void handlingMultipleWindows(String windowTitle) {'{'} <br />
                      Set{'<'}String{'>'} windows = driver.getWindowHandles(); <br />
                      for (String window : windows) {'{'} <br />
                      driver.switchTo().window(window); <br />
                        if (driver.getTitle().contains(windowTitle)) {'{'}  <br /> 
                          return;   <br />
                        {'}'}    <br /> 
                      {'}'}   <br />  
                    {'}'} <br />
                    <br />
                    <strong>Switch between the TAB </strong> <br />
                    ArrayList{'<'}String{'>'} tabs2 = new ArrayList{'<'}String{'>'} (driver.getWindowHandles()); <br />
                    driver.switchTo().window(tabs2.get(1)); <br />
                    <br />
                   <strong>Switch by frame name</strong> <br />
                    driver.switchTo().frame("iframe1"); <br />
                    <br />
                    <strong>Switch by frame ID</strong> <br />
                    driver.switchTo().frame("IF1");<br />
                    <br />
                    <strong>Now use the switch command</strong> <br />
                    driver.switchTo().frame(iframeElement);<br />
                    <br />
                    <strong>Now use the switch command</strong> <br />
                    driver.switchTo().frame(0);<br />
                    <br />
                    <strong>Do all the required tasks in the frame | Switch back to the main window</strong> <br />
                    driver.switchTo().defaultContent();<br />
                  </code>
                </pre>
                <div>
                  <h5>How do you simulate scroll down action?</h5>
                  <pre className='pre-code'>
                    <code>
                      JavascriptExecutor jsx = (JavascriptExecutor)driver; <br />
                      jsx.executeScript("window.scrollBy(0,4500)", ""); <br />
                      Thread.sleep(3000); <br />
                      jsx.executeScript("window.scrollBy(450,0)", ""); <br />
                    </code>
                  </pre>
                </div>
              </div>
              <div>
                <h5>How can we get the font size, font color, font type used  for a particular text on a web page using Selenium web driver?</h5>
                <pre className='pre-code'>
                  <code>
                    driver.findelement(By.Xpath("Xpath ").getcssvalue("font-size); <br />
                    driver.findelement(By.Xpath("Xpath ").getcssvalue("font-colour); <br />
                    driver.findelement(By.Xpath("Xpath ").getcssvalue("font-type); <br />
                    driver.findelement(By.Xpath("Xpath ").getcssvalue("background-colour); <br />
                  </code>
                </pre>
              </div>
              </div>
              <div>
                <h5>How do you send ENTER/TAB keys in Web-Driver?</h5>
                <p>
                    - Use click () or submit () [submit () can be used only when type=’submit’]) method for ENTER. Or use Actions class to press keys. <br />
                    - For Enter- act.sendKeys(Keys.RETURN); <br />
                    - For Tab- act.sendKeys(Keys.ENTER); <br />
                    - Where act is Actions class type. (Actions act = new Actions (driver);)<br />
                  </p>
              </div>
              <div>
                <h5>How to press Shift+Tab?</h5>
                <pre className='pre-code'>
                  <code>
                    String press = Keys.chord(Keys.SHIFT,Keys.ENTER); <br />
                    webelement.sendKeys(press); <br />
                  </code>
                </pre>
              </div>
              <div>
                <h5>Explain how to iterate through options in test script?</h5>
                <p>
                  Iterate through options in test script you can loop features of the programming language, for example to type different test data in a text box you can use “for” loop in Java
                </p>
                <pre className='pre-code'>
                  <code>
                    String [ ] testData = {'{'} “test1” , “test2” , “test3” {'}'} ; <br />
                    For  (string s: test data) {'{'} selenium.type ( “elementLocator”, testData) ; {'}'}
                  </code>
                </pre>
              </div>
              <div>
                <h5>What are the four parameter you have to pass in Selenium?</h5>
                <p>Four parameters that you have to pass in Selenium are</p> <br />
                <p>
                  - Host
                  - Port Number
                  - Browser
                  - URL
                </p>
              </div>
              <div>
                <h5>How to run tests in multiple browser parallel?Is there any other option other than selenium grid?</h5>
                <pre className='pre-code'>
                  <code>
                    You create a class with a method something like this: <br />
                    public class LaunchBrowser {'{'} <br />
                      WebDriver driver=null; <br />
                      @Parameters(“browser”)  <br />
                      public void initiateBrowser(String browser){'{'} <br />
                        if(browser.equals(“Firefox”)){'{'} <br />
                        driver = new FirefoxDriver(); <br />
                      {'}'}else{'{'} <br />
                      set path to the IE driver correctly here <br />
                      System.setProperty("webdriver.ie.driver", "\iexploredriver.exe"); <br />
                      driver =new InternetExplorerDriver(); <br />
                        {'}'} <br />
                      {'}'} <br />
                      Now create YourClassName class and call extend the above class something like this <br />
                      @Test <br />
                      public class YourClassName extends LaunchBrowser {'{'} <br />
                        public void gotoGoogle(){'{'} <br />
                            driver.get(“http://www.google.com"); <br />
                        {'}'} <br />
                      {'}'} <br />
                  </code>
                </pre>
              </div>
              
            </section>
            <section>
              <h5>===Selenium Grid====</h5>
              <h5>What is Selenium Grid?</h5>
              <p>
                Selenium-Grid allows you to run your tests on different machines against different browsers in parallel. That is, running multiple tests at the same time against different machines, different browsers, and operating systems. Essentially, Selenium-Grid support distributed test execution. It allows for running your tests in a distributed test execution environment.
              </p>
              <h5>Configuration of Selenium Grid</h5>
              <pre className='pre-code'>
                  <code>
                    <strong>Starting a hub</strong> <br />
                    java -jar selenium-server-standalone-3.1.2.jar -role hub <br />
                    <br />
                    <strong>Registering a node to the hub </strong> <br />
                    java -jar selenium-server-standalone-3.1.2.jar -role webdriver hub <br />
                    http://localhost:4444/grid/register -port 5555 <br />
                    <br />
                    <strong>Setting up supported browser names</strong> <br />
                    java -jar selenium-server-standalone-3.1.2.jar -role webdriver hub <br />
                    http://localhost:4444/grid/register -port 5555 -browser browserName=firefox -browser <br />
                    browserName=iexplore -browser browserName=chrome <br />
                    <br />
                    <strong>Setting up max instances</strong> <br />
                    java -jar selenium-server-standalone-3.1.2.jar -role webdriver r hub <br />
                    http://localhost:4444/grid/register -port 5555 <br />
                    -browser browserName=firefox, maxInstances=2 <br />
                    -browser browserName=iexplore, maxInstances=2 <br />
                    -browser browserName=chrome, maxInstances=2 -maxSession 6 <br />
                    <br /> 
                    <strong>Setting up chrome|Firfox|IE driver</strong> <br />
                    -Dwebdriver.chrome.driver=Cl\Softwares\chromedriver.exe <br />
                    -Dwebdriver.gecko.driver=Cl\Softwares\geckoDriverServer.exe <br />
                    -Dwebdriver.ie.driver=Cl\Softwares\IEDriverServer.exe <br />
                    <br />
                    <strong>Final Command</strong> <br />
                    Java <br />
                    -Dwebdriver.chrome.driver= C:\Softwares\chromedriver.exe <br />
                    -Dwebdriver.gecko.driver=Cl\Softwares\geckoDriverServer.exe <br />
                    -Dwebdriver.ie.driver= C:\Softwares\IEDriverServer.exe <br />
                    -jar selenium-server-standalone-2.32.0.jar -role webdriver <br />
                    -hub http://localhost:4444/grid/register -port 5555 -browser <br />
                    browserName=firefox,maxInstances=2 -browser browserName=iexplore -browser <br />
                    browserName=chrome,maxInstances=3 -maxSession 5 <br />
                  </code>
              </pre>
            </section>

            <section>
              <div>
                <h2>=====JAVA & TestNG====</h2>
              </div>
              <div>
                <h5> TestNG annotations vs JUnit annotations</h5>
                <p> TestNG: 
                  @Test,@Parameters,@Listeners,@BeforeSuite,@AfterSuite,@BeforeTest,@AfterTest, @DataProvider,@BeforeGroups,@AfterGroups,@BeforeClass,@AfterClass, @BeforeMethod, @AfterMethod, @Factory
                </p>
                <p>JUnit: 
                  @Test @Before @After @AfterClass @BeforeClass @Ignore @Runwith
                </p>
              </div>
              <div>
                <h5>6 assertions of TestNG to be used in a Selenium WebDriver software testing tool?</h5>
                <p>
                There are multiple assertions available In TestNG but generally we use the following assertions in out test cases. <br />
                </p>
                <p>
                  - assertEquals <br />
                  - assertNotEquals <br />
                  - assertTrue <br />
                  - assertFalse <br />
                  - assertNull <br />
                  - assertNotNull <br />
                </p>
              </div>
              <div>
                <h5>In TestNG how can you disable a test?</h5>
                <p>To disable the test case, you can use the following annotation.</p> <br />
                <p>
                  - @Test(enabled = false). <br />
                  - Exclude key word in testNG.xml file inside the method <br />
                </p>
              </div>
              <div>
                <h5>How do you read data from excel?</h5>
                <pre className='pre-code'>
                    <code>
                      File f = new File(“c://excel.xlsx”); <br />
                      FileInputStream fis = new FileInputStream (f); <br />
                      Workbook wb = WorkbookFactory.create(fis); <br />
                      Sheet s = wb.getSheet(“sheetName”); <br />
                      Row r = s.getRow(0); <br />
                      Cell c = r.getCell(0);
                    </code>
                </pre>
              </div>

            </section>
            <div>
              <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            
        </main>
    );
  }   
export default selenium;