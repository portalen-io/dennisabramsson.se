import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {
    IData,
    IDataProject,
} from '../interfaces';

import { DataContext } from '../App';

export const FeaturedProjects = (): JSX.Element => {
    const data: IData = useContext(DataContext);

    const featuredProjectsQuantity: number = process.env.REACT_APP_FEATURED_PROJECTS_QUANTITY
        ? parseInt(process.env.REACT_APP_FEATURED_PROJECTS_QUANTITY, 10)
        : 3;

    return (
        <section className="FeaturedProjects">
            <div className="row justify-content-center">
                {data.projects && mapFeaturedProjects(data.projects, featuredProjectsQuantity)}
            </div>
        </section>
    );
};

const mapFeaturedProjects = (projects: IDataProject[], featuredProjectsQuantity: number): (JSX.Element | undefined)[] => {
    return projects.map((project: IDataProject): JSX.Element | undefined => {
        const { id, path, name, description } = project;

        while (projects.indexOf(project) < featuredProjectsQuantity) {
            return (
                <div key={id} className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>

                            {
                                description && <p className="card-text">{description}</p>
                            }

                            <NavLink to={path} className="btn btn-primary">
                                Full details
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        }
    });
};
