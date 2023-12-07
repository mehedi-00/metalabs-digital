import React from 'react';
import Signature from '../../../../../public/aboutUs/signature.svg'
import Image from 'next/image';


const DreamDigital = () => {
  return (
    <div className='my-16 ml-4 lg:ml-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-2 md:gap-1 lg:gap-5'>
          <div className='leftDreamDigital'>
            <h5 className='text-lg md:text-xl text-blue-600 font-bold'>We Dream Digital</h5>
            <p className="text-2xl md:text-2xl lg:text-4xl">We do</p>
            <p  className="text-2xl md:text-2xl lg:text-4xl">things differently</p>
          </div>
          <div>
            <p className='text-gray-400 text-xs md:text-sm lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Perspiciatis, praesentium mollitia. Dolores quo quidem <br></br>ipsa soluta, consectetur quis at aliquid beatae <br></br>commodi aut magni tempora.</p>
            <p className='text-gray-400 text-xs md:text-sm lg:text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Adipisci, nostrum voluptatum fugit assumenda nisi <br></br>reiciendis maiores! Facilis unde, quasi, error, mollitia <br></br>in similique sequi quam quas eos voluptatum suscipit.</p>
            <div className='flex items-center gap-20 lg:gap-32 mt-5'>
              <div>
                <Image className='w-20 h-14 lg:w-36 lg:h-20' src={Signature}></Image>
                <p className='text-gray-500 text-sm lg:text-base mt-4'>CEO,John Doe</p>
              </div>
              <div>
                <button className='text-sky-500 border-2 border-sky-500 rounded
                text-sm lg:text-sm px-2 py-1 lg:px-6 lg:py-2 hover:bg-sky-500 hover:text-white duration-150'>Meat the team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DreamDigital;