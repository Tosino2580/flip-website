
import React, { useEffect, useRef, useState } from 'react';
import Flip from "/src/assets/flip_12-removebg-preview.png"
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
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

  const openRef = useRef(null);

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if(
        openRef.current && !openRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openRef])

  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About us',
      link: 'about us',
    },
    {
      name: 'Gallery',
      link: 'gallery',
    },
    {
      name: 'Get Involved',
      link: 'get involved',
    },
    {
      name: 'Contact us',
      link: 'contact us',
    },
  ]

 
  return (
    <nav className={`fixed top-0 left-0 w-full bg-blue-900 text-white  shadow-md z-50 transition-transform duration-300 font-serif`} >
      <div className='flex justify-between item-center w-4/5 m-auto py-5 max-w-[1450px]'>
        <Link to="/" className="text-4xl font-bold text-black">
          <img src={Flip} alt="" className='w-30 h-15' />
        </Link>
        {/* Desktop menu*/}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
          className="hidden md:flex space-x-10 mt-4 item-center text-lg">
          {links.map((link, index) => (
            <Link key={index} to={link.link} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='cursor-pointer'>

              {link.name}

            </Link>
          ))}

        </motion.ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
        ref={openRef}
          initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={navVariant}
          className=" mt-9 md:hidden flex flex-col bg-blue-400 text-white p-4" >
          {links.map((link, index) => (
            <Link key={index} to={link.link} onClick={() => setIsOpen(false)} className='list-none text-center py-2'>
              <button >
                {link.name}
              </button>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;




