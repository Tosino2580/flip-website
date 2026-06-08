import { motion } from "framer-motion";
import HeroBg from "/src/assets/Flip01-160.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // easeOutExpo
      },
    },
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black font-sans">
      {/* Cinematic Vignetted Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10000ms] ease-out animate-pulse-subtle"
        style={{ 
          backgroundImage: `url(${HeroBg})`,
          animation: "zoom-in-out 30s infinite alternate"
        }}
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020919]/85 via-[#020919]/40 to-[#020919]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020919] via-[#020919]/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,transparent_65%)]" />

      {/* Main Text Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-center text-white px-6 max-w-4xl mx-auto z-10 space-y-6 mt-28"
      >
        <motion.span 
          variants={itemVariants} 
          className="text-cinema-gold font-bold tracking-[0.25em] text-xs md:text-sm uppercase block"
        >
          Lagoon-side Open-Air Film Festival
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-8xl font-black font-serif tracking-tight text-white leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        >
          Film In The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
            Park Festival
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-2xl text-gray-300 font-medium tracking-wide max-w-2xl mx-auto italic font-sans"
        >
          “Empowering Emerging Voices, Inspiring Change through Cinema”
        </motion.p>
        
        <motion.div variants={itemVariants} className="pt-6">
          <a href="#origin-story" className="inline-block animate-bounce">
            <span className="text-gray-400 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2 cursor-pointer text-xs uppercase tracking-widest font-semibold">
              Scroll to discover
              <svg 
                className="w-5 h-5 text-cinema-gold" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Inline styles for the slow cinematic zoom effect */}
      <style>
        {`
          @keyframes zoom-in-out {
            0% { transform: scale(1.02) rotate(0deg); }
            100% { transform: scale(1.1) rotate(0.5deg); }
          }
        `}
      </style>
    </div>
  );
}