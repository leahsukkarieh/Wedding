"use client"
import React, { useState, useEffect } from 'react';

const DatesVenue = () => {
  const targetDate = new Date('2024-07-12T23:59:59');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      // If the target date has passed, set the countdown to 0
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateTimeRemaining());

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
    });

  return (
    <>
      <section id="countdown" className="py-2 md:py-8 lg:py-16">
        <div 
          className="container flex flex-col justify-center items-center"
          style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
          >
          <div className='flex flex-col justify-center items-center'>
            <div className='flex'>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-3xl text-black">
                  {countdown.days}
                </p> 
                <p className="text-center font-normal text-sm">
                  Days
                </p>
              </div>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-3xl text-black">
                  {countdown.hours}
                </p> 
                <p className="text-center font-normal text-sm">
                  Hours
                </p>
              </div>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-3xl text-black">
                  {countdown.minutes}
                </p> 
                <p className="text-center font-normal text-sm">
                  Minutes
                </p>
              </div>
              <div
                className="wow fadeInUp hover:shadow-two group relative overflow-hidden rounded bg-gray-200 bg-opacity-75 shadow-one duration-300 p-5 md:p-8"
                data-wow-delay=".1s"
                style={{marginRight:"6px", width: "27%"}}
              >
                <p className="text-center font-semibold text-3xl text-black">
                  {countdown.seconds}
                </p> 
                <p className="text-center font-normal text-sm">
                  Seconds
                </p>
              </div>
            </div>
            <p
             className="text-lg !leading-relaxed text-blue md:text-md mt-4 italic"
              style={{ fontFamily: 'Libre Franklin, Helios Extended, sans-serif' }}
            >
              until our big day
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DatesVenue;
