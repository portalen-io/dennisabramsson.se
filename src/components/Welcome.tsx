import React from 'react';

import { IDataProjectsBlog } from '../interfaces';

export const Welcome = (): JSX.Element => {
    const data = {
        welcomeTitle: 'Welcome',
        blogs: [
            {
                title: 'Uno',
                paragraphs: [
                    'Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqo Uno oqinweoqe oqeqoUno oqinweoqe oqeqoUno oqinweoqe oqeqo Uno oqinweoqe oqeqo U öåöä åöäöå no oqinweoqe oqeqo '
                ]
            }
        ]
    };

    return (
        <section className="Welcome py-5">
            <div className="container p-3">
                <div className="row">

                    <div className="col-xl-6">
                        <img src={`${process.env.PUBLIC_URL}/flying-robots.jpg`} alt="Picture of me!" className="d-block mx-auto mx-xl-0 ml-xl-auto w-100" />
                    </div>

                    <div className="col-xl-6 p-4" >
                        <h1 id="front-title" className="display-1 mb-4">{data.welcomeTitle}</h1>

                        {
                            mapBlogs && mapBlogs(data.blogs)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export const mapBlogs = (blogs: IDataProjectsBlog[]): JSX.Element[] => blogs.map((blog: IDataProjectsBlog) => {
    const mapParagraphs = (paragraphs: string[]) => paragraphs.map((paragraph: string) => {
        return (
            <p key={paragraphs.indexOf(paragraph)} className="card-text">{paragraph}</p>
        );
    });

    return (
        <article key={blogs.indexOf(blog)} className="blog mb-4 card box-shadow-2">
            {
                blog.thumbnailFile && <img src={`${process.env.PUBLIC_URL}/${blog.thumbnailFile.name}.${blog.thumbnailFile?.type}`} className="card-img-top" alt={blog.thumbnailFile.alt} />
            }

            <div className="card-body">
                <h4 className="card-title">{blog.title}</h4>

                {
                    blog.paragraphs && mapParagraphs(blog.paragraphs)
                }
            </div>
        </article>
    );
});