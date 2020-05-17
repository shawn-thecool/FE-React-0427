import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StateRouter } from './common/StateRouter';
import TodoPage from './_todo/Page';
import HomePage from './home/HomePage';
import LiveProjectsPage from './live/LiveProjectsPage';

const App = props => {
  return (
    <StateRouter>
      <Switch>
        <Route path="/live">
          <LiveProjectsPage />
        </Route>
        <Route path="/todo" >
          <TodoPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </StateRouter>
  );
};

export default App;
