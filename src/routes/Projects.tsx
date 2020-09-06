import React, { Suspense, useState, useEffect, Fragment, useContext } from 'react';

import {
    IData,
    IDataProject,
    IDataProjectsBlog
} from '../interfaces';

import { DataContext } from '../App';

import { Spinner } from '../components/Spinner';

export default function Projects() {
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

const mapProjects = (projects: IDataProject[]) => projects.map((project: IDataProject) => {
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

                <a href={path} className="btn btn-primary mt-3">Full details</a>
            </div>
        </div>
    );
});