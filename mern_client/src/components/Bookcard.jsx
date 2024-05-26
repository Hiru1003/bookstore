import React from 'react'

const Bookcard = ({headline, books}) => {
  return (
    <div className='my-16 px-4 lg:px24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
    </div>
  )
}

export default Bookcard
