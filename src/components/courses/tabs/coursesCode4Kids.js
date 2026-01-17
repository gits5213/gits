import React from 'react';
import link from '../../../utilities/links.json';
import code4KidProgramOutline from '../../../images/code4KidsProgram.png';
import Footer from '../../../components/footer';

const coursesCode4Kids = () => {
    return(
        <>
            <div className='page-tab-body'>
                {/* Hero Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                    color: '#ffffff',
                    padding: '60px 20px',
                    textAlign: 'center',
                    marginBottom: '40px'
                }}>
                    <h1 style={{ 
                        fontSize: '48px', 
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Code4Kids Course Outline
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Empowering the next generation of coders with hands-on programming skills
                    </p>
                </div>

                {/* Main Content Container */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    {/* ROI Section */}
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '32px',
                                marginBottom: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                Return on Investment (ROI) for KIDS
                            </h2>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                border: '2px solid #00416A',
                                lineHeight: '1.8'
                            }}>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333',
                                    marginBottom: '20px'
                                }}>
                                    I am paying my <strong style={{ color: '#00416A' }}>KIDS</strong> $20-30/hour to <strong style={{ color: '#00416A' }}>CODE</strong> and some people are thinking this is a <strong style={{ color: '#00416A' }}>STUPID</strong> and <strong style={{ color: '#00416A' }}>DUMB IDEA!</strong> but, I would like to say this a <strong style={{ color: '#00416A' }}>GENIUS IDEA</strong> because here is <strong style={{ color: '#00416A' }}>MATH</strong> and <strong style={{ color: '#00416A' }}>REALITY!</strong>
                                </p>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333',
                                    marginBottom: '20px'
                                }}>
                                    I am not buying a car for my <strong style={{ color: '#00416A' }}>KIDS</strong> at the age of 16 including insurance, on average the age of 16th the first <strong style={{ color: '#00416A' }}>CAR</strong> is about <strong style={{ color: '#00416A' }}>$15K</strong> and Insurance for <strong style={{ color: '#00416A' }}>$6K</strong> Total is <strong style={{ color: '#00416A' }}>$21K</strong>.
                                </p>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333',
                                    marginBottom: '20px'
                                }}>
                                    Compare to over a period of 5 years, I will end up paying one kid <strong style={{ color: '#00416A' }}>$10K</strong> to <strong style={{ color: '#00416A' }}>CODE</strong>.
                                </p>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333'
                                }}>
                                    I'm not <strong style={{ color: '#00416A' }}>BUYING THE CAR</strong> but they are <strong style={{ color: '#00416A' }}>EARNING</strong> the <strong style={{ color: '#00416A' }}>CAR</strong> with the <strong style={{ color: '#00416A' }}>SKILL</strong> set. I don't make them do this. If they want to earn it, they can. If they don't, they don't, still, they can continue education to the next level and get a faster way to complete <strong style={{ color: '#00416A' }}>GRADUATION!</strong>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Video Section */}
                    <section style={{
                        marginBottom: '60px',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '32px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Computer Science For All
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                color: '#666',
                                marginBottom: '30px',
                                maxWidth: '800px',
                                margin: '0 auto 30px'
                            }}>
                                Learn about President Obama's bold new initiative to empower a generation of American students with the computer science skills they need to thrive in the digital economy.
                            </p>
                            <div className='kid-csforall-oba-video' style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                overflow: 'hidden',
                                maxWidth: '100%',
                                borderRadius: '8px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                marginBottom: '30px'
                            }}>
                <iframe 
                    title="Code4Kids Video"
                    src={link.OBAMA_SPEACE} 
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '8px'
                                }}
                            ></iframe>
            </div>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                textAlign: 'left',
                                maxWidth: '900px',
                                margin: '0 auto'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}>
                    CS For All 
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333',
                                    marginBottom: '15px'
                                }}>
                                    Computer Science for All is the President's bold new initiative to empower all American students from kindergarten through high school to learn computer science and be equipped with the computational thinking skills they need to be creators in the digital economy, not just consumers, and to be active citizens in our technology-driven world.
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333',
                                    marginBottom: '15px'
                                }}>
                                    Our economy is rapidly shifting, and both educators and business leaders are increasingly recognizing that computer science (CS) is a "new basic" skill necessary for economic opportunity and social mobility.
                </p>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333'
                                }}>
                                    CS for All builds on efforts already being led by parents, teachers, school districts, states, and private sector leaders from across the country.
                </p>
            </div>
                        </div>
                    </section>

                    {/* What is Coding Section */}
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            backgroundColor: '#e8f4f8',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '32px',
                                marginBottom: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                What is CODING?
                            </h2>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                lineHeight: '1.8'
                            }}>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333',
                                    marginBottom: '20px'
                                }}>
                                    Welcome to our Hour of Code - an introduction to the basics of computer programming or as it's commonly called Code4Kids coding.
                </p>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333',
                                    marginBottom: '20px'
                                }}>
                                    Code is all around you and the results of coding are everywhere whether you're posting a tweet, watching a YouTube video, or even swiping a debit card - whatever happens because of lines of code. In fact, just about anything with a plug or battery uses code or computer programs to do things. Lots of everyday items - phones, watches, microwaves, cars - have computers in them and they all rely on code to make them work.
                </p>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333',
                                    marginBottom: '20px'
                                }}>
                                    So what is code exactly? Code is a precise set of instructions a computer can understand. Think of it as a recipe - the instructions need to be precise so whatever you're making turns out the way it should. And just like people in different parts of the world speak different languages, computers understand many different languages - with names like Python, C#, Ruby, Java, Javascript and Perl. They're all different in their own way, similar to spoken languages, they share many of the same basic features.
                </p>
                                <p style={{
                                    fontSize: '18px',
                                    color: '#333'
                                }}>
                                    Today we're here to learn how to write code and how can we explore the innovation. Let's get started to begin!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Program Outline Image Section */}
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '32px',
                                marginBottom: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                Code4Kids Program Outline
                            </h2>
                            <div style={{ 
                                overflow: 'auto', 
                                padding: '20px 0', 
                                width: '100%',
                                margin: '20px 0',
                                textAlign: 'center',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px'
                            }}>
                                <img 
                                    src={code4KidProgramOutline} 
                                    alt="Code4Kids Program Outline - Full Course Structure"
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto',
                                        display: 'block',
                                        margin: '0 auto',
                                        maxWidth: '100%',
                                        minWidth: '100%',
                                        borderRadius: '8px'
                                    }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section style={{
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            backgroundColor: '#00416A',
                            color: '#ffffff',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}>
                            <h2 style={{
                                fontSize: '28px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Ready to Get Started?
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                marginBottom: '30px',
                                opacity: '0.9'
                            }}>
                                Enroll your child in our Code4Kids program today and give them the skills for tomorrow.
                </p>
                            <a 
                                href={link.SQA_SIGN_UP}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '15px 40px',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: '#00416A',
                                    backgroundColor: '#ffffff',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#f0f0f0';
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#ffffff';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                                }}
                            >
                                Sign Up Now
                            </a>
            </div>
                    </section>
                </div>

                <div>
                </div>
            </div>
            {/* Footer rendered outside page-tab-body to ensure proper full-width alignment */}
            <Footer />
        </>
    );
}
export default coursesCode4Kids;
