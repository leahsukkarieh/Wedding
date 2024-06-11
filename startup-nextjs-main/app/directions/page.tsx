import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Directions",
  description: "Get Directions to Le Palmier Venue",
};

const DirectionsPage = () => {
  return (
    <>
      <section id="directions" className="relative z-10 overflow-hidden bg-white pb-16 pt-[140px] md:pb-[140px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]" style={{fontFamily: "Gold Black"}}>
        <div className="container flex flex-col justify-center items-center">
            <p className="text-2xl text-dark italic m-5">
                Join us for a day filled with love, laughter, and happily ever after.
            </p>
            <Link 
              href='https://maps.app.goo.gl/x7Dg9DmBwSGaWW8K8'
              target="_blank"
              rel='noopener noreferrer'
              className="rounded-md bg-black text-white text-2xl md:text-lg p-4 mt-5 md:mt-2"
            >
                Get Directions
            </Link>
        </div>
      </section>
    </>
  );
};

export default DirectionsPage;
