"use client";
import { menuInterface } from "@/data/data";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const SidebarCompo = ({item,text,typeHead}: {typeHead:string,item: menuInterface,text:string}) => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
      setOpen(!open);
    };
  
    return (
      <li>
        <Link
          href={item.url}
          onClick={(e) => {
            if (item.submenu) {
              e.preventDefault();
              toggleMenu();
            }
          }}
          className={`flex justify-between border-b items-center px-4 py-4 text-${text} overflow-hidden transition-all duration-600 ${typeHead=="subsub"?"font-light":""}
          ${open ? 'max-h-[600px]  py-4' : 'max-h-8 py-6'}`}
        >
          {item.heading}
          {item.submenu && (
            <span
              className={`transform transition-transform duration-300 ${
                open && "rotate-180"
              }`}
            >
              <FaChevronDown />
            </span>
          )}
        </Link>
        {item.submenu && (
          <ul className={`overflow-hidden transition-all duration-500 ease-in-out  ${open ? 'max-h-[600px]' : 'max-h-0'} bg-gray-100 text-zinc-600`}>
            {item.submenu.map((subItem: menuInterface, index: number) => (
              <SidebarCompo key={index} item={subItem} text={"zinc-900"} typeHead={"subsub"}/>
            ))}
          </ul>
        )}
      </li>
    );
  };

  export default SidebarCompo;