import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Bookcard = ({ headline, books }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black mb-5'>{headline}</h2> {/* Added margin bottom */}
      
      <div className="mt-10 mb-10"> 
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
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
    
          className="mySwiper w-full h-full mt-16"
        >
          {books.map(book => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative'>
                  <img src={book.imageUrl} alt={book.title} />

                  <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-6 h-6 text-white' />
                  </div>

                </div>
                <div>
                  <h3 className='text-xl font-bold mt-5'>{book.title}</h3>
                  <p className='text-lg mt-2'>{book.authorName}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bookcard;
