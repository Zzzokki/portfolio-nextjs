"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AllBlogs } from "@/components/AllBlogs";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="w-full min-h-[100vh] bg-[#f5f6f5] dark:bg-[#000]">
        <Navbar toggleTheme={handleClick} isDark={isDark} />

        <AllBlogs />

        <div id="adad" className="w-full h-[500px] bg-red-500"></div>
      </div>
    </div>
  );
}
