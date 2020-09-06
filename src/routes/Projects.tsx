import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {
    IData,
    IDataProject
} from '../interfaces';

import { DataContext } from '../App';

export default function Projects(): JSX.Element {
    const data: IData = useContext(DataContext);

    const [projects, setProjects] = useState<IDataProject[]>([]);

    useEffect(() => {
        if (data.projects) setProjects(data.projects);
    }, [data]);

    return (
        <div id="Projects">
            <h1>Projects</h1>
            {mapProjects(projects)}
        </div>
    );
};

const mapProjects = (projects: IDataProject[]): JSX.Element[] => {
    return projects.map((project: IDataProject): JSX.Element => {
        const { id, name, path, iframeSrc, description } = project;

        const IFrame = (): JSX.Element => (
            <div className="IFrame">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={iframeSrc} title="YouTube video" allowFullScreen></iframe>
                </div>
            </div>
        );

        return (
            <div key={id} className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    {
                        description && <p className="card-text">{description}</p>
                    }

                    {
                        iframeSrc && <IFrame />
                    }

                    <NavLink to={path} className="btn btn-primary mt-3">
                        Full details
                    </NavLink>
                </div>
            </div>
        );
    });
};