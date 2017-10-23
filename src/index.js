/* global document, window */
import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/core/root';
import configureStore from './components/core/store';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  ReactDom.render(
    <Root store={store} />,
    document.getElementById('root')
  );
  console.log(store);
  window.store = store;
  window.s = store.getState;
});


