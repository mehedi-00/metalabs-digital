import ContactUs from "../ContactUs";
import Banner from "./Banner";
import Clients from "./Clients";
import FooterForm from "./FooterForm";
import Gallery from "./Gallery";
import Team from "./OurTeam/Team";
import Services from "./Services";



const HomeComponent = () => {
    return (
        <div>
            {/* banner section start */}
            <Banner></Banner>
            {/* banner section banner section end */}

            {/* gallery section start */}
            <Gallery></Gallery>
            {/* gallery section end */}

            {/* services section start */}
            <Services></Services>
            {/* services section end */}

            {/* Team section start */}
            <Team />
            {/* Team section end */}

            {/* clients section start */}
            <Clients></Clients>
            {/* clients section end */}

            {/* contactUs section start */}
            <FooterForm></FooterForm>
            {/* contactUs section end */}
        </div>
    );
};

export default HomeComponent;