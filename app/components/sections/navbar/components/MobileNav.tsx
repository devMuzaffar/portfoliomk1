"use client";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavbarContext } from "@/app/contexts/navbarContext";

const MobileNav = () => {
  const leftPadding = "left-8";
  const rightPadding = "right-8";
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(false);
  const {setIsMobileMenu} = useContext(NavbarContext);

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toggleMenu = () => setIsMobileMenu(true);

  return (
    <div className="sticky w-full mt-4 flex justify-center items-center h-16">

      {/* Icon / Name */}
      <div
        className={`font-bold cursor-pointer text-lg absolute transition-all hover:text-blue-500 ${leftPadding}`}
      >
        <p>DevMuzaffar</p>
      </div>

      {/* Buttons */}
      <div className={`absolute flex gap-4 items-center ${rightPadding}`}>
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

        <HiMenuAlt3 className="cursor-pointer" size={24} onClick={() => toggleMenu()} />
      </div>

    </div>
  );
};

export default MobileNav;
