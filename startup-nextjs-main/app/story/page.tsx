import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "From the day we met to tying the knot",
};

const StoryPage = () => {
  return (
    <>
      <section id="story" className="relative z-10 overflow-hidden bg-white pb-16 pt-[140px] md:pb-[140px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]" style={{fontFamily: "Gold Black"}}>
        <div className="container">
          <div id="timeline-row-1" className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
              <Image 
                src='/images/story/heart.png'
                alt='heart'
                width={30}
              />
              <div className="h-full border-l border-dotted border-dark mt-2"></div>
            </div>
            <div className="flex flex-col justify-center items-center mb-8">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Our hearts speak the same language</h1>
                <Image
                  src='/images/story/one.jpg'
                  alt='photo of a couple'
                  className="rounded-sm shadow-md"
                  width={400}
                />
            </div>
          </div>
          <div id="timeline-row-2" className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
                <Image 
                  src='/images/story/heart.png'
                  alt='heart'
                  width={30}
                />
              <div className="h-full border-l border-dotted border-dark mt-2"></div>
            </div>
            <div className="flex flex-col justify-center items-center mb-8">
              <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Falling in love all over again</h1>
              <Image
                src='/images/story/two.jpg'
                alt='photo of a couple'
                className="rounded-sm shadow-md"
                width={400}
              />
           </div>
          </div>
          <div id='timeline-row-3' className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
                  <Image 
                    src='/images/story/heart.png'
                    alt='heart'
                    width={30}
                  />
                <div className="h-full border-l border-dotted border-dark mt-2"></div>
              </div>
            <div className="flex flex-col justify-center items-center mb-8">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Your smile makes me smile</h1>
                <Image
                  src='/images/story/three.jpg'
                  alt='photo of a couple'
                  className="rounded-sm shadow-md"
                  width={400}
                />
            </div>
           </div>
           <div id='timeline-row-4' className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
                  <Image 
                    src='/images/story/heart.png'
                    alt='heart'
                    width={30}
                  />
                <div className="h-full border-l border-dotted border-dark mt-2"></div>
              </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Forever type of love</h1>
                <Image
                  src='/images/story/four.jpg'
                  alt='photo of a couple'
                  className="rounded-sm shadow-md"
                  width={400}
                />
            </div>
           </div>
           <div id='timeline-row-5' className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
                  <Image 
                    src='/images/story/heart.png'
                    alt='heart'
                    width={30}
                  />
                <div className="h-full border-l border-dotted border-dark mt-2"></div>
              </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">We have forever to go</h1>
                <Image
                  src='/images/story/five.jpg'
                  alt='photo of a couple'
                  className="rounded-sm shadow-md"
                  width={400}
                />
            </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default StoryPage;
