import { team } from '@/src/constant/team';

import React from 'react';
import Card from '../Card/Card';

const Team = () => {
  return (
    <div className='container mx-auto'>
    {/* cardSection start */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 mb-20 overflow-hidden'>
        {
          team.map((data, index) => <Card
          key={index}
          data={data}
          ></Card>)
        }
      </div>
      {/* cardSection end */}
    </div>
  
  );
};

export default Team;