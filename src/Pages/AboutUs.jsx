import React from 'react';
import { OurTeam } from '../../Teamdata/OurTeam';
import Pic from '/src/assets/Flip01-160.jpg'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Footer from '../component/Footer';

function AboutUs() {
  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
        ease: "easeInOut",
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
    <div className='mt-25 bg-[linear-gradient(180deg,_rgba(220,240,255,1)_0%,_white_40%,_white_60%,_rgba(225,240,255,1)_100%)] overflow-hidden font-serif'>
      <div className='flex flex-col md:flex-row'>
        <div className=' '>
          <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.5, once: true }} variants={textVariant} className='flex flex-col justify-center items-center p-6 md:p-0  md:mt-40 space-y-4'>
            <p className='text-sm md:text-2xl text-black w-100 md:w-200  px-10'>Some people have shared their experiences growing up, how they often found themselves mimicking actors from the films they watched, adopting their walks and accents, captivated by their stories. This personal experience underscores the effect films have on our lives, even at a surface level.</p>
          </motion.div>
        </div>
        <div>
          <motion.img src={Pic} alt="" initial="hidden" whileInView="visible" viewport={{ amount: 0.5, once: true }} variants={imageVariant} className='w-250 px-10 md:px-0' />
        </div>
      </div>
      <div className='px-10 mt-5'>
        <p className='text-md md:text-lg font-serif text-gray-600'>In a world where big budgets and industry connections often decide whose art gets celebrated, FLIP exists to level the playing field. We’re here for the underground filmmakers—the ones with burning ideas and raw talent but no spotlight. The ones who shoot magic on shoestring budgets, whose cameras capture truths that mainstream screens ignore. FLIP is their stage. When their films light up our open-air screens, it’s more than a screening—it’s a declaration that their voices matter.</p>
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.5, once: true }} variants={textVariant} className='px-10 py-5 mt-5 space-y-5 bg-blue-100 '>
        <h1 className='text-3xl font-bold font-serif text-blue-600 text-center'>Mission Statement:</h1>
        <p className='text-xl font-serif text-gray-700'>Our mission is to amplify these creative voices, highlighting their unique perspectives and artistic contributions.
          To create a space where stories that need to be told are given a voice, where underrepresented filmmakers find their stage, and where the power of film is harnessed to inspire change and document our times.</p>
      </motion.div>
      <div className='text-center mt-10 px-10 space-y-6'>
        <h1 className='text-3xl text-blue-600 font-bold font-serif'>Vision Statement</h1>
        <p className='text-lg font-serif text-gray-600'>At Its Core, the FLIP Film Festival seeks to provide a platform for exceptionally talented but underrepresented filmmakers to showcase their work.

        </p>
      </div>
      <div className='mt-8 px-10'>
        <h1 className='text-4xl md:text-5xl font-bold font-serif text-blue-600 text-center'>Our Team</h1>
      </div>
      <div className='mt-15 grid grid-col md:grid-cols-3 gap-5 w- px-5 md:px-10 '>
        {OurTeam.map((item, index) => (
          <div key={index} className='bg-blue-300  p-4 drop-shadow-lg rounded-lg w-'>
            <div className='flex flex-col text-center items-center gap-'>
              <img src={item.image} alt="" className='w-20 md:w-40 max-h-20 md:max-h-40 rounded-full m-auto' />
              <div>
                <h2 className=' text-lg font-semibold font-serif text-white '>{item.name}</h2>
                <h1 className='font-extrabold text-blue-800 font-serif '>{item.title}</h1>

              </div>

            </div>
            <p className='w-full md:w-full text-sm md:text-md text-start md:text-start mt-4 font-serif text-blue-950 px-5'>{item.desc}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
