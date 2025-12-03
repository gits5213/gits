import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import Courses from '../pages/courses';
import Docs from '../pages/docs';
import APIS from '../pages/apis';
import AID from '../pages/aid';
import About from '../pages/about';
import Contact from '../pages/contact';
import HowItWorks from '../pages/howItWorks';
import TermsOfUse from '../pages/termsOfUse';
import PrivacyPolicy from '../pages/privacyPolicy';
import CopyrightNotice from '../pages/copyrightNotice';
import WebsiteDisclaimer from '../pages/websiteDisclaimer';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/courses' component={Courses} />
        <Route path='/courses/code4kids' component={Courses} />
        <Route path='/courses/webdevelopment' component={Courses} />
        <Route path='/courses/automation' component={Courses} />
        <Route path='/courses/manual' component={Courses} />
        <Route path='/courses/accessibility' component={Courses} />
        <Route path='/courses/sdet-roadmap' component={Courses} />
        <Route exact path='/docs' component={Docs} />
        <Route path='/docs/agile' component={Docs} />
        <Route path='/docs/scrum' component={Docs} />
        <Route path='/docs/network' component={Docs} />
        <Route path='/docs/sql' component={Docs} />
        <Route path='/docs/manual' component={Docs} />
        <Route path='/docs/linux' component={Docs} />
        <Route path='/docs/git' component={Docs} />
        <Route path='/docs/html' component={Docs} />
        <Route path='/docs/css' component={Docs} />
        <Route path='/docs/java' component={Docs} />
        <Route path='/docs/python' component={Docs} />
        <Route path='/docs/javascript' component={Docs} />
        <Route path='/docs/reactjs' component={Docs} />
        <Route path='/docs/links' component={Docs} />
        <Route exact path='/apis' component={APIS} />
        <Route path='/apis/selenium' component={APIS} />
        <Route path='/apis/playwright' component={APIS} />
        <Route path='/apis/cypressio' component={APIS} />
        <Route path='/apis/protractor' component={APIS} />
        <Route path='/apis/restassured' component={APIS} />
        <Route path='/apis/readyapi' component={APIS} />
        <Route path='/apis/performance' component={APIS} />
        <Route path='/apis/architecture' component={APIS} />
        <Route path='/apis/appium' component={APIS} />
        <Route path='/apis/webdriverio' component={APIS} />
        <Route path='/apis/supertest' component={APIS} />
        <Route path='/apis/frisby' component={APIS} />
        <Route exact path='/aid' component={AID} />
        <Route path='/aid/window' component={AID} />
        <Route path='/aid/mac' component={AID} />
        <Route path='/aid/basic' component={AID} />
        <Route path='/aid/gk' component={AID} />
        <Route path='/aid/help' component={AID} />
        <Route path='/aid/frontend' component={AID} />
        <Route path='/aid/codesnippet' component={AID} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/how-it-works' component={HowItWorks} />
        <Route exact path='/terms-of-use' component={TermsOfUse} />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} />
        <Route exact path='/copyright-notice' component={CopyrightNotice} />
        <Route exact path='/website-disclaimer' component={WebsiteDisclaimer} />
    </Switch>
);
export default Main; 