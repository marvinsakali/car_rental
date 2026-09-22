import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import Cta from '../components/Cta'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

const Home = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div>
        <NavBar setShowLogin={setShowLogin}/>
        <HeroSection/>
        <FeaturedSection/>
        <Cta/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Home