import { nanoid } from 'nanoid';
import {
  FaJs,
  FaPython,
  FaReact,
  FaNode,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from 'react-icons/fa6';

import { SiLeetcode } from 'react-icons/si';

export const menus = [
  { id: nanoid(), text: 'home', href: '#home' },
  { id: nanoid(), text: 'experience', href: '#experience' },
  { id: nanoid(), text: 'skills', href: '#skills' },
  { id: nanoid(), text: 'projects', href: '#projects' },
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
    icon: <FaLinkedinIn className="font-bold text-xl" />,
    url: 'https://www.linkedin.com/in/mainlycricket',
  },
  {
    id: nanoid(),
    icon: <FaGithub className="font-bold text-xl" />,
    url: 'https://github.com/mainlycricket',
  },
  {
    id: nanoid(),
    icon: <SiLeetcode className="font-bold text-xl" />,
    url: 'https://leetcode.com/mainlycoding',
  },
  {
    id: nanoid(),
    icon: <FaXTwitter className="font-bold text-xl" />,
    url: 'https://twitter.com/mainlycricket',
  },
];

export const projects = [];
