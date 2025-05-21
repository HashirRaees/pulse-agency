import React from "react";
import Image from "next/image";

const PulseDifferent = () =>{
    return(
        <>
      <main
      className="mx-auto flex w-full flex-col-reverse flex-wrap items-center md:justify-start justify-center px-4 py-10 md:w-[1200px] md:flex-row md:px-0"
    >
      <div className="flex flex-col gap-4 text-left md:w-[50%]">
        <h2 className="mt-5 text-xl font-bold tracking-wide md:mb-3 md:mt-0 md:text-5xl">
          What makes Pulse different
        </h2>

        <ul className="text-md md:text-xl">
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>Proven
           Proprietary testing methodology
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
            Niche-specific experience
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
           Faster turnaround or results timelines
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
            Backed by DTC operators
          </li>
          <li className="mb-2">
            <span className="text-center text-3xl text-blue-500">. </span>
            Full-funnel integration with Meta, Google, etc
          </li>
        </ul>
      </div>

      <div
       className="mt-8 flex w-full justify-center md:mt-0 md:w-[48%]">
        <Image
          src={"/images/seo_page_images/seo-opt.png"}
          width={550}
          height={460}
          alt=""
          className="rounded-3xl"
        />
      </div>
    </main>
        </>
    )
}
export default PulseDifferent;