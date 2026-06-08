import React from "react";

const ArrowButton = () => {
  return (
    <>
      <style>
        {`
          @keyframes dance {
            0%   { transform: rotate(0deg) translateX(0); }
            25%  { transform: rotate(-10deg) translateX(-1px); }
            50%  { transform: rotate(10deg) translateX(1px); }
            75%  { transform: rotate(-10deg) translateX(-1px); }
            100% { transform: rotate(0deg) translateX(0); }
          }

          .arrow-dance {
            display: inline-block;
            animation: dance 0.6s infinite ease-in-out;
          }
        `}
      </style>

      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-extrabold rounded-full hover:from-blue-300 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 uppercase tracking-widest text-xs cursor-pointer">
        <span>Join the Movement</span>
        <span className="arrow-dance text-sm">→</span>
      </button>
    </>
  );
};

export default ArrowButton;
