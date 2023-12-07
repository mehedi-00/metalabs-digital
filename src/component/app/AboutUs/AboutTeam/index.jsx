import React from 'react';
import AboutTeamImg from '../../../../../public/aboutUs/aboutTeam/aboutTeam.png'
import Image from 'next/image';

const AboutTeam = () => {
  return (
    <div className="my-20">
      <Image className="w-full  h-48 sm:h-60 md:h-72 lg:h-96" src={AboutTeamImg}></Image>
    </div>
  );
};

export default AboutTeam;