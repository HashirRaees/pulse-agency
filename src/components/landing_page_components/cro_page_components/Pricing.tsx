import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <>
      <main className="mx-auto md:mt-0 mt-10 flex flex-col w-full items-center px-4 py-10 md:w-[1300px] md:gap-8 md:px-0 md:py-20">
        {/* heading */}
        <div className="md:w-[1200px] w-full h-[80px] md:h-[50px] flex items-center justify-center">
          <h1 className="md:text-8xl uppercase text-3xl font-bold">Pricing Transparency</h1>
        </div>

        {/* content */}
        <div className="h-[500px] flex flex-col md:flex-row w-full">
          {/* left image */}
          <div className="md:w-[46%] h-[50%] flex justify-left items-center md:h-full w-full border-2 md:border-l-0 border-white">
            <Image
              src={"/images/cro_page_images/pricing.jpg"}
              height={100}
              width={570}
              alt=""
              className="md:mr-3 h-[88%] w-[95%] object-cover"
            >
            </Image>
          </div>
          {/* right text */}
          <div className="md:w-[54%] p-10 flex justify-center flex-col h-[50%] md:h-full w-full border-2 md:border-r-0 border-white">
            <h2 className="text-xl">Our pricing is customized according to your website traffic, project complexity, and specific business goals.
              We don’t believe in one-size-fits-all plans — instead, we tailor our approach to fit your needs.
              Whether you're a startup or an established brand, we align pricing with the value we deliver.
              Most of our clients experience a return on investment (ROI) of 3 to 5 times within just 60 days.
              This rapid ROI highlights the effectiveness of our strategies and execution.
              We focus on driving results that match your business objectives.
              Let’s build a solution that scales with your growth.
            </h2>
            <ul className="text-md md:text-xl mt-4">
              <li className="mb-2">
                <span className="text-center text-3xl text-blue-500">. </span>Find
                Out What is Holding Your Website Back
              </li>
              <li className="mb-2">
                <span className="text-center text-3xl text-blue-500">. </span>
                Discover Hidden Opportunities to Increase Traffic
              </li>
              <li className="mb-2">
                <span className="text-center text-3xl text-blue-500">. </span>
                Start Dominating Search Results—With Pulse!
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
export default Pricing;