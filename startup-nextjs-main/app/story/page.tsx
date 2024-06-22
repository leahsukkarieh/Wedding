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
              <img
                src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/heart.png?updatedAt=1719099100051'
                width={30}
              />
              <div className="h-full border-l border-dotted border-dark mt-2"></div>
            </div>
            <div className="flex flex-col justify-center items-center mb-8">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Our hearts speak the same language</h1>
                <img
                  src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/one.jpg?updatedAt=1719099102320'
                  className="rounded-sm shadow-md"
                  width={400}
                />
            </div>
          </div>
          <div id="timeline-row-2" className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
              <img
                src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/heart.png?updatedAt=1719099100051'
                width={30}
              />
              <div className="h-full border-l border-dotted border-dark mt-2"></div>
            </div>
            <div className="flex flex-col justify-center items-center mb-8">
              <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Falling in love all over again</h1>
              <img 
                src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/two.jpg?updatedAt=1719099103114'
                className="rounded-sm shadow-md"
                width={400}
              />
           </div>
          </div>
          <div id='timeline-row-3' className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
              <img
                src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/heart.png?updatedAt=1719099100051'
                width={30}
              />
                <div className="h-full border-l border-dotted border-dark mt-2"></div>
              </div>
            <div className="flex flex-col justify-center items-center mb-8">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Your smile makes me smile</h1>
                <img
                  src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/three.jpg?updatedAt=1719099103760'
                  className="rounded-sm shadow-md"
                  width={400}
                />
            </div>
           </div>
           <div id='timeline-row-4' className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
              <img
                src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/heart.png?updatedAt=1719099100051'
                width={30}
              />
                <div className="h-full border-l border-dotted border-dark mt-2"></div>
              </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">Forever type of love</h1>
                <img
                  src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/four.jpg?updatedAt=1719099103278'
                  className="rounded-sm shadow-md"
                  width={400}
                />
            </div>
           </div>
           <div id='timeline-row-5' className="flex justify-center w-full">
            <div id='timeline' className="flex flex-col items-center">
              <img
                src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/heart.png?updatedAt=1719099100051'
                width={30}
              />
                <div className="h-full border-l border-dotted border-dark mt-2"></div>
              </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-2xl font-bold mt-4 mb-4">We have forever to go</h1>
                <img 
                  src='https://ik.imagekit.io/nh7xswppky/Wedding/images/story/five.jpg?updatedAt=1719099100887'
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
