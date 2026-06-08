import React, { useEffect, useRef, useState } from "react";
import Flip from "/src/assets/flip_12-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FlipAnnouncementBar from "./FlipAnnouncementBar";

function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about us" },
    {
      name: "Gallery",
      dropdown: [
        { name: "FLIP 1.0", link: "/gallery/flip1" },
        { name: "FLIP 2.0", link: "/gallery/flip2" },
      ],
    },
    { name: "Get Involved", link: "/get involved" },
    { name: "Contact us", link: "/contact us" },
  ];

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (dropdownItems) => {
    return dropdownItems.some((item) => location.pathname === item.link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#020919]/80 backdrop-blur-md border-b border-blue-900/30 text-white shadow-2xl shadow-blue-950/50 z-50 transition-all duration-300 font-sans">
      <FlipAnnouncementBar />
      <div className="flex justify-between items-center w-11/12 md:w-4/5 m-auto py-2.5 max-w-[1450px]">
        {/* Logo */}
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img src={Flip} alt="FLIP Logo" className="w-24 md:w-28 h-auto object-contain" />
        </Link>

        {/* Desktop nav-links */}
        <ul className="hidden md:flex space-x-8 items-center text-sm uppercase tracking-widest font-semibold relative z-[200]">
          {links.map((link, index) => (
            <li key={index} className="relative group">
              {!link.dropdown ? (
                <Link
                  to={link.link}
                  className={`cursor-pointer transition-colors duration-300 flex flex-col items-center pb-1 ${
                    isActive(link.link) ? "text-cinema-gold font-bold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive(link.link) && (
                    <motion.div
                      layoutId="activeDot"
                      className="w-1.5 h-1.5 bg-cinema-gold rounded-full mt-1"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.name ? null : link.name)
                    }
                    className={`cursor-pointer transition-colors duration-300 flex items-center gap-1 uppercase tracking-widest ${
                      isDropdownActive(link.dropdown) ? "text-cinema-gold font-bold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name} <span className="text-[10px]">▼</span>
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-3 bg-cinema-card border border-white/10 rounded-md shadow-2xl w-44 overflow-hidden"
                      >
                        {link.dropdown.map((drop, i) => (
                          <Link
                            key={i}
                            to={drop.link}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-3 text-xs tracking-wider transition-colors duration-300 border-b border-white/5 last:border-0 ${
                              isActive(drop.link)
                                ? "bg-white/10 text-cinema-gold font-bold"
                                : "text-gray-300 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none text-2xl text-gray-300 hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay overlaying page content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[490] md:hidden"
            />
            
            {/* Sidebar drawer panel */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-screen w-72 bg-[#020919] border-l border-blue-900/30 flex flex-col p-6 space-y-6 z-[500] md:hidden shadow-2xl overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mt-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer p-1"
                >
                  ✕
                </button>
              </div>

              {/* Links list inside drawer */}
              <div className="flex flex-col space-y-4 uppercase tracking-wider text-sm font-semibold">
                {links.map((link, index) => (
                  <div key={index} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    {!link.dropdown ? (
                      <Link
                        to={link.link}
                        onClick={() => setIsOpen(false)}
                        className={`block py-1 transition-colors duration-300 ${
                          isActive(link.link) ? "text-cinema-gold font-bold" : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.name ? null : link.name
                            )
                          }
                          className={`w-full py-1 transition-colors duration-300 flex items-center justify-between uppercase tracking-widest ${
                            isDropdownActive(link.dropdown) ? "text-cinema-gold font-bold" : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {link.name} <span className="text-[10px]">▼</span>
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex flex-col bg-white/5 rounded-md mt-2 overflow-hidden pl-4 border-l border-blue-500/20"
                            >
                              {link.dropdown.map((drop, i) => (
                                <Link
                                  key={i}
                                  to={drop.link}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className={`py-3 text-left text-xs tracking-widest border-b border-white/5 last:border-0 transition-colors duration-300 ${
                                    isActive(drop.link) ? "text-cinema-gold font-bold" : "text-gray-400 hover:text-white"
                                  }`}
                                >
                                  {drop.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;

