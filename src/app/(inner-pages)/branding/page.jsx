import React from 'react'
import HeroSection from '@/components/landing_page_components/branding_page_components/HeroSection';
import PortfolioSection from '@/components/landing_page_components/branding_page_components/PortofolioSection';
import BrandingSection from '@/components/landing_page_components/branding_page_components/BrandingSection';
import DesignServicesSection from '@/components/landing_page_components/branding_page_components/DesignServicesSection';
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';
import Calender from '@/components/Calender/Calender';

const Branding = () => {
  return (
        <main className="theme_bg_color">
            <HeroSection/>
            <PortfolioSection/>
            <BrandingSection/>
            <DesignServicesSection/>
            <Testimonials/>
            <FaqSection/>
            <OurBlog/>
            <Calender/>
            <div className='-mt-52 md:mt-0'>
            <Footer/>
            </div>
        </main>
  )
}

export default Branding