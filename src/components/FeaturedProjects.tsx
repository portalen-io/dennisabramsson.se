import React, { useContext } from 'react';

import {
    IData,
    IDataProject,
} from '../interfaces';

import { DataContext } from '../App';

export const FeaturedProjects = () => {
    const data: IData = useContext(DataContext);

    return (
        <section className="FeaturedProjects">
            {data.projects && mapFeaturedProjects(data.projects)}
        </section>
    );
};

const mapFeaturedProjects = (projects: IDataProject[]) => projects.map((project: IDataProject) => {
    const { id, path, name, description } = project;

    while (projects.indexOf(project) < 3) {
        return (
            <div key={id} className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    {
                        description && <p className="card-text">{description}</p>
                    }

                    <a href={path} className="btn btn-primary">Full details</a>
                </div>
            </div>
        );
    }
});
