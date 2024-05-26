import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCartShopping } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Bookcard = ({headline, books}) => {
  console.log(books);

  return (
    <div className='my-16 px-4 lg:px24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
        <FaCartShopping className='w-4 h-4 text-white'/>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {
            books.map(book => <SwiperSlide key={book._id}>
                <link to={'/book/${book._id}'}>
                    <div className='relative'>
                        <img src={book.imageUrl} alt=''/>
                        <div className=' absolute top-3 bg-blue-400 hover:bg-black p-2 rounded'>
                        </div>
                    </div>
                    <div>
                        <div>
                          <h3>{book.title}</h3>
                          <p>{book.authorName}</p>
                        </div>
                        <div>
                          <p>{book.authorName}</p>
                        </div>
                    </div>
                </link>
            </SwiperSlide>)
        }
      </Swiper>
      </div>
    </div>
  )
}

export default Bookcard
