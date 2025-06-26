import React from 'react';
import Flip from "/src/assets/flip_12-removebg-preview.png"
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import NewsletterCTA from './Newsletter';

function Footer() {
  return (
    <div className='bg-blue-500 py-5 md:py-10 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:px-17 pl-4 '>
        <div className=" flex flex-col items-start md:items-start ">
          <h1 className="text-xl md:text-2xl font-extrabold text-white">Sign up for your Newsletter</h1>
          <p className="w-3/4 md:w-4/5 text-sm md:text-lg text-white">
            Sign up for our newsletter and get updates on our latest events!
          </p>
          <NewsletterCTA />
        </div>
        <div className='mb-4 mr-[-1]  mt-10 md:mt-0 flex flex-col items-start md:items-center justify-center'>
          <Link to={'/'}>
            <h1 className='text-3xl font-extrabold text-white text-center mb-10 hidden md:block md:mr-7 '>FLIP</h1>
          </Link>
          <ul className='flex flex-col gap-2 md:gap-2 mr-[-0px]  '>
            <li className='text-white md:text-lg hover:text-blue-900 cursor-pointer'><Link to={'/about us'}>About us</Link></li>
            <li className='text-white md:text-lg hover:text-blue-900 cursor-pointer'><Link to={'/gallery'}>Gallery</Link></li>
            <li className='text-white md:text-lg hover:text-blue-900 cursor-pointer'><Link to={'/get involved'}>Get Involved</Link></li>
            <li className='text-white md:text-lg hover:text-blue-900 cursor-pointer'><Link to={'/contact us'}>Contact us</Link></li>
          </ul>
        </div>
        <div className='space-y-4 mb-10 md:mb-0 flex flex-col items-start md:items-center justify-center'>
          <h1 className='text-lg font-semibold text-white hidden md:block md:mr-4'>Follow us</h1>
          <div className='flex gap-3'>
            <Link to={'https://www.instagram.com/officialfilminthepark_?igsh=MW0yaDdyM3F4Y2Y2OQ=='}><FaInstagram className='text-3xl text-white hover:text-blue-900' /></Link>
            <Link to={'https://x.com/Filminthepark?t=FxniPReY-r5H1F0wSA3FUQ&s=09'}><FaTwitter className='text-3xl text-white hover:text-blue-900' /></Link>
            <Link to={'https://www.facebook.com/profile.php?id=61557962266192&mibextid=ZbWKwL'}><FaFacebook className='text-3xl text-white hover:text-blue-900' /></Link>


          </div>
        </div>
      </div>
      <div className='text-center text-sm text-white mt-5'>
        <p>&copy;{new Date().getFullYear()}FLIP . All right Reserved</p>
      </div>

    </div>
  );
}

export default Footer;
