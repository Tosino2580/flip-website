import React from "react";
import { Link } from "react-router-dom";

const ExploreFlipCard = ({ title, imageUrl, description, link, buttonText }) => {
  const isExternal = link.startsWith("http");

  return (
    <>
      <style>
        {`
          .flip-card {
            perspective: 1200px;
            width: 100%;
            min-width: 280px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 310px;
            transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            transform-style: preserve-3d;
          }

          @media (min-width: 640px) {
            .flip-card-inner {
              height: 340px;
            }
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg) scale(1.03);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 1rem;
            transform: translateZ(0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .flip-card-front img {
            width: 75px;
            height: 75px;
            object-fit: contain;
            margin-bottom: 1.5rem;
            filter: drop-shadow(0 2px 8px rgba(96,165,250,0.3));
            transition: transform 0.5s ease;
          }

          .flip-card:hover .flip-card-front img {
            transform: scale(1.1);
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

      <div className="flip-card w-full max-w-[290px] sm:max-w-sm mx-auto">
        <div className="flip-card-inner">
          {/* Front part - Cinematic dark glass style */}
          <div className="flip-card-front bg-cinema-card border border-white/10 text-white p-4 sm:p-8 flex flex-col items-center justify-center shadow-2xl text-center rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-cinema-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img src={imageUrl} alt={title} />
            <h3 className="text-lg sm:text-xl font-bold font-serif uppercase tracking-widest text-white group-hover:text-cinema-gold transition-colors duration-300">
              {title}
            </h3>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-4 border-t border-white/5 pt-3 w-1/2 block">
              Hover to Flip
            </span>
          </div>

          {/* Back part - Styled elegant dark panel with gold button */}
          <div className="flip-card-back bg-cinema-card border border-cinema-gold/30 text-gray-300 p-4 sm:p-8 flex flex-col justify-between shadow-2xl rounded-2xl">
            <div className="space-y-3 overflow-auto flex-grow mb-6">
              <h4 className="text-xs sm:text-sm font-black font-serif uppercase tracking-wider text-cinema-gold border-b border-white/10 pb-2">
                {title} Details
              </h4>
              {description.split("\n").map((line, idx) => (
                <p key={idx} className="text-[11px] sm:text-xs md:text-sm text-gray-400 leading-relaxed font-sans">
                  {line}
                </p>
              ))}
            </div>

            {isExternal ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:from-blue-300 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-blue-500/20 cursor-pointer"
              >
                {buttonText}
              </a>
            ) : (
              <Link
                to={link}
                className="w-full text-center py-2.5 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:from-blue-300 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-blue-500/20 cursor-pointer"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreFlipCard;
