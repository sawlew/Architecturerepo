import React from 'react'
import { Gallery } from "react-grid-gallery";
import Images from './util/Photogallery';

const Designs = () => {
  return (
    <div className='w-[80%] mx-auto mt-32'>
        <div className='flex justify-between text-6xl mb-12'>
            <h1>DESIGNS THAT MAKE US PROUD</h1>
            <p className='text-gray-400'>80+</p>
        </div>
        <div className='py-8 border-y-2 border-black'>
           <Gallery images={Images} enableImageSelection={false} />  
        </div>
       
    </div>
  )
}

export default Designs