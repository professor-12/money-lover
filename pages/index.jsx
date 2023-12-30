import React from 'react'
import Header from "@/components/Header/Header"
import Hero from '@/components/Hero'
import Stat from '@/components/Stat'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'
import Comments from '@/components/Comments'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <div className='container mx-auto px-2  lg:w-[73%]'>
      <Header />
      <Hero />
      <Stat />
      <Pricing />
      <Features />
      <Comments />
      <Footer/>
    </div>
  )
}
export default index