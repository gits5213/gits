import React from 'react';
import link from '../../../utilities/links.json';
import { getImageSrc } from '../../../utils/getImageSrc';
const coursesCode4Kids = () => {
    return(
        <>
            <div className='page-tab-body' style={{ height: 'auto', minHeight: 'auto', paddingBottom: '100px', marginBottom: '40px' }}>
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
                    src={getImageSrc(link.OBAMA_SPEACE)} 
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

                    {/* Program Outline Curriculum Section */}
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
                                marginBottom: '40px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                Code4Kids Program Curriculum
                            </h2>

                            {/* Visual Curriculum Diagram */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '40px',
                                borderRadius: '8px',
                                marginBottom: '40px',
                                border: '2px solid #00416A'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '30px',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}>
                                    Learning Path Overview
                                </h3>
                                
                                {/* Diagram Container */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    position: 'relative'
                                }}>
                                    {/* Grade 5-7 Path */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{
                                            backgroundColor: '#e8f4f8',
                                            padding: '20px 30px',
                                            borderRadius: '8px',
                                            border: '2px solid #00416A',
                                            textAlign: 'center',
                                            minWidth: '200px',
                                            flex: '1',
                                            maxWidth: '250px'
                                        }}>
                                            <div style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#00416A',
                                                marginBottom: '8px'
                                            }}>Grades 5-7</div>
                                            <div style={{
                                                fontSize: '16px',
                                                color: '#666'
                                            }}>Scratch Programming</div>
                                        </div>
                                        <div style={{
                                            fontSize: '24px',
                                            color: '#00416A',
                                            fontWeight: 'bold'
                                        }}>→</div>
                                        <div style={{
                                            backgroundColor: '#e8f4f8',
                                            padding: '20px 30px',
                                            borderRadius: '8px',
                                            border: '2px solid #00416A',
                                            textAlign: 'center',
                                            minWidth: '200px',
                                            flex: '1',
                                            maxWidth: '250px'
                                        }}>
                                            <div style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#00416A',
                                                marginBottom: '8px'
                                            }}>Grades 6-9</div>
                                            <div style={{
                                                fontSize: '16px',
                                                color: '#666'
                                            }}>Python Fundamentals</div>
                                        </div>
                                    </div>

                                    {/* Grade 7-10 Path */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{
                                            backgroundColor: '#e8f4f8',
                                            padding: '20px 30px',
                                            borderRadius: '8px',
                                            border: '2px solid #00416A',
                                            textAlign: 'center',
                                            minWidth: '200px',
                                            flex: '1',
                                            maxWidth: '250px'
                                        }}>
                                            <div style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#00416A',
                                                marginBottom: '8px'
                                            }}>Grades 7-10</div>
                                            <div style={{
                                                fontSize: '16px',
                                                color: '#666'
                                            }}>HTML & CSS</div>
                                        </div>
                                        <div style={{
                                            fontSize: '24px',
                                            color: '#00416A',
                                            fontWeight: 'bold'
                                        }}>→</div>
                                        <div style={{
                                            backgroundColor: '#e8f4f8',
                                            padding: '20px 30px',
                                            borderRadius: '8px',
                                            border: '2px solid #00416A',
                                            textAlign: 'center',
                                            minWidth: '200px',
                                            flex: '1',
                                            maxWidth: '250px'
                                        }}>
                                            <div style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#00416A',
                                                marginBottom: '8px'
                                            }}>Grades 8-12</div>
                                            <div style={{
                                                fontSize: '16px',
                                                color: '#666'
                                            }}>JavaScript</div>
                                        </div>
                                    </div>

                                    {/* Grade 10-12 Path */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        marginTop: '10px'
                                    }}>
                                        <div style={{
                                            backgroundColor: '#00416A',
                                            padding: '20px 30px',
                                            borderRadius: '8px',
                                            border: '2px solid #00416A',
                                            textAlign: 'center',
                                            minWidth: '200px',
                                            flex: '1',
                                            maxWidth: '250px',
                                            color: '#ffffff'
                                        }}>
                                            <div style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                marginBottom: '8px'
                                            }}>Grades 10-12</div>
                                            <div style={{
                                                fontSize: '16px',
                                                opacity: '0.95'
                                            }}>Advanced Concepts</div>
                                        </div>
                                        <div style={{
                                            fontSize: '24px',
                                            color: '#00416A',
                                            fontWeight: 'bold'
                                        }}>→</div>
                                        <div style={{
                                            backgroundColor: '#e8f4f8',
                                            padding: '20px 30px',
                                            borderRadius: '8px',
                                            border: '2px solid #00416A',
                                            textAlign: 'center',
                                            minWidth: '200px',
                                            flex: '1',
                                            maxWidth: '250px'
                                        }}>
                                            <div style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#00416A',
                                                marginBottom: '8px'
                                            }}>All Grades</div>
                                            <div style={{
                                                fontSize: '16px',
                                                color: '#666'
                                            }}>Special Topics</div>
                                        </div>
                                    </div>

                                    {/* AI Integration Path */}
                                    <div style={{
                                        marginTop: '30px',
                                        padding: '20px',
                                        backgroundColor: '#fff9e6',
                                        borderRadius: '8px',
                                        border: '2px solid #ff9800'
                                    }}>
                                        <h4 style={{
                                            color: '#ff9800',
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            marginBottom: '15px',
                                            textAlign: 'center'
                                        }}>
                                            🤖 AI Integration Throughout Learning Journey
                                        </h4>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                            gap: '15px',
                                            marginTop: '15px'
                                        }}>
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                padding: '15px',
                                                borderRadius: '6px',
                                                border: '1px solid #ff9800',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    color: '#ff9800',
                                                    marginBottom: '5px'
                                                }}>Grades 5-7</div>
                                                <div style={{
                                                    fontSize: '14px',
                                                    color: '#666'
                                                }}>AI-Assisted Coding with GPT/Copilot</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                padding: '15px',
                                                borderRadius: '6px',
                                                border: '1px solid #ff9800',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    color: '#ff9800',
                                                    marginBottom: '5px'
                                                }}>Grades 6-9</div>
                                                <div style={{
                                                    fontSize: '14px',
                                                    color: '#666'
                                                }}>Python AI Tools & Chatbots</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                padding: '15px',
                                                borderRadius: '6px',
                                                border: '1px solid #ff9800',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    color: '#ff9800',
                                                    marginBottom: '5px'
                                                }}>Grades 8-12</div>
                                                <div style={{
                                                    fontSize: '14px',
                                                    color: '#666'
                                                }}>AI APIs & ML Basics</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: '#ffffff',
                                                padding: '15px',
                                                borderRadius: '6px',
                                                border: '1px solid #ff9800',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    color: '#ff9800',
                                                    marginBottom: '5px'
                                                }}>Advanced</div>
                                                <div style={{
                                                    fontSize: '14px',
                                                    color: '#666'
                                                }}>AI/ML Projects & Integration</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ROI and Real-World Benefits Section */}
                                    <div style={{
                                        marginTop: '30px',
                                        padding: '25px',
                                        backgroundColor: '#00416A',
                                        borderRadius: '8px',
                                        color: '#ffffff'
                                    }}>
                                        <h4 style={{
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            marginBottom: '20px',
                                            textAlign: 'center'
                                        }}>
                                            Real-World Benefits & ROI
                                        </h4>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                            gap: '15px',
                                            marginTop: '20px'
                                        }}>
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                padding: '15px',
                                                borderRadius: '6px'
                                            }}>
                                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💰 Earn While Learning</div>
                                                <div style={{ fontSize: '14px', opacity: '0.9' }}>Start earning $20-30/hour coding projects as early as age 10-12</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                padding: '15px',
                                                borderRadius: '6px'
                                            }}>
                                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💼 Freelance Opportunities</div>
                                                <div style={{ fontSize: '14px', opacity: '0.9' }}>Build websites, apps, and games for clients starting at $50-200 per project</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                padding: '15px',
                                                borderRadius: '6px'
                                            }}>
                                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🎓 Academic Advantage</div>
                                                <div style={{ fontSize: '14px', opacity: '0.9' }}>Earn college credits, scholarships, and early admission opportunities</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                padding: '15px',
                                                borderRadius: '6px'
                                            }}>
                                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚀 Career Head Start</div>
                                                <div style={{ fontSize: '14px', opacity: '0.9' }}>Enter tech industry 4-6 years earlier with $60K-100K+ starting salaries</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                padding: '15px',
                                                borderRadius: '6px'
                                            }}>
                                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 Entrepreneurial Skills</div>
                                                <div style={{ fontSize: '14px', opacity: '0.9' }}>Launch startups, create products, and build passive income streams</div>
                                            </div>
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                padding: '15px',
                                                borderRadius: '6px'
                                            }}>
                                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Long-term ROI</div>
                                                <div style={{ fontSize: '14px', opacity: '0.9' }}>Potential lifetime earnings increase of $500K-1M+ compared to non-tech careers</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Legend */}
                                    <div style={{
                                        marginTop: '20px',
                                        padding: '20px',
                                        backgroundColor: '#f0f7fa',
                                        borderRadius: '8px',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{
                                            fontSize: '14px',
                                            color: '#666',
                                            lineHeight: '1.8'
                                        }}>
                                            <strong style={{ color: '#00416A' }}>Progressive Learning:</strong> Students advance through modules based on age and skill level, building from visual programming to advanced concepts
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Module 1: Introduction to Coding with Scratch */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}>
                                    Module 1: Introduction to Coding with Scratch (Grades 5-7)
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Scratch Basics:</strong> Introduction to visual programming, drag-and-drop coding concepts
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Sprites and Motion:</strong> Creating and animating characters, movement commands
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Events and Control:</strong> Event-driven programming, loops, conditionals
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Variables and Data:</strong> Storing information, simple data structures
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Interactive Projects:</strong> Creating games, animations, and interactive stories
                                    </li>
                                </ul>
                                <div style={{
                                    marginTop: '25px',
                                    padding: '20px',
                                    backgroundColor: '#e8f4f8',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #00416A'
                                }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        Learning Outcomes:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Understand fundamental programming concepts through visual coding
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Create interactive games and animations using Scratch
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Develop logical thinking and problem-solving skills
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Build confidence in coding and computational thinking
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Learn to use AI coding assistants (GPT, Copilot, Claude) as learning tools to understand programming concepts
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#e6f3ff',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #0066cc'
                                }}>
                                    <h4 style={{
                                        color: '#0066cc',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        🤖 AI Topics Covered:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI Coding Assistants:</strong> Introduction to GPT, Microsoft Copilot, and Claude for code explanation and generation
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI-Powered Learning:</strong> Using AI to understand programming concepts, debug code, and get coding help
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>Ethical AI Use:</strong> Learning when and how to use AI tools responsibly in coding projects
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#fff4e6',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #ff9800'
                                }}>
                                    <h4 style={{
                                        color: '#ff9800',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        💰 Earning Opportunities:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Parent Incentive Programs:</strong> Earn $20-30/hour for completing coding projects and assignments
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Game Development:</strong> Create and sell Scratch games online ($10-50 per game)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Teaching Others:</strong> Tutor younger students in Scratch programming ($15-25/hour)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Animation Services:</strong> Create custom animations for local businesses ($25-100 per project)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Module 2: Python Programming Fundamentals */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}>
                                    Module 2: Python Programming Fundamentals (Grades 6-9)
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Python Basics:</strong> Syntax, variables, data types, input/output
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Control Structures:</strong> If/else statements, loops (for/while), nested structures
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Functions and Modules:</strong> Creating reusable code, importing libraries
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Data Structures:</strong> Lists, dictionaries, tuples, working with collections
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>File Handling:</strong> Reading and writing files, data persistence
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Projects:</strong> Building calculator, text-based games, data analysis tools
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>AI Integration:</strong> Using Python with AI libraries, creating simple chatbots, working with OpenAI API, building AI-powered applications
                                    </li>
                                </ul>
                                <div style={{
                                    marginTop: '25px',
                                    padding: '20px',
                                    backgroundColor: '#e8f4f8',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #00416A'
                                }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        Learning Outcomes:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Master Python syntax and fundamental programming concepts
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Write functional Python programs with proper control flow
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Create reusable functions and work with Python libraries
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Build complete Python applications and games
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Integrate AI capabilities into Python projects using OpenAI, Anthropic, and other AI APIs
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#e6f3ff',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #0066cc'
                                }}>
                                    <h4 style={{
                                        color: '#0066cc',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        🤖 AI Topics Covered:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI APIs:</strong> Working with OpenAI GPT, Anthropic Claude APIs for text generation and analysis
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>Chatbot Development:</strong> Building conversational AI chatbots using Python and AI libraries
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI-Powered Tools:</strong> Creating Python scripts that leverage AI for automation, data analysis, and content generation
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#fff4e6',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #ff9800'
                                }}>
                                    <h4 style={{
                                        color: '#ff9800',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        💰 Earning Opportunities:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Python Scripts & Tools:</strong> Develop automation scripts for businesses ($50-200 per script)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Data Analysis Projects:</strong> Analyze data for small businesses ($100-300 per project)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Game Development:</strong> Create and sell Python games ($25-150 per game)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Freelance Programming:</strong> Take on Python projects from Upwork, Fiverr ($30-50/hour)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Module 3: Web Development with HTML & CSS */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}>
                                    Module 3: Web Development with HTML & CSS (Grades 7-10)
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>HTML Fundamentals:</strong> Document structure, headings, paragraphs, lists, links, images
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>HTML Forms:</strong> Input fields, buttons, form validation, user interaction
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>CSS Styling:</strong> Colors, fonts, layout, flexbox, grid system
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Responsive Design:</strong> Media queries, mobile-first approach, adaptive layouts
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Projects:</strong> Personal portfolio website, landing pages, interactive web pages
                                    </li>
                                </ul>
                            </div>

                            {/* Module 4: JavaScript Programming */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}>
                                    Module 4: JavaScript Programming (Grades 8-12)
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>JavaScript Basics:</strong> Variables, data types, operators, expressions
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>DOM Manipulation:</strong> Selecting elements, modifying content, event handling
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Functions and Events:</strong> Function declarations, arrow functions, event listeners
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Arrays and Objects:</strong> Working with complex data structures, JSON
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>APIs and Async Programming:</strong> Fetch API, promises, async/await
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Projects:</strong> Interactive web applications, games, dynamic content websites
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>AI Integration:</strong> Building AI-powered web apps, integrating GPT/Claude APIs, creating AI chatbots, implementing machine learning features in JavaScript
                                    </li>
                                </ul>
                                <div style={{
                                    marginTop: '25px',
                                    padding: '20px',
                                    backgroundColor: '#e8f4f8',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #00416A'
                                }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        Learning Outcomes:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Write JavaScript code to add interactivity to web pages
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Manipulate the DOM to create dynamic web experiences
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Handle user events and create responsive web interfaces
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Integrate APIs to fetch and display dynamic data
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Build AI-powered web applications using OpenAI, Anthropic, and other AI APIs
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#e6f3ff',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #0066cc'
                                }}>
                                    <h4 style={{
                                        color: '#0066cc',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        🤖 AI Topics Covered:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI Web Applications:</strong> Building interactive web apps with GPT, Claude, and Copilot integration
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>Machine Learning Basics:</strong> Introduction to ML concepts, TensorFlow.js, and AI model integration
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI Chatbots:</strong> Creating intelligent chatbots and virtual assistants for websites
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#fff4e6',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #ff9800'
                                }}>
                                    <h4 style={{
                                        color: '#ff9800',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        💰 Earning Opportunities:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Interactive Web Apps:</strong> Build custom web applications ($300-1,500 per app)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Frontend Development:</strong> Work as junior frontend developer ($40-60/hour)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Browser Extensions:</strong> Create and sell Chrome/Firefox extensions ($50-500 per extension)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>API Integration Projects:</strong> Integrate third-party APIs for businesses ($200-800 per project)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Module 5: Advanced Programming Concepts */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}>
                                    Module 5: Advanced Programming Concepts (Grades 10-12)
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Object-Oriented Programming:</strong> Classes, objects, inheritance, encapsulation
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Algorithms and Data Structures:</strong> Sorting, searching, stacks, queues, trees
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Problem Solving:</strong> Debugging techniques, code optimization, best practices
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Version Control:</strong> Introduction to Git and GitHub, collaborative coding
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Capstone Projects:</strong> Building complete applications, portfolio development
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>AI & Machine Learning:</strong> Advanced AI integration, building ML models, creating AI-powered applications with GPT, Claude, and Copilot, implementing neural networks basics
                                    </li>
                                </ul>
                                <div style={{
                                    marginTop: '25px',
                                    padding: '20px',
                                    backgroundColor: '#e8f4f8',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #00416A'
                                }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        Learning Outcomes:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Apply object-oriented programming principles to build scalable applications
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Implement efficient algorithms and data structures for problem-solving
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Use Git and GitHub for version control and collaborative development
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Complete a capstone project demonstrating mastery of programming skills
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Develop AI-powered applications integrating GPT, Claude, Copilot, and machine learning technologies
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#e6f3ff',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #0066cc'
                                }}>
                                    <h4 style={{
                                        color: '#0066cc',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        🤖 AI Topics Covered:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>Advanced AI Integration:</strong> Deep integration with OpenAI GPT, Anthropic Claude, Microsoft Copilot APIs
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>Machine Learning:</strong> Building and training ML models, neural networks basics, AI model deployment
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI-Powered Applications:</strong> Creating intelligent applications that leverage AI for automation, prediction, and decision-making
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#fff4e6',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #ff9800'
                                }}>
                                    <h4 style={{
                                        color: '#ff9800',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        💰 Earning Opportunities:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Full-Stack Development:</strong> Build complete web applications ($1,000-5,000 per project)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Software Development Internships:</strong> Earn $20-35/hour while in high school
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Tech Startup Founder:</strong> Launch your own tech startup with potential for significant returns
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>College Scholarships:</strong> Earn $5,000-50,000+ in tech scholarships based on coding skills
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Module 6: Special Topics */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}>
                                    Module 6: Special Topics & Electives
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Game Development:</strong> Creating games with Python (Pygame) or JavaScript
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Mobile App Development:</strong> Introduction to app development concepts
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Robotics Programming:</strong> Basic robotics concepts and programming
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Cybersecurity Basics:</strong> Introduction to online safety and security
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>Creative Coding:</strong> Art and design with code, digital creativity
                                    </li>
                                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                        <strong>AI Specialization:</strong> Advanced AI projects, GPT/Claude integration, AI tool development, building AI-powered games and applications, exploring cutting-edge AI technologies
                                    </li>
                                </ul>
                                <div style={{
                                    marginTop: '25px',
                                    padding: '20px',
                                    backgroundColor: '#e8f4f8',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #00416A'
                                }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        Learning Outcomes:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Explore specialized programming domains based on interests
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Apply coding skills to creative projects and real-world applications
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Develop expertise in chosen specialization area
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Build a diverse portfolio showcasing various programming skills
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                            Master AI technologies including GPT, Claude, Copilot, and build innovative AI-powered solutions
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#e6f3ff',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #0066cc'
                                }}>
                                    <h4 style={{
                                        color: '#0066cc',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        🤖 AI Topics Covered:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI Tool Development:</strong> Building custom AI tools and applications using GPT, Claude, and Copilot
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>AI-Powered Games:</strong> Creating games with AI opponents, procedural generation, and intelligent NPCs
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                            <strong>Advanced AI Integration:</strong> Deep expertise in OpenAI, Anthropic, Microsoft AI platforms for real-world applications
                                        </li>
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#fff4e6',
                                    borderRadius: '6px',
                                    borderLeft: '4px solid #ff9800'
                                }}>
                                    <h4 style={{
                                        color: '#ff9800',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px'
                                    }}>
                                        💰 Earning Opportunities:
                                    </h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        fontSize: '15px',
                                        color: '#333',
                                        lineHeight: '1.8'
                                    }}>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Game Development:</strong> Publish games on app stores ($100-10,000+ per game)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Mobile Apps:</strong> Create and monetize mobile applications ($500-5,000+ per app)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Robotics Projects:</strong> Build custom robotics solutions ($200-1,000 per project)
                                        </li>
                                        <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                            <strong>Creative Coding Services:</strong> Offer digital art and interactive installations ($300-2,000 per project)
                                        </li>
                                    </ul>
                                </div>
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
                                href="https://gitsics.com/enroll/"
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
                                Enroll Now
                            </a>
            </div>
                    </section>
                </div>

                <div>
                </div>
            </div>
            {/* Footer rendered outside page-tab-body to ensure proper full-width alignment */}
            </>
    );
}
export default coursesCode4Kids;
