import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../config/routes';
import LoadingFallback from './shared/LoadingFallback';

/**
 * Main routing component with code splitting
 * All routes are lazy-loaded for optimal performance
 */
const Main = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Suspense>
);

export default Main; 