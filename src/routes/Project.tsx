import React, { Suspense, useState, useEffect, Fragment, useContext } from 'react';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';

import {
    IData,
    IDataProject,
    IDataProjectsBlog
} from '../interfaces';

import { DataContext } from '../App';

import { Spinner } from '../components/Spinner';

interface IProjectRouteProps {
    projectName: string;
};

export default function Project(props: RouteComponentProps<IProjectRouteProps>): JSX.Element {
    const data: IData = useContext(DataContext);

    const [project, setProject] = useState<IDataProject>({} as IDataProject);
    const [render, setRender] = useState<boolean>(false);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        if (data.projects) {
            data.projects.forEach((project: IDataProject) => {
                if (window.location.hash.includes(project.path)) {
                    setProject(project);
                    setRender(true);
                } else if (data.projects && data.projects.indexOf(project) === data.projects.length) {
                    setIsNotFound(true);
                }
            });
        }
    }, [data]);

    const RoutedProject = (): JSX.Element => (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path={props.match.url} render={() => <ProjectContent {...project} />} />
            </Switch>
        </Suspense>
    );

    if (isNotFound) return <Redirect to='/NotFound' />;

    if (render) return <RoutedProject />;
    else return <Fragment></Fragment>;
};

const ProjectContent = (project: IDataProject): JSX.Element => {
    const { name, description, iframeSrc, blogs } = project;

    const IFrame = (): JSX.Element => (
        <div className="IFrame">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={iframeSrc} title="YouTube video" allowFullScreen></iframe>
            </div>
        </div>
    );

    return (
        <div className="ProjectContent">
            <div className="container p-3">
                <h2>{name}</h2>

                {
                    description && <p>{description}</p>
                }

                {
                    iframeSrc && <IFrame />
                }

                {
                    blogs && mapProjectBlog(blogs)
                }
            </div>
        </div>
    );
};

const mapProjectBlog = (blogs: IDataProjectsBlog[]): JSX.Element[] => {
    return blogs.map((blog: IDataProjectsBlog): JSX.Element => {
        const mapParagraphs = (paragraphs: string[]) => paragraphs.map((paragraph: string) => {
            return (
                <p key={paragraphs.indexOf(paragraph)}>{paragraph}</p>
            );
        });

        return (
            <div key={blogs.indexOf(blog)} className="mb-4">
                <h4>{blog.title}</h4>

                {
                    blog.paragraphs && mapParagraphs(blog.paragraphs)
                }
            </div>
        );
    });
};