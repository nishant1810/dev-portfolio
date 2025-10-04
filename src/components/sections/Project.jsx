import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import your images here (adjust paths as needed)
import digitImg from "../../assets/project-digit.png";
import robotImg from "../../assets/robo.jpg";
import AskIQ from "../../assets/AskIQ.png";
import QuickBite from "../../assets/QuickBite.png";
import salonservices from "../../assets/salonservices.png";
import Shrinkyfy from "../../assets/Shrinkyfy.png";
import schemeHub from "../../assets/schemeHub.jpg";
import expenseManagementSystem from "../../assets/expenseManagementSystem.png";
import pasteAppImg from "../../assets/pasteAppImg.png";
import dailyNews from "../../assets/dailyNews.png";
import balloonBurst from "../../assets/balloonBurst.png";
import connect4Img from "../../assets/connect4Img.png";
import cardMatchImg from "../../assets/cardMatchImg.png";
import chessGameImg from "../../assets/chessGameImg.png";
import strengthLabzImg from "../../assets/strengthLabzImg.png";
import RescueMeal from "../../assets/RescueMeal.png"; 

const projects = [
  {
    title: 'StrengthLabz',
    description:
      'A full-stack eCommerce platform built with the MERN stack featuring secure authentication, real-time cart updates with Socket.IO, payment gateway integration via Razorpay, and an admin dashboard for managing products and orders.',
    techStack: ['React.js','Tailwind CSS','Node.js','Express.js','MongoDB','Cloudinary','Razorpay','JWT','Socket.IO'],
    image: strengthLabzImg,
    repo: 'https://github.com/aryankardam/StrengthLabz',
    live: 'https://strength-labz-git-main-aryan-kardams-projects.vercel.app/',
  },
  {
    title: 'RescueMeal',
    description:
      'A full-stack eCommerce platform built with the MERN stack featuring secure authentication, real-time cart updates with Socket.IO, payment gateway integration via Razorpay, and an admin dashboard for managing products and orders.',
    techStack: ['React.js','Tailwind CSS','Node.js','Express.js','MongoDB','Razorpay','JWT','Socket.IO'],
    image: RescueMeal,
    repo: 'https://github.com/nishant1810/RescueMeal.git',
    live: 'https://rescuemeals.onrender.com/',
  },

  {
    title: 'Salon Booking System',
    description:
      'An intuitive salon management system that allows users to book appointments, manage services, track staff schedules, and provide customer feedback.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    image: salonservices,
    repo: 'https://github.com/nishant1810/saloonServices.git',
    live: '',
  },

  {
    title: 'Expense Management System',
    description:
      'A smart personal finance tracker that helps users manage their expenses effectively. Provides real-time spending insights, customizable budgeting tools, and category-based tracking.',
    techStack: ['React.js','Node.js','Express.js','MongoDB','Bootstrap','tsparticles'],
    image: expenseManagementSystem,
    repo: 'https://github.com/nishant1810/Expense-Management-System.git',
    live: 'https://expense-tracker-app-three-beryl.vercel.app/login', 
  },
  {
    title: 'Django Web App',
    description:
      'A web application built with Django that demonstrates full-stack capabilities including user authentication, CRUD operations, and dynamic content management.',
    techStack: ['Django','Python','SQLite','HTML','CSS','Bootstrap'],
    image: salonservices,
    repo: 'https://github.com/nishant1810/Django-Web-App',
    live: '', 
  },
  
  {
    title: 'AskIQ',
    description:
      'AskIQ is a smart AI-powered chat app built with React and Vite, offering fast and responsive user interaction. It features markdown support, chat history, dark/light mode, and a clean, mobile-friendly UI.',
    techStack: ['React.js','Vite','Tailwind CSS','OpenAI API','MongoDB','Express.js','Node.js'],
    image: AskIQ,
    repo: 'https://github.com/nishant1810/AskIQ',
    live: 'https://ask-iq-nishant18s-projects-b9a8ab29.vercel.app/', 
  },
  {
    title: 'Quick Bite',
    description:
      'A web platform designed for seamless food ordering, connecting users with nearby restaurants and delivery services.',
    techStack: ['React.js','Node.js','Express.js','MongoDB','Tailwind CSS'],
    image: QuickBite,
    repo: 'https://github.com/nishant1810/QuickBite',
    live: '', 
  },
  {
    title: 'Shrinkyfy',
    description:
      'A Shrinkyfy web app with user authentication, link analytics, and custom short URLs. Built using React.js with Vite for a fast, responsive UI.',
    techStack: ['React.js','Vite','Node.js','Express.js','MongoDB','JWT','Tailwind CSS'],
    image: Shrinkyfy, 
    repo: 'https://github.com/nishant1810/Shrinkify',
    live: '', 
  },
  {
    title: 'SchemeHub',
    description:
      'A centralized government scheme discovery platform that helps users find and apply for relevant schemes based on their eligibility.',
    techStack: ['React.js','Node.js','Express.js','MongoDB','Tailwind CSS','REST APIs'],
    image: schemeHub,
    repo: 'https://github.com/nishant1810/new-sih',
    live: '', 
  },
  {
    title: 'Chess Game',
    description:
      'A real-time multiplayer chess game built with Socket.IO for seamless game state synchronization.',
    techStack: ['Node.js', 'Socket.IO', 'Express.js', 'Chess.js', 'HTML', 'CSS'],
    image: chessGameImg,  
    repo: 'https://github.com/nishant1810/Chess-Game.git',
    live: '', 
  },
  {
    title: 'Human-Following-Robot',
    description:
      'An Arduino-based robot that uses ultrasonic and IR sensors to track and follow a human intelligently.',
    techStack: ['Arduino Uno', 'Ultrasonic Sensor (HC-SR04)', 'IR Sensors', 'L293D Motor Driver', 'DC Motors', 'Servo Motor', 'Buzzer'],
    image: robotImg,
    repo: 'https://github.com/nishant1810/Human-following-robot.git',
    live: 'https://google.com',
  },
  {
    title: 'DailyNews',
    description:
      'A real-time news aggregator application that fetches and displays the latest headlines from various categories using news APIs.',
    techStack: ['React.js','News API','Tailwind CSS','Axios','React Router'],
    image: dailyNews,
    repo: 'https://github.com/nishant1810/Daily-News',
    live: '', 
  },
  {
    title: 'PasteMaster',
    description:
      'A lightweight web-based application for creating and sharing text snippets.',
    techStack: ['React.js', 'Redux', 'Tailwind CSS', 'React Router'],
    image: pasteAppImg,
    repo: 'https://github.com/nishant1810/PasteMaster.git',
    live: 'https://note-paste-app--one.vercel.app/',
  }, 
  {
    title: 'FourInARow',
    description:
      'A classic two-player Connect 4 game built using vanilla JavaScript, HTML, and CSS.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: connect4Img,
    repo: 'https://github.com/nishant1810/FourInARow.git',
    live: 'https://connect4game.vercel.app',
  },
  {
    title: 'DigitRecognizer',
    description:
      'A neural network model trained using TensorFlow and Keras to recognize digits from the MNIST dataset.',
    techStack: ['Python', 'Keras', 'TensorFlow', 'OpenCV'],
    image: digitImg,
    repo: 'https://github.com/nishant1810/DigitRecognizer.git',
    live: '',
  },
  {
    title: 'FlipPair',
    description:
      'A memory-based card matching game built using vanilla JavaScript. Players flip cards to find matching pairs.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: cardMatchImg,
    repo: 'https://github.com/nishant1810/FlipPair.git',
    live: 'https://card-matching-game.vercel.app',
  },
  {
    title: 'Balloon Burst',
    description:
      'An interactive Phaser.js game where players burst balloons to score points with smooth animations and increasing difficulty levels.',
    techStack: ['Phaser.js','JavaScript','HTML5','CSS3'],
    image: balloonBurst, 
    repo: 'https://github.com/nishant1810/BalloonBurst',
    live: '', 
  },
];

const Projects = () => {
  return (
    <section
      id="home-about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto py-16 px-4 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-500">My</span> Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title || "Project image"}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-4 items-center">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-gray-300 hover:text-white text-lg"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live demo`}
                      className="text-gray-300 hover:text-white text-lg"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
