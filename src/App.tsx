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
        title: 'Hi!',
        frontImage: {
            name: 'projects/bahari/logo',
            type: 'svg',
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
            description: "Inspired by games like Abzu and Pokemon Snap, we present to you: Bahari, an atmospheric single player adventure game focusing on exploration and photography. You control our main character, a free diver whose passion for underwater photography will take you to discover the beautiful depths of the sea.The atmospheric underwater environments and the lack of enemies set a tone that produces a relaxing and calm experience, but that still entices you to explore the surroundings even further.As a free diver you need to keep track of your oxygen level as well as the beats of your heart and also make sure to refill your exhausted lungs from time to time.You’ll also be equipped with your trusty camera, with which you'll be able to photograph the terrain and fishes around you. During your adventure you’ll come across hidden treasures that will unravel missing pieces of your past. Bahari is our tribute to nature and a depiction of a sea life that may not exist in the not so distant future.The game is developed for PC and it is designed to be played by people of all ages thanks to its non- violent gameplay.We hope that you enjoy it.",
            thumbnailFile: {
                name: 'projects/bahari/5',
                type: 'png',
                alt: 'Bahari',
            },
            fullWidth: true,
            iframe: {
                src: 'https://www.youtube.com/embed/bpsRmvPrPB8'
            },
            blogs: [
                {
                    paragraphs: [
                        "Inspired by games like Abzu and Pokemon Snap, we present to you: Bahari, an atmospheric single player adventure game focusing on exploration and photography. You control our main character, a free diver whose passion for underwater photography will take you to discover the beautiful depths of the sea.The atmospheric underwater environments and the lack of enemies set a tone that produces a relaxing and calm experience, but that still entices you to explore the surroundings even further.As a free diver you need to keep track of your oxygen level as well as the beats of your heart and also make sure to refill your exhausted lungs from time to time.You’ll also be equipped with your trusty camera, with which you'll be able to photograph the terrain and fishes around you.During your adventure you’ll come across hidden treasures that will unravel missing pieces of your past.Bahari is our tribute to nature and a depiction of a sea life that may not exist in the not so distant future.The game is developed for PC and it is designed to be played by people of all ages thanks to its non- violent gameplay.We hope that you enjoy it."
                    ]
                }
            ]
        },
        {
            id: '842d1d8d-5fef-49d5-a8a9-794b61f7d35e',
            path: '/project/skull-patrol',
            name: 'Skull Patrol',
            description: "Skull Patrol is a co-op action arcade game, where the goal is for you and a friend to fight off skeletons and their leader, the Summoner, and top the high score list.",
            fullWidth: true,
            thumbnailFile: {
                name: 'projects/skull-patrol/Menuu',
                alt: 'Skul Patrol',
                type: 'png'
            },
            iframe: {
                src: 'https://www.youtube.com/embed/59Xo-saWrFs'
            },
            blogs: [
                {
                    title: 'Skull Patrol',
                    paragraphs: [
                        "Skull Patrol is a co-op action arcade game, where the goal is for you and a friend to fight off skeletons and their leader, the Summoner, and top the high score list.",
                        "The game does not have a definitive end. The only purpose is to get the highest possible score. The enemies become faster and tougher the further you progress, which is what creates the real challenge.  In order to reach your dream score, it is important to communicate with your friend to strategically plan your moves. The game has a score multiplier that will continually double your  points until any of the players take damage.",
                        "The skeletons are the core enemies of the game. The first player, controlling Officer Calcium, firstly must shoot the skeletons to trap them in bubbles. Then, the second player, controlling the tank, must shoot the bubbles to bits with their cannon.",
                        "When you and your friend finally gain 1000 points, the boss called The Summoner appears. This enemy requires better communication to beat since it has new elements, separating it from the skeleton enemies. He will continue appearing when you reach higher scores as well, with even tougher attacks."
                    ],

                }
            ]
        },
        {
            id: '677d7fd1-5928-453a-a3cc-79d015ec294c',
            path: '/project/the-unmoored',
            name: 'The Unmoored',
            description: "Unmoored is a first-person puzzle and adventure game made in Unity for PC. The game explores the dark and enigmatic story of Alexandra McCarter—a freelance journalist in the early 1900s—and her atmospheric journey through a tropical island filled with both mystery and suspicion.",
            thumbnailFile: {
                name: 'projects/the-unmoored/5',
                type: 'png',
                alt: 'The Unmoored'
            },
            iframe: {
                src: 'https://www.youtube.com/embed/QdiV5Ir1ivY'
            },
            fullWidth: true,
            blogs: [
                {
                    title: "The Unmoored",
                    paragraphs: [
                        "Unmoored is a first-person puzzle and adventure game made in Unity for PC. The game explores the dark and enigmatic story of Alexandra McCarter—a freelance journalist in the early 1900s—and her atmospheric journey through a tropical island filled with both mystery and suspicion.",
                        "A world-renowned archaeologist, Dr. Stanley Moore, has gone missing during his most recent expedition to a tropical island in the Bermuda Triangle.Although a few years have now passed, the incident has managed to stay relevant in media through rumors and various assumptions.",
                        "Alexandra, or Alex as she calls herself, has for a long time been struggling to makes ends meet and sees an opportunity to get ahead in her career.Alex decides to travel to the island to unravel the mystery, but things do not go as planned.She finds herself involved in troubling events that leave her stranded on the island with nothing but her notebook in hand.",
                        "On the island, Alex solves puzzles to discover mysterious clues and secrets. Soon, Alex also finds herself making decisions that will dramatically alter her future, her survival is at stake.Help Alexandra explore the islands dark and unfortunate history before she too is forever vanished."
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