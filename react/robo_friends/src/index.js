// Support for older browsers
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// Third party packages
import 'tachyons';

// Import Redux to the project
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import reducers
import { searchRobots } from './redux/reducers';

// Create reducer
const store = createStore(searchRobots);

// Use Provider component to pass store to all components across the app
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
