import React from 'react';
import GoogleAd from '../../GoogleAd';
import courseOutline from '../../../images/CourseOutline.png';
import Footer from '../../footer';
import accessibilityGuide from '../../../images/files/Accessibilityand508.pdf';

const accessibility = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h1 id='top' className= 'pl5 tl'>Accessibility Testing</h1>
            </div>
            <div className='programOutline'>
                <img className='courseOutline' src={courseOutline} alt="Course Outline"></img>
            </div>
            <secton>
            <h5>
                The following acronyms and abbreviations relevant in the world of web accessiblity,
            </h5>
                <ul>
                    <li>WAI-ARIA = Web Accessibility Initiative – Accessible Rich Internet Applications</li>
                    <li>WCAG = Web Content Accessibility Guidelines</li>
                    <li>W3C = World Wide Web Consortium</li>
                    <li>SRAT = Seizure Risk Analysis Tool</li>
                    <li>JAWS = Job Access With Speech</li>
                    <li>NVDA = NonVisual Desktop Access</li>
                    <li>TTS = text-to-speech</li>
                    <li>WebAIM = Web Accessibility In Mind</li>
                    <li>XHTML = Extensible HyperText Markup Language</li>
                    <li>DHTML = Dynamic HyperText Markup Language</li>
                    <li>DOM = Document Object Model</li>
                    <li>ALT = Alternative Text (Alt Text)</li>
                    <li>CSS = Cascading Style Sheets</li>
                    <li>HCI = Human-Computer Interaction</li>
                </ul>
            </secton>
            <hr/>
            <section>
                <div>
                    <h2>Common Accessibility Testing Questions</h2>
                </div>
                <div>
                    <h3>
                        What is accessibility?
                    </h3>
                    <p>
                        Accessibility refers to the ability of everyone, regardless of their physical or mental abilities, to access and use a space or service.<br/>
                        In the built environment, this means ensuring that buildings and public spaces can be accessed and used by everyone, regardless of their level of mobility. This can include things like adding ramps and Braille signage, as well as providing adequate lighting and acoustics.<br/>
                        When it comes to services, accessibility means making sure that everyone can use them, regardless of any barriers they may face. This can include everything from providing alternative formats for materials to offering training for staff on how to best serve customers with disabilities. By increasing accessibility, we can make our spaces and services more inclusive for everyone.<br/>
                        From a web point of view, it includes things like making sure that websites can be used by people who are blind or have low vision, and that web content can be read aloud by screen readers.
                        <br/>
                        Accessibility means the ability of service or product, to being accessed by disadvantaged and disabled persons, as
                            <ol>
                                <li>color blind</li>
                                <li>low vision</li>
                                <li>hearing loss or deaf</li>
                                <li>motor related issue</li>
                                <li>physical disability</li>
                                <li>cognitive disability</li>
                                <li>old age persons</li>
                                <li>low literacy</li>
                                <li>disadvantaged persons</li>
                            </ol>
                        Accessibility is about making product or service being usable by disadvantaged and disabled persons.<br/>
                        High accessibility shows being social responsible by the product or service.
                    </p>
                    <h3>
                        Why is Accessibility Important?
                    </h3>
                    <p>
                        Worldwide....
                    </p>
                    <ul>
                        <li>285 million people with some sort of visual impairment</li>
                        <li>275 million people with moderate-to-profound hearing impairment</li>
                        <li>Many more have physical, speech, cognitive, and neurological disabilities or a limited understanding of English.</li>
                    </ul>
                    <p>
                        Accessibility ensures all users can access the product or service, regardless of their capabilities.
                    </p>
                    <h3>
                        Accessible Design Benefits Everyone
                    </h3>
                    <ul>
                        <li>Most of us encounter accessibility features originally created for people with disabilities on a daily basis.</li>
                        <li>Each of these turns out to have applications that also make things easier for people without disabilities.</li>
                        <li>Examples include the following:<br/>
                            - Closed captions for the deaf on television programs
                            - Curb cutouts and ramps for wheelchair users
                            - “Talking books” for the blind
                        </li>
                    </ul>
                    <h3>
                        Why is Accessibility Important to Me?
                    </h3>
                    <ul>
                        <li>Electronic content produced at HHS must be made accessible to all users regardless of disability.</li>
                        <li>Electronic content includes:<br/>
                            -  Electronic documents
                            -  Web sites and pages
                            -  Applications
                            -  Multimedia
                            -  Agency-wide emails
                        </li>
                        <li>Before the content can be made public, it must be accessible per section 508.</li>
                        <li></li>
                    </ul>
                    <h3><a href='#508section'>508 Section</a></h3>
                    <h3>
                        What are different types of disabilities? 
                    </h3>
                    <p>
                        Disabilities can be categorized into various types based on their nature and impact on an individual's life. It's important to note that each person's experience with a disability is unique, and the classification might not encompass all aspects of their condition. Here are some different types of disabilities: 
                    </p>
                    <ol>
                        <li><strong>Physical Disabilities:</strong> These disabilities affect a person's physical functioning and mobility. They can include conditions such as paralysis, amputation, muscular dystrophy, cerebral palsy, and spinal cord injuries.</li>
                        <li><strong>Sensory Disabilities:</strong><br/>
                            - <strong>Visual Impairments:</strong> These include conditions ranging from partial vision loss to complete blindness.<br/>
                            - <strong>Hearing Impairments:</strong> These include conditions ranging from partial hearing loss to complete deafness.
                        </li>
                        <li><strong>Cognitive Disabilities:</strong> These disabilities affect cognitive functions such as memory, learning, problem-solving, and communication. Conditions like intellectual disabilities, autism spectrum disorders, and specific learning disabilities fall under this category.</li>
                        <li><strong>Developmental Disabilities:</strong> These disabilities typically emerge early in life and affect a person's overall development. Examples include Down syndrome and developmental delays.</li>
                        <li><strong>Psychiatric Disabilities:</strong> Mental health conditions, such as depression, anxiety disorders, bipolar disorder, and schizophrenia, fall under this category.</li>
                        <li><strong>Neurological Disabilities:</strong> These disabilities result from disorders of the nervous system. Conditions like epilepsy, multiple sclerosis, and Parkinson's disease are examples.</li>
                        <li><strong>Invisible Disabilities:</strong> These disabilities are not immediately apparent to others. Chronic pain, chronic fatigue syndrome, and certain mental health conditions can fall into this category.</li>
                        <li><strong>Communication Disabilities:</strong> These disabilities affect a person's ability to express themselves or understand others. Conditions like aphasia (language impairment) and speech disorders are examples.</li>
                        <li><strong>Mobility Disabilities:</strong> While related to physical disabilities, mobility disabilities specifically refer to difficulties in movement, which might require the use of assistive devices like wheelchairs or mobility scooters.</li>
                        <li><strong>Acquired Disabilities:</strong> These disabilities occur after birth due to injury, illness, or other factors. Examples include traumatic brain injuries, spinal cord injuries, and disabilities resulting from accidents.</li>
                        <li><strong>Chronic Illnesses:</strong> Conditions like diabetes, lupus, and Crohn's disease can significantly impact a person's daily life and functioning.</li>
                        <li><strong>Autoimmune Disorders:</strong> These conditions involve the immune system attacking the body's own tissues, leading to various health issues. Examples include rheumatoid arthritis and multiple sclerosis.</li>
                        <li><strong>Degenerative Disabilities:</strong> These disabilities worsen over time due to progressive diseases. Amyotrophic lateral sclerosis (ALS) and certain types of muscular dystrophy are examples.</li>
                        <li><strong>Congenital Disabilities:</strong> These are disabilities that a person is born with. They can range from genetic conditions like cystic fibrosis to congenital heart defects.</li>
                        <li><strong>Social and Emotional Disabilities:</strong> These disabilities affect a person's ability to interact with others and navigate social situations. Conditions like social anxiety disorder and certain personality disorders can fall into this category.</li>
                    </ol>
                    <p>
                        It's important to approach each individual with respect and understanding, recognizing that disabilities can manifest in various ways and can impact different aspects of a person's life. Additionally, the language and terminology used to describe disabilities are evolving, and it's recommended to use person-first language to emphasize the person rather than the disability (e.g., "person with a disability" rather than "disabled person").
                    </p>
                    <h3>
                        What is accessibility testing?
                    </h3>
                    <p>
                        Accessibility testing is the process of assessing how well a software application accommodates users with disabilities. This can include hearing impairments, visual impairments, physical disabilities, and cognitive disabilities.<br/>
                        The goal of accessibility testing is to identify any barriers that may prevent users with disabilities from using the software. This can involve testing the user interface, menus, buttons, and other controls to ensure that they are easy to use. In addition, accessibility testing may also involve assessing the color contrast of text and visuals, as well as the clarity of audio playback.<br/>
                        By identifying and addressing any accessibility issues early on, developers can ensure that their software is usable by the widest possible audience.
                    </p>
                    <h3>
                        What is the purpose of accessibility testing? Explain?
                    </h3>
                    <p>
                        Accessibility testing is a sort of software testing that ensures that the programme under test is useable by persons with disabilities such as hearing loss, colour blindness, senior citizens, and other disadvantaged groups. Usability Testing is a subset of this.<br/>
                        Accessibility testing is mostly used to accommodate people with disabilities such as: Hearing Deficiency: This refers to a person's inability to hear or hear clearly, as well as sensory impairments including hearing disabilities and deafness. People who have difficulty reading are said to have a learning impairment. Physical Disabilities: People with this sort of disability are unable to operate a keyboard or mouse with one hand, resulting in difficulties with hand tasks, muscle detention, and diminished motor abilities. Visual Impairments: Complete blindness, low vision abilities, colour blindness, flashing effect issues, and visual strobe are all examples of visual impairments. A person with cognitive deficiency will have poor memory, be unable to understand increasingly complicated events, and have learning difficulties.
                    </p>
                    <h3>
                        What is Web Accessibility?
                    </h3>
                    <p>
                        Web accessibility is the inclusive practise of ensuring that no barriers exist that hinder persons with physical impairments, situational limitations, and socioeconomic bandwidth and speed restrictions from interacting with or accessing websites on the World Wide Web. When websites are properly planned, created, and edited, all users have access to the same information and capabilities.
                    </p>
                    <h3>
                        What is 508 in web accessibility testing?
                    </h3>
                    <p>
                        "508 compliance" refers to the adherence of digital content, including websites, software applications, documents, and multimedia, to the accessibility standards outlined in Section 508 of the Rehabilitation Act of 1973 in the United States. Section 508 requires that federal agencies make their electronic and information technology accessible to people with disabilities.
                        <br/>
                        The Rehabilitation Act, specifically Section 508, was enacted to ensure that individuals with disabilities have equal access to federal government information and communication technology (ICT) resources. This includes websites, software, documents, videos, and other digital content produced or used by federal agencies.
                        <br/>
                        Key points regarding 508 compliance include:
                    </p>
                    <ul>
                        <li>Web Accessibility: Section 508 requires that federal websites and web applications be designed, developed, and maintained in a way that allows individuals with disabilities to access the content using assistive technologies, such as screen readers.</li>
                        <li>Document Accessibility: Documents produced by federal agencies, such as PDFs, must be made accessible to people with disabilities. This involves providing alternative text for images, using proper document structure, and ensuring compatibility with screen readers.</li>
                        <li>Multimedia Accessibility: Multimedia content, such as videos and audio files, must include captions, transcripts, and audio descriptions to ensure that individuals with hearing or visual impairments can access the content.</li>
                        <li>Software Accessibility: Software applications used by federal agencies should be designed to accommodate people with disabilities, allowing them to effectively use the software's features.</li>
                        <li>Procurement of Accessible Technology: Federal agencies are required to consider accessibility when procuring new technology, ensuring that the technology they purchase is usable by individuals with disabilities.</li>
                        <li>Exceptions: Section 508 does include some exceptions for situations where achieving full accessibility is not feasible due to specific limitations or security concerns.</li>
                    </ul>
                    <p>
                        While Section 508 specifically applies to U.S. federal agencies, its principles and guidelines have influenced accessibility standards globally. Many organizations, both in the public and private sectors, follow similar accessibility standards to ensure that their digital content is usable by everyone, regardless of their abilities. The Web Content Accessibility Guidelines (WCAG), developed by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C), have become the internationally recognized standard for web accessibility and are closely aligned with Section 508 guidelines.
                    </p>
                    <h3>
                        How to test with above 15 disabilities as a accessibility test?
                    </h3>
                    <p>
                        Conducting accessibility testing for various disabilities is an essential step in ensuring that digital products and environments are inclusive and usable for everyone. Here's a general guideline on how to approach accessibility testing for different types of disabilities:
                    </p>
                    <ol>
                        <li><strong>Visual Disabilities:</strong><br/>
                            - Test with screen readers like JAWS (Job Access With Speech) for Windows or VoiceOver for macOS and iOS. <br/>
                            - Disable images and test the content using screen readers to ensure it's read accurately. <br/>
                            - Check for proper semantic structure using headings, lists, and landmarks to assist screen reader users in navigating content. <br/>
                        </li>
                        <li><strong>Hearing Disabilities:</strong><br/>
                            - Test videos with closed captions and ensure accurate synchronization of captions with spoken content. <br/>
                            - Verify that important auditory information is also presented visually or in text form. <br/>
                        </li>
                        <li><strong>Cognitive Disabilities:</strong><br/>
                            - Test for readability by ensuring clear and simple language is used.<br/>
                            - Check for consistent navigation and layout to reduce cognitive load.<br/>
                            - Test with individuals with cognitive disabilities to gather feedback on usability.<br/>
                        </li>
                        <li><strong>Mobility Disabilities:</strong><br/>
                            - Test keyboard navigation to ensure all interactive elements can be accessed without a mouse.<br/>
                            - Verify that focus indicators are clearly visible and indicate the active element.<br/>
                        </li>
                        <li><strong>Communication Disabilities:</strong><br/>
                            - Test with users who have communication disabilities to ensure they can interact effectively.<br/>
                            - Check for alternatives to text-based communication, such as providing visual symbols or images.<br/>
                        </li>
                        <li><strong>Neurological Disabilities:</strong><br/>
                            - Test for flashing or rapidly changing content that might trigger seizures or discomfort (follow WCAG guidelines for this).<br/>
                            - Ensure that content and interactions don't cause sensory overload.<br/>
                        </li>
                        <li><strong>Invisible Disabilities:</strong><br/>
                            - Use screen readers and keyboard navigation to ensure that all interactive elements are accessible.<br/>
                            - Provide options to adjust font size, contrast, and other visual settings.<br/>
                            - Test with users who have these conditions to gather feedback on any potential challenges.<br/>
                        </li>
                        <li><strong>Acquired Disabilities and Chronic Illnesses:</strong><br/>
                            - Ensure that the interface is responsive and performs well on slower connections.<br/>
                            - Consider providing alternative methods of interaction for those with limited energy or mobility.<br/>
                        </li>
                        <li><strong>Social and Emotional Disabilities:</strong><br/>
                            - Focus on clear and concise communication, avoiding jargon or complex language.<br/>
                            - Test for user interfaces that are intuitive and don't cause unnecessary stress or anxiety.<br/>  
                        </li>
                        <li><strong>General Considerations:</strong><br/>
                            - Utilize automated accessibility testing tools like Axe, WAVE, or Lighthouse to identify potential issues. <br/>
                            - Perform manual testing with real users who have different disabilities to gain insights into actual usability challenges. <br/>
                            - Follow the Web Content Accessibility Guidelines (WCAG) as a framework for making digital content accessible. <br/>
                        </li>
                    </ol>
                    <p>
                        Remember that each disability presents unique challenges, and involving individuals who have those disabilities in the testing process is crucial. Their feedback and insights can provide valuable information about how well your product accommodates their needs and preferences.
                    </p>
                    
                    <h3>
                        What is WCAG?
                    </h3>
                    <p>
                        The Web Content Accessibility Rules are part of a set of web accessibility guidelines issued by the World Wide Web Consortium's Web Accessibility Initiative, the primary worldwide standards body for the Internet.
                    </p>
                    <h3>
                        Why is accessibility testing important?
                    </h3>
                    <p>
                        Accessibility testing is important as it is needed due to <br/>

                        -   Application usage by persons  with various issues like
                        <ol>
                            <li>color blind</li>
                            <li>low vision</li>
                            <li>hearing loss or deaf</li>
                            <li>motor related issue</li>
                            <li>physical disability</li>
                            <li>cognitive disability</li>
                            <li>old age persons</li>
                            <li>low literacy</li>
                            <li>disadvantaged persons</li>
                        </ol>  
                            - complying with local legislations related to access by disabled and disadvantaged persons<br/>
                            - avoid law suit as disadvantaged and disabled persons had filed lawsuits for inaccessible software<br/>
                            - increase user base amongst disadvantaged and disabled persons<br/>
                            - garner quick adaptation by the end user<br/>
                            - company or application is more socially responsible and better image
                    </p>
                    <h3>
                        What Are the Four Major Categories of Accessibility?
                    </h3>
                    <p>
                        The Four Major Categories of Accessibility as per WCAG or Web Content Accessibility Guidelines -
                        <ul>
                            <li>Perceivable - user can comprehend the information</li>
                            <li>Operable - user can use, navigate the information</li>
                            <li>Understandable - user can Understand the information</li>
                            <li>Robust - information is interpreted reliably</li>
                        </ul>         
                    </p>
                    <h3>
                        What are the four principles of accessibility?
                    </h3>
                    <p>
                        When it comes to accessibility, there are four key principles to keep in mind: perceivable, operable, understandable, and robust.<br/>
                        - First and foremost, information and user interface elements must be perceivable - that is, they must be visible or audible.<br/>
                        - Next, they must be operable - that is, users must be able to interact with them using their preferred input method.<br/>
                        - In addition, the information and user interface elements must be understandable - that is, they must be clear and easy to use.<br/>
                        - Finally, the information and user interface elements must be robust - that is, they must be compatible with assistive technologies and future-proofed against changes in technology.<br/>
                        <br/>
                        By keeping these four principles in mind, you can ensure that your site or application is accessible to all users. 
                    </p>
                    <h3>
                        What is WAI-ARIA?
                    </h3>
                    <p>
                        WAI-ARIA is a technology that can be used to add extra information about the structure and function of a page. This can be especially helpful for users with disabilities who are using assistive technologies.<br/>
                        WAI-ARIA is supported by most modern web browsers, and you can use it to add information such as labels, descriptions, and keyboard shortcuts.<br/>
                        When using WAI-ARIA, you should keep in mind that it is a supplemental technology. This means that it should be used in addition to other accessibility features, such as providing text alternatives for non-text content.
                    </p>
                    <h3>
                        Questions about the Web Content Accessibility Guidelines
                    </h3>
                    <p>
                        In this section, you will be asked questions about the Web Content Accessibility Guidelines (WCAG). These are a set of international standards that dictate how to make web content accessible to everyone, regardless of any disabilities they may have.
                    </p>
                    <h3>
                        What is the WCAG?
                    </h3>
                    <p>
                        The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to people with disabilities. The WCAG is developed by the World Wide Web Consortium (W3C), an international standards body.<br/>
                        There are three levels of conformance: A, AA, and AAA. The WCAG 2.0 standards are currently the most widely-used guidelines for accessible web design.<br/>
                        The WCAG 2.1 standards were released in June 2018 and are rapidly gaining popularity. The WCAG standards include a wide range of accessibility features, from providing alt text for images to designing pages that can be navigated using only a keyboard.<br/>
                        By following the WCAG standards, web designers can help ensure that their content is accessible to everyone. 
                    </p>
                    <h3>
                        What is the difference between WCAG 1.0 and 2.0?
                    </h3>
                    <p>
                        WCAG 1.0 was published in 1999 and WCAG 2.0 in 2008. Both guidelines are developed by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C).<br/>
                        The biggest difference is that WCAG 1.0 contains 14 guidelines organized under four principles (perceivable, operable, understandable, and robust), while WCAG 2.0 has twelve guidelines divided into three levels of conformance (A, AA, and AAA).<br/>
                        Another important distinction is that WCAG 1.0 uses technologies such as HTML and CSS, while WCAG 2.0 uses newer technologies such as WAI-ARIA and SVG. In addition, WCAG 2.0 provides more detailed guidance on how to create accessible content.<br/>
                        Finally, WCAG 1.0 is technology-specific while WCAG 2.0 is technology-neutral. This means that WCAG 1.0 only applies to web content delivered using HTML, while WCAG 2.0 can be applied to any type of web content, including web applications and rich media.
                    </p>
                    <h3>
                        What is the most important thing to keep in mind when making a website accessible?
                    </h3>
                    <p>
                        There are many things to keep in mind when making a website accessible, but one of the most important is to ensure that all content is perceivable. This means that users must be able to see or hear the information on the page.<br/>
                        To make sure your content is perceivable, you can provide text alternatives for non-text content, such as images or videos. You can also use color and contrast to make sure your content is visible, and choose fonts that are easy to read.<br/>
                        In addition, you should ensure that all user interface elements are operable. This means that users must be able to interact with the page using their preferred input method.<br/>
                        Finally, you should make sure that the information and user interface elements are understandable and robust. This means that they must be clear and easy to use, and compatible with assistive technologies. By keeping these four principles in mind, you can help ensure that your website is accessible to all users.
                    </p>
                    <h3>
                        What are some methods for making web content accessible?
                    </h3>
                    <p>
                        There are many methods for making web content accessible. Some of the most common include providing text alternatives for non-text content, using color and contrast to improve visibility, choosing fonts that are easy to read, and designing pages that can be navigated using only a keyboard.<br/>
                        In addition, you can use WAI-ARIA to add extra information about the structure and function of your page. This can be especially helpful for users with disabilities who are using assistive technologies.<br/>
                        Finally, you should test your website regularly to ensure that it is accessible to all users.
                    </p>
                    <h3>
                        How can you test a website for color blindness? 
                    </h3>
                    <p>
                        There are a few different ways that you can test a website for color blindness.<br/>
                        One way is to use the Color Contrast Checker tool, which is available for free online. This tool lets you enter the URL of the website you want to test, and it will then generate a report that shows how well the site meets the contrast requirements for people with different types of color vision deficiency.<br/>
                        Another way to test a website for color blindness is to use a browser plugin like NoCoffee Vision Simulator. This plugin allows you to simulate what the site would look like to someone with a specific type of color vision deficiency, which can be very helpful in finding potential accessibility issues.<br/>
                        Finally, it's always a good idea to ask someone with color vision impairment to test the site for you, as they may be able to notice problems that you wouldn't otherwise catch.
                    </p>
                    <h3>
                        How can you test a website for hearing impairments?
                    </h3>
                    <p>
                        While most website accessibility testing tools focus on visual impairments, it is also important to test for hearing impairments.<br/>
                        There are a few key ways to do this.<br/>
                        - First, you can use a screen reader to test how well the website can be read aloud. This will help to identify any areas where text is not being properly read or where audio descriptions are missing.<br/>
                        - Additionally, you can test the website's audio quality and volume levels to ensure that they are sufficient for users with hearing impairments.<br/>
                        - Finally, you can also test for captioning accuracy and completeness. By testing for all of these factors, you can ensure that your website is accessible to everyone.
                    </p>
                    <h3>
                        How can you test a website for low vision?
                    </h3>
                    <p>
                        There are a few different ways that you can test a website for low vision.<br/>
                        One method is to use a screen reader, which will read the text on the screen aloud. This can be helpful for people who have difficulty reading small print. Another method is to increase the font size or the contrast on the screen. This can make it easier to read text that is otherwise difficult to see.<br/>
                        Finally, you can also use a magnifier to enlarge the entire page or selected elements on the page. By testing a website in these different ways, you can ensure that it is accessible to people with low vision.
                    </p>
                    <h3>
                        How can you test a website for motor impairments?
                    </h3>
                    <p>
                        There are a number of ways to test a website for motor impairments.<br/>
                        - One method is to use a screen reader, which will read out the text on the website as well as provide information about the structure of the page.<br/>
                        - Another method is to use a keyboard navigation tool, which will allow you to move around the website without using a mouse.<br/>
                        - Finally, you can also use a magnifier tool to enlarge the text and images on the website.<br/>
                        <br/>
                        By testing the website with these different tools, you can ensure that it is accessible for users with motor impairments.
                    </p>
                    <h3>
                        How can you test a website for seizures?
                    </h3>
                    <p>
                        There are a few different ways to test your website for seizures. First, you can use an online tool like the Seizure Risk Analysis Tool (SRAT). This tool will help you identify which areas of your site are most likely to trigger seizures.<br/>
                        You can also use a seizure simulator, which is a program that mimics the effects of a seizure.<br/>
                        Finally, you can ask someone with epilepsy to test your site. If you know someone with epilepsy, they can help you identify areas of your site that may be more likely to trigger a seizure.<br/>
                        By testing your website for seizures, you can help to ensure that your site is accessible to everyone.
                    </p>
                    <h3>
                        What is the difference between an accessibility audit and an accessibility test?
                    </h3>
                    <p>
                        There are two main types of evaluations that can be performed to assess the accessibility of a digital product: an accessibility audit and an accessibility test.<br/>
                        - An accessibility audit is a broad overview of the product's compliance with accessibility standards. It typically includes a review of the code, design, and content to identify any potential barriers that could prevent users with disabilities from using the product.<br/>
                        - An accessibility test, on the other hand, is a hands-on assessment of how well a user with a disability can perform specific tasks using the product. This type of evaluation is often used to assess the effectiveness of specific accessibility features, such as alternative text for images or captioning for videos.<br/>
                        While both audits and tests are important for ensuring the accessibility of digital products, they serve different purposes and should be used as complementary tools in an overall accessibility program.
                    </p>
                    <h3>
                        Questions about accessibility coding and web standards
                    </h3>
                    <p>
                        In this section, you will be asked questions about accessibility coding and web standards. 
                    </p>
                    <h3>
                        In this section, you will be asked questions about accessibility coding and web standards.
                    </h3>
                    <p>
                        
                        Alt text and longdesc are two ways of adding descriptions to images on the web.<br/>
                         - Alt text is a brief description that is displayed in place of an image if the image cannot be loaded.<br/>
                         - Longdesc is a longer description that can be accessed by clicking on a link or icon.<br/>
                        Both alt text and longdesc can be used to provide information about the content of an image, but alt text is generally shorter and more concise. Longdesc can provide a more complete description, making it useful for images that are complex or have a lot of detail.<br/>
                        In addition, longdesc can be used to provide information about the function of an image, whereas alt text is primarily used to describe the visual content. When choosing between alt text and longdesc, consider how much information you need to provide and how much space you have available.<br/>
                        If you only need to provide a brief description, then alt text may be sufficient. However, if you need to provide more detailed information, then longdesc may be a better option.
                    </p>
                    <h3>
                        What is the difference between a site map and an accessibility map?
                    </h3>
                    <p>
                        A site map is a representation of all the content on a website, typically organized in a hierarchical fashion. It can be used to help visitors find what they're looking for, as well as to give search engines an overview of the site's structure.<br/>
                        An accessibility map, on the other hand, is a map that shows which parts of a website are accessible to people with disabilities. This can be important for both compliances with disability laws and for making sure that everyone can use and enjoy the site.<br/>
                        While both types of maps can be helpful, they serve different purposes and should not be confused.
                    </p>
                    <h3>
                        Questions about accessibility software and hardware 
                    </h3>
                    <p>
                        In this section, you will be asked questions about accessibility software and hardware.
                    </p>
                    <h3>
                        What is the difference between a screen reader and a text-to-speech program?
                    </h3>
                    <p>
                        - A screen-reader is a software program that assists blind or visually-impaired users by reading aloud the text that is displayed on the computer screen.<br/>
                        - A text-to-speech program, on the other hand, is a software application that converts written text into spoken words.<br/>
                        Both screen-readers and text-to-speech programs can be used to improve accessibility for individuals with vision impairments, but they differ in terms of functionality and features.<br/>
                        Screen-readers are specifically designed to work with computer applications and websites, while text-to-speech programs can be used to convert any written text into speech. Screen-readers also typically offer a wider range of features than text-to-speech programs, such as the ability to navigate websites and control the cursor without using a mouse.<br/>
                        <br/>
                        Ultimately, the choice of which type of program to use depends on the individual's needs and preferences.
                    </p>
                    <h3>
                        What is the most popular screen reader?
                    </h3>
                    <p>
                        A screen reader is a software program that converts on-screen text into speech, making it possible for blind and visually impaired users to access digital information.<br/>
                        There are a number of different screen readers available on the market, but the most popular one is JAWS (Job Access With Speech). Developed by Freedom Scientific, JAWS is available for both Windows and macOS. As well as reading on-screen text aloud, JAWS also provides various commands for navigating web pages and applications. It can be used with a variety of assistive technologies, such as Braille displays and refreshable Braille displays.<br/>
                        While JAWS is the most popular screen reader, there are a number of other options available, including NVDA (NonVisual Desktop Access), Window-Eyes, VoiceOver (built into MacOS) and Orca (built into Linux).
                    </p>
                    <h3>
                        What is the most popular text-to-speech program?
                    </h3>
                    <p>
                        In recent years, text-to-speech (TTS) programs have become increasingly popular. TTS programs allow users to input text and convert it into speech, making it easy to create audio versions of documents or to listen to books and other reading materials.<br/>
                        There are a variety of TTS programs available on the market, but the most popular is undoubtedly Natural Reader. Natural Reader offers a high-quality TTS engine that can convert text into natural-sounding speech in a variety of languages. In addition, it offers a wide range of customization options, allowing users to adjust the speed, pitch, and volume of the generated speech. Natural Reader also has a convenient mobile app, making it easy to listen to text on the go.<br/>
                        For all these reasons, Natural Reader is the clear choice for the most popular TTS program.
                    </p>
                    <h3>
                        What is Assistive Technology?
                    </h3>
                    <ul>
                        <li>Assistive Technology (AT) is any item, piece of equipment, or system that is commonly used to increase, maintain, or improve functional capabilities of individuals with disabilities. <br/>
                            - Some AT devices are well-known:
                                - Eyeglasses
                                - Hearing aids
                                - Canes
                                - Wheelchairs
                            - AT software includes the following:
                                - Text-to-speech converters
                                - Screen magnifiers
                                - On-screen keyboards
                                - Speech-to-text converters
                        </li>
                        <li>AT relies on proper use of the delivery format.</li>
                    </ul>
                    <h3>
                        What is the difference between assistive technology and adaptive technology?
                    </h3>
                    <p>
                        When most people think of assistive technology, they picture devices like wheelchairs and walkers. However, assistive technology can actually refer to any type of device or software that helps people with disabilities to perform everyday tasks. This can include anything from dishwashers with special controls for people with limited mobility to text-to-speech software that helps people with visual impairments to read.<br/>
                        In contrast, adaptive technology is specifically designed to be used by people with disabilities. This includes modified computer keyboards, adapted door handles, and other devices that help people with physical limitations to live independently. While adaptive technology is a subset of assistive technology, the two terms are often used interchangeably.
                    </p>
                    <h3>
                        What is the most popular assistive technology?
                    </h3>
                    <p>
                        Assistive technology is any type of technology that helps people with disabilities to achieve their goals. There are a wide variety of assistive devices available, ranging from simple tools like magnifying glasses to sophisticated computer software.<br/>
                        The most popular type of assistive technology is communication aids. These devices can help people with speech impairments to communicate more effectively.<br/>
                        Other popular types of assistive technology include mobility aids, educational aids, and environmental control systems.
                    </p>
                    <h3>
                        Questions about disabilities<br/>
                        What is the most common form of color blindness and how can you make your website accessible to people with this disability?
                    </h3>
                    <p>
                        The most common form of color blindness is red-green color blindness, which affects approximately 8 percent of men and 0.5 percent of women. People with this condition have trouble distinguishing between red and green, and may also have difficulty with other colors in the green-yellow-red spectrum.<br/>
                        While there is no cure for color blindness, there are a number of ways to make websites more accessible to people with this condition. For example, using high contrast color schemes can help to make text more readable, and avoiding the use of color as the sole means of conveying information can help to ensure that important information is not missed.<br/>
                        By taking these simple steps, website owners can help to ensure that their site is accessible to the widest possible audience.
                    </p>
                    <h3>
                        What is the most common form of hearing impairment and how can you make your website accessible to people with this disability?
                    </h3>
                    <p>
                        Hearing impairments are fairly common, affecting approximately 15% of the world’s population. The most common form of hearing impairment is called sensorineural hearing loss, which is caused by damage to the inner ear or the auditory nerve. This type of hearing loss can be caused by exposure to loud noise, viral infections, head trauma, and certain diseases.<br/>
                        While there is no cure for sensorineural hearing loss, it can be managed with the use of Hearing Aids or cochlear implants. To make your website accessible to people with this disability, you can provide text-to-speech options and captioning for videos. You can also use high-contrast color schemes and large font sizes to make your site easier to read.<br/>
                        By taking these simple steps, you can help to ensure that everyone has equal access to your content.
                    </p>
                    <h3>
                        What is the most common form of seizure and how can you make your website accessible to people with this disability?
                    </h3>
                    <p>
                        A seizure is a sudden, uncontrolled electrical disturbance in the brain. Seizures can cause a variety of symptoms, from convulsions and loss of consciousness to more subtle changes in behavior. The most common form of seizure is called a tonic-clonic seizure, also known as a grand mal seizure. This type of seizure is characterized by muscle rigidity, loss of consciousness, and convulsions. Seizures can be caused by a variety of factors, including head injuries, stroke, infectious diseases, and certain neurological conditions. Approximately 1 in 26 people will experience a seizure at some point in their lives.<br/>
                        There are a few things you can do to make your website accessible to people with seizures. First, avoid using flashing lights or animation. These can trigger seizures in some people. Second, provide alternative content for any audio or video content on your site. This will allow people to still access the information even if they cannot see or hear the original content. Finally, make sure your website can be navigated using keyboard commands. This will allow people with limited mobility to still use your site.<br/>
                        By following these simple guidelines, you can help to ensure that your website is accessible to everyone.
                    </p>
                    <h3>
                        How can you make a website accessible to people with cognitive impairments?
                    </h3>
                    <p>
                        When designing a website, it is important to consider the needs of all users, including those with cognitive impairments. There are a number of steps you can take to make your site more accessible to this group.<br/>
                        - First, use clear and concise language. This will help to ensure that your content can be easily understood.<br/>
                        - Second, use visual cues to help guide users through your site. For example, you can use color to highlight important links or buttons.<br/>
                        - Third, provide options for users to control their experience. For instance, allow visitors to adjust the font size or contrast levels on your site.<br/>
                        <br/>
                        By taking these steps, you can help to improve the accessibility of your website for everyone.<br/>
                        While there are certainly other questions that could be asked in an interview for a position in accessibility testing, these thirty should give you a good starting point. Preparation is key when it comes to job interviews, so take the time to go over these questions and come up with thoughtful answers. The more confident you appear during the interview process, the better your chances of landing the job! 
                    </p>
                    <h3>
                        What do you think is the most important thing to keep in mind when designing for mobile accessibility?
                    </h3>
                    <p>
                        The most important thing to keep in mind when designing for mobile accessibility is that people with disabilities should be able to use the same content and services as people without disabilities.<br/>
                        When designing for mobile accessibility, it is important to keep the following in mind:<br/>
                        - Screen size: Make sure that the content can be seen and used on a small screen.<br/>
                        - Touch screen: Make sure that the content can be used on a touch screen.<br/>
                        - Internet connection: Make sure that the content can be loaded and used on a mobile device with a slower Internet connection.<br/>
                        - Operating system: Make sure that the content can be used on a mobile device with a different operating system than a desktop computer.
                    </p>
                    <h3>
                        How do you think accessibility testing on mobile devices is different from testing on desktop computers?
                    </h3>
                    <p>
                        Accessibility testing on mobile devices is different from testing on desktop computers in a few key ways.<br/>
                        - First, mobile devices have smaller screen sizes, which can make it more difficult to see and use web content.<br/>
                        - Second, mobile devices typically have touch screens, which can make it more difficult to use certain types of input devices, such as keyboards and mice.<br/>
                        - Third, mobile devices typically have slower Internet connections, which can make it more difficult to load and use web content.<br/>
                        <br/>
                        Finally, mobile devices often have different operating systems and software than desktop computers, which can make it more difficult to use certain types of Assistive Technology. 
                    </p>
                    <h3>
                        Explain Google LightHouse.
                    </h3>
                    <p>
                        Google Lighthouse is an open-source, automated web page quality measurement tool. It can be used on any web page, whether it is public or requires authentication. Google Lighthouse evaluates web page performance, accessibility, and search engine optimization.
                    </p>
                    <h3>
                        What is Unit Testing?
                    </h3>
                    <p>
                        Unit Testing is a sort of software testing that examines individual software units or components. The goal is to ensure that each unit of software code works as intended. Unit testing is carried out by developers throughout the development (coding) phase of an application. Unit tests are used to isolate a part of code and ensure that it is correct. An singular function, method, process, module, or object might be considered a unit.
                    </p>
                    <h3>
                        What is Integration Testing?
                    </h3>
                    <p>
                        Integration testing is a sort of testing in which software modules are conceptually connected and tested as a unit. A typical software project is made up of several software modules written by various programmers. The goal of this level of testing is to find flaws in the way various software modules interact when they're combined.
                    </p>
                    <h3>
                        Explain Manual Testing.
                    </h3>
                    <p>
                        Manual testing is a type of software testing in which test cases are run by hand rather than using an automated tool. All test cases are manually executed by the tester from the perspective of the end user. It determines whether or not the application meets the requirements specified in the requirement document. To finish nearly 100% of the software application, test cases are created and implemented. Manually created test case reports are also available.
                    </p>
                    <h3>
                        What is the significance of type in the input?
                    </h3>
                    <p>
                        For screenreader users, the HTML type attribute is critical. The types will assist them in determining the input type as well as the security rationale for the password field. If the password type is not specified, the screenreader will read the password aloud to the user.
                    </p>
                    <h3>
                        Why do we need Accessibility Testing?
                    </h3>
                    <p>
                        Accessibility on the Internet Testing ensures that web/mobile applications are accessible to people with disabilities such as blindness, hearing loss, and motor or cognitive impairments. Web accessibility testing guarantees that web information is accessible to everyone without any restrictions. 
                    </p>
                    <h3>
                        What exactly is ARIA? How will you choose ARIA tags while developing a Tab module?
                    </h3>
                    <p>
                        ARIA (Accessible Rich Internet Application) is the acronym for Accessible Rich Internet Application. Screenreader users will benefit from ARIA. It will not make a visual change. The HTML tags are lacking a lot of tags, states, and properties. In addition, many of the custom modules we create, like as carousels and pagination, are not described in the HTML. Screenreader users will be unable to comprehend these. ARIA defines the responsibilities, characteristics, and states for screenreaders in order to convey information about such modules. In a nutshell, ARIA serves as a link between HTML's missing information and screenreaders.
                    </p>
                    <h3>
                        What is an accessibility tree, exactly?
                    </h3>
                    <p>
                        The accessibility tree exists in the same way as the DOM does. This tree can also be seen in the debuggers for Firefox and Chrome. This allows the developer to examine how accessibility components such as role, focusable, alt tag, aria-labeldby, and others are applied.
                    </p>
                    <h3>
                        How do people with vision impairments use mobile devices?
                    </h3>
                    <p>
                        Screenreaders come pre-installed on mobile devices. Those are used by disabled individuals to utilise mobile phones. 
                    </p>
                    <h3>
                        What is usability and accessibility testing?
                    </h3>
                    <p>
                        Usability testing is a type of software testing which tests a software application on the level of usability or easiness that an end-user will have in using the application under test. During usability testing, the end-user is monitored by the tester or researcher, for ease of their task completion, any issue or problems being faced.<br/>
                        Accessibility testing is a part of usability testing and involves testing of application under test, for being usable by people with disabilities as in age, motion, hearing, vision, even literacy.
                    </p>
                    <h3>
                        Is accessibility testing functional or nonfunctional?
                    </h3>
                    <p>
                        Yes, accessibility testing can be functional testing if we validate the functioning of the application against the functional requirements only.<br/>
                        But, accessibility testing focuses on usage by disadvantaged and disabled persons  and ease with which they can learn and use the application.<br/>
                        Hence, though accessibility testing is not functional testing but can be used as functional testing if desired or specified for same.
                    </p>
                    <h3>
                        What is accessibility mode?
                    </h3>
                    <p>
                        Accessibility mode is the mode or environment which helps disadvantaged and disabled persons to access and use the application software. In Microsoft windows the accessibility mode has various options like magnifier, screen reading, speech recognition, etc
                    </p>
                    <h3>
                        What is mobile accessibility testing?
                    </h3>
                    <p>
                        Mobile accessibility testing is testing of mobile software, applications and websites  for being accessible. Mobile accessibility testing is a part of usability testing and involves testing of application under test, for being usable by people with disabilities as in age, motion, hearing, vision, even literacy.
                    </p>
                    <h3>
                        What is meant by smoke testing?
                    </h3>
                    <p>
                        Smoke testing is done in earlier stages of software development when the software build has many errors, to detect the correct working of crucial functionality.
                    </p>
                    <h3>
                        Which of the following is an example of assistive technology?
                    </h3>
                    <p>
                        An example of assistive technology is screen reader which reads out information present on the screen like voice instructions on an ATM machine.
                    </p>
                    <h3>
                        What is an accessibility audit?
                    </h3>
                    <p>
                        An accessibility audit is an audit of accessibility compliance by the product or service.  It assesses the level of accessibility compliance and which of disadvantaged and disabled persons can access the product or service.
                    </p>
                    <h3>
                        What does accessibility checker do?
                    </h3>
                    <p>
                        Accessibility checker is present in Microsoft office to check accessibility of a Microsoft Office document.
                    </p>
                    <h3>
                        Does Chrome have a screen reader?
                    </h3>
                    <p>
                        Yes, Chrome have a screen reader called ChromeVox.
                    </p>
                    <h3>
                        Where do I find accessibility?
                    </h3>
                    <p>
                        Accessibility is present in specific menus in mobile or computer. Microsoft has accessibility feature for screen reading, etc and Android/iPhone also have accessibility feature. It is usually at Settings - Accessibility.
                    </p>
                    <h3>
                        Why is ADA compliant?
                    </h3>
                    <p>
                        ADA compliant means complying to various provisions of ADA or The Americans with Disabilities Act.
                    </p>
                    <h3>
                        Is there any good link to practice my Accessibility testing skills?
                    </h3>
                    <p>
                        Yes, link to practice Accessibility testing skills is at link - https://www.vskills.in/practice/accessibility-testing-questions
                    
                    </p>
                <div>
                    <h3 id="508section">
                        What is Section 508?
                    </h3>
                    <ul>
                        <li>• Section 508 is part of a 1998 amendment to the Rehabilitation Act of 1973.</li>
                        <li>• It requires all Federal electronic content to be accessible.</li>
                        <li>• The U.S. Access Board is an independent Federal agency which develops and maintains standards that must be met to achieve 508 compliance.</li>
                        <li>• The most applicable standards for electronic content are:<br/>
                            - 1194.21 Software applications and operating systems
                            - 1194.22 Web-based intranet and internet information and applications
                            - 1194.24 Video and multimedia products
                        </li>
                        <li>HHS reviews are directly based on these standards.</li>
                    </ul>
                </div>
                <div>
                    <h3>HHS reviews are directly based on these standards.</h3>
                    <ul>
                        <li>HHS reviews are directly based on these standards.</li>
                        <li>HHS reviews are directly based on these standards.</li>
                        <li>HHS reviews are directly based on these standards.</li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Accessibility Issues
                    </h3>
                    <hr/>
                    <h3>
                        What Can Create an Accessibility Problem?
                    </h3>
                    <p>
                        When the ASPA 508 Team does a review, they pay particular attention to:
                    </p>
                    <ol>
                        <li>Images</li>
                        <li>Captions</li>
                        <li>Color</li>
                        <li>Data Tables</li>
                        <li>Dynamic Content/Interactivity</li>
                        <li>Forms</li>
                        <li>Navigational Elements/Links</li>
                    </ol>
                    <h3>What is Electronic Content?</h3>
                    <ul>
                        <li>Electronic content, or “information and communication technology” (ICT) is the message (information) you are trying to get across (communicate).</li>
                        <li>• Modern technology allows us to separate the content from the “presentation” (how it looks, or how it is conveyed).</li>
                        <li>• Content alone can be inaccessible no matter what the presentation, or delivery format.</li>
                        <li>• Section 508 says you have to choose a presentation so the content is accessible to everyone.</li>
                    </ul>
                    <h3>Using Electronic Content</h3>
                    <ul>
                        <li>When using content that is not your own, don’t assume it’s accessible.</li>
                        <li>• Creating complex content can cause problems for developers and thus delays in publishing.</li>
                        <li>• It is much easier to create content that is accessible in the first place (bake it in), than to remediate content after the fact (bolt it on).</li>
                    </ul>

                </div>
                    <h3>
                        Accessibility Interview Questions
                        <hr/>
                    </h3>
                        <p>
                            These questions try to stay away from asking people to recite specifications, or rattle off screen reader hot keys. Those can easily be looked up on the job. Instead these questions try to act as conversation starters, to gain insight into how someone solves problems, and interprets accessible, inclusive user experiences.<br/>
                            Questions are grouped into four buckets:<br/>
                            <ol>
                                <li><a href='#general'>General</a></li>
                                <li><a href='#technical'>Technical</a></li>
                                <li><a href='#design'>Design</a></li>
                                <li><a href='#content'>Content</a></li>
                            </ol>
                        </p>
                </div>
                <div>
                    <h3 id="general">General</h3>
                    <hr/>
                    <ol>
                        <li>Who benefits from accessibility?</li>
                        <li>How would you define inclusive and/or universal design? Explain?</li>
                        <li>How has your approach to accessibility changed over time?</li>
                        <li>Name some ways responsive/mobile first design can affect accessibility.</li>
                        <li>What are some user experience (UX) concerns to be aware of when using iconography in user interfaces (UI)?</li>
                        <li>What assistive technologies (ATs) are you familiar with (desktop and/or mobile)? <br/>
                            - What do you feel is your skill level with these AT(s)?</li>
                        <li>What are skip links?<br/>
                            - What benefit(s) do they provide?
                            - What benefit(s) do they provide?
                        </li>
                        <li>What are some of the tools available to test the accessibility of a website or web application?</li>
                        <li>What is WCAG?<br/>
                            - What are the differences between A, AA, and AAA compliance?
                        </li>
                        <li>How can using plain language benefit the accessibility of a project?</li>
                        <li>Describe instances where one might use a link or button.</li>
                        <li>Describe ways to convey an element or component’s state that aren’t entirely reliant on visuals.</li>
                        <li>How can carousels be problematic for users with disabilities?</li>
                        <li>How would you convince your Manager to allocate funds for an accessibility audit?</li>
                        <li>Describe a situation where a coworker may have been resistant to accessibility or inclusive design best practices.<br/>
                            - What sort of strategies do you use in situations like these to help educate coworkers?
                        </li>
                        <li>If one is looking to take on a leadership role:<br/>
                            - Describe the kind of culture around accessibility you would create and how you would go about creating it
                            - When there is more accessibility work to be done than the team can handle, how do you prioritize?
                            - If a client/stakeholder does not want to pay for accessibility what would you do?
                        </li>
                    </ol>
                    <h3 id="technical">Technical</h3>
                    <hr/>
                    <ol>
                        <li>What methods can you use to find an elements accessible name?</li>
                        <li>What is the accessibility tree?</li>
                        <li>Why are rems or ems preferable to pixels for setting type size?</li>
                        <li>Why is it important to allow the viewport to be resized, and/or zoomed?</li>
                        <li>How is the title attribute exposed to assistive technologies?<br/>
                            - What kind of elements can title attributes be used on?
                            - What sort of information is appropriate for use with the title attribute?
                        </li>
                        <li>Provide an example of when you might need to add a description to an element. <br/>
                            - How would you expose that description programmatically?
                        </li>
                        <li>What is a focus trap, or focus trapping? <br/>
                            - Describe an instance of when you’d need focus trapping.
                            - Describe an instance of when this would be an accessibility barrier.
                        </li>
                        <li>Describe a situation where the tabindex attribute would be useful<br/>
                            - Provide an example of when using the tabindex attribute can cause problems.
                        </li>
                        <li>What are landmark regions and how can they be useful?</li>
                        <li>In what situations might you use a toggle button, vs a switch control, vs a checkbox?</li>
                        <li>Describe methods to hide content:<br/>
                            - From all users.
                            - From only screen reader users.
                            - From sighted users, but not screen reader users.
                            - And why you might do so.
                        </li>
                        <li>Provide examples of common incorrect usage of ARIA attributes.</li>
                        <li>Aside from screen readers, what other assistive technologies can be affected by use of ARIA? How?</li>
                        <li>What is the difference between the following <code>attributes: hidden, aria-hidden="true"</code> and <code>role="presentation" or role="none"</code>?</li>
                        <li>Describe instances where you might need to use <code>aria-live</code><br/>
                            - What values (such as assertive or polite) might you give the attribute in different situations?
                        </li>
                        <li>How would you mark-up an icon font or SVG that was for decorative purposes?</li>
                        <li>Is CSS pseudo content understood by screen readers?</li>
                        <li>What is the purpose of the alt attribute for images?<br/>
                            - Can you describe the effect of an empty <code>alt</code>, and/or the lack of the attribute, on an image?
                            - In what instances might an empty <code>alt</code> or no <code>alt</code> be appropriate?
                            - How might alternative text for an image vary, depending on the context the image is used in?
                            - Since svgs do not accept the <code>alt</code> attribute, how can one provide alternative text for these graphics?
                            - Do you need to supply an image an <code>alt</code> attribute if used witin a figure with a figcaption?
                        </li>
                        <li>Describe the steps you take in reviewing or auditing a website or application for accessibility?</li>
                        <li>Describe an instance where an automated test would not flag a blatant accessibility error?</li>
                        <li>When should you use or recommend ARIA roles or attributes to solve an accessibility issue?</li>
                        <li>Describe your process for figuring out if an accessibility bug is due to a developer, browser, or assistive technology error?</li>
                        <li>What is the difference between <code>legend, caption</code> and <code>label</code> elements?<br/>
                            - What are their similarities?
                        </li>
                        <li>Describe the purpose of heading and header elements, and how they are useful in websites and applications.</li>
                        <li>Describe how you would handle managing keyboard focus within a single page web app (SPA) when changing routes.</li>
                        <li>Name an ARIA attribute that requires either a child/parent relationship or a pairing role.</li>
                        <li>What is your understanding of “accessible name computation” and how it affects modifying the way screen readers announce certain content?</li>
                        <li>What are some issues with modifying normal scrolling behavior? For example: infinite scrolling or scrolljacking.</li>
                        <li>Some ARIA widgets are presently best supported on devices with physical keyboard, rather than mobile/touch interfaces. Are you aware of any widgets that would be described this way, and why?</li>
                    </ol>
                    <h3 id="design">Design</h3>
                    <hr/>
                    <ol>
                        <li>Talk about the pros and cons of flat and skeuomorphic design trends in regards to accessibility.</li>
                        <li>Explain the importance of color contrast in designing for inclusion.</li>
                        <li>Besides :hover, name other states an actionable element (links, buttons, form controls, etc.) could have styles for, and why providing them is important?</li>
                        <li>When might it be appropriate to remove the visual outline from a focused element?</li>
                        <li>If a form or form field were to return an error message, where might you want those error messages to be located?</li>
                        <li>How can utilizing animation in an interface affect the user experience?</li>
                        <li>Explain how you could make an infographic accessible for screen reader users.</li>
                        <li>Why is color alone insufficient to draw attention to actionable elements, or to convey state?</li>
                        <li>What are some of the inclusive UX problems that need to be solved when content (static or actionable) is revealed on :hover, and how would you propose solving for them?</li>
                    </ol>
                    <h3 id='content'>Content</h3>
                    <hr/>
                    <ol>
                        <li>What are some things you can do to make an accessible presentation?</li>
                        <li>Is it possible to make email accessible?</li>
                        <li>How can you make a podcast accessible?</li>
                        <li>How would you make sure that a Word document is accessible?</li>
                        <li>How would you make sure that an Excel spreadsheet document is accessible?</li>
                        <li>Why is it important to tag a PDF correctly?</li>
                        <li>What goes into making an accessible eBook?</li>
                        <li>Tell me some social media accessibility best practices.<br/>
                            - Facebook
                            - Instagram
                            - Pinterest
                            - Snapchat
                            - TikTok
                            - Twitter
                            - YouTube
                        </li>
                        <li>How would you handle a situation where your organization accidentally disseminates an inaccessible document?</li>
                        <li>What do you think should happen if an employee repeatedly ignores making their documents accessible after being trained?</li>
                        <li>What steps would you undertake to create a sustainable culture of creating accessible documents?</li>
                        <li>In your previous experiences, was there an opportunity to insert accessibility checks and content authoring best practices into existing workflows?</li>
                    </ol>
                </div>
            </section>
            
            <section>
            <h3> Resource Section:</h3>
            <hr/>
                <div>
                    <ul>
                        <li><a href={accessibilityGuide}><strong>Accessibility Training Guide:</strong> Introduction to Accessibility and Section 508</a></li>
                        <li><strong>Certification:</strong> International Association of Accessibility Professionals (IAAP)<br/>
                            - <a href='https://www.accessibilityassociation.org/s/wascertification'>Web Accessibility Specialist (WAS)</a>
                            - <a href='https://www.accessibilityassociation.org/s/certified-professional-web-accessibility'>Certified Professional in Web Accessibility (CPWA)</a>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                    
                </div>
                <br/>
                <br/>
                <div>
                    <a href='#top'>Go to Top</a>
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
export default accessibility;