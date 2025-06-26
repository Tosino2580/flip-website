import React from 'react';
import ExploreFlipCard from './ExploreFlipCard';
import cinema from "/src/assets/white.cinema.png"
import attendEvent from "/src/assets/ticket.png"
import volunteer from "/src/assets/white.handshake.png"

function ExploreSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6  items-center">
      <ExploreFlipCard
        title=" Filmmakers"
        imageUrl={cinema}
        description={`Are you a filmmaker with a passion for storytelling?\nThis is your chance to share your unique vision with the world.\nSubmit your short film to be showcased in our community park cinema.\nAll genres and styles welcome.`}
        link=""
        buttonText="Submit Now →"
      />

      <ExploreFlipCard
        title=" Attend Events"
        imageUrl={attendEvent}
        description={`Join an unforgettable outdoor cinema experience.\nWatch inspiring films under the stars with fellow creatives and film lovers.\nOur events feature Q&A sessions, food trucks, and networking moments.`}
        link=""
        buttonText="View Events →"
      />

      <ExploreFlipCard
        title=" Volunteer"
        imageUrl={volunteer}
        description={`Be part of something magical.\nHelp us create memorable film nights by joining our crew.\nGain hands-on experience in event setup, crowd coordination, and more.`}
        link=""
        buttonText="Join Us →"
      />
    </div>
  );
}

export default ExploreSection;
