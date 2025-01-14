"use client";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import useScrollScan from "@/app/hooks/useScrollScan";
import menuList from "@/app/list/menuList";

const DesktopNav = () => {
  const leftPadding = "left-32";
  const rightPadding = "right-32";
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(false);
  const isScroll = useScrollScan();
  const glassScroll = isScroll ? "glass-effect bg-white" : "";

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={`animate w-full py-2 flex justify-center items-center h-20 ${glassScroll}`}>
      {/* Icon / Name */}
      <div
        className={`font-bold cursor-pointer text-2xl absolute transition-all hover:text-primary ${leftPadding}`}
      >
        <a href="#hero">
          <p>DevMuzaffar</p>
        </a>
      </div>

      {/* Links */}
      <ul className="text-lg flex gap-5 w-1/2 justify-evenly h-full items-center">
        {menuList.map(({name, link}, index) => (
          <li key={index} className="transition-all relative group">
            <a href={link}>{name}</a>
            <div className={`animate absolute rounded-full w-full h-1 bg-none group-hover:bg-primary`} />
          </li>
        ))}
      </ul>

      {/* Dark Light */}
      <div className={`absolute cursor-pointer ${rightPadding}`}>
        <Classic
          title=""
          toggled={isToggled}
          toggle={setIsToggled}
          className="text-4xl"
          duration={750}
          onToggle={() => toggleTheme()}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerEnter={() => {}}
          onPointerLeaveCapture={() => {}}
          onPointerLeave={() => {}}
        />
      </div>
    </div>
  );
};

export default DesktopNav;
