import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from "../components/CarCard"

const Cars = () => {
  return (
    <div>
      <NavBar/>

      <div className='py-20  bg-light'>
        <Title title="Available cars" subtitle="Browse our selection of premium vehicles available for your next adventure"/>
        <div className='flex gap-2 items-center w-full shadow justify-between   mx-auto rounded-full border h-12 mt-6 max-w-140 px-4 bg-white border-borderColor'>
          <img src={assets.search_icon} className='h-4.5 w-4.5' alt="" />
          <input type="text" className='w-full h-full focus:outline-none text-gray-500' />
          <img src={assets.filter_icon} alt=""  className='h-4.5 w-4.5' />
        </div>
      </div>

      <div className="grid grod-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24 mt-18 xl:px-32">
        {dummyCarData.map((car)=>(
          <div key={car._id}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Cars