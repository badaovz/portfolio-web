import { FaKeycdn, FaUserFriends, FaFolderOpen } from 'react-icons/fa';
import p1 from './images/po1.png';
import p2 from './images/po2.png';
import p3 from './images/po3.png';
import p4 from './images/po4.png';
import p5 from './images/po5.png';
import p6 from './images/po6.png';

import avatar1 from './images/avatar1.jpg';
import avatar2 from './images/avatar2.jpg';
import avatar3 from './images/avatar3.jpg';
import avatar4 from './images/avatar4.jpg';

import { FaFacebookMessenger, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

import {
    FaHome,
    FaUserAlt,
    FaAddressBook,
    FaHeartbeat,
    FaRegCommentDots,
} from 'react-icons/fa';

export const aboutBox = [
    {
        id: 1,
        icon: <FaKeycdn />,
        title: 'Experience',
        desc: '3+ years working ',
    },
    {
        id: 2,
        icon: <FaUserFriends />,
        title: 'Clients',
        desc: '300+ worldwide',
    },
    {
        id: 3,
        icon: <FaFolderOpen />,
        title: 'Projects',
        desc: '80+ completed ',
    },
];

export const experiences = {
    frontend: [
        {
            id: 1,
            language: 'HTML',
            level: 'Basic',
        },
        {
            id: 2,
            language: 'CSS',
            level: 'Basic',
        },
        {
            id: 3,
            language: 'JavaScript',
            level: 'Basic',
        },
        {
            id: 4,
            language: 'Bootstrap',
            level: 'Basic',
        },
        {
            id: 5,
            language: 'Tailwind',
            level: 'Basic',
        },
        {
            id: 6,
            language: 'React',
            level: 'Basic',
        },
    ],

    backend: [
        {
            id: 1,
            language: 'NodeJS',
            level: 'Basic',
        },
        {
            id: 2,
            language: 'MongoDB',
            level: 'Basic',
        },
        {
            id: 3,
            language: 'PHP',
            level: 'Basic',
        },
        {
            id: 4,
            language: 'MySQL',
            level: 'Basic',
        },
        {
            id: 5,
            language: 'Java',
            level: 'Basic',
        },
    ],
};

export const services = [
    {
        title: 'UI/UX Design',
        content: [
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
        ],
    },

    {
        title: 'Web Development',
        content: [
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
        ],
    },
    {
        title: 'Content Creation',
        content: [
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
            'Lorem ipsum dolor sit amet consectetur',
        ],
    },
];

export const portfolios = [
    {
        id: 1,
        image: p1,
        title: 'Furniture Website',
        linkGit: 'https://github.com/badaovz/Furniture-Shop-Vite',
        liveLink: 'https://furniture-shop-vite.vercel.app/',
    },
    {
        id: 2,
        image: p2,
        title: 'Admin dashboard',
        linkGit: 'https://github.com/badaovz/admin-react-jwt-mongodb',
        liveLink: 'https://github.com/badaovz/admin-react-jwt-mongodb',
    },
    {
        id: 3,
        image: p3,
        title: 'Chat app',
        linkGit: 'https://github.com/badaovz/chat-app',
        liveLink: 'https://github.com/badaovz/chat-app',
    },
    {
        id: 4,
        image: p4,
        title: 'Tiktok UI',
        linkGit: 'https://github.com/badaovz/tiktok-ui',
        liveLink: 'https://github.com/badaovz/tiktok-ui',
    },
    {
        id: 5,
        image: p5,
        title: 'Portfolio website',
        linkGit: 'https://github.com/badaovz/portfolio-web',
        liveLink: 'https://github.com/badaovz/portfolio-web',
    },
    {
        id: 6,
        image: p6,
        title: 'Sport website',
        linkGit: 'https://github.com/badaovz/DnSport',
        liveLink: 'https://github.com/badaovz/DnSport',
    },
];

export const testimonials = [
    {
        id: 1,
        avatar: avatar1,
        name: 'Tina Snow',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eius. Atque minima est ex tempora molestiae, fugiat sunt ratione illum nostrum reiciendis, sapiente repudiandae fugit aspernatur nesciunt dolorem, quidem soluta.',
    },
    {
        id: 2,
        avatar: avatar2,
        name: 'Tina Snow',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eius. Atque minima est ex tempora molestiae, fugiat sunt ratione illum nostrum reiciendis, sapiente repudiandae fugit aspernatur nesciunt dolorem, quidem soluta.',
    },
    {
        id: 3,
        avatar: avatar3,
        name: 'Tina Snow',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eius. Atque minima est ex tempora molestiae, fugiat sunt ratione illum nostrum reiciendis, sapiente repudiandae fugit aspernatur nesciunt dolorem, quidem soluta.',
    },
    {
        id: 4,
        avatar: avatar4,
        name: 'Tina Snow',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eius. Atque minima est ex tempora molestiae, fugiat sunt ratione illum nostrum reiciendis, sapiente repudiandae fugit aspernatur nesciunt dolorem, quidem soluta.',
    },
];

export const socials = [
    {
        id: 1,
        icon: <FaMailBulk />,
        title: 'Email',
        desc: 'badaovai1997@gmail.com',
        link: 'mailto:badaovai1997@gmail.com',
    },
    {
        id: 2,
        icon: <FaFacebookMessenger />,
        title: 'Email',
        desc: 'daonguyen',
        link: 'http://m.me/ernest_achiever',
    },
    {
        id: 3,
        icon: <FaWhatsapp />,
        title: 'Email',
        desc: '0989272807',
        link: 'https://wa.me/0989272807',
    },
];

export const navs = [
    {
        id: 0,
        icon: <FaHome />,
        link: '#home',
    },
    {
        id: 1,
        icon: <FaUserAlt />,
        link: '#about',
    },
    {
        id: 2,
        icon: <FaAddressBook />,
        link: '#experience',
    },
    {
        id: 3,
        icon: <FaHeartbeat />,
        link: '#services',
    },
    {
        id: 4,
        icon: <FaRegCommentDots />,
        link: '#contact',
    },
];
