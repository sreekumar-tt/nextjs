import React from 'react';
import Image from 'next/image';
import profile from '@/app/assets/images/Profile.png';
import callicon from '@/app/assets/images/Call.png';
import whatsApp from '@/app/assets/images/whatsapp.png';

const Header = () => {
  return (
    <div className='container-fluid mx-auto  bg-white'>
      <div className="mx-5 flex items-center justify-between p-3">
        <h1 className='text-[#3A21D5] text-[35px] font-[700]'>RUMO</h1>

        <div className='flex items-center gap-4'>
          <p className='flex items-center gap-2 border-[#3A21D5] rounded-[4px] px-[15px] py-[10px] text-[#3A21D5] border-2 text-[14px] font-[700]'>
            <Image
              alt='image'
              width={19}
              height={19}
              className='cursor-pointer'
              src={callicon}
            />
            CALL US
          </p>
          <Image
            alt='image'
            width={30}
            height={33}
            className='cursor-pointer'
            src={profile}
          />
        </div>
      </div>

     
    </div>
  );
};

export default Header;



export const WhatsAppButton = () => {
  return (
    <div
      className="fixed z-10 top-1/2 right-2 transform -translate-y-1/2  text-white p-3 "
    >
     <Image
            alt='image'
            width={60}
            height={60}
            className='cursor-pointer'
            src={whatsApp}
          />
          
    </div>
  );
};


