import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData , setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        e.target, 
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="home-about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-evenly 
                 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-6"
    >
      <motion.div
        className="max-w-4xl w-full py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-500">Contact</span> Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-xl" />
              <span>gaur18nishant@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-400 text-xl" />
              <span>+91 7037193385</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <span>Greater Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-6 bg-white/10 p-6 rounded-xl border border-white/30"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-sm text-gray-200">
                Name
              </label>
              <input
                type="text"
                placeholder="Name..."
                id="name"
                name="name"
                value={formData.name}
                className="w-full px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-gray-200">
                Email
              </label>
              <input
                type="email"
                placeholder="example123@gmail.com"
                id="email"
                name="email"
                value={formData.email}
                className="w-full px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm text-gray-200">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                id="message"
                name="message"
                value={formData.message}
                className="w-full px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                required
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
