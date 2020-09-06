import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './styles/index.min.css';
import App from './App';

import EnvironmentVariables from './environmentVariables';

import * as serviceWorker from './serviceWorker';

declare global {
    type GUID = string;

    interface Window {
        NEW_GUID(): GUID;
        ENV_PRODUCTION: boolean;
        ENV_DEVELOPMENT: boolean;
    }
};

(function () {
    window.ENV_PRODUCTION = process.env.REACT_APP_DIST_ENV === EnvironmentVariables.Production;
    window.ENV_DEVELOPMENT = process.env.REACT_APP_DIST_ENV === EnvironmentVariables.Development;
    window.NEW_GUID = () => uuidv4();

    function developmentLogs() {
        console.log(
            "%cprocess.env.REACT_APP_FEATURED_PROJECTS_QUANTITY:",
            "font-family:system-ui;font-size:1rem;font-weight:bold");
        console.log(process.env.REACT_APP_FEATURED_PROJECTS_QUANTITY);
    }

    function productionLogs() {
        console.log(
            "%cDennisAbramsson.se",
            "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 3px black;font-weight:bold");
    }

    if (window.ENV_PRODUCTION) productionLogs();
    else if (window.ENV_DEVELOPMENT) developmentLogs();
})();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route component={App} />
        </Router>
    </React.StrictMode>,
    document.getElementById('App')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
