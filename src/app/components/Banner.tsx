'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import leftarrow from '@/app/assets/images/ArrowLeft.png';
import rightarrow from '@/app/assets/images/ArrowRight.png';
import userIcon from '@/app/assets/images/user_icon.png';
import bannerImg1 from '@/app/assets/images/banner_img1.png';
import bannerImg2 from '@/app/assets/images/banner_img_2.png';

const Banner = () => {
  return (
    <div className='relative'>
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
        }}
        className='relative'
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <section className='banner_bg relative'>
            <div className='flex flex-col md:flex-row text-white p-6 md:px-[80px] md:py-[60px] overflow-hidden'>
              <div className='flex-1 flex flex-col justify-center space-y-3 md:space-y-4 text-left lg:text-left'>
                <p className='text-[18px] font-[400]'>Now in Bengaluru</p>
                <h1 className='text-2xl md:text-[60px] font-[600] font-bold'>
                  Missed your car’s service?
                </h1>
                <p className='text-md md:text-[22px] font-[300] pb-5'>
                  Get it done at home with Rumo
                </p>
                <p className='text-sm md:text-[18px] font-[400] text-[#66FFC7] pb-1'>
                  Upto ₹300 Off
                </p>
                <button className='bg-white text-[#1A70F1] px-4 py-2 md:px-6 md:py-2 rounded-[4px] font-semibold shadow-lg cursor-pointer w-auto hover:bg-gray-200 md:w-[295px]'>
                  BOOK A SERVICE
                </button>
                <div className='flex flex-row md:flex-row items-center justify-start md:justify-start space-y-2 md:space-y-0 md:space-x-4 mt-4 '>
                  <div className='flex items-left space-x-1 flex-col'>
                    <span className='text-yellow-400 gap-5 text-lg md:text-xl'>
                      ★ ★ ★ ★ ★
                    </span>
                    <span className='text-xs md:text-sm'>
                      Based on 1200+ ratings
                    </span>
                  </div>
                  <div className='md:border-l-2 flex border-[#6B6B80]'>
                    <Image
                      alt='image'
                      width={51}
                      height={51}
                      src={userIcon}
                      className='px-3 object-contain'
                    />
                    <span className='text-xs md:text-[24px]'>
                      5000+ <br />
                      <span className='text-xs md:text-sm'>
                        Registered users
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex-1 mt-6 md:mt-0 md:ml-6 flex justify-center hidden lg:block'>
                <Image
                  alt='image'
                  width={600}
                  height={350}
                  src={bannerImg1}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 2 (Dummy Data) */}
        <SwiperSlide>
          <section className='banner_bg relative'>
            <div className='flex flex-col md:flex-row text-white p-6 md:px-[80px] md:py-[60px] overflow-hidden'>
              <div className='flex-1 flex flex-col justify-center space-y-3 md:space-y-4 text-left lg:text-left'>
                <p className='text-[18px] font-[400]'>Now in Mumbai</p>
                <h1 className='text-2xl md:text-[60px] font-[600] font-bold'>
                  Need an emergency service?
                </h1>
                <p className='text-md md:text-[22px] font-[300] pb-5'>
                  We come to your doorstep!
                </p>
                <p className='text-sm md:text-[18px] font-[400] text-[#66FFC7] pb-1'>
                  Flat 20% Off
                </p>
                <button className='bg-white text-[#1A70F1] px-4 py-2 md:px-6 md:py-2 rounded-[4px] font-semibold shadow-lg cursor-pointer w-auto hover:bg-gray-200 md:w-[295px]'>
                  BOOK NOW
                </button>
                <div className=''></div>
                <div className='flex flex-row md:flex-row items-center justify-start md:justify-start space-y-2 md:space-y-0 md:space-x-4 mt-4 '>
                  <div className='flex items-left space-x-1 flex-col'>
                    <span className='text-yellow-400 gap-5 text-lg md:text-xl'>
                      ★ ★ ★ ★ ★
                    </span>
                    <span className='text-xs md:text-sm'>
                      Based on 1500+ ratings
                    </span>
                  </div>
                  <div className='md:border-l-2 flex border-[#6B6B80]'>
                    <Image
                      alt='image'
                      width={51}
                      height={51}
                      src={userIcon}
                      className='px-3 object-contain'
                    />
                    <span className='text-xs md:text-[24px]'>
                      7000+ <br />
                      <span className='text-xs md:text-sm'>
                        Happy customers
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex-1 mt-6 md:mt-0 md:ml-6 flex justify-center hidden lg:block'>
                <Image
                  alt='image'
                  width={600}
                  height={350}
                  src={bannerImg2}
                  className=''
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>

      {/* Left Navigation Button */}
      <button className=' banner-prev absolute left-4 top-1/2 -translate-y-1/2 z-10  text-white p-2 rounded-full cursor-pointer hidden md:block '>
        <Image alt='image' width={31} height={31} src={leftarrow} />
      </button>

      {/* Right Navigation Button */}
      <button className='banner-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-full cursor-pointer hidden md:block '>
        <Image alt='image' width={31} height={31} src={rightarrow} />
      </button>
    </div>
  );
};

export default Banner;
