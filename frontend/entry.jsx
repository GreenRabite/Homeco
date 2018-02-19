import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  // let preloadedState = undefined;
  // if (window.currentUser) {
  //   preloadedState = {
  //     session: {
  //       currentUser: window.currentUser
  //     }
  //   };
  // }
  // const store = configureStore(preloadedState);
  const store = configureStore();
  window.store = store;
  // ReactDOM.render(<div>Hello! Homeco</div>, document.getElementById('root'));
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
