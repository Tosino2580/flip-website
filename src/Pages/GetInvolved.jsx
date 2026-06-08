import React from 'react';
import Footer from '../component/Footer';
import Arrow2 from '../component/Arrow2';
import { FaEnvelope } from 'react-icons/fa';

function GetInvolved() {
  const roles = [
    "Graphic Designer",
    "Partnerships & Sponsorships Facilitator Manager",
    "Social Media Manager",
    "Video Editor"
  ];

  return (
    <div className="pt-36 md:pt-44 bg-cinema-dark text-gray-300 overflow-hidden font-sans">
      <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto pb-20 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block">
            Be Part of FLIP
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-serif text-white tracking-tight uppercase">
            Get Involved
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Lights, camera, community! Film in the Park isn’t just a movie night—it’s a shared experience under the stars, powered by people like you. Whether you’re a filmmaker, a local business, or a cinema enthusiast, there’s a place for you to help keep the reels rolling.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Submit a Film */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col justify-between hover:border-cinema-gold/30 hover:bg-white/10 transition-all duration-300">
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-cinema-gold uppercase tracking-wider border-b border-white/5 pb-2">
                Submit a Film
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                Your story deserves to be seen and your perspective celebrated. Are you an emerging filmmaker looking to showcase life through your eyes? Submit your masterpiece to the FLIP Festival.
              </p>
            </div>
            <div className="pt-8">
              <Arrow2 />
            </div>
          </div>

          {/* Card 2: Partner with Us */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col justify-between hover:border-cinema-gold/30 hover:bg-white/10 transition-all duration-300">
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-cinema-gold uppercase tracking-wider border-b border-white/5 pb-2">
                Partner with Us
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                Help shape the future of independent filmmaking in Nigeria. We are always looking for sponsors and partners who believe in creative storytelling and community engagement.
              </p>
            </div>
            <div className="pt-8">
              <a 
                href="mailto:thisisfilminthepark@gmail.com"
                className="inline-flex items-center gap-2 text-cinema-blue hover:text-white transition-colors duration-300 text-sm font-bold"
              >
                <FaEnvelope className="text-sm" />
                <span>thisisfilminthepark@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Card 3: Join the Crew */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col justify-between hover:border-cinema-gold/30 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-cinema-gold uppercase tracking-wider border-b border-white/5 pb-2">
                Join the Team
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                FLIP needs your unique skills to make the dream come alive. We are currently recruiting volunteers for the following positions:
              </p>
              <ul className="space-y-2 pt-2">
                {roles.map((role, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold shrink-0" />
                    <span className="font-semibold">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8">
              <a 
                href="https://www.instagram.com/officialfilminthepark_?igsh=MW0yaDdyM3F4Y2Y2OQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:from-blue-300 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-blue-500/20 cursor-pointer">
                  Apply Now
                </button>
              </a>
            </div>
          </div>

        </div>

        {/* Why Get Involved Block */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto space-y-4 hover:border-cinema-gold/30 transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-white uppercase tracking-wider">
            Why Get Involved?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Getting involved with FLIP gives you the opportunity to build and be part of a vibrant, growing community looking to immerse themselves in the world of film. Network with industry professionals, gain hands-on experience, and make lifelong memories.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default GetInvolved;
