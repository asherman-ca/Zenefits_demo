import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Places from '../places/places_container';
import Header from '../header/header_container';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={Header}>
          <IndexRoute component={Places} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;