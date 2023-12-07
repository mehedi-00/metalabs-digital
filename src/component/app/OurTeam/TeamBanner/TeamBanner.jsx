// import Image from 'next/image';
// import teamBanner from '../../../../../public/ourTeam/ourTeamBanner3.png'

import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { Modal } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const TeamBanner = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bannerBg text-white'>
      <div className='container md:pt-28 pt-40 mx-auto h-[720px] md:h-[620px] w-full' >
        {/* banner section start */}
        <div className='flex ps-3 md:ps-0 flex-col justify-center items-center'
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h1 className='text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase'>from concept to reality</h1>
          <p className='text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold uppercase mt-2 lg:mt-5'>Fusing Creativity With<br></br>Marketing & Technology</p>
          <button className="my-8 uppercase bg-cyan-400 rounded-md px-4 py-3">
            Contact Us
          </button>
        </div>
        <div className="mt-8  flex justify-center cursor-pointer animate-pulse relative ">
          <div className="signal mt-1"></div>
          <PlayCircleOutlineOutlinedIcon
            onClick={handleOpen}
            className="absolute top-1"
            sx={{ fontSize: "100px", color: "white" }}
          />
        </div>
        {/* banner section end */}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-full bg-transparent h-full relative ">
          {/* <video className="w-full h-full" type="video/mp4" src={author?.video?.asset?.url}>

         </video> */}

          <video className="w-full h-[100vh] mx-auto" autoPlay controls >

            <source src='' type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <CloseIcon
            className="cursor-pointer text-white absolute right-2 top-2  md:right-6 md:top-6"
            onClick={handleClose}
            sx={{ fontSize: "50px" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default TeamBanner;