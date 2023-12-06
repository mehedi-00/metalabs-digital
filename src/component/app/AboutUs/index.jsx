import React from 'react';
import AboutUsBanner from './AboutUsBanner';
import AboutUsBusiness from './AboutUsBusiness';

const AboutUs = () => {
    return (
        <div>
            {/* aboutUseBanner section start */}
            <AboutUsBanner></AboutUsBanner>
            {/* aboutUseBanner section end */}
            {/* aboutUsBusiness section start */}
            <AboutUsBusiness></AboutUsBusiness>
            {/* aboutUsBusiness section end */}
        </div>
    );
};

export default AboutUs;