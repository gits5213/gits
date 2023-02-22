import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import Courses from '../pages/courses';
import Docs from '../pages/docs';
import APIS from '../pages/apis';
import Conf from '../pages/conf';
import About from '../pages/about';
import Contact from '../pages/contact';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='https://gits5213.github.io/gits/courses' component={Courses} />
        <Route exact path='https://gits5213.github.io/gits/docs' component={Docs} />
        <Route exact path='https://gits5213.github.io/gits/apis' component={APIS} />
        <Route exact path='https://gits5213.github.io/gits/conf' component={Conf} />
        <Route exact path='https://gits5213.github.io/gits/about' component={About} />
        <Route exact path='https://gits5213.github.io/gits/contact' component={Contact} />
    </Switch>
);
export default Main; 