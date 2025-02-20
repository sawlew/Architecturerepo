import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-[80%] mx-auto py-3 border-b-2 border-black'>
        <p className='font-semibold'>VISION ESTATE</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

    </div>
  )
}

export default Header