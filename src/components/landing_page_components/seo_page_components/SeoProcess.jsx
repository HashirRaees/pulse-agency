import Image from "next/image";
import React from "react";

const SeoProcess = () => {
  return (
    <main className="mt-10 w-full px-6 py-16 md:mx-auto md:mt-0 md:w-[1200px] md:px-0">
      <div>
        <h1 className="mb-3 text-center text-xl font-bold tracking-wide md:text-5xl">
          <span className="block md:inline">The Pulse SEO Process:</span>
          <span className="block md:inline">How We Work</span>
        </h1>
      </div>
      <div className="mt-8 md:mt-20 flex flex-wrap items-center justify-between md:justify-center gap-3 px-4 md:gap-6 md:px-0">
           {/* First row */}
           <div className="flex w-full flex-wrap justify-center md:gap-6 gap-6">
          {/* card one  */}
          <div className="border-1 cursor-pointer transition duration-400 hover:scale-105 flex min-h-[50px] text-center w-full justify-center items-center flex-col gap-3 rounded-2xl border bg-opacity-10 p-5 md:p-4 bg-transparent md:min-h-[240px] md:w-[27%]">
            {/* <div className="w-full flex h-[10px]">01</div> */}
         <Image 
         src={"/images/seo_page_images/audit.png"} 
         height={10}
         width={100} 
         alt="seo-audit"
         className="invert">
         </Image>
         <h2>Free Seo Audit<br />(No String Attached!)</h2>
          </div>

          {/* card two  */}
          <div className="border-1 cursor-pointer transition duration-400 hover:scale-105 flex min-h-[50px] text-center w-full flex-col justify-center items-center gap-3 rounded-2xl border bg-opacity-10 p-5 bg-transparent md:min-h-[240px] md:w-[27%]">
          {/* <div className="w-full flex h-[10px]">02</div> */}
         <Image 
         src={"/images/seo_page_images/development.png"} 
         height={10}
         width={100} 
         alt="strategy-development"
         className="invert">
         </Image>
         <h2>Strategy Development Tailored<br /> to your Business</h2>
          </div>

          {/* card three  */}
          <div className="border-1 cursor-pointer transition duration-400 hover:scale-105 flex min-h-[50px] text-center w-full flex-col justify-center items-center gap-3 rounded-2xl border  bg-opacity-10 p-5 bg-transparent md:min-h-[240px] md:w-[27%]">
          {/* <div className="w-full flex h-[10px]">03</div> */}
         <Image 
         src={"/images/seo_page_images/optimize.png"} 
         height={10}
         width={100} 
         alt="optimization"
         className="invert">
         </Image>
         <h2>On-Page & Technical <br />Optimization</h2>
          </div>
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Second row */}
        <div className="md:mt-5 mt-3 flex w-full flex-wrap justify-between md:justify-center gap-6 md:gap-6">
          {/* card four */}
          <div className="border-1 cursor-pointer transition duration-400 hover:scale-105 flex min-h-[50px] text-center w-full flex-col justify-center items-center gap-3 rounded-2xl border bg-opacity-10 p-5 bg-transparent md:min-h-[240px] md:w-[27%]">
          {/* <div className="w-full flex h-[10px]">04</div> */}
         <Image 
         src={"/images/seo_page_images/link.png"} 
         height={10}
         width={100} 
         alt="link building"
         className="invert">
         </Image>
         <h2>Content Creation &<br />Link Building</h2>
          </div>

          {/* card five */}
          <div className="border-1 cursor-pointer transition duration-400 hover:scale-105 flex min-h-[50px] text-center w-full flex-col justify-center items-center gap-3 rounded-2xl border bg-opacity-10 p-5 bg-transparent md:min-h-[240px] md:w-[27%]">
          {/* <div className="w-full flex h-[10px]">05</div> */}
         <Image 
         src={"/images/seo_page_images/performance.png"} 
         height={10}
         width={100} 
         alt="seo-audit"
         className="">
         </Image>
         <h2>Performance Tracking and<br />Contiunous Improvement</h2>
          </div>
        </div>
        {/* <img
          src="/images/seo_page_images/seo-process.gif"
          alt="seo process"
          className="w-full md:w-[60%] lg:w-[65%] xl:w-[65%]"
        /> */}
      </div>
    </main>
  );
};

export default SeoProcess;
