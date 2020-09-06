import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
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
})();

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Route component={App} />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('App')
);

(function () {
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

    if (window.ENV_PRODUCTION) {
        serviceWorker.register();
        productionLogs();
    }
    else if (window.ENV_DEVELOPMENT) {
        serviceWorker.unregister();
        developmentLogs();
    }
})();
