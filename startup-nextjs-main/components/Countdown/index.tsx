"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const Countdown = () => {

  const targetDate = new Date('2024-07-13T19:30:00');

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <section id="countdown" className="bg-blockout pb-16" style={{fontFamily: 'Black Gold'}}>
        <div className="container py-24 md:py-0">
          <div className="flex justify-end px-0 md:px-16">
            <Image
              src="/images/countdown/rings.png"
              alt="wedding rings"
              className="w-[70px] md:w-[100px]"
            />
           </div>
           <div 
              className="flex justify-center items-center px-16"
              style={{fontFamily: "Times New Roman"}}
            >
            <div className="text-center mr-8">
               <h1 className="text-white text-3xl md:text-6xl font-medium">{countdown.days}</h1>
               <p className="text-white text-lg">days</p>
            </div>
            <div className="text-center mr-8">
               <h1 className="text-white text-3xl md:text-6xl font-medium">{countdown.hours}</h1>
               <p className="text-white text-lg">hours</p>
            </div>
            <div className="text-center mr-8">
               <h1 className="text-white text-3xl md:text-6xl font-medium">{countdown.minutes}</h1>
               <p className="text-white text-lg">minutes</p>
            </div>
            <div className="text-center">
               <h1 className="text-white text-3xl md:text-6xl font-medium">{countdown.seconds}</h1>
               <p className="text-white text-lg">seconds</p>
            </div>
           </div>
           <div className="flex justify-start px-0 md:px-16">
            <Image
              src="/images/countdown/rings.png"
              alt="wedding rings"
              className="w-[70px] md:w-[100px]"
            />
           </div>
        </div>
      </section>
    </>
  );
};

export default Countdown;