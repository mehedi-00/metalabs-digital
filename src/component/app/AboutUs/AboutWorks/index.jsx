import { aboutWorks } from '@/src/constant/aboutWorks';
import React from 'react';
import CountUp from 'react-countup';

const AboutWorks = () => {
  return (
    <div className='my-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {
            aboutWorks.map((data, index) => (
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl border-b-2 border-black border-spacing-10"><CountUp duration={3.75}  end={data.value} />+</span>
                <p className='text-gray-500 text-xs sm:text-sm md:text-base mt-3'>{data.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutWorks;