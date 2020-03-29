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
// Combine reducers with inbuild function
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// Uncomment import below if you need redux logging into console
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Import reducers
import { searchRobots, requestRobots } from './redux/reducers';

// Creat root Redux reducer for the app
const rootReducer = combineReducers({ searchRobots, requestRobots });

// Create variables for Redux, create and apply middleware to the store
// Uncomment logger variable and add it to applyMiddleware to se all what happens in console.log
// const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

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
serviceWorker.register();
