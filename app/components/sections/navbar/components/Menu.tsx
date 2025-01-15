"use client";
import { NavbarContext } from "@/app/contexts/navbarContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import menuList from "@/app/list/menuList";

const MobileMenu = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(NavbarContext);
  const closeMenu = () => setIsMobileMenu(false);

  return (
    <AnimatePresence>
      {isMobileMenu && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-screen absolute inset-0 -z-10 flex justify-end bg-black bg-opacity-35"
          onClick={() => closeMenu()}
        >
          <motion.div
            key="mobile-menu"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white w-1/2 flex flex-col py-4 px-6 h-full absolute dark:bg-primary-dark sm:w-1/3 md:w-1/5"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Links */}
            <ul className="text-lg flex flex-col gap-12 py-8 items-center justify-center h-full sm:px-4 md:text-2xl">
              {menuList.map(({ name, link }, index) => (
                <li
                  key={index}
                  className="transition-all w-auto mr-auto group hover:font-medium"
                  onClick={() => closeMenu()}
                >
                  <a href={link}>{name}</a>
                  <div className="animate w-0 h-1 rounded-full group-hover:w-full group-hover:bg-primary" />
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
