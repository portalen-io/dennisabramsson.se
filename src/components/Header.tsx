import React from 'react';
import { NavLink } from 'react-router-dom';

import { scrollTo } from '../scrollTo'

export const Header = (): JSX.Element => {
    return (
        <header className="Header">
            <div className="container py-2">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink to="/" className="navbar-brand">
                        Dennis Abramsson
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link active ml-3" aria-current="page">
                                Home
                            </NavLink>
                            <NavLink to="/projects" className="nav-link ml-3">
                                Projects
                            </NavLink>
                            <a id="contact-btn-link" className="nav-link ml-3" style={{ cursor: 'pointer' }} onClick={() => scrollTo('Footer')}>
                                Contacts
                            </a>
                        </div>
                        <i className="fab fa-github"></i>
                    </div>
                </nav>
            </div>
        </header>
    );
};