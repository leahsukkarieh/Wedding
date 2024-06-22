import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[140px] md:pb-[140px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{fontFamily: "Black Gold"}}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center flex flex-col items-center"
                data-wow-delay=".2s"
              >
                <Image 
                  src='/images/hero/first-page.jpg'
                  alt='couple'
                  className="2-[70%] lg:w-[65%] mb-8"
                />
                <h1 
                  className="mb-5 leading-tight text-black text-4xl md:text-5xl"
                  >
                  Mohamad 
                  <span style={{fontFamily: "Lucida"}}>{" "}&{" "}</span>
                  Tala
                </h1>
                <p className="mb-5 text-lg !leading-relaxed text-dark md:text-xl font-medium">
                  together with their families, request the honor of your presence at the celebration of their marriage. 
                </p>
                <p className="text-2xl !leading-relaxed text-dark md:text-3xl font-bold">
                  Saturday July 13, 2024 
                </p>
                <p className="text-2xl !leading-relaxed text-dark md:text-3xl font-bold">
                  7:30 PM 
                </p>
                <p 
                  className="text-lg !leading-relaxed text-dark md:text-xl font-medium"
                  style={{cursor: 'pointer'}}
                >
                  <Link
                    href='/directions'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Le Palmier Venue 
                    <p>Rmeileh</p> 
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] rotate-180">
          <Image 
              src='/images/hero/bottom.png'
              alt='hearts'
              className="hidden lg:visible"
              width={200}
            />
          </div>
          <div className="absolute bottom-0 left-0 z-[-1] -translate-x-[20%]">
          <Image 
              src='/images/hero/top.png'
              alt='circles'
              className="hidden lg:visible"
              width={200}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
