import React from 'react';
import aboutUs from '../../../../../public/aboutUs/aboutUsBusiness.jpg'
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BoltIcon from '@mui/icons-material/Bolt';

const AboutUsBusiness = () => {
  return (
    <div className="my-10">
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10'>
        <div className="relative">
            <Image className='h-96 w-full lg:h-full lg:w-full' src={aboutUs}></Image>
            <div className="bg-blue-700 text-white absolute bottom-0 right-0 p-5 sm:p-7 lg:p-10">
              <BoltIcon className="absolute -top-3 text-2xl sm:text-4xl sm:-top-5 lg:-top-8 lg:text-6xl"></BoltIcon>
              <p className='text-xs sm:text-lg md:text-sm lg:text-base font-bold'>Lorem, ipsum dolor sit amet <br></br>consectetur adipisicing elit.<br></br>Nihil consequuntur saepe<br></br>Lorem, ipsum dolor sit amet.
              </p>
              <p className='text-xs sm:text-base md:text-xs mt-1 text-gray-400 font-bold lg:mt-3'>John Peter, USA</p>
            </div>
        </div>
        <div className='py-3'>
          <span className='text-sm sm:text-lg md:text-sm lg:text-lg text-gray-600 font-bold'>Improve Efficiency And Provide Better Experiences!</span>
          <h2 className='text-xl sm:text-3xl md:text-base md:my-2 my-3 lg:text-4xl font-bold'>Keep Your Business Sage & <br></br>Ensure High Availability</h2>
          <div className='ml-4 sm:ml-5 md:ml-3 lg:ml-8'>
            <div className='border-l-4 border-slate-500 lg:my-5'>
              <div className="mx-3 lg:mx-6">
                <p  className='text-sm sm:text-base md:text-xs lg:text-base text-gray-600 font-bold'>Lorem ipsum dolor sit amet consecteturadipisicing elit.<br></br>Ipsa sequi dolorem perferendis accusantium repellat.</p>
                <p className='text-sm sm:text-base md:text-xs lg:text-base sm:mt-3 lg:mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>Et itaque quos ut quae dicta consequatur unde,<br></br>deserunt maiores repellendus, impedit sapiente a?</p>
              </div>
            </div>
            <div>
              <button className='bg-sky-400 py-2 px-6 sm:py-3 sm:px-8 md:px-3 md:py-2 lg:py-3 lg:px-10 text-white rounded text-sm sm:text-base md:text-sm lg:text-xl my-4'>Show Details<ArrowRightAltIcon className='ml-2'></ArrowRightAltIcon></button>
              <ul className='md:my-2 lg:my-5'>
                <li className='text-sm sm:text-base md:text-xs lg:text-lg text-gray-600 font-bold'><CheckCircleIcon className='text-black mr-2'></CheckCircleIcon>Deliver in more than 4500 client's interaction</li>
                <li className='text-sm sm:text-base md:text-xs lg:text-lg text-gray-600 font-bold'><CheckCircleIcon className='text-black mr-2'></CheckCircleIcon>Provide by expert to help challenge cricatal activities</li>
                <li className='text-sm sm:text-base md:text-xs lg:text-lg text-gray-600 font-bold'><CheckCircleIcon className='text-black mr-2'></CheckCircleIcon>Complemented with peer perspective and advice</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUsBusiness;