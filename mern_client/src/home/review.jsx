import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from "flowbite-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa6"

// import required modules
import { Pagination } from 'swiper/modules';

const ReviewPage = () => {
  return (
    <div className='bg-white'>
      <div className='my-12 px-4 lg:px-24 pb-24 bg-white'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug pb-5'>Our Customers</h2>  

        <div className='bg-white'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}

            className="mySwiper"
          >
            <SwiperSlide className='shadow-xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
              <div className='space-y-6 relative'> 
                <div className='flex items-center gap-4'>
                  <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtseuYnwejX3Q9ZshA8sDJh-dkBXn1gU8M24tMGso0fSOeH6-U9aBEof5ViHkppbonTc&usqp=CAU" alt="avatar of Nancy" rounded className='w-14 h-14' />
                  <h5 className='text-lg font-medium'>Nancy Parker</h5>
                </div>
                <div className='absolute top-0 right-0 text-amber-500 flex gap-1'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <p className='text-lg mt-12'>
                    I absolutely love shopping here! The selection of books is fantastic, and I've discovered so many new favorites thanks to their recommendations. The delivery is always fast and the customer service is top-notch. Highly recommend this site to all book lovers!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
              <div className='space-y-6 relative'> 
                <div className='flex items-center gap-4'>
                  <Avatar img="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg" alt="avatar of Nancy" rounded className='w-14 h-14' />
                  <h5 className='text-lg font-medium'>Peter Wollowatz</h5>
                </div>
                <div className='absolute top-0 right-0 text-amber-500 flex gap-1'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <p className='text-lg mt-12'>
                  The book collection is incredibly diverse, catering to all tastes. The user interface is intuitive and makes browsing for books a joy. I've never had an issue with delivery times, and the packaging always ensures my books arrive in perfect condition.
                </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
              <div className='space-y-6 relative'> 
                <div className='flex items-center gap-4'>
                  <Avatar img="https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg" alt="avatar of Nancy" rounded className='w-14 h-14' />
                  <h5 className='text-lg font-medium'>Lucy Doker </h5>
                </div>
                <div className='absolute top-0 right-0 text-amber-500 flex gap-1'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <p className='text-lg mt-12'>
                  An amazing experience every time I shop here! The recommendations are spot on and have helped me find some hidden gems. The customer support is friendly and efficient, always ready to assist. This site has become my go-to for all my book purchases.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
              <div className='space-y-6 relative'> 
                <div className='flex items-center gap-4'>
                  <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdw3zU3LBFcBoYobQQC-4QQzQZnZURJp3YMakmeoblVd28JkFz2y7zgo1IHC7IhZCT9wk&usqp=CAU" alt="avatar of Nancy" rounded className='w-14 h-14' />
                  <h5 className='text-lg font-medium'>Jim Smith</h5>
                </div>
                <div className='absolute top-0 right-0 text-amber-500 flex gap-1'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <p className='text-lg mt-12'>
                  Shopping here has been a delightful experience. The selection is top-notch, and the prices are very reasonable. I appreciate the fast and customer freindly shipping and the condition in which the books arrive. The customer service is also very responsive and helpful.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
              <div className='space-y-6 relative'> 
                <div className='flex items-center gap-4'>
                  <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWQD3UnEfGvr-qHW0qN31rPirvhtE8sWZ5vUPNrkUbmFicDdbl__2i_QSwKzOYiyAlsE&usqp=CAU" alt="avatar of Nancy" rounded className='w-14 h-14' />
                  <h5 className='text-lg font-medium'>Sun Min Hung</h5>
                </div>
                <div className='absolute top-0 right-0 text-amber-500 flex gap-1'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <p className='text-lg mt-12'>
                  I am impressed by the range of books available. It's a treasure trove for book lovers. The ease of navigation and the detailed descriptions make it easy to choose the right book. Plus, the delivery is swift, and the books are well-protected during shipping.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>     
      </div>
    </div>
  );
}

export default ReviewPage;
