import React from 'react'
import favimg from "../assets/favimg.png"
import { Link } from 'react-router-dom'

const Favbooks = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 pb-16'>
      <div className='w-full md:w-1/2 flex justify-center'>
        <img src={favimg} className='rounded w-full md:w-auto' />
      </div>

      <div className='w-full md:w-1/2'>
        <h2 className='text-5xl font-bold my-5 leading-snug'>Find Your Favorite
            <span className='text-blue-400'> Book Here!</span></h2>
            <p className='mb-5 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          <div className='flex flex-col sm:flex-row justify-between gap-6 my-14 md:w-3/4'>
            <div>
                <h3 className='text-3xl font-bold'>800+</h3>
                <p className='text-xl text-base'>Book Listening</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>550+</h3>
                <p className='text-xl text-base'>Book Users</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>1200+</h3>
                <p className='text-xl text-base'>PDF Downloaded</p>
            </div>
          </div>
          <Link to="/shop" className=''>
            <button className='bg-blue-400 w-48 text-white font-semibold px-5 py-3 text-lg rounded hover:bg-black transition-all duration-300'>
                Explore More
            </button>
          </Link>
      </div>
    </div>
  )
}

export default Favbooks
