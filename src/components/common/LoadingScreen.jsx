import React, { useEffect, useState } from 'react';
import profileImg from '../../assets/profile.jpg'; // Make sure this path is correct

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = '< Nishant Gaur />';

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1200); // small delay before exit
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        @keyframes loading-bar {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 3s linear forwards;
        }
      `}</style>

      <section
        id="home-about"
        className="min-h-screen flex flex-col items-center justify-center
        bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-6"
      >
        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-8 object-cover border-4 border-blue-500 shadow-lg"
        />

        {/* Typing Text */}
        <div className="mb-6 text-4xl md:text-5xl font-mono font-bold text-center">
          {text}
          <span className="ml-1 animate-blink">|</span>
        </div>

        {/* Loading Bar */}
        <div className="w-56 h-1.5 bg-gray-800 rounded overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-blue-500 animate-loading-bar" />
        </div>
      </section>
    </>
  );
};

export default LoadingScreen;
