import React, { useEffect, useRef, useState } from 'react';
import { FaFilm, FaUsers, FaPalette, FaEye } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function FlipStatSection() {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const statRefs = useRef([]);

  const stats = [
    { label: 'Films Screened', end: 17, icon: <FaFilm /> },
    { label: 'Attendees', end: 370, icon: <FaUsers /> },
    { label: 'Artists', end: 5, icon: <FaPalette /> },
    { label: 'Live Performances', end: 4, icon: <FaMicrophone /> },
    { label: 'Impressions', end: 73343, icon: <FaEye /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    statRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      statRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="py-24 bg-cinema-dark border-b border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="relative max-w-[1450px] w-11/12 md:w-4/5 mx-auto text-center">
        
        <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block mb-3">
          FLIP by the Numbers
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-serif text-white mb-16 tracking-tight">
          Festival Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              ref={(el) => (statRefs.current[index] = el)}
              data-index={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center shadow-xl hover:border-cinema-gold/30 hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-cinema-gold group-hover:text-white transition-all duration-500 shadow-inner text-cinema-gold text-lg">
                {stat.icon}
              </div>

              <div className="text-3xl md:text-4xl font-black font-serif text-white mt-6">
                {activeIndexes.includes(index) ? (
                  <CountUp end={stat.end} duration={2.5} separator="," />
                ) : (
                  0
                )}
                <span className="text-cinema-gold ml-1 font-sans font-bold text-2xl md:text-3xl">+</span>
              </div>

              <p className="mt-3 text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipStatSection;
