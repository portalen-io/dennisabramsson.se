import React from 'react';

export const Welcome = (): JSX.Element => {
    const data = {
        welcomeTitle: 'Welcome',
        blogs: [
            {
                title: 'Uno',
                paragraphs: [
                    'Uno oqinweoqe oqeqo',
                    'Uno1 uioqwd'
                ]
            },
            {
                title: 'Dos',
                paragraphs: [
                    'Dos oqinweoqe oqeqo',
                    'Dos2    uioqwd'
                ]
            }
        ]
    };

    return (
        <section className="Welcom mb-4">
            <div className="row">
                <div className="col-xl-5">
                    <div className="p-4" style={{ backgroundColor: 'salmon', minHeight: '450px' }}>
                    </div>
                </div>

                <div className="col-xl-7 py-5 px-4" >
                    <h1 className="display-2 mb-4">{data.welcomeTitle}</h1>

                    {
                        mapBlogs && mapBlogs(data.blogs)
                    }
                </div>
            </div>
        </section>
    );
};

interface IBlog {
    title: string;
    paragraphs?: string[];
}

const mapBlogs = (blogs: IBlog[]): JSX.Element[] => blogs.map((blog: IBlog) => {
    const mapParagraphs = (paragraphs: string[]) => paragraphs.map((paragraph: string) => {
        return (
            <p key={paragraphs.indexOf(paragraph)}>{paragraph}</p>
        );
    });

    return (
        <article key={blogs.indexOf(blog)} className="blog mb-4">
            <h4>{blog.title}</h4>

            {
                blog.paragraphs && mapParagraphs(blog.paragraphs)
            }
        </article>
    );
});