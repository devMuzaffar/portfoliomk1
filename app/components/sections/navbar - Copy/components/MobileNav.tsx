"use client";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavbarContext } from "@/app/contexts/navbarContext";
import useScrollScan from "@/app/hooks/useScrollScan";

const MobileNav = () => {
  const leftPadding = "left-4 sm:left-16";
  const rightPadding = "right-4 sm:right-16";
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(false);
  const { setIsMobileMenu } = useContext(NavbarContext);
  const isScroll = useScrollScan();

  const glassScroll = isScroll ? "glass-effect" : "";

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toggleMenu = () => setIsMobileMenu(true);

  return (
    <div className={`animate sticky w-full flex justify-between items-center h-16 p-6 ${glassScroll}`}>
      
      {/* Icon / Name */}
      
      <div
        className={`font-bold cursor-pointer text-lg transition-all hover:text-blue-500 ${leftPadding}`}
      >
        <a href="#hero">
        <p>DevMuzaffar</p>
        </a>
      </div>
      

      {/* Buttons */}
      <div className={`flex gap-4 items-center ${rightPadding}`}>
        <Classic
          title=""
          toggled={isToggled}
          toggle={setIsToggled}
          className="text-2xl"
          duration={750}
          onToggle={() => toggleTheme()}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerEnter={() => {}}
          onPointerLeaveCapture={() => {}}
          onPointerLeave={() => {}}
        />

        <HiMenuAlt3
          className="cursor-pointer"
          size={24}
          onClick={() => toggleMenu()}
        />
      </div>
    </div>
  );
};

export default MobileNav;
