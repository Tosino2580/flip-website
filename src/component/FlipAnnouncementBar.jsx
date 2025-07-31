import React from "react";

const FlipAnnouncementBar = () => {
  return (
    <>
      {/* Inline animation keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      <div className="bg-blue-700 text-white w-full py-2 md:py-3 px-3 md:px-5 flex items-center gap-4 overflow-hidden sticky top-25 z-50 shadow-md font-serif font-bold">
        {/* Static Headline */}
        <span className="text-white md:bg-blue-950 md:py-2 md:px-4 font-bold uppercase whitespace-nowrap text-sm md:text-lg tracking-wider">
          📢 Flip 2.0 :
        </span>

        {/* Scrolling Content */}
        <div className="relative overflow-hidden w-full">
          <div
            className="whitespace-nowrap uppercase font-bold text-sm md:text-base"
            style={{
              display: "inline-block",
              paddingLeft: "100%",
              animation: "marquee 20s linear infinite",
            }}
          >
            🎉 It’s Official – FLIP 2.0 is Here! Join us on 21st Sept at Freedom Park, Lagos. Get
            your Ticket Now !!! 🎉 It’s Official – FLIP 2.0 is Here! Join us on 21st Sept at Freedom
            Park, Lagos. Get your Ticket Now !!!
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipAnnouncementBar;
