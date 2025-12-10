import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import Footer from '../../../components/footer';

const scrum = () => {
    const scrumLinks = [
        { name: 'What is Scrum', url: link.WHATISSCRUM },
        { name: 'Scrum Master', url: link.SCRUM_MASTER },
        { name: 'Scrum Team', url: link.SCRUM_TEAM },
        { name: 'Product Owner', url: link.PRODUCT_OWNER },
        { name: 'Story vs Epics', url: link.STORY_EPICS },
        { name: 'Project KickOff', url: link.PROJECT_KICKOFF },
        { name: 'Team Norms', url: link.TEAM_NORM },
        { name: 'Backlog Refinement', url: link.REFINMENT },
        { name: 'Sprint Planning', url: link.SPRINT_PLANNING },
        { name: 'Daily Scrum', url: link.DAILY_SCRUM },
        { name: 'Sprint Review', url: link.SPRINT_REVIEW },
        { name: 'Retrospective', url: link.RETROSPECTIVE }
    ];

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
                    Scrum Framework
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    A Better Way Of Building Products
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
                    src={link.SCRUM_LOGO1} 
                    alt='Scrum Logo'
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        marginBottom: '20px',
                        borderRadius: '8px'
                    }}
                />
                <img 
                    src={link.SCRUM_LOGO} 
                    alt='Scrum Logo'
                    style={{
                        width: '100%',
                        maxWidth: '500px',
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
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    What is Scrum?
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Scrum itself is a simple framework for effective team collaboration on complex products. Scrum co-creators Ken Schwaber and Jeff Sutherland have written <a href={link.SCRUM_GUIDE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>The Scrum Guide</a> to explain Scrum clearly and succinctly. This Guide contains the definition of Scrum. This definition consists of Scrum's roles, events, artifacts, and the rules that bind them together.
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    borderLeft: '4px solid #00416A'
                }}>
                    <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#00416A' }}>Scrum is:</p>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Lightweight</li>
                    <li>Simple to understand</li>
                    <li>Difficult to master</li>
                </ul>
            </div>
            </div>

            {/* The Scrum Framework */}
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
                    The Scrum Framework
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333'
                }}>
                    Scrum is simple. It is the opposite of a big collection of interwoven mandatory components. Scrum is not a methodology. Scrum implements the scientific method of empiricism. Scrum replaces a programmed algorithmic approach with a heuristic one, with respect for people and self-organization to deal with unpredictability and solving complex problems.
                </p>
            </div>

            {/* The Scrum Values */}
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
                    The Scrum Values
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Although always considered to be a part of Scrum and often written about, in July 2016, the Scrum Values were added to <a href={link.SCRUM_GUIDE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>The Scrum Guide.</a> These values include Courage, Focus, Commitment, Respect, and Openness.
                </p>
                <div style={{
                    textAlign: 'center',
                    marginTop: '30px'
                }}>
                    <img 
                        src={link.SCRUM_VALUES} 
                        alt='Scrum values'
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
            </div>

            {/* The Roles */}
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
                    The Roles of the Scrum Team
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    The Scrum Team consists of a <a href={link.WHAT_IS_PRODUCTOWNER} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Product Owner</a>, the <a href={link.WHAT_IS_DEVELOPMENT_TEAM} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Development Team</a>, and a <a href={link.WHAT_IS_SCRUM_MASTER} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Scrum Master</a>. Scrum Teams are self-organizing and cross-functional. Self-organizing teams choose how best to accomplish their work, rather than being directed by others outside the team. Cross-functional teams have all competencies needed to accomplish the work without depending on others not part of the team.
                </p>
            </div>

            {/* The Events */}
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
                    The Scrum Events
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Prescribed events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum. All events are time-boxed. The Scrum Events are:
                </p>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px'
                }}>
                    <li><a href={link.WHAT_IS_SPRINT} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_PLANNING} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Planning</a></li>
                    <li><a href={link.WHAT_IS_DAILY_SCRUM} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Daily Scrum</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_REVIEW} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Review</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_RETRPSECTIVE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Retrospective</a></li>
                </ul>
            </div>

            {/* Scrum Artifacts */}
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
                    Scrum Artifacts
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Scrum's artifacts represent work or value to provide transparency and opportunities for inspection and adaptation. The Scrum Artifacts are:
                </p>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px'
                }}>
                    <li><a href={link.WHAT_IS_PRODUCT_BACKLOG} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Product Backlog</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_BACKLOG} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Backlog</a></li>
                    <li><a href={link.WHAT_IS_INCRIMENT} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Increment</a></li>
                </ul>
            </div>

            {/* Action Buttons */}
            <div style={{
                marginBottom: '40px'
            }}>
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Scrum Resources
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px',
                    marginBottom: '30px'
                }}>
                    {scrumLinks.map((item, index) => (
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
                        href={link.SCRUM_ORGS}
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
                    Scrum.org
                </a>
                    <a
                        href={link.MOUNTAIN_GOATS}
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
                    ScrumMountainGoat
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
export default scrum;
