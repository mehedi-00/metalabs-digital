import React from 'react';
import Image from 'next/image';
import award from '../../../../../public/award/award.svg'
import { Carousel } from 'react-responsive-carousel';


const Award = () => {

  

  return (
    <div className='bg-slate-100'>
      {/* award section start */}
      <div className='container mx-auto h-96'>
        {/* <Slider {...settings}>

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
        </Slider> */}
        <Carousel>
          <div className='grid grid-cols-3'>
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
          </div>
          
            </Carousel>
      </div>
      {/* award section end */}
    </div>
  );
};

export default Award;