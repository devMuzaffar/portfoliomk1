"use client";
import { NavbarContext } from "@/app/contexts/navbarContext";
import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import menuList from "@/app/list/menuList";

const MobileMenu = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(NavbarContext);
  const closeMenu = () => setIsMobileMenu(false);

  return (
    <AnimatePresence>
      {isMobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-screen absolute z-50 inset-0 flex justify-end bg-black bg-opacity-35"
          onClick={() => closeMenu()}
        >
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white w-1/2 flex flex-col py-6 px-6 h-full absolute dark:bg-primary-dark sm:w-1/3 md:w-1/5"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex justify-end -mr-1 sm:mr-9 md:mr-[105px]">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                exit={{ rotate: 360 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <HiOutlineX
                  className="cursor-pointer text-3xl md:text-4xl"
                  onClick={() => closeMenu()}
                />
              </motion.div>
            </div>

            {/* Links */}
            <ul className="text-lg flex flex-col gap-12 py-8 items-center h-full sm:px-4 md:text-3xl">
              {menuList.map(({ name, link }, index) => (
                <li
                  key={index}
                  className="transition-all text-left w-full hover:font-medium"
                  onClick={() => closeMenu()}
                >
                  <a href={link}>{name}</a>
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
