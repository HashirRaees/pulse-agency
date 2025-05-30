import React from "react";
import Image from "next/image";
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill } from "@remixicon/react"

const Team = () => {
    return (
        <>
            <main className="mx-auto flex flex-col w-full md:gap-12 md:mb-10 gap-6 px-4 py-10 md:w-[1200px] md:px-0 md:py-0">
                <div>
                    <h1 className="mb-3 text-center text-3xl font-bold tracking-wide md:text-5xl">
                        <span className="block md:inline">Our Team</span>
                    </h1>
                </div>
                <div className="md:h-[570px] h-[1240px] flex flex-col md:flex-row w-full justify-between ">
                    {/* Team 1 */}
                    <div className="md:h-full h-[400px] flex gap-1 md:gap-2 items-center flex-col md:w-[30%] ">
                        {/* image */}
                        <div className="md:h-[320px] h-[200px] flex justify-center">
                            <Image
                                src={"/images/cro_page_images/ian-pic.png"}
                                height={200}
                                width={160}
                                alt="ian-pic"
                                className="md:h-[320px] md:w-[250px] "
                            >
                            </Image>
                        </div>
                        {/* headings */}
                        <h1 className="md:text-3xl text-xl md:mt-0 mt-2 -mb-2 font-bold uppercase">Ian Slater</h1>
                        <h1 className="md:text-2xl text-lg -mb-1 font-bold uppercase">Founder</h1>
                        {/* icons */}
                        <div className="md:h-[50px] w-full flex items-center justify-center gap-1 ">
                            <RiFacebookCircleFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiFacebookCircleFill>
                            <RiInstagramLine size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiInstagramLine>
                            <RiLinkedinFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiLinkedinFill>
                        </div>
                        {/* signature */}
                        <Image
                            src={"/images/cro_page_images/sign.png"}
                            height={200}
                            width={100}
                            alt="sign"
                            className="md:h-[200px] w-[200px]"
                        >
                        </Image>
                    </div>

                    {/* Team 2 */}
                    <div className="md:h-full h-[400px] flex gap-1 md:gap-2 items-center flex-col md:w-[30%] ">
                        {/* image */}
                        <div className="md:h-[320px] h-[200px] flex justify-center">
                            <Image
                                src={"/images/cro_page_images/ian-pic.png"}
                                height={200}
                                width={160}
                                alt="ian-pic"
                                className="md:h-[320px] md:w-[250px] "
                            >
                            </Image>
                        </div>
                        {/* headings */}
                        <h1 className="md:text-3xl text-xl md:mt-0 mt-2 -mb-2 font-bold uppercase">Ian Slater</h1>
                        <h1 className="md:text-2xl text-lg -mb-1 font-bold uppercase">Founder</h1>
                        {/* icons */}
                        <div className="md:h-[50px] w-full flex items-center justify-center gap-1 ">
                            <RiFacebookCircleFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiFacebookCircleFill>
                            <RiInstagramLine size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiInstagramLine>
                            <RiLinkedinFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiLinkedinFill>
                        </div>
                        {/* signature */}
                        <Image
                            src={"/images/cro_page_images/sign.png"}
                            height={200}
                            width={100}
                            alt="sign"
                            className="md:h-[200px] w-[200px]"
                        >
                        </Image>
                    </div>

                    {/* Team 3 */}
                    <div className="md:h-full h-[400px] flex gap-1 md:gap-2 items-center flex-col md:w-[30%] ">
                        {/* image */}
                        <div className="md:h-[320px] h-[200px] flex justify-center">
                            <Image
                                src={"/images/cro_page_images/ian-pic.png"}
                                height={200}
                                width={160}
                                alt="ian-pic"
                                className="md:h-[320px] md:w-[250px] "
                            >
                            </Image>
                        </div>
                        {/* headings */}
                        <h1 className="md:text-3xl text-xl md:mt-0 mt-2 -mb-2 font-bold uppercase">Ian Slater</h1>
                        <h1 className="md:text-2xl text-lg -mb-1 font-bold uppercase">Founder</h1>
                        {/* icons */}
                        <div className="md:h-[50px] w-full flex items-center justify-center gap-1 ">
                            <RiFacebookCircleFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiFacebookCircleFill>
                            <RiInstagramLine size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiInstagramLine>
                            <RiLinkedinFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiLinkedinFill>
                        </div>
                        {/* signature */}
                        <Image
                            src={"/images/cro_page_images/sign.png"}
                            height={200}
                            width={100}
                            alt="sign"
                            className="md:h-[200px] w-[200px]"
                        >
                        </Image>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Team;