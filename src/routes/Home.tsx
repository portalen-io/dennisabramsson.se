import React, { useEffect } from 'react';

import { Welcome } from '../components/Welcome';
import { FeaturedProjects } from '../components/FeaturedProjects';

export default function Home(): JSX.Element {
    useEffect(() => {
        if (localStorage.getItem('hasForcedReload') === ('' || null)) {
            localStorage.setItem('hasForcedReload', 'true');
            window.localStorage.reload(true);
        }
    }, []);

    return (
        <div id="Home">
            <Welcome />
            <FeaturedProjects />
        </div>
    );
};