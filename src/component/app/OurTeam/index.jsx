import React from 'react';
import Team from './Team';
import FooterForm from '../Home/FooterForm';
import TeamBanner from './TeamBanner/TeamBanner';

const OurTeam = () => {
  return (
    <div>
      {/* teamBanner section start */}
      <TeamBanner></TeamBanner>
      {/* teamBanner section end */}
      {/* team section start */}
      <Team></Team>
      {/* team section end */}
      {/* footer form section start */}
      <FooterForm></FooterForm>
      {/* footer form section end */}
      
    </div>
  );
};

export default OurTeam;