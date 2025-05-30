"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
// import { Reveal } from '@/utils/Reveal'
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { motion } from "motion/react";
// import HeroForm from "@/components/landing_page_components/HeroForm";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage:
          "url('/images/cro_page_images/cro-banner-min.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="ct-banner md:pb-[150px] 2xl:pb-0"
    >
      <Navbar />
      <div className="relative mx-auto flex h-[75vh] w-[1200px] flex-row items-center justify-between md:h-[100vh] md:pt-[60px]">
        {/* hero heading  */}
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="-mt-18 w-[50%] flex-col px-8  md:mt-0 md:px-0"
        >
          <div className="mb-2 flex w-auto items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={25}
              height={25}
            />

            <h1 className="md:text-2xl">CRO Services</h1>
          </div>

          {/* heading main  */}

          <h2 className="text-left text-4xl font-bold leading-tight md:text-7xl">
            Conversion Rate <br /> Optimization
          </h2>
          <h2 className="mt-5 text-xs md:text-2xl">Generate 30–70% More Revenue With the Same Traffic</h2>
          <div className="mt-5">
          <Link href={"https://calendly.com/ianpslater/20min"} target="_blank">
          <PrimaryBtn text={"Book now"}/> 
          </Link>
          </div>
        </motion.div>

        {/* hero form  */}
        {/* <motion.div
          initial={{
            scale: 0.1,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="border-1 absolute right-0 z-20 w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
        >
          <HeroForm />
        </motion.div> */}
      </div>
    </main>
  );
};

export default HeroSection;
