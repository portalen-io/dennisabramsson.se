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
        title: 'Welcome to my portfolio!',
        frontImage: {
            name: 'projects/me',
            type: 'png',
            alt: 'Front picture',
        },
        blogs: [
            {
                paragraphs: [
                    "My name is Dennis Abramsson and I'm currently a student at Futuregames.",
                    "I'm a video game enthusiast and have been playing games since as long as I can remember. So when I fell over the thought to learn how to create games it felt natural.",
                    "I started out learning how Unity works and started to familiarize myself with C# syntax and the libraries in Unity in the beginning of 2019. After a few months I was able to produce the worksample that got me accepted into Futuregames and I haven't looked back since.",
                    "During my time at Futuregames my knowledge about Unity and C# has grown immensely and I've also learned a lot working with both Unreal Engine and C++.",
                    "At the time writing this I've been able to create 4 games in collaboration with fellow students from other disciplines than programming. You can see most of them below."
                    ],
            }
        ]
    },
    projects: [
        {
            id: '842d1d8d-5fef-49d5-a8a9-794b61f7d35e',
            path: '/project/skull-patrol',
            name: 'Skull Patrol',
            description: "My first team project working in Unity",
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
                        "Tools used: Unity Engine, Visual Studio, C#, Perforce",
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
            id: '2cbdb7fb-4404-424c-858e-7706796b9ba3',
            path: '/project/bahari',
            name: 'Bahari',
            description: "My first team project working in Unreal Engine",
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
                        "Tools used: Unreal Engine, Visual Studio, C++, Perforce",
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
                        "During this project my main responsibility was our photo mechanic. I was tasked to create a way for the player to take a photo of the environment and that photo had to tell if it's motif was a collectable object.",
                        "To extend this feature I built an UI in collaboration with a 2D Artist to display the photos in an album in game. I also created the end game menu to give a last chance to look at the picture you've taken in peace and quiet.",
                        "The photo album was split into 2 parts. One where all photos were readily availble and one part where pre painted 2D pictures would fill out slowly as you snap pictures of important motifs slowly revealing the full picture as you progress."
                    ]
                }
            ]
        },
        {
            id: '677d7fd1-5928-453a-a3cc-79d015ec294c',
            path: '/project/the-unmoored',
            name: 'The Unmoored',
            description: "Made during stay at home orders",
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
                        "Tools used: Unity Engine, Visual Studio, C#, Perforce",
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
                    title: "Role: Programmer",
                    paragraphs: [
                        "This was our second project in Unity. I was quite excited to come back after working in Unreal as I had read a lot about Scriptable Objects and were excited to try it out.",
                        "Using Scriptable Objects I was able to produce a Dialouge system, an Inventory system with pickupable items and a type of observable value.",
                        "Towards the end of the project I realized that using Scriptable Objects as an observable value wasn't really efficent or recommended. Atleast not the way I had set it up. It more or less just lead to a bunch of unnecessary calls which slowed down the whole process, but it was a fun experiment in a try to remove coupling between objects.",
                        "I was the most satisfied with the result of the inventory system. It felt responsive and the designer seemed to have an easy time working with it.",
                        "The dialouge system was a bit of a mess. It was functional and did what it was supposed to do, but it was not particular user friendly and as convenient to set up as the Inventory. With a bit more time I would have liked to expand upon it with an custom editor script that would visualize the branching of conversations as a tree to make it easer for writers to create more interesting conversations.",
                        "I was also responsible for the interaction system and the implementation of the Jigsaw puzzle."
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
                        "Tools used: Unity Engine, Visual Studio, C#, Github",
                        "Team Size: 1",
                        "Project Time: 4 weeks",
                        "Summary: This project was made as a school project were the main goal was to recreate the Snake game using a single linked list. The bonus goal was adding an AI which goal was to find the food and go to it through the use of A* pathfiniding."
                    ],
                    chatBubble: true
                },
                {
                    title: 'Code Snippets',
                    chatBubble: true
                },
                {
                    thumbnailFile: {
                        name: 'projects/snake/tileCode',
                        type: 'png',
                        alt: 'nodeCode',
                    },
                },
                {
                    thumbnailFile: {
                        name: 'projects/snake/singleLinked',
                        type: 'png',
                        alt: 'singleLinkedList',
                    },
                },
                {
                    thumbnailFile: {
                        name: 'projects/snake/nodeCode',
                        type: 'png',
                        alt: 'nodeCode'
                    },
                },       
                {
                    thumbnailFile: {
                        name: 'projects/snake/findPath',
                        type: 'png',
                        alt: 'nodeCode'
                    },
                }, 
            ],
            blogs: [
                {
                    title: 'Video',
                    paragraphs: [
                        "The video linked is a showcase of the pathing for the snake.",
                        "Red tiles are the snakes body and is deemed unpassable. It will do everything in it's power to avoid stepping on those tiles.",
                        "Green tiles are the drawn path that the snake is on. The last piece being it's target tile.",
                    ]
                },
                {
                    title: "Tile/SinglyLinkedList",
                    paragraphs: [
                        "The first two code snippets you can see on the left side is my implementation of a single linked list.",
                        "The Tile class is just a simple struct that keeps all the information we need to build the list.",
                        "My SinglyLinkedList class is the actual implemention of the list. It is later used in game to handle the Snakes movement. To handle the movement I simply move the first object in the list one step in the right direction. I then get the last object in the list, which is why I saved it as a variable, and place it right behind the head.",
                        "That way I am able to produce a result where the snake is moving fluidly without having to move every single body part."
                    ]
                },
                {
                    title: "Node/FindPath",
                    paragraphs: [
                        "The last two snippets are from my implementation of the A* algorithm.",
                        "The node class is structured similar to the Tile class. It contains the data necessary to calculate the path.",
                        "FindPath, as the name suggest, is the actual fuction that calculates the path from the start position to the target position. If the target node is found and there is a clear path to it we retrace our steps and add every node to a list. I then reverse the list which results in having a data container I can iterate through to know the next movement for the snake.",
                        "If no clear path can be found I created logic for the snake to try to survive a bit longer in hope that a path would open up as the snake continues to move. To do this I simply made the snakes tail walkable and put it as the target node for finding a path. Which results in the snake following itself untill a path can be found.",
                        "If neither the the original target node or the tail can be found the snake will check the closest nodes to see which is walkable and go to it. This gives the snakes a few extra movements in hope of finding a path. If it doesn't find a path it will hit eventually hit a wall or collide with itself trigger the loosing condition."
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
                alt: 'github',
            },
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