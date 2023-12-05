import Image from 'next/image';
import teamBanner from '../../../../../public/ourTeam/ourTeamBanner3.png'

const TeamBanner = () => {
  return (
    <div className='container mx-auto h-[350px] sm:h-80 md:h-96 lg:h-[500px]  text-center'>
      <div className='flex justify-center items-center h-full'>
      <div>
        <div className='mb-3 sm:mb-5 md:mb-8 lg:mb-10'>
          <h1 className='text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase'>from concept to reality</h1>
          <p className='text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold uppercase mt-2 lg:mt-5'>Fusing Creativity With<br></br>Marketing & Technology To<br></br>Drive Business Growth</p>
        </div>
        <button className='text-xs sm:text-base md:text-xl lg:text-3xl uppercase bg-sky-500 text-white px-6 py-3 rounded'>speak the our expert</button>
      </div>
      </div>
    </div>
  );
};

export default TeamBanner;