import React, { useEffect, useRef } from 'react';

function Testimonial() {
  const testimonies = [
    {
      name: "Jessica Owolabi",
      title: "Young Adult Movie Enthusiast",
      desc: "FLIP was unforgattable! The atmosphere was relaxed and fun, and the movie selection was perfect. I met amazing people and the loved and live music before the show. It felt like a real community experience, not just a movie screening. i'm definitely coming again. Huge shoutout to the organizers, they really made it special!"
    },
    {
      name: "Chinonso Umeh",
      title: "Parent and Community Member",
      desc: "My kids had the best time at FLIP! Everything was family-friendly, safe, and super organized. The movie was great for all ages, and the food vendors had tasty treats. It’s not easy finding events that work for parents and children alike, but FLIP nailed it. We’re already counting down to the next edition!"
    },
    {
      name: "David Ajayi",
      title: "Local Vendor at FLIP",
      desc: "Being a vendor at FLIP helped my business grow! The organizers were professional, and the crowd was full of energy. I made great sales and got new loyal customers. FLIP gives small businesses the chance to shine while providing top-notch entertainment. I’m grateful for the opportunity and can’t wait for the next one."
    },
    {
      name: "Fatima Musa",
      title: "Travel Blogger and Content Creator",
      desc: "As a content creator, FLIP is a dream! The lighting, smiles, and open-air vibe made for perfect shots. I made a vlog about it, and it blew up online. It’s rare to find events that feel authentic and beautiful. FLIP gave me great content and unforgettable memories. Definitely one for the books!"
    },
    {
      name: "Tola Adebayo",
      title: "University Student",
      desc: "FLIP was a breath of fresh air! As a student, I’m always seeking budget-friendly fun, and this was it. Outdoor movie nights under the stars? Yes, please. Everything was well-organized, from seating to sound. It was also a great place to meet creatives and network. I’ll be attending every time they host it!"
    },
    {
      name: "Samuel Eze",
      title: "Event Photographer",
      desc: "Photographing FLIP was a joy. The crowd was diverse, the atmosphere was vibrant, and the visuals were stunning. I captured so many heartfelt moments. The team supported us photographers and made access easy. It’s not just an event—it’s a memory-making experience. I’d happily shoot every FLIP edition if I could!"
    },
    {
      name: "Mrs. Rachael Idoko",
      title: "School Principal",
      desc: "We took students from our school to FLIP, and it was wonderful. The environment was safe and welcoming, and the film sparked meaningful classroom discussions. The organizers made us feel truly included. It’s not just entertainment—it’s education and community in one. We’ll definitely be back for future editions. Highly recommended for schools!"
    },
    {
      name: "Ikenna Obi",
      title: " Aspiring Filmmaker",
      desc: "FLIP inspired me as a filmmaker. Seeing people enjoy a movie together outdoors reminded me why I love storytelling. It wasn’t just fun—it was motivation. I also networked with creatives after the event. FLIP creates space for growth, inspiration, and connection. Someday, I hope they screen one of my films too!"
    },
    {
      name: "Ngozi Nwankwo",
      title: "Elderly Resident",
      desc: "FLIP brought joy back into my weekend. I loved the calm, community spirit of the event. It was well-organized and thoughtful—seats for seniors, polite volunteers, and great movie choices. I felt young again, surrounded by people of all ages. I’m telling all my friends; this is a must-attend event!"
    },
    {
      name: "Seyi Adebanjo",
      title: "Musician and Performer",
      desc: "FLIP was unforgattable! The atmosphere was relaxed and fun, and the movie selection was perfect. I met amazing people and the loved and live music before the show. It felt like a real community experience, not just a movie screening. i'm definitely coming again. Huge shoutout to the organizers, they really made it special!"
    },
  ];

   const scrollRef = useRef(null);
  
    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if(!scrollContainer) return;
  
      let scrollAmount = 0;
  
      const scroll = () => {
        scrollAmount += 1;
        if(scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        };
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scroll)
      };
      requestAnimationFrame(scroll)
    }, [])
  return (
    <div className='space-y-9'>
      <div className='text-5xl font-bold text-center'>
        <h1>Testimonials</h1>
      </div>
      <div className='flex gap-9' ref={scrollRef} style={{display: 'flex'}}>
        {[...testimonies, ...testimonies].map((test, index)=>(
          <div key={index} className=''>
            <div className='w-90 md:w-100 h-50 md:h-60 shadow-xl rounded-lg space-y-4 md:space-y-9'> 
              <p className='px-4 text-sm md:text-md mt-4 text-gray-500'>{test.desc}</p>
              <div className='mt-3 px-5'>
                <h1 className='text-sm md:text-md font-bold'>{test.name}</h1>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
