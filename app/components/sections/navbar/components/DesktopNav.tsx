"use client";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useState } from "react";

const DesktopNav = () => {
  const leftPadding = "left-8";
  const rightPadding = "right-8";
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(true);

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="w-full mt-4 flex justify-center items-center h-16">
      {/* Icon / Name */}
      <div
        className={`font-bold cursor-pointer text-2xl absolute transition-all hover:text-primary ${leftPadding}`}
      >
        <p>DevMuzaffar</p>
      </div>

      {/* Links */}
      <ul className="border-2 text-lg flex gap-5 w-1/2 justify-evenly h-full items-center rounded-full bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-40">
        {["Home", "Projects", "Blogs", "Contact"].map((text, index) => (
          <li key={index} className="transition-all hover:font-semibold">
            <a href="">{text}</a>
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
