import React from 'react';
import BlogCard from '../../Teamdata/BlogCard';

function Blog() {
  return (
    <div>
      <h1 className='text-center text-2xl md:text-4xl font-bold mb-7'>Media Mentions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <BlogCard
          title="FLIP poises to change narratives as maiden edition holds Saturday"
          excerpt="Lead organiser of the festival and a budding film producer, Precious Tomiwa Orun, who made this known, said the Film in the Park Festival seeks to showcase the works of emerging filmmakers who want to share their love for cinema and storytelling."
          date="June 15, 2024"
          readTime={5}
          postUrl="https://newtelegraphng.com/flip-poises-to-change-narratives-as-maiden-edition-holds-saturday/"
        />

        <BlogCard
          title="EMERGING VOICES AND INSPIRING CHANGE THROUGH FILM  "
          excerpt="Tomiwa Precious Otun, a budding Film producer and lead organizer of the maiden film festival disclosed that The Film in the Park [FLIP] MAIDEN edition themed “Empowering Emerging Voices and Inspiring Change” is dedicated to uncovering and showcasing emerging talent and diverse voices within the film industry."
          date="July 2, 2024"
          readTime={8}
          postUrl="https://thelegendnewsng.com/emerging-voices-and-inspiring-change-through-film-the-legend-news/"
        />

        <BlogCard
          title="Film in the Park Holds August 24| Here’s Why You Shouldn’t Miss it "
          excerpt="Tomiwa Otun noted that “the vision is rooted in purpose , the FLIP festival was borne out of a need to document and illuminate our life and times through the creativity of film. Unlike music which is another beloved form of artistic expression, films have a unique and lasting impact, etching themselves into our collective memories."
          date="August 2, 2024"
          readTime={12}
          postUrl="https://www.brandtimes.com.ng/film-in-the-park-holds-august-24-heres-why-you-shouldnt-miss-it/"
        />
        <BlogCard
          title="A Sabi Experience’: Film in the Park 2.0 Festival Set for September 21 "
          excerpt="The highly anticipated second edition of the Film in the Park (FLIP) Festival is scheduled for Sunday, September 21, 2025, at the iconic Freedom Park on Broad Street, Lagos Island. The event runs from 4 p.m. to 7 p.m., promising an afternoon filled with cinematic magic, vibrant performances, and community engagement."
          date="July 30, 2025"
          readTime={2}
          postUrl="https://www.brandtimes.com.ng/a-sabi-experience-film-in-the-park-2-0-festival-set-for-september-21/"
        />
        <BlogCard
          title="Film in the Park 2.0 Festival holds on September 21.✓✓✓Newzspy Entertainment. "
          excerpt="Tomiwa Precious Otun, a budding Film producer and lead organizer of the FLIP 2.0 film festival further stated, “The Film in the Park (FLIP)2.0 edition is themed “ A Sabi Experience” dedicated to further uncovering and showcasing emerging talent and diverse voices within the film industry."
          date="July 29, 2025"
          readTime={7}
          postUrl="https://newzspy.ng/2025/07/29/film-in-the-park-2-0-festival-holds-on-september-21-%e2%9c%93%e2%9c%93%e2%9c%93newzspy-entertainment/"
        />
        <BlogCard
          title="Film In The Park 2.0 Festival holds On September 21"
          excerpt="The Film in the Park 2.0 festival again seeks to reignite that magic, showcasing the works of emerging filmmakers who want to share your love for cinema and storytelling."
          date="July 28, 2025"
          readTime={4}
          postUrl="https://thelegendnewsng.com/film-in-the-park-2-0-festival-holds-on-september-21/"
        />

      </div>
    </div>
  );
}

export default Blog;
