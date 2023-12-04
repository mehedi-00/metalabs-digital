import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Card = ({data}) => {
  const {name, image, service} = data;
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 overflow-hidden">
      <div className="h-80 relative overflow-hidden cardBox z-30">
      <img src={image} className='w-full h-full  hover:scale-[0.4]  duration-700 ease-out hover:rounded-full hover:-translate-y-11 delay-100 z-50'></img>
      <div className='cardDiv absolute bg-black bg-opacity-75 text-white w-64 md:w-56 lg:w-64 rounded-lg pb-2 pt-7 text-center -z-30 bottom-10 left-8 md:left-4 lg:bottom-10 lg:left-7 duration-500 ease-out delay-100'>
        <h1 className='text-xl text-blue-500 font-bold'>{name}</h1>
        <p className='text-base text-red-600 my-1'><i>{service}</i></p>
        <div className='flex gap-4 justify-center'>
          <a href="#"><FacebookOutlinedIcon></FacebookOutlinedIcon></a>
          <a href='#'><TwitterIcon></TwitterIcon></a>
          <a href='#'><LinkedInIcon></LinkedInIcon></a>
          <a href='#'><InstagramIcon></InstagramIcon></a>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Card;