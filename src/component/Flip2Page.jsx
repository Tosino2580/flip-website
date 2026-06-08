import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Flip2 from '/src/assets/images/flip-2.0-event.jpg'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Flip2Page = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    // Updated to September 2026 so countdown is active in real time (relative to June 2026)
    const targetDate = new Date("September 21, 2026 16:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setEventStarted(true);
        runConfetti();
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const runConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#ffffff'];

    const confettiInterval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(confettiInterval);
        return;
      }

      confetti({
        particleCount: 80,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors,
      });
    }, 250);
  };

  return (
    <div className="pt-36 md:pt-44 bg-cinema-dark text-gray-300 overflow-hidden font-sans">
      <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto pb-20">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Event Poster Card */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative group w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-cinema-gold/30 transition-colors duration-500">
              <img src={Flip2} alt="FLIP 2.0 Event Poster" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Details & Ticker Column */}
          <div className="flex-1 space-y-8 w-full">
            
            {/* Header info */}
            <div className="space-y-4">
              <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block">
                Next Landmark Event
              </span>
              <h1 className="text-3xl md:text-5xl font-black font-serif text-white leading-tight">
                FLIP 2.0 – A SABI Experience
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
                Film. Friends. Freedom. This is more than an event—it's a celebration of creativity, culture, and connection in the heart of Lagos.
              </p>
            </div>

            {/* Ticking Countdown Clock */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              {eventStarted ? (
                <div className="text-lg md:text-xl font-bold text-emerald-400 animate-bounce text-center">
                  🎉 FLIP 2.0 is LIVE! Let the SABI Experience Begin! 🎉
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 text-center">
                    ⏳ Countdown to FLIP 2.0
                  </h3>
                  <div className="flex justify-center gap-3 md:gap-4">
                    <div className="bg-cinema-card border border-white/10 rounded-xl px-4 py-3 text-center min-w-[65px] md:min-w-[75px] shadow-lg">
                      <div className="text-2xl md:text-3xl font-serif font-black text-cinema-gold">{timeLeft.days}</div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Days</span>
                    </div>
                    <div className="bg-cinema-card border border-white/10 rounded-xl px-4 py-3 text-center min-w-[65px] md:min-w-[75px] shadow-lg">
                      <div className="text-2xl md:text-3xl font-serif font-black text-cinema-gold">{timeLeft.hours}</div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Hours</span>
                    </div>
                    <div className="bg-cinema-card border border-white/10 rounded-xl px-4 py-3 text-center min-w-[65px] md:min-w-[75px] shadow-lg">
                      <div className="text-2xl md:text-3xl font-serif font-black text-cinema-gold">{timeLeft.minutes}</div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Min</span>
                    </div>
                    <div className="bg-cinema-card border border-white/10 rounded-xl px-4 py-3 text-center min-w-[65px] md:min-w-[75px] shadow-lg">
                      <div className="text-2xl md:text-3xl font-serif font-black text-cinema-gold">{timeLeft.seconds}</div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Sec</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Expectations & Timing */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-white border-b border-white/5 pb-2 uppercase tracking-wide">
                What to Expect
              </h2>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cinema-gold font-bold">✓</span> Classic film screenings under the stars
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cinema-gold font-bold">✓</span> Live music & open mic sessions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cinema-gold font-bold">✓</span> Art showcases from talented local creatives
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cinema-gold font-bold">✓</span> A vibrant community of dreamers, storytellers, and vibe-bringers
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block">Date & Time</span>
                <p className="text-white font-bold font-serif text-sm">🗓️ Saturday, 21st September</p>
                <p className="text-gray-400 text-xs">4PM Till Late</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block">Venue Location</span>
                <p className="text-white font-bold font-serif text-sm">📍 Freedom Park, Lagos</p>
                <p className="text-gray-400 text-xs">Broad Street, Lagos Island</p>
              </div>
            </div>

            {/* Sponsorship Block */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 mt-8">
              <h3 className="text-white font-serif font-bold text-base md:text-lg">
                📞 Sponsorships or Partnerships?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Connect with our team to explore sponsor visibility packages and partnership benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs md:text-sm">
                <a href="tel:+2348144893978" className="text-cinema-gold hover:text-white transition-colors duration-300 font-bold">
                  0814 489 3978
                </a>
                <span className="hidden sm:inline text-white/20">|</span>
                <a href="tel:+2349066065870" className="text-cinema-gold hover:text-white transition-colors duration-300 font-bold">
                  0906 606 5870
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Flip2Page;
