import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './components/store';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  ReactDom.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});


