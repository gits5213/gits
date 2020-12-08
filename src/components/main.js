import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import Courses from '../pages/courses';
import Code4Kids from '../pages/code4Kids';
import Resources from '../pages/resources';
import About from '../pages/about';
import Contact from '../pages/contact';
import Practice from '../pages/practice';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/code4Kids' component={Code4Kids} />
        <Route exact path='/resources' component={Resources} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/practice' component={Practice} />
    </Switch>
    
);
export default Main; 