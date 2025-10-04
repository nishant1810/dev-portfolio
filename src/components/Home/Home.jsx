import React from 'react';
import { motion } from 'framer-motion';
import animationData from "../../lotties/person-coding.json";
import Lottie from 'react-lottie-player';
import LetsConnect from '../common/LetsConnect';

const Home = () => {
  const name = 'Nishant Gaur'.split('');

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between relative bg-black text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left: Text & Button */}
      <motion.div
        className="z-10 px-4 md:w-1/2 flex flex-col justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent leading-tight">
          Hi there!
          <br />
          I'm
          <br />
          <span className="inline-block mt-2">
            {name.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: i * 0.1 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
            </motion.span>
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg">
          <b>Full Stack Developer</b>
          <br />
          Final-Year ECE Undergraduate at{' '}
          <b>Indian Institute of Information Technology Kottayam.</b>
        </p>
      </motion.div>

       {/* LetsConnect button aligned left */}
       <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex "
        >
          <LetsConnect />
        </motion.div>

      {/* Right: Lottie Animation */}
      <motion.div
        className="md:w-1/2 w-full flex items-center justify-center relative my-10 md:my-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 w-4/5 h-4/5">
          <Lottie
            loop
            play
            animationData={animationData}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute bottom-10 right-10 w-1/2 h-1/2 rounded-full bg-white/10" />
      </motion.div>
    </motion.section>
  );
};

export default Home;
