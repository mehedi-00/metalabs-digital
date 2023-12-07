
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { Modal } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bannerBg text-white'>
      <div className='container md:pt-40 pt-40 mx-auto h-[720px] md:h-[670px] w-full' >
        {/* banner section start */}
        <div className='flex ps-3 md:ps-0 flex-col justify-center items-center'
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h1 className='text-2xl md:text-7xl font-bold uppercase'>Welcome to meta labs digital</h1>
          <p className="text-xl md:text-3xl font-bold mt-5">Forging innovation through collaborative knowledge exploration</p>
          <div className="flex gap-8">
            <button className="my-10 uppercase bg-cyan-500 font-bold rounded-md px-6 py-3">
              Explore more
            </button>
            <button className="my-10 uppercase text-black font-bold bg-white rounded-md px-6 py-3">
              GET A qoute
            </button>
          </div>
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

export default Banner;