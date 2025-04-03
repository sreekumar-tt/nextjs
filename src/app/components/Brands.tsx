'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Br1 from '@/app/assets/images/br1.png';
import Br2 from '@/app/assets/images/br2.png';
import Br3 from '@/app/assets/images/br3.png';
import Br4 from '@/app/assets/images/br4.png';
import Br5 from '@/app/assets/images/br5.png';
import Br6 from '@/app/assets/images/br6.png';


const brands = [
  { name: 'NAHL', logo: Br1 },
  { name: 'Shell', logo: Br2 },
  { name: 'BOSCH', logo: Br3 },
  { name: 'HELLA', logo: Br4 },
  { name: 'Purolator', logo: Br5 },
  { name: 'DELPHI', logo: Br6 },
];

const BrandsSection = () => {
  return (
    <div className="p-6 text-center">
      <div className="p-3 mb-4">
        <h3 className="text-[24px] font-[600] text-[#373751]  font-poppins">Brands we Use</h3>
        <p className="text-[14px] font-[400] font-openSans pt-2 text-[#6B6B80]">
          Authorized Genuine OEM/OES Parts
        </p>
      </div>
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
        {brands.map((brand) => (
          <SwiperSlide key={brand.name} className="flex justify-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={88}
              height={57}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsSection;
