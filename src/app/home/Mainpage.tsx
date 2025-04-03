import React from 'react';
import Banner from '../components/Banner';
import CarServiceSection from '../components/Carservice';
import BrandsSection from '../components/Brands';
import ServiceCard from '../components/ServiceCard';
import { WhatsAppButton } from '../components/Header';
import bannerImg1 from '@/app/assets/images/banner_img1.png';
import Image from 'next/image';
import userIcon from '@/app/assets/images/user_icon.png';
import star from '@/app/assets/images/stars.png';
const Mainpage = () => {
  return (
    <>
      <Banner />
      <div className='hidden md:block'>
      <CarServiceSection />
      </div>
    
      <ServiceCard />
      <div className='block md:hidden'>
      {bannerData.map((banner, index) => (
         
                  <div className='' key={index}>
                  <div className='flex flex-row md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 mt-4 '>
                    <div className='flex items-left space-x-1 flex-col'>
                      {/* <span className='text-yellow-400 gap-5 text-lg md:text-xl'>★ ★ ★ ★ ★</span> */}
                      <Image
                      src={star}
                      alt="star"
                      width={100}
                      height={100}
                      className='md:pb-2'
                    ></Image>
                      <span className='text-xs md:text-sm font-openSans'>{banner.ratings}</span>
                    </div>
                    <div className='md:border-l-2 flex border-[#6B6B80]'>
                      <Image alt='image' width={51} height={51} src={userIcon} className='px-3 object-contain' />
                      <span className='text-xs md:text-[24px] font-poppins'>
                        {banner.registeredUsers} <br />
                        <span className='text-xs md:text-sm font-openSans'>{banner.registeredUsersText}</span>
                      </span>
                    </div>
                  </div>
                  </div>
               
        ))}
        </div>
      <div className='block md:hidden pt-3'>
      <hr className="border-[#6b6b802e]" />
      {/* border-r-1  border-[#6b6b802e]  */}
      <CarServiceSection />
      <hr className="border-[#6b6b802e]"></hr>
      </div>
      <BrandsSection />
      <WhatsAppButton/>
    </>
  );
};

export default Mainpage;

const bannerData = [
  {
    location: 'Now in Bengaluru',
    title: "Missed your car’s service?",
    description: "Get it done at home with Rumo",
    offer: "Upto ₹300 Off",
    buttonText: "BOOK A SERVICE",
    ratings: "Based on 1200+ ratings",
    registeredUsers: "5000+",
    registeredUsersText: "Registered users",
    image: bannerImg1,
  },

];