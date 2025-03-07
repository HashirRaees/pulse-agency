import React from 'react'
import HeroSection from '@/components/landing_page_components/our-work_page_components/HeroSection'
import OurWorkSection from '@/components/landing_page_components/our-work_page_components/OurWorkSection'
import ImagesWorkSection from '@/components/landing_page_components/our-work_page_components/ImagesWorkSection'
import Footer from '@/components/layout/Footer'

const page = () => {
  return (
    <main className='theme_bg_color'>
        <HeroSection/>
        {/* <ImagesWorkSection/> */}
              <div className="relative z-0">
                <Footer/>
              </div>
    </main>
)
}

export default page