import Logo from "@/app/logo.png";
import menu from "../../data/data";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { PiHeadsetBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import SidebarCompo from "./Items";



const Sidebar = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="flex justify-between p-2  border-b border-zinc-500">
        <Image
          alt="logo"
          width="50"
          height="50"
          src={Logo.src}
        />

        <div className="flex gap-x-3 justify-center items-center">
          <button
            type="button"
            className="text-green-600 bg-white border border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Log In
          </button>
          <PiHeadsetBold size={25} className="text-zinc-500"/>
          <IoSearchOutline size={25} className="text-zinc-500"/>
          <RxCross1 size={25} className="mr-2 text-zinc-500"/>
        </div>
      </div>

      <nav className="w-full bg-white rounded-lg">
        <div className="w-full flex justify-center items-center">
          <button className="bg-green-600 px-6 py-3 text-white rounded-full my-3">
                Open Demat Account
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {menu.map((item, index) => (
            <SidebarCompo key={index} item={item} text="black" typeHead="sub"/>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
