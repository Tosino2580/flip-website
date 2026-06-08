import React from 'react';
import Hero from '../component/Hero';
import Footer from '../component/Footer';
import FlipImage from "/src/assets/Flip-165.jpg"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FlipStatSection from '../component/FlipStatSection';
import Testimonial from '../component/Testimonial';
import Blog from '../component/Blog';
import ArrowButton from '../component/arrowButton';
import ExploreSection from '../component/ExploreSection';

function Home() {
  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
        ease: "easeOut",
      },
    },
  };
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-cinema-dark text-gray-100 overflow-hidden font-sans">
      <Hero />
      
      {/* Origin Story Section */}
      <div id="origin-story" className="bg-gradient-to-b from-cinema-dark to-cinema-card py-20 md:py-32 border-b border-white/5">
        <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Animated Text Block */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ amount: 0.3, once: true }} 
            variants={textVariant} 
            className="flex-1 space-y-6"
          >
            <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block">
              Our Origin & Purpose
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-white leading-tight">
              Film in the Park Festival
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
              <strong>Film in the Park (FLIP)</strong> was born out of a need to document and illuminate our lives and times through film.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
              Historically, films have preserved and passed down cultural practices, amplified narratives, and shaped public perception. At FLIP Festival, we aim to continue this tradition and contribute positively by showcasing the works of emerging and talented filmmakers.
            </p>
            <div className="pt-4">
              <Link to="/get involved">
                <ArrowButton />
              </Link>
            </div>
          </motion.div>

          {/* Animated Image Block */}
          <div className="flex-1 w-full flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={imageVariant}
              className="relative group w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-cinema-gold/30 transition-colors duration-500"
            >
              <img 
                src={FlipImage} 
                alt="FLIP Atmosphere" 
                className="w-full h-80 md:h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </motion.div>
          </div>
          
        </div>
      </div>

      <FlipStatSection />
      
      <div className="py-10">
        <ExploreSection />
      </div>
      
      <Blog />
      <Testimonial />
      
      <Footer />
    </div>
  );
}

export default Home;
