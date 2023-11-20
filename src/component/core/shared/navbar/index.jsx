import { navbar } from "@/src/constant/navbar";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {

  





    return (
        <div className="text myImg slideUpd block sm:flex justify-between px-10 absolute h-16 items-center z-5 w-full text-white">
            <span className="md:text-2xl font-bold"><i>Metalabs-Digital</i></span>
            <div className="flex gap-x-4">
                {navbar.map((item, index) => <Link key={index} href={item?.link}>{item?.label}</Link>)}
            </div>
        </div>
    );
};

export default Navbar;