import React from 'react';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';

const ServiceCard = ({data, index}) => {

    const {image, title, description, type, item} = data;
  return (
    <div className='my-5'>
      <div className='block md:flex md:justify-between md:items-center gap-10'>
      <div className={`${index % 2 == 0 ? 'md:order-1 order-1 w-full' : 'md:order-2 order-1 w-full'}`}>
        <img src={image} className='w-full md:w-[580px] md:h-[350px]'></img>
      </div>
      <div className={`${index % 2 == 0 ? 'md:order-2 order-2 w-full mt-3 md:mt-0' : 'md:order-1 order-2 w-full mt-3 md:mt-0'}`}>
        <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl font-bold">{title}</h1>
        <p className='text-base sm:text-lg md:text-base lg:text-xl lg:pr-3 my-1'>{description}</p>
        <button className='border-2 border-black px-2 py-2 text-sm my-2 sm:px-3 sm:py-2 sm:text-base sm:my-2 md:px-2 md:py-2 md:text-sm md:my-2 lg:px-4 lg:py-2 lg:text-lg lg:my-2'>{type}</button>
        <ul>
          {
            item.map(data => (<li className='text-sm sm:text-lg md:text-sm lg:text-base my-1'><ForwardOutlinedIcon className='pr-1'></ForwardOutlinedIcon>{data}</li>))
          }
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ServiceCard;