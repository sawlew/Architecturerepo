import React from 'react'
import HouseImg from '../assets/1.jpg'

const Hero = () => {
  return (
    <div>
      <div className='w-[80%] mx-auto py-10 relative'>
          <div className='w-full text-right mb-3'>
              <h1 className='text-8xl whitespace-nowrap'>INSPIRED BY INNOVATION,</h1>
          </div>
          <div className='w-full flex justify-between items-center'>
              <h1 className='text-8xl whitespace-nowrap'>BUILT WITH PASSION</h1>
              <div>
                <p className='text-right'>
                Your trusted partner <br /> in creating extraordinary spaces <br /> for living and working.
                </p>
              </div>
          </div>
          <div className='w-full absolute bottom-[-25px]'>
            <div className='mx-auto py-3 px-5 w-fit rounded-full bg-white flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <p className=''>Make A Call</p>
            </div>
          </div>
      </div>
      <div className='h-[calc(100vh-302px)] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${HouseImg})` }}>


      </div>
    </div>
  )
}

export default Hero