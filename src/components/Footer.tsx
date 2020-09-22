import React from 'react';

import { mapBlogs } from './Welcome';

const blogsxx = [
    {
        title: 'Uno',
        paragraphs: [
            ' <a href="Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqoUno oqinweoqe oqeqoUno oqinweoqe oqeqo Uno oqinweoqe oqeqo U öåöä åöäöå no oqinweoqe oqeqo '
        ]
    }
]

export const Footer = (): JSX.Element => {
    return (
        <footer id="Footer" className="Footer bg-white border-top">
            <div className="container p-3">
                <div className="p-4">
                    <h1 id="front-title" className="display-1 mb-4 text-center">Contacts</h1>

                    <p className="text-center m-auto" style={{ maxWidth: '600px' }}>
                        Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqoUno oqinweoqe oqeqoUno oqinweoqe oqeqo Uno oqinweoqe oqeqo U öåöä åöäöå no oqinweoqe oqeqo
                    </p>

                    <a href="mailto:kontakt@dennisabramsson.se">
                        <i className="fas fa-envelope"></i>
                        kontakt@dennisabramsson.se
                    </a>
                </div>
            </div>
        </footer>
    );
};