import React from 'react';
import { OurTeam } from '../../Teamdata/OurTeam';
import Pic from '/src/assets/Flip01-160.jpg';
import { motion } from 'framer-motion';
import Footer from '../component/Footer';

function AboutUs() {
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };
  
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-36 md:pt-44 bg-cinema-dark text-gray-300 overflow-hidden font-sans">
      <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto space-y-20">
        
        {/* Intro Split Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ amount: 0.3, once: true }} 
            variants={textVariant} 
            className="flex-1 space-y-6"
          >
            <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block">
              The Power of Cinema
            </span>
            <h1 className="text-3xl md:text-5xl font-black font-serif text-white leading-tight">
              Why Films Matter
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Some people have shared their experiences growing up, how they often found themselves mimicking actors from the films they watched, adopting their walks and accents, captivated by their stories. This personal experience underscores the effect films have on our lives, even at a surface level.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              In a world where big budgets and industry connections often decide whose art gets celebrated, FLIP exists to level the playing field. We’re here for the underground filmmakers—the ones with burning ideas and raw talent but no spotlight. The ones who shoot magic on shoestring budgets, whose cameras capture truths that mainstream screens ignore. FLIP is their stage. When their films light up our open-air screens, it’s more than a screening—it’s a declaration that their voices matter.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ amount: 0.3, once: true }} 
            variants={imageVariant} 
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={Pic} 
                alt="Film in the Park Audience" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ amount: 0.3, once: true }} 
            variants={textVariant} 
            className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl hover:border-cinema-gold/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-cinema-gold border-b border-white/5 pb-2 uppercase tracking-wide">
                Mission Statement
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Our mission is to amplify creative voices, highlighting their unique perspectives and artistic contributions. We aim to create a space where stories that need to be told are given a voice, where underrepresented filmmakers find their stage, and where the power of film is harnessed to inspire change and document our times.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ amount: 0.3, once: true }} 
            variants={textVariant} 
            className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl hover:border-cinema-gold/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-cinema-gold border-b border-white/5 pb-2 uppercase tracking-wide">
                Vision Statement
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                At its core, the FLIP Film Festival seeks to provide a global and inclusive platform for exceptionally talented but underrepresented filmmakers to showcase their work, build supportive local communities, and create a lasting cultural legacy through open-air cinema.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Team Section */}
        <div className="pt-12 space-y-12">
          <div className="text-center">
            <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block mb-3">
              The Crew
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-serif text-white tracking-tight">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OurTeam.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl hover:border-cinema-gold/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full rounded-full object-cover border-2 border-cinema-gold shadow-lg" 
                  />
                  <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
                </div>
                
                <h3 className="text-lg font-bold font-serif text-white leading-tight">
                  {item.name}
                </h3>
                <span className="text-[10px] md:text-xs font-black font-sans uppercase tracking-widest text-cinema-gold mt-1">
                  {item.title}
                </span>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-4 font-sans border-t border-white/5 pt-4 w-full">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
