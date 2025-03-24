import {
  backend,
  carrent,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";
import kotlin from "../assets/tech/kotlin.svg";
import postman from "../assets/tech/postman.png";
import sorting from "../assets/sorting.png";
import social from "../assets/social.png";
import resume from "../assets/resume.png";
import parcare from "../assets/parcare.png";
import education from "../assets/education.png";
import work from "../assets/work.png";
import mysql from "../assets/tech/mysql.png";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },

  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Bachelor of Engineering",
    company_name: "University College of Engineering, Anna University, Chennai",
    icon: education,
    iconBg: "#E6DEDD",
    date: "August 2016 - May 2020",
    points: ["Computer Science and Engineering"],
  },
  {
    title: "Software Engineering Trainee",
    company_name: "Ameex Technologies",
    icon: work,
    iconBg: "#E6DEDD",
    date: "October 2020 - August 2021",
    points: [
      "Completed intensive training in UI/UX Design, Android development, and software quality assurance, acquiring skills crucial for modern software development",
      "Developed a strong foundation in UI/UX design principles, applying them effectively in creating designs for native mobile and web applications",
      "Conducted user interviews and usability tests to gather user feedback, which improved the UX design and led to valuable enhancements",
      "Created low and high-fidelity wireframes and prototypes, collaborating closely with product managers and a team of designers to refine product features",
      "Actively contributed to Agile sprints, ensuring timely feature delivery and continuous integration",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Ameex Technologies",
    icon: work,
    iconBg: "#E6DEDD",
    date: "September 2021 - March 2022",
    points: [
      "Engineered scalable, efficient solutions that enhanced user experience and performance",
      "Developed and maintained complex web applications using HTML,CSS,JavaScript,PHP, MySQL,AJAX",
      "Enhanced and streamlined the database architecture to improve data retrieval speed, achieving a 30% reduction in query response time while ensuring seamless user experience during peak traffic periods",
      "Implemented rigorous performance assessments across all web applications, utilizing automated testing tools that increased testing efficiency by 60%, enabling faster deployment cycles and improved software reliability",
      "Conducted in-depth performance analysis, optimizing system efficiency through detailed reports",
      "Completed relevant online courses, leading to the successful implementation of features that resolved four critical bugs in existing applications, improving overall user experience",
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

const projects = [
  {
    name: "Task Manager",
    description:
      "Web application which helps users to create and manage daily tasks, add calendar events, store and view  users PDF file",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/IndiraPriyadharshini-63/REACT-CRUD",
  },
  {
    name: "Sorting Visualizer",
    description:
      "Web application using React JS to visualize how various sorting algorithms work",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sorting,
    source_code_link:
      "https://github.com/IndiraPriyadharshini-63/SortingVisualizer",
  },
  {
    name: "ResumeCrafter",
    description:
      "A comprehensive web application that allows users to create resume.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link:
      "https://github.com/IndiraPriyadharshini-63/Resume-Builder",
  },
  {
    name: "PARCARE",
    description:
      "Positive and engaging user experience design. The main goal of app is ease parking and save user's time by collaborating with private parking areas.",
    tags: [
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "inkscape",
        color: "green-text-gradient",
      },
      {
        name: "coolers",
        color: "pink-text-gradient",
      },
    ],
    image: parcare,
    source_code_link: "https://www.behance.net/gallery/207227903/PARCARE",
  },
];

export { experiences, projects, services, technologies, testimonials };
