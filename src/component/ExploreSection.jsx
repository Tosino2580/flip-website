import React from 'react';
import ExploreFlipCard from './ExploreFlipCard';
import cinema from "/src/assets/white.cinema.png";
import attendEvent from "/src/assets/ticket.png";
import volunteer from "/src/assets/white.handshake.png";

function ExploreSection() {
  return (
    <section className="py-20 bg-cinema-dark/50">
      <div className="max-w-[1450px] w-full px-4 md:px-0 md:w-4/5 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block mb-3">
            Join the Movement
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-white tracking-tight">
            How to Experience FLIP
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Whether you want to submit your film, attend events under the stars, or volunteer behind the scenes, there's a space for you.
          </p>
        </div>

        {/* Explore Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
          <ExploreFlipCard
            title="Filmmakers"
            imageUrl={cinema}
            description={`Are you a filmmaker with a passion for storytelling?\nThis is your chance to share your unique vision with the world.\nSubmit your short film to be showcased in our community park cinema.\nAll genres and styles welcome.`}
            link="https://filmfreeway.com/FilmInThePark"
            buttonText="Submit Now →"
          />

          <ExploreFlipCard
            title="Attend Events"
            imageUrl={attendEvent}
            description={`Join an unforgettable outdoor cinema experience.\nWatch inspiring films under the stars with fellow creatives and film lovers.\nOur events feature Q&A sessions, food trucks, and networking moments.`}
            link="/flip-2.0"
            buttonText="View Events →"
          />

          <ExploreFlipCard
            title="Volunteer"
            imageUrl={volunteer}
            description={`Be part of something magical.\nHelp us create memorable film nights by joining our crew.\nGain hands-on experience in event setup, crowd coordination, and more.`}
            link="/get involved"
            buttonText="Join Us →"
          />
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
