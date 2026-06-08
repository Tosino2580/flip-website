import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import NewsletterCTA from './Newsletter';

function Footer() {
  return (
    <footer className="bg-cinema-card border-t border-blue-900/30 py-12 md:py-16 mt-20 font-sans text-gray-400">
      <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {/* Newsletter Column */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-xl font-bold tracking-wider text-white uppercase font-serif">
            Join the Club
          </h2>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Subscribe to the FLIP newsletter to get the latest cinematic event schedules, behind-the-scenes stories, and tickets.
          </p>
          <div className="w-full">
            <NewsletterCTA />
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col items-start md:items-center justify-center">
          <div className="text-left md:text-center">
            <Link to="/">
              <h2 className="text-2xl font-extrabold text-white tracking-widest uppercase mb-6 font-serif">
                FLIP
              </h2>
            </Link>
            <ul className="flex flex-col gap-3 text-sm font-medium uppercase tracking-wider">
              <li>
                <Link to="/about us" className="hover:text-cinema-gold transition-colors duration-300">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/gallery/flip1" className="hover:text-cinema-gold transition-colors duration-300">
                  FLIP 1.0 Gallery
                </Link>
              </li>
              <li>
                <Link to="/gallery/flip2" className="hover:text-cinema-gold transition-colors duration-300">
                  FLIP 2.0 Gallery
                </Link>
              </li>
              <li>
                <Link to="/get involved" className="hover:text-cinema-gold transition-colors duration-300">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact us" className="hover:text-cinema-gold transition-colors duration-300">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Column */}
        <div className="flex flex-col items-start md:items-end justify-start space-y-4">
          <h2 className="text-lg font-semibold tracking-wider text-white uppercase font-serif">
            Follow Us
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/officialfilminthepark_?igsh=MW0yaDdyM3F4Y2Y2OQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cinema-gold hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="https://x.com/Filminthepark?t=FxniPReY-r5H1F0wSA3FUQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cinema-gold hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557962266192&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cinema-gold hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaFacebook className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 text-center text-xs text-gray-500 mt-12 pt-8">
        <p>&copy; {new Date().getFullYear()} FLIP Festival. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
