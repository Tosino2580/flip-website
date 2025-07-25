import React from 'react';
import Footer from '../component/Footer';
import Arrow2 from '../component/Arrow2';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function GetInvolved() {
  return (
    <div className='mt-25 font-serif bg-[linear-gradient(180deg,_rgba(220,240,255,1)_0%,_white_40%,_white_60%,_rgba(225,240,255,1)_100%)]'>
      <div className='flex flex-col md:flex-row px-10 gap-70 justify-center py-10'>

        <div className='md:w-1/3 flex flex-col gap-20'>
          <div className='space-y-5'>
            <h1 className='text-3xl font-extrabold uppercase'>Get Involved</h1>
            <p>Lights, camera, community! Film in the Park isn’t just a movie night, it’s a shared experience under the stars, powered by people like you. Whether you’re a film buff, a local business, or just someone who loves cozy blankets and popcorn under the sky, there’s a way for you to help keep the reels rolling.</p>
          </div>
          <div className='space-y-5'>
            <h1 className='text-2xl font-bold uppercase'>Why Get Invovled?</h1>
            <p>Getting involved with FLIP gives you the opportunity to build and be a part of a community looking to immerse themselves in the world of film. </p>
          </div>
          <div className='space-y-5'>
            <h1 className='text-2xl font-bold uppercase'>Partner with us</h1>
            <p>Help shape the future of Filmmaking in Nigeria.
              For sponsorship and partnership, <br /> please contact: <br />
              <Link to="mailto:thisisfilminthepark@gmail.com">
                <div className='flex items-center gap-2'>
                  <FaEnvelope className='text-red-400' />
                  <p>thisisfilminthepark@gmail.com</p>
                </div>
              </Link>
              </p>
          </div>
        </div>
        <div className='md:w-1/3 flex flex-col gap-20'>
          <div className='space-y-5'>
            <h1 className='text-2xl font-bold uppercase'>Submit a Film</h1>
            <p>YOUR story deserves to be seen and your perspective celebrated.
              Are you a filmmaker looking to showcase life through your eyes?
              Submit your masterpiece here</p>
            <Arrow2 />
          </div>
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold uppercase'>Join the Team</h1>
            <p>FLIP needs YOUR unique skills to make the dream come alive.
              If you possess any of the skills listed below <br />
              - <b>Graphic Designer</b> <br />
              - <b>Partnerships and Sponsorships Facilitator Manager</b> <br />
              - <b>Social Media Manager</b> <br />
              - <b>Video Editor</b>
              <br />
              <br />
               <Link to='https://www.instagram.com/officialfilminthepark_?igsh=MW0yaDdyM3F4Y2Y2OQ=='><button className='rounded-2xl px-3 bg-blue-500 text-white capitalize cursor-pointer active:bg-blue-900 hover:bg-blue-700'>click here</button></Link>   to be a part of our Volunteers. <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default GetInvolved;
