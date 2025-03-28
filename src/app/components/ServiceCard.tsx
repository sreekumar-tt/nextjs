'use client';
import React, { useState } from 'react';
import image from '@/app/assets/images/checking.png';
import Image from 'next/image';
import car from '@/app/assets/images/car.png';
import tab1 from '@/app/assets/images/tab1.png';
import tab2 from '@/app/assets/images/tab2.png';
import tab3 from '@/app/assets/images/tab3.png';
import tab4 from '@/app/assets/images/tab-4.png';
import edit from '@/app/assets/images/Edit.png';
import icons from '@/app/assets/images/clock.png'; 
import books from '@/app/assets/images/book.png'; 
import downArrow from '@/app/assets/images/ArrowDown.png';
import upArrow from '@/app/assets/images/Arrow Up.png';

const tabs = [
  { id: 'diagnostics', label: 'Diagnostics', icon: tab1 },
  { id: 'periodic', label: 'Periodic Services', icon: tab2 },
  { id: 'major-repair', label: 'Major Repair', icon: tab3 },
  { id: 'breakdown', label: 'Breakdown Service', icon: tab4 },
];

const services = [
  {
    id: 1,
    title: 'Comprehensive Checkup',
    price: '₹3,999',
    oldPrice: '₹4,500',
    duration: 'Takes 2 - 4 hrs',
    servicesIncluded: 'Includes 12 services',
    image: image, // Replace with actual image
    icon: icons,
    book: books,
    ques:'Car wash',
  },
  {
    id: 2,
    title: 'Engine Performance Analysis',
    price: '₹3,999',
    oldPrice: '₹4,500',
    duration: 'Takes 2 - 4 hrs',
    servicesIncluded: 'Includes 12 services',
    image: image,
    icon: icons,
    book: books,
    ques:'Diagnostics',
  },
  {
    id: 3,
    title: 'Comprehensive Checkup',
    price: '₹3,999',
    oldPrice: '₹4,500',
    duration: 'Takes 2 - 4 hrs',
    servicesIncluded: 'Includes 12 services',
    image: image,
    icon: icons,
    book: books,
    ques:'Periodic Services',
  },
  {
    id: 4,
    title: 'Engine Performance Analysis',
    price: '₹3,999',
    oldPrice: '₹4,500',
    duration: 'Takes 2 - 4 hrs',
    servicesIncluded: 'Includes 12 services',
    image: image,
    icon: icons,
    book: books,
    ques:'Major Repairs',
  },
];


