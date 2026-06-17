import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Flip3Img from '/src/assets/Flip3.0.jpeg';

// Module-level flag: resets on every page refresh/reload,
// but stays true during SPA route navigation (won't re-show when browsing pages).
let modalAlreadyShown = false;

export default function AnnouncementModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!modalAlreadyShown) {
      // Small delay so the site renders first
      const t = setTimeout(() => {
        setVisible(true);
        modalAlreadyShown = true;
      }, 600);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setVisible(false);
  };

  // Also close on Escape key
  useEffect(() => {
    if (!visible) return;
    const handler = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Backdrop: blurred + darkened ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            className="fixed inset-0 z-[900] bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* ── Modal panel ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[901] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="
                relative pointer-events-auto
                w-[95%] sm:w-[85%] md:w-[65%] lg:w-[55%] xl:w-[50%]
                max-h-[95vh]
                rounded-3xl overflow-hidden
                border border-white/10
                shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(96,165,250,0.15)]
                bg-cinema-dark
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* ── Image hero with overlay text ── */}
              <div className="relative w-full overflow-hidden" style={{ maxHeight: '60vh' }}>
                <img
                  src={Flip3Img}
                  alt="Film in the Park 3.0 — A Night of Magic"
                  className="w-full h-full object-cover object-center"
                  style={{ maxHeight: '60vh' }}
                />

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-cinema-dark/50 via-transparent to-cinema-dark/50" />
                {/* Blue radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.12)_0%,transparent_70%)]" />

                {/* Overlay title text on image */}
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-7 space-y-1">
                  <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-extrabold uppercase tracking-[0.25em] text-cinema-gold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold animate-pulse" />
                    Upcoming · September 2026
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    FILM IN THE PARK{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
                      3.0
                    </span>
                  </h2>
                  <p className="text-sm md:text-base text-blue-200 italic font-light">
                    A Night of Magic: The Kaleidoscope African Experience
                  </p>
                </div>

                {/* Close button — top right of image */}
                <button
                  onClick={close}
                  aria-label="Close announcement"
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm z-10 text-lg font-light"
                >
                  ✕
                </button>
              </div>

              {/* ── Body copy ── */}
              <div className="px-5 md:px-8 py-5 md:py-6 space-y-4 bg-cinema-dark">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  This September 2026, Lagos will witness an extraordinary fusion of cinema,
                  culture, music, storytelling, and African creativity. More than just a movie
                  night — a celebration of Africa's vibrant heritage under the stars.
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    📍 Lagos, Nigeria
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    📅 September 2026
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link
                    to="/flip-3.0"
                    onClick={close}
                    className="group relative flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs text-white overflow-hidden hover:scale-105 transition-transform duration-300"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-blue-400" />
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: '0 0 40px 10px rgba(96,165,250,0.4)' }}
                    />
                    <span className="relative z-10">Discover the Experience</span>
                    <svg className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <button
                    onClick={close}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-400 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
