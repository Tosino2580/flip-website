import React from 'react';
import { Link } from 'react-router-dom';

function Arrow2() {
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
      <Link to={'https://filmfreeway.com/FilmInThePark'}>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-800 transition cursor-pointer">
          <span>Submit Film</span>
          <span className="arrow-dance">→</span>
        </button>
      </Link>
    </>
  );
}

export default Arrow2;
