import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, useLocation, useParams, useHistory } from 'react-router-dom';
import {
  useLastLocation,
  LastLocationProvider
} from 'react-router-last-location';

const history = createBrowserHistory({
  basename: '/front',
  getUserConfirmation: (message, callback) => {
    setTimeout(() => {
      console.log('getUserConfirmation');
      callback(window.confirm(message));
    }, 1000);
  }
});
export const StateRouter = ({ children }) => (
  <Router history={history}>
    <LastLocationProvider>{children}</LastLocationProvider>
  </Router>
);
export const withRouteState = options => Component => props => {
  const location = useLocation();
  const lastLocation = useLastLocation();
  const params = useParams();
  const history = useHistory();
  console.log({
    location,
    lastLocation,
    params,
    history
  });

  return <Component />;
};
