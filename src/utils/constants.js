import mestomain from '../images/mesto.png'
import mesto from '../images/mesto.png'
import mesto2 from '../images/mesto2.png'
import mesto3 from '../images/mesto3.png'

import moviesmain from '../images/moviesmain.png'
import movies from '../images/movies.png'
import movies2 from '../images/movies2.png'
import movies3 from '../images/movies3.png'

import portfoliomain from '../images/portfoliomain.png'
import portfolio from '../images/portfolio.png'
import portfolio2 from '../images/portfolio2.png'
import portfolio3 from '../images/portfolio3.png'

import partymain from '../images/partymain.png'
import party from '../images/party.png'
import party2 from '../images/party2.png'
import party3 from '../images/party3.png'

import zamyatyshmain from '../images/zamyatyshmain.png'
import zamyatysh from '../images/zamyatysh.png'
import zamyatysh2 from '../images/zamyatysh2.png'
import zamyatysh3 from '../images/zamyatysh3.png'

import chatmain from '../images/chatmain.png'
import chat from '../images/chat.png'
import chat2 from '../images/chat2.png'
import chat3 from '../images/chat3.png'

import yandexmain from '../images/yandexmain.png'
import yandex from '../images/yandex.png'
import yandex2 from '../images/yandex2.png'
import yandex3 from '../images/yandex3.png'

import travelmain from '../images/travelmain.png'
import travel2 from '../images/travel2.png'
import travel3 from '../images/travel3.png'

import learnmain from '../images/learnmain.png'
import learn from '../images/learn.png'
import learn2 from '../images/learn2.png'
import learn3 from '../images/learn3.png'

import marathonmain from '../images/marathonmain.png'
import marathon1 from '../images/apex.png'
import marathon2 from '../images/todo.png'
import marathon3 from '../images/anderson.png'
import marathon4 from '../images/snake.png'
import marathon5 from '../images/cat.png'

import lavkamain from '../images/lavkamain.png';
import lavka from '../images/lavka.png';
import lavka2 from '../images/lavka2.png';
import lavka3 from '../images/lavka3.png';

