import React from 'react'
import LearnMore from './LearnMore'

const Offer = () => {
  return (
    <div className='w-[80%] mx-auto mt-32'>
        <h1 className='text-6xl mb-8 text-right'>WHAT WE OFFER</h1>
        <div className='border-t-2 pt-8 border-black'>
            <div className='grid grid-cols-4'>
                <div className='flex flex-col justify-between pb-5 pr-5 border-r-2 border-b-2 border-black h-40'>
                    <h1 className='font-semibold'>REAL ESTATE LISTINGS</h1>
                    <p>Handpicked properties tailored to your needs.</p>
                    <LearnMore />
                </div>
                <div className='flex flex-col justify-between pb-5 border-r-2 border-b-2 border-black h-40' />
                <div className='flex flex-col justify-between pb-5 px-5 border-r-2 border-b-2 border-black h-40'>
                    <h1 className='font-semibold'>ARCHITECTURAL DESIGN</h1>
                    <p>Unique and sustainable solutions.</p>
                    <LearnMore />
                </div>
                <div className='flex flex-col justify-between pb-5 border-b-2 border-black h-40' />
                <div className='flex flex-col justify-between pb-5 border-r-2 border-black h-40' />
                <div className='flex flex-col justify-between p-5 pb-0 border-r-2 border-black h-40'>
                    <h1 className='font-semibold'>INTERIOR DESIGN</h1>
                    <p>Luxury interiors customized for your Lifestyle.</p>
                    <LearnMore />
                </div>
                <div className='flex flex-col justify-between pb-5 border-r-2 border-black h-40' />
                <div className='flex flex-col justify-between p-5 pb-0 h-40'>
                    <h1 className='font-semibold'>CONSULTING SERVICES</h1>
                    <p>Expert advice on property investments</p>
                    <LearnMore />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer