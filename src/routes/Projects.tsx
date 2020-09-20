import React, { useState, useEffect, useContext, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import {
    IData,
    IDataProject
} from '../interfaces';

import { DataContext } from '../App';
import { mapProjects } from '../components/FeaturedProjects';

export default function Projects(): JSX.Element {
    const data: IData = useContext(DataContext);

    const [projects, setProjects] = useState<IDataProject[]>([]);

    useEffect(() => {
        if (data.projects) setProjects(data.projects);
    }, [data]);

    return (
        <div id="Projects">
            <div className="container p-3">
                <h1 className="display-1 my-4 text-center">Projects</h1>

                <div className="row">
                    {data.projects && mapProjects(data.projects)}
                </div>
            </div>
        </div>
    );
};