import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLaptopCode,
  FaBootstrap,
  FaLock,
  FaCode,
  FaJava,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiArduino,
  SiPython,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiFramer,
  SiExpress,
  SiPostman,
  SiRailway,
  SiRender,
  SiRazorpay,
  SiCloudinary,
  SiSocketdotio,
  SiJsonwebtokens,
} from 'react-icons/si';

const languages = [
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <FaLaptopCode />, name: 'MATLAB' },
];

const frameworks = [
  { icon: <FaReact />, name: 'React.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <SiReactrouter />, name: 'React Router' },
  { icon: <SiFramer />, name: 'Framer Motion' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaLock />, name: 'Bcrypt.js' },
  { icon: <SiSocketdotio />, name: 'Socket.IO' },
  { icon: <SiJsonwebtokens />, name: 'JWT' },
  { icon: <FaCode />, name: 'REST APIs' },
  { icon: <SiMongodb />, name: 'Mongoose' },
];

const tools = [
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <SiPostman />, name: 'Postman' },
  { icon: <SiRender />, name: 'Render' },
  { icon: <SiRazorpay />, name: 'Razorpay' },
  { icon: <SiArduino />, name: 'Arduino' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 flex items-center px-6 py-16"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full space-y-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Programming Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 inline-flex items-center justify-center gap-3">
            Programming <span className="text-blue-500">Languages</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-white rounded-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-blue-400 mb-2">{lang.icon}</div>
                <span className="text-sm text-gray-200">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks and Libraries */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 inline-flex items-center justify-center gap-3">
            Frameworks / <span className="text-blue-500">Libraries</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {frameworks.map((fw, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-white rounded-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-blue-400 mb-2">{fw.icon}</div>
                <span className="text-sm text-gray-200">{fw.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 inline-flex items-center justify-center gap-3">
            <span className="text-blue-500">Tools</span> I Use
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-white rounded-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl text-blue-400 mb-2">{tool.icon}</div>
                <span className="text-sm text-gray-200">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
