import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Embedded Systems Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning & AI Developer",
    company_name: "Self-Driven Projects",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Developed AI models using TensorFlow and PyTorch for image classification and object detection.",
      "Created SignSense, an AI-powered sketch recognition tool using CNNs.",
      "Optimized ML models for real-time processing on embedded devices.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tech Startup",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - Dec 2023",
    points: [
      "Worked on full-stack development using the MERN stack to build scalable applications.",
      "Developed APIs for data processing and real-time analytics.",
      "Implemented CI/CD pipelines to streamline the deployment process.",
      "Collaborated with the team to enhance product features and optimize performance.",
    ],
  },
  {
    title: "React Native Developer",
  company_name: "Freelance",
  icon: reactjs,
  iconBg: "#383E56",
  date: "March 2023 - Present",
  points: [
    "Developing and maintaining web applications using React.js, Firebase, and MERN stack.",
    "Building responsive and scalable UI components with Tailwind CSS and Material UI.",
    "Implementing authentication systems using JWT and Firebase Auth.",
    "Optimizing performance and ensuring seamless user experiences across different devices.",
  ],
  },
  {
    title: "Embedded Systems Developer",
    company_name: "IoT & Real-time Applications",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed a real-time gunshot detection system using ESP32 and machine learning.",
      "Worked with IoT devices to process real-time data streams.",
      "Built efficient embedded solutions for edge AI applications.",
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
    name: "SignSense",
    description:
      "An AI-powered sketch recognition system that classifies hand-drawn doodles in real-time using deep learning, built with a Vision Transformer model.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gunshot Detection System",
    description:
      "An IoT-based real-time sound detection system that uses AI to identify and classify gunshots, enhancing public safety with immediate alert notifications.",
    tags: [
      {
        name: "esp32",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "iot",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Chatbot",
    description:
      "A conversational AI chatbot built using NLP that provides intelligent responses, making it a useful tool for customer support and virtual assistants.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };
