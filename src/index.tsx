
//import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/common';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './application/App';
import * as serviceWorker from './serviceWorker';

// Create browser history to use in the Redux store
const baseUrl = window.location.origin;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = {};
const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');

//<Provider store={store}>
//<ConnectedRouter history={history}>
//    <App />
//</ConnectedRouter>
//</Provider>

ReactDOM.render(
    <App />,
    rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
