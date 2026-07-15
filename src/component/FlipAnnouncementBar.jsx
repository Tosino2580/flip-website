import React from "react";

const FlipAnnouncementBar = () => {
  const announcements = [
    { text: "FILM IN THE PARK 3.0: THE KALEIDOSCOPE AFRICAN EXPERIENCE IS ALMOST HERE!", icon: "🌍" },
    { text: "JOIN US ON SEPTEMBER 19TH, 2026 AT FREEDOM PARK, LAGOS ISLAND", icon: "📍" },
    { text: "GET YOUR TICKET IN OUR SOCIAL MEDIA HANDLE OR CLICK ON THE TICKET LINK TO GET YOUR TICKET", icon: "🎟️" },
    { text: "CALL FOR FILMMAKERS: SUBMIT YOUR SHORTS & DOCUMENTARIES NOW", icon: "🎬" },
    { text: "FOLLOW @OFFICIALFILMINTHEPARK_ ON ALL SOCIALS FOR LIVE UPDATES", icon: "🍿" }
  ];

  // Render announcement item with icon and spacing
  const renderItems = () => (
    <div className="flex items-center gap-16 pr-16 select-none">
      {announcements.map((item, index) => (
        <span key={index} className="flex items-center gap-2 font-medium tracking-wide uppercase">
          <span className="text-blue-400 text-base">{item.icon}</span>
          <span className="text-white hover:text-blue-200 transition-colors duration-300">
            {item.text}
          </span>
          <span className="text-blue-500/40 ml-16 font-serif select-none">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative w-full bg-blue-950/90 border-b border-blue-900/30 text-[10px] md:text-sm py-0.5 md:py-1 px-4 flex items-center justify-between overflow-hidden shadow-md font-sans z-[200]">
      
      {/* Left side static tag */}
      <div className="relative z-20 flex items-center bg-blue-800/80 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-widest text-white border border-blue-500/30 shadow-sm whitespace-nowrap">
        <span className="animate-pulse mr-1">●</span> Announcement
      </div>

      {/* Fade out gradients to mask text at the edges */}
      <div className="absolute inset-y-0 left-32 w-12 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent pointer-events-none z-10 hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-blue-950 via-blue-950 to-transparent pointer-events-none z-10" />

      {/* Scrollable container */}
      <div className="flex-grow overflow-hidden relative flex py-0.5 ml-4">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {renderItems()}
          {renderItems()}
        </div>
      </div>
    </div>
  );
};

export default FlipAnnouncementBar;
