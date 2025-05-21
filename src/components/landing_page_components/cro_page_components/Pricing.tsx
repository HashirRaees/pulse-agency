import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <main className="mx-auto flex w-full md:flex-row flex-col items-center md:bg-[96%] bg-cover justify-between md:justify-end  gap-12 px-4 py-10 md:w-[1200px] md:gap-0 md:px-0 md:py-20">
        {/* Image on the left */}
      <div className="mt-8 flex w-full justify-center md:mt-0 md:w-[55%]">
        <Image
          src={"/images/seo_page_images/google-anylatics.jpg"}
          width={650}
          height={650}
          alt=""
          className="rounded-xl"
        />
      </div>

      {/* Text on the right */}
      <div className="flex flex-col gap-2 text-left md:ml-10 md:w-auto md:gap-4">
        <h2 className="mb-3 text-xl font-bold tracking-wide md:text-5xl">
         Pricing Transparency
        </h2>
        <h2 className="pl-2 md:text-xl font-bold">“Custom pricing based on traffic, complexity, and business goals. <br />
        Most clients see 3–5x ROI within the first 60 days.”</h2>
        <ul className="text-md md:text-xl mt-5">
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
            Free audit
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
           Money-back or satisfaction guarantee (if applicable)
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
           Performance-based pricing (if offered)
          </li>
        </ul>
      </div>
    </main>
  )}
export default Pricing;