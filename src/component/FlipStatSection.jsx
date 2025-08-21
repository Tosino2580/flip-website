import React, { useEffect, useRef, useState } from 'react';
import { FaFilm, FaUsers, FaPalette, FaEye } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

function FlipStatSection() {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const statRefs = useRef([]);

  const stats = [
    { label: 'Films Screened', end: 8, icon: <FaFilm size={20} /> },
    { label: 'Attendees', end: 120, icon: <FaUsers size={20} /> },
    { label: 'Artist', end: 3, icon: <FaPalette size={20} /> },
    { label: 'Live Performances', end: 3, icon: <FaMicrophone size={20} /> },
    { label: 'Impressions', end: 20000, icon: <FaEye size={20} /> },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            // Activate the count up
            setActiveIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            // Remove to reset when out of view
            setActiveIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: 0.5, // 50% in view triggers
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
    <div className="py-20 bg-gray-100">
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">FLIP Stat:</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statRefs.current[index] = el)}
              data-index={index}
              className="flex flex-col items-center justify-center"
              data-aos="zoom-in"
            >
              <div className="flex flex-col items-center">
                {stat.icon}
                <div className="text-4xl font-extrabold mt-6 w-4/5">
                  {activeIndexes.includes(index) ? (
                    <CountUp end={stat.end} duration={2} separator="," />
                  ) : (
                    0
                  )}
                  +
                </div>
                <p className="mt-2 text-base md:text-lg font-bold">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipStatSection;
