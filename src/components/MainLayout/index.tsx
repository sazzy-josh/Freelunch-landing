import React, {ReactNode, useState} from "react";
import {usePathname} from "next/navigation";
import NavDrawer from "../Drawer/index";
import TopBar from "../TopBar/index";

const MainLayout = ({children}: {children: ReactNode}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleDrawer = (): void => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className='w-full relative h-screen overflow-y-auto'>
      <TopBar toggleDrawer={handleDrawer} />
      <NavDrawer toggleDrawer={handleDrawer} isNavOpen={isNavOpen} />

      {children}
    </div>
  );
};

export default MainLayout;
