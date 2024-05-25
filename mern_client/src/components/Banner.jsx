import React from 'react';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
       
        {/* left */}
        <div className="w-full md:w-1/2">
          <h1 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <div>
            <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
            <button className='bg-blue-400 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2">
          Right Side
        </div>
      </div>
    </div>
  )
}

export default Banner;

