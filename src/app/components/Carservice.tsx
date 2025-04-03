'use client';
import Image from 'next/image';
import React from 'react';
import B1 from '@/app/assets/images/brand1.png';
import B2 from '@/app/assets/images/brand2.png';
import B3 from '@/app/assets/images/brand3.png';
import B4 from '@/app/assets/images/brand4.png';
import B5 from '@/app/assets/images/brand5.png';
import B6 from '@/app/assets/images/brand6.png';
import S1 from '@/app/assets/images/service1.png';
import S2 from '@/app/assets/images/service2.png';
import S3 from '@/app/assets/images/service3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const carBrands = [
  { name: 'Skoda', logo: B1 },
  { name: 'Honda', logo: B2 },
  { name: 'Mahindra', logo: B3 },
  { name: 'Hyundai', logo: B4 },
  { name: 'Kia', logo: B5 },
  { name: 'Toyota', logo: B6 },
];

const serviceSteps = [
  { step: 'Add your car', icon: S1 },
  { step: 'Schedule Date & Time', icon: S2 },
  { step: 'Share your address', icon: S3 },
];

const CarServiceSection: React.FC = () => {
  return (
    <div className='container mx-auto p-4 lg:flex md:my-5 md:justify-between '>
      {/* Car Brands Section */}
      <div className='w-full lg:w-1/2 text-center md:text-left mb-6 lg:mb-0'>
        <h2 className='mb-6 text-center lg:text-[36px] text-[14px] font-[700] text-gray-900 font-poppins'>
          Car Brands we service
        </h2>
        <div className="w-full mt-5 lg:mt-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {carBrands.map((brand) => (
            <SwiperSlide
              key={brand.name}
              className='flex justify-center items-center '
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={60}
                height={60}
                className='object-contain'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>

      {/* Service Steps Section */}
      <div className='w-full lg:w-1/2 text-center border-t border-[#6b6b802e] md:border-t-0 md:border-l  md:pl-6 pt-6 md:pt-0 hidden md:block'>
        <h2 className='mb-6 text-center lg:text-[36px] text-[24px] font-[700] text-gray-900 font-poppins'>
        Secure your service in Just 3<br/> simple steps
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center lg:justify-start gap-25'>
          {serviceSteps.map((step) => (
            <div
              key={step.step}
              className='flex flex-col items-center service-arrow  relative'
            >
              {/* <span className='text-2xl'>{step.icon}</span> */}
              <Image
                src={step.icon}
                alt='image'
                width={60}
                height={60}
                className=' object-contain '
              />
              <p className='text-sm mt-2 font-openSans text-[15px] font-[700]'>{step.step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarServiceSection;
