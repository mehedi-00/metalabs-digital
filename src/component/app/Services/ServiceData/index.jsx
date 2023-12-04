import { serviceData } from '@/src/constant/serviceData';
import React from 'react';
import ServiceCard from '../ServiceCard';

const ServiceData = () => {
  return (
    <div className='container mx-auto my-10'>
      <div className='grid grid-cols-1'>
        {
          serviceData.map((data, index) => <ServiceCard
          key={index}
          data={data}
          index={index}
          ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default ServiceData;