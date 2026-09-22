import React from 'react'
import { assets } from '../assets/assets'

const Cta = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center justify-between px-8 
        max-w-6xl bg-linear-to-r from-[#0558FE] to-[#A9CFFF] max-md:pl-14 overflow-hidden
         rounded-2xl md:mx-auto md:py-4 py-10 mx-3 mb-24 max-lg:mx-4'>
        <div className='text-white'>
          <h2 className='text-3xl font-medium'>Do you own a luxury Car</h2>
          <p className='mt-2'> Monetize your vehicle effortlessly by listing it on CarRental.</p>
          <p className='max-w-130'>We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
          <button className='px-6 py-2 rounded-lg text-sm mt-4 cursor-pointer text-primary bg-white'>
            List your car
          </button>
        </div>
        <div >
            <img src={assets.banner_car_image} alt="" className='max-h-45 mt-10' />
        </div>
    </div>
  )
}

export default Cta