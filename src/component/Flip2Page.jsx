import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Flip2 from '/src/assets/images/flip-2.0-event.jpg'
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Flip2Page = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const targetDate = new Date("September 21, 2025 16:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setEventStarted(true);
        runConfetti(); // 🎉 Trigger confetti when countdown hits zero
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const runConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = ['#BB0000', '#ffffff', '#0000BB', '#FFD700', '#00C853'];

    const confettiInterval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(confettiInterval);
        return;
      }

      confetti({
        particleCount: 80,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors,
      });
    }, 250);
  };

  return (
    <div className="bg-white text-gray-800 mt-25 ">
      <div className='flex flex-col md:flex-row gap-4 px-2  md:px-5 py-2 md:py-6'>
        <img src={Flip2} alt="" className='w-[700px] rounded-2xl' />
        <div className='flex flex-col items-center justify-center'>

        {/* Hero Section */}
        <section className=" text-black py-4 px-10 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">FLIP 2.0 – A SABI Experience</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Film. Friends. Freedom. This is more than an event – it's a celebration of creativity, culture, and connection in the heart of Lagos.
          </p>
        </section>

        {/* Countdown Section */}
        <section className="bg-yellow-50 py-12 px-6 text-center">
          {eventStarted ? (
            <div className="text-2xl font-bold text-green-600 animate-bounce">
              🎉 FLIP 2.0 is LIVE! Let the SABI Experience Begin! 🎉
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">⏳ Countdown to FLIP 2.0</h2>
              <div className="flex justify-center gap-4 text-center text-blue-900 font-semibold text-xl">
                <div className="bg-white shadow rounded-lg px-4 py-2">
                  <div>{timeLeft.days}</div>
                  <span className="text-sm text-gray-500">Days</span>
                </div>
                <div className="bg-white shadow rounded-lg px-4 py-2">
                  <div>{timeLeft.hours}</div>
                  <span className="text-sm text-gray-500">Hours</span>
                </div>
                <div className="bg-white shadow rounded-lg px-4 py-2">
                  <div>{timeLeft.minutes}</div>
                  <span className="text-sm text-gray-500">Minutes</span>
                </div>
                <div className="bg-white shadow rounded-lg px-4 py-2">
                  <div>{timeLeft.seconds}</div>
                  <span className="text-sm text-gray-500">Seconds</span>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Event Info */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6"> What to Expect</h2>
          <ul className="space-y-4 text-lg font-bold">
            <li>✅ classic film screenings under the stars</li>
            <li>✅ Live music & open mic sessions</li>
            <li>✅ Art showcases from talented creatives</li>
            <li>✅ A community of dreamers, storytellers, and vibe-bringers</li>
          </ul>

          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold">🗓️ Saturday, 21st September</h3>
            <p className="text-lg mt-1">📍 Freedom Park, Lagos — 4PM till late</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-100 py-12 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">🎟️ Ready to Experience It?</h2>
          <p className="text-lg mb-6">Grab your tickets now before it sells out!</p>
          <a
            href="https://tix.africa/flip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
          >
            Get Your Ticket →
          </a>
        </section>

        {/* Contact & Sponsorship */}
        <section className="py-10 px-6 text-center">
          <h3 className="text-xl font-semibold mb-2">📞 Sponsorships or Partnerships?</h3>
          <p className="text-lg">Call us: <Link to="tel:+2348144893978"><span className="font-medium">0814 489 3978</span></Link>  or <Link to="tel:+2349066065870"><span className="font-medium">0906 606 5870</span></Link></p>
        </section>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Flip2Page;
