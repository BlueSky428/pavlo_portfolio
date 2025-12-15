import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  Arthur,
  McKenzie,
  Raza,
  David,
  Appala,
  Mallie,
  Jed
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'skill',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experiences',
  },
  {
    id: 'reviews',
    title: 'Review',
  },
  {
    id: 'contact',
    title: 'Contact',
  }
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Blockchain Developer',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Upwork · Freelance',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2022 - Present',
  },
  {
    title: 'Project Manager',
    company_name: 'Sonex Digital · Part-time',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - Present',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Forward Protocol · Part-time',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2023 - Mar 2025',
  },
  {
    title: 'Full-stack Developer',
    company_name: 'Mavi · Full-time',
    icon: dcc,
    iconBg: '#333333',
    date: 'Mar 2020 - Feb 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Cargill · Contract',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2019 - Feb 2020',
  },
  {
    title: 'Frontend Developer',
    company_name: 'The House of Yaya · Internship',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2018 - Feb 2019',
  }
];

const educations = [
  {
    title: "Bachelor's degree, Computer Science",
    company_name: 'Taras Shevchenko National University of Kyiv',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2015 - Sep 2019',
  }
]

const projects = [
  {
    id: 'project-1',
    name: 'AppStudio',
    description: 'Canada’s best minds under one roof. The architects of a digital tomorrow, united under the banner of AppStudio.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    demo: 'https://www.appstudio.ca/',
  },
  {
    id: 'project-2',
    name: 'Sports Betting',
    description:
      'It is a sports betting site where various players can compete against each other.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    demo: 'https://sportsbet.io',
  },
  {
    id: 'project-3',
    name: 'Live Betting',
    description: 'It is a live sports betting site where various players can compete against each other.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    demo: 'https://www.livebet.com/',
  },
  {
    id: 'project-4',
    name: 'Toyota',
    description: `Call Booking Website`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    demo: 'https://www.toyota.com',
  },
  {
    id: 'project-5',
    name: 'venice ai',
    description:
      'This is a AI Chat Platform.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    demo: 'https://venice.ai/',
  },
];

const review = [
  {
    username: "Arthur J",
    role: "CEO Co-Founder",
    img: Arthur,
    content: "Pavlo has proven to be a great full-stack developer. Thanks to his excellent communication, we were able to quickly and efficiently get him involved in the project and move forward with great speed and productivity. During this short period of cooperation, he was able to solve all the tasks that we had problems with. He is good at both front-end and back-end. I have only positive impressions about this developer. I can definitely recommend working with Pavlo. I will gladly work with him in the future if I have the opportunity!"
  },
  {
    username: "David",
    role: "Project Manager",
    img: David,
    content: "Pavlo really deserves to be highly praised as a full-stack developer. His professionalism and in-depth knowledge of web development were key in solving numerous technical challenges we faced. Thanks to his analytical skills and ability to quickly find solutions, he was able to effectively resolve complex bugs and refactor our code, significantly improving its readability and efficiency. His contribution to our project cannot be overestimated. I recommend Pavlo as a highly skilled professional who can make a significant contribution to any software development project."
  },
  {
    username: "McKenzie",
    role: "CEO Co-Founder",
    img: McKenzie,
    content: "Pavlo is an exceptional backend developer who demonstrates a deep understanding of system architecture and database management. He consistently delivers robust, efficient, and scalable solutions that exceed expectations. His ability to tackle complex problems with innovative approaches is truly commendable. I highly recommend Pavlo for any backend development needs."
  },
  {
    username: "Raza K",
    role: "CTO Co-Founter Team",
    img: Raza,
    content: "Pavlo is a true master of his craft as a Full Stack Mobile Developer with a focus on React Native. He demonstrates not only a high level of technical knowledge, but also the ability to adapt to different tasks, working effectively with both front-end and back-end. Many thanks to him for his great work!"
  },
  {
    username: "Appala M",
    role: "Blockchain Development Team CTO",
    img: Appala,
    content: "Good Work!!! Pavlo is an exceptional blockchain developer with a deep understanding of decentralized technologies and smart contract development. His expertise in building secure, efficient, and scalable blockchain solutions has been instrumental in the success of our project. He consistently deliver high-quality work on time, demonstrate excellent problem-solving skills, and communicate effectively. I highly recommend him for any blockchain-related projects!"
  },
  {
    username: "Jed B",
    role: "Backend Developer",
    img: Jed,
    content: "Pavlo is a great front-end developer with a keen eye for design and user experience. His ability to transform complex requirements into visually stunning and responsive interfaces is truly impressive. He is detail-oriented, proactive, and consistently delivers high-quality work on deadline. I have been very impressed with him for a long time. I highly recommend him for any front-end development project!"
  },
  {
    username: "McKenzie",
    role: "CEO Co-Founder",
    img: McKenzie,
    content: "Great Job! Pavlo is an exceptional backend developer who demonstrates a deep understanding of system architecture and database management. He consistently delivers robust, efficient, and scalable solutions that exceed expectations. His ability to tackle complex problems with innovative approaches is truly commendable. I highly recommend Pavlo for any backend development needs."
  },
  {
    username: "Mallie",
    role: "Co-Founder",
    img: Mallie,
    content: "I wanted to express my appreciation for the excellent work you did on the Full Stack project. Your attention to detail and willingness to accommodate multiple revisions made a huge difference in the final outcome. You handled every request with professionalism and delivered a high-quality project that exceeded expectations. Your commitment to improving the work at every step really stood out, and I'm very impressed with both your skill and your collaborative approach. Thank you for your dedication and hard work!"
  }
]

export { services, technologies, experiences, projects, educations, review };
