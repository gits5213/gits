import React from 'react';
import GoogleAd from '../../../components/GoogleAd';

const SCRUM_LOGO1 = 'https://projectresources.cdt.ca.gov/wp-content/uploads/sites/50/2017/08/scrum-framework-at-a-glance.jpg';
const SCRUM_LOGO = 'https://dmquickscrum.files.wordpress.com/2014/11/sprint-planning.png';
const SCRUM_ORGS = 'https://www.scrum.org/resources/what-is-scrum';
const MOUNTAIN_GOATS = 'https://www.mountaingoatsoftware.com/agile/scrum';

const SCRUM_MASTER = 'https://www.mountaingoatsoftware.com/agile/scrum/roles/scrummaster';
const PRODUCT_OWNER = 'https://www.mountaingoatsoftware.com/agile/scrum/roles/product-owner';
const SCRUM_TEAM = 'https://www.mountaingoatsoftware.com/agile/scrum/roles/team';
const STORY_EPICS = 'https://www.mountaingoatsoftware.com/blog/stories-epics-and-themes';

const WHATISSCRUM = 'https://www.mountaingoatsoftware.com/agile/scrum';
const PROJECT_KICKOFF = 'https://en.wikipedia.org/wiki/Kickoff_meeting';
const TEAM_NORM = 'https://www.agileconnection.com/article/creating-team-norms';
const REFINMENT = 'https://www.mountaingoatsoftware.com/blog/product-backlog-refinement-grooming';
const SPRINT_PLANNIN = 'https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-planning-meeting';
const DAILY_SCRUM = 'https://www.mountaingoatsoftware.com/agile/scrum/meetings/daily-scrum';
const SPRINT_REVIEW = 'https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-review-meeting';
const RETROSPECTIVE = 'https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-retrospective';

const scrum = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Scrum Framework</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 scrum-logo-1' src={SCRUM_LOGO1} alt='Scrum Logo' height='400' width='650'/>
                <img className='pt4 pb4 scrum-logo' src={SCRUM_LOGO} alt='Scrum Logo' height='400' width='650'/>
            </div>
            <div className='pt4 scrumorg-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={SCRUM_ORGS} target="_blank" rel="noopener noreferrer">
                    Scrum.org
                </a>
            </div>
            <div className='pt4 scrummountain-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={MOUNTAIN_GOATS} target="_blank" rel="noopener noreferrer">
                    ScrumMountainGoat
                </a>
            </div>
            
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default scrum;
