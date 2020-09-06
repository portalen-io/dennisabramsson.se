import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './styles/index.min.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

declare global {
    type Guid = string;

    interface Window {
        Guid(): string;
    }
};

window.Guid = () => uuidv4();

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
