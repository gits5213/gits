import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import Courses from '../pages/courses';
import Docs from '../pages/docs';
import APIS from '../pages/apis';
import Links from '../pages/links';
import About from '../pages/about';
import Contact from '../pages/contact';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/docs' component={Docs} />
        <Route exact path='/apis' component={APIS} />
        <Route exact path='/links' component={Links} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
);
export default Main; 