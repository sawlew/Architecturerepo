import React from 'react'

const Create = () => {
  return (
    <div className='flex items-center gap-9 whitespace-nowrap'>
        <h1 className='text-6xl'>LET'S CREATE</h1>
        <div className='border-2 border-black h-10 w-10 flex justify-center items-center rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </div>
    </div>
  )
}

export default Create