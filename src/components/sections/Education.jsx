import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

import schoolImg from '../../assets/school.jpg';
import collegeImg from '../../assets/college.jpg';

const educationData = [
  {
    image: schoolImg,
    title: 'Alpine Public School',
    location: 'Bulandshar, Uttar Pradesh',
    type: 'Schooling',
    highlights: [
      'Completed Class 10 (Secondary Examination)',
      'Completed Class 12 (Senior Secondary Examination)',
      'Active participant in Science exhibitions and tech events',
    ],
  },
  {
    image: collegeImg,
    title: 'Indian Institute of Information Technology (IIIT) Kottayam',
    location: 'Kerala, India',
    type: 'B.Tech in Electronics and Communication Engineering',
    year: '2022 - 2026',
    highlights: [
      'Currently pursuing a bachelor’s degree',
      'Core member of Trendles Tech Club',
      'Hands-on projects with IoT, React, and ML',
    ],
  },
];

const Education = () => {
  return (
    <section
      id="home-about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto py-16 px-4 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-500">Education</span>
        </h2>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="border border-white/20 rounded-xl bg-white/5 hover:shadow-lg transition duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full h-48 md:h-auto">
                  <img
                    src={edu.image}
                    alt={edu.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-semibold text-blue-400">{edu.title}</h3>
                  <p className="text-gray-300">{edu.location}</p>
                  {edu.year && (
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                      <FaCalendarAlt /> {edu.year}
                    </div>
                  )}
                  <ul className="list-disc ml-6 mt-3 space-y-1 text-sm text-gray-300">
                    {edu.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
