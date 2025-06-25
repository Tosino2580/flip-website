import React from "react";

const ExploreFlipCard = ({ title, imageUrl, description, link, buttonText }) => {
  return (
    <>
      <style>
        {`
          .flip-card {
            perspective: 1200px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 320px;
            transition: transform 1s ease-in-out;
            transform-style: preserve-3d;
          }
            

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg) scale(1.02);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 0.75rem;
            transform: translateZ(0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
            .flip-card-front img {
            
        width: 80%;
        height: 70%;
        object-fit: cover;
        border-radius: 0.75rem;
      
      }

          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

      <div className="flip-card w-full max-w-sm md:ml-12">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front bg-blue-800  text-white rounded-xl p-6 flex flex-col items-center justify-center text-xl font-bold shadow-lg text-center">
            <img src={imageUrl} alt={title} />
            {title}
          </div>

          {/* Back */}
          <div className="flip-card-back bg-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
            <div className="text-gray-700 text-md mb-4 space-y-2 overflow-auto">
              {description.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <a
              href={link}
              className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreFlipCard;
