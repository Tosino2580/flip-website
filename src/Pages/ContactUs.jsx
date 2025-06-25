import React from 'react'
import Footer from '../component/Footer'
import { IoChatbubble } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { CiTwitter } from 'react-icons/ci'
import { BsInstagram } from 'react-icons/bs'
import { TbPhoneCall } from 'react-icons/tb'

const ContactUs = () => {
  return (
    <div className='mt-25 bg-[linear-gradient(180deg,_rgba(220,240,255,1)_0%,_white_40%,_white_60%,_rgba(225,240,255,1)_100%)] font-serif'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-10  md:px-25 pt-10'>
        <div className='w-80 md:w-2/3 flex flex-col gap-10 md:ml-18 items-center mt-3 md:sticky md:top-28 md:self-start md:h-max'>
          <h1 className='text-2xl md:text-4xl font-extrabold'>Contact the FLIP Team</h1>
          <p className='text-xl'>Thank you for your interest in <b>Film in the Park (FLIP)</b>. We value clear communication and are always open to hearing fro  our audience, partners, and supporters. Whether you have a question about the event, are interested in collaboration opportunities, or simply wish to connect with our team, we welcome your outreach.</p>
          <p className='text-xl'>Feel free to reach out to us via phone ot through our socail media platforms. Every message is important to us, and we strive to respond promptly and professionally.</p>
          <p className='text-xl'>We look forward to connecting with you and continuing to build a vibrant and inclusive FLIP experience for all.</p>
        </div>
        <div>
          <img className='w-full rounded-2xl mt-10 md:mt-0' src="/src/assets/customer-service-representative.jpg" alt="" />
          <div className='grid grid-cols-1 md:grid-cols-2 mt-15 gap-9'>
            <div className='flex flex-col gap-3 py-5 px-4 bg-[linear-gradient(180deg,_rgba(220,240,255,1)_0%,_white_40%,_white_60%,_rgba(225,240,255,1)_100%)] rounded-xl hover:shadow-gray-700'>
              <IoChatbubble size={'40px'} className=' px-1 bg-blue-500 text-white rounded-xl ' />
              <div>
                <h1 className='font-extrabold text-md md:text-xl'>Chat to Support</h1>
                <p className='text-gray-600 text-sm'>We are here to help</p>
              </div>
              <Link to="mailto:thisisfilminthepark@gmail.com">
                <p className="text-blue-700 font-bold">thisisfilminthepark@gmail.com</p>
              </Link>
            </div>
            <div className='flex flex-col gap-3 py-5 px-4 bg-[linear-gradient(180deg,_rgba(220,240,255,1)_0%,_white_40%,_white_60%,_rgba(225,240,255,1)_100%)] rounded-xl hover:shadow-gray-700'>
              <CiTwitter size={'40px'} className=' px-1 bg-blue-500 text-white rounded-xl ' />
              <div>
                <h1 className='font-extrabold  text-md md:text-xl'>Follow us on Twitter</h1>
                <p className='text-gray-600 text-sm'>Tweet us</p>
              </div>
              <Link to={'https://x.com/Filminthepark?t=FxniPReY-r5H1F0wSA3FUQ&s=09'}>
                <p className="text-blue-700 font-bold">@Filminthepark</p>
              </Link>
            </div>
            <div className='flex flex-col gap-3 py-5 px-4 bg-[linear-gradient(180deg,_rgba(220,240,255,1)_0%,_white_40%,_white_60%,_rgba(225,240,255,1)_100%)] rounded-xl hover:shadow-gray-700'>
              <BsInstagram size={'40px'} className=' px-2 bg-blue-500 text-white rounded-xl ' />
              <div>
                <h1 className='font-extrabold text-md md:text-xl'>Follow us on Instagram</h1>
                <p className='text-gray-600 text-sm'>Send a DM to us</p>
              </div>
              <Link to={'https://www.instagram.com/officialfilminthepark_?igsh=MW0yaDdyM3F4Y2Y2OQ=='}>
                <p className="text-blue-700 font-bold">@officialfilminthepark_</p>
              </Link>
            </div>
            <div className='flex flex-col gap-3 py-5 px-4 bg-[linear-gradient(180deg,_rgba(220,240,255,1)_0%,_white_40%,_white_60%,_rgba(225,240,255,1)_100%)] rounded-xl hover:shadow-gray-700'>
              <TbPhoneCall size={'40px'} className=' px-1 bg-blue-500 text-white rounded-xl ' />
              <div>
                <h1 className='font-extrabold text-md md:text-xl'>Call us for more inquires</h1>
                <p className='text-gray-600 text-sm'>Mon-Fri from 8am to 6pm</p>
              </div>
              <Link to="tel:+2348144893978">
                <p className="text-blue-700 font-bold">+234 814 489 3978</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
