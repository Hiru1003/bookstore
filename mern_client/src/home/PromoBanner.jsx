import React from 'react'
import { Link } from 'react-router-dom'
import popular from  "../assets/popular.png"

const PromoBanner = () => {
  return (
    <div className='mt-10 py-7 bg-sky-100 px-4 lg:px-24'>
      <div className='flex flex-xol md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Book Award for Friction Shortlist</h2>
            <p className='mb-5 text-xl'>Explore the literary excellence of the 2023 National Book Award for Fiction shortlist, featuring a selection of the year's most captivating and thought-provoking novels. These books represent the pinnacle of contemporary storytelling, offering readers a diverse range of voices and experiences that resonate deeply. From gripping narratives to richly developed characters, each book on this prestigious list promises an unforgettable reading journey.</p>
            
            <Link to="/shop" className=''>
            <button className='bg-blue-400 w-48 text-white font-semibold px-5 py-3 text-lg rounded hover:bg-black transition-all duration-300'>
                Get Promo Code
            </button>
          </Link>
        </div>

        <div>
            <img src={popular}/>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
