import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { aboutClient } from "@/src/constant/aboutClients";

const AboutClients = () => {

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  };

  return (
    <div className="my-20">
      <div className='container mx-auto'>
        <div className='md:flex justify-between gap-5'>
          <div className='flex-1 ml-3 md:ml-0'>
            <h1 className='text-xl lg:text-3xl font-bold'>Satisfied Clients</h1>
            <p className='text-lg lg:text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, mollitia. Maiores quidem nisi sint? Harum, expedita alias dolorem animi voluptatibus hic quaerat perferendis voluptates. Sapiente?</p>
          </div>
          <div className='shrink-0'>
            <Slider className="w-full mt-10 md:mt-0 lg:w-[700px]" {...settings}>
              {
                aboutClient.map((data, index) => (
                  <div key={index} className="text-center ">
                    <div className=" mx-5 rounded">
                    <img src={data.image} className="w-14 h-14 rounded-full object-cover mx-auto -mb-5"/>
                    <div className="bg-slate-100 py-8 px-4">
                    <h1 className="lg:text-xl font-bold my-3">{data.title}</h1>
                    <p className="text-sm text-gray-500">{data.details}</p>
                    <p className="text-xs my-3 lg:text-sm">{data.persons}</p>
                    </div>
                    </div>
                  </div>
                ))
              }
              </Slider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutClients;