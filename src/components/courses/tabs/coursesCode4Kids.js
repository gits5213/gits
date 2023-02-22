import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import code4KidProgramOutline from '../../../images/code4KidsProgram.png';
import Footer from '../../../components/footer';

const coursesCode4Kids = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h1 className= 'pl5 tl'>Code4Kids Course Outline</h1>
            </div>
            <div>
                <h2>Return on Investment(ROI) for KIDS</h2>
            </div>
            <div>
                <p>
                    I am paying my <strong>KIDS</strong> $20-30/hour to <strong>CODE</strong> and some people are thinking this is a <strong>STUPID</strong> and <strong>DUMB IDEA!</strong> but, I would like to say this a <strong>GENIUS IDEA</strong> because here is <strong>MATH</strong> and <strong>REALITY!</strong>
                    I am not buying a car for my <strong>KIDS</strong> at the age of 16 including insurance, on average the age of 16th the first <strong>CAR</strong> is about <strong>$15K</strong> and Insurance for <strong>$6K</strong> Total is <strong>$21K</strong>.
                    Compare to over a period of 5 years, I will end up paying one kid <strong>$10K</strong> to <strong>CODE</strong>.
                    I'm not <strong>BUYING THE CAR</strong> but they are <strong>EARNING</strong> the <strong>CAR</strong> with the <strong>SKILL</strong> set. I don't make them do this. If they want to earn it, they can. If they don't, they don't, still, they can continue education to the next level and get a faster way to complete <strong>GRADUATION!</strong>
                </p>
            </div>
            <div className='kid-csforall-oba-video'>
                <h4>Computer Science For All</h4>
                <iframe 
                    className='obama_talk' 
                    title='obama_speace' 
                    src={link.OBAMA_SPEACE} 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen >
                </iframe>
            </div>
            <div className='kid-csforall-oba-para'>
                <p> 
                    Learn about President Obama’s bold new initiative to empower a generation
                    of American students with the computer science skills they need to thrive
                    igital economy.
                </p>
                    
                <h2>
                    CS For All 
                </h2>
                <p>
                    Computer Science for All is the President’s bold new initiative to 
                    empower all American students from kindergarten through high school 
                    to learn computer science and be equipped with the computational 
                    thinking skills they need to be creators in the digital economy, 
                    not just consumers, and to be active citizens in our technology-driven 
                    world. Our economy is rapidly shifting, and both educators and business 
                    leaders are increasingly recognizing that computer science (CS) is a “new 
                    c” skill necessary for economic opportunity and social mobility.
                </p>
                <p>
                    CS for All builds on efforts already being led by parents, teachers, school 
                    districts, states, and private sector leaders from across the country.  
                </p>
            </div>
            <div>
                <h2>What is CODING?</h2>
                <p> 
                    Welcome to our of code an introduction to the basics of computer 
                    programming or as it's commonly called Code4Kids coding. 
                </p>
                <p>
                    code is all around you and the results of coding are everywhere whether 
                    you're posting a tweet watching a YouTube video or even swiping a debit 
                    card whatever happens because of lines of code in fact just about anything 
                    with a plug or battery uses code or computer programs to do things lots of 
                    everyday items phones watches microwaves cars have computers in them and they 
                    all rely on code to make them work. 
                </p>
                <p>
                    so what is code exactly code is a precise set of instructions a computer
                    can understand think of it as a recipe the instructions need to be 
                    precise so whatever you're making turns out the way it should and just 
                    like people in different parts of the world speak different languages 
                    computers understand many different languages - with names like Python, 
                    C#, Ruby, Java, Javascript and Perl they're all different in their own way
                    similar to spoken languages they share many of the same basic features. 
                </p>
                <p>
                    Today we're here to learn how to write code and how can we explore 
                    the innovation, let’s get started to begin.
                </p>
                <hr />
            </div>
            <div className='programOutline'>
                <h1 className= 'tc'>Web Development Code4Kids Course Outline</h1>
                <img className='courseOutline' src={code4KidProgramOutline} alt="Course Outline"></img>
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
export default coursesCode4Kids;
