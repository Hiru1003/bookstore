import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import Favbooks from './Favbooks'
import PromoBanner from './PromoBanner'
import Otherbook from './Otherbook'
import ReviewPage from './review'


const home = () => {
  return (
    <div className="bg-white">
        <Banner/>
        <BestSellerBooks/>
        <Favbooks/>
        <PromoBanner/>
        <Otherbook/>
        <ReviewPage/>
    </div>
  )
}

export default home
