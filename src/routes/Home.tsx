import React, { useEffect } from 'react';

import { Welcome } from '../components/Welcome';
import { FeaturedProjects } from '../components/FeaturedProjects';

export default function Home(): JSX.Element {
    useEffect(() => {
        if (!localStorage.getItem('hasForcedReload')) {
            localStorage.setItem('hasForcedReload', 'true');
            window.location.reload(true);
        }

        return () => {
            localStorage.removeItem('hasForcedReload');
        }
    }, []);

    return (
        <div id="Home">
            <Welcome />
            <FeaturedProjects />
        </div>
    );
};