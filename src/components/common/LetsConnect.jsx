import React from 'react';
import ArrowUpIcon from "../../assets/arrow-up.svg";

const LetsConnect = () => {
  const handleClick = () => {
    window.open(
      'https://www.linkedin.com/in/nishant-gaur-555120268/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-[#0a0a0a] p-[2px] cursor-pointer border-2 border-blue-500 hover:scale-105 hover:border-blue-400 transition-all duration-300"
    >
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-white-600 to-white-500 w-full h-full rounded-full hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
        
        {/* Top Row */}
        <div className="flex items-center space-x-2">
          <span className="font-poppins font-medium text-[18px] text-white">
            Let's
          </span>
          <img
            src={ArrowUpIcon}
            alt="arrow up"
            className="w-[23px] h-[23px] animate-bounce"
          />
        </div>

        {/* Bottom Row */}
        <div className="mt-1">
          <span className="font-poppins font-medium text-[18px] text-white">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
