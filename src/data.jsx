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
  FaGolang,
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
    info: 'Solid understanding of Core Python concepts for problem solving (primary language on Leetcode).',
  },

  {
    id: nanoid(),
    icon: <FaGolang className="h-16 w-16 text-emerald-500" />,
    title: 'Go',
    info: 'Core Go programming along with its special features like goroutines and channels. Familiarity with REST API development',
  },
];

export const socials = [
  {
    id: nanoid(),
    icon: <FaLinkedinIn className="font-bold h-6 w-6" />,
    url: 'https://www.linkedin.com/in/mainlycricket',
    text: 'LinkedIn',
  },
  {
    id: nanoid(),
    icon: <FaGithub className="font-bold h-6 w-6" />,
    url: 'https://github.com/mainlycricket',
    text: 'GitHub',
  },
  {
    id: nanoid(),
    icon: <SiLeetcode className="font-bold h-6 w-6" />,
    url: 'https://leetcode.com/mainlycoding',
    text: 'LeetCode',
  },
  {
    id: nanoid(),
    icon: <FaXTwitter className="font-bold h-6 w-6" />,
    url: 'https://twitter.com/mainlycoding',
    text: 'Twitter',
  },
];

export const experiences = [
  {
    id: nanoid(),
    title: 'Fullstack Development Intern',
    company: 'Aantariksh Developers',
    duration: 'June 2024 - July 2024',
    info: [
      'Created a dashboard for managing invoice documents, presenting reports with interactive charts',
      'Developed REST API endpoints using Flask to integrate third-party APIs and MongoDB',
      'Worked on multiple existing Firebase-based projects to fix bugs and add new features',
    ],
    link: 'https://drive.google.com/file/d/1xkAtAWHqOKR8RzC_mUx1HVXOBcOBk_Os/view',
  },
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
    link: 'https://drive.google.com/file/d/1ERS_mIULV3_C-CepGl50e55ZoBujgVvF/view?usp=sharing',
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
    link: 'https://muckrack.com/mainlycricket',
  },
];

export const projects = [
  {
    id: nanoid(),
    title: 'CSV App',
    info: [
      'Generates a single .sql file and a standalone REST API server based on the provided CSV files',
      'Supports various constraints like Primary Key, Foreign Key, Unique, Default, Min, Max, Enums etc',
      'Configurable API: role & organization-based auth, data filtering, pagination, foreign key look-up etc.',
    ],
    techStack: ['Go', 'PostgreSQL'],
    link: 'https://github.com/mainlycricket/CSV_App',
  },
  {
    id: nanoid(),
    title: 'Placement Potral',
    info: [
      'A placement portal for colleges that allows a super admin to manage companies and students.',
      'Company admin can post job openings, view job applications & student profiles and shortlist/hire/select candidates',
      'Students can manage their profiles and apply for available job openings and track application status.',
    ],
    techStack: [
      'JavaScript',
      'NodeJS',
      'ExpressJs',
      'MongoDB',
      'TailwindCSS',
      'ReactJS',
    ],
    link: 'https://github.com/placementportal/placement-portal-react#readme',
  },
  {
    id: nanoid(),
    title: 'Real-Time Chat Application',
    info: [
      "Full-stack web-application that enabled real-time chat between buyer and seller under a super admin's supervision.",
      'Buyers can create new chat rooms to chat with sellers.',
      'Facility to exchange text messages as well images.',
      'Built for a freelance client.',
    ],
    techStack: [
      'JavaScript',
      'NodeJS',
      'ExpressJs',
      'SocketIo',
      'MongoDB',
      'Bootstrap',
    ],
    link: 'https://drive.google.com/file/d/1ukGpwnO1JeRZp3FNvoGsDC6sxOfxq2bU/view?usp=sharing',
  },
  {
    id: nanoid(),
    title: 'Application Approval System',
    info: [
      'REST API that handled the flow of an application from the bottom of the hierarchy to the top for apporval/rejection/forwarding.',
      'Designed for colleges with relevant user roles: admin, principal, HoDs, class mentors and students.',
      'Ensured data confidentiality and privacy between different departments and classes of the same department.',
    ],
    techStack: ['JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB'],
    link: 'https://documenter.getpostman.com/view/20410939/2s8Z6zzXDp',
  },
];
