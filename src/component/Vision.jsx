import React from 'react'
import Architect from '../assets/2.jpg'
import ArchiDesign from '../assets/3.jpg'

const Vision = () => {
  return (
    <div className='w-[80%] mx-auto mt-32'>
        <div className='flex gap-6 border-b-2 border-black'>
            <div className='w-[45%]'></div>
            <div className='w-[55%]'>
                <h1 className='text-6xl mb-6 whitespace-nowrap'>OUR VISION, YOUR HOME</h1>
                <div className='flex gap-5 pb-8'>
                    <div><p>The combine architectural brilliance with modern living solutions. 15 years of dedication and expertise have shaped Vision Estate into a leader in bespoke architectural solutions.</p></div>
                    <div><p>Our mission is to create spaces that reflect individually and set new standards in architecture.</p></div>
                </div>
            </div>
        </div>
        <div className='flex gap-6 py-8 border-b-2 border-black'>
            <div className='w-[45%] h-96 bg-cover' style={{ backgroundImage: `url(${Architect})` }}>
                {/* <img className='object-cover' src={Architect} alt="" /> */}
            </div>
            <div className='w-[55%] h-96 bg-cover' style={{ backgroundImage: `url(${ArchiDesign})` }}>
                {/* <img className='object-cover' src={ArchiDesign} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Vision