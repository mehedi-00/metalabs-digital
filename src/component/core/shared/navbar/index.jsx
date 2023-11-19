import { navbar } from "@/src/constant/navbar";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex justify-between">
            <span>navbar</span>
            <div className="flex gap-x-3">
                {navbar.map((item, index) => <Link key={index} href={item?.link}>{item?.label}</Link>)}
            </div>
        </div>
    );
};

export default Navbar;