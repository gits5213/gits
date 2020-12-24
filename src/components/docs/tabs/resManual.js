import React from 'react';
import ManualLogo from '../../../images/tabs/manualLogo.png';
import DefectBugError from '../../../images/tabs/defectBugError.png';
import BugLifeCycle from '../../../images/tabs/bugLifeCycle.png'
import TestPyramid from '../../../images/tabs/testPyramid.png'
import TestPyramid1 from '../../../images/tabs/testPyramid1.png'
import GoogleAd from '../../../components/GoogleAd';

const resManual = () => {
    return(
        <div className='page-tab-body'>
            <div className='resManual-first-section'>
                <div>
                    <h3>Software Manual Testing</h3>
                </div>
                <div className='tc'>
                    <img className='manual-logo' src={ManualLogo} alt='Manual Logo' />
                </div>
                <div>
                    <h3>Manual Tesing are 2 types:</h3>
                    <ol>
                        <li>Web|UI|Frontend Manaul Test</li>
                        <li>API|Backend Manaul Test</li>
                    </ol>

                    <h3> What is Software testing?</h3>
                    <p>
                        Testing is the process consisting of all lifecycle activities, both static 
                        and dynamic, concerned with planning, preparation and evaluation of software 
                        products and related work products to determine that they satisfy specified 
                        requirements, to demonstrate that they are fit for purpose and to detect defects.
                    </p>

                    <h3> What is Software Manual testing?</h3>
                    <p>
                        Manual testing is the process of manually testing software for defects. 
                        It requires a tester to play the role of an end user whereby they use most 
                        of the application's features to ensure correct behavior.
                    </p>
                    <p>
                        MANUAL TESTING is a type of Software Testing where Testers manually execute test 
                        cases without using any automation tools. Manual Testing is the most primitive 
                        of all testing types and helps find bugs in the software system. 
                    </p>
                    <p>
                        Any new application must be manually tested before its testing can 
                        be automated. Manual Testing requires more effort but is necessary to 
                        check automation feasibility.
                    </p>
                    <p>
                        Manual Testing does not require knowledge of any testing tool.
                    </p>
                </div>
                <h3>What is a “bug?”</h3>
                <p>
                    A bug is a bug is an error, flaw, mistake, failure, or fault in a computer code (program) that prevents it from behaving as intended (e.g., producing an incorrect result). (You can also add this: When the expected results (accordingly to the required documents) don’t match with the actual results (while testing), then it is considered a bug)
                </p>
                <div>
                    <h3> What is Errors, Defects, and Failures?</h3>
                    <img id='bugPicid' alt='bugPic Logo' src={DefectBugError} height='200px' width='600px'/>
                    <p>
                        A person can make an error (mistake), which can lead to the introduction of a defect (fault or bug) in the software code or in some other related work product. An error that leads to the introduction of a defect in one work product can trigger an error that leads to the introduction of a defect in a related work product.
                    </p>
                    <p>
                        For example, a requirements elicitation error can lead to a requirements defect, which then results in a programming error that leads to a defect in the code.
                    </p>
                    <p>
                    If a defect in the code is executed, this may cause a failure, but not necessarily in all circumstances.
                    <br />
                    For example, some defects require very specific inputs or preconditions to trigger a failure, which may occur
                    rarely or never. 
                    </p>
                    <p>
                        Errors may occur for many reasons, such as:   
                    </p>
                    <ul>
                        <li>Time pressure</li>
                        <li>Human fallibility</li>
                        <li>Inexperienced or insufficiently skilled project participants</li>
                        <li>Miscommunication between project participants, including miscommunication about requirements
                            and design</li>
                        <li>Complexity of the code, design, architecture, the underlying problem to be solved, and/or the technologies used</li>
                        <li>Misunderstandings about intra-system and inter-system interfaces, especially when such intrasystem and inter-system interactions are large in number</li>
                        <li>New, unfamiliar technologies
                            <br />
                            In addition to failures caused due to defects in the code, failures can also be caused by environmental conditions.
                            <br />
                            For example, radiation, electromagnetic fields, and pollution can cause defects in firmware or
                            influence the execution of software by changing hardware conditions.
                            Collapse</li>

                    </ul>
                </div>
                <h3>Bug Life Cycle</h3>
                <img id='bugLifeCycleId' src={BugLifeCycle} alt='Bug Life Cycle' height='700px' width='900px'/>
                <h3>What is Business Requirement Document (BRD)?</h3>
                <p>
                    It is a document that describes the details of the application functionalities which is required by the user. This document is written by the Business Analysts.
                </p>
                <h3>What is SCRUM and What is the User Stories?</h3>
                <p>
                    Visit Website about scrum and user stories: 
                    <a href='https://www.mountaingoatsoftware.com/agile'>
                        VISIT
                    </a> 
                </p>
                <h3>
                    When do you think STORY is Ready to Develop?
                </h3>
                <ul>
                    <li>Independent and deliverable in one sprint</li>
                    <li>The design is clear, and is linked to or attached to the Story</li>
                    <li>It has detailed acceptance criteria that describe the desired functionality, including specifics for analytics, localization, and performance as necessary</li>
                    <li>It is Testable - it can be verified independently to have met the acceptance criteria</li>
                    <li>It is Estimatable</li>
                    <li>There are no unmet dependencies</li>
                    <li>Minimum performance criteria has been defined and documented if necessary</li>
                    <li>Test plans added to the project sprint</li>
                    <li>The Test Engineer, Product Owner, and Developer responsible for the story are all satisfied they understand the requirment of the story and they have no further question.</li>
                </ul>
                <h3>When do you think Story can be Done?</h3>
                <ul>
                    <li>Code and tests have been written and verify the acceptance criteria</li>
                    <li>The code and tests have passed and peer-reviewed</li>
                    <li>The code has been merged into mainline branch</li>
                    <li>It has passed automated integation function tests</li>
                    <li>It has been incorporated into a ci/cd build pipeline</li>
                    <li>The build has been deployed to both development and Stage/QA environment</li>
                    <li>It has been verified by SQA as meeting the acceptance criteria </li>
                    <li>It has been verified by the P.O as meeting the acceptance criteria</li>
                </ul>
                <h3>What is Software Testing Life Cycle (STLC)?</h3>
                <p>
                    The testing of software has its own life cycle.  It starts with study and analyzing the requirements.  Here is the software testing life cycle:
                </p>
                <ol>
                    <li>Requirement Study</li>
                    <li>Test Planning</li>
                    <li>Writing Test Cases</li>
                    <li>Review the Test Cases</li>
                    <li>Executing the Test Cases</li>
                    <li>Bug logging and tracking</li>
                    <li>Bug Re-test</li>
                    <li>Close or Reopen bugs</li>
                    <li>Result and Report</li>
                </ol>
                <h3>What is Software Development Life Cycle?</h3>
                <p>
                    The systems (or software) development life cycle (SDLC) is a conceptual model used in project management that describes the stages involved in an information system development project, from an initial feasibility study through maintenance of the completed application.
                </p>
                <p><strong>It includes the following different stages:</strong></p>
                <ol>
                    <li>Requirement phase</li>
                    <li>Design phase</li>
                    <li>Coding phase</li>
                    <li>Testing phase</li>
                    <li>Release phase</li>
                    <li>Maintenance</li>
                </ol>
                <h3>What is a Test Plan?</h3>
                <p>A Test Plan defines and provides a layout of how and what to test. The Ttest Plan is a document describing the scope, approach, resources, and schedule of intended testing activities. It identifies test items, the features to be tested, the testing tasks and who will do each task (roles and responsibilities) and any risks and its solutions.</p>
                <h3>What does Test Plan include?</h3>
                <p>
                    A Test Plan includes Heading, Revision History, Table of Contents, Introduction, Scope, Approach, Overview, different types of testing that will be carried out, what software and hardware will be required, issues, risks, assumptions and signs off section.
                </p>
                <h3>
                    Did you write test plan? What should include in the test plan?
                </h3>
                <p>
                    Yes | Yes I have been contributing to the test plan. In a test plan first I give a brief Introduction to what purpose I am going to write the test plan, then I mention the application details, after that I mention the test in-scope and out-scope then I mention the roles and responsibilities of who is going to do what, then I mention the supporting documents of BRD and FRD; then I mention the testing strategy or techniques here, then I mention test schedule, then I mention the assumption of what tools I may use and dependency like database has to be ready, then I mention the entry and exit criteria of the test and at the end I include the Glossary of this test plan.
                </p>
                <h3>
                    What is Test Strategy?
                </h3>
                <p>
                    A test strategy is an outline that describes the testing portion of the software development cycle. It is created to:  inform project managers, testers, and developers about some key issues of the testing process. 
                </p>
                <h3>
                    What does included in Test strategy?
                </h3>
                <p>
                    The testing objective, methods of testing new functions, total time and resources required for the project, and the testing environment? It also describes how the product risks of the stakeholders are mitigated at the test level, which types of test are to be performed, and which entry and exit criteria apply. The test strategy is created based on development design documents. It is written by the Test Manager or Lead.
                </p>
                <p>
                    It includes introduction, scope, resource and schedule for test activities, acceptance criteria, test environment, test tools, test priorities, test planning, executing a test pass and types of test to be performed, Roles and Responsibilities, Test Status Collections and Reporting, Test Records Maintenance, Test Summary
                </p>
                <h3>Different between Test Plan and Test Strategy same type of document?</h3>
                <p>
                    Yes. They are different documents.<br />
                    Test Plan is a document that collects and organizes test cases by functional area, It is a plan for testing,  it defines scope, approach, and environment Whereas Test Strategy is a document for making decisions about value and also approach to testing. Test Plan is prepared by the tester whereas the Test Strategy is prepared by the QA Manager or QA lead.
                </p>
                <p>
                    OR <br />
                    By a test plan, I am going to have a plan for the test of the application like the application details, peoples involve in the test, what are the supporting docs we need, what are the time line.
                    <br />
                    By testing strategy, I will get the overall picture of how the testing will be conduct means what tools I am going to use for the test.
                </p>
                <h3>What is a Use Case?</h3>
                <p>A use case is a document that describes the user action and system response for a particular functionality.</p>
                <h3>What is a Use Case and what does it include?</h3>
                <p>
                    A Use Case is a document that describes the user action and system response for a particular functionality. It includes a cover page, Revision History, Table of Contents, Floe of Events (normal flow and alternative flow), Exceptions, Special Requirements, Pre-conditions, and Post-conditions.
                    <br />
                    Now, Let us write Test Cases based on this Use Case. Remember, one Use Case can have many Test Cases.
                </p>
                <h3>
                    What is Business Design Document?
                </h3>
                <p>
                    It is the document which describes the application functionalities of the user in detail. This document is the further details of the Business Requirement Document. This is a very crucial step in the SDLC. Sometimes the Business Requirement Document and Business Design Document can be lumped together to make only one Business Requirement Document.
                </p>
                <h3>
                    List of Test Cases writing tools and plugings?
                </h3>
                <ol>
                    <li>MS Excel</li>
                    <li>Confluence</li>
                    <li>HP Quality Center</li>
                    <li>Zephyr</li>
                    <li>Adaptavist</li>
                    <li>TestRail</li>
                    <li>qTest</li>
                    <li>Xray</li>
                    <li>TestCaseLab</li>
                    <li>TestMonitor</li>
                    <li>Testpad</li>
                    <li>ReQtest</li>
                    <li>XQual</li>
                    <li>Test Collab</li>
                    <li>PractiTest</li>
                </ol>
                <h3>What is a Test Case? What does it include?</h3>
                <p>
                    A Test Case is a document that describes step by step process how to test the application. A Test Case includes Test Case ID, Steps Description, Expected Output, Actual Output, Pass/Fail, Remarks. 
                </p>
                <h3>
                    What document did you refer to write the Test Cases?
                </h3>
                <p>
                    Requirement document. (NOTE: It can also be Use Cases or Design Document)
                    <br />
                    (Note: It depends on company to company. In some companies, they use Use Cases. In some companies, they use Requirement Documents and in some companies, they use Design Document. However, in the practical scenario, most of the companies have requirement document at least).
                </p>
                <h3>
                    Did you have a situation where you did not have any documents (no requirement document, no Use Cases, or no Design Document) and you had to write the Test Cases? How did you write the Test Cases?
                </h3>
                <p>
                    Yes. I have been to that kind of scenarios several times. There were companies where they had no documents at all. In that case, I had to discuss the application scenario and functionalities with the Business Analysts or developer. I kind of prepared a document in consultation with Business Analysts and Developers and then started writing Test Cases.
                </p>

                <h3>Functional Testing Vs Non-Functional Testing</h3>
                <p>
                    Functional Testing: Testing the application against business requirements. Functional testing is done using the functional specifications provided by the client or by using the design specifications like use cases provided by the design team.
                </p>
                <p>Functional Testing Tools|API:</p>
                <ol>
                    <li>QTP|UFT</li>
                    <li>Selenium</li>
                </ol>
                <h4>Functional Testing include:</h4>
                <ol>
                    
                    <li>Unit Testing</li>
                    <li>Integration Testing (Top Down, Bottom up Testing)</li>
                    <li>Smoke testing(Ad-hoc testing)</li>
                    <li>Regression Testing</li>
                    <li>Sanity testing</li>
                    <li>User Acceptance Testing(Alpha and Beta)</li>
                    <li>Interface and Usability Testing</li>
                    <li>Globalization and Localization Testing</li>
                    <li>UAT test strategy</li>
                    <li>System Testing</li>
                    <li>White Box and Black Box Testing</li>
                </ol>
                <p>Non-Functional Testing: Testing the application against clients and performance requirement. Non-Functioning testing is done based on the requirements and test scenarios defined by the client.</p>
                <h4>Non-Functional Testing includes:</h4>
                <ol>
                    <li>Functionality testing</li>
                    <li>Reliability testing</li>
                    <li>Usability testing</li>
                    <li>Portability testing</li>
                    <li>Compliance testing</li>
                    <li>Documentation testing</li>
                    <li>Load testing</li>
                    <li>Performance testing</li>
                    <li>Volume testing</li>
                    <li>Stress testing</li>
                    <li>Recovery testing</li>
                    <li>Internationalization testing and Localization testing</li>
                    <li>Compatibility and Migration Testing</li>
                    <li>Data Conversion Testing</li>
                    <li>Security / Penetration Testing</li>
                    <li>Installation Testing</li>
                    <li>Security Testing (Application Security, Network Security, System Security</li>
                </ol>
                <h4>Non-Functional Testing Tools:</h4>
                <ol>
                    <li>LOAD RUNNER</li>
                    <li>JMeter</li>
                    <li>Blazemeter</li>
                </ol>
                <h3>
                    The Practical Test Pyramid
                </h3>
                <p>
                    If you want to get serious about automated tests for your software there is one key concept you should know about: 
                    <a href='https://martinfowler.com/articles/practical-test-pyramid.html'>the test pyramid.</a>
                </p>
                <p>
                    Mike Cohn's original test pyramid consists of three layers that your test suite should consist of (bottom to top):
                </p>
                <ul>
                    <li>Unit Tests</li>
                    <li>Service(API) Tests</li>
                    <li>User Interface(UI) Tests</li>
                </ul>
                <div className='testPyramd'>
                    <img id='testPyramid-1' src={TestPyramid} alt='Test Pyramid' height='250px' width='400px'/>
                    <img id='testPyramid-2' src={TestPyramid1} alt='Test Pyramind' height='250px' width='400px'/>
                    <h3>What's the SQA Testing proces you have been following?</h3> 
                </div>
                <p>
                    Well, as a QA, first I have to review the requirements, then I wrote the test plan, I develop my test cases, I setup the test environment, I execute the test cases, if I find any defect I log the defect, after all the required test cases done and if there will be no major defect I provide sign off. This is the experience I had as a Q.A.
                </p>
                <h3>What's the process to test the web application?</h3>
                <p>
                    First of all, I will look at the requirement documents (or design document in some companies). The requirement document will tell us what the functionalities in the application (software) are. Once I analyze the requirement documents (one module=one requirement document). After that, I will write test plans for each module (one module =one test plan). Then after the test plan is complete, I will write test cases (One module can have hundreds, even thousands of test cases). Once the test cases are ready and the application is ready (or once the build is ready), then I will start testing. Before I start testing, however, I will make sure the test environments, test data and defect logging tools are in place. This is how I will go about testing an application. 
                </p>
                <h3>What is Web Based Application?</h3>
                <p>This Application can be accessed through the internet with the web browser. Like: Facebook is a web-based application</p>
                <h3>What is the pre-requirment to test the web application?</h3>
                <p>
                    For a web-based testing, I need a web browser, internet connection and the URL of the web application. First I open the browser and navigate to the URL and check the User Interface as per the requirement. This is the process.
                </p>
                <h3>What is an Entry Criterion?</h3>
                <p>Entry criteria are the process that must be present when a system begins like..SRS, USECASE, testcase, TEST PLAN. Entry criterion is used to determine when a given test activity should start. It also includes the beginning of a level of testing, when test execution is ready to start.</p>
                <p>
                    <strong>Examples of Entry Criterion:</strong>
                </p>
                <ol>
                    <li>Verify if the Test environment is available and ready for use</li>
                    <li>Verify if test tools installed in the environment are ready for use.</li>
                    <li>Verify if the Testable code is available.</li>
                    <li>Verify if Test Data is available and validated for the correctness of Data.</li>
                </ol>
                <h3>What is an Exit Criterion?</h3>
                <p>
                    Exit Criteria ensures whether testing is completed and the application is ready for release like…Test Summary report, Metrics, Defect Analysis report. Exit criterion is used to determine whether a given test activity has been completed or NOT. Exit criteria can be defined for all of the test activities right from planning, specification, and execution.
                </p>
                <p><strong>Examples of Exit Criteria:</strong></p>
                <ol>
                    <li>Verify if All tests planned have been run</li>
                    <li>Verify if the level of requirement coverage has been met</li>
                    <li>Verify if there are NO Critical or high severity defects that are left outstanding</li>
                    <li>Verify if all high-risk areas are completely tested</li>
                    <li>Verify if software development activities are completed at the projected cost</li>
                    <li>Verify if software development activities are completed within the projected timelines</li>
                </ol>
                <h3>
                    What will be the list of risk during the Test Completion?
                </h3>
                <ul>
                    <li>Delay of Test Environment setup (QA/Stage)</li>
                    <li>Incomplete test environment to support testing (Unstable test environment)</li>
                    <li>Delay of CI/CD process</li>
                    <li>Delay of device environment ipa/apk(Simulator/Real Devices)</li>
                    <li>Delay of the physical devices for QA and Dev</li>
                    <li>Delay of the lockdown Functionality</li>
                    <li>Dedicated resource unavailable (Not enough resources)</li>
                    <li>Service(Test) Account (If application support single sign-on)</li>
                </ul>
                <h3>
                    What is a Module?
                </h3>
                <p>
                    A ‘Module’ is a software component that has a specific task. It can be a ‘link’ which can go inside to its component detail.
                </p>
                <h3>
                    What is Build?
                </h3>
                <p>
                    When each of the different modules of software is prepared, they are put in a single folder by the Configuration Management Team (CMT) and it is called the ‘Build’.  In another word, the developers put their code in the shared location (folder) and all those codes (modules) are combined together so that it is a complete application that works.
                </p>
                <h3>
                    What is meant by the Build Deployment?
                </h3>
                <p>
                    When the Build so prepared by the CMT is sent to different Test Environments, it is called the Build Deployment.
                </p>
                <h3>
                    What's the process how code gets pushed to production?
                </h3>
                <p>
                    When all the test cases are executed and there is no major defect, and QA provide the sign-off, then the code is ready for production.
                </p>
                <h3>
                    When you receive a build what do you do?
                </h3>
                <p>
                    First I do a smoke test to validate the build version.
                </p>
                <h3>
                    What is your approach when the application cannot be launch?
                </h3>
                <p>
                    As QA person I review all the requirement, check all my test cases and try to find out that I didn’t miss any requirement from my side.
                </p>
                <h3>
                    What types of minimum test cases can be developed from one single requirement?
                </h3>
                <p>
                    Two test cases, one positive and one negative.
                </p>
                <h3>
                    When do you know you have performed enough testing?
                </h3>
                <p>
                    When I check and see that all the test cases I have to execute as per the requirement – then I can sure I have done enough testing.
                </p>
                <h3>
                    When do you provide QA sign off?
                </h3>
                <p>
                    When I check and confirm that all the required test cases are done and there is no major defect, then I provide QA sign off.
                </p>
                <h3>
                    How would you ensure that you have covered 100% testing?
                </h3>
                <p>
                    Well, when I see all the requirement is tested and there no test case left for execution then I will ensure that I have done 100% testing.
                </p>
                <h3>
                    What if there is not enough time for thorough testing? What will be your approach?
                </h3>
                <p>Then I will test:</p>
                <ol>
                    <li>The core functionality of the application</li>
                    <li>The most visible option of the application</li>
                    <li>The security functionality of the application</li>
                </ol>
                <h3>
                    The difference between Unit test and Functional test?  Why do you perform a Unit test and Functional Test?
                </h3>
                <p>
                    Unit Test – testing an individual unit, such as a method (function) in a class, with all dependencies mocked up.
                </p>
                <ol>
                    <li>Unit testing = drives design (with test-Driven Development, or TDD)</li>
                    <li>Integration testing = do all the pieces work together</li>
                    <li>A unit testwill typically execute very few code paths, functional and integration testing many</li>
                    <li>If a test fails, how many things could be broken? For a unit test ,the ideal answer is 1. Functional and integration tests the answer could be large</li>
                    <li>Unit testsexecute quickly, functional and integration tests relatively slowly (in general).</li>
                </ol>
                <h3>A well explained real-life analogy of unit testing and functional testing can be described as follows,</h3>
                <p>
                    Many times the development of a system is likened to the building of a house. While this analogy isn’t quite correct, we can extend it for the purposes of understanding the difference between unit and functional tests.
                </p>
                <p>
                    Unit testing is analogous to a building inspector visiting a house’s construction site. He is focused on the various internal systems of the house, the foundation, framing, electrical, plumbing, and so on. He ensures (tests) that the parts of the house will work correctly and safely, that is, meet the building code.
                </p>
                <p>
                    Functional tests in this scenario are analogous to the homeowner visiting this same construction site. He assumes that the internal systems will behave appropriately, that the building inspector is performing his task. The homeowner is focused on what it will be like to live in this house. He is concerned with how the house looks, are the various rooms a comfortable size, does the house fit the family’s needs, are the windows in a good spot to catch the morning sun.
                </p>
                <ol>
                    <li>The homeowner is performing functional tests on the house. He has the user’s perspective</li>
                    <li>The building inspector is performing unit tests on the house. He has the builder’s perspective.</li>
                    <li>Unit Tests are written from a programmers perspective. They are made to ensure that a particular method (or a unit) of a class performs a set of specific tasks.</li>
                    <li>Functional Tests are written from the user’s perspective. They ensure that the system is functioning as users are expecting it to</li>
                </ol>
                <p>
                    As far as definition wise:
                </p>
                <ol>
                    <li>Unit Testing – is performed at the code level</li>
                    <li>Integration Testing – is performed at the communication level</li>
                    <li>Functional Testing – is performed at the System level</li>
                </ol>
                <p>
                    Functional Testing – This is performed on the entire system. This is to ensure that system delivers what client has asked for. To check the system from business stakeholder’s point of view is a big concern of this.
                </p>
                <p>
                    “Unit | Integration | Functional”, specially where the original SDLC are following.
                </p>
                <h3>What is Unit Test?</h3>
                <p>
                    Unit Testing – It can be done on code for a single module|portion of the code. You need to test all the paths are working correctly, all the loops are running correctly as per the conditions, all functions|classes are calling correctly etc.
                </p>
                <h3>
                    What is Integration Testing?
                </h3>
                <p>
                    It is used to check communication between two modules/interfaces of the system. The best method is passed the data into one module and check whether another module has picked them up that data or not. The data format changes are an important part of this.
                </p>
                <h3>
                    What is Smoke testing?
                </h3>
                <p>
                    It is an initial set of test to check whether the major functionalities are working or not and also to check the major breakdowns in the application. It is the preliminary test carried out by the SQA tester.
                </p>
                <p>
                    Given an Example:
                </p>
                <p>
                    Well! Integration testing – my last project was to verify www.att.com, where the customer can buy iPod, so whenever an iPod sold than the available quantity will show the correct figure after selling the item this is integration testing.
                </p>
                <h3>
                    What is Alpha testing?
                </h3>
                <p>
                    In this type of testing, the users are invited to the development center where they use the application and the developers note every particular input or action carried out by the user. Any type of abnormal behavior of the system is noted and rectified by the developers.
                </p>
                <h3>
                    What is User acceptance testing?
                </h3>
                <p>
                    In this type of testing, the software is handed over to the user in order to find out if the software meets the user expectations and works as it is expected to.
                </p>
                <h3>
                    What is Beta testing?
                </h3>
                <p>
                    In this type of testing, the software is distributed as a beta version to the users and users test the application at their sites. As the users explore the software, in case if any exception/defect occurs that is reported to the developers. 
                </p>
                <h3>
                    What is Regression testing?
                </h3>
                <p>
                    When a function is added to an application, we need to make sure that the newly added functionality does not break the application.  In order to make it sure, we perform a repeated testing which is called Regression Testing.  We also do regression testing after the developers fix the bugs.  See the video below for more understanding. 
                </p>
                <p>Given an Example</p>
                <p>
                    Regression testing – In att.com developer recently add an option of “Shipped from” where the customer can see from where the product has been shipped, so I have to test here with this new option all the existing option of shipping details is working – this is regression testing.
                </p>
                <h3>
                    What is Sanity testing?
                </h3>
                <p>
                    Sanity testing is done after thorough regression testing is over, it is done to make sure that any defect fixes or changes after regression testing do not break the core functionality of the product. It is done towards the end of the product release phase
                </p>
                <h3>
                    What is System testing?
                </h3>
                <p>
                    Testing which is based on overall requirements specification and it covers all combined parts of a system. It is also a black box type of testing.  
                </p>
                <h3>
                    What is Black box testing?
                </h3>
                <p>
                    It is a test where a tester performs testing without looking into the code. OR A testing method where the application under test is viewed as a black box and the internal behavior of the program is completely ignored. Testing occurs based upon the external specifications. Also known as behavioral testing, since only the external behavior of the program is evaluated and analyzed.
                </p>
                <h3>
                    What is White box testing?
                </h3>
                <p>
                    It is a test where a tester looks into the code and performs the testing. 
                </p>
                <h3>
                    What is Non-Functional Testing?
                </h3>
                <p>
                    Testing the application against clients and performance requirement. Non-Functioning testing is done based on the requirements and test scenarios defined by the client.
                </p>
                <h3>
                    What is Functional Testing?
                </h3>
                <p>
                    Testing the application against business requirements. Functional testing is done using the functional specifications provided by the client or by using the design specifications like use cases provided by the design team.
                </p>
                <p>
                    All It is a test to check whether each and every functionality of that application is working as per the requirement. It is a major test where 80% of the tests are done. In this test, the Test Cases are ‘executed’.
                </p>
                <h3>
                    What is Load testing?
                </h3>
                <p>
                    It is a test to check the user’s response time of the number of users using any one scenario (single business process) of the same application at the same time.
                </p>
                <h3>
                    What is Stress testing?
                </h3>
                <p>
                    In this type of testing the application is tested against heavy load such as complex numerical values, a large number of inputs, the large number of queries etc. which checks for the stress/load the applications can withstand.
                </p>
                <h3>
                    What is Performance testing?
                </h3>
                <p>
                    It is a test to check the user’s response time of number of users using multiple scenarios (multiple business processes) of the same application at the same time.
                </p>
                <h3>
                    What is Negative Testing?
                </h3>
                <p>
                    Testing the system or application using negative data is called negative testing, for example, testing password entering 6 characters where it should be 8 characters should display a message.
                    <br />
                    When we test an application by putting negative values (instead of actual values), then the system should not allow the other values rather than the actual value.  The system should give a message that the value is not correct.  This is called negative testing. 
                </p>
                <h3>
                    What is the difference between Load Testing and Performance Testing?
                </h3>
                <p>
                    Basically, Load, Stress and Performance Testing are the same. However, Load testing is the test to check the users’ response time of the number of users of any one scenario of the application whereas Performance Testing is the test to check the user response time for multiple scenarios of the same application.
                </p>
                <h3>
                    How do you make sure that it is quality software?
                </h3>
                <p>
                    There is a certain process how the quality of software is guaranteed (insured). If is defined by the ‘exit criteria’. (What it means is, a QA Manager writes a document called Test Strategy. This Test Strategy defines the ‘exit criteria’.) Exit Criteria gives the measurement, for example, in order to confirm the quality, how many critical defects, high defects, medium defect and low defect are acceptable? These are all defined in the exit criteria. (Normally in practice, for a quality software, there should no critical defects (0 critical), no high defect (0 high), no medium defect (0 medium) and may be 1 low defect)
                </p>
                <h3>
                    When should testing start in a project? Why?  (Manual and Automating for Both of them)
                </h3>
                <p>We should start testing as soon as the following things are ready:</p>
                <ol>
                    <li>It depends on the project by project but comonly in agile project following bellow:</li>
                    <li>Test Case is ready</li>
                    <li>Test Data is ready</li>
                    <li>Test environment is ready to test</li>
                    <li>Build is ready</li>
                </ol>
                <h3>
                    How would you ensure that you have covered 100% testing?
                </h3>
                <p>
                    The testing coverage is defined by exit criteria or team agreenment or Defination of Done (There is exit criteria and entry criteria in the Test Strategy). For example, if the exit criteria/Team Agreement/Defination Done say's “The software will be acceptable to the client only if there are no critical defects, no high defects, no medium defects and only two low defects”, then all the critical, high, the medium should be zero. Only 2 low defects are ac
                </p>
                <ul>
                    <li>Dafination of Done: Story Level</li>
                    <li>Dafination of Done: Sub-Task Level</li>
                    <li>Dafination of Done: Feature Level</li>
                    <li>Dafination of Done: Releasable Feature Set Level</li>
                </ul>
                <h3>
                    What is exact difference between use case, test scenario, and test case?
                </h3>
                <ol>
                    <li>Use case: Use Cases represents functional requirements and functional requirements need to be tested.</li>
                    <li>Test Case: A set of test data and test programs (test scripts) and their expected results. A test case validates one or more system requirements and generates a pass or fail. It would have the following elements 1. Pre-Conditions 2. Steps to execute 3. Expected behavior 4. Pass/Fail criteria</li>
                    <li>Test Scenario: A Test Scenario is a business requirement to be tested. A set of test cases that ensure that the business process flows are tested from end to end. They may be independent tests or a series of tests that follow each other, each dependent on the output of the previous one A test scenario can have more than one test case</li>
                </ol>
                <h3>
                    What is Cross Browser Testing?
                </h3>
                <p>
                    Cross Browser Testing is a process to test web applications across multiple browsers. Cross browser testing involves checking compatibility of your application across multiple web browsers and ensures that your web application works correctly across different web browsers.
                </p>
                <h3>
                    Do you have experience in compatibility testing? How did you perform compatibility testing?
                </h3>
                <p>
                    Yes, I did. For ATT- I have tested the application in different browser Firefox, chrome, IE, safari and opera also in different operating system windows, Linux and Mac. 
                </p>
                <h3>
                    What is accessibility testing?
                </h3>
                <p>
                    Accessibility testing is a type of systems testing designed to determine whether individuals with disabilities will be able to use the system in question, which could be software, hardware, or some other type of system. Disabilities encompass a wide range of physical problems, including learning disabilities as well as difficulties with sight, hearing, and movement.
                    <br />
                    The significance of this testing is to verify both usability and accessibility.
                </p>
                <h3>
                    What is End-to-End Testing?
                </h3>
                <p>
                    End-to-end testing is a technique used to test whether the flow of an application right from start to finish is behaving as expected. The purpose of performing end-to-end testing is to identify system dependencies and to ensure that the data integrity is maintained between various system components and systems. 
                    <br />
                    The entire application is tested for critical functionalities such as communicating with the other systems, interfaces, database, network, and other applications.
                </p>
                <p>Give an Example?</p>
                <p>
                    Yes, I did. Like in att.com, whenever customer click on the product category page, the product category page will be display all the product, then customer select a product it will navigate customer on the select item page, after that when customer select add to card it will show to customer the order place form, when customer place the order then shopping cart will be shown empty and order details page will be displayed where customer can see the order details this is end to end testing.
                </p>
                <h3>
                    What is Black box testing?
                </h3>
                <p>
                    Black box testing is a test where a tester performs testing without looking into the code. OR A testing method where the application under test is viewed as a black box and the internal behavior of the program is completely ignored. Testing occurs based upon the external specifications. Also known as behavioral testing, since only the external behavior of the program is evaluated and analyzed.
                </p>
                <p>
                    The functionality of an application based on the specifications. Independent Testing Team usually performs this type of testing during the software testing life cycle.
                </p>
                <h3>
                    What is Boundary Testing?
                </h3>
                <p>
                    Boundary value analysis is a type of black box or specification based testing technique in which tests are performed using the boundary values.
                </p>
                <p>
                    Example: An exam has a pass boundary at 50 percent, merit at 75 percent and distinction at 85 percent. The Valid Boundary values for this scenario will be as follows:
                </p>
                <ul>
                    <li>49, 50 – for pass</li>
                    <li>74, 75 – for merit</li>
                    <li>84, 85 – for distinction</li>
                    <p>
                        Boundary values are validated against both the valid boundaries and invalid boundaries.
                        <br />
                        The Invalid Boundary Cases for the above example can be given as follows:
                    </p>
                    <li>0 – for lower limit boundary value</li>
                    <li>101 – for upper limit boundary value</li>
                </ul>
                <h3>
                    What is Grey Box Testing?
                </h3>
                <p>
                    Grey Box testing is testing technique performed with limited information about the internal functionality of the system. Grey Box testers have access to the detailed design documents along with information about requirements.
                </p>
                <p>BlacBox+WhiteBox = GrayBox</p>
                <p>Gray-box testing Techniques: Regression testing</p>
                <h3>
                    What is Root cause analysis?
                </h3>
                <p>
                    Root cause analysis (RCA) is a systematic process for identifying “root causes” of problems or events and an approach for responding to them. RCA is based on the basic idea that effective management requires more than merely “putting out fires” for problems that develop, but finding a way to prevent them.
                </p>
                <p>Goals</p>
                <p>The primary goal of using RCA is to analyze problems or events to identify:</p>
                <ol>
                    <li>What happened</li>
                    <li>How it happened</li>
                    <li>Why it happened…so that</li>
                </ol>
                <p>Actions for preventing reoccurrence are developed</p>
                <p>Benefits</p>
                <ul>
                    <li>Identify barriers and the causes of problems, so that permanent solutions can be found.</li>
                    <li>Develop a logical approach to problem-solving, using data that already exists in the agency.</li>
                    <li>Identify current and future needs for organizational improvement.</li>
                    <li>Establish repeatable, step-by-step processes, in which one process can confirm the results of another.</li>
                </ul>
                <h3>
                    What is Client/Server Architecture mean?
                </h3>
                <p>
                    These terms refer to the two processes or two applications which will be communicating with each other to exchange some information. One of the two processes acts as a client process and another process acts as a server.
                </p>
                <h3>
                    What is Client Server Application?
                </h3>
                <p>
                    Client Server Application is a relationship in which client makes a request to the server and server fulfill the request as per client requirement. Like
                </p>
                <p>
                    The client makes a request through the internet to the server and server store the data process the request from the client.
                </p>
                <h3>
                    From your resume, I see that you have been working in one place for a very short period of time. This raises my questions why. Can you explain why?
                </h3>
                <p>
                    As a consultant, I am hired for a certain period of time, normally for 6 months to 1 year. Once the project is over, I needed to move to another project. That’s why you see me in the resume jumping frequently here and there. 
                </p> 
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resManual;