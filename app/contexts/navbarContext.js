"use client";
import { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  // Toggle for Mobile Menu
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  // Toggle for UI Theme
  const [isToggled, setIsToggled] = useState(false);

  return (
    <NavbarContext.Provider
      value={{ isMobileMenu, setIsMobileMenu, isToggled, setIsToggled }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
