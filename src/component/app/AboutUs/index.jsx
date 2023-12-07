import React from 'react';
import AboutUsBanner from './AboutUsBanner';
import DreamDigital from './DreamDigital';
import AboutTeam from './AboutTeam';
import AboutWorks from './AboutWorks';
import AboutClients from './AboutClients';

const AboutUs = () => {
    return (
        <div>
            {/* aboutUseBanner section start */}
            <AboutUsBanner></AboutUsBanner>
            {/* aboutUseBanner section end */}
            {/* DreamDigital section start */}
            <DreamDigital></DreamDigital>
            {/* DreamDigital section end */}
            {/* aboutTeam section start */}
            <AboutTeam></AboutTeam>
            {/* aboutTeam section end */}
            {/* aboutWorks section start */}
            <AboutWorks></AboutWorks>
            {/* aboutWorks section end */}
            {/* aboutClients section start */}
            <AboutClients></AboutClients>
            {/* aboutClients section end */}
        </div>
    );
};

export default AboutUs;