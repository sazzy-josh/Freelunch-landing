import Image from "next/image";
import React from "react";
import {CgClose} from "react-icons/cg";
import {navItems} from "../../../db/constants";
import Logo from "../../../public/images/logo.png";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface NavDrawerProps {
  toggleDrawer: () => void;
  isNavOpen: boolean;
}

const NavDrawer = ({toggleDrawer, isNavOpen}: NavDrawerProps) => {
  const pathName = usePathname();
  return (
    <div
      className={`fixed lg:hidden inset-0 bg-black bg-opacity-75 z-50 transition-all ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className='h-screen top-0 flex'>
        <div className='bg-white w-8/12 md:w-6/12 p-4 h-full z-50'>
          <div className='flex items-center lg:w-5/12'>
            <Link href='/'>
              <Image
                src={Logo}
                alt='logo'
                className='w-12 sm:w-16 md:h-15 md:w-20 md:h-20 object-contain'
              />
            </Link>

            <h2 className='hidden md:flex text-lg md:text-2xl lg:text-3xl  font-stapel font-black text-primary leading-normal '>
              Free Lunch
            </h2>
          </div>

          <div className='bg-primary w-8 h-8 md:w-9 md:h-9 absolute top-4 md:top-8 rounded-full right-3 flex items-center justify-center'>
            <CgClose
              className='right-5 w-5 h-5 md:w-7 md:h-7 text-white'
              onClick={toggleDrawer}
            />
          </div>

          <div className='flex flex-col justify-between h-56 items-center mt-20 '>
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className={`font-bold w-4/12 text-center ${
                  pathName === item.path
                    ? "text-primary border-b border-primary "
                    : "text-neutral"
                }  `}
              >
                <Link href={item.path}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
