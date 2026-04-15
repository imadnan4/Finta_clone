import React from 'react'
import arrowsvg from '../../public/arrow.svg'

const Hero = () => {
  return (
    <div className='px-4 py-2 w-full flex items-center flex-col my-20'>
      
      <button
        type="button"
        className="flex items-center px-4 py-1 border rounded-full border-gray-200 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
      >
      <span
        className="text-[0.875rem] text-gray-800 font-medium"
      >
        Income taxes and R&D credits are due by April 15th
      </span>
      <img draggable={false} loading='lazy' className="ml-2" src={arrowsvg.src} alt="Arrow Icon" width={16} height={16} />
      </button>
      <h1 className='px-4 py-2 font-medium text-6xl mt-12 text-center text-black tracking-[-2]'>Magically Simplify <br />accounting and taxes</h1>
      <p className='px-4 py-2 mt-1 font-medium text-center text-neutral-400 '>Automated bookkeeping. Effortless tax filing. Financial clarity.<br />Set up in 10 mins. Back to building by {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}.</p>
    
    </div>
  )
}

export default Hero
