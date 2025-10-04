import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaGithub, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import myImg from "../../assets/about.png";

const Home2 = () => {
  return (
    <section
      id="home-about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-evenly 
      bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-6"
    >
      {/* Text Section */}
      <motion.div
        className="pt-24 pb-5 text-center md:text-left w-full md:w-8/12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-center font-bold"
        >
          🚀 ABOUT <span className="text-blue-500">ME</span>
        </motion.h1>

        <p className="mt-8 text-[1.1em] leading-relaxed text-gray-300">
          I’m a final-year B.Tech student majoring in Electronics and Communication Engineering at IIIT Kottayam, 
          with a strong passion for developing end-to-end web solutions and intelligent IoT systems.
        </p>

        {/* Skills / Highlights */}
        <ul className="flex flex-col gap-4 mt-6 text-left">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <span>
              💻 I build full-stack web apps using the{" "}
              <strong className="text-blue-500 italic">MERN Stack</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <span>
              🎯 I integrate real-time systems with{" "}
              <strong className="text-blue-500 italic">Socket.IO</strong>, secure APIs with{" "}
              <strong className="text-blue-500 italic">JWT</strong>, and manage cloud storage via{" "}
              <strong className="text-blue-500 italic">Cloudinary</strong>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <span>
              ⚡ I develop modern UIs using{" "}
              <strong className="text-blue-500 italic">React.js, Tailwind CSS, Redux, and Framer Motion</strong>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <span>
              🤖 I create IoT devices with{" "}
              <strong className="text-blue-500 italic">Arduino, ESP8266, RFID, and automation logic</strong>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" />
            <span>
              🧠 I explore <strong className="text-blue-500 italic">Machine Learning</strong> and apply it in real-world projects.
            </span>
          </li>
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center md:justify-start">
          <NavLink
            to="/project"
            className="mb-4 sm:mb-0 bg-blue-500 text-white py-3 px-6 rounded font-medium 
            transition transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Projects
          </NavLink>

          <NavLink
            to="/contactMe"
            className="bg-transparent border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium 
            transition transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-500/10"
          >
            Contact Me
          </NavLink>

          <a
            href="/Nishant_Gaur.pdf"
            download
            className="mt-4 sm:mt-0 bg-green-500 text-white py-3 px-6 rounded font-medium 
            transition transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-green-600"
          >
            View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center md:text-left">
          <h2 className="text-2xl">FIND ME ON</h2>
          <p className="mt-2">
            Feel free to <span className="text-blue-500">connect</span> with me
          </p>
          <ul className="mt-4 flex justify-center md:justify-start space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/nishant-gaur-555120268/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full 
                bg-white text-black transition-transform hover:scale-110 hover:shadow-lg"
              >
                <FaLinkedinIn className="z-10 text-xl group-hover:text-white" />
                <span className="absolute inset-0 rounded-full bg-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gaur_nishant_oozo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full 
                bg-white text-black transition-transform hover:scale-110 hover:shadow-lg"
              >
                <FaInstagram className="z-10 text-xl group-hover:text-white" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nishant1810"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full 
                bg-white text-purple-500 transition-transform hover:scale-110 hover:shadow-lg"
              >
                <FaGithub className="z-10 text-xl group-hover:text-white" />
                <span className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Avatar Section */}
      <motion.div
        className="w-full md:w-6/12 flex justify-center items-center mx-auto mt-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={myImg}
          alt="My Avatar"
          className="max-w-[200px] md:max-w-xs w-full h-auto rounded-full shadow-lg shadow-blue-500/40 
          hover:scale-105 transition"
        />
      </motion.div>
    </section>
  );
};

export default Home2;
