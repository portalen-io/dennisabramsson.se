import React from 'react';

export const Header = () => {
    return (
        <header className="Header">
            <div className="container py-2">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">Dennis Abramsson</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active ml-3" aria-current="page" href="/">Home</a>
                            <a className="nav-link ml-3" href="/projects">Projects</a>
                            <a className="nav-link ml-3" href="/contacts">Contacts</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};