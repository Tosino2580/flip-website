import React, { useEffect, useRef, useState } from "react";
import Flip from "/src/assets/flip_12-removebg-preview.png";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function NavBar() {
  const navVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md z-50 transition-transform duration-300 font-serif">
      <div className="flex justify-between items-center w-4/5 m-auto py-5 max-w-[1450px]">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-black">
          <img src={Flip} alt="FLIP Logo" className="w-30 h-15" />
        </Link>

        {/* {desktop nav-links} */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
          className="hidden md:flex space-x-10 mt-4 items-center text-lg relative z-[200]"
        >
          {links.map((link, index) => (
            <li key={index} className="relative">
              {!link.dropdown ? (
                <Link to={link.link} className="cursor-pointer hover:text-blue-200">
                  {link.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.name ? null : link.name)
                    }
                    className="cursor-pointer hover:text-blue-200 flex items-center gap-1"
                  >
                    {link.name} ▾
                  </button>

                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-blue-900 rounded-md shadow-lg w-40">
                      {link.dropdown.map((drop, i) => (
                        <Link
                          key={i}
                          to={drop.link}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 hover:bg-blue-100"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </motion.ul>

        {/* {mobile hamburger} */}
        <button
          className="md:hidden focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* {mobile nav-link} */}
      {isOpen && (
        <div ref={menuRef}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navVariant}
            className="mt-3 md:hidden flex flex-col bg-blue-400 text-white p-4 space-y-2 z-[500]"
          >
            {links.map((link, index) => (
              <div key={index} className="text-center">
                {!link.dropdown ? (
                  <Link
                    to={link.link}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:bg-blue-500 rounded"
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
                      className="w-full py-2 hover:bg-blue-500 rounded"
                    >
                      {link.name} ▾
                    </button>
                    {openDropdown === link.name && (
                      <div className="flex flex-col mt-1 bg-blue-300 rounded">
                        {link.dropdown.map((drop, i) => (
                          <Link
                            key={i}
                            to={drop.link}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="py-2 hover:bg-blue-500 rounded"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
