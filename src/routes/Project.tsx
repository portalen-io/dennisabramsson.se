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
    const { name, description, iframe, blogs, thumbnailFile, projectBlogs } = project;

    const IFrame = (): JSX.Element => {
        return (
            <Fragment>
                {
                    iframe &&
                    <div className="IFrame card box-shadow-2 overflow-hidden">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={iframe.src} title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>
                }
            </Fragment>
        );
    };

    return (
        <div className="ProjectContent">
            <div className="container p-3">
                <h1 className="display-1 my-4 text-center">{name}</h1>

                {
                    description &&
                    <article className="card box-shadow-2 col-lg-6 mx-auto mb-4">
                        <div className="card-body">
                            <p className="card-text">{description}</p>
                        </div>
                    </article>

                }

                <div className="row">
                    {
                        (iframe && iframe.src || thumbnailFile) &&

                        iframe && iframe.src &&
                        <div className={`${iframe.fullWidth ? '' : 'col-lg-8'}`}>
                            <IFrame />
                        </div>
                    }

                    {
                        !iframe && thumbnailFile &&
                        <div className={`${thumbnailFile.fullWidth ? '' : 'col-lg-8'}`}>
                            <img src={`${process.env.PUBLIC_URL}/${thumbnailFile.name}.${thumbnailFile?.type}`} className="card-img-top" alt={thumbnailFile.alt} />
                        </div>
                    }

                    {
                        projectBlogs &&
                        <div className={`${iframe && (iframe.fullWidth || thumbnailFile && thumbnailFile.fullWidth) ? '' : 'col-lg-4'}`}>
                            { // fix if either iframe.fullWdith or thumbnail fullWdith
                                mapProjectBlog(projectBlogs, true)
                            }
                        </div>
                    }
                </div>

                {
                    blogs &&
                    <div className="row justify-content-center">
                        {
                            mapProjectBlog(blogs)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

const mapProjectBlog = (blogs: IDataProjectsBlog[], fullWidth?: boolean): JSX.Element[] => {
    return blogs.map((blog: IDataProjectsBlog): JSX.Element => {
        const mapParagraphs = (paragraphs: string[]) => paragraphs.map((paragraph: string) => {
            return (
                <p key={paragraphs.indexOf(paragraph)} className="card-text">{paragraph}</p>
            );
        });

        return (
            <div key={blogs.indexOf(blog)} className={fullWidth ? 'col-12' : 'col-lg-6'}>
                <article className="card box-shadow-2 mt-4">
                    <div className={blog.title || blog.paragraphs ? 'card-body' : ''}>
                        {
                            blog.title && <h5>{blog.title}</h5>
                        }

                        {
                            blog.thumbnailFile && <img src={`${process.env.PUBLIC_URL}/${blog.thumbnailFile.name}.${blog.thumbnailFile?.type}`} className="card-img-top" alt={blog.thumbnailFile.alt} />
                        }

                        {
                            blog.paragraphs && mapParagraphs(blog.paragraphs)
                        }
                    </div>
                </article>
            </div>
        );
    });
};