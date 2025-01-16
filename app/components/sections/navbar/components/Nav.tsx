"use client";
import { useContext } from "react";
import { NavbarContext } from "@/app/contexts/navbarContext";
import useScrollScan from "@/app/hooks/useScrollScan";
import ToggleMenuButton from "../ui/ToggleMenuButton";
import ToggleThemeButton from "../ui/ToggleThemeButton";

const MobileNav = () => {
  const { isMobileMenu } = useContext(NavbarContext);
  const isScroll = useScrollScan();
  const glassScroll = isScroll
    ? `${isMobileMenu ? "" : "glass-effect shadow-sm "} dark:shadow-gray-800`
    : "";

  return (
    <div
      className={`py-4 px-6 animate sticky w-full flex justify-between items-center sm:px-16 md:py-0 md:h-16 md:px-32 z-0 ${glassScroll}`}
    >
      {/* Icon / Name */}
      <div
        className={`font-bold cursor-pointer text-lg transition-all hover:text-blue-500 md:text-2xl`}
      >
        <a href="#">
          <p>DevMuzaffar</p>
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 items-center">

        {/* Theme Button */}
        <ToggleThemeButton />

        {/* Open Close */}
        <div className="flex justify-start px-2 w-full relative">
        <ToggleMenuButton />
        </div>


      </div>
    </div>
  );
};

export default MobileNav;
