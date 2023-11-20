
const Footer = () => {
    return (
        <div className="bg-black py-10">
            {/* footer section start */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="text-center">
                        {/* country section start */}
                        <div className="block sm:flex justify-center gap-8 text-white">
                            <p className="text-xl md:text-2xl">Bangladesh</p>
                            <p className="mt-1 sm:mt-0 text-xl md:text-2xl">Singapore</p>
                            <p className="mt-1 sm:mt-0 text-xl md:text-2xl">Myanmar</p>
                        </div>
                        {/* country section end */}
                        {/* address section start */}
                        <div className="flex justify-center text-white">
                            <p className="mt-2 text-sm sm:text-base md:text-lg">
                            Analyzen Innovation Lab<br></br>
                            Level 1, House 1A, Road 16/A, Gulshan 1<br></br>
                            Dhaka-1212, Bangladesh.
                            </p>
                        </div>
                        {/* address section end */}
                        {/* contact section start */}
                        <div className="block text-white mt-2">
                            <p className="text-sm sm:text-base md:text-lg">
                            <a href="#">+88-01713079712</a>
                            </p>
                            <p className="mt-1 text-sm sm:text-base md:text-lg">
                            <a href="#">mail@analyzenbd.com</a>
                            </p>
                        </div>
                        {/* contact section end */}
                        {/* social section start */}
                        <div className="grid grid-cols-4 md:gap-10 text-white md:w-56 mx-auto w-60 my-5">
                            <p className="bg-white text-black w-10 h-10 rounded-full text-center"><a href="#">one</a></p>
                            <p className="bg-white text-black w-10 h-10 rounded-full text-center"><a href="#">two</a></p>
                            <p className="bg-white text-black w-10 h-10 rounded-full text-center"><a href="#">three</a></p>
                            <p className="bg-white text-black w-10 h-10 rounded-full text-center"><a href="#">four</a></p>
                        </div>
                        {/* social section end */}
                        {/* reserved section start */}
                        <div className="grid grid-cols-1 text-white">
                            <p className="mt-1 text-sm sm:text-base md:text-lg">© 2023  Analyzen. All rights reserved.</p>
                        </div>
                        {/* reserved section end */}
                    </div>
                </div>
            </div>
            {/* footer section end */}
        </div>
    );
};

export default Footer;