import React from 'react'
import favimg from "../assets/favimg.png"

const Favbooks = () => {
  return (
    <div className='px-4 lg:px-24 my-20'>
      <div className='md:w-1/2'>
        <img src={favimg}/>
      </div>
    </div>
  )
}

export default Favbooks
