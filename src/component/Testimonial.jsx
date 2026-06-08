import React from 'react';

function Testimonial() {
  const testimonies = [
    {
      name: "Jessica Owolabi",
      title: "Young Adult Movie Enthusiast",
      desc: "FLIP was unforgettable! The atmosphere was relaxed and fun, and the movie selection was perfect. I met amazing people and loved the live music before the show. It felt like a real community experience, not just a movie screening. I'm definitely coming again. Huge shoutout to the organizers!"
    },
    {
      name: "Chinonso Umeh",
      title: "Parent and Community Member",
      desc: "My kids had the best time at FLIP! Everything was family-friendly, safe, and super organized. The movie was great for all ages, and the food vendors had tasty treats. It’s not easy finding events that work for parents and children alike, but FLIP nailed it."
    },
    {
      name: "David Ajayi",
      title: "Local Vendor at FLIP",
      desc: "Being a vendor at FLIP helped my business grow! The organizers were professional, and the crowd was full of energy. I made great sales and got new loyal customers. FLIP gives small businesses the chance to shine while providing top-notch entertainment."
    },
    {
      name: "Fatima Musa",
      title: "Travel Blogger and Content Creator",
      desc: "As a content creator, FLIP is a dream! The lighting, smiles, and open-air vibe made for perfect shots. I made a vlog about it, and it blew up online. It’s rare to find events that feel authentic and beautiful. FLIP gave me great content and memories."
    },
    {
      name: "Tola Adebayo",
      title: "University Student",
      desc: "FLIP was a breath of fresh air! As a student, I’m always seeking budget-friendly fun, and this was it. Outdoor movie nights under the stars? Yes, please. Everything was well-organized, from seating to sound. It was also a great place to meet creatives."
    },
    {
      name: "Samuel Eze",
      title: "Event Photographer",
      desc: "Photographing FLIP was a joy. The crowd was diverse, the atmosphere was vibrant, and the visuals were stunning. I captured so many heartfelt moments. The team supported us photographers and made access easy. It’s a memory-making experience."
    },
    {
      name: "Mrs. Rachael Idoko",
      title: "School Principal",
      desc: "We took students from our school to FLIP, and it was wonderful. The environment was safe and welcoming, and the film sparked meaningful classroom discussions. The organizers made us feel truly included. We'll definitely be back."
    },
    {
      name: "Ikenna Obi",
      title: "Aspiring Filmmaker",
      desc: "FLIP inspired me as a filmmaker. Seeing people enjoy a movie together outdoors reminded me why I love storytelling. It wasn’t just fun—it was motivation. I also networked with creatives after the event. FLIP creates space for growth."
    },
    {
      name: "Ngozi Nwankwo",
      title: "Elderly Resident",
      desc: "FLIP brought joy back into my weekend. I loved the calm, community spirit of the event. It was well-organized and thoughtful—seats for seniors, polite volunteers, and great movie choices. I felt young again, surrounded by people of all ages."
    },
    {
      name: "Seyi Adebanjo",
      title: "Musician and Performer",
      desc: "FLIP was unforgettable! The atmosphere was relaxed and fun, and the movie selection was perfect. I met amazing people and loved the live music before the show. It felt like a real community experience, not just a movie screening."
    },
  ];

  return (
    <section className="py-24 bg-cinema-dark border-b border-white/5 overflow-hidden">
      <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto text-center mb-16">
        <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block mb-3">
          Community Voices
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-serif text-white tracking-tight">
          What People Say
        </h2>
      </div>

      {/* CSS Infinite Marquee */}
      <div className="relative flex overflow-x-hidden w-full group py-4">
        {/* Left/Right fading gradient mask for premium look */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cinema-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cinema-dark to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6">
          {[...testimonies, ...testimonies].map((test, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[380px] bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm hover:border-cinema-gold/30 hover:bg-white/10 transition-all duration-300"
            > 
              <p className="text-gray-300 italic text-sm leading-relaxed mb-6 font-sans">
                “{test.desc}”
              </p>
              <div>
                <h4 className="text-sm font-bold text-white font-serif">{test.name}</h4>
                <p className="text-[10px] uppercase tracking-wider text-cinema-gold font-bold mt-1">
                  {test.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
