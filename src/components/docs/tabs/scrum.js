import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';

const scrum = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Scrum Framework</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 scrum-logo-1' src={link.SCRUM_LOGO1} alt='Scrum Logo'/>
                <img className='pt4 pb4 scrum-logo' src={link.SCRUM_LOGO} alt='Scrum Logo'/>
            </div>
            <div>
                <h3>WHAT IS SCRUM?</h3>
                <p>
                    A Better Way Of Building Products
                </p>
                <p>
                    Scrum Guide CoverScrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.
                </p>
                <p>
                    Scrum itself is a simple framework for effective team collaboration on complex products.  Scrum co-creators Ken Schwaber and Jeff Sutherland have written 
                        <a href={link.SCRUM_GUIDE} target="_blank" rel="noopener noreferrer"> The Scrum Guide</a> to explain Scrum clearly and succinctly.  This Guide contains the definition of Scrum. This definition consists of Scrum’s roles, events, artifacts, and the rules that bind them together. 
                </p>
                <p>
                    Scrum is:
                </p>
                <ul>
                    <li>Lightweight</li>
                    <li>Simple to understand</li>
                    <li>Difficult to master</li>
                </ul>
            </div>
            <div>
                <h3>The Scrum Framework</h3>
                <p>
                    Scrum is simple.  It is the opposite of a big collection of interwoven mandatory components. Scrum is not a methodology. Scrum implements the scientific method of empiricism. Scrum replaces a programmed algorithmic approach with a heuristic one, with respect for people and self-organization to deal with unpredictability and solving complex problems.  The below graphic represents Scrum in Action as described by Ken Schwaber and Jeff Sutherland in their book Software in 30 Days taking us from planning through software delivery. 
                </p>
            </div>
            <div>
                <h3>The Scrum Values</h3>
                <p>
                    Although always considered to be a part of Scrum and often written about, in July 2016, the Scrum Values were added to The 
                        <a href={link.SCRUM_GUIDE} target="_blank" rel="noopener noreferrer"> Scrum Guide.</a>  These values include Courage, Focus, Commitment, Respect, and Openness.  Read the Scrum Guide to learn more about these values, how they apply to Scrum and download this poster. 
                </p>
                <img className='pt4 pb4 scrum-values' src={link.SCRUM_VALUES} alt='Scrum values' height='196' width='301'/>
            </div>
            <div>
                <h3>The Roles of the Scrum Team</h3>
                <p>
                    The Scrum Team consists of a
                        <a href={link.WHAT_IS_PRODUCTOWNER} target="_blank" rel="noopener noreferrer"> Product Owner</a>, the 
                        <a href={link.WHAT_IS_DEVELOPMENT_TEAM} target="_blank" rel="noopener noreferrer"> Development Team</a>, and a 
                        <a href={link.WHAT_IS_SCRUM_MASTER} target="_blank" rel="noopener noreferrer"> Scrum Master</a>. Scrum Teams are self-organizing and cross-functional. Self-organizing teams choose how best to accomplish their work, rather than being directed by others outside the team. Cross-functional teams have all competencies needed to accomplish the work without depending on others not part of the team. The team model in Scrum is designed to optimize flexibility, creativity, and productivity.
                </p>
            </div>
            <div>
                <h3>The Scrum Events</h3>
                <p>
                    Prescribed events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum. All events are time-boxed. Once a Sprint begins, its duration is fixed and cannot be shortened or lengthened. The remaining events may end whenever the purpose of the event is achieved, ensuring an appropriate amount of time is spent without allowing waste in the process.  The Scrum Events are:
                </p>
                <ul>
                    <li><a href={link.WHAT_IS_SPRINT} target="_blank" rel="noopener noreferrer"> Sprint</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_PLANNING} target="_blank" rel="noopener noreferrer"> Sprint Planning</a></li>
                    <li><a href={link.WHAT_IS_DAILY_SCRUM} target="_blank" rel="noopener noreferrer"> Daily Scrum</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_REVIEW} target="_blank" rel="noopener noreferrer"> Sprint Review</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_RETRPSECTIVE} target="_blank" rel="noopener noreferrer"> Sprint Retrospective</a></li>
                </ul>
            </div>
            <div>
                <h3>Scrum Artifacts</h3>
                <p>
                    Scrum’s artifacts represent work or value to provide transparency and opportunities for inspection and adaptation. Artifacts defined by Scrum are specifically designed to maximize transparency of key information so that everybody has the same understanding of the artifact. The Scrum Artifacts are:
                </p>
                <ul>
                    <li><a href={link.WHAT_IS_PRODUCT_BACKLOG} target="_blank" rel="noopener noreferrer"> Product Backlog</a></li>
                    <li><a href={link.WHAT_IS_SPRINT_BACKLOG} target="_blank" rel="noopener noreferrer"> Sprint Backlog</a></li>
                    <li><a href={link.WHAT_IS_INCRIMENT} target="_blank" rel="noopener noreferrer"> Increment</a></li>
                </ul>
            </div>
            <hr />
            <div className='pt4 links-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.WHATISSCRUM} target="_blank" rel="noopener noreferrer">
                    What is Scrum
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SCRUM_MASTER} target="_blank" rel="noopener noreferrer">
                    Scrum Master
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SCRUM_TEAM} target="_blank" rel="noopener noreferrer">
                    Scrum Team
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.PRODUCT_OWNER} target="_blank" rel="noopener noreferrer">
                    Product Owner
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.STORY_EPICS} target="_blank" rel="noopener noreferrer">
                    Story vs Epics
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.PROJECT_KICKOFF} target="_blank" rel="noopener noreferrer">
                    Project KickOff
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.TEAM_NORM} target="_blank" rel="noopener noreferrer">
                    Team Norms
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.REFINMENT} target="_blank" rel="noopener noreferrer">
                    Backlog Refinement
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SPRINT_PLANNING} target="_blank" rel="noopener noreferrer">
                    Sprint Planning
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.DAILY_SCRUM} target="_blank" rel="noopener noreferrer">
                    Daily Scrum
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SPRINT_REVIEW} target="_blank" rel="noopener noreferrer">
                    Sprint Review 
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.RETROSPECTIVE} target="_blank" rel="noopener noreferrer">
                    Retrospective
                </a>
            </div>
            <hr />
            <div className='pt4 scrumorg-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SCRUM_ORGS} target="_blank" rel="noopener noreferrer">
                    Scrum.org
                </a>
            </div>
            <div className='pt4 scrummountain-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.MOUNTAIN_GOATS} target="_blank" rel="noopener noreferrer">
                    ScrumMountainGoat
                </a>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default scrum;
