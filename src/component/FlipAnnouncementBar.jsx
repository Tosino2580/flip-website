import React from 'react';

const FlipAnnouncementBar = () => {
  return (
    <>
      {/* Inline animation style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      <div className="bg-blue-700 text-white w-full py-2 px-3 md:py-3 md:px-5 flex items-center gap-4 overflow-hidden sticky top-25 z-50 shadow-md font-serif font-bold">
        {/* Static Headline */}
        <span className="text-white md:bg-blue-950 md:py-2 md:px-4 font-bold uppercase whitespace-nowrap text-sm md:text-lg tracking-wider">
          📢 Flip 2.0 Update:
        </span>

        {/* Scrolling Content */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex whitespace-nowrap font-medium text-sm md:text-base animate-marquee"
            style={{
              width: '200%', 
              animation: 'marquee 20s linear infinite',
            }}
          >
            {/* First copy */}
            <span className="mx-4 md:w-full">
              📅 Date & Venue | To be Determined... &nbsp;&nbsp;&nbsp;
              🎬 FLIP 2.0: A bigger, bolder, more immersive celebration of storytelling and creativity.
              🎉 Join filmmakers, artists & dreamers across Africa 🌍 
              🚀 Submit your film now — Don’t miss out!
            </span>

            {/* Second copy (for seamless loop) */}
            <span className="mx-4 md:w-full">
              📅 Date & Venue | To be Determined... &nbsp;&nbsp;&nbsp;
              🎬 FLIP 2.0: A bigger, bolder, more immersive celebration of storytelling and creativity.
              🎉 Join filmmakers, artists & dreamers across Africa 🌍 
              🚀 Submit your film now — Don’t miss out!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipAnnouncementBar;
