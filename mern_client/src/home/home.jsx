import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import Favbooks from './Favbooks'
import PromoBanner from './PromoBanner'

const home = () => {
  return (
    <div className="bg-white">
        <Banner/>
        <BestSellerBooks/>
        <Favbooks/>
        <PromoBanner/>
    </div>
  )
}

export default home
