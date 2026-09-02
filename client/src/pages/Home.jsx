import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div>
        <NavBar setShowLogin={setShowLogin}/>
        <HeroSection/>
    </div>
  )
}

export default Home