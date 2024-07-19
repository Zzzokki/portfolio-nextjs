"use client";

import { RiMenuLine } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Drawer } from "./Drawer";
import { useState } from "react";
import Link from "next/link";

export const Navbar = ({ toggleTheme, isDark }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="w-full shadow-md dark:shadow-none dark:border-b border-slate-700">
        <div className="w-full m-auto lg:w-[1100px] h-[64px] flex justify-between items-center ">
          <h1 className="text-xl text-[#000] dark:text-[#fff]">Navbar</h1>

          <Link href="#adad">
            <button>Scroll</button>
          </Link>

          <div className="flex gap-6">
            {isDark ? (
              <IconButton onClick={toggleTheme}>
                <CiLight size={24} color={isDark ? "#fff" : "#000"} />
              </IconButton>
            ) : (
              <IconButton onClick={toggleTheme}>
                <CiDark size={24} color={isDark ? "#fff" : "#000"} />
              </IconButton>
            )}

            <IconButton onClick={handleDrawer}>
              <RiMenuLine color={isDark ? "#fff" : "#000"} size={24} />
            </IconButton>
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} closeDrawer={handleDrawer} />
    </>
  );
};

const IconButton = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[40px] h-[40px] rounded-[50%] dark:hover:bg-slate-800 hover:bg-slate-200 flex justify-center items-center"
    >
      {children}
    </div>
  );
};
