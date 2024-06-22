import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSVP",
  description: "Confirm your attendance to join us in celebrating our big day!",
};

const RSVPPage = () => {
  return (
    <>
       <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]" style={{fontFamily: "Black Gold"}}>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[700px] rounded bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                  RSVP
                </h3>
                <p className="mb-3 text-center text-lg font-medium text-body-col">
                    Your presence will complete our celebration. Kindly RSVP.
                </p>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full bg-body-color/50 sm:block"></span>
                </div>
                <form action="https://formsubmit.co/talahamami@gmail.com" method="POST">
                <div className="mb-8 w-1/2">
                    <label
                    htmlFor="First Name"
                    className="mb-3 block text-lg text-dark"
                    >
                    First Name
                    </label>
                    <input
                        type="text"
                        name="First Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary mr-5"
                        required
                    />
                </div>
                <div className="mb-8 w-1/2">
                    <label
                    htmlFor="Last Name"
                    className="mb-3 block text-lg text-dark"
                    >
                    Last Name
                    </label>
                    <input
                        type="text"
                        name="Last Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary mr-5"
                        required
                    />
                </div>
                <input type="hidden" name="_subject" value="NEW RSVP"></input>
                <input type="hidden" name="_cc" value="msaidkaissi@gmail.com"></input>
                <div className="flex justify-start">
                    <button 
                        type='submit' 
                        name='ACCEPT'
                        className="rounded-md border-2 border-black p-4 mr-4 hover:bg-black hover:text-white"
                    >
                        ACCEPT
                    </button>
                    <button 
                        type='submit' 
                        name='DECLINE'
                        className="rounded-md border-2 border-black p-4 hover:bg-black hover:text-white"
                    >
                        DECLINE
                    </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RSVPPage;
