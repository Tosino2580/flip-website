import React from 'react';
import Hero from '../component/Hero';
import AutoScrollCarousel from '../component/AutoScrollCarousel';
import Footer from '../component/Footer';
import FlipImage from "/src/assets/Flip-165.jpg"
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import FlipStatSection from '../component/FlipStatSection';
import FlipSeason2 from '../component/FlipSeason2';
import Testimonial from '../component/Testimonial';
import Blog from '../component/Blog';
import ArrowButton from '../component/arrowButton';
import ExploreSection from '../component/ExploreSection';

function Home() {
  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
        ease: "easeIn",
      },
    },
  };
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className='font-serif overflow-hidden'>
      <Hero />
      <div className=' flex flex-col md:flex-row items-center  space-y-4 bg-white- mb-7 mt-'>
        <p initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} variants={textVariant} className='text-1xl md:text-2xl text-black px-5 font-serif '><strong>Film in the Park</strong> Festival was born out of a need to document and illuminate our lives and times through film. <br /><br />Historically, Films have preserved and passed down cultural practices, amplified narratives, and influenced public perceptions. At FLIP Festival, we aim to continue this tradition and contribute positively by showcasing the works of emerging and talented filmmakers.
        <br />
        <br />
        <ArrowButton/>

        </p>
        <motion.img src={FlipImage} alt="" initial="hidden" whileInView="visible" viewport={{ amount: 0.5, once: true }} variants={imageVariant} className='w-full md:w-1/2'/>
      </div>
      <FlipStatSection/>
      <br />
      <br />
      <br />
      <br />
      <ExploreSection/>
      <br />
      <br />
      <br />
      {/* <FlipSeason2/> */}
      <br />
      <br />
      <Blog/>
      <Testimonial/>
      
      <Footer/>
    </div>
  );
}

export default Home;
