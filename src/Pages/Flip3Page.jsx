import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Flip3Img from '/src/assets/Flip3.0.jpeg';

/* ─── Countdown helper ─── */
function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ─── Animated counter tile ─── */
function Tile({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-4 min-w-[72px] md:min-w-[90px] shadow-xl backdrop-blur-md">
      <span className="text-3xl md:text-5xl font-black font-serif text-cinema-gold tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">
        {label}
      </span>
    </div>
  );
}

/* ─── Feature pill ─── */
function Feature({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-sm"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-gray-200">{text}</span>
    </motion.div>
  );
}

export default function Flip3Page() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const countdown = useCountdown('September 20, 2026 18:00:00');

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <div className="bg-cinema-dark text-gray-200 overflow-x-hidden font-sans">

      {/* ══════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Parallax BG */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover will-change-transform"
          style={{
            backgroundImage: `url(${Flip3Img})`,
            y: bgY,
            scale: 1.12,
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-dark/30 via-cinema-dark/50 to-cinema-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-dark/70 via-transparent to-cinema-dark/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.15)_0%,transparent_65%)]" />

        {/* Floating film-grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '128px' }}
        />

        {/* Hero text */}
        <motion.div
          style={{ y: textY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-6"
        >
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.3em] border border-cinema-gold/40 px-4 py-1.5 rounded-full bg-cinema-gold/10 backdrop-blur-sm text-cinema-gold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold animate-pulse" />
            Film in the Park · September 2026
          </motion.span>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-6xl sm:text-7xl md:text-[7rem] font-black font-serif leading-none tracking-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]"
          >
            FILM IN THE<br />
            PARK{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
              3.0
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg md:text-2xl font-light italic text-blue-200 tracking-wide"
          >
            A Night of Magic: The Kaleidoscope African Experience
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              📍 Lagos, Nigeria
            </span>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              📅 September 2026
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/get involved"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-white overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-blue-400" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: '0 0 50px 15px rgba(96,165,250,0.45)' }} />
              <span className="relative z-10">Reserve Your Spot</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <a href="#about-event" className="text-xs uppercase tracking-widest font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              Discover More
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-cinema-gold/60 to-transparent animate-pulse" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SECTION 2 — COUNTDOWN
      ══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-cinema-dark via-cinema-card to-cinema-dark py-20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-cinema-gold text-xs font-extrabold uppercase tracking-[0.3em] block"
          >
            ⏳ Countdown to the Magic
          </motion.span>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex justify-center gap-3 md:gap-5 flex-wrap"
          >
            <Tile value={countdown.days} label="Days" />
            <span className="text-cinema-gold font-black text-4xl self-center mb-4">:</span>
            <Tile value={countdown.hours} label="Hours" />
            <span className="text-cinema-gold font-black text-4xl self-center mb-4">:</span>
            <Tile value={countdown.minutes} label="Minutes" />
            <span className="text-cinema-gold font-black text-4xl self-center mb-4">:</span>
            <Tile value={countdown.seconds} label="Seconds" />
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="text-gray-500 text-sm uppercase tracking-widest"
          >
            The experience begins · September 2026 · Lagos, Nigeria
          </motion.p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SECTION 3 — ABOUT THE EVENT (split layout)
      ══════════════════════════════════════════════ */}
      <section id="about-event" className="py-24 md:py-32">
        <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/30 via-transparent to-blue-900/20 blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src={Flip3Img}
                  alt="Film in the Park 3.0 — A Night of Magic"
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                {/* Bottom caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-cinema-dark/90 to-transparent p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-cinema-gold">
                    Film in the Park 3.0 · 2026
                  </span>
                  <p className="text-white font-serif text-lg font-bold mt-1">
                    The Kaleidoscope African Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-cinema-gold text-xs font-extrabold uppercase tracking-[0.3em] block">
                  About the Event
                </span>
                <h2 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
                  A Night of Magic
                </h2>
                <p className="text-xl text-blue-200 font-light italic">
                  The Kaleidoscope African Experience
                </p>
              </div>

              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  Get ready for the most immersive edition of Film in the Park yet. This
                  September 2026, Lagos will witness an extraordinary fusion of cinema,
                  culture, music, storytelling, and African creativity.
                </p>
                <p>
                  More than just a movie night, this is a celebration of Africa's vibrant
                  heritage through breathtaking visuals, unforgettable performances,
                  captivating stories, and a community brought together under the stars.
                </p>
                <p>
                  Experience an atmosphere where culture meets creativity, where every
                  frame tells a story, and where the magic of African expression comes
                  alive in spectacular fashion.
                </p>
              </div>

              {/* Event details */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5">
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block">
                    Date
                  </span>
                  <p className="text-white font-bold font-serif">📅 September 2026</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block">
                    Location
                  </span>
                  <p className="text-white font-bold font-serif">📍 Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/get involved"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cinema-gold text-white text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(96,165,250,0.3)] hover:shadow-[0_0_50px_rgba(96,165,250,0.5)]"
                >
                  Register Interest
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <a
                  href="https://filmfreeway.com/FilmInThePark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                >
                  Submit Film
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SECTION 4 — WHAT TO EXPECT
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-cinema-card/50 border-y border-white/5">
        <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14 space-y-3"
          >
            <span className="text-cinema-gold text-xs font-extrabold uppercase tracking-[0.3em] block">
              The Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-serif text-white">
              What to Expect
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Whether you're a film lover, creative professional, or culture enthusiast —
              Film in the Park 3.0 promises a night that will inspire, entertain, and connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎬', title: 'Cinematic Screenings', desc: 'Curated African films and shorts projected under the open night sky — an experience like no other.' },
              { icon: '🎶', title: 'Live Music & Performances', desc: 'Electrifying live acts and open mic sessions that celebrate the sounds of Africa.' },
              { icon: '🖼️', title: 'Art Showcases', desc: 'Immersive visual art installations and exhibitions from talented African creatives.' },
              { icon: '🌍', title: 'Cultural Celebrations', desc: 'A kaleidoscope of African heritage — storytelling, fashion, food, and community spirit.' },
              { icon: '🤝', title: 'Networking & Community', desc: 'Connect with dreamers, filmmakers, artists, and storytellers all under one sky.' },
              { icon: '✨', title: 'Unforgettable Atmosphere', desc: 'An evening where magic is not just watched — it is felt by everyone in attendance.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white/3 border border-white/8 rounded-2xl p-6 space-y-3 hover:border-cinema-gold/30 hover:bg-white/5 transition-all duration-500 cursor-default"
              >
                <span className="text-3xl block">{item.icon}</span>
                <h3 className="text-white font-bold font-serif text-lg group-hover:text-cinema-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SECTION 5 — FULL-WIDTH QUOTE BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${Flip3Img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-dark via-cinema-dark/80 to-cinema-dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-6">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-2xl md:text-4xl font-black font-serif text-white leading-snug"
          >
            "Join us as we create memories, celebrate African excellence, and redefine outdoor cinematic experiences."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-20 h-px bg-cinema-gold mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm uppercase tracking-widest font-semibold"
          >
            — Film in the Park 3.0
          </motion.p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SECTION 6 — CLOSING CTA
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-cinema-card to-cinema-dark">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-cinema-gold text-xs font-extrabold uppercase tracking-[0.3em] block">
              Be Part of the Story
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-serif text-white leading-tight">
              Reserve Your Spot.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
                Experience the Magic.
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Become part of the story. Film in the Park 3.0 — where Africa's creativity comes alive under the stars.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/get involved"
              className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-white overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-blue-400" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ boxShadow: '0 0 60px 20px rgba(96,165,250,0.4)' }} />
              <span className="relative z-10">Get Event Updates</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              to="/contact us"
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest border-b border-white/20 pb-0.5 hover:border-white"
            >
              Partner With Us →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