export const projects = [
    {
        title: 'mesto',
        description: `The project 'Mesto' is a kind of a social network, the main function of which is to share photos and rate photos of other users. Analogue of instagram`,
        icon: mestomain,
        images: [mesto, mesto2, mesto3],
        stack: ['React', 'RestAPI', 'NodeJS', 'Express', 'MongoDB', 'Addaptive', 'eslint'],
        github: 'https://github.com/DanyaLiupinin/react-mesto-api-full',
        browser: 'https://danyaliupinin.github.io/react-mesto-api-full/',
        id: 1,
        type: 'default',
        analiticsName: 'mesto'
    },
    {
        title: 'movies explorer',
        description: `"Movies explorer" is a movie library that allows you to find and filter different movies and save them to your favorites. Analogue of IMBD or russian Kinopoisk`,
        icon: moviesmain,
        images: [movies3, movies2, movies],
        stack: ['React', 'RestAPI', 'NodeJS', 'Express', 'MongoDB', 'Addaptive', 'eslint'],
        github: 'https://github.com/DanyaLiupinin/movies-explorer-frontend',
        browser: 'https://danyaliupinin.github.io/movies-explorer-frontend',
        id: 2,
        type: 'default',
        analiticsName: 'movies'
    },
    {
        title: 'zamy shop',
        description: `Online merchandise store, dedicated to a frog named Zamy :>`,
        icon: zamyatyshmain,
        images: [zamyatysh, zamyatysh2, zamyatysh3],
        stack: ['React', 'Redux', 'TypeScript', 'Axios', 'Scss', 'Addaptive', 'Feature sliced architecture', 'Craco', 'Radix', 'Procreate for gifs'],
        github: 'https://github.com/DanyaLiupinin/zamyatysh',
        browser: 'https://danyaliupinin.github.io/zamyatysh/',
        id: 3,
        type: 'default',
        analiticsName: 'zamyatysh'
    },
    {
        title: 'partyshaker',
        description: `Service for bartenders and party organizers, which gives access to the library of cocktail recipes with a flexible search system and the ability to create your own recipes. Developed in a large team. Production in 2024`,
        icon: partymain,
        images: [party, party2, party3],
        stack: ['React', 'React query', 'Redux', 'TypeScript', 'Axios', 'Vite', 'Css modules', 'Tailwind', 'Addaptive', 'FSD architecture', 'Radix'],
        github: 'no',
        browser: 'no',
        browserButton: 'MVP release in 2024',
        id: 4,
        type: 'default',
        analiticsName: 'partyshaker'
    },
    {
        title: 'telegram marketplace',
        description: `crypto marketplace for the sale of digital goods`,
        icon: lavkamain,
        images: [lavka, lavka2, lavka3],
        stack: ['React', 'React query', 'Redux', 'TypeScript', 'Axios', 'Rest Api', 'Css modules', 'Tailwind', 'Addaptive', 'FSD architecture'],
        github: 'no',
        browser: 'https://t.me/justlavkabot',
        id: 5,
        type: 'default',
        analiticsName: 'justlavka'
    },
    {
        title: 'web developer portfolio',
        description: `Landing page with a presentation of my professional skills, which contains all my completed projects`,
        icon: portfoliomain,
        images: [portfolio, portfolio2, portfolio3],
        stack: ['React', 'Functional components', 'Addaptive', 'Vanta library', 'Motion framer library'],
        github: 'https://github.com/DanyaLiupinin/myportfolio-react',
        browser: 'https://danyaliupinin.github.io/myportfolio-react/',
        id: 6,
        type: 'default',
        analiticsName: 'portfolio'
    },
    {
        title: 'lonely chat',
        description: `'Lonely chat' is a service for people who have no one to talk to. Thanks to the 'chat', a person can communicate with himself using different browser tabs.`,
        icon: chatmain,
        images: [chat, chat2, chat3],
        stack: ['React', 'Local storage', 'Session storage', 'Addaptive'],
        github: 'https://github.com/DanyaLiupinin/chat',
        browser: 'https://danyaliupinin.github.io/chat/',
        id: 7,
        type: 'default',
        analiticsName: 'lonely'
    },
    {
        title: 'Marathon',
        description: [
            'Spectacular image popup',
            'Kanban board',
            'Beautiful image slider',
            'Mini game without rules :D',
            'Mini game <Catch the cat>'
        ],
        icon: marathonmain,
        images: [marathon1, marathon2, marathon3, marathon4, marathon5],
        stack: ['VanillaJS', 'Addaptive'],
        github: [
            'https://github.com/DanyaLiupinin/card-gallery-marathon',
            'https://github.com/DanyaLiupinin/canban-board-marathon',
            'https://github.com/DanyaLiupinin/image-slider-marathon',
            'https://github.com/DanyaLiupinin/mini-game-marathon',
            'https://github.com/DanyaLiupinin/aim-game-marathon'
        ],
        browser: [
            'https://danyaliupinin.github.io/card-gallery-marathon/',
            'https://danyaliupinin.github.io/canban-board-marathon/',
            'https://danyaliupinin.github.io/image-slider-marathon/',
            'https://danyaliupinin.github.io/mini-game-marathon/',
            'https://danyaliupinin.github.io/aim-game-marathon/'
        ],
        id: 8,
        type: 'marathon',
        analiticsName: 'marathon',
        analiticsProjectsName: ['apex', 'canban', 'anderson', 'snake', 'aim']
    },
    {
        title: 'yandex vacancies',
        description: `A desktop version of the landing page to attract reviewers and mentors to Yandex's team. The project was created during hackathon`,
        icon: yandexmain,
        images: [yandex, yandex2, yandex3],
        stack: ['VanillaJS', 'HTML5', 'CSS3', 'Bulma', 'Css animations'],
        github: 'https://github.com/DanyaLiupinin/yandex-hackathon-justdoit',
        browser: 'https://danyaliupinin.github.io/yandex-hackathon-justdoit/',
        id: 9,
        type: 'default',
        analiticsName: 'yandex'
    },
    {
        title: 'russian travel',
        description: `This project introduces people to the most picturesque corners of Russia.`,
        icon: travelmain,
        images: [travelmain, travel2, travel3],
        stack: ['VanillaJS', 'HTML3', 'CSS3', 'Addaptive', 'BEM'],
        github: 'https://github.com/DanyaLiupinin/russian-travel',
        browser: 'https://danyaliupinin.github.io/russian-travel/index.html',
        id: 10,
        type: 'default',
        analiticsName: 'travel'
    },
    {
        title: 'how to learn',
        description: `The project is dedicated to teaching methods and techniques for quickly memorizing new information`,
        icon: learnmain,
        images: [learn, learn2, learn3],
        stack: ['VanillaJS', 'HTML5', 'CSS3', 'Addaptive', 'BEM'],
        github: 'https://github.com/DanyaLiupinin/how-to-learn',
        browser: 'https://danyaliupinin.github.io/how-to-learn/',
        id: 11,
        type: 'default',
        analiticsName: 'learn'
    },

]

export const frontFilters = [
    'React',
    'TypeScript',
    'Redux',
    'VanillaJS',
    'Addaptive',
    'RestAPI',
    'Scss',
    'Tailwind',
    'Radix'
]

export const backFilters = [
    'NodeJS',
    'Express',
    'MongoDB',
]

