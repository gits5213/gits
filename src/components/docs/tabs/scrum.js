import React from 'react';
import link from '../../../utilities/links.json';
import { leftAlignStyles } from '../../../utils/globalStyles';

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
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                ...leftAlignStyles.heroSection,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={leftAlignStyles.heroTitle}>
                        Scrum Framework
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        A Better Way Of Building Products
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '15px',
                    flexWrap: 'wrap'
                }}>
                    <img 
                        src={link.SCRUM_LOGO1} 
                        alt='Scrum Logo'
                        style={{
                            maxWidth: '250px',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            filter: 'brightness(1.1)'
                        }}
                    />
                    <img 
                        src={link.SCRUM_LOGO} 
                        alt='Scrum Logo'
                        style={{
                            maxWidth: '250px',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            filter: 'brightness(1.1)'
                        }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    What is Scrum?
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.
                </p>
                <p style={leftAlignStyles.paragraph}>
                    Scrum itself is a simple framework for effective team collaboration on complex products. Scrum co-creators Ken Schwaber and Jeff Sutherland have written <a href={link.SCRUM_GUIDE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>The Scrum Guide</a> to explain Scrum clearly and succinctly. This Guide contains the definition of Scrum. This definition consists of Scrum's roles, events, artifacts, and the rules that bind them together.
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#00416A', textAlign: 'left' }}>Scrum is:</p>
                    <ul style={{ marginTop: '10px', paddingLeft: '20px', textAlign: 'left' }}>
                    <li>Lightweight</li>
                    <li>Simple to understand</li>
                    <li>Difficult to master</li>
                </ul>
            </div>
            </div>

            {/* The Scrum Framework */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    The Scrum Framework
                </h2>
                <p style={leftAlignStyles.paragraphNoMargin}>
                    Scrum is simple. It is the opposite of a big collection of interwoven mandatory components. Scrum is not a methodology. Scrum implements the scientific method of empiricism. Scrum replaces a programmed algorithmic approach with a heuristic one, with respect for people and self-organization to deal with unpredictability and solving complex problems.
                </p>
            </div>

            {/* The Scrum Values */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    The Scrum Values
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Although always considered to be a part of Scrum and often written about, in July 2016, the Scrum Values were added to <a href={link.SCRUM_GUIDE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>The Scrum Guide.</a> These values include Courage, Focus, Commitment, Respect, and Openness.
                </p>
                <div style={{
                    textAlign: 'left',
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
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    The Roles of the Scrum Team
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    The Scrum Team consists of a <a href={link.WHAT_IS_PRODUCTOWNER} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Product Owner</a>, the <a href={link.WHAT_IS_DEVELOPMENT_TEAM} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Development Team</a>, and a <a href={link.WHAT_IS_SCRUM_MASTER} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Scrum Master</a>. Scrum Teams are self-organizing and cross-functional. Self-organizing teams choose how best to accomplish their work, rather than being directed by others outside the team. Cross-functional teams have all competencies needed to accomplish the work without depending on others not part of the team.
                </p>
            </div>

            {/* The Events */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    The Scrum Events
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Prescribed events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum. All events are time-boxed. The Scrum Events are:
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><a href={link.WHAT_IS_SPRINT} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_PLANNING} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Planning</a></li>
                    <li><a href={link.WHAT_IS_DAILY_SCRUM} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Daily Scrum</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_REVIEW} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Review</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_RETRPSECTIVE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Retrospective</a></li>
                </ul>
            </div>

            {/* Scrum Artifacts */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Scrum Artifacts
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Scrum's artifacts represent work or value to provide transparency and opportunities for inspection and adaptation. The Scrum Artifacts are:
                </p>
                <ul style={leftAlignStyles.list}>
                    <li><a href={link.WHAT_IS_PRODUCT_BACKLOG} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Product Backlog</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_BACKLOG} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sprint Backlog</a></li>
                    <li><a href={link.WHAT_IS_INCRIMENT} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Increment</a></li>
                </ul>
            </div>

            {/* Action Buttons */}
            <div style={leftAlignStyles.sectionContainer}>
                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Scrum Resources
                </h3>
                <div style={leftAlignStyles.gridLinks}>
                    {scrumLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={leftAlignStyles.gridLink}
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
                <div style={leftAlignStyles.linksContainer}>
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
            </div>
            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default scrum;