const ServiceCard: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2   rounded-[20px]  '>
      {services.map((service) => (
        <div
          key={service.id}
          className='bg-white  border-b-1 border-r-1  border-[#6b6b802e]  overflow-hidden pt-[25px] ps-[25px] flex flex-col md:flex-row items-center lg:items-end'
        >
          {/* Content Section */}
          <div className='md:w-2/3 w-full pb-[25px]'>
            <h2 className='text-xl font-semibold mb-4 '>{service.title}</h2>
            <p className='text-black-500 flex '>
              <Image src={service.icon} alt={service.title} className='object-contain mr-2'/>
              {service.duration}
            </p>
            <p className='text-black-500 flex '>
              <Image src={service.book} alt={service.title} className='object-contain mr-2' />
              {service.servicesIncluded}
            </p>
            <p className='text-[#1E3A8A] font-[400] pt-2'>See details</p>
            <div className='flex gap-4 mt-4'>
              <button className='text-[12px] cursor-pointer bg-gradient-to-r from-blue-600 via-blue-800 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg mt-4'>
                BOOK NOW
              </button>
              <button className='bg-purple-600 text-white px-4 py-2 rounded md:hidden'>
                CALL US
              </button>
            </div>
          </div>
          {/* Image for desktop view */}
          <div className='w-1/3'>
            <p className='text-[12px] font-[500] text-end pe-3 flex justify-end items-center'>
              {service.oldPrice}
              <span className='text-[25px] font-[700]  text-end pl-2 '>
                {service.price}
              </span>
            </p>
            <p className='text-[12px] text-end pe-3 pb-3'>tax included</p>
            <div className='hidden md:block '>
              <Image
                src={service.image}
                alt={service.title}
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const TabsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('periodic');

  return (
  
    <section className='tab-bg '>
      <div className='p-[50px]   text-white hidden md:block'>
        {/* Car Info */}
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-4 mb-4'>
            <Image
              src={car}
              alt='image'
              width={60}
              height={60}
              className='object-contain'
            />
            <div>
              <div className='flex'>
                <h2 className='text-lg font-bold'>
                  Maruti Swift{' '}
                  <span className='text-sm text-[#FFFFFF]'>
                    Lxi, Petrol, 2009
                  </span>
                </h2>
                <Image
                  src={edit}
                  alt='image'
                  width={20}
                  height={20}
                  className='object-contain ms-4 cursor-pointer'
                />
              </div>
              <p className='text-lg font-[600] text-[#FFFFFF]'>DLI2AT5140</p>
            </div>
          </div>
          <p className='text-lg font-bold'>
            There are 12 services<br></br>
            available for Maruti Swift
          </p>
        </div>

        {/* Tabs Section */}
        <div className='flex gap-4 justify-between'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => tab.id === 'periodic' && setActiveTab(tab.id)}
              className={`p-3 w-100 rounded-lg flex flex-col items-center justify-end transition ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-800 shadow-md'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              disabled={tab.id !== 'periodic'}
            >
              {/* <span className='text-2xl'>{tab.icon}</span> */}
              <Image
                src={tab.icon}
                alt='image'
                width={60}
                height={60}
                className='object-contain'
              />
              <span className='mt-2 font-semibold'>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className='mt-10  bg-white text-gray-800 rounded-lg shadow-md'>
          {activeTab === 'periodic' && <ServiceCard />}
        </div>
      </div>
      <div className='block md:hidden'>
      <ServiceCardMob/>
      </div>
    </section>
    
  );
};
const ServiceCardMob: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleCollapse = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 py-3 px-3">
      <div className='flex items-center gap-4 mb-4 border rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-800 to-purple-600 text-white'>
            <Image
              src={car}
              alt='image'
              width={60}
              height={60}
              className=''
            />
            <div>
              <div className='flex'>
                <h2 className='text-sm font-bold'>
                  Maruti Swift{' '}
                  <span className='text-sm text-[#FFFFFF]'>
                    Lxi, Petrol, 2009
                  </span>
                </h2>
                <Image
                  src={edit}
                  alt='image'
                  width={20}
                  height={20}
                  className='object-contain ms-4 cursor-pointer'
                />
              </div>
              <p className='text-sm font-[600] text-[#FFFFFF]'>DLI2AT5140</p>
            </div>
          </div>
      <p className='py-4 text-[white] font-[400] text-center'>Services available for Maruti Suzuki</p>
      {services.map((service) => (
        <div key={service.id} className="bg-[#EDEDF0] border rounded-lg shadow-lg mt-3">
          {/* Collapse Header */}
          <button
            className="w-full  items-center p-4 text-lg font-semibold"
            onClick={() => toggleCollapse(service.id)}
          >
            <div className='flex justify-between'>
            <span className='flex items-center'>
            
             <Image
        src={openId === service.id ? upArrow : downArrow}
        alt="Toggle Arrow"
        width={20}
        height={20}
        className='mr-3'
      />
            {service.ques}
            </span>
            <Image
                src={service.image}
                alt={service.title}
                className=' object-cover'
                width={60}
                height={50}
              />
           </div>
          </button>

          {/* Collapse Content */}
          {openId === service.id && (
            <div className='grid grid-cols-1 md:grid-cols-2   rounded-[20px]  '>
            <div
         
            className='bg-white  border-b-1 border-r-1  border-[#6b6b802e]  overflow-hidden pt-[25px] ps-[25px] flex flex-row md:flex-row items-start md:items-end'
          >
            {/* Content Section */}
            <div className='md:w-2/3 w-full pb-[25px]'>
              <h2 className='text-xl font-semibold mb-4 '>{service.title}</h2>
              <p className='text-black-500 flex '>
                <Image src={service.icon} alt={service.title} className='object-contain mr-2'/>
                {service.duration}
              </p>
              <p className='text-black-500 flex '>
                <Image src={service.book} alt={service.title} className='object-contain mr-2' />
                {service.servicesIncluded}
              </p>
              <p className='text-[#1E3A8A] font-[400] pt-2'>See details</p>
              <div className='flex gap-3 mt-4 items-center'>
                <button className='text-[12px] cursor-pointer  bg-gradient-to-r from-blue-600 via-blue-800 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg '>
                  BOOK
                </button>
                <button className=' text-[#6d31df] font-[700] px-4 py-2 rounded md:hidden'>
                  CALL US
                </button>
              </div>
            </div>
            {/* Image for desktop view */}
            <div className='w-1/3'>
              <p className='text-[12px] font-[500] text-end pe-3 flex justify-end items-center'>
                {service.oldPrice}
                <span className='text-[25px] font-[700]  text-end pl-2 '>
                  {service.price}
                </span>
              </p>
              {/* <p className='text-[12px] text-end pe-3 pb-3'>tax included</p> */}
              <div className='hidden md:block '>
                <Image
                  src={service.image}
                  alt={service.title}
                  className='w-full h-auto object-cover'
                />
              </div>
            </div>
          </div>
          </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsComponent;
