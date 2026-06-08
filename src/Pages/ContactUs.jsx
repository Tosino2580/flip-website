import React from 'react';
import Footer from '../component/Footer';
import { IoChatbubble } from 'react-icons/io5';
import { CiTwitter } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { TbPhoneCall } from 'react-icons/tb';
import CustomerCare from '/src/assets/customer-service-representative.jpg';

const ContactUs = () => {
  return (
    <div className="pt-36 md:pt-44 bg-cinema-dark text-gray-300 overflow-hidden font-sans">
      <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start pb-20">
          
          {/* Text and image column */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block">
                Get In Touch
              </span>
              <h1 className="text-3xl md:text-5xl font-black font-serif text-white leading-tight">
                Contact the FLIP Team
              </h1>
            </div>
            
            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Thank you for your interest in <strong>Film in the Park (FLIP)</strong>. We value clear communication and are always open to hearing from our audience, partners, and supporters.
              </p>
              <p>
                Whether you have a question about the event, are interested in collaboration opportunities, or simply wish to connect with our team, we welcome your outreach.
              </p>
              <p>
                Feel free to reach out to us via phone or through our social media platforms. Every message is important to us, and we strive to respond promptly and professionally.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 hidden lg:block">
              <img className="w-full h-64 object-cover" src={CustomerCare} alt="Customer Service Representative" />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark/50 to-transparent" />
            </div>
          </div>

          {/* Social cards column */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:hidden">
              <img className="w-full h-48 object-cover" src={CustomerCare} alt="Customer Service Representative" />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Email Support Card */}
              <div className="flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:border-cinema-blue/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-52 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cinema-blue/15 text-cinema-blue flex items-center justify-center border border-cinema-blue/20 group-hover:bg-cinema-blue group-hover:text-white transition-all duration-300">
                    <IoChatbubble className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-base md:text-lg">Chat to Support</h3>
                    <p className="text-gray-500 text-xs mt-0.5">We are here to help</p>
                  </div>
                </div>
                <a href="mailto:thisisfilminthepark@gmail.com" className="text-cinema-blue hover:text-white transition-colors duration-300 text-xs md:text-sm font-bold truncate">
                  thisisfilminthepark@gmail.com
                </a>
              </div>

              {/* Twitter Card */}
              <div className="flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:border-sky-400/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-52 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-400/15 text-sky-400 flex items-center justify-center border border-sky-400/20 group-hover:bg-sky-400 group-hover:text-black transition-all duration-300">
                    <CiTwitter className="text-xl font-bold" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-base md:text-lg">Follow us on X</h3>
                    <p className="text-gray-500 text-xs mt-0.5 font-sans">Tweet us</p>
                  </div>
                </div>
                <a href="https://x.com/Filminthepark?t=FxniPReY-r5H1F0wSA3FUQ&s=09" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors duration-300 text-xs md:text-sm font-bold truncate">
                  @Filminthepark
                </a>
              </div>

              {/* Instagram Card */}
              <div className="flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:border-pink-500/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-52 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/15 text-pink-500 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <BsInstagram className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-base md:text-lg">Instagram</h3>
                    <p className="text-gray-500 text-xs mt-0.5">Send a DM to us</p>
                  </div>
                </div>
                <a href="https://www.instagram.com/officialfilminthepark_?igsh=MW0yaDdyM3F4Y2Y2OQ==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white transition-colors duration-300 text-xs md:text-sm font-bold truncate">
                  @officialfilminthepark_
                </a>
              </div>

              {/* Phone Card */}
              <div className="flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:border-emerald-500/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-52 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <TbPhoneCall className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-base md:text-lg">Call Support</h3>
                    <p className="text-gray-500 text-xs mt-0.5">Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>
                <a href="tel:+2348144893978" className="text-emerald-500 hover:text-white transition-colors duration-300 text-xs md:text-sm font-bold truncate">
                  +234 814 489 3978
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

export default ContactUs;
