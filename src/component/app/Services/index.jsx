import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServiceData from './ServiceData';

const Service = () => {
  return (
    <div>
      {/* ServiceBanner section start */}
      <ServiceBanner></ServiceBanner>
      {/* ServiceBanner section end */}
      {/* ServiceData section start */}
      <ServiceData></ServiceData>
      {/* ServiceData section end */}
    </div>
  );
};

export default Service;