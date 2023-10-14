import Image from "next/image";
import React from "react";
import {navItems} from "../../../db/constants";
import Logo from "../../../public/images/logo.png";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {FiLogIn} from "react-icons/fi";
import {RxHamburgerMenu} from "react-icons/rx";

interface TopBarProps {
  toggleDrawer: () => void;
}

const TopBar = ({toggleDrawer}: TopBarProps) => {
  const pathName = usePathname();
  return (
    <div className='border-b border-[rgba(0, 0, 0, 0.10)] w-full'>
      <div className='flex w-full px-3 lg:px-10 font-pop py-2 md:py-4 items-center justify-between'>
        <div className='w-8/12 flex'>
          <div className='flex items-center lg:w-5/12'>
            <Link href={"/"}>
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

          <div className='hidden lg:flex items-center w-6/12 ml-auto'>
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className={`font-bold w-4/12 text-center ${
                  pathName === item.path ? "text-primary " : "text-neutral"
                } ${
                  idx !== navItems.length - 1 ? "border-r border-neutral" : ""
                } `}
              >
                <Link href={item.path}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className='hidden lg:flex items-center bg-primary py-1 md:py-3 px-2 lg:px-6 '>
          <p className='pr-3 font-bold text-white'>Get The App</p>
          <FiLogIn className='text-white w-6 h-6' />
        </div>

        <div className='block lg:hidden'>
          <RxHamburgerMenu
            className='w-7 h-7 cursor-pointer'
            onClick={toggleDrawer}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
