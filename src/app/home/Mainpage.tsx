import React from 'react';
import Banner from '../components/Banner';
import CarServiceSection from '../components/Carservice';
import BrandsSection from '../components/Brands';
import ServiceCard from '../components/ServiceCard';
import { WhatsAppButton } from '../components/Header';

const Mainpage = () => {
  return (
    <>
      <Banner />
      <CarServiceSection />
      <ServiceCard />
      <BrandsSection />
      <WhatsAppButton/>
    </>
  );
};

export default Mainpage;
