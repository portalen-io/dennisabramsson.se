import React, { Suspense, lazy, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { IData } from './interfaces';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Spinner } from './components/Spinner';

const Home = lazy(() => import('./routes/Home'));
const Projects = lazy(() => import('./routes/Projects'));
const Project = lazy(() => import('./routes/Project'));
const NotFound = lazy(() => import('./routes/NotFound'));

export const DataContext: React.Context<IData> = React.createContext({
    welcome: {
        title: 'Hello!',
        frontImage: {
            name: 'projects/me',
            type: 'jpg',
            alt: 'Front picture',
        },
        blogs: [
            {
                paragraphs: [
                    "My name is Dennis. I'm currently studying programming for game development at Futuregames, a higher vocational school in Stockholm.",
                    "This website is currently under construction, but will in it's finished state function as my portfolio."
                ]
            }
        ]
    },
    projects: [
        {
            id: '2cbdb7fb-4404-424c-858e-7706796b9ba3',
            path: '/project/bahari',
            name: 'Bahari',
            description: "My second project working with a team",
            thumbnailFile: {
                name: 'projects/bahari/5',
                type: 'png',
                alt: 'Bahari',
            },
            iframe: {
                src: 'https://www.youtube.com/embed/bpsRmvPrPB8'
            },
            fullWidth: true,
            asides: [
                {
                    title: 'Project Information',
                    paragraphs: [
                        "Tools used: Unreal Engine, Visual Studio, C++",
                        "Team Size: 14",
                        "Project Time: 4 weeks",
                        "Summary: Bahari, an atmospheric single player adventure game focusing on exploration and photography. You control our main character, a free diver whose passion for underwater photography will take you to discover the beautiful depths of the sea.",
                    ],
                    chatBubble: true
                }
            ],
            blogs: [
                {
                    title: "Role: Programmer",
                    paragraphs: [
                        "During this project I was mainly focused on setting up the photograph mechanic along with it's photo album UI.",
                    ]
                }
            ]
        },
        {
            id: '842d1d8d-5fef-49d5-a8a9-794b61f7d35e',
            path: '/project/skull-patrol',
            name: 'Skull Patrol',
            description: "My first school project working with a team",
            fullWidth: true,
            thumbnailFile: {
                name: 'projects/skull-patrol/Menuu',
                alt: 'Skul Patrol',
                type: 'png'
            },
            iframe: {
                src: 'https://www.youtube.com/embed/59Xo-saWrFs'
            },
            asides: [
                {
                    title: 'Project Information',
                    paragraphs: [
                        "Tools used: Unity Engine, Visual Studio, C#",
                        "Team Size: 6",
                        "Project Time: 2 weeks",
                        "Summary: Skull Patrol is a co-op action arcade game, where the goal is for you and a friend to fight off skeletons and their leader, the Summoner, and top the high score list.",
                        "The game does not have a definitive end. The only purpose is to get the highest possible score. The enemies become faster and tougher the further you progress, which is what creates the real challenge.  In order to reach your dream score, it is important to communicate with your friend to strategically plan your moves. The game has a score multiplier that will continually double your  points until any of the players take damage.",
                        "The skeletons are the core enemies of the game. The first player, controlling Officer Calcium, firstly must shoot the skeletons to trap them in bubbles. Then, the second player, controlling the tank, must shoot the bubbles to bits with their cannon.",
                        "When you and your friend finally gain 1000 points, the boss called The Summoner appears. This enemy requires better communication to beat since it has new elements, separating it from the skeleton enemies. He will continue appearing when you reach higher scores as well, with even tougher attacks."
                    ],
                    chatBubble: true
                }
            ],
            blogs: [
                {
                    title: "Role: Programmer",
                    paragraphs: [
                        "This my first school project collaborating with another disiplince. Our goal was to mash two popular arcade games into one, our choice being Bubble Trubble and Space Invaders. Among the 3 2D artist and the 3 programmers we were able to produce the game Skull Patrol in two weeks based on the goals given.",
                        "The main things I've worked on during this project: ",
                        "Player functionalites - jumping, moving, shooting, general lifecycle (taking damage, dying).",
                        "In game menus created in tight collaboration with the artists.",
                        "In game UI also in tight collaboration with the artists.",
                        "Music player that plays different soundtracks depending on where you are in the game.",
                        "Setting up most of the animations using Unitys Animator",
                        "During the project I further developed my skills using Unity Engine and C# along with learning a lot about how to work more efficent when collaborating with artists."
                    ]

                }
            ]
        },
        {
            id: '677d7fd1-5928-453a-a3cc-79d015ec294c',
            path: '/project/the-unmoored',
            name: 'The Unmoored',
            description: "My third and longest project working on a team",
            thumbnailFile: {
                name: 'projects/the-unmoored/5',
                type: 'png',
                alt: 'The Unmoored'
            },
            iframe: {
                src: 'https://www.youtube.com/embed/QdiV5Ir1ivY'
            },
            fullWidth: true,
            asides: [
                {
                    title: 'Project Information',
                    paragraphs: [
                        "Tools used: Unity Engine, Visual Studio, C#",
                        "Team Size: 10",
                        "Project Time: 7 weeks",
                        "Summary: Unmoored is a first-person puzzle and adventure game made in Unity for PC. The game explores the dark and enigmatic story of Alexandra McCarter—a freelance journalist in the early 1900s—and her atmospheric journey through a tropical island filled with both mystery and suspicion.",
                        "A world-renowned archaeologist, Dr. Stanley Moore, has gone missing during his most recent expedition to a tropical island in the Bermuda Triangle.Although a few years have now passed, the incident has managed to stay relevant in media through rumors and various assumptions.",
                        "Alexandra, or Alex as she calls herself, has for a long time been struggling to makes ends meet and sees an opportunity to get ahead in her career.Alex decides to travel to the island to unravel the mystery, but things do not go as planned.She finds herself involved in troubling events that leave her stranded on the island with nothing but her notebook in hand.",
                        "On the island, Alex solves puzzles to discover mysterious clues and secrets. Soon, Alex also finds herself making decisions that will dramatically alter her future, her survival is at stake.Help Alexandra explore the islands dark and unfortunate history before she too is forever vanished."
                    ],
                    chatBubble: true
                }
            ],
            blogs: [
                {
                    title: "What I've learned/Worked on",
                    paragraphs: [
                        "",
                    ]
                },
            ]
        },
        {
            id: '677d7fd1-5928-453a-a3cc-79d015ec295c',
            path: '/project/snake',
            name: 'Snake with A* driven movement',
            description: "This project is a replication of the famous Snake game with a AI driven snake that uses A* pathfinding to make it's way to the food.",
            thumbnailFile: {
                name: 'projects/snake/thumbnail',
                type: 'png',
                alt: 'A* Snake'
            },
            iframe: {
                src: 'https://www.youtube.com/embed/zKOY2J29YKo'
            },
            fullWidth: true,
            asides: [
                {
                    title: 'Project Information',
                    paragraphs: [
                        "Tools used: Unity Engine, Visual Studio, C#",
                        "Team Size: 1",
                        "Project Time: 4 weeks",
                        "Summary: This project was made as a school project were the main goal was to recreate the Snake game using a single linked list. The bonus goal was adding an AI which goal was to find the food and go to it through the use of A* pathfiniding."
                    ],
                    chatBubble: true
                }
            ],
            blogs: [
                {
                    title: 'Video',
                    paragraphs: [
                        "The video linked is a showcase of the pathing for the snake.",
                        "Red tiles are the snakes body and is deemed unpassable. It will do everything in it's power to avoid stepping on those tiles.",
                        "Green tiles are the drawn path that the snake is on. The last piece being it's target tile.",
                    ],
                    chatBubble: true
                },
                {
                    title: "What I've learned/Worked on",
                    paragraphs: [
                        "How to use and implement a single linked list.",
                        "How to implement a simple A* pathfinding algorithm"
                    ]
                }
            ]
        }
    ],
    socials: [
        {
            ikon: {
                name: 'github-brand',
                type: 'svg',
                alt: 'github'
            }
        }
    ],
    contactBlogs: [
        {
            title: "",
            paragraphs: [""],
        }
    ]
} as IData);

const App = (): JSX.Element => {
    return (
        <Fragment>
            <Header />

            <main className="flex-grow-1">
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/project/:projectName" component={Project} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </main>

            <Footer />
        </Fragment>
    );
};

export default App;