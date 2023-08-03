import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  firebase,
  shareme,
  pos,
  topgun,
  carla,
  java,APIs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "competition",
    title: "Competition",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web/Mobile Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "Csharp",
  //   icon: csharp,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const competitive = [
  {
    name: "TESA Topgun Rallay 16th",
    description:
      "This event, we divide team into 3 parts. There are hardware, server and robot. I got hardware and server. In server I set server for support. In server I set server for support data transmission between hardware and robot. In hardware I coded for get data from sensor and try to send it to robot through server",
    tags: [
      {
        name: "iot",
        color: "blue-text-gradient",
      },
      {
        name: "node-red",
        color: "green-text-gradient",
      },
      {
        name: "Matlab",
        color: "pink-text-gradient",
      },
    ],
    image: topgun,
  },

  {
    name: "Carla Contest | 3rd Prize",
    description:
      "This event we have to figure out a solution how to make a autodriving car. Staff's going to send the code but it's not completely. we must figure out a solution such as value of pid control, when car go straight, left, right or break etc. we run simulate on AWS server that staff give it to us",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      }
    ],
    image: carla,
  },
];

const projects = [
  {
    name: "Social - Shareme",
    description:
      "This project is social media web app.The system is like a pinterest. There are CRD post, comment, save and download imgae that you like. This project using React, tailwind and sanity to got this project! And design of home page is masonry layout. It's new for me!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/tchaokhu/Social_Shareme",
  },
  {
    name: "POS",
    description:
      "This project using by python to use FTP server to send data or get data for calculate parking fee. In main.py is main system to get car in, car out, calculate parking fee and send data to email that you'd like to send. In GuiShop/project_3.py is a restaurant POS system. It's calculate a meal for calcualte parking fee.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "FTP server",
        color: "green-text-gradient",
      },
      {
        name: "SMTP server",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://github.com/tchaokhu/POS-car",
  },
  {
    name: "APIs-Java",
    description:
      "This project uses Java to create APIs for movies. Some things I got from this project are how to create APIs, how to use some new libraries for making this project easier etc.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: APIs,
    source_code_link: "https://github.com/tchaokhu/APIs-movie",
  },
];

export { services, technologies, experiences, testimonials, projects,competitive };
