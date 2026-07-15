import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Flip3Img from '/src/assets/Flip3.0.jpeg';
import { Link } from 'react-router-dom';

export default function Flip3Section() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax: image moves up as user scrolls down
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      {/* ── Parallax Background Image with cinematic zoom ── */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover will-change-transform"
        style={{
          backgroundImage: `url(${Flip3Img})`,
          y: bgY,
          scale: 1.08,
          animation: 'flip3-zoom 20s ease-in-out infinite alternate',
        }}
      />

      {/* ── Gradient Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-dark/70 via-[#020919]/50 to-cinema-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-cinema-dark/60 via-transparent to-cinema-dark/60" />
      {/* Gold/blue glow at centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.18)_0%,transparent_70%)]" />

      {/* ── Content ── */}
      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Eyebrow label */}
          <motion.span
            variants={fadeUp}
            className="inline-block text-cinema-gold text-xs md:text-sm font-extrabold uppercase tracking-[0.3em] border border-cinema-gold/30 px-4 py-1 rounded-full bg-cinema-gold/10 backdrop-blur-sm"
          >
            🎬 Upcoming Event · September 19th, 2026
          </motion.span>

          {/* Main title */}
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-8xl font-black font-serif text-white leading-none tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          >
            FILM IN THE PARK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
              3.0
            </span>
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-2xl font-semibold text-blue-200 tracking-wide italic"
          >
            A Night of Magic: The Kaleidoscope African Experience
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto font-sans"
          >
            An extraordinary fusion of cinema, culture, music, storytelling, and
            African creativity—brought alive under the stars. Where every frame
            tells a story and the magic of African expression shines in spectacular
            fashion.
          </motion.p>

          {/* Meta pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm">
              📍 Freedom Park, Lagos Island
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm">
              📅 September 19th, 2026
            </span>
          </motion.div>

          {/* CTA button */}
          <motion.div variants={fadeUp} className="pt-4">
            <Link
              to="/flip-3.0"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-white overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Glowing animated background */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 40px 10px rgba(96,165,250,0.5)',
                }}
              />
              <span className="relative z-10">Discover the Experience</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Keyframes for slow cinematic zoom ── */}
      <style>{`
        @keyframes flip3-zoom {
          0%   { transform: scale(1.08) translateY(0px); }
          100% { transform: scale(1.14) translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
