import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'

const Home = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div>
        <NavBar setShowLogin={setShowLogin}/>
        <HeroSection/>
        <FeaturedSection/>
    </div>
  )
}

export default Home