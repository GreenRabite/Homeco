//materialize css doc: http://materializecss.com/getting-started.html
// import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import Root from './components/root';
import configureStore from './store/configureStore';

// testing

import {fetchUserSchedules, fetchContractorSchedule} from './util/schedule_utils';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  window.store = store;
  window.fetchUserSchedules = fetchUserSchedules;
  window.fetchContractorSchedule = fetchContractorSchedule;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
