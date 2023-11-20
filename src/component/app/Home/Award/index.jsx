import React from 'react';
import award from '../../../../../public/award/award.svg';
import Image from 'next/image';

const Award = () => {
  return (
    <div className='bg-slate-100'>
      {/* award section start */}
      <div className='container mx-auto h-full sm:h-[540px] md:h-96'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full items-center sm:gap-2 md:gap-5 py-10 gap-8'>
          {/* item section start */}
          <div className="mx-auto text-center">
            <Image src={award} className='mx-auto'></Image>
            <div className="text-center mt-2">
              <h5 className="text-blue-600 sm:text-base md:text-xl font-bold">Grand Prix</h5>
              <h6 className="text-blue-600 my-1 sm:text-base md:text-xl font-bold">Best App Market</h6>
              <p className='text-black sm:text-sm md:text-lg'>Digital Marketing award-2018<br></br>
              Lifebuoy-High5 for handwashing
              </p>
            </div>
          </div>
          {/* item section end */}
          {/* item section start */}
          <div className="mx-auto text-center">
            <Image src={award} className='mx-auto'></Image>
            <div className="text-center mt-2">
              <h5 className="text-blue-600 sm:text-base md:text-xl font-bold">Grand Prix</h5>
              <h6 className="text-blue-600 sm:text-base my-1 md:text-xl font-bold">Best App Market</h6>
              <p className='text-black sm:text-sm md:text-lg'>Digital Marketing award-2018<br></br>
              Lifebuoy-High5 for handwashing
              </p>
            </div>
          </div>
          {/* item section end */}
          {/* item section start */}
          <div className="mx-auto text-center">
            <Image src={award} className='mx-auto'></Image>
            <div className="text-center mt-2">
              <h5 className="text-blue-600 sm:text-base md:text-xl font-bold">Grand Prix</h5>
              <h6 className="text-blue-600 sm:text-base my-1 md:text-xl font-bold">Best App Market</h6>
              <p className='text-black sm:text-sm md:text-lg'>Digital Marketing award-2018<br></br>
              Lifebuoy-High5 for handwashing
              </p>
            </div>
          </div>
          {/* item section end */}
        </div>
      </div>
      {/* award section end */}
    </div>
  );
};

export default Award;