import { nanoid } from 'nanoid';
import {
  FaJs,
  FaPython,
  FaReact,
  FaNode,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaLaptopCode,
} from 'react-icons/fa6';

import { SiLeetcode } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';

export const menus = [
  { id: nanoid(), text: 'Home', icon: <AiFillHome />, href: '#home' },
  {
    id: nanoid(),
    text: 'experience',
    icon: <MdWork />,
    href: '#experience',
  },
  {
    id: nanoid(),
    text: 'skills',
    icon: <BsPersonWorkspace />,
    href: '#skills',
  },
  { id: nanoid(), text: 'projects', icon: <FaLaptopCode />, href: '#projects' },
];

export const skills = [
  {
    id: nanoid(),
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    title: 'JavaScript',
    info: 'Strong proficiency in JavaScript, along with its asynchronous quirks to consume APIs, and develop dynamic web pages.',
  },

  {
    id: nanoid(),
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
    title: 'NodeJs',
    info: 'Ability to utilize the NodeJS environment to develop REST APIs, using ExpressJS & MongooseJs.',
  },

  {
    id: nanoid(),
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    title: 'ReactJS',
    info: 'Skilled in ReactJS to create Single Page Applications that provide seamless User Experience.',
  },

  {
    id: nanoid(),
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    title: 'Python',
    info: 'Solid understanding of Core Python concepts for problem solving.',
  },
];

export const socials = [
  {
    id: nanoid(),
    icon: <FaLinkedinIn className="font-bold h-6 w-6" />,
    url: 'https://www.linkedin.com/in/mainlycricket',
  },
  {
    id: nanoid(),
    icon: <FaGithub className="font-bold h-6 w-6" />,
    url: 'https://github.com/mainlycricket',
  },
  {
    id: nanoid(),
    icon: <SiLeetcode className="font-bold h-6 w-6" />,
    url: 'https://leetcode.com/mainlycoding',
  },
  {
    id: nanoid(),
    icon: <FaXTwitter className="font-bold h-6 w-6" />,
    url: 'https://twitter.com/mainlycricket',
  },
];

export const experiences = [
  {
    id: nanoid(),
    title: 'NodeJS Backend Intern',
    company: 'Aantariksh Developers',
    duration: 'Oct 2022 - Dec 2022',
    info: [
      'Developed REST APIs using ExpressJS & MongoDB.',
      'Consumed third-party APIs for OAuth and to fetch user data.',
      'Worked with Firebase Web Client (JavaScript): RealTime Database & Authentication.',
    ],
  },
  {
    id: nanoid(),
    title: 'Cricket Writer & Analyst',
    company: 'The Quint, Cricket.com, CricXtasy',
    duration: 'Mar 2019 - Sep 2022',
    info: [
      'Verified Journalist on MuckRack.',
      'Stats-based articles conveying analysis: previews, game-plans, post-match analysis, opinions & features.',
      'Contributed to the social media presence of CricXtasy & Stat Doctor, particularly during the IPL & CPL.',
    ],
  },
];

export const projects = [];
