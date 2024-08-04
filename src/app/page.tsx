import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import TestimonialCards from '@/components/TestimonialCards'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
     
    </div>
  )
}

export default page
